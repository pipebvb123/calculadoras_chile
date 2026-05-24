import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AdSlot } from '@/components/ui/AdSlot'

interface Post {
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content: string
}

const posts: Record<string, Post> = {
  'que-es-la-uf-chile': {
    title: '¿Qué es la UF en Chile y cómo se calcula?',
    description: 'La Unidad de Fomento (UF) es la unidad de cuenta más usada en Chile para créditos, arriendos y contratos. Aprende cómo funciona y cómo se calcula.',
    date: '2026-05-15',
    readTime: '5 min',
    category: 'Finanzas',
    content: `La Unidad de Fomento, conocida como UF, es una unidad de cuenta indexada a la inflación que se usa ampliamente en Chile. A diferencia de un monto fijo en pesos, la UF mantiene su valor real frente a la inflación porque se ajusta diariamente según el Índice de Precios al Consumidor (IPC). Fue creada en 1967 por el Banco Central de Chile.

## ¿Cómo se calcula la UF?

El Banco Central calcula la UF mensualmente con la siguiente lógica: primero se mide la inflación del mes anterior (IPC publicado por el INE), luego ese porcentaje de variación se distribuye diariamente entre el día 10 del mes en curso y el día 9 del mes siguiente. La variación diaria es proporcional, de modo que cada día la UF vale ligeramente más (o menos) que el día anterior.

Por ejemplo, si el IPC de abril fue 0,3%, la UF sube 0,3% distribuido entre el 10 de mayo y el 9 de junio. En mayo de 2026 la UF vale aproximadamente $39.000 pesos chilenos.

## ¿Para qué se usa la UF?

La UF se usa en Chile en múltiples contextos. En créditos hipotecarios, el dividendo y el saldo se expresan en UF para proteger al banco de la inflación. En arriendos, muchos contratos indexan el monto anualmente a la variación de la UF. Los planes de salud de ISAPRE también se expresan en UF para mantener su valor real. Además, algunas multas del SII y pensiones del sistema APV se manejan en esta unidad.

## ¿Cuál es la diferencia entre UF y UTM?

La UF se actualiza diariamente y su uso principal es en vivienda y créditos. La UTM (Unidad Tributaria Mensual) se actualiza mensualmente y es utilizada principalmente por el SII para calcular multas e impuestos. En mayo de 2026, la UF vale aproximadamente $39.000 y la UTM $69.951.

## ¿Conviene tomar créditos en UF o en pesos?

En UF el dividendo es estable en términos reales, pero si la inflación sube mucho, el valor en pesos del dividendo aumenta. En pesos, el dividendo es fijo en CLP, pero la tasa suele ser mayor. Si la inflación es alta, la deuda real disminuye con el tiempo. En Chile, la mayoría de los créditos hipotecarios se pactan en UF porque permiten tasas más bajas y mayor estabilidad a largo plazo.

Usa nuestra calculadora UF para convertir entre UF y pesos al valor de hoy, o nuestra calculadora de crédito hipotecario para simular tu dividendo mensual.`,
  },

  'como-calcular-sueldo-liquido': {
    title: 'Cómo calcular el sueldo líquido en Chile paso a paso',
    description: 'Aprende qué descuentos se aplican al sueldo bruto en Chile: AFP, salud, IUSC. Con ejemplos prácticos para calcular tu sueldo neto.',
    date: '2026-05-10',
    readTime: '6 min',
    category: 'Laboral',
    content: `El sueldo líquido o sueldo neto es el monto que efectivamente recibes en tu cuenta bancaria después de todos los descuentos legales. El sueldo bruto es el pactado en el contrato, y el líquido es lo que realmente percibes. En Chile los descuentos obligatorios son AFP, salud e impuesto único de segunda categoría.

## Paso 1: Cotización AFP (10% + comisión)

La cotización obligatoria de AFP es el 10% del sueldo imponible, con un tope de 81,6 UF (aproximadamente $3.182.400 en 2026). Adicionalmente, cada AFP cobra una comisión que varía entre 0,49% (AFP Uno) y 1,45% (AFP Planvital).

Ejemplo con sueldo de $900.000 y AFP Habitat (0,69%): AFP 10% = $90.000, comisión = $6.210, total AFP = $96.210.

## Paso 2: Cotización de salud (7%)

Si estás en FONASA, descuentas el 7% del sueldo imponible. Si estás en ISAPRE, el descuento mínimo legal es también 7%, aunque el plan contratado puede ser mayor.

Ejemplo: $900.000 × 7% = $63.000.

## Paso 3: Base imponible para el IUSC

Una vez descontados AFP y salud, obtienes la base para el Impuesto Único de Segunda Categoría: sueldo bruto menos AFP 10% menos salud 7%. En el ejemplo: $900.000 - $90.000 - $63.000 = $747.000.

## Paso 4: Impuesto Único de Segunda Categoría (IUSC)

El IUSC es un impuesto progresivo que se descuenta mensualmente en la fuente. Para 2026, los trabajadores con renta imponible mensual inferior a 8 UTM ($559.608 aprox.) están exentos. Con base imponible de $747.000 estás en el tramo exento, por lo tanto IUSC = $0.

## Resultado final del ejemplo

Con sueldo bruto de $900.000, AFP Habitat y FONASA: AFP 10% menos $90.000, comisión AFP menos $6.210, FONASA 7% menos $63.000, IUSC $0. Sueldo líquido = $740.790.

## ¿Qué paga el empleador además?

El empleador también paga aportes adicionales que no se descuentan de tu sueldo: SIS (Seguro de Invalidez y Sobrevivencia) 1,49%, seguro de accidentes laborales (0,93% base más recargo según actividad) y AFC (Seguro de Cesantía) 2,4% del sueldo bruto. Estos son costos adicionales para la empresa que no afectan tu sueldo neto.

Usa nuestra calculadora de sueldo líquido para obtener el desglose exacto según tu AFP, tipo de salud y sueldo bruto.`,
  },

  'guia-credito-hipotecario-chile': {
    title: 'Guía completa del crédito hipotecario en Chile 2026',
    description: 'Todo lo que debes saber antes de pedir un crédito hipotecario en Chile: pie mínimo, tasas, seguros, prepago y cómo comparar bancos.',
    date: '2026-05-05',
    readTime: '8 min',
    category: 'Vivienda',
    content: `Un crédito hipotecario es un préstamo a largo plazo que te otorga un banco para comprar una vivienda. La propiedad queda hipotecada como garantía hasta que terminas de pagar. En Chile, la mayoría de estos créditos se expresan en UF para proteger tanto al banco como al deudor de la inflación.

## Requisitos básicos para postular

Para acceder a un crédito hipotecario en Chile necesitas renta mínima suficiente para que el dividendo no supere el 25-30% de tu ingreso líquido mensual. También debes tener historial crediticio limpio, sin deudas impagas en el sistema financiero. Necesitas aportar el pie o entrada, generalmente el 20% del valor de la propiedad. Además, preferentemente debes tener contrato de trabajo indefinido, aunque los trabajadores independientes pueden postular acreditando ingresos estables con boletas de honorarios.

## El pie mínimo y cómo financiarlo

Los bancos en Chile generalmente financian hasta el 80% del valor de tasación del inmueble, por lo que necesitas aportar el 20% como pie. Para segunda vivienda o inmueble de inversión el pie puede ser del 25-30%.

Existen subsidios del Ministerio de Vivienda (MINVU) para primeras viviendas que pueden complementar el pie. El programa DS49 para sectores medios y el DS01 para clase media son los más utilizados en 2026.

## Tipos de tasas de interés

Las tasas fijas mantienen el mismo dividendo durante todo el plazo, lo que da certeza pero puede resultar más cara inicialmente. Las tasas variables se reajustan periódicamente y pueden bajar, pero también subir, generando incertidumbre. Las tasas mixtas son fijas los primeros años y luego variables, combinando ambas características.

En 2026, las tasas fijas para créditos en UF oscilan entre 3,5% y 5,5% anual, según el banco y el perfil del solicitante.

## Componentes del dividendo mensual

Tu dividendo mensual incluye la amortización del capital (la parte de la deuda que devuelves), los intereses del período, el seguro de desgravamen obligatorio que cubre la deuda en caso de fallecimiento, y el seguro de incendio y sismo obligatorio para el inmueble. Los seguros pueden representar el 10-15% del dividendo total, por lo que siempre deben considerarse al comparar ofertas.

## Cómo comparar bancos correctamente

No te quedes solo con la tasa de interés. El indicador más importante es el CAE (Carga Anual Equivalente), que incluye tasa más comisiones más seguros y representa el costo real del crédito. También compara las tasas de los seguros, que varían mucho entre instituciones, las comisiones de originación que algunos bancos cobran, y la flexibilidad para prepagar.

## Prepago del crédito hipotecario

La ley chilena permite prepagar créditos hipotecarios. En créditos con tasa variable el prepago es generalmente gratuito. En créditos con tasa fija puede haber una comisión equivalente a 1-3 meses de interés.

Prepagar al inicio del crédito es más eficiente porque los intereses son mayores en los primeros años con el sistema de amortización francesa. Incluso prepagos pequeños reducen significativamente el total de intereses pagados.

Usa nuestra calculadora de crédito hipotecario para simular tu dividendo, ver la tabla de amortización completa y comparar diferentes plazos y tasas.`,
  },

  'reforma-previsional-chile-2026': {
    title: 'Reforma previsional Chile 2026: lo que debes saber',
    description: 'La reforma previsional 2026 cambia la cotización, crea nuevos mecanismos de ahorro colectivo y modifica la Pensión Garantizada Universal. Todo explicado claramente.',
    date: '2026-04-28',
    readTime: '7 min',
    category: 'Previsión',
    content: `La reforma previsional aprobada en Chile en 2024 comenzó a implementarse gradualmente en 2025 y 2026. Es el cambio más importante al sistema de pensiones desde la creación de las AFP en 1981. Sus efectos se sentirán en los descuentos de sueldo, el mecanismo de ahorro y las pensiones futuras de todos los trabajadores chilenos.

## El aumento gradual de la cotización

El cambio más visible es el aumento de la cotización obligatoria. Hasta 2024, los trabajadores cotizaban el 10% de su sueldo imponible para la cuenta individual AFP. Con la reforma, la cotización total sube gradualmente hasta llegar al 16% en 2031.

La distribución del aumento es la siguiente: el 10% original se mantiene en la cuenta individual del trabajador. El 6% adicional es financiado íntegramente por el empleador, no por el trabajador. De ese 6%, el 3% va a un nuevo Fondo de Ahorro Colectivo administrado por el Estado, y el 3% restante se destina a un Seguro Social que financia mejoras a pensiones más bajas.

## El nuevo Fondo de Ahorro Colectivo

La reforma crea un componente de reparto parcial gestionado por el Fondo de Ahorro Colectivo (FAC). Este fondo redistribuye recursos entre generaciones para mejorar las pensiones de quienes reciben montos bajos. A diferencia de la cuenta individual AFP donde cada uno ahorra para sí mismo, el FAC tiene un componente solidario entre trabajadores.

## Cambios a la Pensión Garantizada Universal

La Pensión Garantizada Universal (PGU) también se modifica. El monto aumenta gradualmente y se amplía la cobertura para incluir a más personas. En 2026 el monto de la PGU es de $214.296 mensuales para quienes cumplan los requisitos de residencia y no estén en el 10% de mayores ingresos del país.

## Impacto en el sueldo líquido

Para el trabajador, el sueldo líquido no cambia porque el aumento de cotización lo paga el empleador. Sin embargo, esto representa un mayor costo laboral para las empresas. El trabajador sigue viendo descontado el 10% hacia su cuenta individual AFP más la comisión AFP de cada institución.

## ¿Qué pasa con las AFP existentes?

Las AFP continúan administrando las cuentas individuales. La reforma no elimina las AFP sino que agrega nuevos componentes al sistema. Se crean también los Inversores de Pensiones Públicos como alternativa a las AFP privadas, permitiendo a los trabajadores elegir entre administradores públicos o privados para su cuenta individual.

## ¿Qué debo hacer como trabajador?

Por ahora no necesitas hacer nada diferente. Los cambios se implementan automáticamente a través de tu empleador. Lo que sí conviene es revisar si tienes APV (Ahorro Previsional Voluntario), ya que complementar el ahorro obligatorio sigue siendo una de las mejores herramientas para mejorar la pensión futura. Usa nuestra calculadora AFP para proyectar tu pensión estimada.`,
  },

  'calcula-finiquito-chile': {
    title: 'Cómo calcular tu finiquito en Chile: guía 2026',
    description: 'Todo lo que incluye el finiquito en Chile según la causal de despido: indemnización por años de servicio, vacaciones, aviso previo y días proporcionales.',
    date: '2026-04-20',
    readTime: '5 min',
    category: 'Laboral',
    content: `El finiquito es el documento mediante el cual el empleador y el trabajador ponen fin al contrato de trabajo y se pagan los montos adeudados. En Chile, el finiquito debe liquidarse dentro de los 10 días hábiles siguientes al término del contrato y ser firmado ante un ministro de fe (notario, inspector del trabajo o dirigente sindical).

## ¿Qué incluye el finiquito?

El finiquito puede incluir varios conceptos dependiendo de la situación. La indemnización por años de servicio aplica en ciertos casos de despido. La compensación de vacaciones cubre los días de feriado pendientes. El sueldo proporcional del mes en curso paga los días trabajados en el último mes. La indemnización sustitutiva del aviso previo aplica cuando el empleador no dio los 30 días de aviso. También puede incluir bonos u otros beneficios pendientes.

## ¿Cuándo corresponde indemnización por años de servicio?

La indemnización por años de servicio solo corresponde en casos específicos. Cuando el despido es por necesidades de la empresa (Artículo 161), el trabajador siempre tiene derecho a indemnización. En caso de mutuo acuerdo entre las partes también puede incluirse. El caso fortuito o fuerza mayor (Artículo 159 N°6) también genera derecho a indemnización. Sin embargo, si el trabajador renuncia voluntariamente, no le corresponde indemnización por años de servicio.

## Cómo se calcula la indemnización

La indemnización equivale a un mes de sueldo por cada año de servicio, con un tope de 11 meses. El sueldo base para el cálculo tiene un tope de 90 UF (aproximadamente $3.510.000 en 2026). Si llevas, por ejemplo, 5 años en la empresa y ganas $800.000, la indemnización sería $800.000 multiplicado por 5 = $4.000.000.

## Compensación de vacaciones pendientes

Las vacaciones proporcionales siempre se compensan en dinero al término del contrato, independientemente de la causal. Si tenías 8 días hábiles de vacaciones pendientes y tu sueldo diario es $30.000 (sueldo mensual dividido en 30), la compensación sería $240.000.

## Indemnización sustitutiva del aviso previo

Si el empleador no te avisó con 30 días de anticipación el despido por Artículo 161, debe pagarte una indemnización equivalente a un mes de sueldo. Esta suma se llama indemnización sustitutiva del aviso previo.

## El tope legal y cómo negociar más

La ley establece mínimos que el empleador debe respetar, pero es posible negociar montos mayores. Muchos trabajadores logran obtener más que el mínimo legal, especialmente en situaciones de Artículo 161 donde la empresa tiene más exposición legal.

Antes de firmar el finiquito, verifica que todos los montos sean correctos. Tienes derecho a revisarlo con calma y consultar a un abogado laboral o a la Inspección del Trabajo si tienes dudas. Una vez firmado, el finiquito tiene valor de cosa juzgada.

Usa nuestra calculadora de finiquito para estimar el monto que te corresponde según tu situación específica.`,
  },

  'interes-compuesto-jubilacion': {
    title: 'El poder del interés compuesto para tu jubilación',
    description: 'El interés compuesto es la herramienta más poderosa para construir patrimonio a largo plazo. Te explicamos cómo aprovecharlo para mejorar tu pensión en Chile.',
    date: '2026-04-12',
    readTime: '6 min',
    category: 'Inversión',
    content: `Albert Einstein supuestamente llamó al interés compuesto la octava maravilla del mundo. Independientemente de si realmente lo dijo, la frase captura algo profundo: el crecimiento exponencial del dinero en el tiempo es una de las fuerzas más poderosas en las finanzas personales. Y en Chile, con el sistema de AFP y el APV, tienes herramientas concretas para aprovecharlo.

## ¿Qué es exactamente el interés compuesto?

En el interés simple, los intereses siempre se calculan sobre el capital original. Si inviertes $1.000.000 al 5% anual por 10 años, ganas $50.000 cada año: $500.000 total.

Con interés compuesto, los intereses del año 1 se suman al capital y en el año 2 también generan intereses. Entonces: año 1 tienes $1.050.000, año 2 el 5% sobre $1.050.000 = $52.500, y así sucesivamente. Después de 10 años tienes $1.628.894, es decir $128.894 más que con interés simple.

A 30 años la diferencia es dramática: interés simple daría $2.500.000 en total, mientras que el compuesto al 5% llegaría a $4.321.942. La diferencia crece exponencialmente con el tiempo.

## La regla del 72: doblar tu dinero

Una forma fácil de entender el interés compuesto es la regla del 72. Divide 72 por la tasa anual y obtienes aproximadamente los años que necesitas para duplicar tu inversión.

Con 4% anual: 72 ÷ 4 = 18 años para duplicar. Con 6% anual: 72 ÷ 6 = 12 años. Con 8% anual: 72 ÷ 8 = 9 años. Esto muestra por qué buscar mejores tasas de retorno es tan importante a largo plazo.

## Por qué empezar antes marca la diferencia

Imagina a dos personas, Ana y Bruno. Ana empieza a ahorrar $100.000 mensuales a los 25 años y para a los 35, aportando $12.000.000 en total. Bruno empieza a los 35 y ahorra $100.000 mensuales hasta jubilarse a los 65, aportando $36.000.000 en total. Con 6% de rentabilidad anual, Ana termina con más dinero que Bruno a pesar de haber aportado un tercio. El tiempo, no el monto, es el factor decisivo.

## Cómo aprovechar el interés compuesto en Chile

La mejor manera de aprovechar el interés compuesto en Chile es a través del APV (Ahorro Previsional Voluntario). El Régimen A del APV ofrece una bonificación estatal del 15% sobre lo aportado anualmente, con un tope de 6 UTM anuales (~$419.706). Esta bonificación es un retorno inmediato que se suma a la rentabilidad del fondo.

El Fondo A de las AFP históricamente ha rentado entre 7-9% real anual en períodos largos. Combinando la rentabilidad del fondo con la bonificación estatal del Régimen A, el retorno efectivo en los primeros años puede superar el 20%.

## Ejemplo práctico: pensión a los 65

Una persona de 30 años con $5.000.000 ya acumulados en AFP, sueldo de $800.000, AFP Habitat y rentabilidad esperada del 5%: al llegar a los 65 años, el fondo proyectado sería de aproximadamente $180.000.000, lo que equivale a una pensión estimada de $750.000 mensuales solo desde la AFP, sin contar la PGU ni el APV adicional.

Si la misma persona agrega $50.000 mensuales de APV desde los 30 años, el fondo final aumentaría en $55.000.000 adicionales, elevando la pensión mensual en $230.000 más.

Usa nuestra calculadora de interés compuesto para proyectar el crecimiento de tu inversión con diferentes tasas y plazos, y ve cuánto más puedes acumular empezando hoy.`,
  },

  'ahorro-previsional-voluntario-apv': {
    title: 'APV en Chile: qué es y cómo ahorrar para jubilarte mejor',
    description: 'El Ahorro Previsional Voluntario (APV) te permite mejorar tu pensión y obtener beneficios tributarios. Aprende sobre los regímenes A y B y cuánto conviene ahorrar.',
    date: '2026-04-05',
    readTime: '6 min',
    category: 'Previsión',
    content: `El Ahorro Previsional Voluntario (APV) es uno de los mejores instrumentos de ahorro disponibles en Chile. Permite a trabajadores dependientes e independientes ahorrar más allá de la cotización obligatoria del 10% de AFP, con importantes beneficios tributarios que lo hacen altamente conveniente, especialmente para quienes tienen rentas medias o altas.

## ¿Qué es el APV y para qué sirve?

El APV es un ahorro adicional para la jubilación que complementa la cotización obligatoria de la AFP. Puedes depositarlo en tu misma AFP o en instituciones autorizadas como bancos, compañías de seguros, corredoras de bolsa y administradoras de fondos mutuos. El objetivo principal es mejorar la pensión futura, aunque también ofrece ventajas tributarias inmediatas.

## Régimen A: la bonificación estatal

En el Régimen A, el Estado entrega una bonificación del 15% sobre los montos aportados voluntariamente durante el año. Esta bonificación tiene un tope anual de 6 UTM, es decir, aproximadamente $419.706 en 2026. Por lo tanto, para recibir el máximo beneficio del Régimen A debes aportar al menos $2.800.000 anuales (unos $233.000 mensuales).

El Régimen A conviene especialmente a personas con rentas medias o bajas, ya que la bonificación del 15% es un retorno inmediato garantizado independientemente del desempeño del fondo. Al momento de jubilar, el monto acumulado bajo este régimen tributa como pensión.

## Régimen B: el beneficio tributario

En el Régimen B, los montos aportados al APV se descuentan de la base imponible del Impuesto Único de Segunda Categoría (IUSC). Esto significa que reduces tu base imponible y pagas menos impuesto mensualmente.

El tope de ahorro APV bajo el Régimen B es de 600 UF anuales (aproximadamente $23.400.000). Si tienes una renta alta y pagas bastante IUSC, el Régimen B puede resultar más conveniente que el A. Al momento de jubilar, el monto retirado tributa con una sobretasa del 3%.

## ¿Cuál régimen me conviene?

Si tu renta mensual es inferior a $2.000.000 y no pagas mucho IUSC, el Régimen A es generalmente más conveniente porque la bonificación del 15% es mayor que el ahorro tributario del Régimen B. Si tu renta mensual supera los $3.000.000 y pagas impuestos altos, el Régimen B puede ser mejor porque el ahorro tributario mensual es significativo. Puedes tener ambos regímenes simultáneamente en distintas instituciones.

## ¿Dónde contratar el APV?

El APV puede contratarse en tu misma AFP, en bancos (con sus fondos mutuos), en compañías de seguros (con productos específicos de APV) o en corredoras de bolsa para inversiones más diversificadas. Compara las comisiones de administración y la rentabilidad histórica antes de elegir. La rentabilidad puede variar significativamente entre instituciones.

## APVC: el APV colectivo con aporte del empleador

El APV Colectivo (APVC) es una variante donde el empleador también realiza aportes voluntarios, generalmente como beneficio para sus trabajadores. Muchas empresas grandes ofrecen APVC como parte del paquete de compensación. Si tu empleador lo ofrece, aprovéchalo ya que es dinero adicional que recibe tu fondo de pensión sin costo para ti.

Usa nuestra calculadora AFP para proyectar cómo el APV adicional puede impactar tu pensión futura según tu edad y sueldo actual.`,
  },

  'impuesto-segunda-categoria-chile': {
    title: 'Impuesto de Segunda Categoría en Chile: tramos y cálculo 2026',
    description: 'El IUSC es el impuesto que se descuenta mensualmente de tu sueldo. Conoce los tramos 2026, cómo se calcula y cuándo puedes recuperar dinero en la operación renta.',
    date: '2026-03-28',
    readTime: '5 min',
    category: 'Impuestos',
    content: `El Impuesto Único de Segunda Categoría (IUSC) es el impuesto a la renta que afecta a los trabajadores dependientes en Chile. Se descuenta mensualmente en la fuente, es decir, directamente de tu sueldo antes de que lo recibas. Si eres trabajador con un solo empleador, este impuesto generalmente es tu única obligación tributaria sobre tu sueldo.

## ¿Quiénes pagan el IUSC?

El IUSC afecta a todos los trabajadores dependientes en Chile cuyos sueldos superen cierto monto. El sistema es progresivo: a mayor renta, mayor tasa impositiva. Los trabajadores con renta imponible mensual inferior a 8 UTM están exentos. En mayo de 2026, 8 UTM equivalen a aproximadamente $559.608.

## Tramos del IUSC para 2026

El impuesto se calcula aplicando tasas marginales sobre la renta imponible mensual. La renta imponible es el sueldo bruto menos las cotizaciones de AFP y salud. Los tramos aproximados para 2026 son los siguientes:

Hasta 8 UTM (aprox. $559.608): exento, tasa 0%. De 8 a 12 UTM (aprox. $559.609 a $839.412): tasa 4%. De 12 a 20 UTM (aprox. $839.413 a $1.399.020): tasa 8%. De 20 a 28 UTM (aprox. $1.399.021 a $1.958.628): tasa 13,5%. De 28 a 37 UTM (aprox. $1.958.629 a $2.588.187): tasa 23%. De 37 a 50 UTM (aprox. $2.588.188 a $3.497.550): tasa 30,4%. Más de 50 UTM: tasa 35%.

Importante: estas tasas son marginales, lo que significa que solo se aplican sobre el tramo correspondiente, no sobre toda la renta.

## Ejemplo de cálculo práctico

Trabajador con sueldo bruto de $2.000.000, AFP Habitat (0,69%) y FONASA (7%): AFP 10% = $200.000, comisión AFP = $13.800, FONASA 7% = $140.000. Base imponible IUSC = $2.000.000 - $200.000 - $140.000 = $1.660.000. Con esta base imponible, el trabajador cae parcialmente en el tramo del 13,5%, pagando aproximadamente $31.000 de IUSC mensual.

## ¿Cuándo puedes recuperar impuestos en la operación renta?

Los trabajadores dependientes con un solo empleador generalmente no tienen obligación de hacer Declaración de Renta. Sin embargo, pueden voluntariamente declarar para recuperar impuestos pagados de más o aprovechar créditos tributarios.

Puedes recuperar impuestos si tienes APV bajo Régimen B, ya que estos aportes reducen la base imponible anual y pueden generar devolución. También si recibiste liquidaciones mensuales con montos variables (bonos, horas extras) donde la retención mensual fue mayor al impuesto anual que corresponde. Y si tienes hijos y cumples con los requisitos de la Asignación Familiar, que puede reducir el impuesto.

## El crédito por gastos de educación

Desde 2017, los contribuyentes con hijos en edad escolar pueden acceder a un crédito tributario por gastos de educación de hasta $186.100 por hijo por año. Este crédito se rebaja directamente del impuesto a pagar en la operación renta anual.

Usa nuestra calculadora de sueldo líquido para ver exactamente cuánto IUSC se descuenta de tu sueldo mensual según tu renta actual.`,
  },

  'uf-en-arriendo-chile': {
    title: 'UF en contratos de arriendo: cómo funciona y qué debes saber',
    description: 'Muchos contratos de arriendo en Chile se pactan en UF. Aprende cómo calcular el reajuste anual, qué dice la ley y cómo protegerte como arrendatario o arrendador.',
    date: '2026-03-15',
    readTime: '5 min',
    category: 'Vivienda',
    content: `En Chile es muy común que los contratos de arriendo se pacten en UF (Unidad de Fomento) en vez de pesos. Esto ocurre porque la UF se reajusta según la inflación, protegiendo al arrendador de la pérdida de valor de la renta en el tiempo. Sin embargo, para el arrendatario puede significar que el arriendo suba en pesos aunque no se modifique el contrato.

## ¿Por qué se usan UF en los arriendos?

El arrendador que fija el arriendo en pesos corre el riesgo de que con el paso del tiempo ese monto sea cada vez menos valioso en términos reales debido a la inflación. Al pactarlo en UF, el monto en pesos sube automáticamente con la inflación, manteniendo el poder adquisitivo del arriendo. Para el arrendatario, pagar en UF significa que el monto en pesos puede variar cada mes, aunque ligeramente.

## Cómo calcular el arriendo en pesos cada mes

El arriendo en pesos se calcula multiplicando el monto en UF por el valor de la UF del día de pago. Por ejemplo, si el arriendo es de 15 UF y la UF ese mes vale $39.000, pagarás $585.000. Si el mes siguiente la UF vale $39.100, pagarás $586.500.

El valor de la UF varía cada día y puedes consultarlo en el sitio del Banco Central o usando nuestra calculadora UF que se actualiza en tiempo real.

## El reajuste anual del arriendo

Muchos contratos de arriendo en pesos incluyen una cláusula de reajuste anual en base a la variación de la UF o del IPC. Esto es distinto a pactar el arriendo directamente en UF. En este caso, el arriendo sube una vez al año según la variación acumulada de la UF en los 12 meses anteriores.

Por ejemplo, si el arriendo es $500.000 y la UF subió 4,5% en el año, el nuevo arriendo sería $500.000 × 1,045 = $522.500. Este reajuste está permitido por la ley siempre que esté estipulado en el contrato.

## Lo que dice la Ley de Arriendo

La Ley N°18.101 sobre Arrendamiento de Predios Urbanos regula los contratos de arriendo en Chile. No existe una norma que prohíba pactar en UF. Sí establece que los aumentos de renta que no estén previamente acordados en el contrato deben notificarse con al menos dos meses de anticipación. El contrato puede ser indefinido o por plazo fijo, y el arrendatario tiene derecho a rescindir con un mes de aviso.

## Derechos del arrendatario en Chile

Como arrendatario tienes derecho a recibir una factura o boleta de arriendo mensual, a que se respeten los plazos de restitución del inmueble en caso de término de contrato, y a que no se te aumenten los arriendos arbitrariamente fuera de lo pactado. Si el arrendador quiere recuperar el inmueble, debe hacerlo mediante un proceso judicial de desahucio, que en Chile puede tomar varios meses.

Antes de firmar un contrato de arriendo en UF, usa nuestra calculadora UF para entender exactamente cuánto estás comprometiendo en pesos según el valor actual de la UF y proyectar cómo podría variar en los próximos meses.`,
  },

  'finanzas-personales-chile-2026': {
    title: 'Finanzas personales en Chile 2026: guía para empezar desde cero',
    description: 'Presupuesto, ahorro, deudas e inversión: los cuatro pilares de las finanzas personales con contexto chileno. Ideal para quienes parten desde cero.',
    date: '2026-03-01',
    readTime: '8 min',
    category: 'Finanzas',
    content: `Tener finanzas personales ordenadas no requiere ser experto en economía ni ganar un sueldo millonario. Requiere conocer algunos principios básicos y aplicarlos consistentemente. Esta guía te explica los cuatro pilares fundamentales con ejemplos y herramientas concretas para el contexto chileno en 2026.

## Pilar 1: El presupuesto mensual

El primer paso es saber con exactitud cuánto ganas y cuánto gastas. Sin este mapa no puedes tomar decisiones financieras informadas. Una técnica popular es la regla 50-30-20: destina el 50% de tu sueldo líquido a necesidades (arriendo, alimentación, transporte, cuentas básicas), el 30% a deseos (salidas, entretenimiento, ropa no esencial), y el 20% al ahorro e inversión.

Para un sueldo líquido de $800.000 en Chile: $400.000 para necesidades, $240.000 para gastos personales y $160.000 para ahorro. Si tu arriendo ya consume más del 40% de tu sueldo, el presupuesto requiere ajustes en las otras categorías.

## Pilar 2: El fondo de emergencia

Antes de invertir o pagar deudas extra, construye un fondo de emergencia. Este debe cubrir entre 3 y 6 meses de gastos esenciales y mantenerse en una cuenta de ahorro de fácil acceso, no invertido en instrumentos que puedan bajar de valor en el momento que más los necesitas.

En Chile, las cuentas de ahorro en bancos o las cuentas remuneradas de fintech ofrecen tasas de interés de 4-6% anual con liquidez inmediata, lo que las hace ideales para el fondo de emergencia. Este fondo te protege ante imprevistos como la pérdida del trabajo, una enfermedad o una reparación urgente, sin necesidad de endeudarte.

## Pilar 3: El manejo de las deudas

No todas las deudas son iguales. Las deudas de consumo como tarjetas de crédito y créditos del retail chileno suelen cobrar tasas de interés de 20-40% anual, lo que las hace muy caras. Un crédito hipotecario a 4,5% anual es una deuda productiva que te permite acceder a un bien que se valoriza. La diferencia es fundamental.

La estrategia del avalanche recomienda pagar primero las deudas con mayor tasa de interés, minimizando el costo total. Primero paga el mínimo de todas las deudas y destina el excedente a la de mayor tasa. La estrategia snowball, en cambio, recomienda pagar primero la deuda más pequeña para ganar motivación. Ambas funcionan, la elección depende de tu perfil psicológico.

En Chile, el Servicio Nacional del Consumidor (SERNAC) y la Comisión para el Mercado Financiero (CMF) tienen herramientas para comparar tasas de créditos y conocer tus derechos como deudor. Antes de contratar cualquier crédito, consulta la Tasa Máxima Convencional publicada por la CMF.

## Pilar 4: El ahorro e inversión

Una vez que tienes presupuesto, fondo de emergencia y deudas controladas, el siguiente paso es hacer crecer tu dinero. En Chile tienes varias opciones según tu horizonte de tiempo y tolerancia al riesgo.

Para el corto plazo (menos de 1 año), los depósitos a plazo de bancos chilenos ofrecen actualmente entre 5-7% anual con bajo riesgo. Los fondos mutuos de renta fija son otra opción con mayor liquidez.

Para el mediano plazo (1-5 años), los fondos mutuos balanceados o los ETF a través de corredoras como Bci Corredor de Bolsa o Fintual ofrecen exposición a renta variable con diversificación. Fintual, la plataforma de inversión más popular entre jóvenes chilenos, permite invertir desde $1.000 con diferentes perfiles de riesgo.

Para el largo plazo (más de 10 años), el APV (Ahorro Previsional Voluntario) con bonificación estatal del Régimen A es una de las mejores opciones disponibles en Chile, especialmente para quienes buscan mejorar su pensión y reducir impuestos simultáneamente.

## Herramientas gratuitas para tus finanzas en Chile

Nuestras calculadoras gratuitas te ayudan a tomar mejores decisiones financieras. Con la calculadora de sueldo líquido sabes exactamente cuánto recibirás cada mes. Con la calculadora AFP proyectas tu pensión futura y compares AFP. Con la calculadora de interés compuesto visualizas cómo crecer tus ahorros en el tiempo. Con la calculadora de crédito hipotecario evalúas si estás en condiciones de comprar una vivienda. Con la calculadora UF entiendes contratos y créditos denominados en esta unidad.

Empezar con finanzas personales no requiere un gran capital inicial. Requiere consistencia, información correcta y usar las herramientas disponibles. El mejor momento para empezar fue ayer, el segundo mejor momento es hoy.`,
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
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function renderContent(content: string) {
  return content.trim().split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-xl font-bold text-white mt-10 mb-4 leading-snug">
          {block.replace('## ', '')}
        </h2>
      )
    }
    const html = block
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-200 font-semibold">$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-indigo-400 hover:text-indigo-300 underline transition-colors">$1</a>')
    return (
      <p key={i} className="text-slate-400 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: html }} />
    )
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8">
          ← Volver al blog
        </Link>

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
          <p className="text-slate-400 text-lg leading-relaxed">{post.description}</p>
        </div>

        <AdSlot id="5678901234" className="mb-8" />

        <article className="space-y-0">
          {renderContent(post.content)}
        </article>

        <AdSlot id="6789012345" className="mt-10" />

        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <h3 className="text-white font-semibold mb-4">Herramientas relacionadas</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/sueldo-liquido', label: 'Calculadora Sueldo Líquido' },
              { href: '/afp', label: 'Calculadora AFP' },
              { href: '/uf', label: 'Calculadora UF' },
              { href: '/credito-hipotecario', label: 'Calculadora Hipotecario' },
              { href: '/finiquito', label: 'Calculadora Finiquito' },
              { href: '/interes-compuesto', label: 'Interés Compuesto' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2 rounded-xl border border-indigo-500/20 text-indigo-400 text-sm hover:border-indigo-400/40 hover:text-indigo-300 transition-all">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
