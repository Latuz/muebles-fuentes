import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muebles Artesanales - Muebles a Medida y Tapicería en Chile",
  description: "Fabricación de muebles a medida y servicios de tapicería en Chile. Calidad, diseño y atención personalizada. Muebles únicos para tu hogar.",
  keywords: ["muebles a medida", "tapicería", "muebles chile", "muebles artesanales", "restauración de muebles", "muebles personalizados"],
  authors: [{ name: "Muebles Artesanales" }],
  openGraph: {
    title: "Muebles Artesanales - Muebles a Medida y Tapicería",
    description: "Fabricación de muebles a medida y servicios de tapicería en Chile",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
