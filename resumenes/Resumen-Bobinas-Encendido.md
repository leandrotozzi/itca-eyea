# 🔌 Resumen — Bobinas de Encendido y Módulos

> Resumen técnico elaborado a partir de la documentación de **BERU** (Información Técnica n.º 07), catálogos **Bosch** (bobinas de resina asfáltica), **Indiel/Prestolite** (módulos de ignición) y material sobre bobinas modernas y sus pruebas. Complementa los resúmenes del sistema de encendido.

---

## 1. Qué es y para qué sirve una bobina de encendido

La bobina es el componente que **eleva los 12 V de la batería hasta decenas de miles de volts** para que la chispa salte entre los electrodos de la bujía. Funciona según el **principio del transformador** (autotransformador) y se basa en la **ley de inducción**: todo cambio de corriente en una bobina induce una tensión.

**Componentes básicos:**
- **Bobinado primario:** cable de cobre grueso, ~100 a 250 vueltas (≈ 0,75 mm²).
- **Bobinado secundario:** cable de cobre fino, ~10.000 a 25.000 vueltas (≈ 0,063 mm²).
- **Núcleo de hierro** laminado (chapas finas de acero al silicio) que concentra el campo magnético.
- **Carcasa con material aislante** (resina epoxi, resina asfáltica o, en las antiguas, baño de aceite).

### El proceso, paso a paso
1. **Carga (almacenamiento de energía):** se cierra el circuito primario → circula corriente → se crea un campo magnético que **almacena energía**. (Primario cerrado, secundario abierto.)
2. **Corte:** en el momento del encendido, la etapa final **corta bruscamente** la corriente primaria.
3. **Inducción:** el campo magnético se colapsa de golpe → induce alta tensión, que se multiplica por la relación de vueltas secundario/primario.
4. **Chispa:** al alcanzarse la tensión de encendido, se produce la **descarga disruptiva** en la bujía; la energía almacenada se descarga en el canal de la chispa (primario abierto, secundario cerrado) y enciende la mezcla.

> 💡 **La chispa nace del CORTE de corriente, no de la carga.** El colapso instantáneo del campo magnético es lo que genera la alta tensión.

**La tensión máxima depende de:** la relación de vueltas secundario/primario, la calidad del núcleo de hierro y el campo magnético.

---

## 2. Valores y especificaciones típicas (BERU)

| Parámetro | Símbolo | Valor típico |
|---|---|---|
| Corriente primaria | I₁ | **6 a 20 A** |
| Tiempo de carga | T₁ | 1,5 a 4,0 ms |
| Tensión secundaria | U₂ | **25 a 45 kV** |
| Duración de la chispa | TFu | 1,3 a 2,0 ms |
| Energía de la chispa | WFu | 10 a 60 mJ (motores normales), hasta 140–200 mJ (inyección directa) |
| Corriente de la chispa | IFu | 80 a 115 mA |
| **Resistencia primario** | R₁ | **0,3 a 0,6 Ω** |
| **Resistencia secundario** | R₂ | **5 a 20 kΩ** |
| Vueltas primario | N₁ | 100 a 250 |
| Vueltas secundario | N₂ | 10.000 a 25.000 |

**Requisitos de trabajo de una bobina moderna:**
- Temperatura: **-40 °C a +180 °C**
- Tensión secundaria: hasta **45.000 V**
- Vibraciones: hasta **55 g**
- Resistencia a gasolina, aceite y líquido de frenos.

> ⚠️ **Seguridad:** con energías de chispa de hasta 200 mJ y tensiones de 45 kV, tocar estas piezas en funcionamiento puede provocar **lesiones mortales**.

### ¿Cuántas chispas necesita un motor?
**Número de chispas por minuto** = (rpm × nº de cilindros) ÷ 2
- Ejemplo: motor de 4 cilindros a 3.000 rpm → (3.000 × 4) ÷ 2 = **6.000 chispas/min**.
- En 30.000 km ≈ **45.000.000 de chispas** por bujía.

