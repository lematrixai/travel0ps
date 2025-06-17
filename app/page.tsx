'use client'

import { Navbar } from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import { TopDestinations } from '@/components/sections/top-destinations'
import { TopTours } from '@/components/sections/top-tours'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'
import { WhatsAppBanner } from '@/components/whatsapp-banner'
import { BackToTop } from '@/components/back-to-top'
import CloudinaryBgVideo from '@/components/CloudinaryBgVideo'
import { GallerySection } from '@/components/sections/gallery-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        <CloudinaryBgVideo />
        <Navbar />
        <HeroSection />
      </div>

      {/* Main Content */}
      <div className="relative">
        <TopDestinations />
        <TopTours />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
        <WhatsAppBanner />
        <BackToTop />
      </div>
    </main>
  )
}
