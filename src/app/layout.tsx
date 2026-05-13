
import type {Metadata, Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import {useIsMobile} from "@/components/hook/useIsMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0f172a", // ta couleur de fond
};

export const metadata: Metadata = {
    title: "Alex — Développeur Fullstack",
    description: "Portfolio d'Alex, étudiant BUT Informatique et développeur fullstack spécialisé en Next.js, TypeScript et React.",
    keywords: ["développeur web", "portfolio", "Next.js", "TypeScript", "fullstack"],
    authors: [{ name: "Alex" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Alex — Développeur Fullstack",
        description: "Portfolio d'Alex, étudiant BUT Informatique et dev fullstack.",
        url: "https://ton-domaine.com",
        siteName: "Portfolio Alex",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/profil.png",
                width: 1200,
                height: 630,
                alt: "Portfolio Alex",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Alex — Développeur Fullstack",
        description: "Portfolio d'Alex, étudiant BUT Informatique et dev fullstack.",
        images: ["/profil.png"],
    },
    alternates: {
        canonical: "https://ton-domaine.com",
    },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {


  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth `}
      >

      <body
          className="min-h-full flex flex-col text-white"
      >

        <Navbar />
        {children}
        <Toaster richColors />

      </body>
      </html>
  );
}