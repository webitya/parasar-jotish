"use client"

import { useState } from "react"
import AdminLayout from "@/components/adminlayout/main"
import Image from "next/image"
import {
  Search,
  Star,
  Language,
  Schedule,
  School,
  RateReview,
  Info,
  Delete,
  Warning,
  CheckCircle,
  Error,
  Cancel,
  Visibility,
} from "@mui/icons-material"

export default function DeleteAstrologerPage() {
  const [inputId, setInputId] = useState("")
  const [astrologer, setAstrologer] = useState(null)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const fetchAstrologer = async () => {
    if (!inputId.trim()) {
      setError("Please enter an Astrologer ID")
      return
    }

    setLoading(true)
    setMessage("")
    setError("")
    setAstrologer(null)

    try {
      const res = await fetch(`/api/viewastrologerbyid?id=${inputId}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || "Astrologer not found")
        return
      }
      setAstrologer(data)
    } catch {
      setError("Failed to fetch astrologer")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = () => {
    setShowConfirmDialog(true)
  }

  const confirmDelete = async () => {
    setDeleting(true)
    setShowConfirmDialog(false)
    setMessage("")
    setError("")

    try {
      const res = await fetch("/api/deleteastrologer", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID: inputId }),
      })
      const result = await res.json()
      if (!res.ok) {
        setError(result.message || "Deletion failed")
        return
      }
      setMessage("Astrologer deleted successfully")
      setTimeout(() => setMessage(""), 5000)
      setAstrologer(null)
      setInputId("")
    } catch {
      setError("Server error during delete")
    } finally {
      setDeleting(false)
    }
  }

  const cancelDelete = () => {
    setShowConfirmDialog(false)
  }

  // Custom Rupee Icon Component
  const RupeeIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.66 7H16V5H13.66C13.36 3.85 12.28 3 11 3H5V5H11C11.55 5 12 5.45 12 6S11.55 7 11 7H5V9H11C12.1 9 13 9.9 13 11S12.1 13 11 13H8.5L13.5 18H15.5L10.5 13H11C13.21 13 15 11.21 15 9C15 8.28 14.78 7.61 14.41 7.06L13.66 7Z" />
    </svg>
  )

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Delete Astrologer</h1>
          <p className="text-gray-600">Search and permanently remove an astrologer from the system</p>
        </div>

        {/* Warning Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Warning className="text-red-500 w-5 h-5" />
            <p className="text-red-700 font-medium">Warning</p>
          </div>
          <p className="text-red-600 mt-1 text-sm">
            This action is permanent and cannot be undone. Please verify the astrologer details before deletion.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Search className="text-gray-400 w-5 h-5" />
            <h2 className="text-lg font-medium text-gray-900">Search Astrologer</h2>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter Astrologer ID"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onKeyPress={(e) => e.key === "Enter" && fetchAstrologer()}
              />
            </div>
            <button
              onClick={fetchAstrologer}
              disabled={loading || !inputId.trim()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Searching...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Error className="text-red-500 w-5 h-5" />
              <p className="text-red-700 font-medium">Error</p>
            </div>
            <p className="text-red-600 mt-1">{error}</p>
          </div>
        )}

        {/* Astrologer Details */}
        {astrologer && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Visibility className="text-gray-400 w-5 h-5" />
                <h2 className="text-lg font-medium text-gray-900">Astrologer Details</h2>
              </div>
              <p className="text-sm text-red-600 font-medium mt-1">ID: {astrologer.ID}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image Section */}
                <div className="lg:col-span-1">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={
                        astrologer.image
                          ? astrologer.image.startsWith("/uploads")
                            ? astrologer.image
                            : `/uploads/${astrologer.image}`
                          : "/uploads/default.jpg"
                      }
                      alt={astrologer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{astrologer.name}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <School className="text-purple-500 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Expertise:</span>
                        <span className="ml-2 font-medium text-gray-900">{astrologer.expertise}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <Star className="text-yellow-500 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Rating:</span>
                        <span className="ml-2 font-medium text-gray-900">{astrologer.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <RupeeIcon className="text-green-600 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Fees:</span>
                        <span className="ml-2 font-medium text-gray-900">₹{astrologer.fees}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <Language className="text-blue-500 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Language:</span>
                        <span className="ml-2 font-medium text-gray-900">{astrologer.language}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <RateReview className="text-indigo-500 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Reviews:</span>
                        <span className="ml-2 font-medium text-gray-900">{astrologer.totalReviews}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <Schedule className="text-orange-500 w-5 h-5" />
                      <div>
                        <span className="text-gray-500">Timings:</span>
                        <span className="ml-2 font-medium text-gray-900">{astrologer.timings}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  {astrologer.bio && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-start space-x-3 text-sm">
                        <Info className="text-gray-400 w-5 h-5 mt-0.5" />
                        <div>
                          <span className="text-gray-500 block mb-1">Bio:</span>
                          <p className="text-gray-700 leading-relaxed">{astrologer.bio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Delete Button */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <button
                  onClick={handleDeleteClick}
                  disabled={deleting}
                  className="w-full bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {deleting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Deleting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Delete className="w-4 h-4" />
                      <span>Delete Astrologer</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Warning className="text-red-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Confirm Deletion</h3>
                    <p className="text-sm text-gray-600">This action cannot be undone</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Are you sure you want to permanently delete <strong>{astrologer?.name}</strong> (ID: {inputId})?
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={cancelDelete}
                    className="flex-1 bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Cancel className="w-4 h-4" />
                      <span>Cancel</span>
                    </div>
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Delete className="w-4 h-4" />
                      <span>Delete</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {message && (
          <div className="fixed bottom-6 right-6 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg z-50 max-w-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <p className="text-green-700 font-medium">Success!</p>
            </div>
            <p className="text-green-600 mt-1">{message}</p>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
