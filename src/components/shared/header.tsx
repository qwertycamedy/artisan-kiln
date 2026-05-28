"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectCartQuantity } from "@/store/selectors/cart";
import { highlightCart } from "@/store/features/cart";

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
  const dispatch = useAppDispatch();

  const quantity = useAppSelector(selectCartQuantity);

  return (
    <header className="border-b-2 border-border bg-cream">
      <div className="mx-auto flex h-14 max-w-360 items-center justify-between px-4 md:h-16 md:px-6">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full border-2 border-border bg-[#D98C6B]" />
          <span className="h-3 w-3 rounded-full border-2 border-border bg-[#D8B85C]" />
          <span className="h-3 w-3 rounded-full border-2 border-border bg-[#7EA38B]" />
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/"
              className="
            font-heading
            text-[15px]
            uppercase
            leading-none
            tracking-wide
            transition-opacity
            hover:opacity-60
          "
            >
              {item}
            </Link>
          ))}
        </nav>

        <nav className="flex items-center gap-4 md:hidden">
          <Link
            href="/"
            className="font-heading text-[14px] uppercase leading-none"
          >
            Shop
          </Link>

          <Link
            href="/"
            className="font-heading text-[14px] uppercase leading-none"
          >
            Collections
          </Link>

          <Link
            href="/"
            className="font-heading text-[14px] uppercase leading-none"
          >
            About
          </Link>
        </nav>

        <button
          onClick={() => dispatch(highlightCart())}
          className="relative flex items-center justify-center"
        >
          <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />

          <span
            className="
            absolute
            -right-2
            -top-1
            flex
            min-w-4.5
            items-center
            justify-center
            rounded-full
            border-2
            border-border
            bg-gold
            px-1
            text-[9px]
            font-bold
            leading-none
          "
          >
            {quantity}
          </span>
        </button>
      </div>
    </header>
  );
};
