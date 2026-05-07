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
    <section id="how-it-works" className="section-padding bg-ghost-canvas">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[56px] md:mb-[72px]"
        >
          <span 
            className="inline-block px-[12px] py-[4px] bg-deep-cosmos/[0.04] text-deep-cosmos text-[13px] rounded-[16px] mb-[16px]"
            style={{ fontWeight: 450, lineHeight: 1.54, letterSpacing: "-0.005em" }}
          >
            How It Works
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Networking Made Simple
          </h2>
          <p 
            className="mt-[16px] text-slate-ink max-w-[520px] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
          >
            Get started in minutes. No apps to download for your contacts.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-[20px]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[44px] left-full w-full h-px bg-fog-border/40 -translate-x-1/2 z-0" />
              )}
              
              <div 
                className="relative bg-pure-surface rounded-[20px] p-[28px] h-full transition-all duration-300 group-hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-subtle-4)" }}
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-[24px]">
                  <div className="w-[48px] h-[48px] rounded-[16px] bg-ghost-canvas flex items-center justify-center">
                    <step.icon className="w-[22px] h-[22px] text-deep-cosmos" strokeWidth={1.5} />
                  </div>
                  <span 
                    className="font-display text-fog-border/40"
                    style={{ fontSize: "40px", lineHeight: 1, letterSpacing: "-0.01em", fontWeight: 400 }}
                  >
                    {step.number}
                  </span>
                </div>
                
                <h3 
                  className="text-midnight-navy mb-[8px]"
                  style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.01em", fontWeight: 450 }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-slate-ink"
                  style={{ fontSize: "15px", lineHeight: 1.6, letterSpacing: "-0.016em", fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
