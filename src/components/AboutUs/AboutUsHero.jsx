"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-100 to-white py-20">
      <div className="absolute inset-0 bg-[url('/patterns/stars.svg')] opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
Dr D Mahto 
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We are dedicated to bridging the gap between ancient wisdom and modern technology, making spiritual
              guidance accessible to everyone, everywhere.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-500">1000+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-500">50+</h3>
                <p className="text-muted-foreground">Expert Astrologers</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/about-hero.png"
                alt="About TalkAstro"
                width={600}
                height={500}
                // className="relative z-10 animate-bounce"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
