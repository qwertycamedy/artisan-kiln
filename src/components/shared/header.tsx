import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

const navItems = [
  "Home",
  "Shop",
  "Collections",
  "About Us",
  "FAQ",
  "Gallery",
  "Blog",
];

export const Header = () => {
  return (
    <header className="border-b-2 border-border bg-cream">
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <span className="h-4 w-4 rounded-full border-2 border-border bg-[#D98C6B]" />
            <span className="h-4 w-4 rounded-full border-2 border-border bg-[#D8B85C]" />
            <span className="h-4 w-4 rounded-full border-2 border-border bg-[#7EA38B]" />
          </div>

          <button className="flex h-10 w-10 items-center justify-center border-r-2 border-border md:hidden">
            <span className="text-2xl leading-none">‹</span>
          </button>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="font-heading text-[20px] uppercase leading-none tracking-wide transition-opacity hover:opacity-60"
            >
              {item}
            </Link>
          ))}
        </nav>

        <nav className="flex items-center gap-6 md:hidden">
          <Link href="/" className="font-heading text-[20px] uppercase">
            Shop
          </Link>

          <Link href="/" className="font-heading text-[20px] uppercase">
            Collections
          </Link>

          <Link href="/" className="font-heading text-[20px] uppercase">
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative flex items-center justify-center">
            <ShoppingCart className="h-8 w-8" strokeWidth={2.2} />

            <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-border bg-yellow-300 px-1 text-[11px] font-bold leading-none">
              3
            </span>
          </button>

          <button className="hidden h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-[#6373A4] md:flex">
            <User className="h-6 w-6 text-white" strokeWidth={2.2} />
          </button>

          <button className="rounded-xl border-2 border-border bg-navy px-4 py-2 font-heading text-lg uppercase leading-none text-white shadow-panel transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};
