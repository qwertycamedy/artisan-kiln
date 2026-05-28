import Link from "next/link";

const footerLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Shipping Info",
  "Contact Us",
];

export const Footer = () => {
  return (
    <footer className="border-t-2 border-border bg-cream">
      <div className="mx-auto flex max-w-360 flex-col items-center px-4 py-8 md:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="/"
              className="
                font-heading
                text-[14px]
                uppercase
                leading-none
                transition-opacity
                hover:opacity-60
              "
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="my-6 h-0.5 w-full max-w-130 bg-border" />

        <div className="text-center">
          <p className="font-heading text-[14px] uppercase leading-none">
            © 2026 The Artisan Kiln
          </p>

          <p className="mt-2 text-xs text-black/60">
            Handmade ceramic tile studio. Crafted with precision and artistry.
          </p>
        </div>
      </div>
    </footer>
  );
};
