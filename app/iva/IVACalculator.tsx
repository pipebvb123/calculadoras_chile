'use client'

import { useState } from 'react'
import { formatCLP } from '@/lib/utils'

type Mode = 'add' | 'extract'

function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}

const QUICK_REF = [10000, 25000, 50000, 100000, 200000, 500000, 1000000, 2000000]

export function IVACalculator() {
  const [mode, setMode] = useState<Mode>('add')
  const [input, setInput] = useState('')

  const amount = parseInput(input)
  const iva     = mode === 'add' ? amount * 0.19 : amount - amount / 1.19
  const neto    = mode === 'add' ? amount : amount / 1.19
  const bruto   = mode === 'add' ? amount * 1.19 : amount

  return (
    <div className="space-y-5">
      {/* Mode toggle */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl">
        {([['add', 'Agregar IVA (neto → bruto)'], ['extract', 'Extraer IVA (bruto → neto)']] as const).map(([m, label]) => (
          <button
            key={m}
            onClick={() => { setMode(m); setInput('') }}
            className={`py-2.5 rounded-lg text-sm font-medium transition-all ${mode === m ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {mode === 'add' ? 'Precio neto (sin IVA)' : 'Precio bruto (con IVA incluido)'}
        </label>
        <input
          className="input-dark w-full px-4 py-3 rounded-xl text-xl font-bold"
          placeholder="Ej: 100.000"
          value={input}
          onChange={e => setInput(fmtInput(e.target.value))}
          inputMode="numeric"
        />
      </div>

      {amount > 0 && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Neto</div>
              <div className="text-xl font-bold text-slate-200">{formatCLP(neto)}</div>
            </div>
            <div className="border-x border-white/[0.08]">
              <div className="text-xs text-amber-400 uppercase tracking-widest mb-1">IVA 19%</div>
              <div className="text-xl font-bold text-amber-400">{formatCLP(iva)}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Bruto</div>
              <div className="text-xl font-bold text-emerald-400">{formatCLP(bruto)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Quick reference table */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 mb-3">Tabla de referencia rápida (neto → bruto)</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="table-dark w-full">
            <thead><tr><th>Precio neto</th><th className="text-right">IVA (19%)</th><th className="text-right">Precio con IVA</th></tr></thead>
            <tbody>
              {QUICK_REF.map(n => (
                <tr key={n}>
                  <td className="text-slate-300">{formatCLP(n)}</td>
                  <td className="text-right text-amber-400">{formatCLP(n * 0.19)}</td>
                  <td className="text-right text-emerald-400 font-semibold">{formatCLP(n * 1.19)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
