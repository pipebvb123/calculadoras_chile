import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { UTMCalculator } from './UTMCalculator'

export const metadata: Metadata = {
  title: 'Calculadora UTM Chile 2026 | Unidad Tributaria Mensual en Pesos',
  description: 'Convierte UTM a pesos chilenos y viceversa. Valor UTM mayo 2026 actualizado. Útil para multas, sanciones e impuestos en Chile.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/utm' },
}

const faqItems = [
  { q: '¿Qué es la UTM en Chile?', a: 'La Unidad Tributaria Mensual (UTM) es una unidad de cuenta usada en Chile para expresar impuestos, multas y sanciones. Su valor se actualiza mensualmente según el IPC. El SII publica el valor actualizado cada mes.' },
  { q: '¿Cuál es el valor de la UTM en 2026?', a: 'El valor de la UTM para mayo de 2026 es de $69.951. Este valor se reajusta mensualmente por el Índice de Precios al Consumidor (IPC). Puedes consultar el valor exacto en el sitio del SII.' },
  { q: '¿Cuál es la diferencia entre UTM y UTA?', a: 'La UTM es la Unidad Tributaria Mensual, actualizada cada mes. La UTA (Unidad Tributaria Anual) equivale a 12 UTM y se usa para expresar tramos de impuesto a la renta anual. Ambas se reajustan por IPC.' },
  { q: '¿Para qué se usa la UTM?', a: 'La UTM se usa en Chile para: multas del SII, sanciones tributarias, tramos del impuesto de segunda categoría, aranceles judiciales, multas laborales del Mintrab y otras sanciones administrativas. Permite mantener el valor real independiente de la inflación.' },
]

export default function UTMPage() {
  return (
    <CalculatorLayout
      title="Calculadora UTM Chile 2026"
      description="Convierte entre UTM y pesos chilenos (CLP). Valor UTM actualizado para 2026 según el Servicio de Impuestos Internos."
      icon="📊"
      gradient="bg-gradient-to-br from-amber-600 to-orange-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Calculadora UTM' }]}
      faqItems={faqItems}
    >
      <UTMCalculator />
    </CalculatorLayout>
  )
}
