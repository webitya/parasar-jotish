"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowForward,
  MenuBook,
  School,
  Groups,
  Favorite,
  Psychology,
  AutoAwesome,
  CheckCircle,
  Star,
} from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const vedicTeachings = [
  {
    name: "Vedic Philosophy",
    description: "Explore the fundamental principles of existence and consciousness",
    icon: <Psychology className="h-8 w-8" />,
    topics: ["Dharma & Purpose", "Karma & Action", "Moksha & Liberation"],
  },
  {
    name: "Sacred Scriptures",
    description: "Study the timeless wisdom of ancient Vedic texts",
    icon: <MenuBook className="h-8 w-8" />,
    topics: ["Vedas & Upanishads", "Bhagavad Gita", "Puranas & Epics"],
  },
  {
    name: "Spiritual Practices",
    description: "Learn traditional methods for spiritual development",
    icon: <AutoAwesome className="h-8 w-8" />,
    topics: ["Meditation Techniques", "Yoga Philosophy", "Devotional Practices"],
  },
]

const trustPrograms = [
  {
    name: "Vedic Study Circle",
    description: "Weekly group discussions on Vedic philosophy and texts",
    duration: "2 hours weekly",
    price: "₹2,000/month",
    features: ["Group discussions", "Text study", "Q&A sessions", "Community support"],
  },
  {
    name: "Personal Guidance",
    description: "One-on-one mentorship with experienced Vedic scholars",
    duration: "1 hour sessions",
    price: "₹3,000/session",
    features: ["Personalized teaching", "Spiritual counseling", "Practice guidance", "Progress tracking"],
  },
  {
    name: "Intensive Retreat",
    description: "Immersive weekend programs for deep spiritual learning",
    duration: "2-3 days",
    price: "₹15,000/retreat",
    features: ["Intensive study", "Meditation practice", "Sacred rituals", "Community meals"],
  },
]

const vedicPrinciples = [
  {
    title: "Dharma",
    description: "Living in accordance with cosmic order and righteousness",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
  },
  {
    title: "Ahimsa",
    description: "Non-violence in thought, word, and action",
    color: "bg-violet-50 border-violet-200 text-violet-700",
  },
  {
    title: "Satya",
    description: "Truthfulness and authenticity in all aspects of life",
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    title: "Seva",
    description: "Selfless service to humanity and all living beings",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
]

export default function VedicTrustService() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 opacity-30"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                className="lg:w-1/2 mb-10 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-medium mb-4 border border-indigo-100">
                  <Star className="h-4 w-4 mr-1" />
                  Ancient Wisdom • Eternal Truth
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    Vedic Sanatan Trust
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Connect with the eternal wisdom of Vedic traditions and discover the timeless teachings that guide
                  spiritual seekers on their journey to self-realization and divine consciousness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/astrologers?specialty=Vedic Sanatan Trust"
                    className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    Explore Teachings
                    <ArrowForward className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#teachings"
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-3xl opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Vedic wisdom teachings"
                    width={600}
                    height={500}
                    className="relative z-10 rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vedic Principles Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Vedic Principles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fundamental values that guide spiritual living and conscious evolution
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {vedicPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className={`${principle.color} p-6 rounded-lg border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-lg mb-3">{principle.title}</h3>
                  <p className="text-sm opacity-80">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachings Section */}
        <section id="teachings" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vedic Teachings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the vast ocean of Vedic knowledge through structured learning paths
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vedicTeachings.map((teaching, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-indigo-500 mb-4">{teaching.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{teaching.name}</h3>
                  <p className="text-muted-foreground mb-4">{teaching.description}</p>
                  <div className="space-y-2">
                    {teaching.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-indigo-500 mr-2" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trust Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our community programs designed to deepen your understanding of Vedic wisdom
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-indigo-600 font-medium mb-2">Duration: {program.duration}</div>
                    <h4 className="font-medium mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-indigo-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-500">{program.price}</span>
                    <Link
                      href="/astrologers?specialty=Vedic Sanatan Trust"
                      className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-violet-500 transition-colors text-sm"
                    >
                      Join Program
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-violet-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Vedic Study</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your life through the profound wisdom of ancient Vedic teachings
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Spiritual Growth",
                  description: "Accelerate your journey toward self-realization and divine consciousness",
                  icon: <AutoAwesome className="h-8 w-8" />,
                },
                {
                  title: "Inner Peace",
                  description: "Find lasting tranquility through understanding of eternal truths",
                  icon: <Favorite className="h-8 w-8" />,
                },
                {
                  title: "Life Purpose",
                  description: "Discover your dharma and align with your soul's mission",
                  icon: <Psychology className="h-8 w-8" />,
                },
                {
                  title: "Community Connection",
                  description: "Join a supportive community of like-minded spiritual seekers",
                  icon: <Groups className="h-8 w-8" />,
                },
                {
                  title: "Ancient Wisdom",
                  description: "Access timeless knowledge that has guided humanity for millennia",
                  icon: <MenuBook className="h-8 w-8" />,
                },
                {
                  title: "Practical Guidance",
                  description: "Apply Vedic principles to modern life challenges and decisions",
                  icon: <School className="h-8 w-8" />,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-indigo-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Embrace Vedic Wisdom</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Begin your journey into the profound teachings that have guided humanity for thousands of years toward
                truth, peace, and liberation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/astrologers?specialty=Vedic Sanatan Trust"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-indigo-600 font-medium hover:bg-opacity-90 transition-colors"
                >
                  Start Your Journey
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#teachings"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Explore Teachings
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
