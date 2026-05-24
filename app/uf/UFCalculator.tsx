'use client'

import { useState, useEffect } from 'react'
import { formatCLP } from '@/lib/utils'
import { RefreshCw } from 'lucide-react'

const REF_ITEMS = [
  [0.5, 'Copagos menores'], [1, 'Pago pequeño'], [10, 'Auto / ahorro inicial'],
  [100, 'Pie hipotecario mínimo'], [500, 'Auto nuevo / remodelación'],
  [1000, 'Depto. pequeño'], [2000, 'Casa mediana'], [5000, 'Propiedad de lujo'],
]

function fmtClp(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

export function UFCalculator() {
  const [ufVal, setUfVal] = useState<number | null>(null)
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(true)
  const [clpInput, setClpInput] = useState('')
  const [ufInput, setUfInput] = useState('')

  async function fetchUF() {
    setLoading(true)
    try {
      const res = await fetch('https://mindicador.cl/api/uf', { next: { revalidate: 3600 } } as RequestInit)
      const data = await res.json()
      if (data.serie?.[0]) {
        setUfVal(data.serie[0].valor)
        const d = new Date(data.serie[0].fecha)
        setDate(d.toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' }))
      }
    } catch { setUfVal(39500) }
    setLoading(false)
  }

  useEffect(() => { fetchUF() }, [])

  const clpResult = ufVal && clpInput ? parseFloat(clpInput.replace(/\./g, '').replace(',', '.')) / ufVal : null
  const ufResult  = ufVal && ufInput  ? parseFloat(ufInput.replace(',', '.')) * ufVal : null

  return (
    <div className="space-y-6">
      {/* Live value */}
      <div className="result-gradient rounded-2xl p-6 text-center">
        <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Valor UF hoy en Chile</p>
        {loading ? (
          <div className="skeleton h-12 w-48 mx-auto rounded-xl" />
        ) : (
          <p className="text-5xl font-bold text-white">{ufVal ? formatCLP(ufVal) : '—'}</p>
        )}
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-slate-500 text-xs">{date || 'Fuente: mindicador.cl / Banco Central de Chile'}</span>
          <button onClick={fetchUF} className="text-slate-600 hover:text-slate-400 transition-colors ml-1">
            <RefreshCw size={12} />
          </button>
        </div>
        {ufVal && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[100, 500, 1000, 2000].map(n => (
              <span key={n} className="px-3 py-1 bg-white/[0.06] rounded-full text-slate-400 text-xs">
                {n} UF = {formatCLP(n * ufVal)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Converter */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Pesos (CLP) → UF</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder="Ej: 1.000.000"
            value={clpInput}
            onChange={e => { setClpInput(fmtClp(e.target.value)); setUfInput('') }}
            inputMode="numeric"
          />
          {clpResult !== null && (
            <p className="mt-2 text-emerald-400 font-semibold text-sm">
              = {clpResult.toLocaleString('es-CL', { minimumFractionDigits: 4, maximumFractionDigits: 4 })} UF
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">UF → Pesos (CLP)</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder="Ej: 2.500"
            value={ufInput}
            onChange={e => { setUfInput(e.target.value); setClpInput('') }}
            inputMode="decimal"
          />
          {ufResult !== null && (
            <p className="mt-2 text-emerald-400 font-semibold text-sm">= {formatCLP(ufResult)}</p>
          )}
        </div>
      </div>

      {/* Reference table */}
      {ufVal && (
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="table-dark w-full">
            <thead><tr><th>UF</th><th className="text-right">Pesos (CLP)</th><th>Uso típico</th></tr></thead>
            <tbody>
              {REF_ITEMS.map(([uf, uso]) => (
                <tr key={String(uf)}>
                  <td className="font-semibold text-slate-200">{Number(uf).toLocaleString('es-CL')} UF</td>
                  <td className="text-right text-emerald-400 font-medium">{formatCLP(Number(uf) * ufVal)}</td>
                  <td className="text-slate-500 text-xs">{String(uso)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
