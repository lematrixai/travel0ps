'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { MapPin, Star } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Stone Town, Zanzibar',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000',
    description: 'Historic heart of Zanzibar with rich cultural heritage',
    rating: 4.9,
    reviews: 1243
  },
  {
    id: 2,
    name: 'Nungwi Beach',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    description: 'Crystal clear waters and pristine white sand beaches',
    rating: 4.8,
    reviews: 986
  },
  {
    id: 3,
    name: 'Prison Island',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    description: 'Home to giant tortoises and stunning coral reefs',
    rating: 4.7,
    reviews: 856
  },
  {
    id: 4,
    name: 'Jozani Forest',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    description: 'Lush forest reserve with rare red colobus monkeys',
    rating: 4.9,
    reviews: 723
  }
]

export function TopDestinations() {
  return (
    <section className="py-16 xs:py-20 px-4 xs:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 xs:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
            Top Destinations in Zanzibar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most beautiful and captivating places in Zanzibar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 xs:h-56">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="h-4 w-4" />
                      <h3 className="font-semibold text-lg">{destination.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 xs:p-5">
                  <p className="text-muted-foreground text-sm mb-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({destination.reviews} reviews)
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 