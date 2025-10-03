"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "@mui/icons-material"
import { toast, toastTypes } from "@/components/ui/toaster"

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast("Message sent successfully! We'll get back to you soon.", toastTypes.SUCCESS)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast("Failed to send message. Please try again.", toastTypes.ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              Send us a Message
            </h2>
            <p className="text-center text-gray-500 mb-10">
              Have questions or feedback? Fill out the form below — we’d love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="astrologer">Astrologer Application</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 shadow-sm transition"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 font-semibold shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
