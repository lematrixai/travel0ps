'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Clock, Users } from 'lucide-react'

const tours = [
  {
    id: 1,
    title: 'Spice Island Tour',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000',
    price: 1299,
    duration: '7 days',
    groupSize: 'Max 12',
    rating: 4.9,
    reviews: 156,
    description: 'Experience the aromatic world of Zanzibar spices and local culture'
  },
  {
    id: 2,
    title: 'Dolphin Safari & Snorkeling',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    price: 1499,
    duration: '3 days',
    groupSize: 'Max 15',
    rating: 4.8,
    reviews: 98,
    description: 'Swim with dolphins and explore vibrant coral reefs'
  },
  {
    id: 3,
    title: 'Stone Town Cultural Tour',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    price: 899,
    duration: '2 days',
    groupSize: 'Max 10',
    rating: 4.9,
    reviews: 87,
    description: 'Discover the rich history and architecture of Stone Town'
  },
  {
    id: 4,
    title: 'Luxury Beach Getaway',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    price: 1699,
    duration: '5 days',
    groupSize: 'Max 8',
    rating: 4.7,
    reviews: 64,
    description: 'Exclusive beach resort experience with private tours'
  }
]

export function TopTours() {
  return (
    <section className="py-16 xs:py-20 px-4 xs:px-6 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 xs:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
            Popular Zanzibar Tours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of unforgettable Zanzibar experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-48 sm:h-auto sm:w-1/3">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 xs:p-6 sm:w-2/3">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg xs:text-xl">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{tour.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {tour.description}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{tour.groupSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">${tour.price}</span>
                        <span className="text-sm text-muted-foreground">/person</span>
                      </div>
                      <Button className="rounded-full">
                        Book Now
                      </Button>
                    </div>
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