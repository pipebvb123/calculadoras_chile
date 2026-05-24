'use client'

import { useState } from 'react'
import { formatCLP } from '@/lib/utils'

const UF_VAL = 39000
const TOPE_MESES = 11
const TOPE_SUELDO = 90 * UF_VAL

function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}
function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}

interface Result {
  indem: number; aviso: number; vacas: number; proporcional: number; total: number
  conIndem: boolean; anosUsados: number; topeAplicado: boolean
}

export function FiniquitoCalculator() {
  const [sueldo, setSueldo]     = useState('')
  const [anos, setAnos]         = useState('')
  const [meses, setMeses]       = useState('')
  const [dias, setDias]         = useState('')
  const [vacas, setVacas]       = useState('')
  const [causal, setCausal]     = useState('art161')
  const [aviso, setAviso]       = useState(false)
  const [result, setResult]     = useState<Result | null>(null)

  function calcular() {
    const s = parseInput(sueldo)
    if (!s) return
    const totalAnos = (parseInt(anos)||0) + ((parseInt(meses)||0)/12)
    const diasProp  = parseInt(dias) || 0
    const vacasDias = parseInt(vacas) || 0
    const sueldo30  = s / 30
    const topeAplic = s > TOPE_SUELDO
    const sueldoBase = Math.min(s, TOPE_SUELDO)

    const conIndem = ['art161','fortuito','mutuo'].includes(causal)
    const anosUsados = Math.min(Math.floor(totalAnos), TOPE_MESES)
    const indem  = conIndem ? sueldoBase * anosUsados : 0
    const aviso2 = aviso ? sueldoBase : 0
    const vacasM = vacasDias * sueldo30
    const propM  = diasProp * sueldo30

    setResult({ indem, aviso: aviso2, vacas: vacasM, proporcional: propM,
      total: indem + aviso2 + vacasM + propM, conIndem, anosUsados, topeAplicado: topeAplic })
  }

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Sueldo mensual bruto (CLP)</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl font-semibold" placeholder="Ej: 900.000" value={sueldo} onChange={e => setSueldo(fmtInput(e.target.value))} inputMode="numeric" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Causal de término</label>
          <select className="select-dark input-dark w-full px-4 py-3 rounded-xl" value={causal} onChange={e => setCausal(e.target.value)}>
            <option value="art161">Necesidades empresa (Art. 161) — con indemnización</option>
            <option value="renuncia">Renuncia voluntaria — sin indemnización</option>
            <option value="mutuo">Mutuo acuerdo — con indemnización</option>
            <option value="vencimiento">Vencimiento del plazo — sin indemnización</option>
            <option value="fortuito">Caso fortuito (Art. 159 N°6) — con indemnización</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Años de servicio</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl" placeholder="Ej: 3" type="number" min="0" value={anos} onChange={e => setAnos(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Meses adicionales</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl" placeholder="Ej: 6" type="number" min="0" max="11" value={meses} onChange={e => setMeses(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Días trabajados este mes</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl" placeholder="Ej: 15" type="number" min="0" max="31" value={dias} onChange={e => setDias(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Días vacaciones pendientes</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl" placeholder="Ej: 10" type="number" min="0" value={vacas} onChange={e => setVacas(e.target.value)} />
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl">
        <input type="checkbox" id="aviso" checked={aviso} onChange={e => setAviso(e.target.checked)} className="w-4 h-4 accent-indigo-500" />
        <label htmlFor="aviso" className="text-sm text-slate-300 cursor-pointer">
          Incluir indemnización sustitutiva de aviso previo (+1 mes)
        </label>
      </div>

      <button onClick={calcular} className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all text-sm">
        Calcular Finiquito →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Total finiquito estimado</p>
            <p className="text-4xl font-bold text-white">{formatCLP(result.total)}</p>
          </div>
          {result.topeAplicado && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-4 py-2 text-amber-300 text-sm text-center">
              ⚠️ Tope aplicado: sueldo base para cálculo = {formatCLP(TOPE_SUELDO)} (~90 UF)
            </div>
          )}
          <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
            <table className="table-dark w-full">
              <thead><tr><th>Concepto</th><th className="text-right">Monto</th></tr></thead>
              <tbody>
                <tr><td>Indemnización ({result.anosUsados} años)</td><td className={`text-right font-semibold ${result.conIndem ? 'text-emerald-400' : 'text-slate-600'}`}>{result.conIndem ? formatCLP(result.indem) : 'No aplica'}</td></tr>
                <tr><td>Aviso previo</td><td className={`text-right ${result.aviso > 0 ? 'text-emerald-400 font-semibold' : 'text-slate-600'}`}>{result.aviso > 0 ? formatCLP(result.aviso) : 'No incluido'}</td></tr>
                <tr><td>Compensación vacaciones</td><td className="text-right text-emerald-400 font-semibold">{formatCLP(result.vacas)}</td></tr>
                <tr><td>Días proporcionales del mes</td><td className="text-right text-emerald-400 font-semibold">{formatCLP(result.proporcional)}</td></tr>
                <tr className="border-t border-white/[0.1]"><td className="font-bold text-white">Total finiquito</td><td className="text-right font-bold text-emerald-300 text-lg">{formatCLP(result.total)}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 text-center">* Cálculo referencial basado en el Código del Trabajo. Tope: 11 meses / ~90 UF.</p>
        </div>
      )}
    </div>
  )
}
