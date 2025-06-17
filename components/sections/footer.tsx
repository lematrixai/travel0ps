'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 xs:px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">T</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">Travel</span>
              <span className="text-sm font-medium text-primary leading-none">Ops</span>
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TravelOps. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 