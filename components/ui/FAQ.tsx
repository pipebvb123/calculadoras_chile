'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="glass rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/[0.1] transition-colors"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-[15px] font-medium text-slate-200">{item.q}</span>
            <span className="flex-shrink-0 text-slate-500">
              {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-slate-400 text-sm leading-relaxed border-t border-white/[0.04] pt-3">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
