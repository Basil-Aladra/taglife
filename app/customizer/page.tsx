"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Check, ArrowLeft, Layers, Zap, Hexagon, Sparkles } from "lucide-react"
import Link from "next/link"

const MATERIALS = [
  { 
    id: "midnight", 
    name: "Midnight Metal", 
    price: 29, 
    spec: "Aero-Grade Metal",
    icon: <Layers size={14} className="text-[#a1a1aa]" />
  },
  { 
    id: "aurora", 
    name: "Aurora Gradient", 
    price: 39, 
    spec: "Holo-Foil Finish",
    icon: <Sparkles size={14} className="text-[#5fbdf7]" />
  },
  { 
    id: "arctic", 
    name: "Arctic White", 
    price: 25, 
    spec: "Matte Ceramic",
    icon: <Hexagon size={14} className="text-white" />
  },
  { 
    id: "pulse", 
    name: "Pulse Neon", 
    price: 35, 
    spec: "Luminescent Edge",
    icon: <Zap size={14} className="text-[#d0f100]" />
  },
]

export default function CustomizerPage() {
  const [name, setName] = useState("Jane Doe")
  const [typography, setTypography] = useState<"Minimalist" | "Bold">("Bold")
  const [materialId, setMaterialId] = useState("midnight")
  const [isFocused, setIsFocused] = useState(false)
  const [pulseGlow, setPulseGlow] = useState(false)

  const selectedMaterial = MATERIALS.find(m => m.id === materialId)!

  // 3D Tilt Setup - Heavier physics
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  // Damping increased for heavier feel
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rotateX = useTransform(springY, [0, 1], [15, -15])
  const rotateY = useTransform(springX, [0, 1], [-15, 15])
  
  // Floor Dynamic Shadow (Environment)
  const shadowX = useTransform(springX, [0, 1], [40, -40])
  const shadowY = useTransform(springY, [0, 1], [60, 20])
  
  // Shine Position
  const shineX = useTransform(springX, [0, 1], [-100, 200])
  const shineY = useTransform(springY, [0, 1], [-100, 200])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  // CTA Glow effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseGlow(true)
      setTimeout(() => setPulseGlow(false), 1000)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getMaterialClasses = (id: string) => {
    switch (id) {
      case "midnight":
        return "bg-[#0a0a0c]"
      case "aurora":
        return "bg-gradient-to-tr from-[#001033] via-[#0050f8] to-[#5fbdf7] shadow-inner"
      case "arctic":
        return "bg-[#f8f9fc] border border-gray-200"
      case "pulse":
        return "bg-neutral-950 border border-[#d0f100]/40 shadow-[inset_0_0_30px_rgba(208,241,0,0.1)]"
      default:
        return "bg-black"
    }
  }

  const getTextColor = (id: string) => {
    switch (id) {
      case "midnight": return "text-white";
      case "aurora": return "text-white";
      case "arctic": return "text-[#1b2540]";
      case "pulse": return "text-[#d0f100]";
      default: return "text-white";
    }
  }

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-[#020617] overflow-hidden font-sans">
      
      {/* LEFT SIDE: The Stage / Live Preview Engine */}
      <div 
        className="flex-1 relative flex items-center justify-center perspective-[2000px] cursor-crosshair z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Exit Studio Pill */}
        <Link href="/" className="absolute top-6 left-6 z-50 group">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-[13px] font-medium transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20">
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Exit Studio</span>
          </div>
        </Link>

        {/* Subtle Radial Gradient Floor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

        {/* Environmental Floor Shadow (Reacts to tilt) */}
        <motion.div 
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen"
          style={{
            x: shadowX,
            y: shadowY,
            background: materialId === 'aurora' ? 'radial-gradient(circle, rgba(0,80,248,0.4) 0%, transparent 70%)' 
                      : materialId === 'pulse' ? 'radial-gradient(circle, rgba(208,241,0,0.2) 0%, transparent 70%)'
                      : materialId === 'arctic' ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)'
          }}
        />

        {/* The Physical Card Wrapper */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-[320px] h-[200px] sm:w-[420px] sm:h-[265px] md:w-[480px] md:h-[300px] lg:w-[540px] lg:h-[340px] rounded-[24px]"
        >
          {/* Card Base Shadow */}
          <div className="absolute inset-0 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none" />

          {/* Material Crossfade Layer */}
          <AnimatePresence mode="popLayout">
            {MATERIALS.map(mat => materialId === mat.id && (
              <motion.div
                key={mat.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 rounded-[24px] overflow-hidden ${getMaterialClasses(mat.id)}`}
              >
                {/* Specific Textures */}
                {mat.id === 'midnight' && (
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGg0djRIMHoiIGZpbGw9InVybCgjbikiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9Im4iIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDBoNHY0SDB6IiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+CjwvZGVmcz4KPC9zdmc+')] mix-blend-overlay" />
                )}
                {mat.id === 'aurora' && (
                  <motion.div 
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_20%,rgba(255,255,255,0.2)_50%,transparent_80%)] bg-[length:200%_200%] mix-blend-overlay"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Shine Simulation Layer */}
          <motion.div
            className="absolute inset-0 rounded-[24px] pointer-events-none z-10 mix-blend-overlay opacity-70"
            style={{
              background: useTransform(
                [shineX, shineY],
                ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.4) 0%, transparent 50%)`
              )
            }}
          />

          {/* Content Layer (Floating via translateZ) */}
          <div className={`absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-between z-20 ${getTextColor(materialId)}`} style={{ transform: "translateZ(30px)" }}>
            {/* Top Area: Chip & Logo */}
            <div className="flex justify-between items-start">
              {/* Chip Mockup */}
              <div className={`w-10 h-8 md:w-12 md:h-10 rounded-[6px] border ${materialId === 'arctic' ? 'border-[#1b2540]/20' : 'border-white/20'} flex flex-wrap gap-1 p-1 opacity-80 backdrop-blur-sm`}>
                 <div className={`w-full h-[1px] ${materialId === 'arctic' ? 'bg-[#1b2540]' : 'bg-white'}`} />
                 <div className={`w-full h-[1px] ${materialId === 'arctic' ? 'bg-[#1b2540]' : 'bg-white'}`} />
                 <div className={`w-full h-[1px] ${materialId === 'arctic' ? 'bg-[#1b2540]' : 'bg-white'}`} />
              </div>
              {/* Taglife Logo */}
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${materialId === 'arctic' ? 'bg-[#1b2540] text-white' : 'bg-white/10 border border-white/10 backdrop-blur-md text-white'}`}>
                <span className={`font-black text-xl md:text-2xl leading-none ${materialId === 'pulse' ? 'text-[#d0f100]' : ''}`}>T</span>
              </div>
            </div>
            
            {/* Name Typography */}
            <div className="space-y-1">
              <p className="text-[10px] md:text-[12px] font-bold tracking-widest uppercase opacity-50">NFC Profile</p>
              <div className={`transition-all duration-500 ${typography === 'Bold' ? 'text-[28px] sm:text-[32px] md:text-[40px] font-bold tracking-tighter leading-none' : 'text-[20px] sm:text-[24px] md:text-[28px] font-medium tracking-[0.15em] uppercase leading-tight'}`}>
                {name || "YOUR NAME"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Control HUD */}
      <div className="w-full md:w-[400px] h-[50vh] md:h-full bg-white/5 backdrop-blur-2xl border-t md:border-t-0 md:border-l border-white/10 flex flex-col z-20 shrink-0 shadow-[-20px_0_50px_rgba(0,0,0,0.3)]">
        
        {/* Scrollable Controls */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
          
          {/* Section: Name */}
          <div className="space-y-4">
            <label className="block text-white/50 text-[12px] font-bold tracking-widest uppercase">Cardholder Identity</label>
            <div className="relative group">
              <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={24}
                spellCheck={false}
                className="w-full bg-black/20 border border-white/10 rounded-[12px] px-4 py-4 text-white text-[15px] font-medium outline-none transition-colors"
                placeholder="Enter your name"
              />
              {/* Neon Glow Bottom Border */}
              <motion.div 
                initial={false}
                animate={{ 
                  opacity: isFocused ? 1 : 0,
                  boxShadow: isFocused ? "0 4px 20px -2px rgba(208,241,0,0.5)" : "none" 
                }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d0f100] rounded-b-[12px] origin-center"
              />
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Section: Typography Fluid Tabs */}
          <div className="space-y-4">
            <label className="block text-white/50 text-[12px] font-bold tracking-widest uppercase">Typography Style</label>
            <div className="flex p-1 bg-black/20 border border-white/10 rounded-full relative">
              {["Minimalist", "Bold"].map(style => (
                <button
                  key={style}
                  onClick={() => setTypography(style as any)}
                  className={`flex-1 py-3 text-[13px] font-semibold relative z-10 transition-colors ${typography === style ? 'text-[#020617]' : 'text-white/60 hover:text-white'}`}
                >
                  {typography === style && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Section: Materials Interactive Tiles */}
          <div className="space-y-4">
            <label className="block text-white/50 text-[12px] font-bold tracking-widest uppercase">Material Chassis</label>
            <div className="grid grid-cols-1 gap-3">
              {MATERIALS.map(mat => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={mat.id}
                  onClick={() => setMaterialId(mat.id)}
                  className={`relative flex items-center justify-between p-4 rounded-[16px] text-left transition-all border ${
                    materialId === mat.id 
                      ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                      : 'bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Visual Circle Preview */}
                    <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 ${mat.id === 'midnight' ? 'bg-[#111]' : mat.id === 'aurora' ? 'bg-gradient-to-tr from-[#0050f8] to-[#5fbdf7]' : mat.id === 'arctic' ? 'bg-white' : 'bg-neutral-900 border-[#d0f100]/50 shadow-[0_0_15px_rgba(208,241,0,0.2)]'}`}>
                      {materialId === mat.id && <Check size={16} className={mat.id === 'arctic' ? 'text-[#1b2540]' : 'text-white'} />}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-white mb-1">{mat.name}</h4>
                      <div className="flex items-center gap-1.5 opacity-70">
                        {mat.icon}
                        <span className="text-[11px] font-medium text-white/80 uppercase tracking-wide">{mat.spec}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="h-4" />

        </div>

        {/* Checkout HUD */}
        <div className="p-8 border-t border-white/10 bg-black/40 backdrop-blur-xl shrink-0">
          <div className="flex items-end justify-between mb-5">
            <div className="flex flex-col">
              <span className="text-white/50 text-[11px] font-bold tracking-widest uppercase mb-1">Total Configuration</span>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={selectedMaterial.price}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="text-white text-[32px] font-bold leading-none tracking-tight"
                >
                  ${selectedMaterial.price}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-[11px] text-white/40 font-medium tracking-wide">
              Free Shipping included
            </div>
          </div>

          {/* Magnetic Neon CTA */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full group overflow-hidden rounded-[16px] bg-[#d0f100] text-[#020617] py-4 font-bold text-[15px] flex items-center justify-center gap-2 transition-transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              Order This Design
            </span>
            {/* Periodic Glow Spread */}
            <motion.div
              animate={{ 
                opacity: pulseGlow ? [0, 0.5, 0] : 0,
                scale: pulseGlow ? [1, 1.5, 1] : 1
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-white/50 blur-xl z-0"
            />
          </motion.button>
        </div>

      </div>
      
      {/* Global Style for custom scrollbar hidden in generic view but useful for HUD */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  )
}
