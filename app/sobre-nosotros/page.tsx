import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Calculadoras Chile',
  description: 'Conoce Calculadoras Chile, tu plataforma gratuita de herramientas financieras y laborales para Chile. Misión, visión y valores.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/sobre-nosotros' },
}

const stats = [
  { label: 'Calculadoras gratuitas', value: '11+' },
  { label: 'Actualizadas en 2026', value: '100%' },
  { label: 'Sin registro requerido', value: 'Siempre' },
  { label: 'Datos en tu navegador', value: 'Solo tú' },
]

const calculadoras = [
  { href: '/sueldo-liquido', label: 'Sueldo líquido', desc: 'Calcula tu sueldo neto con todos los descuentos.' },
  { href: '/afp', label: 'AFP', desc: 'Cotización, comisiones y pensión estimada.' },
  { href: '/finiquito', label: 'Finiquito', desc: 'Indemnización por despido o renuncia.' },
  { href: '/vacaciones', label: 'Vacaciones', desc: 'Días acumulados y compensación en pesos.' },
  { href: '/uf', label: 'UF', desc: 'Conversor UF/CLP con valor en tiempo real.' },
  { href: '/credito-hipotecario', label: 'Crédito hipotecario', desc: 'Dividendo y tabla de amortización.' },
  { href: '/iva', label: 'IVA', desc: 'Agrega o extrae el 19% de IVA.' },
  { href: '/utm', label: 'UTM', desc: 'Conversor UTM/CLP para multas e impuestos.' },
  { href: '/interes-compuesto', label: 'Interés compuesto', desc: 'Proyecta el crecimiento de tu inversión.' },
  { href: '/descuentos', label: 'Descuentos', desc: 'Calcula precios con descuento en 3 modos.' },
  { href: '/conversor-dolar', label: 'Conversor dólar', desc: 'USD/CLP con tipo de cambio actualizado.' },
]

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← Volver al inicio</Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            🇨🇱 Hecho para Chile
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Sobre <span className="gradient-text-brand">Calculadoras Chile</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Somos una plataforma chilena de herramientas financieras y laborales 100% gratuitas. Nuestro objetivo es que cualquier persona pueda entender y calcular sus finanzas personales sin necesidad de ser experto.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map(s => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text-brand">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="space-y-6 mb-12">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">🎯 Nuestra misión</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Democratizar el acceso a la información financiera y laboral en Chile. Queremos que un trabajador en Arica pueda calcular su finiquito tan fácilmente como un contador en Santiago. Todas nuestras herramientas son gratuitas, sin registro y sin publicidad intrusiva.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">🔒 Privacidad primero</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Todos los cálculos ocurren directamente en tu navegador. No enviamos ningún dato a nuestros servidores. Tu sueldo, tu AFP, tu situación financiera: es información tuya y solo tú la ves.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">📋 Siempre actualizado</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mantenemos todas las calculadoras actualizadas con la legislación chilena vigente. Cuando el SII actualiza la UTM, cuando cambian las tasas de AFP o cuando se modifica el Código del Trabajo, actualizamos nuestras herramientas.
            </p>
          </div>
        </div>

        {/* All calculators */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Todas nuestras calculadoras</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {calculadoras.map(c => (
              <Link key={c.href} href={c.href} className="glass glass-hover rounded-xl p-4 flex items-start gap-3 group">
                <div>
                  <div className="text-white text-sm font-semibold group-hover:text-indigo-300 transition-colors">{c.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{c.desc}</div>
                </div>
                <div className="ml-auto text-slate-600 group-hover:text-indigo-400 transition-colors text-lg">→</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">¿Tienes alguna sugerencia?</h2>
          <p className="text-slate-400 text-sm mb-6">
            Si hay alguna calculadora que te gustaría ver o encuentras algún error en los cálculos, nos encantaría saberlo.
          </p>
          <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-sm">
            Contactar →
          </Link>
        </div>
      </div>
    </main>
  )
}
