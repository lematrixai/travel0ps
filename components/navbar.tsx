"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/40 backdrop-blur-sm border-b border-border/40 dark:border-border/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Tourism</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/tours">Tours</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Button variant="outline" size="sm" className="rounded-full">
              Book Now
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <MobileNavLink href="/tours" onClick={() => setIsOpen(false)}>
              Tours
            </MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
            <div className="pt-4">
              <Button className="w-full rounded-full ">Book Now</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-sm font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  )
} 