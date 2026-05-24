'use client'

import { useEffect } from 'react'

interface AdSlotProps {
  id: string
  className?: string
}

export function AdSlot({ id, className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogle global
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  return (
    <div className={`ad-container my-6 ${className}`} data-ad-id={id}>
      <div className="text-[10px] text-slate-700 uppercase tracking-widest mb-2">Publicidad</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8987300357303329"
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
