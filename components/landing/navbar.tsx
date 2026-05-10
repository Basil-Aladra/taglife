"use client"

import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#services", label: "Products" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "About" },
  { href: "#faq", label: "FAQ" },
]

// Magnetic Wrapper Component for the High-End HUD feel
function MagneticWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2) // Subtle pull
    y.set((e.clientY - centerY) * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

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
          paddingTop: isScrolled ? "12px" : "24px",
          paddingBottom: isScrolled ? "12px" : "24px",
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)",
          borderColor: isScrolled ? "rgba(208, 241, 0, 0.15)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          boxShadow: isScrolled ? "0 4px 30px -10px rgba(208,241,0,0.1)" : "none"
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-[100] w-full border-b transition-colors"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 xl:px-8">
          
          {/* 1. The 'Magnetic' Branding (Left) */}
          <MagneticWrapper>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-8 h-8">
                {/* Breathe Animation Dot */}
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }} 
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 bg-[#d0f100] rounded-full shadow-[0_0_8px_rgba(208,241,0,0.8)] z-10" 
                />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#020617] shadow-lg">
                  T
                </div>
              </div>
              <span className="text-[16px] font-bold tracking-tight text-white">
                TapLink
              </span>
            </Link>
          </MagneticWrapper>

          {/* 2. The Central Navigation HUD */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            <div 
              className="flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 relative"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className="relative px-5 py-1.5 text-[13px] font-medium transition-colors duration-300 z-10 cursor-pointer"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${hoveredLink === link.href ? 'text-white' : 'text-white/50'}`}>
                    {link.label}
                  </span>
                  {/* Sliding Highlight Pill */}
                  {hoveredLink === link.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. The CTA Duo (Right) */}
          <div className="hidden items-center gap-3 md:flex">
            
            {/* Design Your Card (Ghost Style) */}
            <MagneticWrapper>
              <Link
                href="/customizer"
                className="relative group flex items-center justify-center rounded-[9999px] border border-[#d0f100]/30 bg-transparent px-5 text-[13px] font-medium text-[#d0f100] transition-all duration-300 h-[38px] cursor-pointer"
              >
                <span className="relative z-10">Design Your Card</span>
                {/* Neon Underglow */}
                <div className="absolute inset-0 bg-[#d0f100]/20 blur-md rounded-[9999px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            </MagneticWrapper>

            {/* Get Started (Solid Style) */}
            <MagneticWrapper>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link
                  href="#pricing"
                  className="relative overflow-hidden flex items-center justify-center rounded-[9999px] bg-[#d0f100] px-5 text-[13px] font-bold text-[#020617] transition-all duration-300 h-[38px] group cursor-pointer"
                >
                  <span className="relative z-10">Get Started</span>
                  {/* Liquid Fill Effect */}
                  <div className="absolute inset-0 bg-white/40 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full z-0 origin-center" />
                </Link>
              </motion.div>
            </MagneticWrapper>

          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="rounded-full p-2 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white md:hidden cursor-pointer"
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
            className="fixed inset-0 z-[99] bg-[#020617]/90 px-5 pt-28 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_1px_0_rgba(255,255,255,0.08)_inset]"
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
                    className="block rounded-2xl px-4 py-3.5 text-[14px] font-medium tracking-tight text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.28 }}
                className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4"
              >
                <Link
                  href="/customizer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-[9999px] border border-[#d0f100]/30 bg-transparent px-5 py-3.5 text-center text-[14px] font-bold text-[#d0f100] transition-all duration-300 hover:border-[#d0f100] hover:bg-[#d0f100]/10 hover:shadow-[0_0_20px_rgba(208,241,0,0.2)]"
                >
                  Design Your Card
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-[9999px] bg-[#d0f100] px-5 py-3.5 text-center text-[14px] font-bold text-[#020617] transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(208,241,0,0.35)]"
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
