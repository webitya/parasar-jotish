"use client"

import { useState } from "react"
import AdminLayout from "@/components/adminlayout/main"
import Image from "next/image"
import {
  Search,
  Person,
  Star,
  Language,
  Schedule,
  School,
  RateReview,
  Info,
  CloudUpload,
  Link as LinkIcon,
  CheckCircle,
  Error,
  Edit,
  Visibility,
} from "@mui/icons-material"

export default function UpdateAstrologerPage() {
  const [inputId, setInputId] = useState("")
  const [astrologer, setAstrologer] = useState(null)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [updating, setUpdating] = useState(false)

  const handleChange = (e) => {
    setAstrologer({
      ...astrologer,
      [e.target.name]: e.target.value,
    })
  }

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

  const updateAstrologer = async () => {
    setUpdating(true)
    setMessage("")
    setError("")

    try {
      const res = await fetch("/api/updateastrologer", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(astrologer),
      })
      const result = await res.json()
      if (!res.ok) {
        setError(result.message || "Update failed")
        return
      }
      setMessage("Astrologer updated successfully")
      setTimeout(() => setMessage(""), 5000)
    } catch {
      setError("Server error during update")
    } finally {
      setUpdating(false)
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)
    setUploading(true)
    setMessage("")
    setError("")

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (res.ok) {
        setAstrologer((prev) => ({
          ...prev,
          image: data.imagePath,
        }))
        setMessage("Image uploaded successfully")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setError(data.message || "Image upload failed")
      }
    } catch {
      setError("Image upload failed")
    } finally {
      setUploading(false)
    }
  }

  // Custom Rupee Icon Component
  const RupeeIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.66 7H16V5H13.66C13.36 3.85 12.28 3 11 3H5V5H11C11.55 5 12 5.45 12 6S11.55 7 11 7H5V9H11C12.1 9 13 9.9 13 11S12.1 13 11 13H8.5L13.5 18H15.5L10.5 13H11C13.21 13 15 11.21 15 9C15 8.28 14.78 7.61 14.41 7.06L13.66 7Z" />
    </svg>
  )

  const formFields = [
    { label: "Full Name", name: "name", icon: Person, placeholder: "Enter astrologer's full name" },
    { label: "Expertise", name: "expertise", icon: School, placeholder: "e.g., Vedic Astrology, Tarot Reading" },
    {
      label: "Rating",
      name: "rating",
      type: "number",
      icon: Star,
      placeholder: "1-5",
      min: "1",
      max: "5",
      step: "0.1",
    },
    { label: "Fees (₹)", name: "fees", type: "number", icon: RupeeIcon, placeholder: "Session fees in rupees" },
    { label: "Language", name: "language", icon: Language, placeholder: "e.g., Hindi, English" },
    {
      label: "Total Reviews",
      name: "totalReviews",
      type: "number",
      icon: RateReview,
      placeholder: "Number of reviews",
    },
    { label: "Timings", name: "timings", icon: Schedule, placeholder: "e.g., 9 AM - 6 PM" },
    { label: "Social Link", name: "sociallink", icon: LinkIcon, placeholder: "Website or social media link" },
    { label: "Bio", name: "bio", icon: Info, textarea: true, placeholder: "Brief description about the astrologer" },
  ]

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Update Astrologer</h1>
          <p className="text-gray-600">Search and update astrologer information</p>
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

        {/* Update Form */}
        {astrologer && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Edit className="text-gray-400 w-5 h-5" />
                <h2 className="text-lg font-medium text-gray-900">Update Information</h2>
              </div>
              <p className="text-sm text-gray-600 mt-1">ID: {astrologer.ID}</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Current Image Display */}
              {astrologer.image && (
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Visibility className="text-gray-400 w-4 h-4" />
                    <span className="text-sm font-medium text-gray-700">Current Image:</span>
                  </div>
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={astrologer.image.startsWith("/uploads") ? astrologer.image : `/uploads/${astrologer.image}`}
                      alt="Current"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field) => {
                  const IconComponent = field.icon
                  return (
                    <div key={field.name} className={field.textarea ? "md:col-span-2" : ""}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="text-gray-400 w-4 h-4" />
                          <span>{field.label}</span>
                        </div>
                      </label>
                      {field.textarea ? (
                        <textarea
                          name={field.name}
                          value={astrologer[field.name] || ""}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          rows={4}
                        />
                      ) : (
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={astrologer[field.name] || ""}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          min={field.min}
                          max={field.max}
                          step={field.step}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Image Upload Section */}
              <div className="border-t border-gray-200 pt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <CloudUpload className="text-gray-400 w-4 h-4" />
                    <span>Update Profile Image</span>
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 disabled:bg-gray-100"
                />
                {uploading && (
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm text-gray-600">Uploading image...</span>
                  </div>
                )}
              </div>

              {/* Update Button */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={updateAstrologer}
                  disabled={updating}
                  className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {updating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Updating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Edit className="w-4 h-4" />
                      <span>Update Astrologer</span>
                    </div>
                  )}
                </button>
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
