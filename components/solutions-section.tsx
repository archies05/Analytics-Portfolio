"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Real-Time AMI Dashboard",
    description:
      "Live monitoring of Advanced Metering Infrastructure across distribution networks with geo-spatial analytics and real-time event tracking.",
    thumbnail: "/images/dashboard-realtime.jpg",
    tags: ["REAL TIME", "AMI", "DASHBOARD"],
    link: "https://brain-tumor-cell-detection.vercel.app/",
  },
  {
    title: "IoT Analytics & DISCOM Intelligence",
    description:
      "Comprehensive IoT analytics platform for DISCOMs with smart meter data processing, KPI tracking, and predictive maintenance alerts.",
    thumbnail: "/images/dashboard-iot.jpg",
    tags: ["IoT", "ANALYTICS", "DISCOM"],
    link: "#",
  },
  {
    title: "Anomaly Detection & Security",
    description:
      "AI-powered anomaly detection system for identifying meter tampering, energy theft, and network security threats in real-time.",
    thumbnail: "/images/dashboard-anomaly.jpg",
    tags: ["AIML", "SECURITY", "DETECTION"],
    link: "#",
  },
  {
    title: "Revenue & Billing Analytics",
    description:
      "End-to-end billing analytics with revenue cycle management, collection efficiency tracking, and payment pattern analysis.",
    thumbnail: "/images/dashboard-billing.jpg",
    tags: ["BILLING", "REVENUE", "ANALYTICS"],
    link: "#",
  },
  {
    title: "Load Forecasting Engine",
    description:
      "Machine learning-based load forecasting with demand-side management insights and capacity planning for power distribution.",
    thumbnail: "/images/dashboard-load.jpg",
    tags: ["ML", "FORECASTING", "PLANNING"],
    link: "#",
  },
  {
    title: "Network Health Monitor",
    description:
      "Smart meter communication network monitoring with connectivity analytics, signal quality metrics, and infrastructure health scoring.",
    thumbnail: "/images/dashboard-network.jpg",
    tags: ["NETWORK", "HEALTH", "MONITORING"],
    link: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#8b1a1a]/10 hover:-translate-y-2 bg-[#fafafa] border border-[#d8d8d8]"
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Glassmorphism overlay on hover */}
          <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/40 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium text-[#ffffff]"
                style={{
                  background: "rgba(139, 26, 26, 0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(204, 34, 34, 0.3)",
                }}
              >
                View Live Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 13L13 1M13 1H5M13 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="p-5">
          <h3
            className="text-lg font-bold mb-2"
            style={{
              fontFamily: "var(--font-playfair), serif",
              background: "linear-gradient(135deg, #8b1a1a 0%, #5c1212 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm text-[#5a5a5a] leading-relaxed line-clamp-2 mb-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {project.description}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-sm text-[#6b1515] bg-[#f0e4e4] border border-[#ddd0d0]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, rgb(50, 38, 38) 0%, rgb(140, 132, 132) 3%, rgb(190, 187, 187) 6%, rgb(204, 205, 205) 10%, rgb(212, 212, 212) 25%, rgb(224, 224, 224) 45%, rgb(238, 238, 238) 65%, rgb(248, 248, 248) 85%, rgb(252, 252, 252) 100%)",
      }}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          {/* Label with lines */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c02020]" />
            <span
              className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold text-[#c02020]"
              style={{
                fontFamily: "var(--font-playfair), serif",
                letterSpacing: "0.25em",
              }}
            >
              Our Solutions
            </span>
            <div className="h-px w-16 bg-[#c02020]" />
          </div>

          {/* Main heading */}
          <h2
            className="text-3xl md:text-5xl font-bold text-center text-[#1a1a1a] text-balance"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Power Sector{" "}
            <span
              className="font-bold italic"
              style={{
                background: "linear-gradient(180deg, #a52020 0%, #6b1414 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Analytics Portfolio
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="mt-5 text-sm md:text-base text-[#3a3a3a] max-w-2xl text-center leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {
              "Explore our suite of AI-powered solutions designed to modernize India's power distribution infrastructure and accelerate the national smart metering mission."
            }
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
