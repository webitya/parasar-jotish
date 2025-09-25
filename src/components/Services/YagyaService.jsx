"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowForward } from "@mui/icons-material"

export default function YagyaService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white py-20">
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
                Sacred <span className="spiritual-text-gradient">Yagya Ceremonies</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Experience the transformative power of sacred fire ceremonies that purify, heal, and manifest divine
                blessings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Yagya"
                  className="spiritual-button inline-flex items-center justify-center"
                >
                  Participate in Yagya
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
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/services/yagya-hero.png"
                  alt="Sacred fire ceremony"
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Sacred Fire Ceremonies</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Participate in ancient fire rituals that connect you with divine energies and cosmic consciousness
            </p>
            <Link
              href="/astrologers?specialty=Yagya"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-amber-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Book Yagya Ceremony
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
