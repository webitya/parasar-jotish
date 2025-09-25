"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle, ArrowForward, Schedule, Psychology, TrendingUp, Favorite } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AstrologyPage() {
  const benefits = [
    {
      title: "Personality Insights",
      description: "Discover your true nature and hidden potential through cosmic analysis.",
      icon: <Psychology className="h-5 w-5" />,
      color: "bg-pink-50 border-pink-200 text-pink-700",
    },
    {
      title: "Relationship Guide",
      description: "Understand compatibility and strengthen your connections.",
      icon: <Favorite className="h-5 w-5" />,
      color: "bg-rose-50 border-rose-200 text-rose-700",
    },
    {
      title: "Career Direction",
      description: "Find your ideal path and perfect timing for success.",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      title: "Life Purpose",
      description: "Connect with your soul's mission and spiritual journey.",
      icon: <Star className="h-5 w-5" />,
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
      title: "Perfect Timing",
      description: "Know when to act for maximum success and harmony.",
      icon: <Schedule className="h-5 w-5" />,
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      title: "Personal Growth",
      description: "Overcome challenges and unlock your highest potential.",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "bg-yellow-50 border-yellow-200 text-yellow-700",
    },
  ]

  const astrologers = [
    {
      id: "1",
      name: "Acharya Sharma",
      rating: 4.9,
      reviews: 128,
      experience: 15,
      image: "/placeholder.jpg",
      specialties: ["Vedic", "Birth Chart"],
      color: "bg-blue-50 border-blue-100",
    },
    {
      id: "2",
      name: "Pandit Rajesh",
      rating: 4.8,
      reviews: 215,
      experience: 20,
      image: "/placeholder.jpg",
      specialties: ["Predictions", "Remedies"],
      color: "bg-green-50 border-green-100",
    },
    {
      id: "3",
      name: "Dr. Priya Joshi",
      rating: 4.7,
      reviews: 89,
      experience: 12,
      image: "/placeholder.jpg",
      specialties: ["Western", "Psychology"],
      color: "bg-purple-50 border-purple-100",
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Choose Expert",
      description: "Browse verified astrologers and find your perfect match.",
      color: "bg-pink-100 text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      step: "2",
      title: "Book Session",
      description: "Schedule instantly or book for later at your convenience.",
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      step: "3",
      title: "Get Insights",
      description: "Receive personalized guidance and cosmic wisdom.",
      color: "bg-green-100 text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Compact Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-purple-600 rounded-full text-sm font-medium mb-4 border border-purple-100">
                  <Star className="h-4 w-4 mr-1" />
                  Ancient Wisdom • Modern Insights
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Discover Your Destiny with <span className="text-purple-600">Astrology</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get personalized cosmic insights from expert astrologers. Understand your path, relationships, and
                  perfect timing for life decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                  >
                    Consult Now
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#benefits"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compact What is Astrology */}
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
                    alt="Astrological birth chart"
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Your Cosmic Blueprint</h2>
                  <p className="text-gray-600 mb-4">
                    Astrology maps celestial positions at your birth moment, revealing personality traits, life
                    patterns, and future possibilities through your unique cosmic fingerprint.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Reveals core personality & talents",
                      "Shows relationship compatibility",
                      "Guides career & life decisions",
                      "Predicts favorable timing",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Benefits */}
        <section id="benefits" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Why Choose Astrology?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how cosmic insights can guide your life decisions
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

        {/* Compact How It Works */}
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
              <p className="text-gray-600">Simple steps to cosmic clarity</p>
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

        {/* Compact Expert Astrologers */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Expert Astrologers</h2>
              <p className="text-gray-600">Connect with verified professionals</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {astrologers.map((astrologer, index) => (
                <motion.div
                  key={astrologer.id}
                  className={`${astrologer.color} p-4 rounded-xl border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={astrologer.image || "/placeholder.svg"}
                    alt={astrologer.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-auto mb-3 border-2 border-white"
                  />
                  <h3 className="font-semibold text-gray-800 mb-1">{astrologer.name}</h3>
                  <div className="flex items-center justify-center mb-2 text-yellow-600">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{astrologer.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({astrologer.reviews})</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{astrologer.experience} years exp</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {astrologer.specialties.map((specialty) => (
                      <span key={specialty} className="bg-white/70 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/astro"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Consult Now
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/astro"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-purple-600 font-medium rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors"
              >
                View All Astrologers
                <ArrowForward className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Compact CTA */}
        <section className="py-12 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Ready to Discover Your Path?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Start your cosmic journey today with personalized astrological guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  Start Your Journey
                  <ArrowForward className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Explore Products
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
