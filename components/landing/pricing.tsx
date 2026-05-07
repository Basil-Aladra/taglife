"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for trying out TapLink",
    price: { monthly: 9, annual: 7 },
    features: [
      "1 NFC Business Card",
      "Digital Profile",
      "Basic Analytics",
      "QR Code Backup",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Best for freelancers and professionals",
    price: { monthly: 19, annual: 15 },
    features: [
      "3 NFC Business Cards",
      "Custom Profile URL",
      "Advanced Analytics",
      "Personal Website",
      "Priority Support",
      "Custom Branding",
      "Lead Capture Forms",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    description: "For teams and organizations",
    price: { monthly: 49, annual: 39 },
    features: [
      "10 NFC Business Cards",
      "Team Dashboard",
      "Company Website",
      "Admin Controls",
      "API Access",
      "Dedicated Support",
      "Custom Integrations",
      "SSO & Security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="section-padding bg-ghost-canvas">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[40px]"
        >
          <span 
            className="inline-block px-[12px] py-[4px] bg-deep-cosmos/[0.04] text-deep-cosmos text-[13px] rounded-[16px] mb-[16px]"
            style={{ fontWeight: 450, lineHeight: 1.54, letterSpacing: "-0.005em" }}
          >
            Pricing
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Simple, Transparent Pricing
          </h2>
          <p 
            className="mt-[16px] text-slate-ink max-w-[520px] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.5, letterSpacing: "-0.016em", fontWeight: 400 }}
          >
            Choose the plan that works best for you. All plans include free shipping.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-[12px] mb-[40px]"
        >
          <span className={`text-[14px] tracking-[-0.006em] transition-colors duration-200 ${!annual ? "text-midnight-navy" : "text-slate-ink"}`} style={{ fontWeight: !annual ? 450 : 400 }}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-[48px] h-[28px] rounded-full bg-deep-cosmos p-[3px] transition-colors duration-200"
          >
            <motion.div
              animate={{ x: annual ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-[22px] h-[22px] rounded-full bg-chartreuse-pulse"
            />
          </button>
          <span className={`text-[14px] tracking-[-0.006em] transition-colors duration-200 ${annual ? "text-midnight-navy" : "text-slate-ink"}`} style={{ fontWeight: annual ? 450 : 400 }}>
            Annual <span className="text-chartreuse-pulse" style={{ fontWeight: 450 }}>Save 20%</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-[16px] lg:gap-[20px]">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-[20px] p-[28px] ${
                plan.popular 
                  ? "bg-deep-cosmos text-pure-surface" 
                  : "bg-pure-surface text-midnight-navy"
              }`}
              style={{ boxShadow: plan.popular ? "0 32px 64px -16px rgba(0, 16, 51, 0.35), 0 0 0 1px rgba(0, 16, 51, 0.08)" : "var(--shadow-subtle-4)" }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-[10px] left-1/2 -translate-x-1/2 px-[12px] py-[4px] bg-chartreuse-pulse text-midnight-navy text-[12px] rounded-full"
                  style={{ fontWeight: 450, letterSpacing: "-0.005em" }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-[24px]">
                <h3 className="text-[20px] tracking-[-0.01em]" style={{ fontWeight: 450, lineHeight: 1.3 }}>{plan.name}</h3>
                <p className={`text-[14px] mt-[4px] tracking-[-0.006em] ${plan.popular ? "text-ice-veil/60" : "text-slate-ink"}`} style={{ fontWeight: 400 }}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-[24px]">
                <span className="font-display" style={{ fontSize: "40px", lineHeight: 1.05, letterSpacing: "-0.01em", fontWeight: 400 }}>
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className={`text-[14px] tracking-[-0.006em] ml-[4px] ${plan.popular ? "text-ice-veil/50" : "text-slate-ink"}`} style={{ fontWeight: 400 }}>
                  /month
                </span>
              </div>

              <Link
                href="#"
                className={`block text-center py-[12px] rounded-full text-[15px] tracking-[-0.016em] mb-[28px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.popular
                    ? "bg-chartreuse-pulse text-midnight-navy"
                    : "bg-midnight-navy text-pure-surface"
                }`}
                style={{ fontWeight: 450, boxShadow: plan.popular ? "var(--shadow-subtle-3)" : "none" }}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-[10px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-[10px]">
                    <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-chartreuse-pulse/20" : "bg-chartreuse-pulse"
                    }`}>
                      <Check size={10} className={plan.popular ? "text-chartreuse-pulse" : "text-midnight-navy"} strokeWidth={2.5} />
                    </div>
                    <span 
                      className={`text-[14px] tracking-[-0.006em] ${plan.popular ? "text-ice-veil/80" : "text-midnight-navy"}`}
                      style={{ fontWeight: 400 }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
