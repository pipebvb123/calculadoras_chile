'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production, integrate with a form service (Formspree, Resend, etc.)
    setSent(true)
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← Volver al inicio</Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-3">Contacto</h1>
          <p className="text-slate-400">
            ¿Encontraste un error? ¿Quieres sugerir una calculadora? ¿Tienes alguna pregunta? Escríbenos.
          </p>
        </div>

        {sent ? (
          <div className="glass rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h2>
            <p className="text-slate-400 text-sm mb-6">Gracias por contactarnos. Responderemos a la brevedad.</p>
            <button onClick={() => setSent(false)} className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors">
              Enviar otro mensaje →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                <input
                  className="input-dark w-full px-4 py-3 rounded-xl"
                  placeholder="Tu nombre"
                  required
                  value={form.nombre}
                  onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="input-dark w-full px-4 py-3 rounded-xl"
                  placeholder="tu@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
              <select
                className="select-dark input-dark w-full px-4 py-3 rounded-xl"
                value={form.asunto}
                onChange={e => setForm(f => ({ ...f, asunto: e.target.value }))}
                required
              >
                <option value="">Selecciona un asunto</option>
                <option value="error">Encontré un error en una calculadora</option>
                <option value="sugerencia">Sugerencia de nueva calculadora</option>
                <option value="contenido">Error en un artículo del blog</option>
                <option value="publicidad">Consulta sobre publicidad</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
              <textarea
                className="input-dark w-full px-4 py-3 rounded-xl resize-none"
                rows={5}
                placeholder="Describe tu consulta o sugerencia..."
                required
                value={form.mensaje}
                onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-sm"
            >
              Enviar mensaje →
            </button>

            <p className="text-xs text-slate-600 text-center">
              Tu información no será compartida con terceros. Ver <Link href="/privacidad" className="text-indigo-500 hover:text-indigo-400">política de privacidad</Link>.
            </p>
          </form>
        )}

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <div className="glass rounded-xl p-4">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white text-sm font-semibold mb-1">Tiempo de respuesta</h3>
            <p className="text-slate-500 text-xs">Respondemos en 24-48 horas hábiles.</p>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="text-white text-sm font-semibold mb-1">Privacidad</h3>
            <p className="text-slate-500 text-xs">Tu email solo se usará para responder tu consulta.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
