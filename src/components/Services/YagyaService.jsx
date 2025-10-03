"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowForward } from "@mui/icons-material"

export default function HealthService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20">
        <div className="absolute inset-0 om-pattern"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Astrological <span className="spiritual-text-gradient">Health Remedies</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Discover the root causes of your health challenges through astrology and find holistic remedies for
                physical and emotional well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Health"
                  className="spiritual-button inline-flex items-center justify-center"
                >
                  Consult for Health Issues
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/yagya-hero.png"
                  alt="Astrological Health Remedies"
                  width={600}
                  height={500}
                  className="relative z-10 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Why Choose Astrological Health Remedies?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Holistic Healing",
                desc: "Go beyond symptoms—discover root causes and balance your mind, body, and spirit.",
              },
              {
                title: "Personalized Remedies",
                desc: "Receive unique gemstone, mantra, diet, and lifestyle suggestions tailored to your chart.",
              },
              {
                title: "Long-Term Wellness",
                desc: "Promote lasting vitality with remedies designed for sustainable health improvement.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl shadow-lg bg-green-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Birth Chart Analysis", desc: "Our astrologers study your horoscope to identify imbalances." },
              { step: "2", title: "Personalized Remedies", desc: "Receive gemstone, mantra, diet, or yoga recommendations." },
              { step: "3", title: "Guided Healing", desc: "Get ongoing support to track progress and enhance well-being." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl shadow-md bg-white border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", text: "I was struggling with chronic fatigue. The remedies suggested brought amazing results within weeks!" },
              { name: "Rohit K.", text: "The personalized diet and mantra practice have truly balanced my energy and health." },
              { name: "Ananya M.", text: "Astrology gave me clarity on my recurring health issues and natural remedies that worked." },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-white shadow-md border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <p className="mb-4 text-muted-foreground">“{t.text}”</p>
                <h4 className="font-semibold">— {t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How accurate are astrological health remedies?", a: "Astrological remedies are based on your unique chart. While not a replacement for medical care, they complement conventional healing effectively." },
              { q: "Do I need to follow strict rituals?", a: "No. Remedies are personalized to your lifestyle—ranging from simple mantras and gemstones to diet or meditation practices." },
              { q: "Can I combine remedies with medical treatment?", a: "Yes. Our remedies are designed to support holistic wellness and can work alongside modern healthcare." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-lg border bg-green-50 shadow-sm"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Remedies for Better Health</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get personalized astrological remedies to restore balance, improve energy, and promote long-term well-being.
            </p>
            <Link
              href="/contact?specialty=Health"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-green-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Book Health Consultation
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
