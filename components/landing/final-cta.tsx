"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const CTA_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: `${((i * 41 + 11) % 95) + 2}%`,
  top: `${((i * 59 + 3) % 91) + 4}%`,
  dur: 3.5 + (i % 4) * 0.7,
  del: (i % 6) * 0.6,
}))

export function FinalCTA() {
  return (
    <section className="section-padding bg-ghost-canvas overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #001033 0%, #0050f8 50%, #5fbdf7 100%)",
          }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {CTA_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-[3px] h-[3px] bg-pure-surface rounded-full"
                style={{ left: p.left, top: p.top, opacity: 0.12 }}
                animate={{ opacity: [0.08, 0.3, 0.08], scale: [1, 1.3, 1] }}
                transition={{ duration: p.dur, repeat: Infinity, delay: p.del }}
              />
            ))}
          </div>

          {/* Radial Glow — chartreuse accent */}
          <div 
            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20"
            style={{ 
              background: "radial-gradient(circle, rgba(208, 241, 0, 0.4) 0%, transparent 70%)" 
            }}
          />

          {/* Content */}
          <div className="relative z-10 py-[72px] md:py-[96px] px-[28px] md:px-[56px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <h2 
                className="font-display text-pure-surface max-w-[600px] mx-auto text-balance"
                style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.01em", fontWeight: 400 }}
              >
                Ready to Transform
                <br />
                Your Networking?
              </h2>
              <p 
                className="mt-[20px] text-ice-veil/70 max-w-[480px] mx-auto"
                style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
              >
                Join thousands of professionals who have already made the switch to 
                smart business cards. Start your free trial today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-[28px] flex flex-col sm:flex-row items-center justify-center gap-[12px]"
            >
              <Link
                href="#pricing"
                className="group px-[24px] py-[12px] bg-chartreuse-pulse text-midnight-navy text-[15px] tracking-[-0.016em] rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-[8px]"
                style={{ fontWeight: 450, boxShadow: "var(--shadow-subtle-3)" }}
              >
                <Sparkles size={16} />
                Get Your Card Today
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="#"
                className="px-[24px] py-[12px] text-pure-surface text-[15px] tracking-[-0.016em] rounded-full border border-ice-veil/20 hover:border-ice-veil/40 transition-all duration-200"
                style={{ fontWeight: 400, boxShadow: "var(--shadow-md-2)" }}
              >
                Talk to Sales
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-[40px] flex items-center justify-center gap-[24px] text-ice-veil/50"
            >
              <div className="flex items-center gap-[8px]">
                <div className="flex -space-x-[6px]">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-[28px] h-[28px] rounded-full bg-pure-surface/15 border-[2px] border-deep-cosmos/50 flex items-center justify-center text-[10px] text-pure-surface/70"
                      style={{ fontWeight: 450 }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-[13px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>10,000+ users</span>
              </div>
              <div className="hidden sm:flex items-center gap-[6px]">
                <svg className="w-[16px] h-[16px] text-chartreuse-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[13px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>4.9/5 rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
