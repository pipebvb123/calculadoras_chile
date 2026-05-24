import type { Metadata } from 'next'
import { SueldoCalculator } from './SueldoCalculator'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'

export const metadata: Metadata = {
  title: 'Calculadora Sueldo Líquido Chile 2026 | AFP, Salud e Impuestos',
  description:
    'Calcula tu sueldo líquido en Chile gratis. Descuenta AFP, salud Fonasa o Isapre e impuesto de segunda categoría. Actualizado 2026 con tasas reales.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/sueldo-liquido' },
}

const faqItems = [
  {
    q: '¿Cuál es la diferencia entre sueldo bruto y sueldo líquido?',
    a: 'El sueldo bruto es el monto acordado en el contrato, antes de cualquier descuento. El sueldo líquido es lo que efectivamente recibes en tu cuenta, después de descontar AFP, salud e impuesto a la renta. La diferencia suele ser entre el 15% y el 25% del bruto.',
  },
  {
    q: '¿Cuándo pago impuesto a la renta en Chile?',
    a: 'Solo cuando tu sueldo supera los 13,5 UTM mensuales (~$931.500 en 2026). Bajo ese monto estás exento. La tasa máxima es del 40% para sueldos sobre $10.350.000.',
  },
  {
    q: '¿Qué es el tope imponible AFP?',
    a: 'Es el sueldo máximo sobre el cual se calculan las cotizaciones de AFP y salud (~$3.300.000 en 2026). Si ganas más, los descuentos se calculan solo sobre el tope. El impuesto a la renta se calcula sobre el sueldo total sin tope.',
  },
  {
    q: '¿La AFP más barata siempre conviene?',
    a: 'No necesariamente. Aunque menos comisión significa más dinero hoy, también debes considerar la rentabilidad histórica de los fondos de cada AFP, pues eso impacta tu pensión futura.',
  },
  {
    q: '¿Cuál es el sueldo mínimo en Chile 2026?',
    a: 'El salario mínimo en Chile para 2026 es de $530.000 pesos brutos mensuales (valor referencial, sujeto a actualización oficial).',
  },
]

const prose = (
  <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
    <h2 className="text-xl font-bold text-white">¿Cómo se calcula el sueldo líquido en Chile?</h2>
    <p>El sueldo líquido es el resultado de restar tres descuentos principales al sueldo bruto:</p>
    <div className="grid sm:grid-cols-3 gap-3 my-4">
      {[
        { n: '1', title: 'AFP', desc: 'Entre 10,49% y 11,44% según tu AFP. Se aplica sobre el sueldo imponible con tope de ~$3.300.000.' },
        { n: '2', title: 'Salud', desc: '7% del sueldo imponible. Va a Fonasa (público) o Isapre (privado). Mismo porcentaje base.' },
        { n: '3', title: 'Impuesto Único', desc: 'Progresivo por tramos de UTM. Exento bajo 13,5 UTM (~$931.500). Sube hasta 40% en sueldos altos.' },
      ].map((item) => (
        <div key={item.n} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
          <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center mb-2">{item.n}</div>
          <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
          <p className="text-xs text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
    <h3 className="text-lg font-bold text-white mt-4">Tabla de tasas AFP 2026</h3>
    <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
      <table className="table-dark w-full">
        <thead><tr><th>AFP</th><th>Comisión</th><th>Total (10% + comisión)</th></tr></thead>
        <tbody>
          {[
            ['AFP Uno', '0,49%', '10,49%'],
            ['AFP Modelo', '0,58%', '10,58%'],
            ['AFP Habitat', '0,69%', '10,69%'],
            ['AFP Capital', '0,72%', '10,72%'],
            ['AFP ProVida', '0,77%', '10,77%'],
            ['AFP Planvital', '1,45%', '11,45%'],
          ].map(([afp, com, tot]) => (
            <tr key={afp}><td className="text-slate-200 font-medium">{afp}</td><td>{com}</td><td className="text-emerald-400 font-semibold">{tot}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-xs text-slate-600 mt-2">* Tasas vigentes 2026. Fuente: Superintendencia de Pensiones.</p>
  </div>
)

export default function SueldoPage() {
  return (
    <CalculatorLayout
      title="Calculadora Sueldo Líquido 2026"
      description="Descubre cuánto recibirás en tu cuenta cada mes. Calcula AFP, salud Fonasa o Isapre e Impuesto Único de Segunda Categoría al instante."
      icon="💼"
      gradient="bg-gradient-to-br from-blue-600 to-indigo-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Sueldo Líquido' }]}
      faqItems={faqItems}
      prose={prose}
    >
      <SueldoCalculator />
    </CalculatorLayout>
  )
}
