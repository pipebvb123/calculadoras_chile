import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { DescuentosCalculator } from './DescuentosCalculator'

export const metadata: Metadata = {
  title: 'Calculadora Descuentos Chile 2026 | % Descuento y Precio Final',
  description: 'Calcula el precio final con descuento, el porcentaje de descuento entre dos precios o el precio original antes del descuento. Herramienta rápida y gratuita.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/descuentos' },
}

const faqItems = [
  { q: '¿Cómo calcular el precio con descuento?', a: 'Precio final = Precio original × (1 - descuento/100). Por ejemplo, un producto de $10.000 con 20% de descuento vale $10.000 × 0,80 = $8.000. El ahorro es $2.000.' },
  { q: '¿Cómo calcular el porcentaje de descuento?', a: 'Porcentaje de descuento = ((Precio original - Precio final) / Precio original) × 100. Si un producto costaba $15.000 y ahora cuesta $12.000, el descuento es ((15.000 - 12.000) / 15.000) × 100 = 20%.' },
  { q: '¿Cómo calcular el precio original si solo tengo el precio con descuento?', a: 'Precio original = Precio con descuento / (1 - descuento/100). Si pagas $8.000 con un 20% de descuento, el precio original era $8.000 / 0,80 = $10.000.' },
  { q: '¿Se puede combinar descuento con IVA en Chile?', a: 'Sí. En Chile el IVA es 19%. Si el precio tiene IVA y quieres calcular el descuento, primero aplica el descuento al precio bruto, luego agrega el IVA. O usa nuestra calculadora de IVA para separar ambos conceptos.' },
]

export default function DescuentosPage() {
  return (
    <CalculatorLayout
      title="Calculadora de Descuentos 2026"
      description="Tres modos: calcula precio final con descuento, el % de descuento entre dos precios, o el precio original dado el precio descontado."
      icon="🏷️"
      gradient="bg-gradient-to-br from-pink-600 to-rose-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Calculadora Descuentos' }]}
      faqItems={faqItems}
    >
      <DescuentosCalculator />
    </CalculatorLayout>
  )
}
