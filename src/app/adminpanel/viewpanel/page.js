"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AdminLayout from "@/components/adminlayout/main"
import { Person, Star, Language, Schedule, School, RateReview, Info } from "@mui/icons-material"

export default function ViewAstrologersPage() {
  const [astrologers, setAstrologers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAstrologers = async () => {
      try {
        setLoading(true)
        const res = await fetch("/api/viewastrologers")
        const data = await res.json()
        setAstrologers(data)
      } catch (err) {
        console.error("Failed to fetch astrologers:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchAstrologers()
  }, [])

  // Custom Rupee Icon Component
  const RupeeIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.66 7H16V5H13.66C13.36 3.85 12.28 3 11 3H5V5H11C11.55 5 12 5.45 12 6S11.55 7 11 7H5V9H11C12.1 9 13 9.9 13 11S12.1 13 11 13H8.5L13.5 18H15.5L10.5 13H11C13.21 13 15 11.21 15 9C15 8.28 14.78 7.61 14.41 7.06L13.66 7Z" />
    </svg>
  )

  if (loading) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">All Astrologers</h1>
            <p className="text-gray-600">Loading astrologers data...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">All Astrologers</h1>
          <p className="text-gray-600">
            {astrologers.length} {astrologers.length === 1 ? "astrologer" : "astrologers"} found
          </p>
        </div>

        {/* Astrologers Grid */}
        {astrologers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {astrologers.map((astro) => (
              <div key={astro.ID} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                {/* Image Section */}
                <div className="relative w-full h-48 rounded-t-lg overflow-hidden bg-gray-100">
                  <Image
                    src={astro.image ? `/uploads/${astro.image}` : "/uploads/default.jpg"}
                    alt={astro.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* ID and Name */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        ID: {astro.ID}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{astro.name}</h3>
                  </div>

                  {/* Info Grid */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <School className="text-gray-400 text-lg" />
                      <div>
                        <span className="text-gray-500">Expertise:</span>
                        <span className="ml-2 font-medium text-gray-900">{astro.expertise}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <Star className="text-yellow-500 text-lg" />
                      <div>
                        <span className="text-gray-500">Rating:</span>
                        <span className="ml-2 font-medium text-gray-900">{astro.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <RupeeIcon className="text-green-600 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Fees:</span>
                        <span className="ml-2 font-medium text-gray-900">₹{astro.fees}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <Language className="text-blue-500 text-lg" />
                      <div>
                        <span className="text-gray-500">Language:</span>
                        <span className="ml-2 font-medium text-gray-900">{astro.language}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <RateReview className="text-purple-500 text-lg" />
                      <div>
                        <span className="text-gray-500">Reviews:</span>
                        <span className="ml-2 font-medium text-gray-900">{astro.totalReviews}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <Schedule className="text-orange-500 text-lg" />
                      <div>
                        <span className="text-gray-500">Timings:</span>
                        <span className="ml-2 font-medium text-gray-900">{astro.timings}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  {astro.bio && (
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-start space-x-3 text-sm">
                        <Info className="text-gray-400 text-lg mt-0.5" />
                        <div>
                          <span className="text-gray-500 block mb-1">Bio:</span>
                          <p className="text-gray-700 leading-relaxed line-clamp-3">{astro.bio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-md mx-auto">
              <Person className="text-gray-300 text-6xl mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Astrologers Found</h3>
              <p className="text-gray-500">There are no astrologers to display at the moment.</p>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
