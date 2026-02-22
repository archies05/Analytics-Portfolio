import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SolutionsSection from "@/components/solutions-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
