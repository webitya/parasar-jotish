"use client"

import { motion } from "framer-motion"
import { Star, Security, People, Favorite } from "@mui/icons-material"

const values = [
  {
    title: "Authenticity",
    description: "We ensure all our astrologers are verified experts with proven track records.",
    icon: <Star className="h-8 w-8" />,
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Trust & Security",
    description: "Your privacy and security are our top priorities in every interaction.",
    icon: <Security className="h-8 w-8" />,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Accessibility",
    description: "Making spiritual guidance available to everyone, anywhere, anytime.",
    icon: <People className="h-8 w-8" />,
    color: "text-green-600 bg-green-50",
  },
  {
    title: "Compassion",
    description: "We approach every consultation with empathy and genuine care.",
    icon: <Favorite className="h-8 w-8" />,
    color: "text-red-600 bg-red-50",
  },
]

export default function AboutUsValues() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do and shape the experience we create for our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-border text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${value.color}`}>{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
