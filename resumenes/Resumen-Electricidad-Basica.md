# 📘 Resumen — Electricidad Básica y Componentes (ITCA / Ediciones Morcansa)

> Resumen de la **primera parte** del manual (págs. 1–68): fundamentos de electricidad, magnetismo, instrumentos de medición, baterías, relés, conductores/aislantes y semiconductores. Complementa al documento de Encendido, Arranque y Alternador.

---

## ⚛️ 1. INTRODUCCIÓN A LA ELECTRICIDAD (págs. 1–5)

**Materia:** todo lo tangible; existe en estado sólido, líquido o gaseoso. La electricidad no se percibe por sí misma, solo por sus efectos.

**Cambios de estado:** vaporización, condensación, licuación, fusión, solidificación, volatilización y sublimación (absorben o ceden calor).

**Estructura de la materia:**
- **Molécula** → menor porción que conserva las propiedades del cuerpo.
- **Átomo** → formado por **protones** (+), **electrones** (–) y **neutrones** (equilibrio). El núcleo concentra casi toda la masa.
- **Ion:** átomo desequilibrado — **negativo** (exceso de electrones) o **positivo** (exceso de protones).
- **Corriente eléctrica:** flujo de electrones desde un potencial negativo (–) hacia uno positivo (+).

**Conductores vs. aislantes:**
- **Conductores:** cobre, plata, oro, aluminio, hierro, níquel, estaño, plomo.
- **Aislantes:** porcelana, vidrio, parafina, ebonita, goma, baquelita, mármol, fibra.
- El agua destilada es aislante, pero con sales o ácido se vuelve conductora.

---

## 🔌 2. MAGNITUDES Y TIPOS DE CORRIENTE (págs. 6–9)

| Magnitud | Símbolo | Unidad | Definición |
|---|---|---|---|
| **Intensidad** | I | Amperio (A) | Cantidad de electrones que circulan por un conductor en 1 segundo. |
| **Tensión / d.d.p.** | E, U, V | Voltio (V) | Fuerza que impulsa la circulación de corriente. |
| **Resistencia** | R | Ohm (Ω) | Oposición que presentan los cuerpos al paso de la corriente. |

**Tipos de corriente:**
- **Continua (CC):** flujo en una sola dirección, valor fijo (ej. batería). En la gráfica V-t es una línea recta.
- **Alterna (CA):** los electrones oscilan cambiando de sentido; onda senoidal caracterizada por amplitud, frecuencia y período.

**Resistividad:** resistencia de un material de 1 m de largo y 1 mm² de sección (a 15 °C). Menor valor = mejor conductor.
- Plata 0,016 · Cobre 0,017 · Aluminio 0,27 · Hierro 0,13 · Nicrom 1,2.
- La resistencia aumenta con la longitud y disminuye con la sección.

**Coeficiente de temperatura:**
- **Positivo (PTC):** al subir la temperatura, sube la resistencia (metales).
- **Negativo (NTC):** al subir la temperatura, baja la resistencia (aislantes/semiconductores).

**Múltiplos:** Mega (M) = 1.000.000 · Kilo (K) = 1.000 · mili (m) = 0,001 · micro (µ) = 0,000001.

---

## ➗ 3. ASOCIACIÓN DE RESISTENCIAS Y LEYES (págs. 10–26)

**Asociaciones:**
- **Serie:** misma corriente por todas. `Rt = R1 + R2 + … + Rn`. La resistencia total es la suma.
- **Paralelo:** varios caminos para la corriente. La resistencia total es **siempre menor** que la más chica. Si un ramal falla, los demás siguen funcionando.
- **Mixta (serie-paralelo):** se resuelve por equivalencias parciales hasta reducir el circuito.

**Código de colores de resistencias:** franjas que indican cifras, multiplicador y tolerancia (dorada/plateada a la derecha).

**Ley de Ohm:** *"La intensidad es directamente proporcional a la tensión e inversamente proporcional a la resistencia."*
- `I = V / R` · `V = I × R` · `R = V / I`

**Potencia eléctrica:** `P = V × I` (watts).
- Ejemplo: motor de arranque 12 V × 150 A = 1800 W.
- Conversión: **1 HP = 746 W**.

**Leyes de Kirchhoff:**
- **1ª (nudos):** la suma de corrientes entrantes = suma de corrientes salientes.
- **2ª (mallas):** la suma de caídas de tensión parciales en serie = tensión aplicada. `E = E1 + E2 + E3`.

---

## 🧲 4. MAGNETISMO Y ELECTROMAGNETISMO (págs. 27–29)

