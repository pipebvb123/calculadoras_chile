'use client'

import { useState } from 'react'
import { formatCLP } from '@/lib/utils'

const AFP_DATA = [
  { id: 'uno',      label: 'AFP Uno',      com: 0.0049 },
  { id: 'modelo',   label: 'AFP Modelo',   com: 0.0058 },
  { id: 'habitat',  label: 'AFP Habitat',  com: 0.0069 },
  { id: 'capital',  label: 'AFP Capital',  com: 0.0072 },
  { id: 'provida',  label: 'AFP ProVida',  com: 0.0077 },
  { id: 'planvital',label: 'AFP Planvital',com: 0.0145 },
]

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}
function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

interface Result {
  cot10: number; comision: number; total: number
  fondoFinal: number; pension: number; anosRest: number
}

export function AFPCalculator() {
  const [sueldo, setSueldo] = useState('')
  const [afpId, setAfpId]   = useState('habitat')
  const [edad, setEdad]     = useState('35')
  const [sexo, setSexo]     = useState<'H'|'M'>('H')
  const [fondoAct, setFondoAct] = useState('')
  const [rentab, setRentab]  = useState('4')
  const [result, setResult]  = useState<Result | null>(null)

  function calcular() {
    const s     = parseInput(sueldo)
    if (!s) return
    const afp   = AFP_DATA.find(a => a.id === afpId)!
    const ageN  = parseInt(edad) || 35
    const edadJub = sexo === 'H' ? 65 : 60
    const anos  = Math.max(0, edadJub - ageN)
    const r     = parseFloat(rentab) / 100 / 12
    const n     = anos * 12
    const cot10 = s * 0.10
    const com   = s * afp.com
    const fAct  = parseInput(fondoAct)
    let fondo = fAct
    if (r > 0) {
      fondo = fAct * Math.pow(1+r, n) + cot10 * ((Math.pow(1+r, n)-1)/r)
    } else {
      fondo = fAct + cot10 * n
    }
    const vida = sexo === 'H' ? 20 : 25
    setResult({ cot10, comision: com, total: cot10+com, fondoFinal: fondo, pension: fondo/(vida*12), anosRest: anos })
  }

  const selAfp = AFP_DATA.find(a => a.id === afpId)!

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Sueldo imponible bruto (CLP)</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl font-semibold" placeholder="Ej: 800.000" value={sueldo} onChange={e => setSueldo(fmtInput(e.target.value))} inputMode="numeric" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">AFP actual</label>
          <select className="select-dark input-dark w-full px-4 py-3 rounded-xl" value={afpId} onChange={e => setAfpId(e.target.value)}>
            {AFP_DATA.map(a => <option key={a.id} value={a.id}>{a.label} — {(a.com*100).toFixed(2)}%</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Edad actual</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl" placeholder="Ej: 35" type="number" min="18" max="65" value={edad} onChange={e => setEdad(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Sexo</label>
          <div className="grid grid-cols-2 gap-2">
            {(['H','M'] as const).map(s => (
              <button key={s} onClick={() => setSexo(s)} className={`py-3 rounded-xl border text-sm font-medium transition-all ${sexo===s ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}>
                {s === 'H' ? 'Hombre (65)' : 'Mujer (60)'}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Fondo actual (opcional)</label>
          <input className="input-dark w-full px-4 py-3 rounded-xl" placeholder="Ej: 5.000.000" value={fondoAct} onChange={e => setFondoAct(fmtInput(e.target.value))} inputMode="numeric" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Rentabilidad anual estimada</label>
          <select className="select-dark input-dark w-full px-4 py-3 rounded-xl" value={rentab} onChange={e => setRentab(e.target.value)}>
            <option value="3">Conservador — 3%</option>
            <option value="4">Moderado — 4%</option>
            <option value="5">Optimista — 5%</option>
            <option value="6">Muy optimista — 6%</option>
          </select>
        </div>
      </div>

      <button onClick={calcular} className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-glow-sm text-sm">
        Calcular AFP →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-4 animate-slide-up">
          <div className="text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Descuento mensual total</p>
            <p className="text-4xl font-bold text-white">{formatCLP(result.total)}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Cotización 10%', val: formatCLP(result.cot10), color: 'text-emerald-400' },
              { label: `Comisión ${(selAfp.com*100).toFixed(2)}%`, val: formatCLP(result.comision), color: 'text-red-400' },
              { label: 'Fondo al jubilar', val: formatCLP(result.fondoFinal), color: 'text-indigo-300' },
              { label: 'Pensión estimada', val: formatCLP(result.pension) + '/mes', color: 'text-violet-300' },
            ].map(item => (
              <div key={item.label} className="bg-white/[0.05] rounded-xl p-3 text-center">
                <div className={`text-sm font-bold ${item.color}`}>{item.val}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 text-center">* Proyección a {result.anosRest} años con {rentab}% rentabilidad anual. Referencial.</p>

          {/* AFP comparison */}
          <h3 className="text-sm font-semibold text-slate-400 mt-2">Comparación AFP (total descontado al año)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {AFP_DATA.map(a => {
              const s = parseInput(sueldo)
              const anual = (s * 0.10 + s * a.com) * 12
              return (
                <div key={a.id} className={`rounded-xl p-3 border text-center ${a.id === afpId ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/[0.06] bg-white/[0.02]'}`}>
                  <div className="text-white text-xs font-semibold">{a.label}</div>
                  <div className="text-[10px] text-slate-500">{(a.com*100).toFixed(2)}%</div>
                  <div className="text-emerald-400 text-sm font-bold mt-1">{formatCLP(anual)}/año</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
