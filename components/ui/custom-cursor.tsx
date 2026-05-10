"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true) // Default true to prevent hydration mismatch, check in useEffect

  // Use motion values for position
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  // Spring config for the outer ring (elegant delay)
  const ringConfig = { stiffness: 250, damping: 20, mass: 0.5 }
  const ringX = useSpring(mouseX, ringConfig)
  const ringY = useSpring(mouseY, ringConfig)

  // Spring config for the dot (fast)
  const dotConfig = { stiffness: 800, damping: 35, mass: 0.1 }
  const dotX = useSpring(mouseX, dotConfig)
  const dotY = useSpring(mouseY, dotConfig)

  useEffect(() => {
    // Check if it's a touch device
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(touch)

    if (touch) {
      return // Do not render or hide default cursor on touch devices
    }

    // Hide default cursor globally
    document.body.style.cursor = 'none'

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for button/link hover
      if (target.closest('a') || target.closest('button') || target.closest('.clickable')) {
        setIsHoveringButton(true)
      } else {
        setIsHoveringButton(false)
      }

      // Check for card hover
      if (target.closest('.hover-card')) {
        setIsHoveringCard(true)
      } else {
        setIsHoveringCard(false)
      }
    }

    const handleMouseLeave = () => {
      // Keep visible but maybe change state
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
      document.body.style.cursor = 'auto' // Restore cursor on unmount
    }
  }, [mouseX, mouseY, isVisible])

  if (isTouchDevice) {
    return null
  }

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full border border-[#d0f100]/30 backdrop-blur-[2px] transition-colors duration-300"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHoveringButton ? "rgba(208, 241, 0, 0.2)" : "transparent",
        }}
        animate={{
          scale: isHoveringButton ? 2.5 : isHoveringCard ? 3 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {isHoveringCard && (
          <span className="text-[6px] font-bold text-[#d0f100] tracking-widest uppercase shadow-sm">View</span>
        )}
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-[#d0f100] shadow-[0_0_8px_rgba(208,241,0,0.8)]"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHoveringButton ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
