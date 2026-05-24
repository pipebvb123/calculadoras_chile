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

interface Result {
  diasHabiles: number
  diasTotales: number
  montoDiario: number
  montoTotal: number
  esProporcional: boolean
}

export function VacacionesCalculator() {
  const [sueldo, setSueldo]   = useState('')
  const [meses, setMeses]     = useState('')
  const [zona, setZona]       = useState<'normal'|'austral'>('normal')
  const [tipo, setTipo]       = useState<'completo'|'proporcional'>('completo')
  const [result, setResult]   = useState<Result | null>(null)

  function calcular() {
    const s = parseInput(sueldo)
    if (!s) return

    const mesesN = parseInt(meses) || 0
    const diasBase = zona === 'austral' ? 20 : 15

    let diasHabiles: number
    let esProporcional = false

    if (tipo === 'proporcional') {
      diasHabiles = Math.floor((diasBase / 12) * mesesN)
      esProporcional = true
    } else {
      diasHabiles = diasBase
    }

    // Convert hábiles to calendar days (approx: multiply by 1.4 since sábados no cuentan)
    const diasTotales = Math.round(diasHabiles * (7 / 5))
    const montoDiario = s / 30
    const montoTotal  = montoDiario * diasTotales

    setResult({ diasHabiles, diasTotales, montoDiario, montoTotal, esProporcional })
  }

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Sueldo mensual bruto (CLP)</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder="Ej: 700.000"
            value={sueldo}
            onChange={e => setSueldo(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Zona geográfica</label>
          <div className="grid grid-cols-2 gap-2">
            {(['normal', 'austral'] as const).map(z => (
              <button
                key={z}
                onClick={() => setZona(z)}
                className={`py-3 rounded-xl border text-sm font-medium transition-all ${zona === z ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
              >
                {z === 'normal' ? 'Zona normal (15 días)' : 'Zona austral (20 días)'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de cálculo</label>
          <select
            className="select-dark input-dark w-full px-4 py-3 rounded-xl"
            value={tipo}
            onChange={e => setTipo(e.target.value as 'completo'|'proporcional')}
          >
            <option value="completo">Vacaciones completas (más de 1 año)</option>
            <option value="proporcional">Vacaciones proporcionales (menos de 1 año)</option>
          </select>
        </div>

        {tipo === 'proporcional' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Meses trabajados</label>
            <input
              className="input-dark w-full px-4 py-3 rounded-xl"
              placeholder="Ej: 8"
              type="number"
              min="1"
              max="11"
              value={meses}
              onChange={e => setMeses(e.target.value)}
            />
          </div>
        )}
      </div>

      <button
        onClick={calcular}
        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all text-sm"
      >
        Calcular Vacaciones →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
              {result.esProporcional ? 'Compensación proporcional estimada' : 'Compensación vacaciones estimada'}
            </p>
            <p className="text-4xl font-bold text-white">{formatCLP(result.montoTotal)}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Días hábiles', val: `${result.diasHabiles} días`, color: 'text-emerald-400' },
              { label: 'Días calendario', val: `~${result.diasTotales} días`, color: 'text-teal-400' },
              { label: 'Valor día', val: formatCLP(result.montoDiario), color: 'text-indigo-300' },
              { label: 'Total compensación', val: formatCLP(result.montoTotal), color: 'text-violet-300' },
            ].map(item => (
              <div key={item.label} className="bg-white/[0.05] rounded-xl p-3 text-center">
                <div className={`text-sm font-bold ${item.color}`}>{item.val}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="table-dark w-full">
              <thead>
                <tr><th>Concepto</th><th className="text-right">Detalle</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zona</td>
                  <td className="text-right text-slate-300">{zona === 'austral' ? 'Austral (20 días hábiles)' : 'Normal (15 días hábiles)'}</td>
                </tr>
                <tr>
                  <td>Días hábiles {result.esProporcional ? 'proporcionales' : 'anuales'}</td>
                  <td className="text-right text-emerald-400 font-semibold">{result.diasHabiles} días</td>
                </tr>
                <tr>
                  <td>Valor diario (sueldo/30)</td>
                  <td className="text-right text-slate-300">{formatCLP(result.montoDiario)}</td>
                </tr>
                <tr className="border-t border-white/[0.1]">
                  <td className="font-bold text-white">Total a compensar</td>
                  <td className="text-right font-bold text-emerald-300 text-lg">{formatCLP(result.montoTotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-600 text-center">
            * Los sábados no son días hábiles. Cálculo referencial según Art. 67–72 del Código del Trabajo.
          </p>
        </div>
      )}
    </div>
  )
}
