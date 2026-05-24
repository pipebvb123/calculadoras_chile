import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { calculatorCategories } from '@/lib/calculators/registry'

const tagStyles: Record<string, string> = {
  popular: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-300',
  live: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-300',
  nuevo: 'bg-violet-500/15 border-violet-500/25 text-violet-300',
}

export function CalculatorGrid() {
  return (
    <section id="calculadoras" className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Todas las calculadoras
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Herramientas precisas y actualizadas para tomar mejores decisiones financieras.
        </p>
      </div>

      <div className="space-y-10">
        {calculatorCategories.map((cat) => (
          <div key={cat.slug}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{cat.label}</span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {cat.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group glass glass-hover rounded-2xl p-5 flex flex-col gap-3"
                >
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {item.tag && (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagStyles[item.tag] ?? ''}`}>
                        {item.tag === 'live' ? '● live' : item.tag}
                      </span>
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1 group-hover:text-indigo-300 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-auto flex items-center text-indigo-400 text-xs font-medium gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Abrir <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
