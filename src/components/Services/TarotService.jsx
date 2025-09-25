"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowForward,
  Psychology,
  Favorite,
  Work,
  CheckCircle,
  AutoAwesome,
  Visibility,
  Star,
} from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const readingTypes = [
  {
    name: "Love & Relationships",
    description: "Gain insights into your romantic life and relationships",
    icon: <Favorite className="h-6 w-6" />,
    cards: "3-5 cards",
    duration: "30 minutes",
    price: "₹1,500",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    benefits: ["Relationship clarity", "Love guidance", "Compatibility insights"],
  },
  {
    name: "Career & Finance",
    description: "Discover your professional path and financial opportunities",
    icon: <Work className="h-6 w-6" />,
    cards: "5-7 cards",
    duration: "45 minutes",
    price: "₹2,000",
    color: "bg-rose-50 border-rose-200 text-rose-700",
    benefits: ["Career direction", "Financial guidance", "Success timing"],
  },
  {
    name: "Life Path Reading",
    description: "Comprehensive reading about your life's journey and purpose",
    icon: <Psychology className="h-6 w-6" />,
    cards: "10-12 cards",
    duration: "60 minutes",
    price: "₹3,000",
    color: "bg-red-50 border-red-200 text-red-700",
    benefits: ["Life purpose", "Spiritual guidance", "Future insights"],
  },
]

const cardMeanings = [
  {
    name: "Major Arcana",
    description: "Life's big lessons and spiritual journey",
    icon: <Star className="h-6 w-6" />,
    examples: ["The Fool", "The Magician", "Death", "The World"],
    color: "bg-pink-50 border-pink-200 text-pink-700",
  },
  {
    name: "Minor Arcana",
    description: "Daily life situations and practical matters",
    icon: <AutoAwesome className="h-6 w-6" />,
    examples: ["Cups (Emotions)", "Wands (Passion)", "Swords (Mind)", "Pentacles (Material)"],
    color: "bg-rose-50 border-rose-200 text-rose-700",
  },
  {
    name: "Court Cards",
    description: "People and personality aspects in your life",
    icon: <Visibility className="h-6 w-6" />,
    examples: ["Kings", "Queens", "Knights", "Pages"],
    color: "bg-red-50 border-red-200 text-red-700",
  },
]

const benefits = [
  {
    title: "Self-Discovery",
    description: "Gain deeper understanding of your inner self and motivations",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    icon: <Psychology className="h-5 w-5" />,
  },
  {
    title: "Decision Clarity",
    description: "Get guidance for important life decisions and choices",
    color: "bg-rose-50 border-rose-200 text-rose-700",
    icon: <Visibility className="h-5 w-5" />,
  },
  {
    title: "Future Insights",
    description: "Understand potential outcomes and future possibilities",
    color: "bg-red-50 border-red-200 text-red-700",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Relationship Guidance",
    description: "Navigate love, friendships, and family relationships",
    color: "bg-pink-100 border-pink-300 text-pink-800",
    icon: <Favorite className="h-5 w-5" />,
  },
  {
    title: "Career Direction",
    description: "Find your professional path and purpose",
    color: "bg-rose-100 border-rose-300 text-rose-800",
    icon: <Work className="h-5 w-5" />,
  },
  {
    title: "Spiritual Growth",
    description: "Connect with your higher self and spiritual journey",
    color: "bg-red-100 border-red-300 text-red-800",
    icon: <AutoAwesome className="h-5 w-5" />,
  },
]

const steps = [
  {
    step: "1",
    title: "Ask Your Question",
    description: "Focus on what you want to know and set your intention.",
    color: "bg-pink-100 text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    step: "2",
    title: "Card Selection",
    description: "Cards are drawn based on your energy and question.",
    color: "bg-rose-100 text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    step: "3",
    title: "Interpretation",
    description: "Receive detailed insights and guidance from the cards.",
    color: "bg-red-100 text-red-600",
    bgColor: "bg-red-50",
  },
]

