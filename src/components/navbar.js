"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Close, ExpandMore } from "@mui/icons-material"
import { useAuth } from "@/hooks/use-auth"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const services = [
    { name: "Astrology", href: "/services/astrology" },
    { name: "Rudraksha", href: "/services/rudraksha" },
    { name: "Vedic Vastu Shastra", href: "/services/vastu" },
    { name: "Meditation", href: "/services/meditation" },
    { name: "The Sound Energy Healing", href: "/services/sound-healing" },
    { name: "Tarot Card Readings", href: "/services/tarot" },
    { name: "Siddhi Puja Rituals", href: "/services/puja" },
    { name: "Vedic Sanatan Trust", href: "/services/vedic-trust" },
    { name: "Yagya", href: "/services/yagya" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-sm opacity-20"></div>
              <Image src="/logo.png" alt="TalkAstro Logo" width={40} height={40} className="relative z-10" />
            </div> */}
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
             Parashar Jyoti shsodh Sansthan            </span>
          </Link>

          {/* Desktop Navigation - everything aligned right */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {/* Home */}
            <Link href="/" className="text-foreground hover:text-orange-500 transition-colors font-medium">
              Home
            </Link>

            {/* About */}
            <Link href="/about" className="text-foreground hover:text-orange-500 transition-colors font-medium">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center text-foreground hover:text-orange-500 transition-colors font-medium"
              >
                Services
                <ExpandMore className="ml-1 h-4 w-4" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-orange-50 hover:text-orange-500 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact - CTA */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4 text-right">
                {/* Home */}
                <Link
                  href="/"
                  className="text-foreground hover:text-orange-500 transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className="text-foreground hover:text-orange-500 transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                {/* Services */}
                <div className="py-2">
                  <p className="font-medium text-foreground mb-2">Services</p>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-600 hover:text-orange-500 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
