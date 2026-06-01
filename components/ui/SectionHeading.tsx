type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass}`} id={id}>
      {kicker && (
        <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 text-balance">{description}</p>
      )}
    </div>
  );
}
