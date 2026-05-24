import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { VacacionesCalculator } from './VacacionesCalculator'

export const metadata: Metadata = {
  title: 'Calculadora Vacaciones Chile 2026 | Días Acumulados y Compensación',
  description: 'Calcula los días de vacaciones acumulados en Chile y su compensación en pesos. Herramienta basada en el Código del Trabajo 2026.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/vacaciones' },
}

const faqItems = [
  { q: '¿Cuántos días de vacaciones corresponden en Chile?', a: 'Los trabajadores con más de 1 año de servicio tienen derecho a un mínimo de 15 días hábiles por año. En zonas australes (Magallanes, Aysén, Palena, Chiloé, Osorno), el feriado legal es de 20 días hábiles.' },
  { q: '¿Los sábados cuentan como hábiles para las vacaciones?', a: 'No. Para el cómputo de vacaciones en Chile, los días sábados no se cuentan como hábiles. Solo se cuentan los días de lunes a viernes que no sean feriados legales.' },
  { q: '¿Se pueden compensar las vacaciones en dinero?', a: 'En general las vacaciones son irrenunciables y deben tomarse en tiempo libre. Sin embargo, el exceso sobre 10 días hábiles puede compensarse en dinero de mutuo acuerdo. Al término del contrato siempre se compensan las vacaciones pendientes.' },
  { q: '¿Tengo derecho a vacaciones proporcionales?', a: 'Sí. Si llevas menos de 1 año en la empresa y termina el contrato, tienes derecho a las vacaciones proporcionales al tiempo trabajado durante el año.' },
]

export default function VacacionesPage() {
  return (
    <CalculatorLayout
      title="Calculadora Vacaciones Chile 2026"
      description="Calcula los días de vacaciones acumulados y su equivalente en pesos según la ley laboral chilena."
      icon="🌴"
      gradient="bg-gradient-to-br from-emerald-600 to-teal-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Vacaciones' }]}
      faqItems={faqItems}
    >
      <VacacionesCalculator />
    </CalculatorLayout>
  )
}
