import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

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
        className={`${GeistSans.className} max-w-screen-2xl mx-auto flex flex-col items-center p-4`}
      >
        <main className="w-full mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
