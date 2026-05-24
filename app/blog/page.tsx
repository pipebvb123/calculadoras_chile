import type { Metadata } from 'next'
import Link from 'next/link'
import { AdSlot } from '@/components/ui/AdSlot'

export const metadata: Metadata = {
  title: 'Blog Calculadoras Chile | Guías Financieras y Laborales 2026',
  description: 'Artículos y guías sobre finanzas personales, legislación laboral y impuestos en Chile. Información actualizada y práctica para tomar mejores decisiones financieras.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app/blog' },
}

const posts = [
  {
    slug: 'que-es-la-uf-chile',
    title: '¿Qué es la UF en Chile y cómo se calcula?',
    excerpt: 'La Unidad de Fomento (UF) es la unidad de cuenta más usada en Chile. Aprende cómo funciona, para qué se usa y por qué varía cada día.',
    date: '2026-05-15',
    readTime: '5 min',
    category: 'Finanzas',
    categoryColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    slug: 'guia-credito-hipotecario-chile',
    title: 'Guía completa del crédito hipotecario en Chile 2026',
    excerpt: 'Todo lo que debes saber antes de pedir un crédito hipotecario: pie mínimo, tasas de interés, seguros, prepago y cómo elegir el mejor banco.',
    date: '2026-05-10',
    readTime: '8 min',
    category: 'Vivienda',
    categoryColor: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    slug: 'como-calcular-sueldo-liquido',
    title: 'Cómo calcular el sueldo líquido en Chile paso a paso',
    excerpt: 'Descuento AFP, salud, IUSC... ¿cuánto te descuentan realmente del sueldo? Explicamos cada ítem de tu liquidación de sueldo con ejemplos.',
    date: '2026-05-05',
    readTime: '6 min',
    category: 'Laboral',
    categoryColor: 'text-violet-400 bg-violet-400/10',
  },
  {
    slug: 'reforma-previsional-chile-2026',
    title: 'Reforma previsional Chile 2026: lo que debes saber',
    excerpt: 'La reforma previsional cambia cómo cotizamos para la jubilación. Aumenta la cotización, crea nuevos mecanismos y modifica la PGU. Resumen claro.',
    date: '2026-04-28',
    readTime: '7 min',
    category: 'Previsión',
    categoryColor: 'text-indigo-400 bg-indigo-400/10',
  },
  {
    slug: 'calcula-finiquito-chile',
    title: 'Cómo calcular tu finiquito en Chile: guía 2026',
    excerpt: 'Si te despidieron o renunciaste, tu finiquito puede incluir indemnización, vacaciones y más. Explicamos qué te corresponde según la causal.',
    date: '2026-04-20',
    readTime: '5 min',
    category: 'Laboral',
    categoryColor: 'text-violet-400 bg-violet-400/10',
  },
  {
    slug: 'interes-compuesto-jubilacion',
    title: 'El poder del interés compuesto para tu jubilación',
    excerpt: 'Pequeños aportes a los 30 años generan mucho más que grandes aportes a los 50. Esto es lo que el interés compuesto puede hacer por ti.',
    date: '2026-04-12',
    readTime: '6 min',
    category: 'Inversión',
    categoryColor: 'text-amber-400 bg-amber-400/10',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            ✍️ Blog
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Guías financieras y <span className="gradient-text-brand">laborales</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Artículos prácticos sobre finanzas personales, legislación laboral e impuestos en Chile.
          </p>
        </div>

        <AdSlot id="3456789012" className="mb-10" />

        {/* Posts grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass glass-hover rounded-2xl p-6 block group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${post.categoryColor}`}>
                  {post.category}
                </span>
                <span className="text-slate-600 text-xs">{post.readTime} lectura</span>
              </div>
              <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
                <span className="text-slate-600 text-xs">{new Date(post.date).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="text-indigo-400 text-xs font-medium group-hover:text-indigo-300 transition-colors">Leer artículo →</span>
              </div>
            </Link>
          ))}
        </div>

        <AdSlot id="4567890123" className="mt-10" />
      </div>
    </main>
  )
}
