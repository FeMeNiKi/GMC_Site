import { benefits } from "@/content/copy";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Benefícios"
          title="Resultados que fazem diferença na sua granja"
          description="O GMC foi pensado para transformar dados operacionais em decisões mais rápidas e lucrativas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-6 lg:p-8 hover:bg-white hover:shadow-soft transition-all duration-300"
            >
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold mb-4"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
