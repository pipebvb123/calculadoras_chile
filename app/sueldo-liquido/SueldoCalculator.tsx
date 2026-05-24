'use client'

import { useState } from 'react'
import { formatCLP, formatPct } from '@/lib/utils'

const UTM = 69000
const TOPE = 3300000
const AFP_RATES: Record<string, number> = {
  uno: 10.49, modelo: 10.58, habitat: 10.69,
  capital: 10.72, provida: 10.77, planvital: 11.45,
}
const TRAMOS: [number, number, number][] = [
  [13.5, 0, 0], [30, 0.04, 0.54], [50, 0.08, 1.74],
  [70, 0.135, 4.49], [90, 0.23, 11.14], [120, 0.304, 17.80],
  [150, 0.35, 23.28], [Infinity, 0.40, 30.78],
]

function calcIUSC(bruto: number) {
  for (const [lim, tasa, reb] of TRAMOS) {
    if (bruto <= lim * UTM) return Math.max(0, bruto * tasa - reb * UTM)
  }
  return 0
}

function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}

interface Result {
  bruto: number; afp: number; salud: number; imp: number; liquido: number; afpRate: number
}

export function SueldoCalculator() {
  const [sueldo, setSueldo] = useState('')
  const [afpKey, setAfpKey] = useState('habitat')
  const [salud, setSalud] = useState<'fonasa' | 'isapre'>('fonasa')
  const [result, setResult] = useState<Result | null>(null)

  function calcular() {
    const bruto = parseInput(sueldo)
    if (!bruto) return
    const afpRate = AFP_RATES[afpKey]
    const imp = Math.min(bruto, TOPE)
    const afpM = imp * afpRate / 100
    const saludM = imp * 0.07
    const impM = calcIUSC(bruto)
    setResult({ bruto, afp: afpM, salud: saludM, imp: impM, liquido: bruto - afpM - saludM - impM, afpRate })
  }

  const pct = result ? (result.liquido / result.bruto * 100) : 0

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Sueldo bruto mensual (CLP)</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl text-base font-semibold"
            placeholder="Ej: 1.500.000"
            value={sueldo}
            onChange={e => setSueldo(fmtInput(e.target.value))}
            onKeyDown={e => e.key === 'Enter' && calcular()}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">AFP</label>
          <select className="select-dark input-dark w-full px-4 py-3 rounded-xl" value={afpKey} onChange={e => setAfpKey(e.target.value)}>
            <option value="uno">AFP Uno — 10,49%</option>
            <option value="modelo">AFP Modelo — 10,58%</option>
            <option value="habitat">AFP Habitat — 10,69%</option>
            <option value="capital">AFP Capital — 10,72%</option>
            <option value="provida">AFP ProVida — 10,77%</option>
            <option value="planvital">AFP Planvital — 11,45%</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Previsión de salud</label>
        <div className="grid grid-cols-2 gap-2">
          {(['fonasa', 'isapre'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSalud(s)}
              className={`py-3 rounded-xl border text-sm font-medium transition-all ${salud === s ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
            >
              {s === 'fonasa' ? 'Fonasa (7%)' : 'Isapre (7% base)'}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={calcular}
        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-glow-sm hover:shadow-glow-md text-sm"
      >
        Calcular Sueldo Líquido →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="text-center mb-2">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Sueldo líquido estimado</p>
            <p className="text-4xl font-bold text-white">{formatCLP(result.liquido)}</p>
            <p className="text-indigo-300 text-sm mt-1">{pct.toFixed(1)}% de tu sueldo bruto</p>
          </div>

          {/* Progress */}
          <div className="h-2 bg-white/[0.08] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
            {[
              { label: 'Sueldo bruto', val: formatCLP(result.bruto), color: 'text-slate-200' },
              { label: `AFP (${result.afpRate}%)`, val: `−${formatCLP(result.afp)}`, color: 'text-red-400' },
              { label: 'Salud (7%)', val: `−${formatCLP(result.salud)}`, color: 'text-orange-400' },
              { label: 'Impuesto', val: `−${formatCLP(result.imp)}`, color: 'text-yellow-400' },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.05] rounded-xl p-3 text-center">
                <div className={`text-base font-bold ${item.color}`}>{item.val}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="table-dark w-full">
              <thead><tr><th>Concepto</th><th className="text-right">Monto</th><th className="text-right">% del bruto</th></tr></thead>
              <tbody>
                <tr><td>Sueldo bruto</td><td className="text-right font-semibold text-slate-200">{formatCLP(result.bruto)}</td><td className="text-right">100%</td></tr>
                <tr><td>− AFP ({result.afpRate}%)</td><td className="text-right text-red-400">−{formatCLP(result.afp)}</td><td className="text-right">{formatPct(result.afp/result.bruto*100)}</td></tr>
                <tr><td>− Salud (7%)</td><td className="text-right text-orange-400">−{formatCLP(result.salud)}</td><td className="text-right">{formatPct(result.salud/result.bruto*100)}</td></tr>
                <tr><td>− Impuesto único</td><td className="text-right text-yellow-400">−{formatCLP(result.imp)}</td><td className="text-right">{formatPct(result.imp/result.bruto*100)}</td></tr>
                <tr className="border-t border-white/[0.1]"><td className="font-bold text-emerald-300">= Sueldo líquido</td><td className="text-right font-bold text-emerald-300">{formatCLP(result.liquido)}</td><td className="text-right font-bold text-emerald-300">{pct.toFixed(1)}%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 text-center">* Cálculo informativo. Tope imponible ~$3.300.000. UTM 2026: $69.000.</p>
        </div>
      )}
    </div>
  )
}
