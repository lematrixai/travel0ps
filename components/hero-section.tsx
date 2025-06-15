'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Globe, MapPin, Star, ArrowRight } from 'lucide-react'

const heroSection = () => {
  return (
    <div>
      {/* Hero Content */}
      <div className="relative z-10 -mt-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Discover Your Next
                <span className="text-primary block mt-2">Adventure</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the world with our curated tours and unforgettable experiences. 
                From exotic destinations to local gems, we make travel dreams come true.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" className="rounded-full">
                  Start Exploring
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  View Packages
                </Button>
              </div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
                <p className="text-muted-foreground">Explore our carefully curated selection of worldwide destinations.</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Experiences</h3>
                <p className="text-muted-foreground">Immerse yourself in authentic local culture and traditions.</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Star className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
                <p className="text-muted-foreground">Enjoy top-notch service and support throughout your journey.</p>
              </Card>
            </motion.div>
          </div>
        </div>



    </div>
  )
}

export default heroSection
