"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, SelfImprovement, Psychology, Spa } from "@mui/icons-material"

const meditationTypes = [
  {
    name: "Mindfulness Meditation",
    description: "Focus on present moment awareness and breath observation",
    icon: <SelfImprovement className="h-8 w-8" />,
    benefits: ["Stress reduction", "Improved focus", "Emotional balance"],
    duration: "15-30 minutes",
  },
  {
    name: "Transcendental Meditation",
    description: "Mantra-based technique for deep relaxation and consciousness expansion",
    icon: <Psychology className="h-8 w-8" />,
    benefits: ["Deep rest", "Reduced anxiety", "Enhanced creativity"],
    duration: "20 minutes",
  },
  {
    name: "Chakra Meditation",
    description: "Energy center balancing through visualization and breathing",
    icon: <Spa className="h-8 w-8" />,
    benefits: ["Energy alignment", "Spiritual growth", "Inner healing"],
    duration: "30-45 minutes",
  },
]

const programs = [
  {
    name: "Beginner's Journey",
    description: "7-day introduction to meditation fundamentals",
    price: "₹999",
    sessions: 7,
    features: ["Daily guided sessions", "Breathing techniques", "Posture guidance", "Progress tracking"],
  },
  {
    name: "Mindful Living",
    description: "21-day comprehensive mindfulness program",
    price: "₹2,499",
    sessions: 21,
    features: ["Advanced techniques", "Stress management", "Emotional regulation", "Personal guidance"],
  },
  {
    name: "Spiritual Awakening",
    description: "90-day transformational meditation journey",
    price: "₹7,999",
    sessions: 90,
    features: ["Deep spiritual practices", "One-on-one sessions", "Chakra balancing", "Life coaching"],
  },
]

export default function MeditationService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="absolute inset-0 om-pattern"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Inner Peace with <span className="spiritual-text-gradient">Meditation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Discover the transformative power of meditation. Learn ancient techniques to reduce stress, enhance
                focus, and achieve spiritual growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Meditation"
                  className="spiritual-button inline-flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#types"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
                >
                  Explore Techniques
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
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/services/meditation-hero.png"
                  alt="Meditation practice"
                  width={600}
                  height={500}
                  className="relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="types" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meditation Techniques</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different meditation practices to find the one that resonates with your spiritual journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meditationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="spiritual-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-spiritual-orange mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-spiritual-orange">Duration: {type.duration}</span>
                </div>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm">
                      <CheckCircle className="h-4 w-4 text-spiritual-orange mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meditation Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured programs designed to guide you through your meditation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="spiritual-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-spiritual-orange font-medium">{program.sessions} Sessions</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-spiritual-orange mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-spiritual-orange">{program.price}</span>
                  <Link
                    href="/astrologers?specialty=Meditation"
                    className="px-4 py-2 bg-spiritual-orange text-white rounded-lg hover:bg-spiritual-red transition-colors text-sm"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Inner Journey</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Take the first step towards inner peace and spiritual growth with our guided meditation programs
            </p>
            <Link
              href="/astrologers?specialty=Meditation"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Start Meditating Today
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
