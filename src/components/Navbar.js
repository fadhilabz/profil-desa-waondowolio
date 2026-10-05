"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Potensi", href: "/potensi" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-space-md">
          <img alt="Logo Desa" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAahd0tkn8LmxBoGayeslWHLTVNdY49uTVifS9P17jeu-BZIFP10bsd5pxiNihOcxsVGIyeXvp6_Jwk_Lh-QhCAuLJ7nKWtupxjEv9Vxa4zc5s6aEP8C1485V-KxPxeiQ85kmhTM7EydJjh2-xWGG3E1VUQPZ2W5pkZ2P5pomvzQsEdZ35oQZWhlWEhAtApmUAFSvA6WmDtMQpnW2y9rYHY-Nv-wI1Fj-QQNxzExNbRP3YNCoAf1yuBuA" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">Desa Waondowolio</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Kecamatan Kapuntori</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-space-lg">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "transition-colors py-space-sm text-primary-container font-label-lg font-bold border-b-2 border-tertiary-container"
                    : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link
            href="/kontak"
            className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded shadow-[0_4px_16px_-2px_rgba(27,77,62,0.1)] hover:bg-primary-container hover:text-on-primary transition-all"
          >
            Layanan Mandiri
          </Link>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-on-primary text-[22px]">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-outline-variant/40 bg-surface-container-lowest px-6 py-space-md flex flex-col gap-space-xs">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                "py-space-sm font-label-lg text-label-lg " +
                (pathname === l.href ? "text-primary-container font-bold" : "text-on-surface-variant")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
