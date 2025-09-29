"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import ServiceCard from "@/components/service-card"

const services = [
  {
    id: "astrology",
    title: "Astrology",
    description: "Discover insights about your life path through the ancient wisdom of astrology.",
    icon: "/icons/astrology.svg",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "rudraksha",
    title: "Rudraksha",
    description: "Harness the spiritual power of sacred Rudraksha beads for balance and protection.",
    icon: "/icons/rudraksha.svg",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "vastu",
    title: "Vedic Vastu Shastra",
    description: "Create harmony in your living spaces with ancient architectural wisdom.",
    icon: "/icons/vastu.svg",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "meditation",
    title: "Meditation",
    description: "Find inner peace and clarity through guided meditation practices.",
    icon: "/icons/meditation.svg",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "sound-healing",
    title: "The Sound Energy Healing",
    description: "Experience the therapeutic vibrations of sound for mental and physical healing.",
    icon: "/icons/sound-healing.svg",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "tarot",
    title: "Tarot Card Readings",
    description: "Gain clarity on life's questions through the mystical wisdom of tarot cards.",
    icon: "/icons/tarot.svg",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "puja",
    title: "Siddhi Puja Rituals",
    description: "Participate in sacred rituals designed to manifest specific intentions.",
    icon: "/icons/puja.svg",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "vedic-trust",
    title: "Vedic Sanatan Trust",
    description: "Connect with the timeless wisdom of Vedic traditions and teachings.",
    icon: "/icons/vedic.svg",
    color: "from-indigo-500 to-violet-600",
  },
  {
    id: "yagya",
    title: "Yagya",
    description: "Experience the transformative power of sacred fire ceremonies.",
    icon: "/icons/yagya.svg",
    color: "from-amber-500 to-yellow-600",
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
              Explore our comprehensive range of spiritual and astrological services designed to guide you on your
              journey of self-discovery and growth.
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
              Connect with our expert practitioners and discover the transformative power of ancient wisdom.
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
