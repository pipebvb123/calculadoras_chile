import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCLP(n: number): string {
  return '$' + Math.round(n).toLocaleString('es-CL')
}

export function formatUF(n: number, decimals = 2): string {
  return n.toLocaleString('es-CL', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }) + ' UF'
}

export function parseNum(v: string): number {
  return parseFloat(v.replace(/\./g, '').replace(',', '.')) || 0
}

export function formatPct(n: number, decimals = 1): string {
  return n.toFixed(decimals) + '%'
}
