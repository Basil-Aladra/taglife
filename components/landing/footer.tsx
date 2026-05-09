"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube, ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
  product: [
    { label: "Features", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Card Designs", href: "#" },
    { label: "Enterprise", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Data Security", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Footer() {
  return (
    <footer className="relative bg-[#000d26] overflow-hidden pt-32 pb-12 selection:bg-[#d0f100] selection:text-[#000d26]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle glowing orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0050f8]/10 rounded-full blur-[120px] opacity-60" />
        
        {/* Outlined Watermark */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center opacity-[0.05]">
          <span 
            className="font-black text-transparent tracking-tighter"
            style={{ 
              fontSize: "clamp(150px, 25vw, 500px)", 
              lineHeight: 0.8,
              WebkitTextStroke: "2px white"
            }}
          >
            TAPLINK
          </span>
        </div>
      </div>
      
      {/* Main Container */}
      <motion.div 
        className="max-w-[1200px] mx-auto px-[24px] relative z-10 flex flex-col min-h-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] mb-[80px]">
          
          {/* Brand & Newsletter (Left Column - 5 cols) */}
          <motion.div className="lg:col-span-5 flex flex-col" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-[12px] mb-[32px] group w-fit">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#d0f100] flex items-center justify-center shadow-[0_0_20px_rgba(208,241,0,0.3)] group-hover:shadow-[0_0_30px_rgba(208,241,0,0.5)] transition-shadow duration-500">
                <span className="text-[#000d26] text-[18px]" style={{ fontWeight: 800 }}>T</span>
              </div>
              <span className="text-[22px] tracking-tight text-white font-semibold">TapLink</span>
            </Link>
            
            <p className="text-[#7c8293] mb-[40px] text-[15px] leading-[1.6] max-w-[400px]">
              Redefining the art of networking. Create your premium digital profile, customize your smart card, and share your world with a single tap.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-[48px] max-w-[400px]">
              <h4 className="text-white text-[13px] font-semibold mb-[16px] tracking-wide">Stay up to date</h4>
              <div className="relative flex items-center">
                <div className="absolute left-[16px] text-[#596075]">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-full py-[14px] pl-[44px] pr-[130px] text-white text-[14px] outline-none focus:border-[#d0f100]/50 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#596075] shadow-inner"
                />
                <button className="absolute right-[6px] top-[6px] bottom-[6px] bg-[#d0f100] text-[#000d26] px-[20px] rounded-full text-[13px] font-bold flex items-center gap-[6px] hover:bg-white transition-colors duration-300">
                  Subscribe
                  <ArrowRight size={14} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-[12px]">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-[44px] h-[44px] rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#7c8293] hover:text-[#000d26] hover:bg-[#d0f100] hover:border-[#d0f100] transition-all duration-300 group"
                >
                  <social.icon size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Grid (Right Column - 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-[40px] lg:pl-[40px]">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div key={category} variants={itemVariants} custom={index}>
                <h4 className="text-white text-[12px] uppercase tracking-[0.15em] font-bold mb-[32px] opacity-90">
                  {category}
                </h4>
                <ul className="space-y-[16px]">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="group inline-flex items-center text-[#7c8293] hover:text-white transition-all duration-300 text-[14px]"
                      >
                        <span className="relative overflow-hidden py-1">
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d0f100] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="pt-[32px] border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[24px]">
            <p className="text-[#596075] text-[13px] order-2 md:order-1">
              © {new Date().getFullYear()} TapLink Inc. All rights reserved.
            </p>
            
            <div className="flex items-center gap-[24px] order-1 md:order-2">
              <div className="flex items-center gap-[12px] text-[#7c8293] text-[13px] bg-white/[0.02] px-[16px] py-[8px] rounded-full border border-white/[0.05]">
                <div className="relative flex h-[8px] w-[8px] items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"></span>
                </div>
                <span>All systems operational</span>
              </div>
              
              <div className="hidden md:flex gap-[24px] text-[13px] text-[#596075]">
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
