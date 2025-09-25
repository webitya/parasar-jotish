"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle } from "@mui/icons-material"

const features = [
  {
    title: "Expert Astrologers",
    description: "Connect with verified and experienced astrologers from various traditions.",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Secure Payments",
    description: "Your transactions are protected with bank-grade security via Razorpay.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Real-time Chat",
    description: "Enjoy seamless conversations with instant messaging and responses.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
]

export default function HomePageFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TalkAstro</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine ancient wisdom with modern technology to provide you with the most accurate and accessible
            astrological guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-2 rounded-full bg-muted inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
