"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, Spa, Psychology, Shield, Star } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const rudrakshaTypes = [
  {
    name: "1 Mukhi Rudraksha",
    benefits: ["Spiritual awakening", "Connection with divine", "Leadership qualities"],
    price: "₹5,000 - ₹25,000",
    description: "The most powerful and rare Rudraksha, representing Lord Shiva himself.",
    icon: <Star className="h-6 w-6" />,
    color: "bg-violet-50 border-violet-200 text-violet-700",
    rarity: "Extremely Rare",
  },
  {
    name: "5 Mukhi Rudraksha",
    benefits: ["Mental peace", "Stress relief", "Enhanced memory", "Good health"],
    price: "₹100 - ₹500",
    description: "Most common and beneficial for general well-being and mental clarity.",
    icon: <Psychology className="h-6 w-6" />,
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    rarity: "Common",
  },
  {
    name: "7 Mukhi Rudraksha",
    benefits: ["Wealth and prosperity", "Business success", "Financial stability"],
    price: "₹800 - ₹2,000",
    description: "Associated with Goddess Lakshmi, brings abundance and prosperity.",
    icon: <Spa className="h-6 w-6" />,
    color: "bg-purple-50 border-purple-200 text-purple-700",
    rarity: "Moderate",
  },
  {
    name: "11 Mukhi Rudraksha",
    benefits: ["Wisdom and knowledge", "Protection from negativity", "Spiritual growth"],
    price: "₹2,000 - ₹8,000",
    description: "Represents the eleven Rudras, provides divine protection and wisdom.",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    rarity: "Rare",
  },
]

const benefits = [
  {
    title: "Chakra Balance",
    description: "Balances chakras and energy centers throughout the body",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    icon: <Spa className="h-5 w-5" />,
  },
  {
    title: "Stress Relief",
    description: "Reduces stress and anxiety, promoting mental calmness",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    icon: <Psychology className="h-5 w-5" />,
  },
  {
    title: "Enhanced Focus",
    description: "Improves concentration and mental clarity for better performance",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Divine Protection",
    description: "Provides protection from negative energies and evil influences",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Physical Health",
    description: "Improves physical and mental health through energy healing",
    color: "bg-cyan-50 border-cyan-200 text-cyan-700",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    title: "Inner Peace",
    description: "Brings deep peace and tranquility to mind and soul",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    icon: <Spa className="h-5 w-5" />,
  },
]

const consultationPackages = [
  {
    name: "Basic Consultation",
    description: "Personal Rudraksha recommendation based on your birth chart",
    price: "₹999",
    duration: "30 minutes",
    features: ["Birth chart analysis", "Rudraksha recommendation", "Wearing guidelines", "Basic mantras"],
    color: "bg-violet-50 border-violet-100",
    priceColor: "text-violet-600",
    buttonColor: "bg-violet-500 hover:bg-violet-600",
  },
  {
    name: "Complete Guidance",
    description: "Comprehensive consultation with detailed spiritual guidance",
    price: "₹2,499",
    duration: "60 minutes",
    features: [
      "Detailed birth chart analysis",
      "Multiple Rudraksha recommendations",
      "Energization rituals",
      "Personalized mantras",
      "Follow-up support",
    ],
    color: "bg-indigo-50 border-indigo-100",
    priceColor: "text-indigo-600",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600",
    popular: true,
  },
  {
    name: "Premium Experience",
    description: "Complete spiritual transformation package with ongoing support",
    price: "₹4,999",
    duration: "90 minutes",
    features: [
      "In-depth spiritual analysis",
      "Custom Rudraksha combination",
      "Sacred energization ceremony",
      "Personalized meditation guide",
      "3-month follow-up support",
      "Spiritual progress tracking",
    ],
    color: "bg-purple-50 border-purple-100",
    priceColor: "text-purple-600",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
]

const steps = [
  {
    step: "1",
    title: "Consultation",
    description: "Get personalized guidance from our Rudraksha experts.",
    color: "bg-violet-100 text-violet-600",
    bgColor: "bg-violet-50",
  },
  {
    step: "2",
    title: "Selection",
    description: "Choose the perfect Rudraksha based on your needs.",
    color: "bg-indigo-100 text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    step: "3",
    title: "Energization",
    description: "Receive your energized Rudraksha with proper rituals.",
    color: "bg-purple-100 text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export default function RudrakshaService() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-violet-600 rounded-full text-sm font-medium mb-4 border border-violet-100">
                  <Spa className="h-4 w-4 mr-1" />
                  Sacred Beads • Divine Energy
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Sacred <span className="text-violet-600">Rudraksha</span> Beads
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Discover the divine power of Rudraksha beads, sacred seeds blessed by Lord Shiva himself. Experience
                  spiritual transformation, protection, and inner peace.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
                  >
                    Consult an Expert
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#types"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Explore Types
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Rudraksha */}
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
                    alt="Sacred Rudraksha beads and tree"
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">The Divine Connection</h2>
                  <p className="text-gray-600 mb-4">
                    Rudraksha beads are sacred seeds from the Rudraksha tree, primarily found in the Himalayan region.
                    According to Hindu mythology, these beads originated from the tears of Lord Shiva and are considered
                    highly sacred and powerful for spiritual practices.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Natural segments called 'mukhis' determine benefits",
                      "Each bead has specific ruling deity and powers",
                      "Scientifically proven electromagnetic properties",
                      "Balances body's bioelectric current naturally",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-violet-500 mr-2 flex-shrink-0" />
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Benefits of Wearing Rudraksha</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the transformative power of these sacred beads
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

        {/* Types of Rudraksha */}
        <section id="types" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Types of Rudraksha</h2>
              <p className="text-gray-600">Each type offers unique benefits and spiritual significance</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {rudrakshaTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className={`${type.color} p-6 rounded-xl border`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">{type.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{type.name}</h3>
                        <span className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full">{type.rarity}</span>
                      </div>
                      <p className="text-sm opacity-80 mb-3">{type.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Benefits:</h4>
                    <div className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{type.price}</span>
                    <Link
                      href="/astro"
                      className="px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg transition-colors text-sm font-medium"
                    >
                      Consult Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
              <p className="text-gray-600">Simple steps to find your perfect Rudraksha</p>
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

        {/* Consultation Packages */}
        <section className="py-12 bg-gradient-to-br from-violet-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Consultation Packages</h2>
              <p className="text-gray-600">Get expert guidance for your spiritual journey</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {consultationPackages.map((pkg, index) => (
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
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                        <CheckCircle className="h-3 w-3 text-violet-500 mr-2 flex-shrink-0" />
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
        <section className="py-12 bg-gradient-to-r from-indigo-100 to-purple-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Find Your Perfect Rudraksha</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get personalized guidance from our Rudraksha experts to find the perfect bead for your spiritual journey
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
                >
                  Consult an Expert
                  <ArrowForward className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Shop Rudraksha
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
