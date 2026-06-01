import { painCards } from "@/content/copy";
import { featureIconMap } from "@/components/icons/Icons";

export function PainCards() {
  return (
    <section className="bg-slate-50 pb-16 sm:pb-20" aria-labelledby="pain-cards-heading">
      <h2 id="pain-cards-heading" className="sr-only">
        Principais desafios da gestão avícola
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-4">
          {painCards.map((card, index) => {
            const Icon = featureIconMap[card.icon];
            return (
              <article
                key={card.title}
                className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-soft border border-white hover:shadow-soft-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
