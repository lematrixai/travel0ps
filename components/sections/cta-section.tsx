'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-16 xs:py-20 px-4 xs:px-6 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl xs:text-4xl font-bold">
              Your Tanzanian Adventure Awaits
            </h2>
            <p className="text-muted-foreground text-lg">
              From thrilling safaris to beach getaways, experience the perfect blend of wildlife, culture, and natural beauty. 
              Let us craft your dream Tanzanian journey.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground">Year-round adventures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Prime Locations</h3>
                  <p className="text-sm text-muted-foreground">From Serengeti to Zanzibar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Local Experts</h3>
                  <p className="text-sm text-muted-foreground">Guided by experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl" />
            <div className="relative bg-background/50 backdrop-blur-xl rounded-2xl p-8 border border-border/50">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Start Planning Today</h3>
                <p className="text-muted-foreground">
                  Get in touch with our travel experts to create your perfect Tanzanian experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Safari Packages
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 