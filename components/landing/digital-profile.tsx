"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Globe, Linkedin, Twitter, Instagram, ExternalLink, Check, TrendingUp, Link as LinkIcon } from "lucide-react"

const features = [
  { title: "Custom profile URL", desc: "Your unique piece of the web" },
  { title: "Unlimited contact methods", desc: "Phone, email, WhatsApp & more" },
  { title: "Social media integration", desc: "Connect all your networks" },
  { title: "Real-time analytics", desc: "Track views and engagement" },
];

export function DigitalProfile() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#f8f9fc] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-[64px] lg:gap-[100px]">
          
          {/* Content (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left lg:max-w-[480px]"
          >
            <span 
              className="inline-block px-[16px] py-[6px] bg-white text-[#1b2540] text-[11px] uppercase rounded-full mb-[24px] tracking-[0.15em] font-medium shadow-sm"
            >
              Digital Profile
            </span>
            <h2 
              className="font-serif text-[#1b2540] mb-[20px]"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 400 }}
            >
              Your Digital Identity,
              <br className="hidden md:block" />
              <span className="italic"> Beautifully Presented</span>
            </h2>
            <p 
              className="text-[#596075] mx-auto lg:mx-0 mb-[40px]"
              style={{ fontSize: "17px", lineHeight: 1.6, letterSpacing: "-0.01em", fontWeight: 400 }}
            >
              Create a stunning digital profile that showcases who you are. Add your bio, 
              portfolio, social links, and more. Update anytime, share everywhere.
            </p>

            <div className="space-y-[20px] text-left mx-auto max-w-[340px] lg:mx-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-[16px]"
                >
                  <div className="w-[36px] h-[36px] rounded-full bg-[#0050f8]/5 flex items-center justify-center flex-shrink-0">
                    <Check className="w-[16px] h-[16px] text-[#0050f8]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#1b2540] text-[15px] tracking-[-0.01em]" style={{ fontWeight: 500 }}>{feature.title}</p>
                    <p className="text-[#596075] text-[13px]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Preview (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative w-full flex justify-center lg:justify-end"
          >
            {/* Background Soft Blue Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0050f8]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">
              {/* Phone Frame - Floating Animation */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotateZ: [0, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-[#1b2540] rounded-[40px] p-[10px] w-[300px] z-10"
                style={{ boxShadow: "0 32px 64px -16px rgba(0, 16, 51, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.1)" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1b2540] rounded-b-[18px] z-20" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[32px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] h-[600px]">
                  {/* Profile Content */}
                  <div className="h-full overflow-y-auto no-scrollbar pb-[32px]">
                    {/* Header Aurora Gradient */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[140px]"
                      style={{ background: "linear-gradient(180deg, #001033 0%, #0050f8 55%, #5fbdf7 100%)" }}
                    />
                    
                    {/* Avatar */}
                    <div className="relative z-10 flex justify-center pt-[80px] mb-[16px]">
                      <div 
                        className="w-[88px] h-[88px] rounded-full bg-white border-[4px] border-white flex items-center justify-center font-display text-[#1b2540] shadow-md"
                        style={{ fontSize: "28px", fontWeight: 500 }}
                      >
                        SJ
                      </div>
                    </div>
                    
                    {/* Name */}
                    <div className="relative z-10 text-center mb-[24px]">
                      <h3 className="text-[#1b2540] text-[20px] tracking-[-0.02em]" style={{ fontWeight: 600 }}>Sarah Johnson</h3>
                      <p className="text-[#596075] text-[14px] mt-[4px] tracking-[-0.01em]" style={{ fontWeight: 400 }}>Product Designer @ Acme</p>
                      <div className="flex items-center justify-center gap-[6px] text-[#596075] text-[13px] mt-[8px]">
                        <MapPin size={13} />
                        <span style={{ fontWeight: 400 }}>San Francisco, CA</span>
                      </div>
                    </div>
                    
                    {/* Social Icons (Minimalist Outlined) */}
                    <div className="flex justify-center gap-[12px] mb-[24px]">
                      {[Linkedin, Twitter, Instagram, Globe].map((Icon, index) => (
                        <div
                          key={index}
                          className="w-[36px] h-[36px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#596075] hover:border-[#0050f8] hover:text-[#0050f8] hover:shadow-[0_0_12px_rgba(0,80,248,0.2)] transition-all cursor-pointer"
                        >
                          <Icon size={16} strokeWidth={1.5} />
                        </div>
                      ))}
                    </div>
                    
                    {/* Contact Buttons */}
                    <div className="px-[24px] space-y-[10px]">
                      <button 
                        className="w-full py-[12px] bg-[#d0f100] text-[#1b2540] rounded-[16px] text-[14px] flex items-center justify-center gap-[8px]"
                        style={{ fontWeight: 500 }}
                      >
                        <Mail size={16} />
                        Save Contact
                      </button>
                      <button 
                        className="w-full py-[12px] bg-white border border-gray-200 text-[#1b2540] rounded-[16px] text-[14px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-colors"
                        style={{ fontWeight: 500 }}
                      >
                        <Phone size={16} />
                        Call
                      </button>
                    </div>
                    
                    {/* Links Section */}
                    <div className="mt-[28px] px-[24px] space-y-[8px]">
                      <p className="text-[12px] text-[#596075] uppercase tracking-[0.08em] mb-[12px] pl-[4px]" style={{ fontWeight: 600 }}>Links</p>
                      {["Portfolio", "Dribbble", "Resume"].map((link) => (
                        <div 
                          key={link}
                          className="flex items-center justify-between p-[14px] bg-white border border-gray-100 shadow-sm rounded-[14px] text-[14px] hover:border-gray-300 transition-colors cursor-pointer"
                        >
                          <span className="text-[#1b2540] tracking-[-0.01em]" style={{ fontWeight: 500 }}>{link}</span>
                          <ExternalLink size={14} className="text-[#596075]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Card 1: Live Analytics */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-[50px] md:-left-[80px] top-[140px] bg-white/80 backdrop-blur-md rounded-[20px] p-[16px] z-20 flex items-center gap-[14px]"
                style={{ boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" }}
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#0050f8]/10 flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#0050f8]"/>
                </div>
                <div>
                  <p className="text-[#1b2540] text-[18px] tracking-[-0.02em]" style={{ fontWeight: 600 }}>2.4K</p>
                  <p className="text-[#596075] text-[12px] tracking-[-0.01em]" style={{ fontWeight: 500 }}>Profile Views</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Contact Saved */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-[30px] md:-right-[60px] bottom-[160px] bg-white/80 backdrop-blur-md rounded-[16px] p-[12px] px-[18px] z-20 flex items-center gap-[12px]"
                style={{ boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" }}
              >
                <div className="w-[24px] h-[24px] rounded-full bg-[#d0f100]/20 flex items-center justify-center">
                  <Check size={14} className="text-[#6a7a00]"/>
                </div>
                <p className="text-[#1b2540] text-[14px] tracking-[-0.01em]" style={{ fontWeight: 500 }}>Contact Saved</p>
              </motion.div>

              {/* Floating Card 3: Direct Link Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-[0px] md:-right-[20px] top-[260px] bg-white/80 backdrop-blur-md rounded-full py-[8px] px-[16px] z-20 flex items-center gap-[8px]"
                style={{ boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" }}
              >
                <LinkIcon size={12} className="text-[#0050f8]" />
                <span className="text-[#1b2540] text-[12px]" style={{ fontWeight: 600 }}>taglife.me/sj</span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