---

## 3. Tipos de bobinas de encendido (evolución)

| Tipo | Descripción | Uso |
|---|---|---|
| **De cartucho (tradicional)** | Una sola bobina central; el distribuidor reparte mecánicamente la chispa. Distribución **giratoria** de alta tensión, control por platino. | Autos clásicos/antiguos. |
| **Con distribuidor + etapa final integrada** | Bobina con electrónica de potencia incorporada, para vehículos con distribuidor mecánico. | Transición electrónica. |
| **De chispa doble (chispa perdida)** | Alimenta **2 bujías** a la vez (pares de trabajo). Genera 2 chispas por giro de cigüeñal. **Solo motores con nº PAR de cilindros.** No necesita sensor de árbol de levas. | 4 cil → 2 bobinas; 6 cil → 3 bobinas. |
| **Regletas (casetes/módulos)** | Varias bobinas de chispa simple en una carcasa común. Menos cables, motor más ordenado. | Motores de 3 y 4 cilindros. |
| **De chispa simple (COP / tipo lápiz / varilla / con conector)** | Una bobina por bujía, montada **directamente sobre ella**. Sin cables de alta. Genera una chispa por carrera de explosión. **Requiere sensor de árbol de levas** para sincronizar. | Motores modernos (pares e impares). |
| **De doble bobina (BERU)** | Dos bobinas en la misma carcasa por cilindro; permite modo **multichispa**, ajuste variable de energía y menor retardo de encendido. Versiones de 12 V y de 40–50 V. | Última generación (mezclas pobres, EGR alto). |

### Ventajas del COP / chispa simple
- **Menos pérdidas de tensión** de todos los sistemas (sin cables de alta).
- Mayor rango de ajuste del ángulo de encendido.
- Permite **monitoreo de fallos de encendido** (primario y secundario) → diagnóstico por OBD.

### Detalle técnico: la chispa de activación
Al **cargar** la bobina (cerrar el primario), el campo magnético creciente induce una pequeña tensión no deseada (~1,5 kV) en el secundario que podría hacer saltar una "chispa de activación" e inflamar la mezcla a destiempo. Se suprime así según el sistema:
- **Distribución giratoria:** la distancia rotor-tapa la suprime automáticamente.
- **Chispa doble:** las 2 bujías en serie reparten la tensión (1,5 kV ÷ 2 = 0,75 kV, insuficiente para chispa).
- **Chispa simple:** un **diodo de alta tensión** en el secundario bloquea la descarga de activación. ⚠️ **No se puede invertir la polaridad de los terminales 1 y 15**, o se destruye el diodo.

---

## 4. Ventajas de la etapa final integrada

Cuando la electrónica de potencia se integró dentro de la bobina (en lugar de módulo aparte), se ganó:
- Posibilidades de **diagnóstico** y señal de corriente iónica.
- **Supresión de interferencias**, corte de potencia y **limitación de corriente**.
- **Corte térmico** e identificación de cortocircuitos.
- **Estabilización de alta tensión**.

**Concepto de "tiempo de cierre":**
- En encendido por **contacto (platino):** es el tiempo en que el interruptor está **cerrado**.
- En encendido **electrónico:** es el tiempo en que la **corriente primaria está activada**.

---

## 5. Bobinas de resina asfáltica (Bosch)

Bosch fabrica bobinas con **resina asfáltica** (sólida) desde 1974, en reemplazo de las de **aceite**. Ventajas de la resina frente al aceite:
- Mejor aislante sólido y mayor **rigidez dieléctrica** → mayor potencia de encendido.
- Mantiene los enrollamientos fijos → evita cortocircuitos internos.
- **Sin riesgo de goteos ni explosiones** (las de aceite pueden gotear si se montan con la salida de alta hacia abajo, y a alta temperatura el aceite puede hervir y aumentar la presión interna).
- **Funciona en cualquier posición** y soporta altas temperaturas.

