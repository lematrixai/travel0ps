'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Globe, MapPin, Star, ArrowRight, Search, Calendar } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Main Content */}
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Hero Text */}
        <div className="flex-1 flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl space-y-6 pl-8 md:pl-16"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-2"
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white dark:text-white">
                  Discover Your Next
                </h1>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight text-primary dark:text-primary"
                >
                  Adventure
                </motion.span>
              </motion.div>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-white/90 dark:text-white/90 max-w-2xl leading-relaxed"
              >
                Explore the world with our curated tours and unforgettable experiences. 
                From exotic destinations to local gems, we make travel dreams come true.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Search Section - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full px-4 pb-12"
        >
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-white/10 dark:bg-black/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 dark:border-white/10">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 dark:text-white/50 h-4 w-4" />
                    <Input 
                      placeholder="Where do you want to go?"
                      className="pl-10 h-12 rounded-full bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/20 text-white dark:text-white placeholder:text-white/50 dark:placeholder:text-white/50"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 dark:text-white/50 h-4 w-4" />
                    <Input 
                      placeholder="When do you want to go?"
                      className="pl-10 h-12 rounded-full bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/20 text-white dark:text-white placeholder:text-white/50 dark:placeholder:text-white/50"
                    />
                  </div>
                </div>
                <Button size="lg" className="w-full mt-4 rounded-full bg-primary hover:bg-primary/90 text-white dark:text-white">
                  Search Destinations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
