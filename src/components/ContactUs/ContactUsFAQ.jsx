"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExpandMore } from "@mui/icons-material"

const faqs = [
  {
    question: "How do I book a session with an astrologer?",
    answer:
      "You can browse our verified astrologers, view their profiles, and book a session directly through our platform. Simply select your preferred astrologer and choose a convenient time slot.",
  },
  {
    question: "Are your astrologers verified?",
    answer:
      "Yes, all our astrologers go through a rigorous verification process. We check their credentials, experience, and conduct background verification before they can offer services on our platform.",
  },
  {
    question: "How secure are my payments?",
    answer:
      "We use Razorpay, a trusted payment gateway, to ensure all transactions are secure and encrypted. Your financial information is never stored on our servers.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a satisfaction guarantee. If you're not satisfied with your consultation, please contact our support team within 24 hours, and we'll work to resolve the issue.",
  },
  {
    question: "How does the chat feature work?",
    answer:
      "Our real-time chat feature allows you to communicate directly with astrologers. You can send text messages, and some astrologers also offer voice and video consultations.",
  },
]

export default function ContactUsFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and platform.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-lg mb-4 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ExpandMore className="h-5 w-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
