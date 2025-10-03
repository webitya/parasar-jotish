"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle, ArrowForward, Schedule } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AstrologyPage() {
  const benefits = [
    "Gain insights into your personality and life path",
    "Understand your relationships and compatibility",
    "Make informed decisions about career and finances",
    "Discover your strengths and overcome challenges",
    "Find the best timing for important life events",
    "Connect with your spiritual purpose and destiny",
  ]

  const astrologers = [
    {
      id: "1",
      name: "Acharya Sharma",
      rating: 4.9,
      reviews: 128,
      experience: 15,
      image: "/astrology-chart.png",
      specialties: ["Vedic Astrology", "Birth Chart Analysis"],
    },
    {
      id: "2",
      name: "Pandit Rajesh",
      rating: 4.8,
      reviews: 215,
      experience: 20,
      image: "/chooseyouastrologer.png",
      specialties: ["Predictive Astrology", "Remedial Measures"],
    },
    {
      id: "3",
      name: "Dr. Priya Joshi",
      rating: 4.7,
      reviews: 89,
      experience: 12,
      image: "/getreading.png",
      specialties: ["Western Astrology", "Psychological Astrology"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-20">
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
                 Discover What the Stars Reveal About You <span className="text-gradient"></span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Unlock the secrets of the stars and gain profound insights into your life, relationships, and future
                  through the ancient wisdom of astrology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/astrologers?specialty=Vedic Astrology"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
                  >
                    Consult an Astrologer
                    <ArrowForward className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
                  >
                    Learn More
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
                  <Image
                    src="/astrology-hero.png"
                    alt="Astrology consultation"
                    width={600}
                    height={500}
                    className="relative z-10 animate-float"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Astrology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Horoscope Analysis?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 A horoscope analysis is more than just reading your daily stars—it’s a deep exploration of your personality, life path, strengths, and challenges as revealed by the position of planets at the time of your birth. Your horoscope (also called a birth chart or natal chart) is a unique cosmic map that reflects the alignment of the Sun, Moon, and planets in the twelve zodiac signs and twelve houses.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/astrology-chart.png"
                    alt="Astrological birth chart"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Your Birth Chart is Your Cosmic Blueprint</h3>
                  <p className="text-muted-foreground mb-6">
                    Your birth chart, also known as a natal chart, is a snapshot of the sky at the exact moment and
                    location of your birth. This unique cosmic fingerprint reveals your inherent strengths, challenges,
                    and life purpose.
                  </p>
                  <ul className="space-y-3">
                    {benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Astrological Guidance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how astrology can provide valuable insights and guidance for every aspect of your life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-pink-100 p-6 rounded-xl shadow-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                 {/*<CheckCircle className="h-8 w-8 text-primary mb-4" />*/}
                  <p className="font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* Featured Astrologers */}
      {/* Expert Astrologers */}


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Cosmic Blueprint?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Take the first step towards understanding your true potential and life purpose through the wisdom of
                astrology
              </p>
              <Link
                href="/contact?specialty=Vedic Astrology"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-purple-600 font-medium hover:bg-opacity-90 transition-colors"
              >
                Start Your Journey
                <ArrowForward className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
