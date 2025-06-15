'use client';

export default function CloudinaryBgVideo() {
  return (
    <div className="relative h-[calc(60vh-2rem)] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dj7odelpw/video/upload/v1/hero-bg_akcj3t"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Blur gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
}
