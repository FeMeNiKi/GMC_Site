import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { baseMetadata } from "@/lib/metadata";
import { getSoftwareApplicationJsonLd } from "@/lib/jsonld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getSoftwareApplicationJsonLd();

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-soft-lg"
        >
          Pular para o conteúdo principal
        </a>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}
