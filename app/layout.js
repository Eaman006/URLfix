import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import background from './background.jpg';
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URLfix",
  description: "This is url shortner website which helps the user to shorten their url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <div className="md:w-full w-[150%] h-[130vh] md:h-[91vh] relative">
      <Image
        alt="background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1, // Ensure the image stays in the background
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
    <SpeedInsights />        
      </body>
    </html>
  );
}
