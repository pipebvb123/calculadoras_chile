import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'que-es-la-uf-chile',
    title: '¿Qué es la UF y cómo funciona en Chile?',
    excerpt: 'Todo lo que necesitas saber sobre la Unidad de Fomento: cómo se calcula, para qué se usa y cómo afecta tu crédito hipotecario.',
    tag: 'UF / Inflación',
    readTime: '6 min',
    icon: '📊',
  },
  {
    slug: 'como-calcular-sueldo-liquido',
    title: 'Cómo calcular el sueldo líquido en Chile 2026',
    excerpt: 'Guía completa con tablas de AFP, Fonasa/Isapre e impuesto de segunda categoría. Ejemplos prácticos paso a paso.',
    tag: 'Laboral',
    readTime: '8 min',
    icon: '💼',
  },
  {
    slug: 'guia-credito-hipotecario-chile',
    title: 'Guía completa de créditos hipotecarios en Chile',
    excerpt: 'Todo sobre tasas, CAE, pie mínimo, tabla de amortización y cómo comparar ofertas bancarias para comprar tu casa.',
    tag: 'Hipotecario',
    readTime: '10 min',
    icon: '🏠',
  },
]

export function FeaturedBlog() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Guías financieras</h2>
          <p className="text-slate-400">Aprende a tomar mejores decisiones con tus finanzas personales.</p>
        </div>
        <Link href="/blog" className="hidden sm:flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          Ver todo <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{post.icon}</span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">{post.readTime} lectura</span>
            </div>
            <div>
              <span className="text-[11px] font-medium text-indigo-400 uppercase tracking-widest mb-2 block">{post.tag}</span>
              <h3 className="text-white font-semibold text-[15px] leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="flex items-center text-indigo-400 text-xs font-medium gap-1 mt-auto">
              Leer artículo <ArrowRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
