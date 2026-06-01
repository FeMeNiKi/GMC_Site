import type { Metadata } from "next";
import { site } from "@/content/copy";

const siteUrl = site.url;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Gestão Inteligente para Granjas Avícolas`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "gestão avícola",
    "granja avícola",
    "software granja",
    "controle de ovos",
    "incubação",
    "vacinação aves",
    "GMC",
    "Granja Multi Core",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Gestão Inteligente para Granjas Avícolas`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} - Dashboard de gestão avícola`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Gestão Inteligente para Granjas Avícolas`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};
