"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import ServiceCard from "@/components/service-card"

const services = [
  {
    id: "horoscope",
    title: "Horoscope Analysis",
    description: "Get personalized horoscope readings to understand your past, present, and future.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "career",
    title: "Career Counselling",
    description: "Receive astrological guidance for career choices, growth, and success in your profession.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "marriage",
    title: "Marriage Problem",
    description: "Resolve compatibility, relationship, and marital issues with expert astrological remedies.",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "health",
    title: "Health Issue",
    description: "Understand planetary influences on your health and find holistic solutions.",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "others",
    title: "Other Problems",
    description: "Get guidance for financial, family, and other life challenges through astrology.",
    color: "from-orange-500 to-red-600",
  },
]

export default function ServicesOverview() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore our specialized astrology services designed to provide clarity and solutions to life’s challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our expert astrologers and discover personalized solutions for your life’s challenges.
            </p>
            <Link
              href="/astrologers"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            >
              Find an Expert
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
