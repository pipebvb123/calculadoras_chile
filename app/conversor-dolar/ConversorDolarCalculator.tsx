'use client'

import { useState, useEffect } from 'react'
import { formatCLP } from '@/lib/utils'

const FALLBACK_USD = 945

function parseInput(v: string) {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}
function fmtInput(v: string) {
  const raw = v.replace(/\D/g, '')
  return raw ? parseInt(raw).toLocaleString('es-CL') : ''
}

const REFERENCIAS = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000]

export function ConversorDolarCalculator() {
  const [usd, setUsd]         = useState('')
  const [clp, setClp]         = useState('')
  const [tasa, setTasa]       = useState<number>(FALLBACK_USD)
  const [loading, setLoading] = useState(true)
  const [fecha, setFecha]     = useState('')
  const [error, setError]     = useState(false)
  const [modo, setModo]       = useState<'usd2clp'|'clp2usd'>('usd2clp')

  useEffect(() => {
    fetch('https://mindicador.cl/api/dolar')
      .then(r => r.json())
      .then(data => {
        const val = data?.serie?.[0]?.valor
        if (val) {
          setTasa(val)
          setFecha(data?.serie?.[0]?.fecha?.slice(0,10) ?? '')
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  function convertir() {
    const v = modo === 'usd2clp' ? parseInput(usd) : parseInput(clp)
    if (!v) return
    if (modo === 'usd2clp') {
      setClp(Math.round(v * tasa).toLocaleString('es-CL'))
    } else {
      setUsd((v / tasa).toFixed(2))
    }
  }

  function swap() {
    setModo(m => m === 'usd2clp' ? 'clp2usd' : 'usd2clp')
    setUsd(''); setClp('')
  }

  return (
    <div className="space-y-5">
      {/* Live rate banner */}
      <div className={`flex items-center gap-3 p-4 rounded-xl border ${error ? 'bg-amber-500/10 border-amber-500/20' : 'bg-green-500/10 border-green-500/20'}`}>
        {loading ? (
          <div className="skeleton h-4 w-48 rounded" />
        ) : (
          <>
            <div className={`w-2 h-2 rounded-full ${error ? 'bg-amber-400' : 'bg-green-400 animate-pulse'}`} />
            <div>
              <span className={`font-semibold text-sm ${error ? 'text-amber-300' : 'text-green-300'}`}>
                USD/CLP: {formatCLP(tasa)}
              </span>
              {fecha && <span className="text-slate-500 text-xs ml-2">· {fecha}</span>}
              {error && <span className="text-amber-500 text-xs ml-2">· Valor referencial (sin conexión)</span>}
            </div>
          </>
        )}
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2">
        {([
          { id: 'usd2clp', label: '$ USD → CLP' },
          { id: 'clp2usd', label: 'CLP → $ USD' },
        ] as const).map(m => (
          <button
            key={m.id}
            onClick={() => { setModo(m.id); setUsd(''); setClp('') }}
            className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-all ${modo === m.id ? 'bg-green-600 border-green-500 text-white' : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-white/20'}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            {modo === 'usd2clp' ? 'Monto en dólares (USD)' : 'Monto en pesos (CLP)'}
          </label>
          <input
            className="input-dark w-full px-4 py-3 rounded-xl font-semibold text-lg"
            placeholder={modo === 'usd2clp' ? 'Ej: 100' : 'Ej: 94.500'}
            value={modo === 'usd2clp' ? usd : clp}
            onChange={e => modo === 'usd2clp' ? setUsd(e.target.value) : setClp(fmtInput(e.target.value))}
            inputMode="numeric"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            {modo === 'usd2clp' ? 'Resultado en pesos (CLP)' : 'Resultado en dólares (USD)'}
          </label>
          <div className="input-dark w-full px-4 py-3 rounded-xl font-semibold text-lg text-emerald-400 select-all">
            {modo === 'usd2clp' ? (clp ? `$${clp}` : '—') : (usd ? `$${usd}` : '—')}
          </div>
        </div>
      </div>

      <button
        onClick={convertir}
        className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all text-sm"
      >
        Convertir →
      </button>

      {/* Reference table */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 mb-3">Tabla de referencia USD/CLP</h3>
        <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
          <table className="table-dark w-full">
            <thead>
              <tr>
                <th>USD</th>
                <th className="text-right">CLP ({formatCLP(tasa)}/USD)</th>
              </tr>
            </thead>
            <tbody>
              {REFERENCIAS.map(u => (
                <tr
                  key={u}
                  className="cursor-pointer hover:bg-white/[0.03] transition-colors"
                  onClick={() => { setModo('usd2clp'); setUsd(String(u)); setClp(Math.round(u * tasa).toLocaleString('es-CL')) }}
                >
                  <td className="font-semibold">${u.toLocaleString('es-CL')}</td>
                  <td className="text-right text-green-400 font-semibold">{formatCLP(Math.round(u * tasa))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 mt-2 text-center">
          Tipo de cambio: Banco Central de Chile vía mindicador.cl · Clic en fila para cargar valor.
        </p>
      </div>
    </div>
  )
}
