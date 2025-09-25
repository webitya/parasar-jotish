"use client"

import { motion } from "framer-motion"

export default function ContactUsHero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our services? Need help with your account? We're here to help you on your spiritual
            journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
