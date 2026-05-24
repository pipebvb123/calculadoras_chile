import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://calculadoras-chile-5sbh.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Calculadoras Chile 2026 | Herramientas Financieras Gratis',
    template: '%s | Calculadoras Chile',
  },
  description:
    'La plataforma de calculadoras financieras más completa de Chile. Calcula sueldo líquido, UF, AFP, hipotecario, finiquito, vacaciones, IVA y más. Gratis y actualizado 2026.',
  keywords: [
    'calculadoras Chile',
    'sueldo líquido Chile',
    'calculadora UF',
    'crédito hipotecario Chile',
    'calculadora AFP',
    'finiquito Chile',
    'herramientas financieras Chile',
  ],
  authors: [{ name: 'Calculadoras Chile' }],
  creator: 'Calculadoras Chile',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: BASE_URL,
    siteName: 'Calculadoras Chile',
    title: 'Calculadoras Chile 2026 | Herramientas Financieras Gratis',
    description:
      'La plataforma de calculadoras financieras más completa de Chile. Gratis y actualizada 2026.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Calculadoras Chile' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras Chile 2026',
    description: 'Herramientas financieras gratuitas para Chile',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'N3HdPdfi_4NhoQAZbELZeKvUz7QzkgqBTkc9AaUZbvA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8987300357303329"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#080808] text-slate-100 antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Background grid */}
          <div
            className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none"
            aria-hidden="true"
          />
          {/* Ambient glow */}
          <div
            className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/8 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
