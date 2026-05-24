import Link from 'next/link'
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react'

const pills = [
  { icon: <Zap size={11} />, label: '100% Gratis' },
  { icon: <Shield size={11} />, label: 'Sin registro' },
  { icon: <TrendingUp size={11} />, label: 'Actualizado 2026' },
]

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-600/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-56 h-56 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-xs font-medium mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Plataforma financiera N°1 de Chile · 2026
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 animate-slide-up leading-[1.1]">
          <span className="text-white">Calculadoras</span>{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text-brand">financieras para Chile</span>
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up">
          Calcula tu sueldo líquido, UF, AFP, hipotecario, finiquito y mucho más.{' '}
          <span className="text-slate-300">Rápido, gratis y preciso.</span>
        </p>

        {/* Pills */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {pills.map((p) => (
            <span key={p.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-400 text-xs">
              <span className="text-indigo-400">{p.icon}</span> {p.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/sueldo-liquido"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-glow-sm hover:shadow-glow-md hover:-translate-y-0.5 text-sm"
          >
            Calcular sueldo líquido <ArrowRight size={15} />
          </Link>
          <Link
            href="/#calculadoras"
            className="flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 font-medium rounded-xl transition-all text-sm"
          >
            Ver todas las calculadoras
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-14 pt-10 border-t border-white/[0.06]">
          {[
            { val: '11+', label: 'Calculadoras' },
            { val: '0', label: 'Registro' },
            { val: '100%', label: 'Gratis' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text-brand">{s.val}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
