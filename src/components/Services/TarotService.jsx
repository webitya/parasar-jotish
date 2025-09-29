"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowForward, Psychology, Favorite, Work } from "@mui/icons-material"

const readingTypes = [
  {
    name: "Love & Relationships",
    description: "Gain insights into your romantic life and relationships",
    icon: <Favorite className="h-8 w-8" />,
    cards: "3-5 cards",
    duration: "30 minutes",
    price: "₹1,500",
  },
  {
    name: "Career & Finance",
    description: "Discover your professional path and financial opportunities",
    icon: <Work className="h-8 w-8" />,
    cards: "5-7 cards",
    duration: "45 minutes",
    price: "₹2,000",
  },
  {
    name: "Life Path Reading",
    description: "Comprehensive reading about your life's journey and purpose",
    icon: <Psychology className="h-8 w-8" />,
    cards: "10-12 cards",
    duration: "60 minutes",
    price: "₹3,000",
  },
]

export default function TarotService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-20">
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
                Mystical <span className="spiritual-text-gradient">Tarot Readings</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Unlock the wisdom of the cards and gain profound insights into your past, present, and future through
                ancient tarot divination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Tarot Card Readings"
                  className="spiritual-button inline-flex items-center justify-center"
                >
                  Get Your Reading
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#readings"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
                >
                  Explore Readings
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
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/services/tarot-hero.png"
                  alt="Tarot card reading"
                  width={600}
                  height={500}
                  className="relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reading Types Section */}
      <section id="readings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tarot Reading Types</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the reading that best addresses your questions and concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {readingTypes.map((reading, index) => (
              <motion.div
                key={index}
                className="spiritual-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-spiritual-orange mb-4">{reading.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reading.name}</h3>
                <p className="text-muted-foreground mb-4">{reading.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-spiritual-orange font-medium">Cards: {reading.cards}</div>
                  <div className="text-sm text-spiritual-orange font-medium">Duration: {reading.duration}</div>
                </div>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-spiritual-orange">{reading.price}</span>
                </div>
                <Link
                  href="/astrologers?specialty=Tarot Card Readings"
                  className="w-full px-4 py-2 bg-spiritual-orange text-white rounded-lg hover:bg-spiritual-red transition-colors text-sm inline-block"
                >
                  Book Reading
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Your Destiny</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let the ancient wisdom of tarot cards guide you towards clarity and understanding
            </p>
            <Link
              href="/astrologers?specialty=Tarot Card Readings"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-pink-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Start Your Reading
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
