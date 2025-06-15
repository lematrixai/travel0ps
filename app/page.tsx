'use client'
import { Navbar } from "@/components/navbar"

import CloudinaryBgVideo from "@/components/CloudinaryBgVideo"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, MapPin, Star } from "lucide-react"

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  })
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  })
}

export default function Home() {
  const title = "Discover Your Next"
  const subtitle = "Adventure"

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative">
        <CloudinaryBgVideo />
        
        {/* Hero Content */}
        <div className="relative z-10 -mt-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              {/* Animated Title */}
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold tracking-tight"
                  variants={textVariants}
                  custom={0}
                >
                  {title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-2"
                      variants={letterVariants}
                      custom={i}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              {/* Animated Subtitle */}
              <motion.div
                variants={textVariants}
                custom={1}
                className="overflow-hidden"
              >
                <motion.span 
                  className="text-4xl md:text-6xl font-bold text-primary block"
                  variants={letterVariants}
                  custom={4}
                >
                  {subtitle}
                </motion.span>
              </motion.div>
              
              {/* Animated Description */}
              <motion.p 
                variants={textVariants}
                custom={2}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Explore the world with our curated tours and unforgettable experiences. 
                From exotic destinations to local gems, we make travel dreams come true.
              </motion.p>

              {/* Animated Buttons */}
              <motion.div
                variants={textVariants}
                custom={3}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <Button size="lg" className="rounded-full group">
                  Start Exploring
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  View Packages
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
                <p className="text-muted-foreground">Explore our carefully curated selection of worldwide destinations.</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Experiences</h3>
                <p className="text-muted-foreground">Immerse yourself in authentic local culture and traditions.</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Star className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
                <p className="text-muted-foreground">Enjoy top-notch service and support throughout your journey.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
