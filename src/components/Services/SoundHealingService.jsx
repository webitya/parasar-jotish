"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward, MusicNote, Healing, Waves, GraphicEq, VolumeUp } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const instruments = [
  {
    name: "Tibetan Singing Bowls",
    description: "Ancient metal bowls that produce harmonic overtones for deep healing",
    icon: <MusicNote className="h-6 w-6" />,
    benefits: ["Stress relief", "Chakra balancing", "Deep relaxation"],
    frequency: "110-660 Hz",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
  },
  {
    name: "Crystal Bowls",
    description: "Pure quartz crystal bowls that create powerful vibrational healing",
    icon: <Healing className="h-6 w-6" />,
    benefits: ["Energy cleansing", "Emotional healing", "Spiritual awakening"],
    frequency: "256-512 Hz",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    name: "Gongs & Chimes",
    description: "Large resonant instruments for sound bath experiences",
    icon: <Waves className="h-6 w-6" />,
    benefits: ["Deep meditation", "Cellular healing", "Consciousness expansion"],
    frequency: "40-200 Hz",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
]

const sessions = [
  {
    name: "Individual Sound Healing",
    description: "Personalized one-on-one sound therapy session",
    price: "₹2,500",
    duration: "60 minutes",
    features: ["Customized frequency selection", "Chakra assessment", "Personal consultation", "Take-home recording"],
    color: "bg-yellow-50 border-yellow-100",
    priceColor: "text-yellow-600",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    name: "Group Sound Bath",
    description: "Immersive group experience with multiple instruments",
    price: "₹800",
    duration: "90 minutes",
    features: ["Multiple instruments", "Guided meditation", "Community healing", "Refreshments included"],
    color: "bg-amber-50 border-amber-100",
    priceColor: "text-amber-600",
    buttonColor: "bg-amber-500 hover:bg-amber-600",
    popular: true,
  },
  {
    name: "Sound Healing Course",
    description: "Learn to practice sound healing yourself",
    price: "₹15,000",
    duration: "5 days",
    features: ["Instrument training", "Healing techniques", "Certification", "Practice materials"],
    color: "bg-orange-50 border-orange-100",
    priceColor: "text-orange-600",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
  },
]

const benefits = [
  {
    title: "Stress Reduction",
    description: "Sound vibrations naturally calm the nervous system",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
    icon: <VolumeUp className="h-5 w-5" />,
  },
  {
    title: "Pain Relief",
    description: "Frequencies help reduce physical and emotional pain",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    icon: <Healing className="h-5 w-5" />,
  },
  {
    title: "Better Sleep",
    description: "Promotes deep relaxation and restful sleep patterns",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    icon: <MusicNote className="h-5 w-5" />,
  },
  {
    title: "Emotional Balance",
    description: "Harmonizes emotions and mental state",
    color: "bg-red-50 border-red-200 text-red-700",
    icon: <GraphicEq className="h-5 w-5" />,
  },
  {
    title: "Energy Alignment",
    description: "Balances chakras and energy centers",
    color: "bg-rose-50 border-rose-200 text-rose-700",
    icon: <Waves className="h-5 w-5" />,
  },
  {
    title: "Spiritual Growth",
    description: "Enhances meditation and spiritual awareness",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    icon: <CheckCircle className="h-5 w-5" />,
  },
]

const steps = [
  {
    step: "1",
    title: "Assessment",
    description: "We evaluate your specific healing needs and energy state.",
    color: "bg-yellow-100 text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    step: "2",
    title: "Sound Session",
    description: "Experience healing frequencies tailored to your needs.",
    color: "bg-amber-100 text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    step: "3",
    title: "Integration",
    description: "Receive guidance for continuing your healing journey.",
    color: "bg-orange-100 text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export default function SoundHealingService() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-yellow-600 rounded-full text-sm font-medium mb-4 border border-yellow-100">
                  <MusicNote className="h-4 w-4 mr-1" />
                  Sound Healing • Vibrational Therapy
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Healing Through <span className="text-yellow-600">Sound Energy</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Experience the therapeutic power of sound vibrations. Ancient instruments and modern techniques
                  combine to heal your body, mind, and spirit through sacred frequencies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition-colors"
                  >
                    Book Sound Session
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#instruments"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Explore Instruments
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Sound Healing */}
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
                    alt="Sound healing session with singing bowls"
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">The Science of Sound Healing</h2>
                  <p className="text-gray-600 mb-4">
                    Sound healing uses specific frequencies and vibrations to promote physical, emotional, and spiritual
                    well-being. These therapeutic sounds work at a cellular level, helping to restore balance and
                    harmony throughout your entire being.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Reduces stress hormones naturally",
                      "Stimulates healing at cellular level",
                      "Balances brainwave patterns",
                      "Enhances meditation and mindfulness",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Benefits of Sound Healing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience profound healing through therapeutic sound vibrations
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`${benefit.color} p-4 rounded-lg border`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                      <p className="text-xs opacity-80">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Healing Instruments */}
        <section id="instruments" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Sacred Healing Instruments</h2>
              <p className="text-gray-600">Discover the powerful instruments used in our sound healing sessions</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {instruments.map((instrument, index) => (
                <motion.div
                  key={index}
                  className={`${instrument.color} p-6 rounded-xl border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{instrument.icon}</div>
                  <h3 className="font-semibold mb-3">{instrument.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{instrument.description}</p>
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-white/50 px-2 py-1 rounded-full">
                      Frequency: {instrument.frequency}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {instrument.benefits.map((benefit, idx) => (
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

        {/* How It Works */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
              <p className="text-gray-600">Simple steps to healing through sound</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`${step.bgColor} p-6 rounded-xl text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sound Healing Sessions */}
        <section className="py-12 bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Sound Healing Sessions</h2>
              <p className="text-gray-600">Choose the perfect healing experience for your needs</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sessions.map((session, index) => (
                <motion.div
                  key={index}
                  className={`${session.color} p-6 rounded-xl border relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {session.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-800 mb-2">{session.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{session.description}</p>
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-white/70 px-2 py-1 rounded-full block text-center">
                      {session.duration}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {session.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold ${session.priceColor}`}>{session.price}</span>
                    <Link
                      href="/astro"
                      className={`px-4 py-2 ${session.buttonColor} text-white rounded-lg transition-colors text-sm font-medium`}
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
        <section className="py-12 bg-gradient-to-r from-orange-100 to-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Experience Sound Healing</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let the healing vibrations of ancient instruments restore your natural harmony and well-being
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition-colors"
                >
                  Book Your Session
                  <ArrowForward className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Sound Healing Products
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
