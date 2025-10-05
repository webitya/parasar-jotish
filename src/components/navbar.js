"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const services = [
    { name: "Horoscope Analysis", href: "/services/astrology" },
    { name: "Career counselling", href: "/services/rudraksha" },
    { name: "Marriage Proplem", href: "/services/vastu" },
    { name: "Health Issues", href: "/services/yagya" },
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
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Parashar Jyoti Shodh Sansthan
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            <Link href="/" className="hover:text-orange-500 font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-500 font-medium">
              About
            </Link>

            {/* Desktop Services dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center hover:text-orange-500 font-medium"
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
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-500"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4 text-right">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 font-medium"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 font-medium"
                >
                  About
                </Link>

                {/* Services just as a normal link on mobile */}
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-500 font-medium"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all font-medium text-center"
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
