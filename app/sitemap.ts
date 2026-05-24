import type { MetadataRoute } from 'next'

const BASE = 'https://calculadoras-chile-5sbh.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const calculadoras = [
    'sueldo-liquido',
    'afp',
    'finiquito',
    'vacaciones',
    'uf',
    'credito-hipotecario',
    'interes-compuesto',
    'conversor-dolar',
    'iva',
    'utm',
    'descuentos',
  ]

  const blogPosts = [
    'que-es-la-uf-chile',
    'guia-credito-hipotecario-chile',
    'como-calcular-sueldo-liquido',
    'reforma-previsional-chile-2026',
    'calcula-finiquito-chile',
    'interes-compuesto-jubilacion',
  ]

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/sobre-nosotros`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE}/contacto`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE}/privacidad`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE}/terminos`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return [
    ...staticPages.map(p => ({ ...p, lastModified: now })),
    ...calculadoras.map(slug => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...blogPosts.map(slug => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
