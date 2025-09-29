"use client"
import { Star, CheckCircle } from "@mui/icons-material"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomePage from "@/components/HomePage/HomePage"

const services = [
  {
    id: "astrology",
    title: "Astrology",
    description: "Discover insights about your life path through the ancient wisdom of astrology.",
    icon: "/icons/astrology.svg",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "rudraksha",
    title: "Rudraksha",
    description: "Harness the spiritual power of sacred Rudraksha beads for balance and protection.",
    icon: "/icons/rudraksha.svg",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "vastu",
    title: "Vedic Vastu Shastra",
    description: "Create harmony in your living spaces with ancient architectural wisdom.",
    icon: "/icons/vastu.svg",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "meditation",
    title: "Meditation",
    description: "Find inner peace and clarity through guided meditation practices.",
    icon: "/icons/meditation.svg",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "sound-healing",
    title: "The Sound Energy Healing",
    description: "Experience the therapeutic vibrations of sound for mental and physical healing.",
    icon: "/icons/sound-healing.svg",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "tarot",
    title: "Tarot Card Readings",
    description: "Gain clarity on life's questions through the mystical wisdom of tarot cards.",
    icon: "/icons/tarot.svg",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "puja",
    title: "Siddhi Puja Rituals",
    description: "Participate in sacred rituals designed to manifest specific intentions.",
    icon: "/icons/puja.svg",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "vedic-trust",
    title: "Vedic Sanatan Trust",
    description: "Connect with the timeless wisdom of Vedic traditions and teachings.",
    icon: "/icons/vedic.svg",
    color: "from-indigo-500 to-violet-600",
  },
  {
    id: "yagya",
    title: "Yagya",
    description: "Experience the transformative power of sacred fire ceremonies.",
    icon: "/icons/yagya.svg",
    color: "from-amber-500 to-yellow-600",
  },
]

const features = [
  {
    title: "Expert Astrologers",
    description: "Connect with verified and experienced astrologers from various traditions.",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Secure Payments",
    description: "Your transactions are protected with bank-grade security via Razorpay.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Real-time Chat",
    description: "Enjoy seamless conversations with instant messaging and responses.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
]

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

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
     

      <Footer />
    </>
  )
}
