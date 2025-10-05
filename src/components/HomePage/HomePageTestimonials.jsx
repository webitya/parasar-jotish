"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Paritosh Narayan",
    role: "Bangalore",
    content:
      "They helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
  },
  {
    name: "Subham Shaurya",
    role: "Delhi",
    content:
      "I was skeptical at first, but my reading was surprisingly accurate. I've booked multiple sessions since then.",
  },
  {
    name: "Ashok Kumar",
    role: "Gandhinagar",
    content:
      "The convenience of chatting with an astrologer from home is amazing. He has become my go-to for spiritual guidance.",
  },
  {
    name: "Rajkumar Mehta",
    role: "Puducherry",
    content:
      "They helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
  },
  {
    name: "Dr Chandra Shekhar Azad",
    role: "Patna",
    content:
      "I was skeptical at first, but my reading was surprisingly accurate. I've booked multiple sessions since then.",
  },
  {
    name: "Sanjay Sinha",
    role: "Mumbai",
    content:
      "The convenience of chatting with an astrologer from home is amazing. He has become my go-to for spiritual guidance.",
  },
  {
    name: "G Verma",
    role: "Kolkata",
    content:
      "They helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
  },
];


export default function HomePageTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people who have found guidance and clarity through Dr D Mahto.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm border border-border text-center"
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-6 italic text-muted-foreground">
              "{testimonials[activeTestimonial].content}"
            </p>
            <div>
              <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
              <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
            </div>
          </motion.div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${index === activeTestimonial ? "bg-primary" : "bg-muted"}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
