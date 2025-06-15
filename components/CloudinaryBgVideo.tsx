'use client';

export default function CloudinaryBgVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
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
  );
}
