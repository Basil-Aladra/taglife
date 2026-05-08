"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Linkedin, Twitter, Instagram, Globe, UserPlus } from "lucide-react"

export function DigitalProfile() {
  return (
    <section className="section-padding bg-ghost-canvas">
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
            Digital Profile
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Your Digital Identity,
            <br className="hidden md:block" />
            <span className="text-deep-cosmos"> Beautifully Presented</span>
          </h2>
          <p 
            className="mt-[16px] text-slate-ink max-w-[520px] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
          >
            Create a stunning digital profile that showcases who you are. Update anytime, share everywhere.
          </p>
        </motion.div>

        {/* Centered Phone Mockup in Elevated White Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div 
            className="bg-pure-surface rounded-[20px] p-[40px] md:p-[56px]"
            style={{ 
              boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" 
            }}
          >
            {/* Phone Frame */}
            <div 
              className="relative bg-midnight-navy rounded-[40px] p-[12px]"
              style={{ boxShadow: "0 32px 64px -16px rgba(0, 16, 51, 0.25)" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-midnight-navy rounded-b-[16px] z-10" />
              
              {/* Screen */}
              <div className="relative bg-ghost-canvas rounded-[30px] overflow-hidden w-[280px]">
                {/* Profile Content */}
                <div className="pt-[40px] pb-[28px] px-[20px]">
                  {/* Cover Gradient */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[100px]"
                    style={{ background: "linear-gradient(180deg, #0050f8 0%, #5fbdf7 100%)" }}
                  />
                  
                  {/* Avatar */}
                  <div className="relative z-10 flex justify-center mb-[12px] pt-[28px]">
                    <div 
                      className="w-[80px] h-[80px] rounded-full bg-pure-surface border-[4px] border-pure-surface flex items-center justify-center font-display text-deep-cosmos"
                      style={{ fontSize: "28px", fontWeight: 400, boxShadow: "0 4px 16px -4px rgba(0, 16, 51, 0.15)" }}
                    >
                      SJ
                    </div>
                  </div>
                  
                  {/* Name */}
                  <div className="relative z-10 text-center mb-[20px]">
                    <h3 className="text-midnight-navy text-[18px] tracking-[-0.01em]" style={{ fontWeight: 450 }}>Sarah Johnson</h3>
                    <p className="text-slate-ink text-[13px] mt-[4px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>Product Designer @ Acme Inc.</p>
                    <div className="flex items-center justify-center gap-[4px] text-slate-ink/60 text-[12px] mt-[6px]">
                      <MapPin size={11} />
                      <span style={{ fontWeight: 400 }}>San Francisco, CA</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-[10px] mb-[20px]">
                    {[Linkedin, Twitter, Instagram, Globe].map((Icon, index) => (
                      <div
                        key={index}
                        className="w-[36px] h-[36px] rounded-full bg-pure-surface flex items-center justify-center text-slate-ink hover:text-midnight-navy transition-colors"
                        style={{ boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" }}
                      >
                        <Icon size={15} strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Save Contact Button - Chartreuse */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-[12px] bg-chartreuse-pulse text-midnight-navy rounded-[9999px] text-[14px] flex items-center justify-center gap-[8px]"
                    style={{ fontWeight: 450, boxShadow: "var(--shadow-subtle-3)" }}
                  >
                    <UserPlus size={15} />
                    Save Contact
                  </motion.button>
                  
                  {/* Contact Button */}
                  <button 
                    className="w-full py-[12px] mt-[8px] bg-pure-surface text-midnight-navy rounded-[9999px] text-[14px] flex items-center justify-center gap-[8px]"
                    style={{ fontWeight: 450, boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" }}
                  >
                    <Mail size={14} />
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
