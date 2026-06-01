import { type ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  items?: readonly string[];
};

export function FeatureCard({ icon, title, description, items }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl bg-white p-6 lg:p-8 shadow-soft border border-slate-100 hover:shadow-soft-lg hover:border-primary-100 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      {items && items.length > 0 && (
        <ul className="space-y-2" role="list">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
