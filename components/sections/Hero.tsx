import { hero } from "@/content/copy";
import { LinkButton } from "@/components/ui/Button";
import { DeviceMockup } from "@/components/visuals/DeviceMockup";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-50 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary-600 uppercase mb-4">
              {hero.kicker}
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-tight text-balance"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl text-balance">
              {hero.subheadline}
            </p>
            <div className="mt-8">
              <LinkButton href="#contato" size="lg">
                {hero.ctaPrimary}
              </LinkButton>
            </div>
          </div>

          <div className="animate-fade-in lg:pl-4" style={{ animationDelay: "0.15s" }}>
            <DeviceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
