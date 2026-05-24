import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { CreditoHipotecarioCalculator } from './CreditoHipotecarioCalculator'

export const metadata: Metadata = {
  title: 'Calculadora Crédito Hipotecario Chile 2026 | Dividendo y Tabla de Amortización',
  description: 'Calcula tu dividendo mensual, total de intereses y tabla de amortización para un crédito hipotecario en Chile. Simula en UF o pesos 2026.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/credito-hipotecario' },
}

const faqItems = [
  { q: '¿Cómo se calcula el dividendo hipotecario en Chile?', a: 'El dividendo se calcula con la fórmula de cuota fija: D = P × [r(1+r)^n] / [(1+r)^n - 1], donde P es el monto del préstamo, r la tasa mensual y n el número de cuotas. En Chile los créditos hipotecarios generalmente se expresan en UF.' },
  { q: '¿Qué porcentaje de mi sueldo puede ser el dividendo?', a: 'Los bancos en Chile generalmente financian hasta el 80% del valor del inmueble y el dividendo no debería superar el 25-30% del ingreso mensual líquido del solicitante. Algunas instituciones aceptan hasta el 35% con buenos antecedentes.' },
  { q: '¿Cuánto es el pie mínimo para un crédito hipotecario en Chile?', a: 'El pie mínimo generalmente es el 20% del valor del inmueble para primera vivienda. Para segunda vivienda puede ser del 25-30%. Algunos programas del gobierno permiten pies menores con subsidio habitacional.' },
  { q: '¿Qué incluye el dividendo hipotecario?', a: 'El dividendo mensual incluye: amortización del capital, intereses del período, seguro de desgravamen (obligatorio) y seguro de incendio y sismo. La suma de estos conceptos es lo que pagas mensualmente al banco.' },
  { q: '¿Conviene prepagar el crédito hipotecario?', a: 'En general sí, especialmente al inicio del crédito cuando los intereses son mayores. Al prepagar capital, reduces los intereses futuros. La ley en Chile permite prepagar sin comisión en créditos con tasa variable. En tasa fija puede haber una pequeña comisión.' },
]

export default function CreditoHipotecarioPage() {
  return (
    <CalculatorLayout
      title="Calculadora Crédito Hipotecario Chile 2026"
      description="Simula tu dividendo mensual, total de intereses pagados y tabla de amortización para un crédito hipotecario en Chile."
      icon="🏠"
      gradient="bg-gradient-to-br from-blue-600 to-cyan-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Crédito Hipotecario' }]}
      faqItems={faqItems}
    >
      <CreditoHipotecarioCalculator />
    </CalculatorLayout>
  )
}
