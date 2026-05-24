import Link from 'next/link'

const footerLinks = {
  Calculadoras: [
    { label: 'Sueldo Líquido', href: '/sueldo-liquido' },
    { label: 'Calculadora UF', href: '/uf' },
    { label: 'Crédito Hipotecario', href: '/credito-hipotecario' },
    { label: 'Calculadora AFP', href: '/afp' },
    { label: 'Finiquito', href: '/finiquito' },
    { label: 'Vacaciones', href: '/vacaciones' },
  ],
  Herramientas: [
    { label: 'Calculadora IVA', href: '/iva' },
    { label: 'UTM a CLP', href: '/utm' },
    { label: 'Conversor Dólar', href: '/conversor-dolar' },
    { label: 'Interés Compuesto', href: '/interes-compuesto' },
    { label: 'Calculadora Descuentos', href: '/descuentos' },
  ],
  Recursos: [
    { label: 'Blog Financiero', href: '/blog' },
    { label: '¿Qué es la UF?', href: '/blog/que-es-la-uf-chile' },
    { label: 'Guía Hipotecario', href: '/blog/guia-credito-hipotecario-chile' },
    { label: 'Cómo calcular sueldo', href: '/blog/como-calcular-sueldo-liquido' },
  ],
  Empresa: [
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ],
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#080808]/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-white text-[15px]">
                Calculadoras<span className="text-indigo-400">Chile</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              La plataforma de calculadoras financieras más completa de Chile. Gratis, precisa y actualizada 2026.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium">
                🇨🇱 Chile
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-medium">
                ✓ Gratis
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © 2026 CalculadorasChile.cl — Todos los derechos reservados.
          </p>
          <p className="text-slate-700 text-xs text-center sm:text-right">
            Cálculos de carácter informativo. Consulta a un experto para decisiones financieras.
          </p>
        </div>
      </div>
    </footer>
  )
}
