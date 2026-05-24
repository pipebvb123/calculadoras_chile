import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AdSlot } from '@/components/ui/AdSlot'

const posts: Record<string, {
  title: string; description: string; date: string; readTime: string; category: string; content: string
}> = {
  'que-es-la-uf-chile': {
    title: '¿Qué es la UF en Chile y cómo se calcula?',
    description: 'La Unidad de Fomento (UF) es la unidad de cuenta más usada en Chile para créditos, arriendos y contratos. Aprende cómo funciona y cómo se calcula.',
    date: '2026-05-15',
    readTime: '5 min',
    category: 'Finanzas',
    content: `
## ¿Qué es la Unidad de Fomento (UF)?

La Unidad de Fomento, conocida como UF, es una **unidad de cuenta indexada a la inflación** usada ampliamente en Chile. A diferencia de un monto fijo en pesos, la UF mantiene su valor real frente a la inflación porque se ajusta diariamente según el Índice de Precios al Consumidor (IPC).

La UF fue creada en 1967 por el Banco Central de Chile y hoy es referencia indispensable en créditos hipotecarios, contratos de arrendamiento, dividendos y planes de salud.

## ¿Cómo se calcula la UF?

El Banco Central calcula la UF mensualmente con la siguiente lógica:

1. Se mide la inflación del mes anterior (IPC publicado por el INE).
2. Ese porcentaje de variación se distribuye diariamente entre el día 10 del mes en curso y el día 9 del mes siguiente.
3. La variación diaria es proporcional, de modo que cada día la UF vale ligeramente más (o menos) que el día anterior.

**Ejemplo:** Si el IPC de abril fue 0,3%, la UF sube 0,3% distribuido entre el 10 de mayo y el 9 de junio.

## ¿Cuánto vale la UF hoy?

El valor de la UF en mayo 2026 es aproximadamente **$39.000 CLP**. Puedes consultar el valor exacto de cada día en el sitio del [Banco Central de Chile](https://www.bcentral.cl) o en nuestra [calculadora UF](/uf).

## ¿Para qué se usa la UF?

- **Créditos hipotecarios**: el dividendo y el saldo se expresan en UF, protegiendo al banco de la inflación.
- **Arriendos**: muchos contratos indexan el arriendo anualmente a la variación de la UF.
- **Planes de salud (ISAPRE)**: los planes se expresan en UF para mantener su valor real.
- **Multas y sanciones**: algunas multas del SII y otros organismos se expresan en UF.
- **Pensiones y APV**: el Ahorro Previsional Voluntario suele manejarse en UF.

## ¿Cuál es la diferencia entre UF y UTM?

| | UF | UTM |
|---|---|---|
| **Actualización** | Diaria | Mensual |
| **Base** | IPC (inflación) | IPC (inflación) |
| **Uso principal** | Créditos, vivienda | Impuestos, multas SII |
| **Valor aprox. 2026** | $39.000 | $69.951 |

La **UTM (Unidad Tributaria Mensual)** también se indexa al IPC pero se actualiza mensualmente y es usada principalmente por el SII para calcular multas e impuestos.

## ¿Conviene tomar créditos en UF o en pesos?

**En UF:** el dividendo es estable en términos reales, pero si la inflación sube mucho, el valor en pesos del dividendo aumenta. Mejor para plazos largos.

**En pesos:** el dividendo es fijo en CLP, pero la tasa suele ser mayor. Si la inflación es alta, la deuda real disminuye con el tiempo.

En Chile, la mayoría de los créditos hipotecarios se pactan en UF porque permiten tasas más bajas y mayor estabilidad.

---

*Usa nuestra [calculadora UF](/uf) para convertir UF a pesos al valor de hoy, o nuestra [calculadora de crédito hipotecario](/credito-hipotecario) para simular tu dividendo.*
    `,
  },
  'guia-credito-hipotecario-chile': {
    title: 'Guía completa del crédito hipotecario en Chile 2026',
    description: 'Todo lo que debes saber antes de pedir un crédito hipotecario en Chile: pie mínimo, tasas, seguros, prepago y cómo comparar bancos.',
    date: '2026-05-10',
    readTime: '8 min',
    category: 'Vivienda',
    content: `
## ¿Qué es un crédito hipotecario?

Un crédito hipotecario es un préstamo a largo plazo que te otorga un banco para comprar una vivienda. La propiedad queda en garantía (hipotecada) hasta que terminas de pagar el crédito. En Chile, la mayoría de estos créditos se expresan en UF.

## Requisitos básicos para postular

Para acceder a un crédito hipotecario en Chile necesitas:

- **Renta mínima**: el dividendo no debería superar el 25-30% de tu ingreso líquido.
- **Historial crediticio limpio**: sin deudas impagas en el sistema financiero (DICOM).
- **Pie o entrada**: generalmente el 20% del valor de la propiedad.
- **Contrato de trabajo**: preferente tener contrato indefinido. Los independientes pueden postular con boletas de honorarios acreditando ingresos estables.

## ¿Cuánto es el pie mínimo?

Los bancos en Chile generalmente financian hasta el **80% del valor de tasación** del inmueble, por lo que necesitas aportar el 20% como pie. Para segunda vivienda o inmueble de inversión, el pie puede ser del 25-30%.

Existen subsidios del Ministerio de Vivienda (MINVU) para primeras viviendas que pueden complementar el pie.

## Tipos de tasas de interés

| Tipo | Descripción | Ventaja | Riesgo |
|---|---|---|---|
| **Tasa fija** | La misma durante todo el plazo | Certeza del dividendo | Puede ser más alta |
| **Tasa variable** | Se reajusta periódicamente | Puede bajar | Incertidumbre |
| **Tasa mixta** | Fija los primeros años, luego variable | Combina ambas | Variable en el futuro |

En 2026, las tasas fijas para créditos en UF oscilan entre **3,5% y 5,5% anual**, según el banco y el perfil del solicitante.

## Componentes del dividendo mensual

Tu dividendo mensual incluye:

1. **Amortización de capital**: la parte del capital que devuelves.
2. **Intereses**: el costo del dinero prestado.
3. **Seguro de desgravamen**: obligatorio, cubre la deuda en caso de fallecimiento.
4. **Seguro de incendio y sismo**: obligatorio para el inmueble.

Los seguros pueden representar el 10-15% del dividendo total.

## ¿Cómo comparar bancos?

No te quedes solo con la tasa de interés. Compara:

- **CAE (Carga Anual Equivalente)**: incluye tasa + comisiones + seguros. Es el indicador real del costo.
- **Tasas de los seguros**: varían mucho entre bancos.
- **Comisiones de originación**: algunos bancos cobran un porcentaje por el estudio y trámite.
- **Flexibilidad de prepago**: ¿puedes prepagar sin penalización?

## Prepago del crédito hipotecario

La ley chilena permite prepagar créditos hipotecarios. En créditos con tasa variable, el prepago es generalmente gratuito. En créditos con tasa fija puede haber una comisión de prepago equivalente a 1-3 meses de interés.

Prepagar al inicio del crédito es más eficiente porque los intereses son mayores en los primeros años (amortización francesa).

## Simulación práctica

Usa nuestra [calculadora de crédito hipotecario](/credito-hipotecario) para:
- Simular tu dividendo según monto, plazo y tasa.
- Ver la tabla de amortización mes a mes.
- Comparar el ahorro por prepago anticipado.

---

*Recuerda que las tasas varían según el banco y tu perfil. Siempre cotiza en al menos 3 instituciones antes de decidir.*
    `,
  },
  'como-calcular-sueldo-liquido': {
    title: 'Cómo calcular el sueldo líquido en Chile paso a paso',
    description: 'Descuento AFP, salud, IUSC... aprende qué se descuenta del sueldo bruto para obtener el sueldo líquido en Chile con ejemplos prácticos.',
    date: '2026-05-05',
    readTime: '6 min',
    category: 'Laboral',
    content: `
## ¿Qué es el sueldo líquido?

El **sueldo líquido** (o sueldo neto) es el monto que efectivamente recibes después de todos los descuentos legales. El sueldo bruto es el pactado en el contrato; el líquido es lo que entra a tu cuenta.

En Chile, los descuentos obligatorios son:

1. AFP (cotización previsional)
2. Salud (ISAPRE o FONASA)
3. SIS (Seguro de Invalidez y Sobrevivencia) — lo paga el empleador
4. IUSC (Impuesto Único de Segunda Categoría) — solo si superas cierto monto

## Paso 1: Cotización AFP

La cotización obligatoria de AFP es el **10% del sueldo imponible** (con tope de 81,6 UF ~ $3.182.400). Adicionalmente, cada AFP cobra una **comisión** que varía entre 0,49% y 1,45%.

**Ejemplo:** Sueldo $900.000
- AFP 10%: $90.000
- Comisión AFP Habitat (0,69%): $6.210
- **Total AFP: $96.210**

## Paso 2: Cotización de salud

Si estás en **FONASA**, descuentas el 7% del sueldo imponible (tope 81,6 UF).

Si estás en **ISAPRE**, el descuento mínimo legal es también 7%, pero el plan contratado puede ser mayor.

**Ejemplo:** $900.000 × 7% = $63.000

## Paso 3: Base para el IUSC

Una vez descontados AFP y salud, tienes la **base imponible para el IUSC**:

Base IUSC = Sueldo bruto - AFP (10%) - Salud (7%)

**Ejemplo:** $900.000 - $90.000 - $63.000 = $747.000

## Paso 4: Impuesto Único de Segunda Categoría (IUSC)

El IUSC es un impuesto progresivo sobre la renta mensual que se descuenta en la fuente. Los tramos para 2026 son (aprox.):

| Renta mensual | Tasa marginal |
|---|---|
| Hasta $853.626 (~8 UTM) | Exento |
| $853.627 - $1.280.439 | 4% |
| $1.280.440 - $2.133.900 | 8% |
| $2.133.901 - $2.987.361 | 13,5% |
| $2.987.362 - $3.974.382 | 23% |
| $3.974.383 - $5.322.432 | 30,4% |
| Más de $5.322.432 | 35% |

*(Valores referenciales 2026. Consultar SII para valores exactos.)*

Con base imponible de $747.000, estás en el tramo exento → IUSC = $0.

## Paso 5: Calcular el sueldo líquido

Sueldo líquido = Sueldo bruto - AFP - Comisión AFP - Salud - IUSC

**Ejemplo completo (AFP Habitat, FONASA):**

| Concepto | Monto |
|---|---|
| Sueldo bruto | $900.000 |
| - AFP 10% | -$90.000 |
| - Comisión AFP (0,69%) | -$6.210 |
| - FONASA 7% | -$63.000 |
| - IUSC | $0 |
| **= Sueldo líquido** | **$740.790** |

## Calculadora rápida

Para no hacer todos estos cálculos manualmente, usa nuestra [calculadora de sueldo líquido](/sueldo-liquido). Ingresa tu sueldo bruto, elige tu AFP y tipo de salud, y obtienes el desglose completo al instante.

---

*Recuerda que el empleador también paga aportes adicionales (SIS, seguro de accidentes laborales, AFC) que no se descuentan de tu sueldo sino que son costo del empleador.*
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return {
    title: `${post.title} | Calculadoras Chile`,
    description: post.description,
    alternates: { canonical: `https://calculadoras-chile-5sbh.vercel.app/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  const paragraphs = post.content.trim().split('\n').filter(Boolean)

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8">
          ← Volver al blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2 py-1 rounded-lg text-indigo-400 bg-indigo-400/10">
              {post.category}
            </span>
            <span className="text-slate-600 text-xs">{post.readTime} lectura</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-600 text-xs">
              {new Date(post.date).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight mb-4">{post.title}</h1>
          <p className="text-slate-400 text-lg">{post.description}</p>
        </div>

        <AdSlot id="5678901234" className="mb-8" />

        {/* Content */}
        <article className="prose prose-invert prose-slate max-w-none">
          {paragraphs.map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold text-white mt-8 mb-4">{line.replace('## ', '')}</h2>
            }
            if (line.startsWith('| ')) {
              return null // Skip table rows rendered below
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="text-slate-300 ml-4 mb-1 list-disc">{line.replace('- ', '')}</li>
            }
            if (line.startsWith('*') && line.endsWith('*')) {
              return <p key={i} className="text-slate-500 text-sm italic mt-6 border-t border-white/[0.06] pt-4">{line.replace(/\*/g, '')}</p>
            }
            if (line.startsWith('---')) {
              return <hr key={i} className="border-white/[0.06] my-8" />
            }
            if (line.trim() === '') return null
            // Render inline bold and links
            const rendered = line
              .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-indigo-400 hover:text-indigo-300 underline">$1</a>')
            return <p key={i} className="text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: rendered }} />
          })}

          {/* Render tables */}
          {post.content.includes('|') && (
            <div className="overflow-x-auto rounded-xl border border-white/[0.06] my-6">
              <table className="table-dark w-full text-sm">
                {post.content.split('\n').filter(l => l.startsWith('|')).map((row, ri) => {
                  if (row.includes('---')) return null
                  const cells = row.split('|').filter(c => c.trim())
                  if (ri === 0) return (
                    <thead key={ri}><tr>{cells.map((c, ci) => <th key={ci}>{c.trim()}</th>)}</tr></thead>
                  )
                  return (
                    <tbody key={ri}><tr>{cells.map((c, ci) => <td key={ci}>{c.trim()}</td>)}</tr></tbody>
                  )
                })}
              </table>
            </div>
          )}
        </article>

        <AdSlot id="6789012345" className="mt-10" />

        {/* Related */}
        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <h3 className="text-white font-semibold mb-4">Herramientas relacionadas</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/sueldo-liquido', label: 'Calculadora Sueldo Líquido' },
              { href: '/afp', label: 'Calculadora AFP' },
              { href: '/uf', label: 'Calculadora UF' },
              { href: '/credito-hipotecario', label: 'Calculadora Hipotecario' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="px-4 py-2 rounded-xl border border-indigo-500/20 text-indigo-400 text-sm hover:border-indigo-400/40 hover:text-indigo-300 transition-all">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
