"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowForward,
  Star,
  Psychology,
  Home,
  SelfImprovement,
  MusicNote,
  AutoAwesome,
  LocalFireDepartment,
  MenuBook,
  Whatshot,
} from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const services = [
  {
    id: "astrology",
    title: "Astrology",
    description: "Discover insights about your life path through the ancient wisdom of astrology.",
    icon: <Star className="h-8 w-8" />,
    color: "from-purple-100 to-indigo-100",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    href: "/services/astrology",
  },
  {
    id: "rudraksha",
    title: "Rudraksha",
    description: "Harness the spiritual power of sacred Rudraksha beads for balance and protection.",
    icon: <Psychology className="h-8 w-8" />,
    color: "from-violet-100 to-purple-100",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    buttonColor: "bg-violet-500 hover:bg-violet-600",
    href: "/services/rudraksha",
  },
  {
    id: "vastu",
    title: "Vedic Vastu Shastra",
    description: "Create harmony in your living spaces with ancient architectural wisdom.",
    icon: <Home className="h-8 w-8" />,
    color: "from-green-100 to-teal-100",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    buttonColor: "bg-green-500 hover:bg-green-600",
    href: "/services/vastu",
  },
  {
    id: "meditation",
    title: "Meditation",
    description: "Find inner peace and clarity through guided meditation practices.",
    icon: <SelfImprovement className="h-8 w-8" />,
    color: "from-emerald-100 to-teal-100",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
    href: "/services/meditation",
  },
  {
    id: "sound-healing",
    title: "The Sound Energy Healing",
    description: "Experience the therapeutic vibrations of sound for mental and physical healing.",
    icon: <MusicNote className="h-8 w-8" />,
    color: "from-yellow-100 to-amber-100",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-700",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    href: "/services/sound-healing",
  },
  {
    id: "tarot",
    title: "Tarot Card Readings",
    description: "Gain clarity on life's questions through the mystical wisdom of tarot cards.",
    icon: <AutoAwesome className="h-8 w-8" />,
    color: "from-pink-100 to-rose-100",
    borderColor: "border-pink-200",
    textColor: "text-pink-700",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
    href: "/services/tarot",
  },
  {
    id: "puja",
    title: "Siddhi Puja Rituals",
    description: "Participate in sacred rituals designed to manifest specific intentions.",
    icon: <LocalFireDepartment className="h-8 w-8" />,
    color: "from-orange-100 to-red-100",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    href: "/services/puja",
  },
  {
    id: "vedic-trust",
    title: "Vedic Sanatan Trust",
    description: "Connect with the timeless wisdom of Vedic traditions and teachings.",
    icon: <MenuBook className="h-8 w-8" />,
    color: "from-indigo-100 to-blue-100",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600",
    href: "/services/vedic-trust",
  },
  {
    id: "yagya",
    title: "Yagya",
    description: "Experience the transformative power of sacred fire ceremonies.",
    icon: <Whatshot className="h-8 w-8" />,
    color: "from-amber-100 to-orange-100",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    buttonColor: "bg-amber-500 hover:bg-amber-600",
    href: "/services/yagya",
  },
]

const features = [
  {
    title: "Expert Practitioners",
    description: "Connect with verified spiritual experts and experienced practitioners",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    title: "Ancient Wisdom",
    description: "Access time-tested practices rooted in thousands of years of tradition",
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    title: "Personalized Guidance",
    description: "Receive customized recommendations based on your unique spiritual needs",
    color: "bg-green-50 border-green-200 text-green-700",
  },
  {
    title: "Holistic Approach",
    description: "Address mind, body, and spirit through comprehensive spiritual practices",
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
]

export default function ServicesOverview() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm text-purple-600 rounded-full text-sm font-medium mb-4 border border-purple-100">
                  <Star className="h-4 w-4 mr-1" />
                  Spiritual Services • Ancient Wisdom
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Our <span className="text-purple-600">Spiritual Services</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Explore our comprehensive range of spiritual and astrological services designed to guide you on your
                  journey of self-discovery and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/astro"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                  >
                    Find an Expert
                    <ArrowForward className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Why Choose Our Services?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience authentic spiritual guidance with our comprehensive approach
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`${feature.color} p-4 rounded-lg border text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                  <p className="text-xs opacity-80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Our Spiritual Services</h2>
              <p className="text-gray-600">Choose the path that resonates with your spiritual journey</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`bg-gradient-to-br ${service.color} p-6 rounded-xl border ${service.borderColor} group hover:shadow-md transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${service.textColor} mr-3`}>{service.icon}</div>
                    <h3 className={`font-semibold text-lg ${service.textColor}`}>{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={service.href}
                      className={`inline-flex items-center px-4 py-2 ${service.buttonColor} text-white rounded-lg transition-colors text-sm font-medium group-hover:scale-105 transform duration-200`}
                    >
                      Learn More
                      <ArrowForward className="ml-2 h-4 w-4" />
                    </Link>
                    <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={service.title}
                        width={40}
                        height={40}
                        className="opacity-60"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Our Services Work */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
              <p className="text-gray-600">Simple steps to begin your spiritual journey</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Choose Service",
                  description: "Select the spiritual service that resonates with your needs.",
                  color: "bg-purple-100 text-purple-600",
                  bgColor: "bg-purple-50",
                },
                {
                  step: "2",
                  title: "Connect with Expert",
                  description: "Get matched with verified practitioners and spiritual guides.",
                  color: "bg-indigo-100 text-indigo-600",
                  bgColor: "bg-indigo-50",
                },
                {
                  step: "3",
                  title: "Begin Journey",
                  description: "Start your personalized spiritual transformation experience.",
                  color: "bg-blue-100 text-blue-600",
                  bgColor: "bg-blue-50",
                },
              ].map((step, index) => (
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

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-purple-100 to-indigo-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Ready to Begin Your Journey?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Connect with our expert practitioners and discover the transformative power of ancient wisdom.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/astro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  Find an Expert
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
