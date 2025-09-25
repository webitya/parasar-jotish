"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star } from "@mui/icons-material"

export default function HomePageCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Begin Your Journey?</h2>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found clarity and guidance through our expert astrologers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/astrologers"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Find Your Astrologer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Create Free Account
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
