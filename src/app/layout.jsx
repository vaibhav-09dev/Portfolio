import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vaibhav Singh |Portfolio",
  description: "Portfolio of Vaibhav Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
