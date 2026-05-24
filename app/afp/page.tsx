import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { AFPCalculator } from './AFPCalculator'

export const metadata: Metadata = {
  title: 'Calculadora AFP Chile 2026 | Cotización y Pensión Estimada',
  description: 'Calcula tu cotización AFP mensual, fondo acumulado y pensión estimada en Chile. Tasas 2026 actualizadas de todas las AFP.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/afp' },
}

const faqItems = [
  { q: '¿Cuánto descuenta la AFP de mi sueldo?', a: 'La AFP descuenta el 10% de tu sueldo imponible para tu cuenta individual más la comisión de la AFP (entre 0,49% y 1,45% según la AFP elegida). El Seguro de Invalidez y Sobrevivencia (SIS) lo paga el empleador.' },
  { q: '¿Qué AFP tiene la comisión más baja en 2026?', a: 'AFP Uno tiene la comisión más baja con 0,49%, seguida de AFP Modelo (0,58%) y AFP Habitat (0,69%).' },
  { q: '¿Puedo cambiarme de AFP en Chile?', a: 'Sí. Puedes cambiarte de AFP una vez al año de forma gratuita. El traspaso tarda aproximadamente un mes. Antes de cambiarte, compara comisiones y rentabilidad histórica.' },
  { q: '¿Qué es la Pensión Garantizada Universal (PGU)?', a: 'La PGU es un beneficio estatal de $214.296 mensuales (2026) para mayores de 65 años que cumplan requisitos de residencia y no estén en el 10% de mayores ingresos. Se suma a la pensión AFP.' },
  { q: '¿Qué tipos de fondos tiene la AFP?', a: 'Las AFP administran 5 fondos (A al E) con distintos niveles de riesgo. El Fondo A es el más riesgoso (hasta 80% en renta variable) y el Fondo E el más conservador (hasta 5%). Jóvenes suelen preferir A o B; personas cercanas a jubilar prefieren D o E.' },
]

export default function AFPPage() {
  return (
    <CalculatorLayout
      title="Calculadora AFP Chile 2026"
      description="Calcula tu cotización AFP mensual, proyecta tu fondo acumulado y estima tu pensión al momento de jubilar."
      icon="🏦"
      gradient="bg-gradient-to-br from-indigo-600 to-violet-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Calculadora AFP' }]}
      faqItems={faqItems}
    >
      <AFPCalculator />
    </CalculatorLayout>
  )
}
