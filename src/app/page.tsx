import FeaturedSection from "@/components/FeaturedSection"
import HeroSection from "@/components/HeroSection"
import TestimonialCards from "@/components/TestimonialCards"
import MoreAbout from "@/components/MoreAbout"
import WhyChooseUs from "@/components/WhyChooseUs"
import Customers from "@/components/Customers"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestimonialCards />
      <MoreAbout />
      <Customers />
      <Footer />
    </main>
  )
}
