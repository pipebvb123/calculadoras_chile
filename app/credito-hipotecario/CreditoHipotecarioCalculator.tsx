'use client'

import { useState } from 'react'
import { formatCLP, formatUF } from '@/lib/utils'

const UF_VAL = 39000

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}
function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

interface AmortRow {
  mes: number
  cuota: number
  interes: number
  amort: number
  saldo: number
}

interface Result {
  cuotaMensual: number
  totalPagado: number
  totalIntereses: number
  montoUF: number
  tabla: AmortRow[]
  mostrarTabla: boolean
}

export function CreditoHipotecarioCalculator() {
  const [modo, setModo]         = useState<'clp'|'uf'>('uf')
  const [monto, setMonto]       = useState('')
  const [plazo, setPlazo]       = useState('20')
  const [tasa, setTasa]         = useState('4.5')
  const [pie, setPie]           = useState('')
  const [result, setResult]     = useState<Result | null>(null)
  const [showTabla, setShowTabla] = useState(false)

  function calcular() {
    const montoRaw = parseInput(monto)
    if (!montoRaw) return
    const pieRaw   = parseInput(pie)
    const plazoN   = parseInt(plazo) || 20
    const tasaA    = parseFloat(tasa) || 4.5

    // Convert to UF
    const montoUF  = modo === 'clp' ? montoRaw / UF_VAL : montoRaw
    const pieUF    = modo === 'clp' ? pieRaw / UF_VAL : pieRaw
    const prestUF  = Math.max(0, montoUF - pieUF)

    const r = tasaA / 100 / 12
    const n = plazoN * 12
    const cuota = r > 0
      ? prestUF * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : prestUF / n

    const totalPagado   = cuota * n
    const totalIntereses = totalPagado - prestUF

    // Amortization table
    const tabla: AmortRow[] = []
    let saldo = prestUF
    for (let i = 1; i <= n; i++) {
      const interes = saldo * r
      const amort   = cuota - interes
      saldo = Math.max(0, saldo - amort)
      tabla.push({ mes: i, cuota, interes, amort, saldo })
    }

    setResult({
      cuotaMensual: cuota * UF_VAL,
      totalPagado: totalPagado * UF_VAL,
      totalIntereses: totalIntereses * UF_VAL,
      montoUF: prestUF,
      tabla,
      mostrarTabla: false,
    })
  }

  const plazoOpts = [10, 15, 20, 25, 30]

  return (
    <div className="space-y-5">
      {/* Modo */}
      <div className="flex gap-2">
        {(['uf', 'clp'] as const).map(m => (
          <button
            key={m}
            onClick={() => setModo(m)}
            className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-all ${modo === m ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
          >
            {m === 'uf' ? 'Ingresar en UF' : 'Ingresar en CLP'}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Valor del inmueble ({modo === 'uf' ? 'UF' : 'CLP'})
          </label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder={modo === 'uf' ? 'Ej: 3.500' : 'Ej: 136.500.000'}
            value={monto}
            onChange={e => setMonto(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Pie / Entrada ({modo === 'uf' ? 'UF' : 'CLP'})
          </label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl"
            placeholder={modo === 'uf' ? 'Ej: 700' : 'Ej: 27.300.000'}
            value={pie}
            onChange={e => setPie(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Plazo (años)</label>
          <div className="flex gap-2 flex-wrap">
            {plazoOpts.map(p => (
              <button
                key={p}
                onClick={() => setPlazo(String(p))}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all min-w-[52px] ${plazo === String(p) ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
              >
                {p}a
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Tasa anual (%)</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl"
            placeholder="Ej: 4.5"
            type="number"
            step="0.1"
            min="0"
            max="20"
            value={tasa}
            onChange={e => setTasa(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={calcular}
        className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-glow-sm text-sm"
      >
        Calcular Dividendo →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Dividendo mensual estimado</p>
            <p className="text-4xl font-bold text-white">{formatCLP(result.cuotaMensual)}</p>
            <p className="text-slate-500 text-sm mt-1">≈ {formatUF(result.cuotaMensual / UF_VAL)} UF/mes · monto financiado {formatUF(result.montoUF)} UF</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Dividendo/mes', val: formatCLP(result.cuotaMensual), color: 'text-blue-300' },
              { label: 'Total pagado', val: formatCLP(result.totalPagado), color: 'text-slate-300' },
              { label: 'Total intereses', val: formatCLP(result.totalIntereses), color: 'text-red-400' },
            ].map(item => (
              <div key={item.label} className="bg-white/[0.05] rounded-xl p-3 text-center">
                <div className={`text-sm font-bold ${item.color}`}>{item.val}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Interest ratio bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Capital ({((result.montoUF * UF_VAL / result.totalPagado) * 100).toFixed(0)}%)</span>
              <span>Intereses ({((result.totalIntereses / result.totalPagado) * 100).toFixed(0)}%)</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden flex">
              <div
                className="h-full bg-blue-500 rounded-l-full"
                style={{ width: `${(result.montoUF * UF_VAL / result.totalPagado) * 100}%` }}
              />
              <div className="h-full bg-red-500/60 flex-1 rounded-r-full" />
            </div>
          </div>

          {/* Amortization table toggle */}
          <button
            onClick={() => setShowTabla(!showTabla)}
            className="w-full py-2 text-sm text-blue-400 hover:text-blue-300 border border-blue-500/20 rounded-xl transition-all"
          >
            {showTabla ? 'Ocultar tabla de amortización ▲' : 'Ver tabla de amortización (primeros 24 meses) ▼'}
          </button>

          {showTabla && (
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="table-dark w-full text-xs">
                <thead>
                  <tr>
                    <th>Mes</th>
                    <th className="text-right">Cuota (UF)</th>
                    <th className="text-right">Interés (UF)</th>
                    <th className="text-right">Amort. (UF)</th>
                    <th className="text-right">Saldo (UF)</th>
                  </tr>
                </thead>
                <tbody>
                  {result.tabla.slice(0, 24).map(row => (
                    <tr key={row.mes}>
                      <td>{row.mes}</td>
                      <td className="text-right">{row.cuota.toFixed(4)}</td>
                      <td className="text-right text-red-400">{row.interes.toFixed(4)}</td>
                      <td className="text-right text-emerald-400">{row.amort.toFixed(4)}</td>
                      <td className="text-right">{row.saldo.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="text-xs text-slate-600 text-center">* UF referencial: {formatCLP(UF_VAL)}. Dividendo no incluye seguros. Cálculo referencial.</p>
        </div>
      )}
    </div>
  )
}
