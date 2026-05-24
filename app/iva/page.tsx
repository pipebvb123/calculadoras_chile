import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { IVACalculator } from './IVACalculator'

export const metadata: Metadata = {
  title: 'Calculadora IVA Chile 2026 | Agregar o Extraer 19%',
  description: 'Calcula el IVA del 19% en Chile. Agrega o extrae el impuesto al valor agregado de cualquier precio. Herramienta gratuita y actualizada 2026.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/iva' },
}

const faqItems = [
  { q: '¿Cuánto es el IVA en Chile?', a: 'El IVA en Chile es del 19% sobre el precio neto (sin IVA). Fue establecido por el DL 825 y es el principal impuesto al consumo del país.' },
  { q: '¿Todos los productos pagan IVA en Chile?', a: 'No. Están exentos de IVA los servicios de salud, educación, arriendos de inmuebles para habitación, exportaciones y algunos servicios financieros.' },
  { q: '¿Qué es el precio neto y bruto?', a: 'El precio neto es sin IVA. El precio bruto (o precio al público) incluye el IVA del 19%. En Chile, los precios al consumidor deben informarse con IVA incluido.' },
  { q: '¿Cómo se extrae el IVA de un precio con IVA?', a: 'Divide el precio con IVA por 1,19. Ejemplo: $119.000 ÷ 1,19 = $100.000 (precio neto). El IVA es $19.000.' },
]

export default function IVAPage() {
  return (
    <CalculatorLayout
      title="Calculadora IVA Chile 2026"
      description="Agrega el 19% de IVA a un precio neto o extráelo de un precio con IVA incluido. Cálculo instantáneo."
      icon="🧾"
      gradient="bg-gradient-to-br from-amber-500 to-orange-600"
      crumbs={[{ label: 'Calculadoras' }, { label: 'IVA' }]}
      faqItems={faqItems}
    >
      <IVACalculator />
    </CalculatorLayout>
  )
}
