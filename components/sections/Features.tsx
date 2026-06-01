import { features } from "@/content/copy";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { featureIconMap } from "@/components/icons/Icons";

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Funcionalidades"
          title="Tudo que sua granja precisa em um só lugar"
          description="Módulos integrados para cada etapa da operação avícola — da postura à comercialização."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = featureIconMap[feature.icon];
            return (
              <FeatureCard
                key={feature.title}
                icon={<Icon className="h-6 w-6" />}
                title={feature.title}
                description={feature.description}
                items={feature.items}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
