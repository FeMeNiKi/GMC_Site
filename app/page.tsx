import { Header } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { PainCards } from "@/components/sections/PainCards";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <PainCards />
        <Features />
        <ProductShowcase />
        <Benefits />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
