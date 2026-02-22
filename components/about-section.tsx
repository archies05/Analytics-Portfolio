"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "500K+", label: "Smart Meters Monitored" },
  { value: "99.9%", label: "System Uptime" },
  { value: "15+", label: "DISCOM Partnerships" },
  { value: "24/7", label: "Real-Time Analytics" },
]

function StatCard({ stat, index }: { stat: { value: string; label: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="text-3xl md:text-4xl font-black mb-1"
        style={{
          fontFamily: 'var(--font-poppins), sans-serif',
          background: 'linear-gradient(135deg, #cc2222, #8b1a1a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {stat.value}
      </div>
      <div className="text-xs md:text-sm text-[#6b6b6b] tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#cc2222]" />
            <span
              className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold text-[#cc2222]"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              About GridCrest
            </span>
            <div className="h-px w-16 bg-[#cc2222]" />
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-center text-[#1a1a1a] text-balance"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            At the{" "}
            <span
              style={{
                background: 'linear-gradient(135deg, #cc2222, #8b1a1a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Crest
            </span>{" "}
            of the Grid
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#6b6b6b] max-w-2xl text-center leading-relaxed">
            {"GridCrest is a pioneering smart metering analytics company, delivering cutting-edge data intelligence solutions that empower power distribution companies to optimize operations, reduce losses, and drive India's energy transition."}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
              title: "Smart Metering Intelligence",
              desc: "Advanced analytics for AMI deployment, meter health monitoring, and communication network optimization.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              ),
              title: "Power Grid Analytics",
              desc: "Real-time grid monitoring with load forecasting, demand response management, and distribution loss analytics.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: "Fraud & Anomaly Detection",
              desc: "AI-powered theft detection, tamper identification, and predictive security analytics for revenue protection.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-lg border border-[#e0e0e0] bg-[#ffffff] hover:shadow-lg hover:shadow-[#8b1a1a]/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[#fef2f2] border border-[#f5d5d5]">
                {card.icon}
              </div>
              <h3
                className="text-base font-bold text-[#1a1a1a] mb-2"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
