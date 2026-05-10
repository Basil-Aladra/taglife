"use client"

import { motion } from "framer-motion"
import { CreditCard, User, Globe, Building2, QrCode, Share, ArrowRight } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "NFC Business Cards",
    description: "Premium cards with embedded NFC chips. Tap any smartphone to share your info instantly without needing an app. Make a lasting first impression with technology that speaks for itself.",
  },
  {
    icon: User,
    title: "Digital Profiles",
    description: "Beautiful, customizable profiles that showcase your work, social links, and contact info in one place.",
  },
  {
    icon: Globe,
    title: "Personal Websites",
    description: "Custom mini-websites that serve as your digital home. Perfect for freelancers and individual creators.",
  },
  {
    icon: Building2,
    title: "Company Websites",
    description: "Professional team pages with consistent branding, unified analytics, and centralized contact management.",
  },
  {
    icon: QrCode,
    title: "QR Integration",
    description: "Every card includes a unique QR code, ensuring your profile is accessible even when NFC isn't available.",
  },
  {
    icon: Share,
    title: "Smart Sharing",
    description: "One tap or scan. No app required. Works seamlessly with all modern smartphones, iOS and Android.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-[80px] md:py-[120px] bg-[#f8f9fc]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-[64px]"
        >
          <span
            className="inline-block px-[16px] py-[6px] bg-white text-[#1b2540] text-[11px] uppercase rounded-full mb-[24px] tracking-[0.15em] font-medium shadow-sm"
          >
            Services
          </span>
          <h2
            className="text-[#1b2540] font-serif"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 400 }}
          >
            Everything You Need to
            <br className="hidden md:block" />
            <span className="italic"> Stand Out</span>
          </h2>
        </motion.div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group cursor-pointer relative flex flex-col rounded-[24px] p-[32px] md:p-[40px] overflow-hidden ${isFeatured ? "md:col-span-2 lg:col-span-2 min-h-[360px]" : "min-h-[320px]"
                  }`}
                style={{
                  background: isFeatured
                    ? "linear-gradient(180deg, #001033 0%, #0050f8 55%, #5fbdf7 100%)"
                    : "#ffffff",
                  boxShadow: isFeatured
                    ? "inset 0 0 20px rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,80,248,0.3)"
                    : "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px"
                }}
              >
                <div
                  className={`w-[56px] h-[56px] rounded-full flex items-center justify-center mb-[32px] ${isFeatured ? "bg-white/10 backdrop-blur-md" : "bg-[#f8f9fc]"
                    }`}
                >
                  <service.icon
                    className={`w-[24px] h-[24px] ${isFeatured ? "text-white" : "text-[#1b2540]"}`}
                    strokeWidth={1.5}
                  />
                </div>

                <h3
                  className={`mb-[12px] font-medium ${isFeatured ? "text-white" : "text-[#1b2540]"}`}
                  style={{ fontSize: isFeatured ? "32px" : "22px", lineHeight: 1.2, letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </h3>

                <p
                  className={`flex-grow max-w-[500px] ${isFeatured ? "text-white/80" : "text-[#596075]"}`}
                  style={{ fontSize: "16px", lineHeight: 1.6, letterSpacing: "-0.01em" }}
                >
                  {service.description}
                </p>

                <div
                  className={`mt-[32px] flex items-center gap-[8px] font-medium text-[15px] transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 ${isFeatured ? "text-white" : "text-[#0050f8]"
                    }`}
                >
                  Learn more <ArrowRight className="w-[16px] h-[16px]" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
