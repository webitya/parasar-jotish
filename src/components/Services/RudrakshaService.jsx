"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowForward } from "@mui/icons-material"

const careerBenefits = [
  "Clarity in choosing the right career path",
  "Guidance for job changes and growth",
  "Solutions for workplace stress",
  "Insights into strengths and weaknesses",
  "Better decision-making for higher studies",
  "Long-term career planning",
]

const counsellingTypes = [
  {
    name: "Student Career Guidance",
    benefits: ["Stream selection", "Higher studies advice", "Exam and focus improvement"],
    description: "Get clarity about your education and career path at an early stage.",
  },
  {
    name: "Job & Promotion Guidance",
    benefits: ["Job stability", "Promotion opportunities", "Overcoming workplace challenges"],
    description: "Astrological insights to achieve growth and stability in your career.",
  },
  {
    name: "Business Counselling",
    benefits: ["Choosing the right business", "Financial success", "Partnership compatibility"],
    description: "Guidance for entrepreneurs and business owners to achieve success.",
  },
  {
    name: "Overseas Career Guidance",
    benefits: ["Study abroad opportunities", "Foreign job chances", "Visa-related guidance"],
    description: "Find out the right time and opportunities for overseas career moves.",
  },
]

export default function RudrakshaService() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
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
                Career{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Counselling
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mb-8">
                Get expert astrological career counselling to make the right choices for your professional journey. From education to promotions, we help you align with your true path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/astrologers?specialty=Career Counselling"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Consult an Expert
                  <ArrowForward className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#types"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                >
                  Explore Options
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
                  src="/getreading.png"
                  alt="Career Counselling"
                  width={600}
                  height={500}
                  className="relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Career Counselling */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Career Counselling?</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Choosing the right career is one of the most important decisions in life. Astrology-based career counselling provides unique insights into your strengths, weaknesses, opportunities, and the timing of success.
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
                  src="/rudraksha-tree.png"
                  alt="Career guidance illustration"
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
                <h3 className="text-2xl font-bold mb-4">How It Helps</h3>
                <p className="text-gray-500 mb-6">
                  With career counselling, you can align your professional journey with planetary influences and make confident decisions.
                </p>
                <ul className="space-y-3">
                  {careerBenefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Career Counselling</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Unlock your potential and achieve success in the right direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="h-8 w-8 text-blue-500 mb-4" />
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Career Counselling */}
      <section id="types" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Types of Career Counselling</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Different stages of life require different career guidance — explore the right option for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {counsellingTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                <p className="text-gray-500 mb-4">{type.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-500">{type.price}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the Right Step for Your Career</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get personalized astrological career counselling and plan a successful future with confidence
            </p>
            <Link
              href="/astrologers?specialty=Career Counselling"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-600 font-medium hover:bg-opacity-90 transition-colors"
            >
              Consult an Expert
              <ArrowForward className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
