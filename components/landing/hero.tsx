"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

// Pre-computed particles to avoid SSR hydration mismatch
const HERO_PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  left: `${((i * 37 + 13) % 97) + 1}%`,
  top: `${((i * 53 + 7) % 93) + 3}%`,
  dur: 3 + (i % 5) * 0.8,
  del: (i % 7) * 0.5,
}))

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient — matches var(--gradient-hero) */}
      <div 
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #001033 0%, #0050f8 55%, #5fbdf7 100%)" }}
      />
      
      {/* Animated Dot Pattern — CSS-only to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15]">
          {HERO_PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-pure-surface rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
              transition={{ duration: p.dur, repeat: Infinity, delay: p.del }}
            />
          ))}
        </div>
      </div>

      {/* Radial Glow — matches var(--gradient-blue-glow) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40"
        style={{ 
          background: "radial-gradient(50% 50%, rgba(0, 128, 248, 0.32) 0%, rgba(95, 189, 247, 0.32) 20%, rgba(211, 239, 252, 0.32) 60%, rgba(248, 249, 252, 0) 100%)" 
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container pt-[120px] md:pt-[160px] pb-[80px]">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-[32px]"
        >
          <Link 
            href="#services"
            className="inline-flex items-center gap-[8px] px-[16px] py-[8px] bg-pure-surface/8 backdrop-blur-sm border border-ice-veil/15 rounded-full text-pure-surface"
          >
            <span className="px-[8px] py-[2px] bg-chartreuse-pulse text-deep-cosmos text-[13px] rounded-full" style={{ fontWeight: 450, lineHeight: 1.54 }}>
              New
            </span>
            <span className="text-pure-surface/90 text-[14px] tracking-[-0.006em]" style={{ fontWeight: 450 }}>Introducing Team Cards for Enterprise</span>
            <ArrowRight size={14} className="text-pure-surface/50" />
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 
            className="font-sans text-pure-surface max-w-[800px] mx-auto text-balance tracking-tighter"
            style={{ 
              fontSize: "clamp(32px, 5vw, 48px)", 
              lineHeight: 1.1, 
              fontWeight: 500 
            }}
          >
            The Future of Networking
            <br />
            <span className="text-ice-veil">Is Just One Tap Away</span>
          </h1>
        </motion.div>

        {/* Subheadline — base-6: 16px/1.5 on mobile, lg-2: 18px/1.33 on desktop */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-[20px] text-center text-pure-surface/65 max-w-[560px] mx-auto"
          style={{ fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
        >
          Transform your networking with smart NFC business cards. Share your 
          contact info, digital profile, and personal website with a single tap.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-[12px] mt-[32px]"
        >
          <Link
            href="#pricing"
            className="group px-[24px] py-[12px] bg-chartreuse-pulse text-midnight-navy text-[15px] tracking-[-0.016em] rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-[8px]"
            style={{ fontWeight: 450, boxShadow: "var(--shadow-subtle-3)" }}
          >
            <Sparkles size={16} />
            Start Connecting Today
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="#how-it-works"
            className="px-[24px] py-[12px] text-pure-surface text-[15px] tracking-[-0.016em] rounded-full border border-ice-veil/20 hover:border-ice-veil/40 transition-all duration-200"
            style={{ fontWeight: 400, boxShadow: "var(--shadow-md-2)" }}
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-[56px] md:mt-[96px] relative"
        >
          <div className="relative max-w-[440px] mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-chartreuse-pulse/15 blur-[60px] rounded-full scale-110" />
            
            {/* Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-gradient-to-br from-midnight-navy via-deep-cosmos to-midnight-navy rounded-[20px] p-[28px] border border-ice-veil/12"
              style={{ boxShadow: "0 40px 80px -20px rgba(0, 16, 51, 0.6), 0 0 0 1px rgba(224, 246, 255, 0.06)" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-[36px] h-[36px] rounded-[10px] bg-chartreuse-pulse flex items-center justify-center mb-[20px]">
                    <span className="text-deep-cosmos text-[14px]" style={{ fontWeight: 480 }}>T</span>
                  </div>
                  <h3 className="text-pure-surface text-[20px] tracking-[-0.01em]" style={{ fontWeight: 450 }}>Sarah Johnson</h3>
                  <p className="text-ice-veil/60 text-[14px] mt-[4px] tracking-[-0.006em]" style={{ fontWeight: 400 }}>Product Designer</p>
                  <p className="text-ice-veil/40 text-[13px] mt-[2px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>@Acme Inc.</p>
                </div>
                <div className="w-[56px] h-[56px] rounded-[12px] bg-pure-surface/8 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-[40px] h-[40px] grid grid-cols-3 gap-[3px]">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-[10px] h-[10px] bg-pure-surface/90 rounded-[2px]" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* NFC Icon */}
              <div className="absolute bottom-[16px] right-[16px] flex items-center gap-[6px] text-ice-veil/40 text-[12px]" style={{ fontWeight: 400 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 12a6 6 0 0 0 12 0" />
                  <path d="M6 12a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                NFC Enabled
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-[8px] md:-right-[48px] top-1/2 -translate-y-1/2 hidden sm:block"
            >
              <div 
                className="w-[120px] h-[210px] bg-midnight-navy rounded-[20px] border border-ice-veil/12 overflow-hidden"
                style={{ boxShadow: "0 20px 40px -10px rgba(0, 16, 51, 0.4)" }}
              >
                <div className="h-[20px] bg-deep-cosmos flex items-center justify-center">
                  <div className="w-[40px] h-[4px] bg-ice-veil/20 rounded-full" />
                </div>
                <div className="p-[12px] space-y-[8px]">
                  <div className="w-full h-[8px] bg-ice-veil/8 rounded-[2px]" />
                  <div className="w-3/4 h-[8px] bg-ice-veil/8 rounded-[2px]" />
                  <div className="w-full h-[40px] bg-chartreuse-pulse/15 rounded-[8px] mt-[16px] flex items-center justify-center">
                    <span className="text-chartreuse-pulse text-[10px]" style={{ fontWeight: 450 }}>Contact Saved!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade — transitions into ghost-canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-ghost-canvas to-transparent" />
    </section>
  )
}
