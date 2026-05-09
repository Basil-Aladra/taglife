"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic Profile",
    description: "Essential digital presence for individuals.",
    price: "150",
    hasPrice: true,
    note: "Digital Profile only. Physical NFC card not included.",
    features: [
      { name: "Basic Digital Profile", included: true },
      { name: "Name & Bio", included: true },
      { name: "Social Links", included: true },
      { name: "Brand Logo", included: true },
      { name: "Custom Background", included: true },
      { name: "UI Animations", included: false },
      { name: "Physical NFC Card", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional Profile",
    description: "Advanced interactive profile to stand out.",
    price: "200",
    hasPrice: true,
    note: "Digital Profile only. Physical NFC card not included.",
    features: [
      { name: "All Basic features", included: true },
      { name: "Premium UI Animations", included: true },
      { name: "High-end professional design", included: true },
      { name: "Interactive elements", included: true },
      { name: "Priority hosting", included: true },
      { name: "Physical NFC Card", included: false },
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Custom Solutions",
    description: "Fully tailored digital experiences for teams and creators.",
    price: "Contact Us",
    hasPrice: false,
    note: null,
    features: [
      { name: "Custom Functionality", included: true },
      { name: "Enterprise Branding", included: true },
      { name: "Team Management", included: true },
      { name: "API Integrations", included: true },
      { name: "Full Design Support", included: true },
      { name: "Physical NFC Card (Optional)", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-[80px] md:py-[120px] bg-[#f8f9fc]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
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
            Pricing
          </span>
          <h2 
            className="font-serif text-[#1b2540]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 400 }}
          >
            Simple, Transparent Plans
          </h2>
          <p 
            className="mt-[20px] text-[#596075] max-w-[520px] mx-auto"
            style={{ fontSize: "17px", lineHeight: 1.6, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Choose the perfect digital presence for your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-[24px] lg:gap-[32px] items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`relative flex flex-col rounded-[24px] p-[32px] lg:p-[40px] transition-transform duration-300 ${
                plan.popular 
                  ? "bg-[#001033] text-white" 
                  : "bg-white text-[#1b2540]"
              }`}
              style={{ boxShadow: plan.popular ? "0 32px 64px -16px rgba(0, 16, 51, 0.35)" : "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px" }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-[14px] left-1/2 -translate-x-1/2 px-[16px] py-[6px] bg-[#d0f100] text-[#001033] text-[12px] rounded-full tracking-[0.04em] shadow-sm uppercase"
                  style={{ fontWeight: 600 }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-[24px]">
                <h3 className="font-serif text-[28px] tracking-tight" style={{ fontWeight: 400, lineHeight: 1.2 }}>{plan.name}</h3>
                <p className={`text-[14px] mt-[8px] leading-relaxed ${plan.popular ? "text-white/70" : "text-[#596075]"}`} style={{ fontWeight: 400 }}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-[32px] flex items-baseline gap-[4px]">
                <span className="font-sans font-bold" style={{ fontSize: plan.hasPrice ? "48px" : "32px", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {plan.hasPrice ? `${plan.price} ₪` : plan.price}
                </span>
              </div>

              {plan.note && (
                <div className={`text-[12px] leading-snug mb-[32px] p-[12px] rounded-[12px] ${plan.popular ? "bg-white/5 text-white/80" : "bg-[#f8f9fc] text-[#596075]"}`}>
                  {plan.note}
                </div>
              )}

              <Link
                href="#"
                className={`block text-center w-full py-[14px] rounded-full text-[15px] tracking-wide mb-[40px] transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#d0f100] text-[#001033] hover:bg-[#c0df00]"
                    : "bg-[#f8f9fc] text-[#1b2540] hover:bg-gray-100 border border-gray-200"
                }`}
                style={{ fontWeight: 600 }}
              >
                {plan.cta}
              </Link>

              <div className="mt-auto">
                <p className={`text-[12px] uppercase tracking-[0.08em] mb-[16px] ${plan.popular ? "text-white/50" : "text-[#596075]"}`} style={{ fontWeight: 600 }}>
                  What's included
                </p>
                <ul className="space-y-[14px]">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-[12px]">
                      <div className={`mt-[2px] w-[16px] h-[16px] rounded-full flex items-center justify-center flex-shrink-0 ${
                        feature.included 
                          ? (plan.popular ? "bg-[#d0f100]/20 text-[#d0f100]" : "bg-[#0050f8]/10 text-[#0050f8]")
                          : (plan.popular ? "bg-white/10 text-white/40" : "bg-gray-100 text-gray-400")
                      }`}>
                        {feature.included ? (
                          <Check size={10} strokeWidth={3} />
                        ) : (
                          <X size={10} strokeWidth={3} />
                        )}
                      </div>
                      <span 
                        className={`text-[14px] leading-snug ${
                          feature.included
                            ? (plan.popular ? "text-white/90" : "text-[#1b2540]")
                            : (plan.popular ? "text-white/40" : "text-gray-400 line-through")
                        }`}
                        style={{ fontWeight: 500 }}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