- **Magnetismo:** propiedad por la que los materiales se atraen o repelen. Los **ferromagnéticos** mantienen alineados sus momentos magnéticos.
- **Polaridad:** polos iguales se repelen (N-N, S-S); opuestos se atraen (N-S).
- **Campo magnético:** representado por líneas de flujo que salen del polo norte y entran por el sur; no se cortan ni se cruzan.
- **Campo generado por corriente:** toda corriente en un conductor crea un campo magnético (regla del tirabuzón).
- **Electroimán:** núcleo de hierro + bobina; se magnetiza al pasar corriente. Base de bobinas de encendido, solenoides y relés.
- **Inducción electromagnética:** el movimiento relativo entre conductor y campo magnético induce una d.d.p. Es el principio del **alternador**.

---

## 📏 5. INSTRUMENTOS DE MEDICIÓN (págs. 30–34)

| Instrumento | Mide | Conexión | Característica |
|---|---|---|---|
| **Óhmetro** | Resistencia (Ω) | En paralelo (circuito sin tensión) | Aplica un voltaje conocido y mide la corriente. Precisión con 4 terminales (contactos Kelvin). |
| **Voltímetro** | Tensión (V) | En **paralelo** | Alta resistencia interna (bobina de hilo fino, muchas espiras) para no consumir. |
| **Amperímetro** | Corriente (A) | En **serie** | Baja resistencia interna (hilo grueso, pocas espiras). Usa **shunt** para medir corrientes altas. |
| **Capacímetro** | Capacidad (F) | — | Mide condensadores (pF a µF); útil para detectar electrolíticos fallados. |
| **Pinza amperométrica** | Corriente (A) | Abraza el cable | Mide sin abrir el circuito, por el campo magnético. Segura y práctica. |
| **Analizador de baterías** | Estado de batería | En paralelo | Simula el consumo de arranque y mide la caída de tensión. |

---

## 🔋 6. ACUMULADORES / BATERÍAS (págs. 34–45)

**Tipos:**
- **Primarias** (no recargables): carbón-zinc, litio, alcalinas, mercurio.
- **Secundarias** (recargables): **plomo-ácido**, Ni-Cd, Ni-Mh, ion-litio, plata-zinc.

**Elementos de la batería plomo-ácido:**
- **Rejillas:** aleación plomo-antimonio (rigidez y resistencia a la corrosión).
- **Placas positivas:** peróxido de plomo (PbO₂), color café oscuro.
- **Placas negativas:** plomo esponjoso (Pb).
- **Separadores:** hojas porosas aislantes que evitan cortocircuito entre placas.
- **Electrolito:** ácido sulfúrico (SO₄H₂) + agua (H₂O). ~35% ácido; densidad **1,265 gr/cm³** a plena carga.
- Cada celda cargada = **2,1 V**. Batería de 12 V = 6 celdas; de 6 V = 3 celdas.

**Funcionamiento:**
- **Descarga:** el ácido reacciona con las placas formando **sulfato de plomo**; el electrolito se debilita (más agua, menos ácido) → baja la densidad.
- **Carga:** proceso inverso; el sulfato vuelve al electrolito → sube la densidad. Se desprenden **hidrógeno y oxígeno** (mezcla explosiva → evitar chispas/llamas).

**Densímetro** (mide la carga por densidad):

| Densidad (gr/cm³) | Estado de carga |
|---|---|
| 1,265 | 100% |
| 1,225 | 75% |
| 1,190 | 50% |
| 1,155 | 25% |
| 1,120 | Descargada |

- **Corrección por temperatura:** ±0,004 gr/cm³ por cada 5,5 °C respecto a 25 °C.
- **Carga:** intensidad = capacidad nominal ÷ 20. Batería cargada cuando la densidad deja de aumentar.

**Factores que acortan la vida:**
- **Sobrecarga:** corrosión de rejillas, desprendimiento de material activo, pandeo de placas.
- **Carga insuficiente:** sulfatación cristalina irreversible; riesgo de congelarse.
- **Falta de agua:** reponer al bajar el nivel de electrolito.

**Baterías de libre mantenimiento:** plomo-calcio, calcio-plata, gel. Muchas traen **visor de control** (verde = carga OK, negro = requiere carga).

**Especificaciones marcadas:**
- **Tensión nominal:** 12 V (real ~12,8 V).
- **Capacidad (Ah):** ej. 60 Ah = 6 A durante 10 h.
- **CCA (Cold Cranking Amperes):** corriente instantánea de arranque (ej. 650 A hasta caer a 10,5 V).

> La batería es un **reservorio** para el arranque y picos de consumo; el **alternador** abastece el resto y la recarga.

---

## 🔁 7. RELÉS (págs. 46–49)

