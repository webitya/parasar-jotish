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

      // In a real app, you would send the form data to your API
      console.log("Form submitted:", formData)

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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 spiritual-text-gradient inline-block">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="spiritual-input"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="spiritual-input"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="spiritual-input"
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

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="spiritual-input"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="spiritual-button w-full flex items-center justify-center"
            >
              {isLoading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
