import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Link from "next/link";
import { RESUME_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Amartya Singh | Full Stack Engineer",
  description:
    "Personal Portfolio of Amartya Singh - Full Stack Engineer proficient in Next.js, Node.js and Web3",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          inter.variable
        )}
      >
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm px-6 updated">
          <div className="max-w-3xl mx-auto h-16 flex items-center justify-between">
            <p className="font-medium text-foreground py-2 select-none">AS</p>
            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm py-2 rounded-lg text-foreground hover:bg-accent transition-colors duration-200"
            >
              View Resume
            </Link>
          </div>
        </header>
        {children}
        <footer className="w-full border-t border-border py-8 updated">
          <div className="max-w-3xl mx-auto px-4 flex items-center justify-center">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Amartya Singh
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
