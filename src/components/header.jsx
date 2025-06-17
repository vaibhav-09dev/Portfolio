"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#home" className="text-xl font-bold text-blue-400" onClick={e => handleSmoothScroll(e, "#home")}>
              {"<DevName />"}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group"
                  onClick={e => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-gray-800"
        >
          <div className="py-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={e => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}
