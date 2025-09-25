"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowForward, CheckCircle, Star, LocalFireDepartment, Psychology } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const pujaTypes = [
  {
    name: "Ganesh Puja",
    description: "Remove obstacles and bring prosperity to new beginnings",
    icon: <LocalFireDepartment className="h-6 w-6" />,
    benefits: ["Obstacle removal", "New ventures", "Success blessing"],
    duration: "2-3 hours",
    price: "₹2,999",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    name: "Lakshmi Puja",
    description: "Attract wealth, abundance, and financial prosperity",
    icon: <Star className="h-6 w-6" />,
    benefits: ["Wealth attraction", "Business growth", "Financial stability"],
    duration: "3-4 hours",
    price: "₹4,999",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
  },
  {
    name: "Saraswati Puja",
    description: "Enhance knowledge, wisdom, and creative abilities",
    icon: <Psychology className="h-6 w-6" />,
    benefits: ["Knowledge enhancement", "Academic success", "Creative flow"],
    duration: "2-3 hours",
    price: "₹3,499",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
]

const ritualPackages = [
  {
    name: "Essential Ritual",
    description: "Basic puja ceremony with core mantras and offerings",
    price: "₹1,999",
    duration: "1-2 hours",
    features: ["Sacred fire ceremony", "Basic mantras", "Flower offerings", "Prasadam blessing"],
    color: "bg-amber-50 border-amber-100",
    priceColor: "text-amber-600",
    buttonColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    name: "Complete Ceremony",
    description: "Comprehensive ritual with extended mantras and elaborate offerings",
    price: "₹4,999",
    duration: "3-4 hours",
    features: ["Extended fire ceremony", "108 mantras", "Elaborate offerings", "Personal blessing", "Sacred thread"],
    color: "bg-orange-50 border-orange-100",
    priceColor: "text-orange-600",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    popular: true,
  },
  {
    name: "Premium Experience",
    description: "Full traditional ceremony with personalized rituals and guidance",
    price: "₹9,999",
    duration: "5-6 hours",
    features: [
      "Full traditional ceremony",
      "Personalized mantras",
      "Premium offerings",
      "One-on-one guidance",
      "Sacred items included",
      "Follow-up consultation",
    ],
    color: "bg-red-50 border-red-100",
    priceColor: "text-red-600",
    buttonColor: "bg-red-500 hover:bg-red-600",
  },
]

const benefits = [
  {
    title: "Spiritual Cleansing",
    description: "Purify your energy and remove negative influences",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
  },
  {
    title: "Divine Blessings",
    description: "Receive blessings for health, wealth, and happiness",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    title: "Obstacle Removal",
    description: "Clear blockages in personal and professional life",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    title: "Prosperity Attraction",
    description: "Manifest abundance and financial growth",
    color: "bg-red-50 border-red-200 text-red-700",
  },
  {
    title: "Inner Peace",
    description: "Find tranquility and spiritual harmony",
    color: "bg-rose-50 border-rose-200 text-rose-700",
  },
  {
    title: "Protection Shield",
    description: "Create protective energy around you and family",
    color: "bg-pink-50 border-pink-200 text-pink-700",
  },
]

const steps = [
  {
    step: "1",
    title: "Choose Ritual",
    description: "Select the puja ceremony that aligns with your intentions.",
    color: "bg-amber-100 text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    step: "2",
    title: "Book Session",
    description: "Schedule your ceremony with our experienced priests.",
    color: "bg-orange-100 text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    step: "3",
    title: "Sacred Ceremony",
    description: "Participate in the powerful ritual and receive blessings.",
    color: "bg-red-100 text-red-600",
    bgColor: "bg-red-50",
  },
]

export default function PujaService() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-orange-600 rounded-full text-sm font-medium mb-4 border border-orange-100">
                  <LocalFireDepartment className="h-4 w-4 mr-1" />
                  Sacred Rituals • Divine Blessings
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Sacred <span className="text-orange-600">Puja Rituals</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Participate in powerful Vedic rituals designed to manifest your intentions, remove obstacles, and
                  connect with divine energies through ancient traditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
                  >
                    Book Puja Ritual
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#types"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Explore Rituals
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Puja */}
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
                    alt="Sacred puja ceremony with fire and offerings"
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Sacred Fire Ceremonies</h2>
                  <p className="text-gray-600 mb-4">
                    Puja rituals are ancient Vedic ceremonies that create a sacred connection between the devotee and
                    divine energies. Through mantras, offerings, and fire ceremonies, these rituals purify the
                    environment and manifest positive changes.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Removes negative energies and obstacles",
                      "Attracts prosperity and abundance",
                      "Provides divine protection and blessings",
                      "Creates spiritual harmony and peace",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Benefits of Puja Rituals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Transform your life through sacred ceremonies</p>
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
                  <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs opacity-80">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Puja Types */}
        <section id="types" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Sacred Puja Ceremonies</h2>
              <p className="text-gray-600">Choose the ritual that aligns with your intentions</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pujaTypes.map((puja, index) => (
                <motion.div
                  key={index}
                  className={`${puja.color} p-6 rounded-xl border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{puja.icon}</div>
                  <h3 className="font-semibold mb-3">{puja.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{puja.description}</p>
                  <div className="mb-4 space-y-2">
                    <span className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full block">
                      Duration: {puja.duration}
                    </span>
                    <span className="text-lg font-bold block">{puja.price}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {puja.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center text-xs">
                        <CheckCircle className="h-3 w-3 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/astro"
                    className="inline-block px-4 py-2 bg-white/70 hover:bg-white/90 rounded-lg transition-colors text-sm font-medium"
                  >
                    Book Now
                  </Link>
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
              <p className="text-gray-600">Simple steps to divine blessings</p>
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

        {/* Ritual Packages */}
        <section className="py-12 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Ritual Packages</h2>
              <p className="text-gray-600">Choose the ceremony that suits your needs</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ritualPackages.map((pkg, index) => (
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
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
                  <div className="mb-4 space-y-1">
                    <span className="text-xs font-medium bg-white/70 px-2 py-1 rounded-full block text-center">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-orange-500 mr-2 flex-shrink-0" />
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
        <section className="py-12 bg-gradient-to-r from-red-100 to-orange-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Experience Sacred Rituals</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Connect with ancient traditions and manifest your deepest intentions through powerful puja ceremonies
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
                >
                  Book Your Puja
                  <ArrowForward className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Sacred Items Shop
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
