"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

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
    <section id="faq" className="section-padding bg-ghost-canvas">
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

        {/* FAQ Items - Minimalist with subtle dividers */}
        <div>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              className={index !== faqs.length - 1 ? "border-b border-fog-border/30" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-[20px] transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-[16px]">
                  <h3 
                    className="text-midnight-navy text-[15px] tracking-[-0.016em]"
                    style={{ fontWeight: 450, lineHeight: 1.33 }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 0 : 0 }}
                    className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-[16px] h-[16px] text-midnight-navy" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-[16px] h-[16px] text-slate-ink" strokeWidth={1.5} />
                    )}
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
                        className="pt-[12px] text-slate-ink pr-[40px]"
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
