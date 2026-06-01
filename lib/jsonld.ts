import { site } from "@/content/copy";

export function getSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: site.description,
    url: site.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Demonstração gratuita disponível mediante contato",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "50",
    },
  };
}
