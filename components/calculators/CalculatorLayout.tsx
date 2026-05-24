import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AdSlot } from '@/components/ui/AdSlot'
import { FAQ } from '@/components/ui/FAQ'

interface FAQItem { q: string; a: string }
interface Crumb { label: string; href?: string }

interface Props {
  title: string
  description: string
  icon: string
  gradient: string
  crumbs: Crumb[]
  faqItems?: FAQItem[]
  children: React.ReactNode
  prose?: React.ReactNode
}

export function CalculatorLayout({
  title, description, icon, gradient, crumbs, faqItems, children, prose,
}: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={crumbs} />

      {/* Page hero */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl ${gradient} flex items-center justify-center text-2xl shadow-glow-sm`}>
            {icon}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
          </div>
        </div>
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">{description}</p>
      </div>

      <AdSlot id="calc-top" />

      {/* Calculator card */}
      <div className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.08] mb-6">
        {children}
      </div>

      <AdSlot id="calc-mid" />

      {/* Prose content */}
      {prose && (
        <div className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.06] mb-6 prose-dark">
          {prose}
        </div>
      )}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Preguntas frecuentes</h2>
          <FAQ items={faqItems} />
        </div>
      )}

      <AdSlot id="calc-bottom" />
    </div>
  )
}
