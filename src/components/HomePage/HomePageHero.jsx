"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "@mui/icons-material"

export default function HomePageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center min-h-[70vh] text-center md:text-left">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Path with{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
Dr D Mahto 
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Connect with expert astrologers for personalized guidance on life, relationships, career, and spiritual
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/astrologers"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center font-medium"
              >
                Book a Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors font-medium"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/pandit.jpg?height=400&width=400&text=Astrology+Consultation"
                alt="Astrology consultation"
                width={400}
                height={400}
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
