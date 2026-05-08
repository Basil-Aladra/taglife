"use client"

import { motion } from "framer-motion"
import { Bell, BarChart3, Leaf } from "lucide-react"

const services = [
  {
    id: "realtime",
    icon: Bell,
    title: "Real-time Updates",
    description: "Get instant notifications when someone taps your card. Track every interaction as it happens.",
  },
  {
    id: "analytics",
    title: "Advanced Analytics",
    description: "Deep insights into your networking performance with beautiful visualizations.",
    hasChart: true,
  },
  {
    id: "eco",
    icon: Leaf,
    title: "Eco-friendly Materials",
    description: "Sustainable bamboo and recycled materials. Network responsibly while making an impression.",
  },
]

function MiniChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70]
  return (
    <div className="flex items-end gap-[6px] h-[64px]">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-[12px] rounded-[4px] bg-gradient-to-t from-deep-cosmos to-[#0050f8]"
        />
      ))}
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="section-padding bg-ghost-canvas">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[56px]"
        >
          <span 
            className="inline-block px-[12px] py-[4px] bg-deep-cosmos/[0.04] text-deep-cosmos text-[13px] rounded-[16px] mb-[16px]"
            style={{ fontWeight: 450, lineHeight: 1.54, letterSpacing: "-0.005em" }}
          >
            Services
          </span>
          <h2 
            className="font-display text-midnight-navy"
            style={{ fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.04, letterSpacing: "-0.01em", fontWeight: 400 }}
          >
            Everything You Need to
            <br className="hidden md:block" />
            <span className="text-deep-cosmos"> Stand Out</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-[16px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div 
                className="relative bg-pure-surface rounded-[20px] p-[28px] h-full transition-all duration-300 overflow-hidden"
                style={{ 
                  boxShadow: "rgba(0, 39, 80, 0.08) 0px 10px 30px -10px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px",
                }}
              >
                {service.hasChart ? (
                  <>
                    <MiniChart />
                    <h3 
                      className="text-midnight-navy mt-[20px] mb-[8px]"
                      style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.01em", fontWeight: 450 }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-slate-ink"
                      style={{ fontSize: "15px", lineHeight: 1.6, letterSpacing: "-0.016em", fontWeight: 400 }}
                    >
                      {service.description}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-[48px] h-[48px] rounded-[16px] bg-chartreuse-pulse/10 flex items-center justify-center mb-[20px]">
                      {service.icon && <service.icon className="w-[22px] h-[22px] text-midnight-navy" strokeWidth={1.5} />}
                    </div>
                    <h3 
                      className="text-midnight-navy mb-[8px]"
                      style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.01em", fontWeight: 450 }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-slate-ink"
                      style={{ fontSize: "15px", lineHeight: 1.6, letterSpacing: "-0.016em", fontWeight: 400 }}
                    >
                      {service.description}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
