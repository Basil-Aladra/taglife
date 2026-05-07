"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const cards = [
  {
    id: 1,
    name: "Midnight",
    color: "from-midnight-navy to-deep-cosmos",
    material: "Metal",
    description: "Sleek black metal with laser-etched details",
  },
  {
    id: 2,
    name: "Arctic",
    color: "from-pure-surface to-ghost-canvas",
    material: "Premium PVC",
    description: "Clean white with subtle matte finish",
    dark: true,
  },
  {
    id: 3,
    name: "Aurora",
    color: "from-deep-cosmos via-[#0050f8] to-[#5fbdf7]",
    material: "Metal",
    description: "Gradient blue with holographic elements",
  },
  {
    id: 4,
    name: "Pulse",
    color: "from-chartreuse-pulse to-[#a8c700]",
    material: "Bamboo",
    description: "Eco-friendly with vibrant accent",
    dark: true,
  },
]

export function CardShowcase() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="section-padding bg-ghost-canvas overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[56px]"
        >
          <span 
            className="inline-block px-[12px] py-[4px] bg-deep-cosmos/[0.04] text-deep-cosmos text-[13px] rounded-[16px] mb-[16px]"
            style={{ fontWeight: 450, lineHeight: 1.54, letterSpacing: "-0.005em" }}
          >
            Card Collection
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Find Your Perfect Card
          </h2>
          <p 
            className="mt-[16px] text-slate-ink max-w-[520px] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
          >
            Premium materials meet cutting-edge technology. Each card is a statement piece.
          </p>
        </motion.div>

        {/* Showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[72px]">
          {/* Main Card Display */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative w-full"
          >
            <div className="relative max-w-[420px] mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-deep-cosmos/8 blur-[48px] rounded-full scale-90" />
              
              {/* Card */}
              <motion.div
                key={activeCard}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative aspect-[1.6/1] rounded-[20px] bg-gradient-to-br ${cards[activeCard].color} p-[28px] ${cards[activeCard].dark ? "text-midnight-navy" : "text-pure-surface"}`}
                style={{ 
                  boxShadow: "0 32px 64px -16px rgba(0, 16, 51, 0.35), 0 0 0 1px rgba(0, 16, 51, 0.06)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex items-start justify-between h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-[32px] h-[32px] rounded-[8px] bg-current/10 backdrop-blur-sm flex items-center justify-center">
                      <span style={{ fontWeight: 480 }} className="text-[13px]">T</span>
                    </div>
                    <div>
                      <p className="text-[13px] opacity-60 tracking-[-0.005em]" style={{ fontWeight: 400 }}>Your Name</p>
                      <h3 className="text-[18px] tracking-[-0.009em]" style={{ fontWeight: 450 }}>TapLink Card</h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between h-full">
                    <div className="w-[40px] h-[40px] rounded-[8px] bg-current/8 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-[24px] h-[24px] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 12a6 6 0 0 0 12 0" />
                        <path d="M6 12a6 6 0 0 1 12 0" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <div className="w-[32px] h-[32px] grid grid-cols-3 gap-[2px] opacity-40">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-[8px] h-[8px] bg-current rounded-[2px]" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card Selector */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-[8px] w-full"
          >
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => setActiveCard(index)}
                className={`w-full text-left p-[20px] rounded-[20px] transition-all duration-300 ${
                  activeCard === index 
                    ? "bg-pure-surface" 
                    : "bg-transparent hover:bg-pure-surface/50"
                }`}
                style={activeCard === index ? { boxShadow: "var(--shadow-subtle-4)" } : {}}
              >
                <div className="flex items-center gap-[16px]">
                  <div 
                    className={`w-[56px] h-[36px] rounded-[8px] bg-gradient-to-br ${card.color} flex-shrink-0`} 
                    style={{ boxShadow: "0 4px 12px -4px rgba(0, 16, 51, 0.15)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[8px]">
                      <h4 className="text-midnight-navy text-[15px] tracking-[-0.016em]" style={{ fontWeight: 450 }}>{card.name}</h4>
                      <span 
                        className="px-[8px] py-[2px] text-[12px] bg-ghost-canvas text-slate-ink rounded-full"
                        style={{ fontWeight: 400 }}
                      >
                        {card.material}
                      </span>
                    </div>
                    <p className="text-[14px] text-slate-ink mt-[4px] tracking-[-0.006em]" style={{ fontWeight: 400 }}>{card.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
