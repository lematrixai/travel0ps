'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CloudinaryBgVideo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div className="relative h-[calc(100vh-2rem)] overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-background animate-pulse" />
      )}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dj7odelpw/video/upload/v1/hero-bg_akcj3t"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient overlays */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 dark:via-background/50 to-background dark:to-background/95" 
      />
    </div>
  );
}
