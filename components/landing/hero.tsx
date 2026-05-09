"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Wifi, Check, TrendingUp, QrCode } from "lucide-react"
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
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #001033 0%, #0050f8 55%, #5fbdf7 100%)" }}
      />
      
      {/* Animated Dot Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15]">
          {HERO_PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-white rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
              transition={{ duration: p.dur, repeat: Infinity, delay: p.del }}
            />
          ))}
        </div>
      </div>

      {/* Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40 pointer-events-none"
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
            className="inline-flex items-center gap-[8px] px-[16px] py-[8px] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors rounded-full text-white shadow-[0_0_20px_rgba(208,241,0,0.1)]"
          >
            <span className="px-[8px] py-[2px] bg-[#d0f100] text-[#000d26] text-[12px] rounded-full font-bold uppercase tracking-wider">
              New
            </span>
            <span className="text-white/90 text-[14px] tracking-tight font-medium">Introducing Team Cards for Enterprise</span>
            <ArrowRight size={14} className="text-white/50" />
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
            className="font-sans text-white max-w-[800px] mx-auto text-balance tracking-tighter"
            style={{ 
              fontSize: "clamp(40px, 6vw, 64px)", 
              lineHeight: 1.05, 
              fontWeight: 700 
            }}
          >
            The Future of Networking
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#5fbdf7]">
              Is Just One Tap Away
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-[24px] text-center text-blue-50/80 max-w-[560px] mx-auto text-[18px]"
          style={{ lineHeight: 1.6, letterSpacing: "-0.01em" }}
        >
          Transform your networking with smart NFC business cards. Share your 
          contact info, digital profile, and personal website with a single tap.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-[16px] mt-[40px]"
        >
          <Link
            href="#pricing"
            className="group px-[28px] py-[14px] bg-[#d0f100] text-[#000d26] text-[15px] font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,241,0,0.4)] hover:-translate-y-1 flex items-center gap-[8px]"
          >
            <Sparkles size={16} className="text-[#000d26]" />
            Start Connecting Today
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="#how-it-works"
            className="px-[28px] py-[14px] text-white text-[15px] font-medium rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-[80px] md:mt-[120px] relative perspective-[2000px] flex justify-center"
        >
          <div className="relative max-w-[500px] w-full flex justify-center group">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#d0f100]/20 blur-[80px] rounded-full pointer-events-none" />

            {/* STICKER A: Contact Saved */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -left-[40px] lg:-left-[160px] top-[40px] z-30 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(208,241,0,0.3)" }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-[12px] pr-[16px] flex items-center gap-[12px] shadow-[0_20px_40px_rgba(0,10,30,0.5)] -rotate-6 cursor-pointer"
              >
                <div className="w-[28px] h-[28px] rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <Check size={14} className="text-green-400" strokeWidth={3} />
                </div>
                <span className="text-white text-[13px] font-bold tracking-wide">Contact Saved</span>
              </motion.div>
            </motion.div>

            {/* STICKER B: Tap to Connect */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-[20px] lg:-left-[120px] bottom-[60px] z-30 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(208,241,0,0.3)" }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-[10px] px-[16px] flex items-center gap-[8px] shadow-[0_20px_40px_rgba(0,10,30,0.5)] rotate-3 cursor-pointer"
              >
                <Wifi size={14} className="text-[#d0f100] rotate-90" />
                <span className="text-white/90 text-[12px] font-semibold uppercase tracking-wider">Tap to Connect</span>
              </motion.div>
            </motion.div>

            {/* STICKER C: Live Analytics */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -right-[60px] lg:-right-[240px] top-[0px] lg:-top-[20px] z-30 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(208,241,0,0.3)" }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-[12px] flex items-center gap-[12px] shadow-[0_20px_40px_rgba(0,10,30,0.5)] rotate-6 cursor-pointer"
              >
                <div className="w-[32px] h-[32px] rounded-xl bg-[#d0f100]/20 flex items-center justify-center border border-[#d0f100]/30">
                  <TrendingUp size={16} className="text-[#d0f100]" />
                </div>
                <div>
                  <p className="text-white text-[14px] font-bold leading-none">+2.4k views</p>
                  <p className="text-white/50 text-[10px] font-medium mt-[2px] uppercase tracking-wider">Live Analytics</p>
                </div>
              </motion.div>
            </motion.div>

            {/* STICKER D: QR Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -right-[40px] lg:-right-[180px] bottom-[20px] z-30 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(208,241,0,0.3)" }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-[16px] flex flex-col items-center gap-[8px] shadow-[0_20px_40px_rgba(0,10,30,0.5)] -rotate-12 cursor-pointer"
              >
                <div className="w-[48px] h-[48px] bg-white rounded-lg p-[4px] flex items-center justify-center">
                  <QrCode size={40} className="text-[#000d26]" strokeWidth={1.5} />
                </div>
              </motion.div>
            </motion.div>
            
            {/* NFC Smart Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px] aspect-[1.586/1] bg-gradient-to-br from-[#1b2540] via-[#000d26] to-[#0a1224] rounded-[24px] p-[32px] border border-white/10 transition-transform duration-700 group-hover:-rotate-y-12 group-hover:rotate-x-6 z-10 overflow-hidden"
              style={{ 
                boxShadow: "0 40px 80px -20px rgba(0, 10, 30, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(208,241,0,0.1)_0%,_transparent_50%)] pointer-events-none" />

              {/* Diagonal Shine line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                 <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[2000ms] ease-in-out" />
              </div>

              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-[44px] h-[44px] rounded-[12px] bg-gradient-to-br from-[#d0f100] to-[#b8d400] flex items-center justify-center mb-[24px] shadow-[0_0_20px_rgba(208,241,0,0.3)]">
                      <span className="text-[#000d26] text-[18px] font-black">T</span>
                    </div>
                    <h3 className="text-white text-[24px] font-bold tracking-tight">taglife</h3>
                    <p className="text-white/60 text-[14px] mt-[4px] font-medium">Smart NFC Card</p>
                    <p className="text-[#d0f100] text-[13px] mt-[2px] font-medium">@taglife</p>
                  </div>
                  
                  {/* QR Code Graphic */}
                  <div className="w-[64px] h-[64px] rounded-[16px] bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 p-[8px]">
                    <div className="w-full h-full grid grid-cols-3 gap-[4px]">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`bg-white/80 rounded-[2px] ${i === 4 ? 'opacity-0' : ''}`} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* NFC Icon & Signal */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-[6px]">
                    <div className="w-[32px] h-[4px] bg-white/20 rounded-full" />
                    <div className="w-[12px] h-[4px] bg-[#d0f100]/80 rounded-full" />
                  </div>
                  <div className="flex items-center gap-[8px] text-white/40 text-[13px] font-medium uppercase tracking-wider">
                    <Wifi size={16} className="rotate-90" />
                    NFC Enabled
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone Mockup Floating */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: -15, rotateX: 10 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute -right-[10%] md:-right-[20%] top-[20%] w-[160px] md:w-[200px] z-20 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 pointer-events-none hidden sm:block"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-[#1b2540] rounded-[24px] md:rounded-[32px] p-[8px] border border-white/20 shadow-[0_30px_60px_rgba(0,10,30,0.6)]"
              >
                {/* Dynamic Island */}
                <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-full z-30" />
                
                <div className="bg-white rounded-[18px] md:rounded-[24px] overflow-hidden h-[300px] md:h-[400px] relative">
                  {/* Phone Header */}
                  <div className="h-[100px] bg-gradient-to-b from-blue-50 to-white relative">
                    <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-[60px] h-[60px] bg-white rounded-full p-[4px] shadow-sm">
                      <div className="w-full h-full bg-[#000d26] rounded-full flex items-center justify-center">
                        <span className="text-[#d0f100] text-[20px] font-bold">T</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Content */}
                  <div className="pt-[40px] px-[16px] text-center">
                    <h4 className="text-[#000d26] font-bold text-[16px] mb-1">taglife</h4>
                    <p className="text-gray-500 text-[11px] mb-4">Smart NFC Card</p>
                    
                    <div className="w-full py-[10px] bg-[#d0f100] rounded-[10px] text-[#000d26] text-[12px] font-bold shadow-md flex items-center justify-center gap-2">
                      Save Contact
                    </div>
                    
                    <div className="mt-[16px] grid grid-cols-4 gap-[8px]">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="aspect-square bg-gray-100 rounded-[8px]" />
                      ))}
                    </div>
                  </div>

                  {/* Pop-up Alert inside phone */}
                  <div className="absolute bottom-[20px] left-[10px] right-[10px] bg-[#1b2540]/90 backdrop-blur-md rounded-[12px] p-[12px] shadow-xl flex items-center gap-[10px]">
                    <div className="w-[24px] h-[24px] bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">✓</span>
                    </div>
                    <span className="text-white text-[11px] font-medium">NFC Scanned!</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#f8f9fc] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
