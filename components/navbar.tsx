"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 xs:px-6">
          <div className="flex h-16 xs:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 xs:h-10 xs:w-10">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg xs:text-xl font-bold text-primary">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg xs:text-xl font-bold leading-none">Luxury</span>
                <span className="text-sm xs:text-base font-medium text-primary leading-none">Travel</span>
              </div>
            </Link>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 xs:h-10 xs:w-10"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Card */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-4 top-20 xs:top-24 z-50 w-[425px]"
            >
              <Card className="overflow-hidden border-0 bg-background/95 backdrop-blur-md shadow-lg">
                <div className="p-4">
                  <nav className="space-y-2">
                    <Link 
                      href="/tours"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Tours
                    </Link>
                    <Link 
                      href="/services"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <Link 
                      href="/about"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="mt-4 pt-4 border-t">
                    <Button className="w-full" size="lg">
                      Book Your Adventure
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 