const packages = [
  {
    name: "Quick Insight",
    description: "Single question tarot reading for immediate guidance",
    price: "₹999",
    duration: "20 minutes",
    features: ["1-3 cards", "Single question focus", "Basic interpretation", "Written summary"],
    color: "bg-pink-50 border-pink-100",
    priceColor: "text-pink-600",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
  },
  {
    name: "Complete Reading",
    description: "Comprehensive tarot reading covering multiple life areas",
    price: "₹2,499",
    duration: "45 minutes",
    features: ["7-10 cards", "Multiple questions", "Detailed interpretation", "Follow-up guidance"],
    color: "bg-rose-50 border-rose-100",
    priceColor: "text-rose-600",
    buttonColor: "bg-rose-500 hover:bg-rose-600",
    popular: true,
  },
  {
    name: "Life Path Spread",
    description: "Deep dive into your life's journey and spiritual path",
    price: "₹4,999",
    duration: "90 minutes",
    features: ["12-15 cards", "Life path analysis", "Spiritual guidance", "Recorded session", "Written report"],
    color: "bg-red-50 border-red-100",
    priceColor: "text-red-600",
    buttonColor: "bg-red-500 hover:bg-red-600",
  },
]

export default function TarotService() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-pink-600 rounded-full text-sm font-medium mb-4 border border-pink-100">
                  <AutoAwesome className="h-4 w-4 mr-1" />
                  Mystical Tarot • Ancient Wisdom
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Mystical <span className="text-pink-600">Tarot Readings</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Unlock the wisdom of the cards and gain profound insights into your past, present, and future through
                  ancient tarot divination and mystical guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors"
                  >
                    Get Your Reading
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#readings"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Explore Readings
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Tarot */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/placeholder.jpg"
                    alt="Mystical tarot cards spread on table"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-sm"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">The Ancient Art of Tarot</h2>
                  <p className="text-gray-600 mb-4">
                    Tarot is a powerful divination tool that uses symbolic imagery to provide insights into your life's
                    journey. Each card carries deep meaning and connects to universal energies that can guide you toward
                    clarity and understanding.
                  </p>
                  <div className="space-y-2">
                    {[
                      "78 cards with unique symbolic meanings",
                      "Connects to your subconscious wisdom",
                      "Provides guidance for life decisions",
                      "Reveals hidden patterns and influences",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Benefits of Tarot Readings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how tarot can illuminate your path and provide guidance
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`${benefit.color} p-4 rounded-lg border`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                      <p className="text-xs opacity-80">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Card Types */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Understanding Tarot Cards</h2>
              <p className="text-gray-600">Learn about the different types of cards in a tarot deck</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {cardMeanings.map((card, index) => (
                <motion.div
                  key={index}
                  className={`${card.color} p-6 rounded-xl border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="font-semibold mb-3">{card.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{card.description}</p>
                  <div className="space-y-1">
                    {card.examples.map((example, idx) => (
                      <div key={idx} className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full">
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reading Types */}
        <section id="readings" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Tarot Reading Types</h2>
              <p className="text-gray-600">Choose the reading that best addresses your questions</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {readingTypes.map((reading, index) => (
                <motion.div
                  key={index}
                  className={`${reading.color} p-6 rounded-xl border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{reading.icon}</div>
                  <h3 className="font-semibold mb-3">{reading.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{reading.description}</p>
                  <div className="mb-4 space-y-1">
                    <div className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full">Cards: {reading.cards}</div>
                    <div className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full">
                      Duration: {reading.duration}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {reading.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center text-xs">
                        <CheckCircle className="h-3 w-3 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <span className="text-xl font-bold">{reading.price}</span>
                  </div>
                  <Link
                    href="/astro"
                    className="inline-block px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg transition-colors text-sm font-medium"
                  >
                    Book Reading
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
              <p className="text-gray-600">Simple steps to your tarot reading</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`${step.bgColor} p-6 rounded-xl text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reading Packages */}
        <section className="py-12 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Reading Packages</h2>
              <p className="text-gray-600">Choose the perfect reading experience for your needs</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`${pkg.color} p-6 rounded-xl border relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-white/70 px-2 py-1 rounded-full block text-center">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-pink-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold ${pkg.priceColor}`}>{pkg.price}</span>
                    <Link
                      href="/astro"
                      className={`px-4 py-2 ${pkg.buttonColor} text-white rounded-lg transition-colors text-sm font-medium`}
                    >
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-rose-100 to-pink-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Discover Your Destiny</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let the ancient wisdom of tarot cards guide you towards clarity and understanding of your life's path
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors"
                >
                  Start Your Reading
                  <ArrowForward className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Tarot Card Decks
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
