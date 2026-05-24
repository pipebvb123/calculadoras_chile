export interface CalculatorItem {
  label: string
  href: string
  icon: string
  description: string
  tag?: string
}

export interface CalculatorCategory {
  slug: string
  label: string
  items: CalculatorItem[]
}

export const calculatorCategories: CalculatorCategory[] = [
  {
    slug: 'laboral',
    label: 'Laboral Chile',
    items: [
      { label: 'Sueldo Líquido', href: '/sueldo-liquido', icon: '💼', description: 'Calcula tu sueldo neto con AFP, salud e impuestos' },
      { label: 'Calculadora AFP', href: '/afp', icon: '🏦', description: 'Cotizaciones y proyección de pensión', tag: 'popular' },
      { label: 'Finiquito', href: '/finiquito', icon: '📋', description: 'Monto de finiquito según causal de despido' },
      { label: 'Vacaciones', href: '/vacaciones', icon: '🌴', description: 'Días acumulados y compensación en pesos' },
    ],
  },
  {
    slug: 'financiero',
    label: 'Finanzas',
    items: [
      { label: 'Calculadora UF', href: '/uf', icon: '📊', description: 'Valor UF hoy y conversor CLP ↔ UF', tag: 'live' },
      { label: 'Crédito Hipotecario', href: '/credito-hipotecario', icon: '🏠', description: 'Simula tu dividendo y tabla de amortización' },
      { label: 'Interés Compuesto', href: '/interes-compuesto', icon: '💹', description: 'Proyecta inversiones con capitalización' },
      { label: 'Conversor Dólar', href: '/conversor-dolar', icon: '💵', description: 'USD ↔ CLP con tipo de cambio en tiempo real', tag: 'live' },
    ],
  },
  {
    slug: 'impuestos',
    label: 'Impuestos',
    items: [
      { label: 'Calculadora IVA', href: '/iva', icon: '🧾', description: 'Agrega o extrae IVA al 19%' },
      { label: 'UTM a CLP', href: '/utm', icon: '📐', description: 'Convierte UTM a pesos chilenos 2026' },
      { label: 'Descuentos', href: '/descuentos', icon: '🏷️', description: 'Precio final con descuento en % o valor fijo' },
    ],
  },
]

export const allCalculators: CalculatorItem[] = calculatorCategories.flatMap((c) => c.items)
