"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const materials = [
  {
    id: "metal",
    name: "Metal",
    description: "Premium stainless steel with laser-etched details. The ultimate statement piece.",
    color: "from-midnight-navy to-deep-cosmos",
    accent: "Brushed finish",
  },
  {
    id: "wood",
    name: "Wood",
    description: "Sustainable bamboo with natural grain. Eco-conscious networking.",
    color: "from-[#d4a574] to-[#a67c52]",
    accent: "Natural grain",
  },
  {
    id: "plastic",
    name: "Plastic",
    description: "Lightweight recycled PVC with matte finish. Affordable and durable.",
    color: "from-pure-surface to-ghost-canvas",
    accent: "Matte texture",
    dark: true,
  },
]

export function CardShowcase() {
  const [activeMaterial, setActiveMaterial] = useState(0)

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
            Premium Materials,
            <br className="hidden md:block" />
            <span className="text-deep-cosmos"> Timeless Design</span>
          </h2>
        </motion.div>

        {/* Showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[72px]">
          {/* Main Card Display - Large Card on Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative w-full"
          >
            <div className="relative max-w-[480px] mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-deep-cosmos/8 blur-[48px] rounded-full scale-90" />
              
              {/* Card with Shine Effect */}
              <motion.div
                key={activeMaterial}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative aspect-[1.6/1] rounded-[20px] bg-gradient-to-br ${materials[activeMaterial].color} p-[32px] ${materials[activeMaterial].dark ? "text-midnight-navy" : "text-pure-surface"} overflow-hidden`}
                style={{ 
                  boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Hover Shine Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 55%, transparent 60%)",
                    transform: "translateX(-100%)",
                    animation: "none",
                  }}
                />
                <style jsx>{`
                  .group:hover div[style*="linear-gradient(105deg"] {
                    animation: shine 0.8s ease-in-out forwards;
                  }
                  @keyframes shine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                  }
                `}</style>

                <div className="flex items-start justify-between h-full relative z-10">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-[36px] h-[36px] rounded-[10px] bg-current/10 backdrop-blur-sm flex items-center justify-center">
                      <span style={{ fontWeight: 480 }} className="text-[14px]">T</span>
                    </div>
                    <div>
                      <p className="text-[13px] opacity-60 tracking-[-0.005em]" style={{ fontWeight: 400 }}>Your Name</p>
                      <h3 className="text-[20px] tracking-[-0.009em]" style={{ fontWeight: 450 }}>TapLink Card</h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between h-full">
                    <div className="w-[44px] h-[44px] rounded-[10px] bg-current/8 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-[26px] h-[26px] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 12a6 6 0 0 0 12 0" />
                        <path d="M6 12a6 6 0 0 1 12 0" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <div className="w-[36px] h-[36px] grid grid-cols-3 gap-[2px] opacity-40">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-[10px] h-[10px] bg-current rounded-[2px]" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Material Selector - Features on Right */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-[12px] w-full"
          >
            {materials.map((material, index) => (
              <button
                key={material.id}
                onClick={() => setActiveMaterial(index)}
                className={`w-full text-left p-[24px] rounded-[20px] transition-all duration-300 ${
                  activeMaterial === index 
                    ? "bg-pure-surface" 
                    : "bg-transparent hover:bg-pure-surface/50"
                }`}
                style={activeMaterial === index ? { 
                  boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" 
                } : {}}
              >
                <div className="flex items-center gap-[16px]">
                  <div 
                    className={`w-[64px] h-[40px] rounded-[10px] bg-gradient-to-br ${material.color} flex-shrink-0 relative overflow-hidden group`} 
                    style={{ boxShadow: "0 4px 12px -4px rgba(0, 16, 51, 0.15)" }}
                  >
                    {/* Mini shine on swatch */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[8px]">
                      <h4 className="text-midnight-navy text-[17px] tracking-[-0.01em]" style={{ fontWeight: 450 }}>{material.name}</h4>
                      <span 
                        className="px-[8px] py-[2px] text-[12px] bg-ghost-canvas text-slate-ink rounded-full"
                        style={{ fontWeight: 400 }}
                      >
                        {material.accent}
                      </span>
                    </div>
                    <p className="text-[14px] text-slate-ink mt-[4px] tracking-[-0.006em]" style={{ fontWeight: 400 }}>{material.description}</p>
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