> Los motores modernos (más RPM y temperatura) y el encendido electrónico exigen **más de 26.000 V**, que las bobinas de aceite no garantizan en todo el régimen → fallas de encendido.

### Tabla de datos técnicos de bobinas Bosch asfálticas (ejemplos)

| Referencia | Tipo | Alimentación | Potencia | Primario | Secundario | Pre-resistor |
|---|---|---|---|---|---|---|
| 9 220 081 039 | E-12V | 12 V | 24.000 V | 3,1–4,2 Ω | 4,8–8,2 kΩ | — |
| 9 220 081 054 | K-12V | 12 V | 26.000 V | 2,9–3,8 Ω | 6,5–10,8 kΩ | — |
| 9 220 081 067 | KW-12V | 7 a 10 V | 28.000 V | 1,2–1,6 Ω | 5,2–8,8 kΩ | **0,8 Ω** |
| 9 220 081 091 | KW-12V | 12 V | 28.000 V | 0,9–1,5 Ω | 4,5–7,0 kΩ | — (sin resistor) |
| 9 220 081 097 | KW-12V | 12 V | 34.000 V | 0,9–1,5 Ω | 4,4–7,0 kΩ | — (sin resistor) |

**Sobre el resistor (balastro) externo:**
- Su finalidad es **bajar la tensión de alimentación de la bobina y reducir la corriente**, protegiendo el platino y la propia bobina.
- Puede ser de **porcelana** o un **hilo/cable resistivo** (a veces incorporado en el cable de la llave de contacto).
- Las bobinas que lo necesitan trabajan con **7 a 10 V**; las que no, con **12 V**.
- ⚠️ **Bosch NO fabrica bobinas con resistor incorporado.** Consultar siempre el adhesivo o tabla de aplicaciones: usar resistor donde no corresponde **baja la potencia de chispa**; no usarlo donde sí corresponde **recalienta la bobina**.

---

## 6. Módulos de ignición (Indiel / Prestolite)

El **módulo de ignición** es la etapa de potencia electrónica que reemplaza al platino: recibe la señal del captor y **conmuta la corriente del primario** de la bobina.
- Es una pieza intercambiable con **tablas de referencia cruzada** entre fabricantes (Bosch, Marelli, Lucas, Delco, Hitachi, etc.) según marca y modelo de vehículo.
- Existe un **probador de módulos (PPM 03)** que detecta problemas de **baja señal a 500 RPM** y sirve para módulos con variación de RPM.

> 💡 Dato de diagnóstico: muchas fallas intermitentes de encendido en frío o a bajas RPM se deben a un módulo que entrega **señal débil a bajas revoluciones** — por eso el probador chequea justamente a 500 RPM.

---

## 7. Diagnóstico y pruebas de bobinas

### Pruebas básicas con multímetro
1. **Resistencia del primario:** entre terminales de baja tensión (15 y 1). Valor típico según bobina (ej. 0,3–0,6 Ω en modernas; 0,5 kΩ ±0,05 en algunas de chispa doble como la Fiat ZS 283).
2. **Resistencia del secundario:** en la(s) salida(s) de alta tensión. Típico 5–20 kΩ (ej. 7,33 kΩ ±0,5 en la ZS 283; 4,0–6,0 kΩ en la doble VW/Audi entre cilindros 1+4 / 2+3).
3. **Comparar siempre con la especificación del fabricante**; ante anomalía, cambiar la bobina.

### Diagnóstico con lámpara estroboscópica
Con el motor en marcha, conectada a cada cilindro: si la **frecuencia de intermitencia es irregular** en uno o más cilindros, hay falla en la bobina o el sistema de ese cilindro.

