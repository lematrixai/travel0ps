"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  date: string;
  location: string;
  highlights: string[];
}

export function TestimonialsSection() {
  return (
    <section className="py-16 xs:py-20 px-4 xs:px-6 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 xs:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the experiences of our satisfied travelers who explored the wonders of Tanzania
          </p>
        </div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            cover={true}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The Serengeti safari was beyond our wildest dreams! Witnessing the Great Migration was a once-in-a-lifetime experience. Our guide's knowledge of wildlife and the ecosystem made the journey even more special.",
    name: "Sarah Johnson",
    title: "Wildlife Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    rating: 5,
    date: "March 2024",
    location: "Serengeti National Park",
    highlights: ["Great Migration", "Wildlife Safari", "Sunset Game Drive"]
  },
  {
    quote:
      "Climbing Mount Kilimanjaro was the most challenging yet rewarding experience of my life. The changing landscapes, from rainforest to arctic summit, were breathtaking. Our guides ensured our safety and success.",
    name: "Michael Chen",
    title: "Adventure Seeker",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    rating: 5,
    date: "February 2024",
    location: "Mount Kilimanjaro",
    highlights: ["Summit Climb", "Scenic Views", "Professional Guides"]
  },
  {
    quote:
      "Zanzibar's beaches are paradise on earth! The crystal-clear waters, white sand beaches, and rich cultural heritage made our stay unforgettable. The spice tour and Stone Town exploration were perfect complements to the beach experience.",
    name: "Emma Thompson",
    title: "Beach Lover",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    rating: 5,
    date: "January 2024",
    location: "Zanzibar",
    highlights: ["Beach Relaxation", "Spice Tour", "Cultural Experience"]
  },
  {
    quote:
      "The Ngorongoro Crater was like stepping into a natural amphitheater of wildlife. Seeing the Big Five in their natural habitat was incredible. The crater's unique ecosystem and stunning views made it a highlight of our Tanzania trip.",
    name: "David Wilson",
    title: "Nature Photographer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    rating: 5,
    date: "December 2023",
    location: "Ngorongoro Crater",
    highlights: ["Big Five Safari", "Crater Views", "Wildlife Photography"]
  },
  {
    quote:
      "Tarangire National Park's elephant herds were magnificent! The baobab trees and diverse birdlife added to the experience. Our guide's expertise in tracking animals made each game drive exciting and educational.",
    name: "Lisa Anderson",
    title: "Wildlife Conservationist",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
    rating: 5,
    date: "November 2023",
    location: "Tarangire National Park",
    highlights: ["Elephant Herds", "Bird Watching", "Baobab Trees"]
  },
]; 