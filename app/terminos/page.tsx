import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Uso | Calculadoras Chile',
  description: 'Términos y condiciones de uso del sitio Calculadoras Chile. Información sobre el uso del servicio, limitación de responsabilidad y propiedad intelectual.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/terminos' },
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← Volver al inicio</Link>

        <h1 className="text-3xl font-bold text-white mb-2">Términos de Uso</h1>
        <p className="text-slate-500 text-sm mb-10">Última actualización: Mayo 2026</p>

        <div className="space-y-6">
          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">1. Aceptación de términos</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Al acceder y utilizar Calculadoras Chile (calculadoras-chile.vercel.app), aceptas quedar vinculado por estos términos de uso. Si no estás de acuerdo con alguno de estos términos, por favor no uses el sitio.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">2. Naturaleza del servicio</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Calculadoras Chile proporciona herramientas de cálculo financiero, laboral y tributario con fines <strong className="text-slate-300">informativos y referenciales</strong>. Los resultados obtenidos son estimaciones y no constituyen asesoría profesional financiera, legal ni tributaria.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              Para decisiones importantes (créditos hipotecarios, liquidaciones de sueldo, finiquitos), siempre consulta con un profesional calificado o con las instituciones competentes (SII, DT, AFP, banco).
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">3. Limitación de responsabilidad</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Calculadoras Chile no se responsabiliza por:
            </p>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm list-disc ml-4">
              <li>Errores o imprecisiones en los resultados de las calculadoras.</li>
              <li>Cambios en la legislación chilena que no hayan sido actualizados oportunamente.</li>
              <li>Decisiones financieras, laborales o tributarias tomadas basándose en los resultados del sitio.</li>
              <li>Interrupciones del servicio o pérdida de datos.</li>
            </ul>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">4. Exactitud de la información</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nos esforzamos por mantener la información actualizada conforme a la legislación chilena vigente. Los valores de referencia (UTM, UF, tasas AFP, tramos IUSC) se actualizan periódicamente, pero pueden no reflejar los últimos cambios normativos.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              Siempre verifica los valores actuales en fuentes oficiales: Banco Central de Chile, SII, Dirección del Trabajo y Superintendencia de Pensiones.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">5. Propiedad intelectual</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              El contenido de este sitio (código, diseño, textos, artículos del blog) es propiedad de Calculadoras Chile y está protegido por las leyes de propiedad intelectual de Chile. Queda prohibida su reproducción total o parcial sin autorización expresa.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">6. Publicidad</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Este sitio muestra publicidad a través de Google AdSense para financiar el servicio gratuito. La publicidad mostrada es gestionada por Google y puede basarse en tus intereses. Consulta la <Link href="/privacidad" className="text-indigo-400 hover:text-indigo-300">Política de Privacidad</Link> para más detalles.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">7. Modificaciones</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor inmediatamente tras su publicación. El uso continuado del sitio implica la aceptación de los términos modificados.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">8. Ley aplicable</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estos términos se rigen por la legislación de la República de Chile. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Santiago de Chile.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
