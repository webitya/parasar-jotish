"use client"

import { useState } from "react"
import AdminLayout from "@/components/adminlayout/main"
import {
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
} from "@mui/icons-material"

export default function AddAstrologerPage() {
  const [form, setForm] = useState({
    name: "",
    expertise: "",
    rating: "",
    fees: "",
    language: "",
    image: "",
    bio: "",
    totalReviews: "",
    timings: "",
    sociallink: "",
  })
  const [file, setFile] = useState(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError("")

    let imagePath = ""
    if (file) {
      const formData = new FormData()
      formData.append("file", file)
      try {
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })
        const result = await uploadRes.json()
        if (!uploadRes.ok) {
          setError("Image upload failed")
          setLoading(false)
          return
        }
        imagePath = result.imagePath
      } catch (err) {
        setError("Image upload failed")
        setLoading(false)
        return
      }
    }

    const finalPayload = { ...form, image: imagePath }

    try {
      const res = await fetch("/api/addastrologers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      })
      const responseJson = await res.json()
      if (!res.ok) {
        throw new Error(responseJson.error || "Failed to add astrologer")
      }

      setSuccess(true)
      setForm({
        name: "",
        expertise: "",
        rating: "",
        fees: "",
        language: "",
        image: "",
        bio: "",
        totalReviews: "",
        timings: "",
        sociallink: "",
      })
      setFile(null)
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
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
    {
      label: "Social Link",
      name: "sociallink",
      icon: LinkIcon,
      placeholder: "Website or social media link",
      required: false,
    },
    { label: "Bio", name: "bio", icon: Info, textarea: true, placeholder: "Brief description about the astrologer" },
  ]

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Add New Astrologer</h1>
          <p className="text-gray-600">Fill in the details to add a new astrologer to the system</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                        {field.required !== false && <span className="text-red-500">*</span>}
                      </div>
                    </label>
                    {field.textarea ? (
                      <textarea
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        rows={4}
                        required={field.required !== false}
                      />
                    ) : (
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required={field.required !== false}
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {/* File Upload Section */}
            <div className="border-t border-gray-200 pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <CloudUpload className="text-gray-400 w-4 h-4" />
                  <span>Profile Image</span>
                  <span className="text-red-500">*</span>
                </div>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700"
                  required
                />
              </div>
              {file && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: <span className="font-medium">{file.name}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-200 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Adding Astrologer...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Person className="w-4 h-4" />
                    <span>Add Astrologer</span>
                  </div>
                )}
              </button>
            </div>
          </form>
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

        {/* Success Message */}
        {success && (
          <div className="fixed bottom-6 right-6 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg z-50 max-w-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <p className="text-green-700 font-medium">Success!</p>
            </div>
            <p className="text-green-600 mt-1">Astrologer added successfully</p>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
