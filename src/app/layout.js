import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animation.css";
import Header from "./Comman/Header";
import Footer from "./Comman/Footer";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaurav's Portfolio",
  description: "Gaurav's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`    ${geistSans.variable} ${geistMono.variable} antialiased scrollHide `}
      >
        <ScrollProgressBar />
        <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-to-t from-zinc-400 from-0% via-zinc-500 via-50% to-primary2 to-100% main-container"></div>
        <Header />
        <div className="overflow-x-hidden scrollHide w-full ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
