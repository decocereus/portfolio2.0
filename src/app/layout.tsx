import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Amartya Singh",
  description: "Personal Portfolio of Amartya Singh",
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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen min-w-screen bg-background font-sans antialiased dark",
          roboto.variable
        )}
      >
        <div
          className={cn(
            "h-full w-full flex items-center justify-center flex-col overflow-x-hidden"
          )}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
