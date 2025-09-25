"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LinkedIn, Twitter } from "@mui/icons-material"

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in technology and spiritual guidance.",
    image: "/team/founder.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Head of Astrologer Relations",
    bio: "Expert in Vedic astrology with a passion for connecting people with authentic guidance.",
    image: "/team/head-astrologer.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Amit Patel",
    role: "Chief Technology Officer",
    bio: "Tech innovator focused on creating seamless digital experiences.",
    image: "/team/cto.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export default function AboutUsTeam() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind TalkAstro, dedicated to bringing you the best spiritual guidance
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-border text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <a href={member.social.linkedin} className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors">
                  <LinkedIn className="h-5 w-5" />
                </a>
                <a href={member.social.twitter} className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
