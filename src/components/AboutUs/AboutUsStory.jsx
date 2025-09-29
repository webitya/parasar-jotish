"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUsStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded with a vision to make ancient wisdom accessible to the modern world, Dr D Mahto 
 has grown from a
              simple idea to a trusted platform connecting thousands of seekers with expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Bridging Ancient Wisdom with Modern Technology</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2002, People recognized a growing need for authentic spiritual guidance in an increasingly
                  digital world. People needs a path where anyone could access the profound wisdom of astrology,
                  regardless of their location or background.
                </p>
                <p>
                  What started as a small team of passionate individuals has now grown into a comprehensive platform
                  featuring verified astrologers, secure payment systems, and real-time consultation capabilities.
                </p>
                <p>
                  Today, Dr D Mahto 
 serves thousands of users worldwide, helping them navigate life's challenges through
                  the timeless wisdom of the stars.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src="/about-story.png" alt="Our story" width={500} height={400} className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
