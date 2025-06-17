"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Calendar, MapPin } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 xs:py-20 px-4 xs:px-6 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 xs:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the experiences of our satisfied travelers who explored the beauty of Zanzibar
          </p>
        </div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Our stay in Zanzibar was absolutely magical! The pristine beaches, crystal-clear waters, and warm hospitality made it an unforgettable experience. The spice tour was a highlight, and the sunset at Nungwi Beach was breathtaking.",
    name: "Sarah Johnson",
    title: "Beach Paradise Explorer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    rating: 5,
    date: "March 2024",
    location: "Nungwi Beach",
    highlights: ["Spice Tour", "Beach Sunset", "Local Cuisine"]
  },
  {
    quote:
      "Stone Town's rich history and culture captivated us from the moment we arrived. The narrow streets, ancient architecture, and vibrant markets created an authentic atmosphere. The local cuisine was a delightful surprise!",
    name: "Michael Chen",
    title: "Cultural Explorer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    rating: 5,
    date: "February 2024",
    location: "Stone Town",
    highlights: ["Historical Tour", "Local Markets", "Food Tour"]
  },
  {
    quote:
      "The marine life in Zanzibar is incredible! We went snorkeling at Mnemba Island and were amazed by the colorful coral reefs and diverse fish species. The water was so clear and warm - perfect for underwater adventures.",
    name: "Emma Thompson",
    title: "Marine Life Enthusiast",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    rating: 5,
    date: "January 2024",
    location: "Mnemba Island",
    highlights: ["Snorkeling", "Dolphin Safari", "Coral Reefs"]
  },
  {
    quote:
      "Our safari blue tour was the highlight of our trip. Sailing on a traditional dhow, swimming with dolphins, and enjoying a seafood lunch on a sandbank - it was like living in a dream. The crew was incredibly professional and friendly.",
    name: "David Wilson",
    title: "Adventure Seeker",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    rating: 5,
    date: "December 2023",
    location: "Safari Blue Tour",
    highlights: ["Dhow Sailing", "Dolphin Watching", "Seafood Lunch"]
  },
  {
    quote:
      "The Jozani Forest tour was an unexpected delight. Seeing the rare red colobus monkeys in their natural habitat was a unique experience. Our guide was knowledgeable and passionate about conservation.",
    name: "Lisa Anderson",
    title: "Nature Lover",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
    rating: 5,
    date: "November 2023",
    location: "Jozani Forest",
    highlights: ["Wildlife Tour", "Nature Walk", "Conservation"]
  },
]; 