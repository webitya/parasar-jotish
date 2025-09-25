"use client"

import { useState, useEffect } from "react"
import { products, categories, brands, priceRanges } from "../../components/Data/products"
import {
  Search,
  FilterList,
  Star,
  StarBorder,
  ShoppingCart,
  Favorite,
  FavoriteBorder,
  Close,
  Clear,
  Tune,
  LocalOffer,
  Inventory,
  Menu,
} from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ShopPage() {
  const [allProducts, setAllProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [displayProducts, setDisplayProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const limit = 12

  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: "",
    rating: "",
    inStock: false,
    onSale: false,
  })

  // Apply filters and search
  useEffect(() => {
    let filtered = [...allProducts]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand)
    }

    // Price range filter
    if (filters.priceRange) {
      const range = priceRanges.find((r) => r.label === filters.priceRange)
      if (range) {
        filtered = filtered.filter((product) => product.price >= range.min && product.price <= range.max)
      }
    }

    // Rating filter
    if (filters.rating) {
      filtered = filtered.filter((product) => product.rating >= Number.parseFloat(filters.rating))
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // Sale filter
    if (filters.onSale) {
      filtered = filtered.filter((product) => product.discount > 0)
    }

    setFilteredProducts(filtered)
    setPage(1)
  }, [searchQuery, filters, allProducts])

  // Pagination
  useEffect(() => {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    setDisplayProducts(filteredProducts.slice(startIndex, endIndex))
  }, [page, filteredProducts])

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }))
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      brand: "",
      priceRange: "",
      rating: "",
      inStock: false,
      onSale: false,
    })
    setSearchQuery("")
  }

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
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
      stars.push(<StarBorder key={`empty-${i}`} className="text-gray-300 text-sm" />)
    }

    return stars
  }

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter((value) => value !== "" && value !== false).length + (searchQuery ? 1 : 0)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const totalPages = Math.ceil(filteredProducts.length / limit)

  // Rupee Icon Component
  const RupeeIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.66 7H16V5H13.66C13.36 3.85 12.28 3 11 3H5V5H11C11.55 5 12 5.45 12 6S11.55 7 11 7H5V9H11C12.1 9 13 9.9 13 11S12.1 13 11 13H8.5L13.5 18H15.5L10.5 13H11C13.21 13 15 11.21 15 9C15 8.28 14.78 7.61 14.41 7.06L13.66 7Z" />
    </svg>
  )

  // Filter Content Component
  const FilterContent = ({ isMobile = false }) => (
    <div className="space-y-4">
      {/* Search */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <Search className="mr-2 text-slate-400" fontSize="small" />
          Search Products
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-2.5 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
          />
          <Search className="absolute left-3 top-3 text-slate-400" fontSize="small" />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <Menu className="mr-2 text-slate-400" fontSize="small" />
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <LocalOffer className="mr-2 text-slate-400" fontSize="small" />
          Brand
        </label>
        <select
          value={filters.brand}
          onChange={(e) => handleFilterChange("brand", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <RupeeIcon className="mr-2 text-emerald-500 w-4 h-4" />
          Price Range
        </label>
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
        >
          <option value="">All Prices</option>
          {priceRanges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Rating */}
      <div>
        <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
          <Star className="mr-2 text-amber-400" fontSize="small" />
          Minimum Rating
        </label>
        <select
          value={filters.rating}
          onChange={(e) => handleFilterChange("rating", e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
        >
          <option value="">All Ratings</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.0">4.0+ Stars</option>
          <option value="3.5">3.5+ Stars</option>
          <option value="3.0">3.0+ Stars</option>
        </select>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => handleFilterChange("inStock", e.target.checked)}
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
          />
          <Inventory className="text-green-500" fontSize="small" />
          <span className="text-sm text-slate-700">In Stock Only</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.onSale}
            onChange={(e) => handleFilterChange("onSale", e.target.checked)}
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
          />
          <LocalOffer className="text-red-500" fontSize="small" />
          <span className="text-sm text-slate-700">On Sale</span>
        </label>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full flex items-center justify-center py-2.5 mt-4 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-lg font-medium text-sm shadow-sm"
      >
        <Clear className="mr-2" fontSize="small" />
        Clear All Filters
      </button>

      {isMobile && (
        <button
          onClick={() => setShowFilters(false)}
          className="w-full flex items-center justify-center py-2.5 mt-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-medium text-sm shadow-sm"
        >
          Apply Filters
        </button>
      )}
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Shop</h1>
                <p className="text-slate-600 text-sm">{filteredProducts.length} products found</p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-80 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
                  />
                  <Search className="absolute left-3 top-2.5 text-slate-400" fontSize="small" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-72">
              <div className="bg-white rounded-lg border border-slate-200 p-4 sticky top-24">
                <div className="flex items-center mb-4">
                  <FilterList className="text-blue-500 mr-2" fontSize="small" />
                  <h3 className="font-semibold text-slate-800">Filters</h3>
                  {getActiveFiltersCount() > 0 && (
                    <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {getActiveFiltersCount()}
                    </span>
                  )}
                </div>
                <FilterContent />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Search */}
              <div className="md:hidden mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm"
                  />
                  <Search className="absolute left-3 top-3.5 text-slate-400" fontSize="small" />
                </div>
              </div>

              {/* Products Grid */}
              {displayProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                  {displayProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square bg-slate-100">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.discount > 0 && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                              -{product.discount}%
                            </span>
                          )}
                          {!product.inStock && (
                            <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">
                              Out of Stock
                            </span>
                          )}
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          {favorites.includes(product.id) ? (
                            <Favorite className="text-red-500" fontSize="small" />
                          ) : (
                            <FavoriteBorder className="text-slate-400" fontSize="small" />
                          )}
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <div className="mb-2">
                          <p className="text-xs text-slate-500 mb-1">{product.brand}</p>
                          <h3 className="font-semibold text-slate-800 text-sm line-clamp-2 mb-2">{product.name}</h3>
                          <p className="text-xs text-slate-600 line-clamp-2 mb-3">{product.shortDescription}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-3">
                          <div className="flex items-center">{renderStars(product.rating)}</div>
                          <span className="text-xs text-slate-500">({product.reviews})</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            <RupeeIcon className="text-slate-700 w-4 h-4" />
                            <span className="font-bold text-slate-800">{product.price.toLocaleString()}</span>
                          </div>
                          {product.originalPrice > product.price && (
                            <div className="flex items-center">
                              <RupeeIcon className="text-slate-400 w-3 h-3" />
                              <span className="text-slate-400 line-through text-sm">
                                {product.originalPrice.toLocaleString()}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Buy Now Button */}
                        <a
                          href={product.buyNowLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full flex items-center justify-center py-2.5 font-medium rounded-lg text-sm transition-colors ${
                            product.inStock
                              ? "bg-green-600 text-white hover:bg-green-700"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                          }`}
                        >
                          <ShoppingCart className="mr-2" fontSize="small" />
                          {product.inStock ? "Buy Now" : "Out of Stock"}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-white rounded-lg border border-slate-200 p-8 max-w-md mx-auto">
                    <Search className="text-slate-300 text-5xl mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">No Products Found</h3>
                    <p className="text-slate-500 mb-4 text-sm">Try adjusting your filters or search terms</p>
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
              {displayProducts.length > 0 && totalPages > 1 && (
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => {
                      setPage((p) => Math.max(1, p - 1))
                      scrollToTop()
                    }}
                    disabled={page === 1}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Previous
                  </button>

                  <div className="flex space-x-1">
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      const pageNum = i + 1
                      return (
                        <button
                          key={pageNum}
                          onClick={() => {
                            setPage(pageNum)
                            scrollToTop()
                          }}
                          className={`w-10 h-10 rounded-lg font-medium text-sm ${
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
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
          <button
            onClick={() => setShowFilters(true)}
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

        {/* Mobile Filter Modal */}
        {showFilters && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowFilters(false)}
            />
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[85vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <div className="flex items-center">
                  <FilterList className="text-blue-500 mr-2" fontSize="small" />
                  <h3 className="font-semibold text-slate-800">Filter Products</h3>
                </div>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Close className="text-slate-500" fontSize="small" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(85vh-80px)]">
                <FilterContent isMobile={true} />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