**Definición:** interruptor electromecánico accionado por un electroimán; un circuito de baja potencia controla otro de alta potencia (funciona como amplificador). Inventado por Joseph Henry (1835).

**Utilidad en el auto:** permite manejar cargas de alto consumo (luces altas, claxon, electroventilador) con un circuito de control chico → cables más finos, menos peso, menos riesgo de cortocircuito.

**Tipos de contacto:**
- **Normal Abierto (N.A.):** conecta al activarse el relé.
- **Normal Cerrado (N.C.):** desconecta al activarse.
- **Inversor:** un N.A. + un N.C. con terminal común.

**Ventaja principal:** separación eléctrica total entre el circuito de control (bobina) y el circuito controlado (contactos).

**Nomenclatura de terminales (relé universal):**
- **30** = Positivo directo (batería) · **87 / 87a** = Salida de positivo · **85 / 86** = Bobina (+/–).
- Variantes: **taquimétrico**, **inversor** y **doble/multifunción**.

---

## 🧵 8. CONDUCTORES, AISLANTES Y FUSIBLES (págs. 50–56)

**Conductores:** metales con 1–3 electrones en la última órbita (cobre, aluminio, plata, oro). Los cables se hacen de cobre o aluminio (más baratos que plata/oro).
- **Cables:** unifilares (un conductor) o multifilares (varios hilos trenzados).

**Calibres:** del N° 0 (más grueso) al N° 20 (más fino). Mayor diámetro = más corriente.
- Cables de batería 12 V: calibre 4–6 · Luces: calibre 16–18.

**Aislantes / dieléctricos:** aire, porcelana, cristal, mica, ebonita, resinas, plásticos. Tienen 5–7 electrones fuertemente ligados. El cableado automotriz se codifica por colores/números.
- **Aislación:** empalmes con terminales, soldadura de estaño con núcleo de resina (**nunca de ácido**, es corrosivo), y **tubo termocontraíble**.

**Fusibles:** protegen los circuitos; tipo cuchilla, se funden a un valor predeterminado. Rango 3–30+ A.

**Identificación de fusibles por color:**

| Color | Amperes | Color | Amperes |
|---|---|---|---|
| Violeta | 3 | Azul | 15 |
| Rosa | 4 | Amarillo | 20 |
| Ceniza | 5 | Blanco | 25 |
| Marrón | 7,5 | Verde | 30 |
| Rojo | 10 | Naranja | 40 |

---

## 💠 9. SEMICONDUCTORES (págs. 56–68)

**Definición:** materiales con características intermedias entre conductor y aislante (silicio Si, germanio Ge, selenio Se). Permiten la corriente en un sentido y la bloquean en el otro.
- Primer transistor: germanio, 1947 (Shockley, Brattain, Bardeen — Laboratorios Bell).

**Dopaje:**
- **Tipo N:** corriente transportada por electrones (exceso de electrones).
- **Tipo P:** silicio con impurezas de galio/boro (exceso de "huecos").

### Diodo
- Unión de material P con N. Conduce en **directa** (positivo al ánodo, negativo al cátodo, ~0,6–0,7 V) y bloquea en **inversa**.
- **Usos:** rectificar CA en CC (**alternador**), proteger componentes, bloquear sobretensiones.
- Un alternador usa mínimo **6 diodos** (3 positivos + 3 negativos) para rectificación de onda completa.

### Condensadores / Capacitores
- Dos armaduras conductoras separadas por un **dieléctrico**; almacenan carga eléctrica.
- **Capacidad:** aumenta con la superficie de placas y disminuye con la distancia entre ellas.
- **Unidad:** Faradio (F); en la práctica µF, nF, pF.
- **Tipos:** de papel, de mica, cerámicos, de poliéster, y **electrolíticos** (de aluminio o tántalo, polarizados, gran capacidad).

**Constantes dieléctricas:** Aire 1 · Agua 80 · Mármol/Mica 8 · Papel parafinado 6 · Porcelana 4.

### Transistor
- Semiconductor de **3 terminales** (base, colector, emisor); funciona como **amplificador** o **interruptor**. Una corriente pequeña en la base controla una corriente mayor.
- **Tipos:** **bipolares** (NPN y PNP) y de **efecto de campo** (JFET, MOSFET, MISFET).
- **Símbolo:** la flecha (en el emisor) apunta hacia el material N.
- **Funcionamiento:** conduce con positivo en la base y negativo en el emisor; siempre con resistencia de protección.

**Prueba de transistor bipolar (con multímetro en posición diodo):** equivale a medir **dos diodos enfrentados**.
- **BASE-EMISOR:** conduce · **BASE-COLECTOR:** conduce · **COLECTOR-EMISOR:** NO conduce (en ningún sentido).
