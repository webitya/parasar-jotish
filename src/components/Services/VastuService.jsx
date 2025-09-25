"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, Home, Business, Apartment } from "@mui/icons-material"

const vastuPrinciples = [
  {
    name: "Direction Alignment",
    description: "Proper orientation of rooms and entrances according to cardinal directions",
    icon: <Home className="h-8 w-8" />,
    benefits: ["Enhanced energy flow", "Better health", "Improved prosperity"],
  },
  {
    name: "Five Elements Balance",
    description: "Harmonizing earth, water, fire, air, and space elements in your space",
    icon: <Business className="h-8 w-8" />,
    benefits: ["Natural harmony", "Stress reduction", "Mental clarity"],
  },
  {
    name: "Sacred Geometry",
    description: "Using ancient geometric principles for optimal space design",
    icon: <Apartment className="h-8 w-8" />,
    benefits: ["Positive vibrations", "Spiritual growth", "Peace of mind"],
  },
]

const vastuServices = [
  {
    name: "Residential Vastu",
    description: "Complete Vastu analysis and remedies for homes and apartments",
    price: "₹5,000 - ₹15,000",
    features: ["Site analysis", "Room-wise recommendations", "Remedy solutions", "Follow-up consultation"],
  },
  {
    name: "Commercial Vastu",
    description: "Vastu consultation for offices, shops, and business establishments",
    price: "₹10,000 - ₹25,000",
    features: [
      "Business growth analysis",
      "Employee productivity enhancement",
      "Financial prosperity tips",
      "Ongoing support",
    ],
  },
  {
    name: "Industrial Vastu",
    description: "Large-scale Vastu planning for factories and industrial complexes",
    price: "₹25,000 - ₹50,000",
    features: ["Complete site planning", "Production optimization", "Safety enhancement", "Detailed reports"],
  },
]

export default function VastuService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vedic{" "}
                <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                  Vastu Shastra
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Transform your living and working spaces with the ancient science of Vastu Shastra. Create harmony,
                prosperity, and positive energy in your environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Vastu Shastra"
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  Consult Vastu Expert
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
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/services/vastu-hero.png"
                  alt="Vastu Shastra consultation"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Vastu Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the fundamental principles that govern the flow of energy in your space
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vastuPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-green-500 mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{principle.name}</h3>
                <p className="text-muted-foreground mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vastu Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Vastu consultation services for all types of properties
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vastuServices.map((service, index) => (
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
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-500">{service.price}</span>
                  <Link
                    href="/astrologers?specialty=Vastu Shastra"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-teal-500 transition-colors text-sm"
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Space Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get expert Vastu consultation and create a harmonious environment that supports your goals and well-being
            </p>
            <Link
              href="/astrologers?specialty=Vastu Shastra"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-green-600 font-medium hover:bg-opacity-90 transition-colors"
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
