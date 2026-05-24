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

interface YearData {
  year: number
  capital: number
  intereses: number
  total: number
}

interface Result {
  totalFinal: number
  capitalAportado: number
  interesesGanados: number
  porcentajeGanado: number
  tabla: YearData[]
  regla72: number
}

export function InteresCompuestoCalculator() {
  const [capitalInicial, setCapitalInicial] = useState('')
  const [aporteMensual, setAporteMensual]   = useState('')
  const [tasa, setTasa]   = useState('7')
  const [anos, setAnos]   = useState('10')
  const [result, setResult] = useState<Result | null>(null)

  function calcular() {
    const ci   = parseInput(capitalInicial)
    const am   = parseInput(aporteMensual)
    const r    = parseFloat(tasa) / 100
    const n    = parseInt(anos) || 10
    const rm   = r / 12

    const tabla: YearData[] = []
    let totalAportado = ci

    for (let y = 1; y <= n; y++) {
      const meses = y * 12
      // Capital inicial compuesto
      const ciComp = ci * Math.pow(1 + rm, meses)
      // Aportes mensuales compuestos
      const amComp = rm > 0
        ? am * ((Math.pow(1 + rm, meses) - 1) / rm)
        : am * meses
      const total = ciComp + amComp
      const capitalAportadoHastaY = ci + am * meses
      tabla.push({
        year: y,
        capital: capitalAportadoHastaY,
        intereses: total - capitalAportadoHastaY,
        total,
      })
    }

    totalAportado = ci + am * n * 12
    const totalFinal = tabla[n - 1]?.total ?? 0
    const interesesGanados = totalFinal - totalAportado
    const regla72 = r > 0 ? 72 / (r * 100) : 0

    setResult({
      totalFinal,
      capitalAportado: totalAportado,
      interesesGanados,
      porcentajeGanado: totalAportado > 0 ? (interesesGanados / totalAportado) * 100 : 0,
      tabla,
      regla72,
    })
  }

  const maxVal = result ? Math.max(...result.tabla.map(r => r.total)) : 1

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Capital inicial (CLP)</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder="Ej: 1.000.000"
            value={capitalInicial}
            onChange={e => setCapitalInicial(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Aporte mensual (CLP)</label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold"
            placeholder="Ej: 100.000"
            value={aporteMensual}
            onChange={e => setAporteMensual(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Tasa anual de retorno (%)</label>
          <select
            className="select-dark input-dark w-full px-4 py-3 rounded-xl"
            value={tasa}
            onChange={e => setTasa(e.target.value)}
          >
            <option value="3">Conservador — 3%</option>
            <option value="5">Moderado — 5%</option>
            <option value="7">Crecimiento — 7%</option>
            <option value="9">Agresivo — 9%</option>
            <option value="12">Muy agresivo — 12%</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Período (años)</label>
          <div className="flex gap-2 flex-wrap">
            {[5, 10, 15, 20, 30].map(a => (
              <button
                key={a}
                onClick={() => setAnos(String(a))}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all min-w-[44px] ${anos === String(a) ? 'bg-violet-600 border-violet-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
              >
                {a}a
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={calcular}
        className="w-full py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all shadow-glow-sm text-sm"
      >
        Proyectar inversión →
      </button>

      {result && (
        <div className="result-gradient rounded-2xl p-6 space-y-5 animate-slide-up">
          <div className="text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Capital proyectado en {anos} años</p>
            <p className="text-4xl font-bold text-white">{formatCLP(result.totalFinal)}</p>
            <p className="text-emerald-400 text-sm mt-1">+{result.porcentajeGanado.toFixed(1)}% sobre lo aportado</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Capital aportado', val: formatCLP(result.capitalAportado), color: 'text-slate-300' },
              { label: 'Intereses ganados', val: formatCLP(result.interesesGanados), color: 'text-emerald-400' },
              { label: 'Regla del 72', val: `${result.regla72.toFixed(1)} años`, color: 'text-violet-300' },
            ].map(item => (
              <div key={item.label} className="bg-white/[0.05] rounded-xl p-3 text-center">
                <div className={`text-sm font-bold ${item.color}`}>{item.val}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Evolución anual</h3>
            <div className="space-y-1.5">
              {result.tabla.map(row => (
                <div key={row.year} className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs w-8">Año {row.year}</span>
                  <div className="flex-1 h-5 bg-white/[0.04] rounded-md overflow-hidden flex">
                    <div
                      className="h-full bg-slate-600 transition-all"
                      style={{ width: `${(row.capital / maxVal) * 100}%` }}
                    />
                    <div
                      className="h-full bg-violet-500/70 transition-all"
                      style={{ width: `${(row.intereses / maxVal) * 100}%` }}
                    />
                  </div>
                  <span className="text-slate-300 text-xs w-28 text-right">{formatCLP(row.total)}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-slate-600" /> Capital aportado</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-violet-500/70" /> Intereses</div>
            </div>
          </div>

          <p className="text-xs text-slate-600 text-center">* Proyección referencial. No considera inflación ni impuestos. La rentabilidad pasada no garantiza resultados futuros.</p>
        </div>
      )}
    </div>
  )
}
