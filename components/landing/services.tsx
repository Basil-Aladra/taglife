"use client"

import { motion } from "framer-motion"
import { CreditCard, User, Globe, Building2, QrCode, Share } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "NFC Business Cards",
    description: "Premium cards with embedded NFC chips. Tap any smartphone to share your info instantly.",
    iconBg: "bg-chartreuse-pulse/10",
  },
  {
    icon: User,
    title: "Digital Profiles",
    description: "Beautiful, customizable profiles that showcase your work, social links, and contact info.",
    iconBg: "bg-deep-cosmos/[0.04]",
  },
  {
    icon: Globe,
    title: "Personal Websites",
    description: "Custom mini-websites that serve as your digital home. Perfect for freelancers and creators.",
    iconBg: "bg-ice-veil/40",
  },
  {
    icon: Building2,
    title: "Company Websites",
    description: "Professional team pages with consistent branding and centralized contact management.",
    iconBg: "bg-chartreuse-pulse/10",
  },
  {
    icon: QrCode,
    title: "QR Integration",
    description: "Every card includes a unique QR code. Works even when NFC isn't available.",
    iconBg: "bg-deep-cosmos/[0.04]",
  },
  {
    icon: Share,
    title: "Smart Sharing",
    description: "One tap. No app required. Works with all modern smartphones, iOS and Android.",
    iconBg: "bg-ice-veil/40",
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-pure-surface">
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
            Services
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Everything You Need to
            <br className="hidden md:block" />
            <span className="text-deep-cosmos"> Stand Out</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div 
                className="relative bg-ghost-canvas rounded-[20px] p-[28px] h-full transition-all duration-300 group-hover:bg-pure-surface group-hover:shadow-xl card-ring"
              >
                <div className={`w-[48px] h-[48px] rounded-[16px] ${service.iconBg} flex items-center justify-center mb-[20px]`}>
                  <service.icon className="w-[22px] h-[22px] text-midnight-navy" strokeWidth={1.5} />
                </div>
                
                <h3 
                  className="text-midnight-navy mb-[8px]"
                  style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.01em", fontWeight: 450 }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-slate-ink"
                  style={{ fontSize: "15px", lineHeight: 1.6, letterSpacing: "-0.016em", fontWeight: 400 }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
