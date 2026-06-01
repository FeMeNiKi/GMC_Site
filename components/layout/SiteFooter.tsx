import Link from "next/link";
import { site, navLinks } from "@/content/copy";
import { RoosterLogo } from "@/components/icons/Icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" aria-label="Rodapé do site">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-2">
            <RoosterLogo className="h-8 w-8" />
            <span className="font-semibold text-white">{site.name}</span>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>Gestão inteligente para granjas avícolas.</p>
        </div>
      </div>
    </footer>
  );
}
