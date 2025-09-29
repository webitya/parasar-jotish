"use client"

import { motion } from "framer-motion"
import { Email, Phone, LocationOn, Schedule } from "@mui/icons-material"

const contactInfo = [
  {
    icon: <Email className="h-6 w-6" />,
    title: "Email Us",
    details: ["mahtodineshwar5@gmail.com"],
    description: "Send us an email anytime",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: ["+91 9934338395"],
    description: "Available during business hours",
  },
  {
    icon: <LocationOn className="h-6 w-6" />,
    title: "Visit Us",
    details: [
      "Dr D Mahto",
      "Co-operative colony, Dipugarha",
      "Hazaribagh, Jharkhand - 825301",
    ],
    description: "Come say hello at our office",
  },
  {
    icon: <Schedule className="h-6 w-6" />,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
    description: "Sunday: Closed",
  },
]

export default function ContactUsInfo() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
