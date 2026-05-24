import type { Metadata } from 'next'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout'
import { UFCalculator } from './UFCalculator'

export const metadata: Metadata = {
  title: 'Calculadora UF Chile 2026 | Valor UF Hoy + Conversor CLP ↔ UF',
  description: 'Consulta el valor de la UF hoy en Chile y convierte entre pesos chilenos y UF al instante. Actualizado en tiempo real desde el Banco Central de Chile.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/uf' },
}

const faqItems = [
  { q: '¿Qué es la UF en Chile?', a: 'La Unidad de Fomento (UF) es una unidad de cuenta ajustada diariamente según la inflación (IPC). Fue creada en 1967 y es administrada por el Banco Central. Se usa en créditos hipotecarios, arriendos, seguros y multas tributarias.' },
  { q: '¿Cada cuánto se actualiza la UF?', a: 'Diariamente. El Banco Central publica todos los valores del mes siguiente el último día hábil del mes en curso, calculados según el IPC del mes anterior.' },
  { q: '¿Puede bajar la UF?', a: 'Sí, aunque es muy poco frecuente. Si el IPC registra deflación, la UF baja. En la práctica casi siempre sube o se mantiene estable.' },
  { q: '¿Cómo convierto pesos a UF?', a: 'Divide la cantidad en pesos por el valor del día de la UF. Ejemplo: si la UF vale $39.500 y tienes $1.000.000, equivalen a 25,32 UF.' },
  { q: '¿Conviene un crédito en UF o en pesos?', a: 'Depende de la inflación esperada. En períodos de baja inflación, la UF es conveniente. Los créditos en pesos a tasa fija eliminan la incertidumbre inflacionaria pero suelen tener tasas nominales más altas.' },
]

const prose = (
  <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
    <h2 className="text-xl font-bold text-white">¿Qué es la UF y para qué sirve?</h2>
    <p>La Unidad de Fomento es la unidad monetaria indexada más importante de Chile. Protege el valor real de contratos y deudas a lo largo del tiempo, ajustándose cada día según la inflación medida por el IPC.</p>
    <h3 className="text-base font-semibold text-white mt-4">Historia del valor UF en Chile</h3>
    <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
      <table className="table-dark w-full">
        <thead><tr><th>Año</th><th className="text-right">Valor UF (aprox.)</th><th className="text-right">Variación</th></tr></thead>
        <tbody>
          {[['1990','$3.600','—'],['2000','$16.100','+347%'],['2010','$21.400','+33%'],['2020','$28.600','+34%'],['2024','$37.800','+32%'],['2026','~$39.800','+5%']].map(([y,v,c]) => (
            <tr key={y}><td className="font-semibold text-slate-200">{y}</td><td className="text-right">{v}</td><td className="text-right text-emerald-400 text-xs">{c}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-xs text-slate-600">Fuente: Banco Central de Chile. Valores aproximados.</p>
  </div>
)

export default function UFPage() {
  return (
    <CalculatorLayout
      title="Calculadora UF 2026"
      description="Consulta el valor actual de la UF y convierte entre pesos chilenos y Unidades de Fomento en tiempo real."
      icon="📊"
      gradient="bg-gradient-to-br from-sky-600 to-blue-700"
      crumbs={[{ label: 'Calculadoras' }, { label: 'Calculadora UF' }]}
      faqItems={faqItems}
      prose={prose}
    >
      <UFCalculator />
    </CalculatorLayout>
  )
}
