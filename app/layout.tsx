import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className}  mx-auto flex flex-col items-center `}
      >
        <main className="w-full mx-auto max-w-screen-2xl">
          <Navbar />
          {children}
        </main>
        <Toaster expand={true} />
        <Footer />
      </body>
    </html>
  );
}
