import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Calculadoras Chile',
  description: 'Política de privacidad de Calculadoras Chile. Información sobre el tratamiento de datos, cookies y publicidad de Google AdSense.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 inline-block">← Volver al inicio</Link>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
        <p className="text-slate-500 text-sm mb-10">Última actualización: Mayo 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">1. Información que recopilamos</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Calculadoras Chile no recopila información personal identificable de sus usuarios. Todas las calculadoras funcionan directamente en tu navegador (client-side) sin enviar datos a nuestros servidores.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              Podemos recopilar datos de uso anónimos a través de Google Analytics, incluyendo: páginas visitadas, tiempo de permanencia, país de origen y tipo de dispositivo.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">2. Cookies</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nuestro sitio utiliza cookies para mejorar la experiencia del usuario y para mostrar publicidad relevante. Las cookies utilizadas incluyen:
            </p>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li><strong className="text-slate-300">Cookies analíticas:</strong> Usamos Google Analytics para entender cómo los usuarios interactúan con el sitio.</li>
              <li><strong className="text-slate-300">Cookies publicitarias:</strong> Google AdSense utiliza cookies para mostrar anuncios personalizados basados en tus intereses.</li>
              <li><strong className="text-slate-300">Cookies de preferencias:</strong> Almacenamos preferencias del usuario para mejorar la experiencia.</li>
            </ul>
            <p className="text-slate-400 text-sm mt-3">
              Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">3. Google AdSense y publicidad</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Este sitio usa Google AdSense para mostrar publicidad. Google utiliza cookies para mostrar anuncios basados en visitas anteriores del usuario a este y otros sitios web. Los usuarios pueden optar por no recibir publicidad personalizada visitando <a href="https://www.google.com/settings/ads" className="text-indigo-400 hover:text-indigo-300">Configuración de anuncios de Google</a>.
            </p>
            <p className="text-slate-400 text-sm mt-3">
              Nuestro ID de publicador de AdSense es: <code className="text-indigo-300 bg-white/[0.05] px-2 py-0.5 rounded text-xs">pub-8987300357303329</code>
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">4. APIs de terceros</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Algunas calculadoras (UF, Dólar) consultan la API pública de <strong className="text-slate-300">mindicador.cl</strong> para obtener valores en tiempo real. Esta consulta se realiza directamente desde tu navegador. Mindicador.cl tiene su propia política de privacidad.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">5. Seguridad</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Todas las comunicaciones con nuestro sitio se realizan mediante HTTPS (protocolo seguro). Los datos ingresados en las calculadoras no son enviados ni almacenados en ningún servidor.
            </p>
          </section>

          <section className="glass rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">6. Contacto</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de nuestra <Link href="/contacto" className="text-indigo-400 hover:text-indigo-300">página de contacto</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
