'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    alt: 'Nungwi Beach Sunset',
    title: 'Nungwi Beach',
    description: 'Experience the pristine white sands and crystal-clear waters of Nungwi Beach, where the Indian Ocean meets paradise.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000',
    alt: 'Stone Town Architecture',
    title: 'Stone Town',
    description: 'Explore the historic heart of Zanzibar, where ancient architecture and rich cultural heritage come together.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    alt: 'Spice Farm Tour',
    title: 'Spice Tour',
    description: 'Discover the aromatic world of Zanzibar\'s spice farms, where nature\'s finest flavors come to life.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1000',
    alt: 'Jozani Forest',
    title: 'Jozani Forest',
    description: 'Venture into the lush greenery of Jozani Forest, home to the rare red colobus monkeys and diverse wildlife.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    alt: 'Prison Island',
    title: 'Prison Island',
    description: 'Visit the historic Prison Island, home to giant tortoises and stunning coral reefs.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000',
    alt: 'Forodhani Gardens',
    title: 'Forodhani Gardens',
    description: 'Experience the vibrant night market at Forodhani Gardens, a feast for all senses.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000',
    alt: 'Mnemba Island',
    title: 'Mnemba Island',
    description: 'Discover the exclusive Mnemba Island, a private paradise surrounded by coral reefs.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1000',
    alt: 'Kendwa Beach',
    title: 'Kendwa Beach',
    description: 'Relax on the pristine shores of Kendwa Beach, known for its perfect sunsets.'
  }
]

export function GallerySection() {
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
            Zanzibar Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of Zanzibar through our curated collection of stunning moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                        <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  <DialogTitle className="sr-only">
                    {image.title} - {image.alt}
                  </DialogTitle>
                  <div className="relative aspect-[16/9] max-h-[60vh]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 