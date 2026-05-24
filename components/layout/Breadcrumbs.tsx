import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Crumb { label: string; href?: string }

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-500 mb-6">
      <Link href="/" className="hover:text-slate-300 transition-colors">Inicio</Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={13} className="text-slate-700" />
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-slate-300 transition-colors">{crumb.label}</Link>
          ) : (
            <span className="text-slate-300">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
