"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="section-padding bg-ghost-canvas">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[20px] overflow-hidden py-[72px] md:py-[96px] px-[28px] md:px-[56px] text-center"
          style={{ 
            backgroundColor: "#001033",
          }}
        >
          {/* Content */}
          <div className="relative z-10">
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
                Ready to upgrade
                <br />
                your networking?
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
              className="mt-[32px]"
            >
              <Link
                href="#pricing"
                className="group inline-flex items-center gap-[8px] px-[32px] py-[16px] bg-chartreuse-pulse text-midnight-navy text-[16px] tracking-[-0.016em] rounded-[9999px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontWeight: 450 }}
              >
                Get Your Card Today
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
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
