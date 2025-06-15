import CloudinaryBgVideo from "@/components/CloudinaryBgVideo";

export default function Home() {
  return (
    <main className="relative z-10 text-white">
      <CloudinaryBgVideo />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Cloudinary Video Background</h1>
      </div>
    </main>
  );
}