### Secuencia de diagnóstico recomendada
1. Examinar las **bujías** (cambiarlas si es necesario).
2. Probar la **resistencia de los cables** de encendido con multímetro.
3. Probar las **resistencias primaria y secundaria** de la bobina contra especificación.
4. En bobinas de chispa doble: con contacto puesto y conector de 4 polos retirado (el folleto BERU lo llama "bujía"), entre los contactos debe haber al menos la tensión de batería (~11,5 V).

---

## 8. Fallas comunes y causas (consejos de taller)

Las bobinas modernas están diseñadas para durar toda la vida del auto; cuando fallan, **muchas veces la causa no es la bobina sino su entorno**:

- **Suciedad y humedad:** agua, sal de la ruta o **lavado con hidrolavadora** destruyen juntas y corroen contactos (las bobinas suelen estar en zonas expuestas).
- **Carga térmica extrema:** bobinas cerca del catalizador, colector de escape o tipo receptáculo (sin refrigeración) pueden fallar incluso siendo de buena calidad.
- **Conectores y cables de bujía defectuosos:** tomas de baja calidad, agrietadas o con aire → descargas disruptivas y fallos intermitentes.
- **Mala instalación:** par de apriete incorrecto (ej. 15 N·m en vez de 6 N·m) agrieta el cuerpo; herramienta de extracción incorrecta parte la bobina en dos.
- **Falta de grasa en el conector de bujía:** provoca fusión bobina-bujía y descargas disruptivas en el cuello de la bujía. Siempre aplicar **grasa para conectores/bujías** y revisar/cambiar el conector al cambiar bujías.

### Original vs. falsificación
Las copias baratas usan materiales de baja calidad: soldaduras deficientes, cuerpos extraños, cable de alta demasiado cerca del núcleo, carcasa rellena con "grava" en lugar de resina (deja burbujas de aire que se **ionizan** y terminan en cortocircuito o descarga disruptiva). No igualan las propiedades eléctricas ni la resistencia térmica de la original → fallos precoces y daños secundarios.

---

## 9. Nomenclatura de terminales y señales de bobinas modernas

Las bobinas modernas se clasifican por su **cantidad de pines** (de 1 a 7) y por su tipo constructivo. El significado de los terminales/señales más comunes:

| Sigla | Significado |
|---|---|
| **B+** | Positivo de batería |
| **B− / GND** | Negativo de batería / masa |
| **+ / −** | Positivo / Negativo del sensor Hall |
| **+ (alim.) / − (alim.)** | Alimentación del sensor Hall |
| **HALL INPUT** | Entrada de señal del sensor Hall |
| **C (COIL) / C1, C2…** | Señal del módulo de ignición hacia el **primario** de la bobina |
| **P+ / P−** | Señal (positiva/negativa) de la bobina impulsora (captor inductivo) hacia el módulo |
| **IN** | Entrada de señal de la ECU o del sensor |
| **S.OUT** | Salida de señal hacia la ECU (MCE) |
| **TACO** | Salida de señal hacia el tacómetro |
| **EST** (*Electronic Spark Timing*) | Pulso de control de **avance de encendido** hacia la ECU |
| **REF** | Señal de **RPM** del módulo hacia la ECU |
| **BY PASS** | Línea de control del sistema **HEI** (*High Energy Ignition*), ECU → módulo |
| **N/C** | No conectado |

**Clasificación constructiva según el catálogo (por cantidad de pines y tipo):**
- **Con módulo integrado:** la etapa de potencia va dentro de la bobina (recibe la señal de la ECU y conmuta ella misma el primario).
- **Sin módulo:** bobina "pasiva", conmutada por un módulo externo o la ECU.
- **Doble / chispa perdida:** 2 secundarios / doble chispa, típicamente **3 pines**.
- **Tipo lápiz / COP:** "1 pieza por cilindro"; se distinguen por la bota de la bujía: **long boot** (bota larga) o **short boot** (bota corta).
- **Casete / regleta:** bobinas de **6 o 7 pines** que alimentan varios cilindros.
- En algunos motores se distingue posición: **delantera** vs. **trasera**.

