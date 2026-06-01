import { DashboardScreen } from "./DashboardScreen";
import { FloatingBadges } from "./FloatingBadges";

export function DeviceMockup() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
      <FloatingBadges />

      <div className="relative z-10 rounded-xl bg-slate-800 p-2 shadow-soft-lg transform hover:scale-[1.01] transition-transform duration-300">
        <div className="rounded-lg overflow-hidden bg-slate-900">
          <DashboardScreen />
        </div>
      </div>

      <div
        className="absolute -bottom-4 -left-4 sm:-left-8 z-[15] w-[45%] max-w-[200px] rounded-lg bg-slate-800 p-1.5 shadow-soft-lg transform rotate-[-4deg] hover:rotate-0 transition-transform duration-300"
        aria-hidden
      >
        <div className="rounded-md overflow-hidden bg-slate-900">
          <DashboardScreen compact />
        </div>
      </div>
    </div>
  );
}
