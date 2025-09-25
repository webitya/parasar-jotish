"use client"

import { motion } from "framer-motion"
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"

const values = [
  {
    icon: <VerifiedUserOutlinedIcon className="h-6 w-6 text-blue-600" />,
    title: "Authenticity",
    description: "We ensure all our astrologers are verified experts with proven track records.",
  },
  {
    icon: <SecurityOutlinedIcon className="h-6 w-6 text-green-600" />,
    title: "Trust & Security",
    description: "Your privacy and security are our top priorities in every interaction.",
  },
  {
    icon: <PublicOutlinedIcon className="h-6 w-6 text-purple-600" />,
    title: "Accessibility",
    description: "Making spiritual guidance available to everyone, anywhere, anytime.",
  },
  {
    icon: <FavoriteBorderOutlinedIcon className="h-6 w-6 text-red-600" />,
    title: "Compassion",
    description: "We approach every consultation with empathy and genuine care.",
  },
]

const teamMembers = [
  {
    name: "Rajesh Kumar",
    title: "Founder & CEO",
    description: "Visionary leader with 15+ years in technology and spiritual guidance.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Priya Sharma",
    title: "Head of Astrologer Relations",
    description: "Expert in Vedic astrology with a passion for connecting people with authentic guidance.",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Amit Patel",
    title: "Chief Technology Officer",
    description: "Tech innovator focused on creating seamless digital experiences.",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
          >
            About TalkAstro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Connecting ancient wisdom with modern technology for your spiritual journey.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Founded with a vision to make ancient wisdom accessible to the modern world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Bridging Ancient Wisdom with Modern Technology
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In 2020, our founders recognized a growing need for authentic spiritual guidance in an increasingly
                digital world. They envisioned a platform where anyone could access the profound wisdom of astrology,
                regardless of their location or background.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What started as a small team of passionate individuals has now grown into a comprehensive platform
                featuring verified astrologers, secure payment systems, and real-time consultation capabilities. Today,
                TalkAstro serves thousands of users worldwide, helping them navigate life's challenges through the
                timeless wisdom of the stars.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Ancient Wisdom, Modern Technology"
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience we create for our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate individuals behind TalkAstro, dedicated to bringing you the best spiritual guidance
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-200"
                />
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Join thousands of satisfied users who have found clarity and guidance through TalkAstro.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#" // Replace with actual link
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              Find an Astrologer
            </a>
            <a
              href="#" // Replace with actual link
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-md"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
