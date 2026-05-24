'use client'

import { useState } from 'react'
import { formatCLP } from '@/lib/utils'

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}
function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

type Modo = 'precio-final' | 'calcular-pct' | 'precio-original'

const MODOS: { id: Modo; label: string; desc: string }[] = [
  { id: 'precio-final',    label: 'Precio final',    desc: 'Tengo el precio y el % de descuento' },
  { id: 'calcular-pct',   label: '% Descuento',     desc: 'Tengo precio original y precio final' },
  { id: 'precio-original', label: 'Precio original', desc: 'Tengo el precio descontado y el %' },
]

interface Result {
  precioOriginal: number
  precioFinal: number
  ahorro: number
  pct: number
}

export function DescuentosCalculator() {
  const [modo, setModo]     = useState<Modo>('precio-final')
  const [val1, setVal1]     = useState('')
  const [val2, setVal2]     = useState('')
  const [result, setResult] = useState<Result | null>(null)

  function reset() { setVal1(''); setVal2(''); setResult(null) }

  function calcular() {
    const v1 = parseInput(val1)
    const v2 = parseInput(val2)
    if (!v1 || !v2) return

    let r: Result
    if (modo === 'precio-final') {
      // v1 = precio original, v2 = % descuento
      const pf = v1 * (1 - v2 / 100)
      r = { precioOriginal: v1, precioFinal: pf, ahorro: v1 - pf, pct: v2 }
    } else if (modo === 'calcular-pct') {
      // v1 = precio original, v2 = precio final
      const pct = ((v1 - v2) / v1) * 100
      r = { precioOriginal: v1, precioFinal: v2, ahorro: v1 - v2, pct }
    } else {
      // v1 = precio descontado, v2 = % descuento
      const po = v1 / (1 - v2 / 100)
      r = { precioOriginal: po, precioFinal: v1, ahorro: po - v1, pct: v2 }
    }
    setResult(r)
  }

  const cfg = {
    'precio-final':    { l1: 'Precio original (CLP)', l2: 'Descuento (%)', p1: 'Ej: 50.000', p2: 'Ej: 20', num2: true },
    'calcular-pct':   { l1: 'Precio original (CLP)', l2: 'Precio final (CLP)', p1: 'Ej: 50.000', p2: 'Ej: 40.000', num2: false },
    'precio-original': { l1: 'Precio con descuento (CLP)', l2: 'Descuento (%)', p1: 'Ej: 40.000', p2: 'Ej: 20', num2: true },
  }[modo]

  return (
    <div className="space-y-5">
      {/* Mode selector */}
      <div className="grid grid-cols-3 gap-2">
        {MODOS.map(m => (
          <button
            key={m.id}
            onClick={() => { setModo(m.id); reset() }}
            className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all text-center ${modo === m.id ? 'bg-pink-600 border-pink-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
          >
            <div className="font-semibold">{m.label}</div>
            <div className={`text-[10px] mt-0.5 ${modo === m.id ? 'text-pink-200' : 'text-slate-600'}`}>{m.desc}</div>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{cfg.l1}</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder={cfg.p1}
            value={val1}
            onChange={e => setVal1(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{cfg.l2}</label>
          {cfg.num2 ? (
            <input
              className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
              placeholder={cfg.p2}
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={val2}
              onChange={e => setVal2(e.target.value)}
            />
          ) : (
            <input
              className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
              placeholder={cfg.p2}
              value={val2}
              onChange={e => setVal2(fmtInput(e.target.value))}
              inputMode="numeric"
            />
          )}
        </div>
      </div>

      <button
        onClick={calcular}
        className="w-full py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all text-sm"
      >
        Calcular →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-slate-400 text-xs mb-1">Precio original</p>
              <p className="text-2xl font-bold text-slate-300 line-through decoration-red-400/60">{formatCLP(result.precioOriginal)}</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-xs mb-1">Precio final</p>
              <p className="text-3xl font-bold text-white">{formatCLP(result.precioFinal)}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
              <p className="text-emerald-400 font-bold text-xl">{formatCLP(result.ahorro)}</p>
              <p className="text-emerald-600 text-xs mt-0.5">Ahorro</p>
            </div>
            <div className="flex-1 bg-pink-500/10 border border-pink-500/20 rounded-xl p-3 text-center">
              <p className="text-pink-400 font-bold text-xl">{result.pct.toFixed(1)}%</p>
              <p className="text-pink-600 text-xs mt-0.5">Descuento</p>
            </div>
          </div>

          {/* Savings bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Pagas ({(100 - result.pct).toFixed(1)}%)</span>
              <span>Ahorras ({result.pct.toFixed(1)}%)</span>
            </div>
            <div className="h-3 rounded-full bg-white/[0.05] overflow-hidden flex">
              <div
                className="h-full bg-pink-500 rounded-l-full transition-all"
                style={{ width: `${100 - result.pct}%` }}
              />
              <div className="h-full bg-emerald-500/60 flex-1 rounded-r-full" />
            </div>
          </div>
        </div>
      )}

      {/* Quick discount table */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 mb-3">Descuentos rápidos</h3>
        <div className="grid grid-cols-4 gap-2">
          {[10, 15, 20, 25, 30, 40, 50, 70].map(pct => (
            <button
              key={pct}
              onClick={() => { setModo('precio-final'); setVal2(String(pct)); setResult(null) }}
              className="py-2 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-pink-400 font-semibold hover:border-pink-500/30 hover:bg-pink-500/5 transition-all"
            >
              -{pct}%
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
