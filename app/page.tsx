import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { CalculatorGrid } from '@/components/home/CalculatorGrid'
import { FeaturedBlog } from '@/components/home/FeaturedBlog'
import { AdSlot } from '@/components/ui/AdSlot'

export const metadata: Metadata = {
  title: 'Calculadoras Chile 2026 | Herramientas Financieras Gratis',
  description:
    'La plataforma de calculadoras financieras más completa de Chile. Sueldo líquido, UF, AFP, hipotecario, finiquito, vacaciones, IVA, dólar y más. Gratis y actualizado 2026.',
  alternates: { canonical: 'https://calculadoras-chile-5sbh.vercel.app' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AdSlot id="home-top" />
      <CalculatorGrid />
      <AdSlot id="home-mid" />
      <FeaturedBlog />
    </>
  )
}
