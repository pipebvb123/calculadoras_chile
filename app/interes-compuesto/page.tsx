import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { InteresCompuestoCalculator } from './InteresCompuestoCalculator'

export const metadata: Metadata = {
  title: 'Calculadora Interés Compuesto Chile 2026 | Proyección de Inversión',
  description: 'Calcula el crecimiento de tu inversión con interés compuesto. Proyecta tu capital con aportes mensuales y tasa de retorno anual. Herramienta gratuita 2026.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/interes-compuesto' },
}

const faqItems = [
  { q: '¿Qué es el interés compuesto?', a: 'El interés compuesto es el proceso donde los intereses generados se suman al capital, y en el siguiente período generan nuevos intereses. Albert Einstein lo llamó "la octava maravilla del mundo". Es la base del crecimiento de inversiones a largo plazo.' },
  { q: '¿Cuál es la diferencia entre interés simple y compuesto?', a: 'En el interés simple, los intereses se calculan siempre sobre el capital inicial. En el interés compuesto, se calculan sobre el capital más los intereses acumulados. A largo plazo, el compuesto genera rendimientos exponencialmente mayores.' },
  { q: '¿Cuál es una tasa de retorno razonable en Chile?', a: 'Los fondos de renta variable (APV, fondos mutuos A) han rendido históricamente entre 6-9% real anual a 10+ años. Los fondos más conservadores rinden 3-5%. La renta fija (depósitos a plazo) actualmente rinde 5-7% nominal.' },
  { q: '¿Para qué sirve la regla del 72?', a: 'La regla del 72 permite estimar en cuántos años se duplica una inversión: divides 72 por la tasa anual. Por ejemplo, con un 8% anual, tu inversión se duplica en 72/8 = 9 años. Es una aproximación rápida muy útil.' },
]

export default function InteresCompuestoPage() {
  return (
    <CalculatorLayout
      title="Calculadora Interés Compuesto 2026"
      description="Proyecta el crecimiento de tu inversión con interés compuesto, aportes mensuales y visualización gráfica del crecimiento año a año."
      icon="📈"
      gradient="bg-gradient-to-br from-violet-600 to-purple-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Interés Compuesto' }]}
      faqItems={faqItems}
    >
      <InteresCompuestoCalculator />
    </CalculatorLayout>
  )
}
