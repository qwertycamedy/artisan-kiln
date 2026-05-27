import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/provider";
import { Footer, Header } from "@/components/shared";

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
        className={`${inter.variable} ${oswald.variable} bg-cream text-ink flex flex-col flex-1 min-h-full`}
      >
        <StoreProvider>
          <Header />
          <main className="flex flex-1 flex-col p-4 md:p-8">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
