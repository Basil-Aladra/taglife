"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircleQuestion, ArrowRight } from "lucide-react"

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
    <section id="faq" className="py-24 lg:py-32 bg-pure-surface relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Title & CTA */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span 
              className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-deep-cosmos/[0.04] text-midnight-navy text-[13px] font-semibold rounded-full mb-6"
            >
              <MessageCircleQuestion size={14} className="text-midnight-navy" />
              Support & FAQ
            </span>
            <h2 
              className="font-display text-midnight-navy tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              Got questions?<br/>
              <span className="text-midnight-navy/40">We've got answers.</span>
            </h2>
            <p className="text-slate-ink text-[16px] leading-relaxed mb-8 max-w-[400px]">
              Find everything you need to know about TapLink, from how NFC works to managing a team of profiles. Can't find what you're looking for? 
            </p>
            <button className="px-6 py-3 bg-midnight-navy text-white rounded-full font-medium text-[14px] hover:bg-midnight-navy/90 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
              Contact our team
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="border-t border-midnight-navy/10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="border-b border-midnight-navy/10"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                  >
                    <h3 
                      className={`text-[16px] md:text-[18px] font-medium transition-colors duration-300 ${
                        openIndex === index ? "text-midnight-navy" : "text-slate-ink group-hover:text-midnight-navy"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div 
                      className={`flex-shrink-0 w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index 
                          ? "bg-midnight-navy text-white shadow-md" 
                          : "bg-ghost-canvas text-midnight-navy group-hover:bg-midnight-navy/5"
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-[18px] h-[18px]" strokeWidth={2} />
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p 
                          className="pb-6 text-slate-ink pr-8"
                          style={{ fontSize: "15px", lineHeight: 1.6 }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
