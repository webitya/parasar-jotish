"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward } from "@mui/icons-material"

const rudrakshaTypes = [
  {
    name: "1 Mukhi Rudraksha",
    benefits: ["Spiritual awakening", "Connection with divine", "Leadership qualities"],
    price: "₹5,000 - ₹25,000",
    description: "The most powerful and rare Rudraksha, representing Lord Shiva himself.",
  },
  {
    name: "5 Mukhi Rudraksha",
    benefits: ["Mental peace", "Stress relief", "Enhanced memory", "Good health"],
    price: "₹100 - ₹500",
    description: "Most common and beneficial for general well-being and mental clarity.",
  },
  {
    name: "7 Mukhi Rudraksha",
    benefits: ["Wealth and prosperity", "Business success", "Financial stability"],
    price: "₹800 - ₹2,000",
    description: "Associated with Goddess Lakshmi, brings abundance and prosperity.",
  },
  {
    name: "11 Mukhi Rudraksha",
    benefits: ["Wisdom and knowledge", "Protection from negativity", "Spiritual growth"],
    price: "₹2,000 - ₹8,000",
    description: "Represents the eleven Rudras, provides divine protection and wisdom.",
  },
]

const benefits = [
  "Balances chakras and energy centers",
  "Reduces stress and anxiety",
  "Enhances concentration and focus",
  "Provides protection from negative energies",
  "Improves physical and mental health",
  "Brings peace and tranquility",
]

export default function RudrakshaService() {
  return (
    <main className="pt-20">



      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="absolute inset-0 bg-[url('/patterns/stars.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sacred{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Rudraksha
                </span>{" "}
                Beads
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mb-8">
                Discover the divine power of Rudraksha beads, sacred seeds blessed by Lord Shiva himself. Experience
                spiritual transformation, protection, and inner peace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Rudraksha Consultation"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-700 transition-colors"
                >
                  Consult an Expert
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#types"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                >
                  Explore Types
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
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/getreading.png"
                  alt="Sacred Rudraksha beads"
                  width={600}
                  height={500}
                  className="relative z-10 animate-bounce"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* About Rudraksha */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Rudraksha?</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Rudraksha beads are sacred seeds from the Rudraksha tree (Elaeocarpus ganitrus), primarily found in the
                Himalayan region. According to Hindu mythology, these beads originated from the tears of Lord Shiva and
                are considered highly sacred and powerful for spiritual practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/services/rudraksha-tree.png"
                  alt="Rudraksha tree and beads"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">The Divine Connection</h3>
                <p className="text-gray-500 mb-6">
                  Each Rudraksha bead has natural segments called "mukhis" or faces, ranging from 1 to 21. The number of
                  mukhis determines the specific benefits and ruling deity of the bead.
                </p>
                <ul className="space-y-3">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>




      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Wearing Rudraksha</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Experience the transformative power of these sacred beads in your daily life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="h-8 w-8 text-orange-500 mb-4" />
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* Types of Rudraksha */}
      <section id="types" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Types of Rudraksha</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Each type of Rudraksha offers unique benefits and spiritual significance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rudrakshaTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                <p className="text-gray-500 mb-4">{type.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">{type.price}</span>
                  <Link
                    href="/astrologers?specialty=Rudraksha Consultation"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
                  >
                    Consult Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Rudraksha</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get personalized guidance from our Rudraksha experts to find the perfect bead for your spiritual journey
            </p>
            <Link
              href="/astrologers?specialty=Rudraksha Consultation"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-orange-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Consult an Expert
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
