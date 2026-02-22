import Image from "next/image"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-16"
      style={{
        background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="GridCrest"
                width={40}
                height={40}
              />
              <span
                className="text-xl font-bold text-[#f5f5f5]"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                Grid<span className="text-[#cc2222]">Crest</span>
              </span>
            </div>
            <p className="text-sm text-[#999999] leading-relaxed max-w-xs">
              At the Crest of the Grid. Pioneering smart metering analytics for a brighter, data-driven energy future.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-semibold text-[#f5f5f5] mb-4 tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#solutions" className="text-sm text-[#999999] hover:text-[#cc2222] transition-colors duration-300">
                Solutions
              </a>
              <a href="#about" className="text-sm text-[#999999] hover:text-[#cc2222] transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-sm text-[#999999] hover:text-[#cc2222] transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold text-[#f5f5f5] mb-4 tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#999999]">
              <span>info@gridcrest.com</span>
              <span>Smart Metering Division</span>
              <span>Analytics & Intelligence Team</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#333333] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666666]">
            {"\u00A9"} {new Date().getFullYear()} GridCrest. All rights reserved.
          </p>
          <p className="text-xs text-[#666666]">
            Powering the future of energy analytics
          </p>
        </div>
      </div>
    </footer>
  )
}
