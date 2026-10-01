"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Goal", href: "/goal" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

function NavLink({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : !href.includes("#") && pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
        isActive && "text-foreground",
        className,
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full bg-green-900 transition-transform duration-300",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex cursor-pointer items-center justify-center gap-3"
          aria-label="Brighter Roots Youth Services home"
        >
          <Logo className="flex h-[90px] flex-1" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} label={item.label} />
          ))}
          <Link
            href="/contact"
            className="ml-3 inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:translate-y-px"
          >
            Get In Touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background px-4 pt-2 pb-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  onNavigate={close}
                  className="block w-full text-left"
                />
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={close}
            className="mt-2 flex h-10 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Get In Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
