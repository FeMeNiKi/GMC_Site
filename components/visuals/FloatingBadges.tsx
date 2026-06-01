export function FloatingBadges() {
  return (
    <>
      <div
        className="absolute right-2 sm:right-4 top-2 z-30 animate-float rounded-lg bg-white px-3 py-2 shadow-soft-lg border border-slate-100"
        aria-hidden
      >
        <p className="text-[10px] text-slate-500 mb-1">Login seguro</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-600">••••••••</span>
          <span className="h-4 w-4 rounded bg-primary-100 flex items-center justify-center text-[8px] text-primary-600">
            ✓
          </span>
        </div>
      </div>

      <div
        className="absolute -right-2 sm:right-0 bottom-16 sm:bottom-20 z-30 animate-float rounded-lg bg-white px-3 py-2.5 shadow-soft-lg border border-slate-100"
        style={{ animationDelay: "0.5s" }}
        aria-hidden
      >
        <p className="text-[10px] text-slate-500 mb-1">Uptime do sistema</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary-600 leading-none">99,9%</span>
          <span className="flex h-2 w-2 rounded-full bg-green-500" title="Online" />
        </div>
      </div>
    </>
  );
}
