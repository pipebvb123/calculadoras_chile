'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { calculatorCategories } from '@/lib/calculators/registry'
import { Menu, X, ChevronDown, Calculator } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false); setDropdownOpen(false) }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-glow-sm group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-semibold text-white text-[15px] tracking-tight">
            Calculadoras<span className="text-indigo-400">Chile</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">

          {/* Calculadoras dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors">
              Calculadoras <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-[#111111]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-4 grid grid-cols-2 gap-1">
                {calculatorCategories.map((cat) => (
                  <div key={cat.slug} className="mb-2">
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-2 mb-1">{cat.label}</p>
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors group"
                      >
                        <span className="text-base leading-none">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className={`px-3 py-2 rounded-lg text-sm transition-colors ${pathname?.startsWith('/blog') ? 'text-white bg-white/[0.06]' : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'}`}>
            Blog
          </Link>
          <Link href="/sobre-nosotros" className={`px-3 py-2 rounded-lg text-sm transition-colors ${pathname === '/sobre-nosotros' ? 'text-white bg-white/[0.06]' : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'}`}>
            Nosotros
          </Link>
          <Link href="/contacto" className={`px-3 py-2 rounded-lg text-sm transition-colors ${pathname === '/contacto' ? 'text-white bg-white/[0.06]' : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'}`}>
            Contacto
          </Link>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/sueldo-liquido"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-glow-sm"
          >
            <Calculator size={14} />
            Calcular
          </Link>
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f]/98 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {calculatorCategories.map((cat) => (
            <div key={cat.slug} className="mb-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-2 mb-2">{cat.label}</p>
              {cat.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <span>{item.icon}</span> {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="border-t border-white/[0.06] pt-3 space-y-1">
            <Link href="/blog" className="flex px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.06]">Blog</Link>
            <Link href="/sobre-nosotros" className="flex px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.06]">Nosotros</Link>
            <Link href="/contacto" className="flex px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.06]">Contacto</Link>
          </div>
        </div>
      )}
    </header>
  )
}
