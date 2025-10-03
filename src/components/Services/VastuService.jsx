"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, Favorite, FavoriteBorder, FavoriteTwoTone } from "@mui/icons-material"

const marriagePrinciples = [
  {
    name: "Kundli Matching",
    description: "Analyzing compatibility through detailed horoscope matching",
    icon: <Favorite className="h-8 w-8" />,
    benefits: ["Stronger relationships", "Reduced conflicts", "Harmonious married life"],
  },
  {
    name: "Dosha Remedies",
    description: "Identifying and neutralizing Mangal Dosha, Shani Dosha, and other challenges",
    icon: <FavoriteBorder className="h-8 w-8" />,
    benefits: ["Balanced energies", "Overcome obstacles", "Peaceful union"],
  },
  {
    name: "Planetary Guidance",
    description: "Astrological solutions for delayed marriage and relationship issues",
    icon: <FavoriteTwoTone className="h-8 w-8" />,
    benefits: ["Timely marriage", "Better understanding", "Emotional stability"],
  },
]

const marriageServices = [
  {
    name: "Pre-Marriage Consultation",
    description: "Guidance for individuals and families on kundli matching and relationship compatibility",
    features: ["Detailed horoscope analysis", "Compatibility score", "Dosha check", "Suggested remedies"],
  },
  {
    name: "Marriage Remedies",
    description: "Astrological solutions for delays or obstacles in marriage",
    features: ["Gemstone recommendations", "Mantras and rituals", "Fasting and puja guidance", "Lifestyle alignment"],
  },
  {
    name: "Post-Marriage Guidance",
    description: "Solutions for strengthening bonds and resolving conflicts in married life",
    features: ["Relationship healing", "Dosha balancing", "Peaceful communication guidance", "Continuous support"],
  },
]

export default function MarriageService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Astrological {" "}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Marriage Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Resolve marriage-related challenges through astrology. Find remedies for delays, incompatibility, and
                relationship harmony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Marriage"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  Consult Marriage Expert
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#principles"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
                >
                  Learn Principles
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
                  src="/astrologers.png"
                  alt="Astrological Marriage Consultation"
                  width={600}
                  height={500}
                  className="relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Marriage Astrology Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the astrological foundations of marriage compatibility and remedies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marriagePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-pink-500 mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{principle.name}</h3>
                <p className="text-muted-foreground mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm">
                      <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Marriage Astrology Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive astrological consultation services for marriage-related challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marriageServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Resolve Marriage Problems Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get expert astrological consultation for marriage delays, compatibility issues, and relationship harmony.
            </p>
            <Link
              href="/contact?specialty=Marriage"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-pink-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Start Your Consultation
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
