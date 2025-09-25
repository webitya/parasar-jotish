"use client"

import { motion } from "framer-motion"
import HomePageHero from "./HomePageHero"
import HomePageServices from "./HomePageServices"
import HomePageFeatures from "./HomePageFeatures"
import HomePageTestimonials from "./HomePageTestimonials"
import HomePageCTA from "./HomePageCTA"

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <HomePageHero />

      {/* Services Section */}
      <section id="services" className="py-20">
        <HomePageServices />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <HomePageFeatures />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <HomePageTestimonials />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <HomePageCTA />
      </section>
    </motion.main>
  )
}
