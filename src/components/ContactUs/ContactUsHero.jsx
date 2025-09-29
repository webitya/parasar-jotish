"use client"

import { motion } from "framer-motion"

export default function ContactUsHero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions about our services? Need help with your account? We're here to help you on your spiritual
            journey. 9934338395
          </p>
        </motion.div>
      </div>
    </section>
  )
}
