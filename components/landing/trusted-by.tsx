"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Stripe", width: 60 },
  { name: "Notion", width: 80 },
  { name: "Slack", width: 70 },
  { name: "Linear", width: 70 },
  { name: "Figma", width: 55 },
  { name: "Vercel", width: 75 },
]

export function TrustedBy() {
  return (
    <section className="py-[56px] md:py-[72px] bg-ghost-canvas">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-slate-ink text-[13px] tracking-[-0.005em] mb-[32px]"
          style={{ fontWeight: 400, lineHeight: 1.54 }}
        >
          Trusted by forward-thinking teams at
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-[24px] md:gap-[56px]">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex items-center gap-[8px] text-slate-ink/50 hover:text-midnight-navy/70 transition-colors duration-300"
            >
              <div className="w-[28px] h-[28px] rounded-[6px] bg-midnight-navy/[0.04] flex items-center justify-center">
                <span className="text-[11px]" style={{ fontWeight: 450 }}>{logo.name.charAt(0)}</span>
              </div>
              <span className="text-[15px] tracking-[-0.016em]" style={{ fontWeight: 450 }}>{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
