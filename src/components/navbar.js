"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Close, Person, ShoppingBag, ExpandMore, ExpandLess } from "@mui/icons-material"
import { useAuth } from "@/hooks/use-auth"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Astrologers", href: "/astro" },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

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
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20"
          : "bg-white/90 backdrop-blur-md shadow-sm border-b border-white/10"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-sm opacity-20"></div>
              <Image src="/logo.png" alt="TalkAstro Logo" width={40} height={40} className="relative z-10" />
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              TalkAstro
            </span>
          </Link>

          {/* Desktop Navigation - Moved to right */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <nav className="flex items-center space-x-8">
              {/* Home */}
              <Link
                href="/"
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Home
              </Link>

              {/* Astrologers */}
              <Link
                href="/astro"
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Astrologers
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Services
                  <ExpandMore
                    className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 py-3 z-50 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="px-4 py-2 border-b border-gray-100/50 mb-2">
                        <h3 className="text-sm font-semibold text-gray-800">Our Services</h3>
                        <p className="text-xs text-gray-500">Explore our spiritual offerings</p>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {services.map((service, index) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50/80 hover:text-orange-500 transition-all duration-200 rounded-lg mx-2 group/item"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{service.name}</span>
                              <div className="w-2 h-2 bg-orange-200 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shop */}
              <Link
                href="/shop"
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                <ShoppingBag className="mr-1 h-4 w-4" />
                Shop
              </Link>

              {/* About */}
              <Link
                href="/about"
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Auth Buttons - Desktop (Only for logged in users) */}
            {user && (
              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200/50">
                <Link
                  href="/dashboard"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <Person className="mr-1 h-4 w-4" />
                  Dashboard
                </Link>
                {user.isAdmin && (
                  <Link
                    href="/adminpanel"
                    className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 transition-colors text-sm font-medium border border-gray-200/50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <Close className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
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
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {/* Home */}
                <Link
                  href="/"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 font-medium rounded-lg hover:bg-orange-50/50 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Astrologers */}
                <Link
                  href="/astro"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 font-medium rounded-lg hover:bg-orange-50/50 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  Astrologers
                </Link>

                {/* Services Dropdown */}
                <div className="py-1">
                  <button
                    onClick={toggleMobileServices}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-orange-500 transition-colors py-3 font-medium rounded-lg hover:bg-orange-50/50 px-3"
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? <ExpandLess className="h-5 w-5" /> : <ExpandMore className="h-5 w-5" />}
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 ml-4 space-y-1 border-l-2 border-orange-100 pl-4"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-orange-500 transition-colors py-2 px-3 rounded-lg hover:bg-orange-50/50"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Shop */}
                <Link
                  href="/shop"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 font-medium rounded-lg hover:bg-orange-50/50 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 font-medium rounded-lg hover:bg-orange-50/50 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 font-medium rounded-lg hover:bg-orange-50/50 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Auth Actions - Mobile (Only for logged in users) */}
                {user && (
                  <div className="pt-4 border-t border-gray-200/50 mt-4">
                    <Link
                      href="/dashboard"
                      className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 rounded-lg hover:bg-orange-50/50 px-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <Person className="mr-2 h-5 w-5" />
                      Dashboard
                    </Link>
                    {user.isAdmin && (
                      <Link
                        href="/adminpanel"
                        className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 rounded-lg hover:bg-orange-50/50 px-3"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="flex items-center text-gray-700 hover:text-orange-500 transition-colors py-3 w-full text-left rounded-lg hover:bg-orange-50/50 px-3"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
