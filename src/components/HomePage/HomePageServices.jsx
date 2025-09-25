"use client"

import { motion } from "framer-motion"
import ServiceCard from "@/components/service-card"

const services = [
  {
    id: "astrology",
    title: "Astrology",
    description: "Discover insights about your life path through the ancient wisdom of astrology.",
    icon: "/logo.png",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "rudraksha",
    title: "Rudraksha",
    description: "Harness the spiritual power of sacred Rudraksha beads for balance and protection.",
    icon: "/logo.png",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "vastu",
    title: "Vedic Vastu Shastra",
    description: "Create harmony in your living spaces with ancient architectural wisdom.",
    icon: "/logo.png",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "meditation",
    title: "Meditation",
    description: "Find inner peace and clarity through guided meditation practices.",
    icon: "/logo.png",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "sound-healing",
    title: "The Sound Energy Healing",
    description: "Experience the therapeutic vibrations of sound for mental and physical healing.",
    icon: "/logo.png",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "tarot",
    title: "Tarot Card Readings",
    description: "Gain clarity on life's questions through the mystical wisdom of tarot cards.",
    icon: "/logo.png",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "puja",
    title: "Siddhi Puja Rituals",
    description: "Participate in sacred rituals designed to manifest specific intentions.",
    icon: "/logo.png",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "vedic-trust",
    title: "Vedic Sanatan Trust",
    description: "Connect with the timeless wisdom of Vedic traditions and teachings.",
    icon: "/logo.png",
    color: "from-indigo-500 to-violet-600",
  },
  {
    id: "yagya",
    title: "Yagya",
    description: "Experience the transformative power of sacred fire ceremonies.",
    icon: "/logo.png",
    color: "from-amber-500 to-yellow-600",
  },
]

export default function HomePageServices() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of spiritual and astrological services designed to guide you on your journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
