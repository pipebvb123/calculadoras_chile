'use client'

import { useState } from 'react'
import { formatCLP } from '@/lib/utils'

const UTM_VAL = 69951

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}
function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

const REFERENCIAS = [
  { label: '1 UTM', utm: 1 },
  { label: '5 UTM', utm: 5 },
  { label: '10 UTM', utm: 10 },
  { label: '20 UTM', utm: 20 },
  { label: '50 UTM', utm: 50 },
  { label: '100 UTM', utm: 100 },
  { label: '1 UTA (12 UTM)', utm: 12 },
  { label: '10 UTA (120 UTM)', utm: 120 },
]

export function UTMCalculator() {
  const [modo, setModo]   = useState<'utm2clp'|'clp2utm'>('utm2clp')
  const [valor, setValor] = useState('')
  const [result, setResult] = useState<number | null>(null)

  function calcular() {
    const v = parseInput(valor)
    if (!v) return
    if (modo === 'utm2clp') {
      setResult(v * UTM_VAL)
    } else {
      setResult(v / UTM_VAL)
    }
  }

  return (
    <div className="space-y-5">
      {/* UTM value banner */}
      <div className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <div>
          <span className="text-amber-300 font-semibold text-sm">UTM Mayo 2026: {formatCLP(UTM_VAL)}</span>
          <span className="text-slate-500 text-xs ml-2">Actualizado por el SII</span>
        </div>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2">
        {([
          { id: 'utm2clp', label: 'UTM → CLP' },
          { id: 'clp2utm', label: 'CLP → UTM' },
        ] as const).map(m => (
          <button
            key={m.id}
            onClick={() => { setModo(m.id); setResult(null); setValor('') }}
            className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-all ${modo === m.id ? 'bg-amber-600 border-amber-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {modo === 'utm2clp' ? 'Cantidad en UTM' : 'Monto en pesos (CLP)'}
        </label>
        <input
          className="input-dark w-full px-4 py-3 rounded-xl font-semibold text-lg"
          placeholder={modo === 'utm2clp' ? 'Ej: 10' : 'Ej: 699.510'}
          value={valor}
          onChange={e => setValor(fmtInput(e.target.value))}
          inputMode="numeric"
        />
      </div>

      <button
        onClick={calcular}
        className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all text-sm"
      >
        Convertir →
      </button>

      {result !== null && (
        <div className="result-gradient rounded-2xl p-6 text-center animate-slide-up space-y-2">
          <p className="text-slate-400 text-xs uppercase tracking-widest">Resultado</p>
          <p className="text-4xl font-bold text-white">
            {modo === 'utm2clp' ? formatCLP(result) : `${result.toFixed(4)} UTM`}
          </p>
          <p className="text-slate-500 text-sm">
            {modo === 'utm2clp'
              ? `${parseInput(valor)} UTM × ${formatCLP(UTM_VAL)}/UTM`
              : `${formatCLP(parseInput(valor))} ÷ ${formatCLP(UTM_VAL)}/UTM`}
          </p>
        </div>
      )}

      {/* Reference table */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 mb-3">Tabla de referencia UTM 2026</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="table-dark w-full">
            <thead>
              <tr><th>Cantidad</th><th className="text-right">En pesos (CLP)</th></tr>
            </thead>
            <tbody>
              {REFERENCIAS.map(r => (
                <tr
                  key={r.label}
                  className="cursor-pointer hover:bg-white/[0.03] transition-colors"
                  onClick={() => { setModo('utm2clp'); setValor(String(r.utm)); setResult(r.utm * UTM_VAL) }}
                >
                  <td>{r.label}</td>
                  <td className="text-right font-semibold text-amber-400">{formatCLP(r.utm * UTM_VAL)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 mt-2 text-center">Clic en una fila para cargar el valor en el conversor.</p>
      </div>
    </div>
  )
}
