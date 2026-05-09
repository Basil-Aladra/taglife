"use client"

import { motion } from "framer-motion"
import {
  MapPin, Mail, Phone, Globe, Linkedin, Twitter, Instagram,
  ExternalLink, TrendingUp, Link as LinkIcon, Users, UserCircle
} from "lucide-react"

const features = [
  { icon: Globe, title: "Custom profile URL", desc: "Your unique piece of the web" },
  { icon: Users, title: "Unlimited contact methods", desc: "Phone, email, WhatsApp & more" },
  { icon: ExternalLink, title: "Social media integration", desc: "Connect all your networks" },
  { icon: TrendingUp, title: "Real-time analytics", desc: "Track views and engagement" },
];

export function DigitalProfile() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f9fc] overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0050f8]/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#d0f100]/10 to-transparent rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Content (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left lg:max-w-[520px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0050f8] animate-pulse" />
              <span className="text-[#1b2540] text-[12px] font-semibold tracking-wide uppercase">TAGLIFE</span>
            </div>

            <h2
              className="text-[#1b2540]  tracking-tight mb-6 font-serif"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05 }}
            >
              Stand out with a <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0050f8] to-[#5fbdf7]">
                premium profile.
              </span>
            </h2>

            <p className="text-[#596075] text-[18px] leading-relaxed mb-10 mx-auto lg:mx-0 max-w-[480px]">
              Create a stunning digital profile that showcases who you are. Add your bio,
              portfolio, social links, and more. Update anytime, share everywhere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-[500px] mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group p-[2px] rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(0,80,248,0.15)] transition-shadow duration-300"
                >
                  {/* Animated Neon Border */}
                  <div className="absolute inset-0 z-0 bg-gray-100">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_280deg,#5fbdf7_340deg,#0050f8_360deg)] animate-[spin_2.5s_linear_infinite]" />
                  </div>
                  
                  {/* Inner Card Content */}
                  <div className="relative z-10 flex flex-col gap-3 p-5 bg-white rounded-[14px] h-full w-full">
                    <div className="w-10 h-10 rounded-xl bg-[#0050f8]/5 flex items-center justify-center text-[#0050f8] group-hover:bg-[#0050f8]/10 group-hover:scale-110 transition-all duration-300">
                      <feature.icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[#1b2540] text-[15px] font-semibold mb-1 group-hover:text-[#0050f8] transition-colors">{feature.title}</h4>
                      <p className="text-[#596075] text-[13px] leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Preview (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative group perspective-[2000px]">
              {/* Phone Frame - Floating & 3D Tilt */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-[#1b2540] rounded-[48px] p-[12px] w-[320px] z-10 transition-transform duration-700 group-hover:-rotate-y-12 group-hover:rotate-x-6"
                style={{
                  boxShadow: "20px 40px 60px -16px rgba(0, 16, 51, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-full z-30 shadow-inner flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 bg-gray-800 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  </div>
                </div>

                {/* Screen */}
                <div className="relative bg-[#f8f9fc] rounded-[36px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] h-[640px]">
                  {/* Profile Content */}
                  <div className="h-full overflow-y-auto no-scrollbar pb-[40px]">
                    {/* Header Image Gradient */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[180px]"
                      style={{ background: "linear-gradient(135deg, #001033 0%, #0050f8 100%)" }}
                    >
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>

                    {/* Avatar */}
                    <div className="relative z-10 flex justify-center pt-[120px] mb-4">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] rounded-full bg-white border-[4px] border-white flex items-center justify-center font-display text-[#1b2540] shadow-xl overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-[#000d26] to-[#1b2540] flex items-center justify-center">
                            <span className="text-[#d0f100] text-[40px] font-black tracking-tighter">T</span>
                          </div>
                        </div>
                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="relative z-10 text-center px-6 mb-6">
                      <h3 className="text-[#1b2540] text-[22px] font-bold tracking-tight">taglife</h3>
                      <p className="text-[#0050f8] text-[15px] font-medium mt-1">Smart Digital Profile</p>
                      <p className="text-[#596075] text-[14px] mt-3 leading-relaxed">Designing digital experiences that bridge the gap between people and technology.</p>
                      <div className="flex items-center justify-center gap-1.5 text-[#596075] text-[13px] mt-4 font-medium">
                        <MapPin size={14} />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="px-6 space-y-3 mb-8">
                      <button className="w-full py-3.5 bg-[#1b2540] text-white rounded-2xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#1b2540]/20 hover:scale-[1.02] transition-transform">
                        <Mail size={18} />
                        Save Contact
                      </button>
                      <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-white border border-gray-200 text-[#1b2540] rounded-2xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
                          <Phone size={18} />
                          Call
                        </button>
                        <button className="flex-1 py-3 bg-white border border-gray-200 text-[#1b2540] rounded-2xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
                          <UserCircle size={18} />
                          Bio
                        </button>
                      </div>
                    </div>

                    {/* Social Grid */}
                    <div className="px-6 mb-8">
                      <p className="text-[12px] text-[#596075] font-bold uppercase tracking-wider mb-3">Connect</p>
                      <div className="grid grid-cols-4 gap-3">
                        {[Linkedin, Twitter, Instagram, Globe].map((Icon, index) => (
                          <div
                            key={index}
                            className="aspect-square rounded-2xl border border-gray-100 bg-white flex items-center justify-center text-[#1b2540] shadow-sm hover:border-[#0050f8] hover:text-[#0050f8] hover:shadow-md transition-all cursor-pointer"
                          >
                            <Icon size={20} strokeWidth={1.5} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links Section */}
                    <div className="px-6 space-y-3">
                      <p className="text-[12px] text-[#596075] font-bold uppercase tracking-wider mb-3">Links</p>
                      {[
                        { title: "Personal Portfolio", url: "sarahj.design" },
                        { title: "Dribbble Shots", url: "dribbble.com/sarahj" },
                        { title: "Read my latest article", url: "medium.com/@sarahj" }
                      ].map((link) => (
                        <div
                          key={link.title}
                          className="group flex items-center justify-between p-4 bg-white border border-gray-100 shadow-sm rounded-2xl text-[14px] hover:border-[#0050f8]/30 hover:shadow-md transition-all cursor-pointer"
                        >
                          <div>
                            <p className="text-[#1b2540] font-semibold mb-0.5">{link.title}</p>
                            <p className="text-[#596075] text-[12px]">{link.url}</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#0050f8]/10 group-hover:text-[#0050f8] transition-colors">
                            <ExternalLink size={14} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 1: Live Analytics */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-[40px] md:-left-[100px] top-[120px] bg-white/90 backdrop-blur-xl rounded-2xl p-4 z-20 flex items-center gap-4 border border-white/40"
                style={{
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)",
                  transform: "translateZ(50px)"
                }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <TrendingUp size={22} className="text-[#0050f8]" />
                </div>
                <div>
                  <p className="text-[#1b2540] text-[20px] font-bold tracking-tight">2.4K</p>
                  <p className="text-[#596075] text-[13px] font-medium">Profile Views</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Contact Saved */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-[20px] md:-right-[80px] bottom-[140px] bg-white/90 backdrop-blur-xl rounded-2xl p-3 px-5 z-20 flex items-center gap-3 border border-white/40"
                style={{
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)",
                  transform: "translateZ(40px)"
                }}
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg leading-none">✓</span>
                </div>
                <div>
                  <p className="text-[#1b2540] text-[14px] font-bold">Contact Saved</p>
                  <p className="text-[#596075] text-[12px] font-medium">Just now</p>
                </div>
              </motion.div>

              {/* Floating Card 3: Direct Link Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-[0px] md:-right-[40px] top-[260px] bg-white/90 backdrop-blur-xl rounded-full py-2 px-5 z-20 flex items-center gap-2.5 border border-white/40"
                style={{
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                  transform: "translateZ(30px)"
                }}
              >
                <div className="w-6 h-6 rounded-full bg-[#0050f8] flex items-center justify-center">
                  <LinkIcon size={12} className="text-white" />
                </div>
                <span className="text-[#1b2540] text-[13px] font-bold tracking-tight">taglife.me/@taglife</span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
