"use client"

import { motion } from "framer-motion"
import ServiceCard from "@/components/service-card"

const services = [
  {
    id: "horoscope",
    title: "Horoscope Analysis",
    description: "Get personalized horoscope insights to understand your life's path and opportunities.",
    icon: "/logo.png",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "career",
    title: "Career Counselling",
    description: "Receive astrological guidance to make informed decisions about your career and growth.",
    icon: "/logo.png",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "marriage",
    title: "Marriage Problem",
    description: "Find solutions for marriage-related issues with the help of astrological remedies.",
    icon: "/logo.png",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "health",
    title: "Health Issue",
    description: "Discover root causes of health challenges and remedies through astrology.",
    icon: "/logo.png",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "others",
    title: "Other Problems",
    description: "Seek guidance and solutions for various personal and professional challenges.",
    icon: "/logo.png",
    color: "from-orange-500 to-red-600",
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
            Explore our range of astrological services designed to guide you through life’s challenges and opportunities.
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
