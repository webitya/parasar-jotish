"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Delhi",
    content:
      "TalkAstro helped me gain clarity during a difficult time in my life. The astrologer was insightful and compassionate.",
    avatar: "/avatars/testimonial-1.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "Mumbai",
    content:
      "I was skeptical at first, but my reading was surprisingly accurate. I've booked multiple sessions since then.",
    avatar: "/avatars/testimonial-2.jpg",
  },
  {
    name: "Ananya Patel",
    role: "Bangalore",
    content:
      "The convenience of chatting with an astrologer from home is amazing. TalkAstro has become my go-to for spiritual guidance.",
    avatar: "/avatars/testimonial-3.jpg",
  },
]

export default function HomePageTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

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
            Hear from people who have found guidance and clarity through TalkAstro.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm border border-border"
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-6 italic text-muted-foreground">"{testimonials[activeTestimonial].content}"</p>
            <div className="flex items-center">
              <Image
                src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[activeTestimonial].name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </motion.div>

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
