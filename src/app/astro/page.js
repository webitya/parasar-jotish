"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Search,
  Star,
  FilterList,
  Clear,
  Language,
  School,
  Link as LinkIcon,
  NavigateBefore,
  NavigateNext,
  StarBorder,
  Verified,
  Close,
  Tune,
} from "@mui/icons-material"

export default function AstroPage() {
  const [astrologers, setAstrologers] = useState([])
  const [allAstrologers, setAllAstrologers] = useState([])
  const [filteredAstrologers, setFilteredAstrologers] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const limit = 9

  const [filters, setFilters] = useState({
    name: "",
    rating: "",
    minPrice: "",
    maxPrice: "",
    expertise: "",
    language: "",
  })

  useEffect(() => {
    const fetchAllAstrologers = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/astro?page=1&limit=1000`)
        const data = await res.json()
        setAllAstrologers(data.astrologers)
        setFilteredAstrologers(data.astrologers)
        setTotal(data.total)
      } catch (error) {
        console.error("Error fetching astrologers:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchAllAstrologers()
  }, [])

  useEffect(() => {
    let filtered = [...allAstrologers]
    if (filters.name)
      filtered = filtered.filter((astro) => astro.name.toLowerCase().includes(filters.name.toLowerCase()))
    if (filters.rating) filtered = filtered.filter((astro) => astro.rating >= Number.parseInt(filters.rating))
    if (filters.minPrice) filtered = filtered.filter((astro) => astro.fees >= Number.parseInt(filters.minPrice))
    if (filters.maxPrice) filtered = filtered.filter((astro) => astro.fees <= Number.parseInt(filters.maxPrice))
    if (filters.expertise)
      filtered = filtered.filter((astro) => astro.expertise.toLowerCase().includes(filters.expertise.toLowerCase()))
    if (filters.language)
      filtered = filtered.filter((astro) =>
        Array.isArray(astro.language) ? astro.language.includes(filters.language) : astro.language === filters.language,
      )

    setFilteredAstrologers(filtered)
    setPage(1)
  }, [filters, allAstrologers])

  useEffect(() => {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    setAstrologers(filteredAstrologers.slice(startIndex, endIndex))
  }, [page, filteredAstrologers])

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }))
    setPage(1)
  }

  const clearFilters = () => {
    setFilters({
      name: "",
      rating: "",
      minPrice: "",
      maxPrice: "",
      expertise: "",
      language: "",
    })
    setPage(1)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="text-amber-400 text-sm" />)
    }

    if (hasHalfStar) {
      stars.push(<StarBorder key="half" className="text-amber-400 text-sm" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarBorder key={`empty-${i}`} className="text-gray-200 text-sm" />)
    }

    return stars
  }

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter((value) => value !== "").length
  }

  const totalPages = Math.ceil(filteredAstrologers.length / limit)

  // Smaller Rupee Icon Component
  const RupeeIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.66 7H16V5H13.66C13.36 3.85 12.28 3 11 3H5V5H11C11.55 5 12 5.45 12 6S11.55 7 11 7H5V9H11C12.1 9 13 9.9 13 11S12.1 13 11 13H8.5L13.5 18H15.5L10.5 13H11C13.21 13 15 11.21 15 9C15 8.28 14.78 7.61 14.41 7.06L13.66 7Z" />
    </svg>
  )

  // Filter Component (reusable for both desktop and mobile)
  const FilterContent = ({ isMobile = false }) => (
    <div className="space-y-4">
      {/* Search by Name */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <Search className="mr-2 text-slate-400" fontSize="small" />
          Search by Name
        </label>
        <div className="relative">
          <input
            type="text"
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
            placeholder="Enter astrologer name..."
            className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm shadow-sm"
          />
          <Search className="absolute left-3 top-3 text-slate-400" fontSize="small" />
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <Star className="mr-2 text-amber-400" fontSize="small" />
          Minimum Rating
        </label>
        <select
          value={filters.rating}
          onChange={(e) => handleFilterChange("rating", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm shadow-sm"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="1">1+ Stars</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <RupeeIcon className="mr-2 text-emerald-500 w-4 h-4" />
          Price Range (₹)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            placeholder="Min"
            className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm shadow-sm"
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            placeholder="Max"
            className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Expertise */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <School className="mr-2 text-violet-400" fontSize="small" />
          Expertise
        </label>
        <select
          value={filters.expertise}
          onChange={(e) => handleFilterChange("expertise", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm shadow-sm"
        >
          <option value="">All Specializations</option>
          <option value="vedic">Vedic Astrology</option>
          <option value="numerology">Numerology</option>
          <option value="tarot">Tarot Reading</option>
          <option value="palmistry">Palmistry</option>
          <option value="vastu">Vastu Shastra</option>
          <option value="gemology">Gemology</option>
          <option value="horoscope">Horoscope</option>
        </select>
      </div>

      {/* Language */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <Language className="mr-2 text-sky-400" fontSize="small" />
          Language
        </label>
        <select
          value={filters.language}
          onChange={(e) => handleFilterChange("language", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm shadow-sm"
        >
          <option value="">All Languages</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Bengali">Bengali</option>
        </select>
      </div>

      <button
        onClick={clearFilters}
        className="w-full flex items-center justify-center py-2.5 mt-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg font-medium text-sm shadow-lg backdrop-blur-sm"
      >
        <Clear className="mr-2" fontSize="small" />
        Clear All Filters
      </button>

      {isMobile && (
        <button
          onClick={() => setShowMobileFilters(false)}
          className="w-full flex items-center justify-center py-2.5 mt-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-medium text-sm shadow-lg backdrop-blur-sm"
        >
          Apply Filters
        </button>
      )}
    </div>
  )

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading astrologers...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 pb-12 min-h-screen bg-slate-50">
        {/* Light Header */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200 py-8 mb-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Find Your Perfect Astrologer</h1>
            <p className="text-slate-600 text-sm md:text-base">Connect with experienced and verified astrologers</p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <Verified className="text-emerald-500 text-sm" />
              <span className="text-emerald-600 text-sm font-medium">All astrologers are verified professionals</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Desktop Sidebar - Hidden on mobile */}
            <div className="hidden lg:block w-64 xl:w-72">
              <div className="bg-white rounded-lg border border-slate-200 p-4 sticky top-20 shadow-sm">
                <div className="flex items-center mb-4">
                  <FilterList className="text-blue-500 mr-2" fontSize="small" />
                  <h3 className="font-semibold text-slate-800">Filters</h3>
                </div>
                <FilterContent />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-slate-800">
                    {filteredAstrologers.length} Astrologers Found
                  </h2>
                  <p className="text-slate-600 text-sm">Choose from our verified professionals</p>
                </div>
              </div>

              {astrologers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {astrologers.map((astro) => (
                    <div key={astro._id} className="bg-white rounded-lg border border-slate-200 p-4 md:p-5 shadow-sm">
                      <div className="relative mb-3">
                        <img
                          src={astro.image || "/placeholder.svg?height=200&width=200&query=astrologer"}
                          alt={astro.name}
                          className="w-full h-36 md:h-40 object-cover rounded-lg bg-slate-100"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                          <Verified className="text-emerald-500" fontSize="small" />
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <h3 className="font-semibold text-slate-800 text-base md:text-lg">{astro.name}</h3>
                        <div className="flex items-center space-x-1">
                          {renderStars(astro.rating)}
                          <span className="text-xs text-slate-500 ml-1">({astro.rating})</span>
                        </div>
                        <div className="space-y-1.5 text-sm">
                          <div className="flex items-center text-slate-600">
                            <School className="mr-2 text-violet-400 flex-shrink-0" fontSize="small" />
                            <span className="truncate">{astro.expertise}</span>
                          </div>
                          <div className="flex items-center text-slate-600">
                            <Language className="mr-2 text-sky-400 flex-shrink-0" fontSize="small" />
                            <span className="truncate">{astro.language}</span>
                          </div>
                          <div className="flex items-center text-slate-700">
                            <RupeeIcon className="mr-2 text-emerald-500 w-4 h-4 flex-shrink-0" />
                            <span className="font-semibold">₹{astro.fees}/session</span>
                          </div>
                        </div>
                        {astro.sociallink && (
                          <a
                            href={astro.sociallink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full mt-3 px-4 py-2.5 bg-blue-500 text-white font-medium rounded-lg text-sm"
                          >
                            <LinkIcon className="mr-2" fontSize="small" />
                            Connect Now
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-white rounded-lg border border-slate-200 p-8 max-w-md mx-auto shadow-sm">
                    <Search className="text-slate-300 text-5xl mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">No Astrologers Found</h3>
                    <p className="text-slate-500 mb-4 text-sm">Try adjusting your filters to see more results</p>
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-sm"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}

              {/* Pagination */}
              {astrologers.length > 0 && totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => {
                      setPage((p) => Math.max(1, p - 1))
                      scrollToTop()
                    }}
                    disabled={page === 1}
                    className="flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    <NavigateBefore className="mr-1" fontSize="small" />
                    Previous
                  </button>
                  <div className="flex items-center space-x-1">
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      const pageNum = i + 1
                      return (
                        <button
                          key={pageNum}
                          onClick={() => {
                            setPage(pageNum)
                            scrollToTop()
                          }}
                          className={`w-8 h-8 rounded-lg font-medium text-sm ${
                            page === pageNum
                              ? "bg-blue-500 text-white"
                              : "bg-white text-slate-700 border border-slate-200"
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setPage((p) => Math.min(totalPages, p + 1))
                      scrollToTop()
                    }}
                    disabled={page === totalPages}
                    className="flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Next
                    <NavigateNext className="ml-1" fontSize="small" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-full flex items-center justify-center py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg"
          >
            <Tune className="mr-2" fontSize="small" />
            Filters
            {getActiveFiltersCount() > 0 && (
              <span className="ml-2 bg-white text-blue-500 px-2 py-1 rounded-full text-xs font-bold">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Filter Modal with Glassmorphism */}
        <AnimatePresence>
          {showMobileFilters && (
            <>
              {/* Glassmorphism Backdrop */}
              <div
                className="lg:hidden fixed inset-0 bg-white/20 backdrop-blur-md z-50"
                onClick={() => setShowMobileFilters(false)}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              />
              {/* Modal with Glassmorphism */}
              <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl rounded-t-2xl shadow-2xl z-50 max-h-[85vh] overflow-hidden border-t border-white/30">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/50 backdrop-blur-sm">
                  <div className="flex items-center">
                    <FilterList className="text-blue-500 mr-2" fontSize="small" />
                    <h3 className="font-semibold text-slate-800">Filter Astrologers</h3>
                  </div>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 rounded-lg bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
                  >
                    <Close className="text-slate-500" fontSize="small" />
                  </button>
                </div>
                {/* Modal Content */}
                <div className="p-4 overflow-y-auto max-h-[calc(85vh-80px)] bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm">
                  <FilterContent isMobile={true} />
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}
