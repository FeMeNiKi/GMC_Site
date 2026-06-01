"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, hero, site } from "@/content/copy";
import { RoosterLogo } from "@/components/icons/Icons";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 shrink-0"
          aria-label={`${site.name} - página inicial`}
        >
          <RoosterLogo className="h-9 w-9" />
          <span className="font-semibold text-slate-900 text-sm sm:text-base">
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                link.label === "Home"
                  ? "text-primary-600"
                  : "text-slate-600"
              }`}
              {...(link.label === "Home" ? { "aria-current": "page" as const } : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton
            href="#contato"
            size="sm"
            className="hidden sm:inline-flex"
            ariaLabel={hero.ctaSecondary}
          >
            {hero.ctaSecondary}
          </LinkButton>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3"
          aria-label="Menu mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-slate-700 hover:text-primary-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <LinkButton href="#contato" size="sm" className="w-full">
            {hero.ctaSecondary}
          </LinkButton>
        </nav>
      )}
    </header>
  );
}
