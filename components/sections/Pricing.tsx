import { pricing } from "@/content/copy";
import { LinkButton } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section
      id="precos"
      className="py-20 sm:py-24 bg-slate-50"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
          Preços
        </p>
        <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
          {pricing.title}
        </h2>
        <p className="mt-4 text-lg text-slate-600">{pricing.description}</p>
        <div className="mt-8">
          <LinkButton href="#contato" size="lg">
            {pricing.cta}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
