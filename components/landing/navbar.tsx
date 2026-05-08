"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#services", label: "Products" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "About" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: isScrolled
            ? "rgba(27, 37, 64, 0.7)"
            : "rgba(0, 0, 0, 0)",
          borderColor: isScrolled
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-[100] w-full border-b py-6"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          {/* Logo — far left */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d0f100] text-sm font-bold text-[#1b2540]">
              T
            </div>
            <span className="text-[15px] font-bold tracking-[-0.03em] text-white">
              TapLink
            </span>
          </Link>

          {/* Center nav links — desktop */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-[-0.016em] text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — Login + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="#"
              className="text-[13px] font-medium tracking-[-0.016em] text-white/70 transition-colors duration-200 hover:text-white"
            >
              Log in
            </Link>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="#pricing"
                className="inline-block rounded-[9999px] bg-[#d0f100] px-5 py-2 text-[13px] font-medium tracking-[-0.016em] text-[#1b2540] transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(208,241,0,0.35)]"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="rounded-full p-2 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white md:hidden"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] bg-[#1b2540]/90 px-5 pt-28 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_1px_0_rgba(255,255,255,0.08)_inset]"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.28 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-[13px] font-medium tracking-[-0.016em] text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.28 }}
                className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3"
              >
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-[9999px] px-4 py-3 text-center text-[13px] font-medium tracking-[-0.016em] text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  Log in
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-[9999px] bg-[#d0f100] px-5 py-2.5 text-center text-[13px] font-medium tracking-[-0.016em] text-[#1b2540] transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(208,241,0,0.35)]"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
