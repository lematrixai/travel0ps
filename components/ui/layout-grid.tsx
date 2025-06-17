"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const LayoutGrid = ({ cards }: { cards: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[calc(100vh-10rem)] overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute left-0 top-0 grid h-full w-full grid-cols-1 gap-4 p-4 md:grid-cols-12 md:grid-rows-3"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={cn(
              "relative overflow-hidden rounded-xl",
              card.className
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.thumbnail})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full p-4 text-white">
              {card.content}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 