'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000',
    alt: 'Serengeti Plains',
    title: 'Serengeti National Park',
    description: 'Witness the vast savannah plains and the incredible Great Migration of wildebeest and zebras.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000',
    alt: 'Mount Kilimanjaro',
    title: 'Mount Kilimanjaro',
    description: 'Africa\'s highest peak, offering challenging climbs and breathtaking views from the summit.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000',
    alt: 'Ngorongoro Crater',
    title: 'Ngorongoro Crater',
    description: 'Explore the world\'s largest intact volcanic caldera, home to diverse wildlife and stunning landscapes.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    alt: 'Zanzibar Beaches',
    title: 'Zanzibar Island',
    description: 'Experience pristine white sand beaches and crystal-clear turquoise waters of the Indian Ocean.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000',
    alt: 'Tarangire National Park',
    title: 'Tarangire National Park',
    description: 'Discover ancient baobab trees and large herds of elephants in this unique ecosystem.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000',
    alt: 'Stone Town',
    title: 'Stone Town',
    description: 'Immerse yourself in the rich cultural heritage and historic architecture of Zanzibar\'s old town.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000',
    alt: 'Lake Manyara',
    title: 'Lake Manyara',
    description: 'Experience the diverse birdlife and tree-climbing lions in this unique national park.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    alt: 'Selous Game Reserve',
    title: 'Selous Game Reserve',
    description: 'Explore one of Africa\'s largest game reserves, known for its wild and remote landscapes.'
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
            Tanzania Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of Tanzania through our curated collection of stunning moments
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
                  <Card className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 xs:h-56">
                      <div className="relative h-full w-full">
                        <div className="absolute inset-0 bg-muted animate-pulse" />
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition-all duration-300 group-hover:scale-105 opacity-0"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          onLoadingComplete={(img) => {
                            img.classList.remove('opacity-0')
                          }}
                          onLoad={(e) => {
                            const target = e.target as HTMLImageElement
                            target.classList.remove('opacity-0')
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-semibold text-lg text-white">{image.title}</h3>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogTitle className="text-2xl font-bold mb-4">{image.title}</DialogTitle>
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <p className="text-muted-foreground mt-4">{image.description}</p>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 