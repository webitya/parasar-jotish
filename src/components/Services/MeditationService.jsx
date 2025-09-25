"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, SelfImprovement, Psychology, Spa } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const meditationTypes = [
  {
    name: "Mindfulness Meditation",
    description: "Focus on present moment awareness and breath observation",
    icon: <SelfImprovement className="h-6 w-6" />,
    benefits: ["Stress reduction", "Improved focus", "Emotional balance"],
    duration: "15-30 minutes",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    name: "Transcendental Meditation",
    description: "Mantra-based technique for deep relaxation and consciousness expansion",
    icon: <Psychology className="h-6 w-6" />,
    benefits: ["Deep rest", "Reduced anxiety", "Enhanced creativity"],
    duration: "20 minutes",
    color: "bg-teal-50 border-teal-200 text-teal-700",
  },
  {
    name: "Chakra Meditation",
    description: "Energy center balancing through visualization and breathing",
    icon: <Spa className="h-6 w-6" />,
    benefits: ["Energy alignment", "Spiritual growth", "Inner healing"],
    duration: "30-45 minutes",
    color: "bg-cyan-50 border-cyan-200 text-cyan-700",
  },
]

const programs = [
  {
    name: "Beginner's Journey",
    description: "7-day introduction to meditation fundamentals",
    price: "₹999",
    sessions: 7,
    features: ["Daily guided sessions", "Breathing techniques", "Posture guidance", "Progress tracking"],
    color: "bg-lime-50 border-lime-100",
    priceColor: "text-lime-600",
    buttonColor: "bg-lime-500 hover:bg-lime-600",
  },
  {
    name: "Mindful Living",
    description: "21-day comprehensive mindfulness program",
    price: "₹2,499",
    sessions: 21,
    features: ["Advanced techniques", "Stress management", "Emotional regulation", "Personal guidance"],
    color: "bg-emerald-50 border-emerald-100",
    priceColor: "text-emerald-600",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    name: "Spiritual Awakening",
    description: "90-day transformational meditation journey",
    price: "₹7,999",
    sessions: 90,
    features: ["Deep spiritual practices", "One-on-one sessions", "Chakra balancing", "Life coaching"],
    color: "bg-teal-50 border-teal-100",
    priceColor: "text-teal-600",
    buttonColor: "bg-teal-500 hover:bg-teal-600",
  },
]

const benefits = [
  {
    title: "Stress Relief",
    description: "Reduce daily stress and anxiety naturally",
    color: "bg-mint-50 border-mint-200 text-mint-700",
    customBg: "bg-green-50 border-green-200 text-green-700",
  },
  {
    title: "Better Focus",
    description: "Enhance concentration and mental clarity",
    color: "bg-seafoam-50 border-seafoam-200 text-seafoam-700",
    customBg: "bg-teal-50 border-teal-200 text-teal-700",
  },
  {
    title: "Inner Peace",
    description: "Find calm and tranquility within yourself",
    color: "bg-sage-50 border-sage-200 text-sage-700",
    customBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    title: "Emotional Balance",
    description: "Develop emotional stability and resilience",
    color: "bg-forest-50 border-forest-200 text-forest-700",
    customBg: "bg-lime-50 border-lime-200 text-lime-700",
  },
  {
    title: "Better Sleep",
    description: "Improve sleep quality and relaxation",
    color: "bg-jade-50 border-jade-200 text-jade-700",
    customBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
  },
  {
    title: "Spiritual Growth",
    description: "Connect with your higher self and purpose",
    color: "bg-olive-50 border-olive-200 text-olive-700",
    customBg: "bg-green-100 border-green-300 text-green-800",
  },
]

export default function MeditationService() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Compact Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-emerald-600 rounded-full text-sm font-medium mb-4 border border-emerald-100">
                  <SelfImprovement className="h-4 w-4 mr-1" />
                  Inner Peace • Mindful Living
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Find Inner Peace with <span className="text-emerald-600">Meditation</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Discover transformative meditation techniques to reduce stress, enhance focus, and achieve spiritual
                  growth through guided practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Start Your Journey
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#types"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Explore Techniques
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Meditation */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/placeholder.jpg"
                    alt="Peaceful meditation practice in nature"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-sm"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">The Art of Mindful Living</h2>
                  <p className="text-gray-600 mb-4">
                    Meditation is an ancient practice that trains your mind to focus and redirect thoughts. It develops
                    awareness of yourself and your surroundings, leading to enhanced well-being and inner peace.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Reduces stress and anxiety naturally",
                      "Improves focus and concentration",
                      "Enhances emotional well-being",
                      "Promotes better sleep quality",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Benefits of Meditation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Transform your life through regular practice</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`${benefit.customBg} p-4 rounded-lg border`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs opacity-80">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meditation Types */}
        <section id="types" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Meditation Techniques</h2>
              <p className="text-gray-600">Find the practice that resonates with you</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {meditationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className={`${type.color} p-6 rounded-xl border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{type.icon}</div>
                  <h3 className="font-semibold mb-3">{type.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{type.description}</p>
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full">
                      Duration: {type.duration}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center text-xs">
                        <CheckCircle className="h-3 w-3 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-12 bg-gradient-to-br from-lime-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Meditation Programs</h2>
              <p className="text-gray-600">Structured journeys for every level</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  className={`${program.color} p-6 rounded-xl border`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{program.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-white/70 px-2 py-1 rounded-full">
                      {program.sessions} Sessions
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold ${program.priceColor}`}>{program.price}</span>
                    <Link
                      href="/astro"
                      className={`px-4 py-2 ${program.buttonColor} text-white rounded-lg transition-colors text-sm font-medium`}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-teal-100 to-emerald-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Begin Your Inner Journey</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Take the first step towards inner peace and spiritual growth with guided meditation
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
                >
                  Start Meditating Today
                  <ArrowForward className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Explore Products
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
