import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { ConversorDolarCalculator } from './ConversorDolarCalculator'

export const metadata: Metadata = {
  title: 'Conversor Dólar a Pesos Chile 2026 | USD/CLP en Tiempo Real',
  description: 'Convierte dólares americanos a pesos chilenos con el tipo de cambio actualizado. Valor del dólar hoy en Chile. Conversor USD/CLP en tiempo real.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/conversor-dolar' },
}

const faqItems = [
  { q: '¿Dónde comprar dólares en Chile?', a: 'Puedes comprar dólares en bancos, casas de cambio autorizadas y algunos retailers. Las casas de cambio suelen ofrecer mejor tipo de cambio que los bancos, pero varía según el monto. También puedes comprar dólares con tarjeta de crédito, aunque cobran una comisión de conversión.' },
  { q: '¿Qué es el dólar observado en Chile?', a: 'El dólar observado es el tipo de cambio oficial publicado diariamente por el Banco Central de Chile. Es el promedio de las operaciones del día anterior en el mercado interbancario formal. Se usa para contratos, importaciones y declaraciones de impuestos.' },
  { q: '¿Qué es el dólar acuerdo?', a: 'El dólar acuerdo es una tasa fija establecida por el Banco Central, históricamente fijada en $35 por dólar. Hoy en desuso, pero aún aparece en algunos contratos antiguos. El dólar observado es el referente actual.' },
  { q: '¿Cómo afecta el tipo de cambio a la economía chilena?', a: 'Chile es exportador de cobre, que se transa en dólares. Un dólar más caro beneficia a exportadores pero encarece importaciones (gasolina, tecnología, alimentos). El Banco Central puede intervenir vendiendo dólares para estabilizar el mercado cambiario.' },
]

export default function ConversorDolarPage() {
  return (
    <CalculatorLayout
      title="Conversor Dólar a Peso Chileno 2026"
      description="Convierte entre USD y CLP con el tipo de cambio actualizado del Banco Central de Chile. Valor del dólar hoy en tiempo real."
      icon="💵"
      gradient="bg-gradient-to-br from-green-600 to-emerald-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Conversor Dólar' }]}
      faqItems={faqItems}
    >
      <ConversorDolarCalculator />
    </CalculatorLayout>
  )
}
