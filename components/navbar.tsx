"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="GridCrest"
            width={40}
            height={40}
            className={`transition-all duration-300 animate-pulse-glow ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
          />
          <span
            className="text-lg font-bold tracking-tight text-[#f5f5f5] group-hover:text-[#cc2222] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            Grid<span className="text-[#cc2222]">Crest</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#solutions"
            className="text-sm text-[#999999] hover:text-[#cc2222] transition-colors duration-300 tracking-wide"
          >
            Solutions
          </a>
          <a
            href="#about"
            className="text-sm text-[#999999] hover:text-[#cc2222] transition-colors duration-300 tracking-wide"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm px-5 py-2 rounded-sm text-[#f5f5f5] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b1a1a]/30"
            style={{
              background: 'linear-gradient(135deg, #8b1a1a, #cc2222)',
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}
