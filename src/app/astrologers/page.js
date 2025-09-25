"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Star, StarBorder, Sort, Close, TrendingUp, AttachMoney, Grade, Tune } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AstrologerCard from "@/components/astrologer-card"
import Image from "next/image"

export default function AstrologersPage() {
  const [astrologers, setAstrologers] = useState([])
  const [filteredAstrologers, setFilteredAstrologers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [minRating, setMinRating] = useState("")
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [experienceYears, setExperienceYears] = useState("")
  const [languages, setLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const specialties = [
    "Vedic Astrology",
    "Tarot Reading",
    "Numerology",
    "Palmistry",
    "Vastu Shastra",
    "Gemology",
    "Sound Healing",
    "Meditation",
    "Rudraksha Consultation",
    "Puja Rituals",
  ]

  useEffect(() => {
    fetchAstrologers()
  }, [])

  useEffect(() => {
    filterAndSortAstrologers()
  }, [astrologers, searchTerm, selectedSpecialty, minRating, sortBy, priceRange, experienceYears, selectedLanguages])

  const fetchAstrologers = async () => {
    try {
      setLoading(true)
      // Simulate API delay for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const response = await fetch("/api/astrologers")
      if (response.ok) {
        const data = await response.json()
        setAstrologers(data)

        // Extract all languages from astrologers
        const allLanguages = [...new Set(data.flatMap((a) => a.languages || []))]
        setLanguages(allLanguages)
      }
    } catch (error) {
      console.error("Error fetching astrologers:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortAstrologers = () => {
    let filtered = [...astrologers]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (astrologer) =>
          astrologer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          astrologer.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Specialty filter
    if (selectedSpecialty) {
      filtered = filtered.filter((astrologer) => astrologer.specialties.includes(selectedSpecialty))
    }

    // Rating filter
    if (minRating) {
      filtered = filtered.filter((astrologer) => astrologer.rating >= Number.parseFloat(minRating))
    }

    // Price range filter
    filtered = filtered.filter(
      (astrologer) => astrologer.hourlyRate >= priceRange[0] && astrologer.hourlyRate <= priceRange[1],
    )

    // Experience filter
    if (experienceYears) {
      const minExperience = Number.parseInt(experienceYears)
      filtered = filtered.filter((astrologer) => astrologer.experience >= minExperience)
    }

    // Languages filter
    if (selectedLanguages.length > 0) {
      filtered = filtered.filter((astrologer) => selectedLanguages.every((lang) => astrologer.languages.includes(lang)))
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "experience":
          return b.experience - a.experience
        case "price-low":
          return a.hourlyRate - b.hourlyRate
        case "price-high":
          return b.hourlyRate - a.hourlyRate
        case "popularity":
          return b.reviewCount - a.reviewCount
        default:
          return 0
      }
    })

    setFilteredAstrologers(filtered)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedSpecialty("")
    setMinRating("")
    setPriceRange([0, 5000])
    setExperienceYears("")
    setSelectedLanguages([])
    setSortBy("rating")
  }

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) => (prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]))
  }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAstrologers.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredAstrologers.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Skeleton loader for astrologer cards
  const AstrologerCardSkeleton = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border h-full animate-pulse">
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 rounded-full bg-gray-200"></div>
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-6 bg-gray-200 rounded w-14"></div>
        </div>
      </div>
      <div className="px-6 pb-4">
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div className="px-6 pb-4">
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="p-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-10 bg-gray-200 rounded flex-1"></div>
          <div className="h-10 bg-gray-200 rounded flex-1"></div>
        </div>
      </div>
    </div>
  )

  // Empty state illustration
  const EmptyState = () => (
    <div className="text-center py-16">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <Image
          src="/placeholder.svg?height=192&width=192"
          alt="No astrologers found"
          width={192}
          height={192}
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">No astrologers found</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        We couldn t find any astrologers matching your current filters. Try adjusting your search criteria or explore
        our full directory.
      </p>
      <button
        onClick={resetFilters}
        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-md"
      >
        Clear All Filters
      </button>
    </div>
  )

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/placeholder.svg?height=400&width=1920"
                alt="Cosmic background"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Astrologer</h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Connect with verified and experienced astrologers who can guide you on your spiritual journey
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  className="relative max-w-xl w-full mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by name, specialty, or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
className="w-full pl-12 pr-4 py-4 border border-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-white text-white"

                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/4 hidden lg:block"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-border sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button
                      onClick={resetFilters}
                      className="text-sm text-orange-600 hover:text-orange-800 font-medium"
                    >
                      Reset All
                    </button>
                  </div>

                  {/* Specialty Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-gray-700">Specialty</h3>
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    >
                      <option value="">All Specialties</option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rating Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-gray-700">Minimum Rating</h3>
                    <div className="flex flex-col gap-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <label key={rating} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="rating"
                            value={rating}
                            checked={minRating === rating.toString()}
                            onChange={() => setMinRating(rating.toString())}
                            className="mr-2 accent-orange-500"
                          />
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) =>
                              i < rating ? (
                                <Star key={i} className="h-4 w-4 text-yellow-500" />
                              ) : (
                                <StarBorder key={i} className="h-4 w-4 text-gray-300" />
                              ),
                            )}
                            <span className="ml-2 text-sm">& Up</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-gray-700">Price Range (₹/hour)</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">₹{priceRange[0]}</span>
                      <span className="text-sm">₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                      className="w-full accent-orange-500"
                    />
                  </div>

                  {/* Experience Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-gray-700">Experience (Years)</h3>
                    <select
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    >
                      <option value="">Any Experience</option>
                      <option value="1">1+ Years</option>
                      <option value="3">3+ Years</option>
                      <option value="5">5+ Years</option>
                      <option value="10">10+ Years</option>
                      <option value="15">15+ Years</option>
                      <option value="20">20+ Years</option>
                    </select>
                  </div>

                  {/* Languages Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold mb-3 text-gray-700">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((language) => (
                        <button
                          key={language}
                          onClick={() => toggleLanguage(language)}
                          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                            selectedLanguages.includes(language)
                              ? "bg-orange-500 text-white border-orange-500"
                              : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
                          }`}
                        >
                          {language}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Filters Button */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-border rounded-lg shadow-sm text-gray-700 font-medium"
                >
                  <Tune className="h-5 w-5" />
                  Filters & Sort
                </button>
              </div>

              {/* Mobile Filters Modal */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end lg:hidden"
                    onClick={() => setShowFilters(false)}
                  >
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="bg-white w-full rounded-t-xl p-6 max-h-[90vh] overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">Filters & Sort</h2>
                        <button onClick={() => setShowFilters(false)}>
                          <Close className="h-6 w-6 text-gray-500" />
                        </button>
                      </div>

                      {/* Sort Options */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-gray-700">Sort By</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { value: "rating", label: "Highest Rated", icon: <Grade className="h-4 w-4" /> },
                            {
                              value: "experience",
                              label: "Most Experienced",
                              icon: <TrendingUp className="h-4 w-4" />,
                            },
                            {
                              value: "price-low",
                              label: "Price: Low to High",
                              icon: <AttachMoney className="h-4 w-4" />,
                            },
                            {
                              value: "price-high",
                              label: "Price: High to Low",
                              icon: <AttachMoney className="h-4 w-4" />,
                            },
                            { value: "popularity", label: "Most Popular", icon: <Star className="h-4 w-4" /> },
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => setSortBy(option.value)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                                sortBy === option.value
                                  ? "bg-orange-500 text-white border-orange-500"
                                  : "bg-white text-gray-700 border-gray-300"
                              }`}
                            >
                              {option.icon}
                              <span className="text-sm">{option.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Filters - Same as desktop but in modal */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-gray-700">Specialty</h3>
                        <select
                          value={selectedSpecialty}
                          onChange={(e) => setSelectedSpecialty(e.target.value)}
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">All Specialties</option>
                          {specialties.map((specialty) => (
                            <option key={specialty} value={specialty}>
                              {specialty}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Rating Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-gray-700">Minimum Rating</h3>
                        <div className="flex flex-col gap-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <label key={rating} className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="mobile-rating"
                                value={rating}
                                checked={minRating === rating.toString()}
                                onChange={() => setMinRating(rating.toString())}
                                className="mr-2 accent-orange-500"
                              />
                              <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) =>
                                  i < rating ? (
                                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                                  ) : (
                                    <StarBorder key={i} className="h-4 w-4 text-gray-300" />
                                  ),
                                )}
                                <span className="ml-2 text-sm">& Up</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Price Range Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-gray-700">Price Range (₹/hour)</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">₹{priceRange[0]}</span>
                          <span className="text-sm">₹{priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          step="100"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                          className="w-full accent-orange-500"
                        />
                      </div>

                      {/* Experience Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-gray-700">Experience (Years)</h3>
                        <select
                          value={experienceYears}
                          onChange={(e) => setExperienceYears(e.target.value)}
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Any Experience</option>
                          <option value="1">1+ Years</option>
                          <option value="3">3+ Years</option>
                          <option value="5">5+ Years</option>
                          <option value="10">10+ Years</option>
                          <option value="15">15+ Years</option>
                          <option value="20">20+ Years</option>
                        </select>
                      </div>

                      {/* Languages Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-gray-700">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {languages.map((language) => (
                            <button
                              key={language}
                              onClick={() => toggleLanguage(language)}
                              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                                selectedLanguages.includes(language)
                                  ? "bg-orange-500 text-white border-orange-500"
                                  : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
                              }`}
                            >
                              {language}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={resetFilters}
                          className="flex-1 py-3 border border-gray-300 rounded-lg font-medium"
                        >
                          Reset All
                        </button>
                        <button
                          onClick={() => setShowFilters(false)}
                          className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full lg:w-3/4"
              >
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {filteredAstrologers.length} Astrologer{filteredAstrologers.length !== 1 ? "s" : ""} Found
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredAstrologers.length)} of{" "}
                      {filteredAstrologers.length} results
                    </p>
                  </div>

                  {/* Desktop Sort */}
                  <div className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-border">
                    <Sort className="h-5 w-5 text-gray-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border-none bg-transparent focus:outline-none text-sm"
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="experience">Most Experienced</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="popularity">Most Popular</option>
                    </select>
                  </div>
                </div>

                {/* Loading State */}
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <AstrologerCardSkeleton key={index} />
                    ))}
                  </div>
                ) : filteredAstrologers.length > 0 ? (
                  <>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <AnimatePresence>
                        {currentItems.map((astrologer, index) => (
                          <motion.div
                            key={astrologer.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            layout
                          >
                            <AstrologerCard astrologer={astrologer} />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-12">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => paginate(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 disabled:opacity-50"
                          >
                            &laquo;
                          </button>

                          {Array.from({ length: totalPages }).map((_, index) => {
                            const pageNumber = index + 1
                            // Show current page, first, last, and pages around current
                            if (
                              pageNumber === 1 ||
                              pageNumber === totalPages ||
                              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                              return (
                                <button
                                  key={pageNumber}
                                  onClick={() => paginate(pageNumber)}
                                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                                    currentPage === pageNumber
                                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                                      : "border border-gray-300 hover:bg-gray-50"
                                  }`}
                                >
                                  {pageNumber}
                                </button>
                              )
                            } else if (
                              (pageNumber === currentPage - 2 && currentPage > 3) ||
                              (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                            ) {
                              return <span key={pageNumber}>...</span>
                            }
                            return null
                          })}

                          <button
                            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 disabled:opacity-50"
                          >
                            &raquo;
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <EmptyState />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
