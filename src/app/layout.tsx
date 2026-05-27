import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "The Artisan Kiln",
  description: "Ceramic tile order form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} bg-cream text-ink`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
