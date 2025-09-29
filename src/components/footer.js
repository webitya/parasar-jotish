import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Astrology", href: "/services/astrology" },
    { name: "Rudraksha", href: "/services/rudraksha" },
    { name: "Vedic Vastu Shastra", href: "/services/vastu" },
    { name: "Meditation", href: "/services/meditation" },
    { name: "Sound Energy Healing", href: "/services/sound-healing" },
    { name: "Tarot Card Readings", href: "/services/tarot" },
    { name: "Siddhi Puja Rituals", href: "/services/puja" },
    { name: "Vedic Sanatan Trust", href: "/services/vedic-trust" },
    { name: "Yagya", href: "/services/yagya" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ]

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <footer className="bg-gray-50 pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-sm opacity-20"></div>
                <Image src="/logo.png" alt="TalkAstro Logo" width={40} height={40} className="relative z-10" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                TalkAstro
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Connect with expert astrologers for personalized guidance on life, relationships, career, and spiritual
              growth.
            </p>

            {/* Contact Info */}
            <div className="mt-6 text-gray-600 text-sm space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:mahtodineshwar5@gmail.com" className="hover:text-orange-500">
                  mahtodineshwar5@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:9934338395" className="hover:text-orange-500">
                  9934338395
                </a>
              </p>
              <p>
                <strong>Address:</strong> Dr D Mahto, Co-operative Colony, Dipugarha, Hazaribagh, Jharkhand – 825301
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                <LinkedIn />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent inline-block">
              Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent inline-block">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent inline-block">
              Support
            </h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; {currentYear} TalkAstro. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
