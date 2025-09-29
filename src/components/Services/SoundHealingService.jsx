"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, MusicNote, Healing, Waves } from "@mui/icons-material"

const instruments = [
  {
    name: "Tibetan Singing Bowls",
    description: "Ancient metal bowls that produce harmonic overtones for deep healing",
    icon: <MusicNote className="h-8 w-8" />,
    benefits: ["Stress relief", "Chakra balancing", "Deep relaxation"],
    frequency: "110-660 Hz",
  },
  {
    name: "Crystal Bowls",
    description: "Pure quartz crystal bowls that create powerful vibrational healing",
    icon: <Healing className="h-8 w-8" />,
    benefits: ["Energy cleansing", "Emotional healing", "Spiritual awakening"],
    frequency: "256-512 Hz",
  },
  {
    name: "Gongs & Chimes",
    description: "Large resonant instruments for sound bath experiences",
    icon: <Waves className="h-8 w-8" />,
    benefits: ["Deep meditation", "Cellular healing", "Consciousness expansion"],
    frequency: "40-200 Hz",
  },
]

const sessions = [
  {
    name: "Individual Sound Healing",
    description: "Personalized one-on-one sound therapy session",
    price: "₹2,500",
    duration: "60 minutes",
    features: ["Customized frequency selection", "Chakra assessment", "Personal consultation", "Take-home recording"],
  },
  {
    name: "Group Sound Bath",
    description: "Immersive group experience with multiple instruments",
    price: "₹800",
    duration: "90 minutes",
    features: ["Multiple instruments", "Guided meditation", "Community healing", "Refreshments included"],
  },
  {
    name: "Sound Healing Course",
    description: "Learn to practice sound healing yourself",
    price: "₹15,000",
    duration: "5 days",
    features: ["Instrument training", "Healing techniques", "Certification", "Practice materials"],
  },
]

export default function SoundHealingService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white py-20">
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
                Healing Through <span className="spiritual-text-gradient">Sound Energy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Experience the therapeutic power of sound vibrations. Ancient instruments and modern techniques combine
                to heal your body, mind, and spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Sound Energy Healing"
                  className="spiritual-button inline-flex items-center justify-center"
                >
                  Book Sound Session
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#instruments"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
                >
                  Explore Instruments
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
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/services/sound-healing-hero.png"
                  alt="Sound healing session"
                  width={600}
                  height={500}
                  className="relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section id="instruments" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Healing Instruments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the sacred instruments used in our sound healing sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instruments.map((instrument, index) => (
              <motion.div
                key={index}
                className="spiritual-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-spiritual-orange mb-4">{instrument.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{instrument.name}</h3>
                <p className="text-muted-foreground mb-4">{instrument.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-spiritual-orange">Frequency: {instrument.frequency}</span>
                </div>
                <ul className="space-y-2">
                  {instrument.benefits.map((benefit, idx) => (
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

      {/* Sessions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sound Healing Sessions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of sound healing experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                className="spiritual-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{session.name}</h3>
                <p className="text-muted-foreground mb-4">{session.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-spiritual-orange font-medium">Duration: {session.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {session.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-spiritual-orange mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-spiritual-orange">{session.price}</span>
                  <Link
                    href="/astrologers?specialty=Sound Energy Healing"
                    className="px-4 py-2 bg-spiritual-orange text-white rounded-lg hover:bg-spiritual-red transition-colors text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Sound Healing</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let the healing vibrations of ancient instruments restore your natural harmony and well-being
            </p>
            <Link
              href="/astrologers?specialty=Sound Energy Healing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-yellow-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Book Your Session
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
