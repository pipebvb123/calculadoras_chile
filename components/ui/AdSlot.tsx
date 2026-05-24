'use client'

import { useEffect } from 'react'

interface AdSlotProps {
  id: string
  className?: string
}

// Auto Ads: Google places ads automatically via the script in layout.tsx
// These containers serve as visual placeholders and hint locations to Google
export function AdSlot({ id, className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogle global
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client="ca-pub-8987300357303329"
        data-ad-slot={id}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
