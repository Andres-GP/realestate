"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

/**
 * Header Component
 *
 * A responsive navigation header with smooth scroll functionality.
 * Features a fixed position that becomes translucent on scroll.
 *
 * @component
 * @example
 * \`\`\`tsx
 * <Header />
 * \`\`\`
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ESTATE
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#properties"
              onClick={(e) => handleNavClick(e, "properties")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Properties
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#properties"
              onClick={(e) => handleNavClick(e, "properties")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Properties
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
