"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    id: "horoscope",
    title: "Horoscope Analysis",
    description: "Get personalized horoscope insights to understand your life's path and opportunities.",
    icon: "/logo.png",
    color: "from-purple-500 to-indigo-600",
    link: "/services/astrology",
  },
  {
    id: "career",
    title: "Career Counselling",
    description: "Receive astrological guidance to make informed decisions about your career and growth.",
    icon: "/logo.png",
    color: "from-blue-500 to-cyan-600",
    link: "/career",
  },
  {
    id: "marriage",
    title: "Marriage Problem",
    description: "Find solutions for marriage-related issues with the help of astrological remedies.",
    icon: "/logo.png",
    color: "from-pink-500 to-rose-600",
    link: "/marriage",
  },
  {
    id: "health",
    title: "Health Issue",
    description: "Discover root causes of health challenges and remedies through astrology.",
    icon: "/logo.png",
    color: "from-green-500 to-teal-600",
    link: "/health",
  },
  {
    id: "others",
    title: "Other Problems",
    description: "Seek guidance and solutions for various personal and professional challenges.",
    icon: "/logo.png",
    color: "from-orange-500 to-red-600",
    link: "/others",
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
    <section className="bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of astrological services designed to guide you through life’s challenges and opportunities.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <div className="rounded-2xl shadow-lg bg-white p-6 text-center hover:shadow-xl transition">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                >
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Button */}
                <Link href={service.link}>
                  <button className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
