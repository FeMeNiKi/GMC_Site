import { showcase } from "@/content/copy";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardScreen } from "@/components/visuals/DashboardScreen";

const metrics = [
  { label: "Produção diária", value: "12.480", change: "+4,2%" },
  { label: "Taxa de eclosão", value: "87,3%", change: "+1,1%" },
  { label: "Vacinas em dia", value: "100%", change: "0 alertas" },
  { label: "Margem mensal", value: "R$ 284k", change: "+18%" },
];

export function ProductShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Produto"
          title={showcase.title}
          description={showcase.description}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl bg-slate-800 p-3 shadow-soft-lg">
              <DashboardScreen />
            </div>
            <div
              className="absolute -top-4 right-4 rounded-xl bg-white px-4 py-3 shadow-soft-lg border border-slate-100 animate-float"
              aria-hidden
            >
              <p className="text-xs text-slate-500">Alertas hoje</p>
              <p className="text-2xl font-bold text-primary-600">0</p>
            </div>
            <div
              className="absolute -bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-soft-lg border border-slate-100"
              aria-hidden
            >
              <p className="text-xs text-slate-500">Lotes ativos</p>
              <p className="text-2xl font-bold text-slate-900">24</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl bg-white p-4 shadow-soft border border-slate-100 hover:border-primary-100 transition-colors"
                >
                  <p className="text-xs text-slate-500 mb-1">{metric.label}</p>
                  <p className="text-xl font-bold text-slate-900">{metric.value}</p>
                  <p className="text-xs text-green-600 font-medium mt-1">{metric.change}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white shadow-soft border border-slate-100 overflow-hidden">
              <table className="w-full text-sm" aria-label="Tabela de lotes em produção">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-4 py-3 font-semibold text-slate-700">Lote</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">Fase</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["A-12", "Postura", "Ativo"],
                    ["B-07", "Incubação", "Monitorando"],
                    ["C-03", "Pintinhos", "Ativo"],
                  ].map(([lote, fase, status]) => (
                    <tr key={lote} className="border-t border-slate-100">
                      <td className="px-4 py-3 text-slate-800 font-medium">{lote}</td>
                      <td className="px-4 py-3 text-slate-600">{fase}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
