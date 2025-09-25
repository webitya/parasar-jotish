"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SendIcon from "@mui/icons-material/Send"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import SubjectIcon from "@mui/icons-material/Subject"
import MessageIcon from "@mui/icons-material/Message"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center bg-white rounded-xl shadow-lg p-6"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircleIcon className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
            <p className="text-gray-600 text-sm mb-5">Thank you for contacting us. We'll get back to you soon.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h2>
            <p className="text-gray-600 text-sm">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="flex items-center text-xs font-medium text-gray-700 mb-1">
                    <PersonIcon className="h-4 w-4 mr-1.5 text-gray-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="flex items-center text-xs font-medium text-gray-700 mb-1">
                    <EmailIcon className="h-4 w-4 mr-1.5 text-gray-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="flex items-center text-xs font-medium text-gray-700 mb-1">
                    <PhoneIcon className="h-4 w-4 mr-1.5 text-gray-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="flex items-center text-xs font-medium text-gray-700 mb-1">
                    <SubjectIcon className="h-4 w-4 mr-1.5 text-gray-500" />
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="spiritual">Spiritual Guidance</option>
                    <option value="consultation">Consultation Request</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="flex items-center text-xs font-medium text-gray-700 mb-1">
                  <MessageIcon className="h-4 w-4 mr-1.5 text-gray-500" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none text-sm"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-5 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-sm"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SendIcon className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
