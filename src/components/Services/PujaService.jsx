"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowForward } from "@mui/icons-material"

export default function PujaService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white py-20">
        <div className="absolute inset-0 om-pattern"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sacred <span className="spiritual-text-gradient">Puja Rituals</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Participate in powerful Vedic rituals designed to manifest your intentions and connect with divine
                energies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Siddhi Puja Rituals"
                  className="spiritual-button inline-flex items-center justify-center"
                >
                  Book Puja Ritual
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/services/puja-hero.png"
                  alt="Puja ritual ceremony"
                  width={600}
                  height={500}
                  className="relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Sacred Rituals</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Connect with ancient traditions and manifest your deepest intentions through powerful puja ceremonies
            </p>
            <Link
              href="/astrologers?specialty=Siddhi Puja Rituals"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-red-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Book Your Puja
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
