import { Header, Hero } from "@/components/shared";

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <Header />
      <Hero />

      <section className="p-4 md:p-8">
        <h2 className="font-heading text-4xl uppercase">
          Build Your Tile Layout
        </h2>
      </section>
    </main>
  );
}
