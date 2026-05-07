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
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
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
    <footer className="bg-midnight-navy text-pure-surface">
      <div className="section-container py-[56px] md:py-[72px]">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-[32px] md:gap-[24px] mb-[40px]">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-[8px] mb-[16px]">
              <div className="w-[28px] h-[28px] rounded-[6px] bg-chartreuse-pulse flex items-center justify-center">
                <span className="text-deep-cosmos text-[13px]" style={{ fontWeight: 480 }}>T</span>
              </div>
              <span className="text-[17px] tracking-[-0.01em]" style={{ fontWeight: 480 }}>TapLink</span>
            </Link>
            <p 
              className="text-ice-veil/50 max-w-[260px]"
              style={{ fontSize: "14px", lineHeight: 1.57, letterSpacing: "-0.006em", fontWeight: 400 }}
            >
              The smart way to share your contact information. NFC business cards 
              for the modern professional.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-[8px] mt-[20px]">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-[32px] h-[32px] rounded-full bg-pure-surface/8 flex items-center justify-center text-ice-veil/50 hover:text-chartreuse-pulse hover:bg-pure-surface/12 transition-all duration-200"
                >
                  <social.icon size={15} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 
                className="text-[13px] mb-[16px] text-pure-surface/80 uppercase tracking-[0.04em]"
                style={{ fontWeight: 450 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <ul className="space-y-[10px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-ice-veil/45 hover:text-pure-surface/80 transition-colors duration-200 text-[14px] tracking-[-0.006em]"
                      style={{ fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-[24px] border-t border-pure-surface/8 flex flex-col md:flex-row items-center justify-between gap-[12px]">
          <p className="text-ice-veil/30 text-[13px] tracking-[-0.005em]" style={{ fontWeight: 400 }}>
            © {new Date().getFullYear()} TapLink. All rights reserved.
          </p>
          <div className="flex items-center gap-[16px] text-ice-veil/30 text-[13px] tracking-[-0.005em]">
            <span style={{ fontWeight: 400 }}>Made with ♥ for networkers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