## 10. Conexión e identificación de terminales (HELLAMEX)

**Función (repaso):** la ECU efectúa el **corte del circuito primario**; con eso se eleva el voltaje en el secundario y se alimenta la bujía.

**Significado de los terminales según el conector:**
| Terminal | Significado |
|---|---|
| **+** | Alimentación (positivo de batería) |
| **−** | Masa / negativo **pulsante** (el lado que la ECU corta a masa) |
| **S** | Según el modelo: terminal de **excitación/mando** (se puentea a positivo) *o* señal de **referencia** que NO se conecta en la prueba de banco |
| **G / GND** | Masa / tierra (al negativo de batería) |
| **EST** | Terminal de mando (Electronic Spark Timing) — se excita para disparar |
| **REF** | Referencia; NO se conecta en la prueba de banco |
| **A, B, C, D / 1, 2, 3, 4** | Torretas de salida (en bobinas de varias salidas) |

**Cantidad de pines según el tipo:**
- **2 pines (+ / −):** bobina individual COP con torreta central (la mayoría).
- **3 pines:** puede ser COP con excitación (+, S, −) o de **chispa perdida** numerada (un terminal alimenta, otros dos excitan pares de torretas).
- **4, 5, 6-7 pines:** casetes/bobinas múltiples de chispa perdida; cada terminal de excitación dispara **un par de torretas** (dos cilindros complementarios).

> 💡 En una bobina de chispa perdida, al excitar **una sola** terminal se ve el **arco simultáneo en las dos torretas** de sus cilindros complementarios.

## 11. Prueba de banco de la bobina (HELLAMEX)

Es un método simple para probar la bobina (y el módulo) fuera del vehículo, sin osciloscopio.

**Instrumental:** batería (fuente), un **condensador** (que se usa como fuente de pulso/excitación) y una **lámpara de prueba** (o destornillador/bujía) para ver el arco voltaico.

**Procedimiento genérico (COP de 2 pines):**
> ⚠️ La bobina genera más de 40 kV: no tocar la torreta ni el cable de alta mientras se excita, y hacer la prueba solo con el docente.

1. Conectar la **terminal positiva** de la bobina al **positivo de la batería**.
2. Conectar el **cuerpo del condensador al negativo** de la batería y su **otro extremo a la terminal negativa** de la bobina.
3. **Excitar** (chispear las puntas del condensador para generar el pulso que "corta" el primario).
4. Debe saltar **alta tensión en la torreta central**, hacia un cable/punta conectada a tierra.

**Datos prácticos:**
- La distancia de la punta de prueba a la bobina debe ser de **≈ 0,5 cm** (la chispa salta de la torre de la bobina a la punta de la lámpara).
- Conviene **colocar una bujía** para observar más fácil el arco voltaico.
- Las **terminales negativas son "pulsantes"** (es el lado que la ECU corta a masa).

**Prueba del módulo de encendido externo:** se alimenta el módulo, se conecta su salida a un borne de la bobina (el otro borne a positivo), se pone la masa del módulo al negativo y se **excita puenteando sus terminales de mando**; la chispa debe brincar entre la bobina y la lámpara. En algunas aplicaciones, la prueba de la bobina se hace **a través del módulo**.

## 12. Diagnóstico rápido y síntomas (HELLAMEX)

- **Síntomas de falla:** el motor **no arranca** (bobina/módulo sin salida de alta) o **marcha inestable** → falla en el cilindro cuya bobina no trabaja.
- **Diagnóstico en 2 pasos:** (1) comprobar las **alimentaciones en el arnés** (sin falsos contactos, fisuras ni corrosión); (2) hacer la **prueba de banco** al módulo y/o a la bobina.
- **Inspección visual:** que no haya **fisuras ni fugas de electricidad** en el cuerpo; evitar la **humedad**.
