import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
// import "../components/scroll-grid/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollGrid from "@/components/scroll-grid";

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
      <body className={cn("dark", roboto.variable)}>
        <div className="content-wrap">
          <main id={"main-container"}>
            <ScrollGrid />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
