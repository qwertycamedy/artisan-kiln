import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/provider";
import { Footer, Header } from "@/components/shared";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
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
        className={`${comfortaa.className} bg-cream text-ink flex flex-col flex-1 min-h-full`}
      >
        <StoreProvider>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
