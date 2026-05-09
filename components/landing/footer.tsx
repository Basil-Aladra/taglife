"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="relative bg-[#000d26] overflow-hidden py-24 selection:bg-[#d0f100] selection:text-[#000d26]">
      {/* Big Logo Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full overflow-hidden flex justify-center z-0">
        <span 
          className="font-black text-white opacity-[0.02] tracking-tighter"
          style={{ fontSize: "clamp(120px, 20vw, 400px)", lineHeight: 0.8 }}
        >
          TAPLINK
        </span>
      </div>
      
      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10 flex flex-col min-h-full">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[64px] lg:gap-[32px] mb-[100px]">
          
          {/* Logo & Description (Left Column) */}
          <div className="lg:col-span-2 pr-[24px] flex flex-col">
            <Link href="/" className="flex items-center gap-[10px] mb-[24px]">
              <div className="w-[30px] h-[30px] rounded-[6px] bg-[#d0f100] flex items-center justify-center">
                <span className="text-[#000d26] text-[15px]" style={{ fontWeight: 700 }}>T</span>
              </div>
              <span className="text-[19px] tracking-tight text-white" style={{ fontWeight: 500 }}>TapLink</span>
            </Link>
            <p 
              className="text-[#7c8293] mb-[32px]"
              style={{ fontSize: "14px", lineHeight: 1.5, fontWeight: 400 }}
            >
              Redefining the art of networking.
            </p>
            
            {/* Social Icons (Tight Row, Minimalist) */}
            <div className="flex items-center gap-[20px] mt-auto">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-[#7c8293] hover:text-[#d0f100] transition-colors duration-300"
                  style={{ filter: "drop-shadow(0 0 0 rgba(208, 241, 0, 0))" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(208, 241, 0, 0.5))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 0 rgba(208, 241, 0, 0))";
                  }}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4 
                className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-[32px]"
              >
                {category}
              </h4>
              <ul className="space-y-[16px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="group inline-flex items-center text-[#6b7184] hover:text-white transition-all duration-300 text-[14px] tracking-tight"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-[4px] left-0 w-[10px] h-[1px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-auto">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-[32px]" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
            <p className="text-[#596075] text-[12px] tracking-tight">
              © {new Date().getFullYear()} TapLink. All rights reserved.
            </p>
            <div className="flex items-center gap-[12px] text-[#596075] text-[12px] tracking-tight">
              <div className="relative flex h-[8px] w-[8px] items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"></span>
              </div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
