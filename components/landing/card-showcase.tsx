"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cards = [
  {
    id: 1,
    name: "Midnight",
    material: "Metal",
    badgeColor: "bg-slate-100 text-slate-700",
    description: "Deep navy and black matte finish. Sleek, stealthy, and professional.",
    textColor: "text-white",
    cardBg: "bg-[#0a0f1c]",
    texture: (
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    )
  },
  {
    id: 2,
    name: "Arctic",
    material: "Premium PVC",
    badgeColor: "bg-blue-50 text-blue-700",
    description: "Pure white matte with a soft silver edge. Minimalist and clean.",
    textColor: "text-[#1b2540]",
    cardBg: "bg-white",
    texture: (
      <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(0,0,0,0.02)]"></div>
    )
  },
  {
    id: 3,
    name: "Aurora",
    material: "Metal",
    badgeColor: "bg-indigo-50 text-indigo-700",
    description: "Deep blue gradient with a moving holographic shine effect.",
    textColor: "text-white",
    cardBg: "bg-gradient-to-b from-[#001033] via-[#0050f8] to-[#5fbdf7]",
    texture: (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
        style={{ backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      ></motion.div>
    )
  },
  {
    id: 4,
    name: "Pulse",
    material: "Eco-friendly",
    badgeColor: "bg-[#d0f100]/20 text-[#6a7a00]",
    description: "Sustainable dark bamboo texture with a vibrant chartreuse accent.",
    textColor: "text-white",
    cardBg: "bg-[#1a1a1a]",
    texture: (
      <>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.1 0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#d0f100]"></div>
      </>
    )
  },
]

export function CardShowcase() {
  const [activeCard, setActiveCard] = useState(0)
  const [hoveredOption, setHoveredOption] = useState<number | null>(null)
  const [name, setName] = useState("Your Name")
  
  // 3D Tilt State
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max tilt is 15 degrees
    const rotateXValue = ((y - centerY) / centerY) * -15; 
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const currentCard = cards[activeCard]
  const isCardDimmed = hoveredOption !== null && hoveredOption !== activeCard

  return (
    <section className="py-[80px] md:py-[120px] bg-[#f8f9fc] overflow-hidden">
      <div className="max-w-6xl mx-auto px-[24px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[64px] flex flex-col items-center"
        >
          <span 
            className="inline-block px-[16px] py-[6px] bg-white text-[#1b2540] text-[11px] uppercase rounded-full mb-[24px] tracking-[0.15em] font-medium shadow-sm"
          >
            Card Collection
          </span>
          <h2 
            className="font-serif text-[#1b2540]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 400 }}
          >
            Find Your Perfect Card
          </h2>
          
          <div className="mt-[32px] w-full max-w-[320px]">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-[16px] py-[12px] bg-white border border-gray-200 rounded-[12px] text-[15px] text-[#1b2540] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0050f8]/20 focus:border-[#0050f8] transition-all"
            />
          </div>
        </motion.div>

        {/* Showcase Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[64px] lg:gap-[100px]">
          
          {/* Interactive Card Preview (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-[500px] perspective-[1000px]"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY, scale: isCardDimmed ? 0.95 : 1, opacity: isCardDimmed ? 0.7 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
              className="relative w-full aspect-[1.6/1] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Dynamic Blurred Shadow */}
              <motion.div 
                className="absolute inset-0 rounded-[24px] z-0"
                animate={{
                  boxShadow: `rgba(0, 39, 80, 0.2) ${rotateY * -1}px ${rotateX * 1 + 30}px 60px 0px`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 w-full h-full rounded-[24px] p-[32px] overflow-hidden z-10 ${currentCard.cardBg} ${currentCard.textColor}`}
                >
                  {/* Texture Layer */}
                  {currentCard.texture}
                  
                  {/* Card Content Layer */}
                  <div className="relative z-20 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div className="w-[40px] h-[40px] rounded-[12px] bg-black/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <svg className="w-[24px] h-[24px] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M6 12a6 6 0 0 0 12 0" />
                          <path d="M6 12a6 6 0 0 1 12 0" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      </div>
                      <div className="w-[48px] h-[32px] rounded-[6px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex items-center justify-end px-[8px]">
                        <div className="w-[8px] h-[8px] rounded-full bg-current opacity-40"></div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[13px] opacity-60 tracking-wider uppercase mb-[4px]" style={{ fontWeight: 500 }}>
                        {currentCard.name} Edition
                      </p>
                      <h3 className="text-[24px] tracking-[-0.02em] whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontWeight: 500 }}>
                        {name || "Your Name"}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Material Selector (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-[480px] space-y-[12px]"
          >
            {cards.map((card, index) => {
              const isActive = activeCard === index;
              
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  onMouseEnter={() => setHoveredOption(index)}
                  onMouseLeave={() => setHoveredOption(null)}
                  className={`w-full text-left p-[24px] rounded-[24px] transition-all duration-300 relative bg-white ${
                    isActive 
                      ? "ring-1 ring-[#0050f8]/20 z-10" 
                      : "border border-transparent hover:border-gray-200 hover:shadow-sm z-0"
                  }`}
                  style={isActive ? { boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" } : {}}
                >
                  <div className="flex items-center gap-[20px]">
                    {/* Tiny material preview */}
                    <div 
                      className={`w-[48px] h-[48px] rounded-[12px] flex-shrink-0 relative overflow-hidden ${card.cardBg} border border-black/5`} 
                    >
                      {/* Mini texture */}
                      {card.texture}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-[12px] mb-[6px]">
                        <h4 className="text-[#1b2540] text-[17px] tracking-[-0.01em]" style={{ fontWeight: 500 }}>
                          {card.name}
                        </h4>
                        <span 
                          className={`px-[10px] py-[4px] text-[11px] uppercase tracking-wider rounded-full font-medium ${card.badgeColor}`}
                        >
                          {card.material}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#596075] tracking-[-0.01em] leading-snug">
                        {card.description}
                      </p>
                    </div>
                    
                    {/* Active Indicator indicator */}
                    <div className={`w-[20px] h-[20px] rounded-full border-[2px] flex items-center justify-center transition-colors ${
                      isActive ? "border-[#0050f8]" : "border-gray-200"
                    }`}>
                      {isActive && <div className="w-[10px] h-[10px] rounded-full bg-[#0050f8]"></div>}
                    </div>
                  </div>
                </button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
