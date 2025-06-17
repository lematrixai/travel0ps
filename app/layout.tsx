import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Tanzania Tourism",
  description: "Your gateway to unforgettable Tanzanian adventures - from Serengeti safaris to Zanzibar beaches",
  keywords: ["Tanzania", "Safari", "Kilimanjaro", "Zanzibar", "Serengeti", "Ngorongoro", "Wildlife", "Adventure"],
  authors: [{ name: "TravelOps" }],
  openGraph: {
    title: "Tanzania Tourism",
    description: "Your gateway to unforgettable Tanzanian adventures - from Serengeti safaris to Zanzibar beaches",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Tourism",
    description: "Your gateway to unforgettable Tanzanian adventures - from Serengeti safaris to Zanzibar beaches",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
