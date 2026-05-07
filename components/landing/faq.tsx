"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the NFC card work?",
    answer: "Our NFC cards contain a tiny chip that communicates with smartphones when tapped. Simply hold your card near any iPhone or Android phone, and your digital profile will instantly appear — no app required for the recipient.",
  },
  {
    question: "Do people need an app to receive my info?",
    answer: "No! That's the beauty of TapLink. When someone taps your card, your profile opens in their phone's browser. They can save your contact, visit your links, and connect with you — all without downloading anything.",
  },
  {
    question: "Can I update my information after the card is made?",
    answer: "Absolutely. Your card links to your digital profile, which you can update anytime. Change your job, phone number, or add new links — your card never needs to be reprinted.",
  },
  {
    question: "What if someone's phone doesn't support NFC?",
    answer: "Every TapLink card includes a unique QR code on the back. If NFC isn't available, your contact can simply scan the QR code with their camera to access your profile.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. We also offer express shipping (2-3 business days) and overnight options. All plans include free standard shipping.",
  },
  {
    question: "Can I order cards for my whole team?",
    answer: "Yes! Our Team plan is designed for organizations. You get a central dashboard to manage all team members' cards and profiles, consistent branding, and bulk ordering discounts.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-pure-surface">
      <div className="max-w-[720px] mx-auto px-[24px]">
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
            FAQ
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Questions? Answers.
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-[8px]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-[20px] rounded-[16px] transition-all duration-200 card-ring ${
                  openIndex === index ? "bg-pure-surface" : "bg-ghost-canvas hover:bg-ghost-canvas/60"
                }`}
                style={openIndex === index ? { boxShadow: "var(--shadow-subtle)" } : {}}
              >
                <div className="flex items-center justify-between gap-[16px]">
                  <h3 
                    className="text-midnight-navy text-[15px] tracking-[-0.016em]"
                    style={{ fontWeight: 450, lineHeight: 1.33 }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-[18px] h-[18px] text-slate-ink" strokeWidth={1.5} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="pt-[12px] text-slate-ink"
                        style={{ fontSize: "15px", lineHeight: 1.6, letterSpacing: "-0.016em", fontWeight: 400 }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
