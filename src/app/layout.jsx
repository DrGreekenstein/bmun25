import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/chatbot/chatbot";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bosco MUN 2025",
  description: "Bosco MUN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Chatbot/>
        <Footer/>
      </body>
    </html>
  );
}
