'use client'

import { Suspense } from 'react'
import { Navbar } from "@/components/navbar"
import CloudinaryBgVideo from "@/components/CloudinaryBgVideo"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <section className="relative">
        <Suspense fallback={<div className="h-[calc(100vh-2rem)] bg-background animate-pulse" />}>
          <CloudinaryBgVideo />
        </Suspense>
        <Suspense fallback={<div className="h-[calc(100vh-2rem)] bg-background animate-pulse" />}>
          <HeroSection />
        </Suspense>
      </section>
    </main>
  )
}
