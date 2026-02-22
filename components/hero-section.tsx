"use client"

import { useEffect, useState, useRef, useCallback } from "react"

function LightningBoltSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1L3 23H12L10.5 39L21 17H12L13.5 1Z"
        fill="url(#bolt-gradient)"
        stroke="url(#bolt-stroke)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="bolt-gradient" x1="12" y1="1" x2="12" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cc2222" />
          <stop offset="0.5" stopColor="#ff4444" />
          <stop offset="1" stopColor="#8b1a1a" />
        </linearGradient>
        <linearGradient id="bolt-stroke" x1="12" y1="1" x2="12" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6666" />
          <stop offset="1" stopColor="#8b1a1a" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* Crown-shaped crest icon with lightning motif — replaces the logo above the text */
function PowerCrestIcon() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <div
        className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #cc2222 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 120 100"
        fill="none"
        className="w-24 h-20 md:w-32 md:h-28 animate-pulse-glow"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GridCrest power crown emblem"
        role="img"
      >
        {/* Crown / Crest shape with 3 peaks */}
        <path
          d="M10 75L20 30L40 55L60 15L80 55L100 30L110 75Z"
          fill="url(#crown-fill)"
          stroke="url(#crown-stroke)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Central lightning bolt inside crown */}
        <path
          d="M63 32L55 52H63L59 68"
          stroke="#ff4444"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        {/* Base bar */}
        <rect x="15" y="78" width="90" height="6" rx="3" fill="url(#crown-fill)" opacity="0.8" />
        <defs>
          <linearGradient id="crown-fill" x1="60" y1="15" x2="60" y2="84" gradientUnits="userSpaceOnUse">
            <stop stopColor="#cc2222" />
            <stop offset="0.6" stopColor="#8b1a1a" />
            <stop offset="1" stopColor="#5a1010" />
          </linearGradient>
          <linearGradient id="crown-stroke" x1="60" y1="15" x2="60" y2="84" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff6666" />
            <stop offset="1" stopColor="#8b1a1a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function GridCrestLogo() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Crown / Crest emblem */}
      <PowerCrestIcon />

      {/* Creative Company Name */}
      <div className="flex items-baseline gap-1 md:gap-2 select-none" aria-label="GridCrest">
        {/* GRID */}
        <span className="flex items-baseline">
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#f5f5f5]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}>
            G
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#f5f5f5]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}>
            r
          </span>
          {/* The "i" with lightning bolt as the dot */}
          <span className="relative inline-flex flex-col items-center">
            <span className="absolute -top-5 md:-top-7 lg:-top-9 left-1/2 -translate-x-1/2">
              <LightningBoltSVG className="w-4 h-5 md:w-5 md:h-7 lg:w-6 lg:h-8 animate-pulse-glow" />
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#f5f5f5]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}>
              {"\u0131"}
            </span>
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#f5f5f5]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}>
            d
          </span>
        </span>

        {/* CRESt */}
        <span className="flex items-baseline">
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              background: 'linear-gradient(135deg, #cc2222 0%, #8b1a1a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            C
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              background: 'linear-gradient(135deg, #cc2222 0%, #8b1a1a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            re
          </span>
          {/* The "s" styled as a lightning bolt shape */}
          <span className="relative inline-block">
            <svg viewBox="0 0 40 72" className="w-8 h-14 md:w-12 md:h-[4.5rem] lg:w-14 lg:h-[5.5rem] -mb-1 md:-mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 8C32 8 28 4 20 4C12 4 6 10 6 16C6 22 12 26 20 28C28 30 34 34 34 40C34 48 28 54 20 54C10 54 6 48 6 48"
                stroke="url(#s-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M22 22L16 34H24L18 46"
                stroke="#ff4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
              <defs>
                <linearGradient id="s-gradient" x1="20" y1="4" x2="20" y2="54" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff4444" />
                  <stop offset="0.5" stopColor="#cc2222" />
                  <stop offset="1" stopColor="#8b1a1a" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              background: 'linear-gradient(135deg, #cc2222 0%, #8b1a1a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            t
          </span>
        </span>
      </div>
    </div>
  )
}

/* Carousel slides data */
const carouselSlides = [
  {
    headline: "Smart Metering Analytics",
    subtitle: "Real-time monitoring across India's power grid",
    stat: "50M+",
    statLabel: "Meters Monitored",
  },
  {
    headline: "AI-Powered Insights",
    subtitle: "Machine learning for anomaly detection & load forecasting",
    stat: "99.7%",
    statLabel: "Detection Accuracy",
  },
  {
    headline: "Grid Intelligence",
    subtitle: "End-to-end DISCOM analytics & revenue optimization",
    stat: "24/7",
    statLabel: "Real-Time Coverage",
  },
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length)
    }, 4500)
  }, [])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const goTo = (idx: number) => {
    setCurrent(idx)
    startTimer()
  }

  const slide = carouselSlides[current]

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      {/* Slide content */}
      <div className="relative h-28 md:h-24 flex flex-col items-center justify-center overflow-hidden">
        <div
          key={current}
          className="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade-in-up"
        >
          <div className="flex items-center gap-4 mb-2">
            <span
              className="text-2xl md:text-3xl font-black tracking-tight"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                background: 'linear-gradient(135deg, #ff4444, #cc2222)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {slide.stat}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-[#999999]">
              {slide.statLabel}
            </span>
          </div>
          <p className="text-sm md:text-base text-[#bbbbbb] leading-relaxed">
            {slide.subtitle}
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {carouselSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="relative group p-1"
          >
            <span
              className={`block w-8 h-1 rounded-full transition-all duration-500 ${
                idx === current
                  ? "bg-[#cc2222] shadow-[0_0_6px_rgba(204,34,34,0.5)]"
                  : "bg-[#444444] group-hover:bg-[#666666]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.7 ? "#cc2222" : "#ffffff",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p.color === "#cc2222" ? "#cc2222" : "#ffffff"
            ctx.globalAlpha = (1 - dist / 120) * 0.08
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 40%, #2d1515 70%, #1a0a0a 100%)',
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(204, 34, 34, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 34, 34, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Particle animation */}
      <ParticleField />

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center gap-6 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <GridCrestLogo />

        {/* Tagline */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 md:w-20" style={{ background: 'linear-gradient(90deg, transparent, #cc2222)' }} />
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#cc2222] font-medium"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
              At the Crest of the Grid
            </p>
            <div className="h-px w-12 md:w-20" style={{ background: 'linear-gradient(90deg, #cc2222, transparent)' }} />
          </div>
          <p className="text-sm md:text-base text-[#999999] max-w-lg text-center leading-relaxed">
            Pioneering smart metering analytics and power distribution intelligence for a sustainable energy future
          </p>
        </div>

        {/* Carousel */}
        <HeroCarousel />

        {/* Scroll indicator */}
        <div className="mt-8 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#666666]">Explore</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#cc2222]">
              <path d="M10 3V17M10 17L4 11M10 17L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Very subtle bottom transition — minimal, just 40px dark-to-slightly-lighter */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(40, 30, 30, 0.6))',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
