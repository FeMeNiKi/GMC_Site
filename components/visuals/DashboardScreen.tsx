type DashboardScreenProps = {
  compact?: boolean;
};

export function DashboardScreen({ compact = false }: DashboardScreenProps) {
  return (
    <div
      className={`bg-slate-50 overflow-hidden ${compact ? "rounded-lg" : "rounded-t-lg"}`}
      role="img"
      aria-label="Mockup do dashboard GMC com gráficos e indicadores"
    >
      <div className={`bg-slate-800 flex items-center gap-1.5 ${compact ? "px-2 py-1" : "px-3 py-2"}`}>
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className={`ml-2 text-slate-400 ${compact ? "text-[8px]" : "text-[10px]"}`}>
          dashboard.gmc.app
        </span>
      </div>
      <div className={`flex ${compact ? "p-2 gap-2" : "p-3 gap-3"}`}>
        <aside className={`bg-white rounded shadow-sm space-y-1 ${compact ? "w-12 p-1" : "w-16 p-2"}`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`rounded ${i === 1 ? "bg-primary-600" : "bg-slate-200"} ${compact ? "h-2" : "h-3"}`}
            />
          ))}
        </aside>
        <div className="flex-1 space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            {["Ovos/dia", "Lotes", "Margem"].map((label) => (
              <div key={label} className="bg-white rounded p-1.5 shadow-sm">
                <p className={`text-slate-400 ${compact ? "text-[6px]" : "text-[8px]"}`}>{label}</p>
                <p className={`font-bold text-primary-600 ${compact ? "text-[10px]" : "text-xs"}`}>
                  {label === "Ovos/dia" ? "12.4k" : label === "Lotes" ? "8" : "+18%"}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded p-2 shadow-sm">
            <div className="flex items-end gap-0.5 h-10">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary-500/80 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="bg-white rounded p-1.5 shadow-sm">
            <div className={`space-y-1 ${compact ? "text-[6px]" : "text-[8px]"}`}>
              {["Lote A-12", "Lote B-07", "Lote C-03"].map((row) => (
                <div key={row} className="flex justify-between text-slate-600">
                  <span>{row}</span>
                  <span className="text-green-600 font-medium">OK</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
