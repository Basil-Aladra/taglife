"use client"

import { motion } from "framer-motion"
import { Smartphone, Zap, Share2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Choose Your Card",
    description: "Select from our range of premium NFC business cards. Pick your design, material, and customize it with your brand.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Set Up Your Profile",
    description: "Create your digital profile with contact info, social links, portfolio, and anything else you want to share.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Tap & Connect",
    description: "Simply tap your card on any smartphone. Your new contact will instantly receive all your information.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[80px] md:py-[120px] bg-[#f8f9fc]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[56px] md:mb-[72px]"
        >
          <span 
            className="inline-block px-[12px] py-[4px] bg-[#001033]/[0.04] text-[#001033] text-[13px] rounded-[16px] mb-[16px]"
            style={{ fontWeight: 450, lineHeight: 1.54, letterSpacing: "-0.005em" }}
          >
            How It Works
          </span>
          <h2 
            className="text-[#1b2540]"
            style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "clamp(32px, 4vw, 46px)", 
              lineHeight: 1.1, 
              letterSpacing: "-0.02em", 
              fontWeight: 400 
            }}
          >
            Networking Made Simple
          </h2>
          <p 
            className="mt-[16px] text-[#1b2540] opacity-70 max-w-[520px] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
          >
            Get started in minutes. No apps to download for your contacts.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-[24px] relative">
          {/* Connector Line (Dashed) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px border-t border-dashed border-[#1b2540]/20 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "rgba(0, 39, 80, 0.12) 0px 20px 40px -10px, rgba(0, 39, 80, 0.05) 0px 0px 0px 1px" 
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white rounded-[20px] p-[32px] h-full overflow-hidden border-none"
                style={{ 
                  boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" 
                }}
              >
                {/* Large Background Step Number */}
                <div 
                  className="absolute top-0 right-[24px] text-[#1b2540] opacity-5 select-none pointer-events-none"
                  style={{ 
                    fontFamily: "var(--font-display)", 
                    fontSize: "120px", 
                    lineHeight: 1, 
                    fontWeight: 400,
                    transform: "translateY(-15%)"
                  }}
                >
                  {step.number}
                </div>

                <div className="flex items-center justify-between mb-[24px] relative z-10">
                  {/* Pill-shaped Icon Container */}
                  <div className="w-[56px] h-[36px] rounded-full bg-[#e0f6ff]/40 border border-[#0080f8]/10 flex items-center justify-center shadow-[0_0_12px_rgba(0,128,248,0.1)]">
                    <step.icon className="w-[18px] h-[18px] text-[#0050f8]" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 
                  className="text-[#1b2540] mb-[12px] relative z-10"
                  style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.01em", fontWeight: 450 }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[#1b2540] opacity-70 relative z-10"
                  style={{ fontSize: "15px", lineHeight: 1.6, letterSpacing: "-0.016em", fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
