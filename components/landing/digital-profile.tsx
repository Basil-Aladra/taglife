"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Globe, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react"

export function DigitalProfile() {
  return (
    <section className="section-padding bg-pure-surface">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[72px]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
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
              className="mt-[20px] text-slate-ink max-w-[440px] mx-auto lg:mx-0"
              style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
            >
              Create a stunning digital profile that showcases who you are. Add your bio, 
              portfolio, social links, and more. Update anytime, share everywhere.
            </p>

            <div className="mt-[28px] space-y-[12px] max-w-[320px] mx-auto lg:mx-0">
              {[
                "Custom profile URL",
                "Unlimited contact methods",
                "Social media integration",
                "Portfolio showcase",
                "Real-time analytics",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex items-center gap-[12px]"
                >
                  <div className="w-[20px] h-[20px] rounded-full bg-chartreuse-pulse flex items-center justify-center flex-shrink-0">
                    <svg className="w-[11px] h-[11px] text-midnight-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-midnight-navy text-[15px] tracking-[-0.016em]" style={{ fontWeight: 400 }}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Preview */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="relative max-w-[320px] mx-auto">
              {/* Phone Frame */}
              <div 
                className="relative bg-midnight-navy rounded-[36px] p-[10px]"
                style={{ boxShadow: "0 32px 64px -16px rgba(0, 16, 51, 0.35), 0 0 0 1px rgba(27, 37, 64, 0.2)" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-midnight-navy rounded-b-[14px] z-10" />
                
                {/* Screen */}
                <div className="relative bg-ghost-canvas rounded-[28px] overflow-hidden">
                  {/* Profile Content */}
                  <div className="pt-[36px] pb-[24px] px-[20px]">
                    {/* Cover Gradient */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[100px]"
                      style={{ background: "linear-gradient(180deg, #0050f8 0%, #5fbdf7 100%)" }}
                    />
                    
                    {/* Avatar */}
                    <div className="relative z-10 flex justify-center mb-[12px] pt-[24px]">
                      <div 
                        className="w-[72px] h-[72px] rounded-full bg-pure-surface border-[3px] border-pure-surface flex items-center justify-center font-display text-deep-cosmos"
                        style={{ fontSize: "24px", fontWeight: 400, boxShadow: "0 4px 12px -4px rgba(0, 16, 51, 0.15)" }}
                      >
                        SJ
                      </div>
                    </div>
                    
                    {/* Name */}
                    <div className="relative z-10 text-center mb-[16px]">
                      <h3 className="text-midnight-navy text-[17px] tracking-[-0.01em]" style={{ fontWeight: 450 }}>Sarah Johnson</h3>
                      <p className="text-slate-ink text-[13px] mt-[4px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>Product Designer @ Acme Inc.</p>
                      <div className="flex items-center justify-center gap-[4px] text-slate-ink/60 text-[12px] mt-[6px]">
                        <MapPin size={11} />
                        <span style={{ fontWeight: 400 }}>San Francisco, CA</span>
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-[8px] mb-[16px]">
                      {[Linkedin, Twitter, Instagram, Globe].map((Icon, index) => (
                        <div
                          key={index}
                          className="w-[32px] h-[32px] rounded-full bg-pure-surface flex items-center justify-center text-slate-ink"
                          style={{ boxShadow: "var(--shadow-md)" }}
                        >
                          <Icon size={14} strokeWidth={1.5} />
                        </div>
                      ))}
                    </div>
                    
                    {/* Contact Buttons */}
                    <div className="space-y-[6px]">
                      <button 
                        className="w-full py-[10px] bg-chartreuse-pulse text-midnight-navy rounded-full text-[13px] flex items-center justify-center gap-[6px]"
                        style={{ fontWeight: 450, boxShadow: "var(--shadow-subtle-3)" }}
                      >
                        <Mail size={13} />
                        Email Me
                      </button>
                      <button 
                        className="w-full py-[10px] bg-pure-surface text-midnight-navy rounded-full text-[13px] flex items-center justify-center gap-[6px]"
                        style={{ fontWeight: 450, boxShadow: "var(--shadow-subtle)" }}
                      >
                        <Phone size={13} />
                        Call
                      </button>
                    </div>
                    
                    {/* Links Section */}
                    <div className="mt-[16px] space-y-[4px]">
                      <p className="text-[11px] text-slate-ink/60 uppercase tracking-[0.06em] mb-[8px]" style={{ fontWeight: 450 }}>Links</p>
                      {["Portfolio", "Dribbble", "Resume"].map((link) => (
                        <div 
                          key={link}
                          className="flex items-center justify-between p-[10px] bg-pure-surface rounded-[10px] text-[13px] card-ring"
                        >
                          <span className="text-midnight-navy tracking-[-0.005em]" style={{ fontWeight: 400 }}>{link}</span>
                          <ExternalLink size={12} className="text-slate-ink/50" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-[12px] top-[72px] bg-pure-surface rounded-[16px] p-[12px]"
                style={{ boxShadow: "var(--shadow-subtle-4)" }}
              >
                <div className="text-center">
                  <p className="text-midnight-navy text-[20px] tracking-[-0.01em]" style={{ fontWeight: 450 }}>2.4K</p>
                  <p className="text-slate-ink text-[11px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>Profile Views</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
