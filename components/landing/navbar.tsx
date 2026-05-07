"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-deep-cosmos/95 backdrop-blur-md" 
            : "bg-transparent"
        }`}
        style={isScrolled ? { boxShadow: "rgba(0, 16, 51, 0.12) 0px 1px 3px 0px, rgba(0, 16, 51, 0.08) 0px 1px 2px 0px" } : {}}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[60px] md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[8px] bg-chartreuse-pulse flex items-center justify-center">
                <span className="text-deep-cosmos font-semibold text-[15px]" style={{ fontWeight: 480 }}>T</span>
              </div>
              <span className="text-pure-surface text-[18px] tracking-[-0.009em]" style={{ fontWeight: 480 }}>
                TapLink
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-pure-surface/80 hover:text-pure-surface text-[15px] tracking-[-0.016em] transition-colors duration-200"
                  style={{ fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="#"
                className="px-[16px] py-[8px] text-pure-surface/90 text-[15px] tracking-[-0.016em] rounded-full border border-ice-veil/20 hover:border-ice-veil/40 transition-all duration-200"
                style={{ fontWeight: 400, boxShadow: "var(--shadow-md-2)" }}
              >
                Log in
              </Link>
              <Link
                href="#pricing"
                className="px-[20px] py-[8px] bg-chartreuse-pulse text-midnight-navy text-[15px] tracking-[-0.016em] rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontWeight: 450, boxShadow: "var(--shadow-subtle-3)" }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-pure-surface"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-deep-cosmos pt-[72px] md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-pure-surface text-[20px] tracking-[-0.01em]"
                    style={{ fontWeight: 400 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex flex-col gap-3 w-full max-w-[280px] mt-4"
              >
                <Link
                  href="#"
                  className="w-full text-center px-[20px] py-[12px] text-pure-surface text-[15px] border border-ice-veil/20 rounded-full"
                  style={{ fontWeight: 400 }}
                >
                  Log in
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-[20px] py-[12px] bg-chartreuse-pulse text-midnight-navy text-[15px] rounded-full"
                  style={{ fontWeight: 450 }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
