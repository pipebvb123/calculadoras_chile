import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { FiniquitoCalculator } from './FiniquitoCalculator'

export const metadata: Metadata = {
  title: 'Calculadora Finiquito Chile 2026 | Indemnización por Despido',
  description: 'Calcula el monto de tu finiquito en Chile según la causal de término. Indemnización por años de servicio, vacaciones pendientes y avisos. Actualizado 2026.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/finiquito' },
}

const faqItems = [
  { q: '¿Qué incluye el finiquito en Chile?', a: 'El finiquito puede incluir: indemnización por años de servicio (si aplica), compensación de vacaciones proporcionales, sueldo proporcional del mes en curso, indemnización sustitutiva del aviso previo (si no se dio aviso con 30 días) y bonos pendientes.' },
  { q: '¿Cuándo se paga indemnización por años de servicio?', a: 'Solo cuando el despido es por necesidades de la empresa (Art. 161), caso fortuito o mutuo acuerdo. Si el trabajador renuncia voluntariamente, no corresponde indemnización por años de servicio.' },
  { q: '¿Cuánto es el tope de indemnización?', a: 'El tope legal es de 11 meses de sueldo, con un sueldo máximo de ~90 UF (~$3.510.000). Si ganas más, la indemnización se calcula sobre ese tope.' },
  { q: '¿Puedo negociar más que el mínimo legal en el finiquito?', a: 'Sí. El finiquito es un acuerdo entre trabajador y empleador. La ley establece los mínimos que el empleador debe pagar, pero es posible negociar montos superiores, especialmente en situaciones de Art. 161.' },
]

export default function FiniquitoPage() {
  return (
    <CalculatorLayout
      title="Calculadora Finiquito Chile 2026"
      description="Calcula el monto de tu finiquito según la causal de despido, años de servicio y sueldo. Basado en el Código del Trabajo chileno."
      icon="📋"
      gradient="bg-gradient-to-br from-rose-600 to-pink-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Finiquito' }]}
      faqItems={faqItems}
    >
      <FiniquitoCalculator />
    </CalculatorLayout>
  )
}
