# 📘 Resumen — Manual de Electricidad Automotriz (ITCA / Ediciones Morcansa)

> Resumen de las secciones de **Sistema de Encendido**, **Motor de Arranque** y **Alternador** (págs. 69–132 del manual). Se omite la parte de electricidad básica, baterías y semiconductores.

---

## 🔥 1. SISTEMA DE ENCENDIDO (págs. 69–110)

**Función:** elevar la tensión de la batería (12 V) hasta ~25.000–90.000 V para generar el arco eléctrico (chispa) en la bujía que enciende la mezcla aire-combustible comprimida.

**Está formado por dos circuitos:**
- **Primario (baja tensión):** batería → llave de contacto → bobinado primario → ruptor (platinos) → condensador.
- **Secundario (alta tensión):** bobinado secundario → tapa de distribuidor → rotor → cables → bujías.

### Componentes principales

| Componente | Función clave |
|---|---|
| **Bobina de ignición** | Autotransformador. Primario: 150–250 vueltas (alambre 0,7 mm). Secundario: 15.000–25.000 vueltas (alambre 0,04 mm). Núcleo de hierro laminado para evitar corrientes parásitas. Suele venir en baño de aceite. |
| **Condensador** | Conectado en paralelo con los platinos. Absorbe la corriente de "extra-ruptura" al abrirse los contactos, evitando que se quemen. Capacidad mal calibrada → cráteres/desgaste en los contactos. |
| **Distribuidor** | Dos funciones: interrumpe/cierra el primario, y reparte la alta tensión a cada bujía en el orden correcto. Contiene tapa, rotor, placa ruptora, platinos y leva. |
| **Platinos (contactos ruptores)** | De tungsteno (resistentes al desgaste). Deben estar alineados; mal alineados se sobrecargan y queman. |
| **Leva** | Tantos vértices como cilindros. Abre los platinos. |
| **Bujías** | Roscas de 14/18 mm. Se clasifican en **frías** y **calientes** según el rango térmico (largo de la punta del aislante del electrodo central). |
| **Cables de bujía** | Comunes o **antiparasitarios** (grafitados, 4–6 KΩ), obligatorios con encendido/inyección electrónica. |

### Conceptos operativos
- **Ángulo de contacto (Dwell):** grados en que los platinos permanecen cerrados; tiempo necesario para que el campo magnético del primario alcance su máximo.
- **Luz de platinos:** separación máxima de contactos. Muy grande → adelanta la chispa y reduce el ángulo de contacto; muy chica → los quema. Se calibra con sondas, ajustando el contacto **fijo** (nunca doblar el móvil).
- **Avance al encendido:** la chispa debe adelantarse porque la combustión no es instantánea. Dos mecanismos automáticos:
  - **Avance por vacío** — en función de la depresión del múltiple de admisión (apertura parcial de la mariposa).
  - **Avance centrífugo** — en función de las RPM (contrapesos + resortes).

### Puesta a punto
- **Estática** (motor parado): cilindro N°1 en PMS en compresión, se alinean las marcas de la polea/volante con el avance inicial del fabricante, y con lámpara de prueba se ajusta el punto de apertura del platino.
- **Dinámica** (motor en marcha, ralentí): con **lámpara estroboscópica** en el cable de bujía N°1 se verifica el avance sobre las marcas.
- **Órdenes de encendido:** 3 cil → 1-3-2 · 4 cil → 1-3-4-2 (o 1-2-4-3) · 6 cil → 1-5-3-6-2-4 · 8 cil → varios según diseño.

### Evolución de los sistemas de encendido
1. **Convencional** — con platinos y condensador.
2. **Con balastro/resistencia** — resistencia con coeficiente térmico en serie; da más corriente al primario en alta velocidad. Puenteada durante el arranque.
3. **Transistorizado (ayuda electrónica)** — el transistor conmuta la corriente; los platinos solo manejan la corriente de base (~1 A). Elimina el chisporroteo; ya no hace falta condensador. Usa transistor **Darlington** y diodo zener de protección.
4. **Electrónico inductivo** — rueda dentada (rotor) + bobina captora genera pulsos de tensión alterna que reemplazan al platino.
5. **Efecto Hall** — genera impulsos por tensión de Hall; una pantalla/aletas corta el campo magnético para gobernar el transistor.
6. **Electrónico integral** — sin ruptor y sin avances mecánicos; un calculador electrónico define el avance según RPM y depresión, con captores de posición y temperatura.
7. **CDI (descarga capacitiva)** — energía acumulada en un condensador (hasta 400 V) descargada por un **tiristor**. Chispa muy intensa pero corta (~0,3 ms); alta tensión hasta chispas de 2–3 cm.
8. **DIS (encendido directo, sin distribuidor)** — bobinas cerca o sobre las bujías. Sistema de **chispa perdida** (pares de trabajo: 4 cil → 1-4 y 2-3; 6 cil → 1-6, 2-5, 3-4). Evolución final: bobina integrada a la bujía (>40 KV), sin cables de alta.

### Averías comunes
- **No arranca:** batería descargada, bobina/ruptor/condensador en mal estado, distribuidor mal calado.
- **Pérdida de fuerza / duro para arrancar:** platinos mal ajustados, encendido mal sincronizado, bujías gastadas.
- **Tironeo y explosiones en admisión/escape:** bobina o condensador defectuosos, cables con fugas o cambiados de cilindro.

---

## 🔋 2. MOTOR DE ARRANQUE (págs. 111–120)

**Finalidad:** dar el primer impulso al cigüeñal para iniciar el ciclo del motor. Consume mucha corriente (**~400–500 A**), por eso no debe accionarse en exceso (descarga la batería en minutos).

**Principio (motor serie DC):** al arrancar, con resistencia muy baja, circula gran corriente y se produce el **par máximo** justo al inicio. Al girar aparece la **fuerza contraelectromotriz**, que reduce la corriente y el par a medida que sube la velocidad.
- Relación piñón/corona ≈ **1:10 a 1:15**.

### Tres conjuntos básicos
1. **Solenoide (mando magnético)** — enciende/apaga el motor y engrana/desengrana el piñón. Tres fases:
   - **Activación:** llave en START → corriente por bobinas de activación y retención (terminal 50) → atrae el émbolo, empuja el piñón contra la corona y cierra el contacto principal (terminal 30).
   - **Retención:** contacto principal cerrado; solo la bobina de retención mantiene el émbolo; el inducido gira a alta velocidad.
   - **Retorno:** llave a IGN → se cancelan las fuerzas magnéticas → el resorte devuelve el émbolo y la horquilla retrae el piñón.
2. **Motor de arranque propiamente dicho:**
   - **Bobinas inductoras y masas polares** — crean el campo magnético (por excitación **eléctrica** o por **imanes permanentes**).
   - **Inducido/rotor** — parte giratoria (bobinado + colector de cobre); puede llegar a **30.000 rpm**.
   - **Escobillas** — de polvo sinterizado (carbono + cobre); llevan la corriente al colector.
3. **Impulsor / Bendix** — piñón con estriado helicoidal; menos dientes que el volante para dar la relación de fuerza. Puede llevar **reductor** (coaxial o de ejes paralelos) para aumentar el par cuando la potencia supera 1 kW.

**Excitación eléctrica vs. magnética:** la eléctrica da par de aceleración muy alto (saturación magnética); la de imanes mantiene el flujo constante pero es sensible a desmagnetización (calor, golpes, vibraciones, envejecimiento).

**Verificación de potencia:** arranque en frío, cable de 1 Ω, batería al 70%. El **punto de trabajo** depende del par resistente, RPM mínimas de arranque, tipo de aceite y resistencia interna de la batería.

### Averías
- **No arranca:** escobillas gastadas, contactos oxidados/flojos, bobinados interrumpidos, bornes 30/50 flojos.
- **Ruidos:** montaje incorrecto, bulones flojos, mal centrado, bujes fuera de tolerancia.

---

## ⚡ 3. ALTERNADOR (págs. 121–132)

**Función:** genera electricidad mientras el motor gira, alimenta todos los consumos y **recarga la batería**. Convierte energía mecánica en eléctrica (corriente alterna).

**Requisitos:** tensión continua estable en todo el rango de RPM, cargar aun a ralentí con consumos activos, resistir temperatura/humedad/vibraciones, poco peso y ruido.

**Principio:** a diferencia del generador, aquí **el campo magnético gira** (rotor) y los conductores (estator) quedan fijos. Se genera **corriente alterna trifásica** (tres bobinas a 120°), que luego se rectifica.

**Autoexcitación:** la corriente de excitación inicial la aporta la batería (pre-excitación, limitada por la lámpara testigo); una vez en marcha, el propio alternador se autoalimenta vía rectificación.

### Estructura

| Componente | Descripción |
|---|---|
| **Semi-carcasas** | Soportan todos los elementos y fijan el alternador al block. |
| **Rotor** | Imán giratorio, bobina sobre 6 pares de polos (12 polos); recibe corriente por dos anillos rozantes. Lleva ventiladores a ambos lados. |
| **Estator** | Elemento fijo entre carcasas; 3 pares de bobinas que se unen en el **punto neutro**; genera la CA trifásica. |
| **Puente rectificador** | **6 diodos** de potencia (3 positivos + 3 negativos), dos por fase → rectificación de onda completa. A veces 2 diodos extra para el punto neutro. La batería en paralelo suaviza la ondulación (efecto condensador). |
| **Diodos de excitación** | Trío que deriva corriente para alimentar el bobinado de excitación y carga externa en el **D+** (hasta 1 A). |
| **Regulador de tensión** | Mantiene la salida constante (~**14 V nominal**) sin importar RPM ni carga. Regula la **corriente de excitación** (juego ON/OFF). Compensa por temperatura (más tensión con frío, menos con calor). Hoy lleva el porta-escobillas incorporado. |
| **Ventiladores** | Internos o externos (chapa galvanizada). |
| **Polea de arrastre** | Movida por correa multibanda desde el cigüeñal. Algunas con **embrague unidireccional** para reducir carga en la correa. |
| **Rodamientos** | Dos, uno por soporte. |

**Tipos de regulador:** con transistor → híbridos → **monolíticos** (un solo chip, más fiables); los **polivalentes** señalan tanto falta como exceso de recarga.

### Datos técnicos de referencia
- Tensión nominal: **14 V** · Velocidad máx. continua: 2000 rpm
- Resistencia bobina rotórica: **3,4 Ω** ±10% (20 °C)
- Resistencia estator fase-fase: **0,138 Ω** ±10% (20 °C)
- Diámetro de polea del alternador: 60 mm

### Averías
- **Batería descargada / no arranca:** tornillos flojos, ralentí bajo, borne positivo roto, correa cortada o tensor defectuoso, circuito de excitación interrumpido.
- **Sobretensión:** vida corta de lámparas y batería, arranque difícil.
- **Problemas electrónicos:** cables demasiado largos (B+ y masa deben sumar < 3 m), caídas de tensión por sulfatos.
- **Ruido / desgaste de correa:** rodamientos gastados, poleas desalineadas.
- **Incendio:** cortocircuito de B+ a masa o roce de polea con partes fijas.

---

# ❓ Preguntas y Respuestas

## P1. ¿Qué función cumplen los 3 diodos de excitación del alternador?

El alternador tiene un problema de "huevo o gallina": para generar electricidad, el **rotor** (que es un electroimán) necesita corriente para crear su campo magnético, pero esa corriente la genera el propio alternador. **¿De dónde sale la corriente que alimenta al rotor si el alternador todavía no genera?** Los dos grupos de diodos resuelven esto:

### Los dos grupos de diodos

| Grupo | Cantidad | Función | Salida | Tamaño |
|---|---|---|---|---|
| **Diodos de potencia** | 6 (3+ y 3−) | Rectifican la CA trifásica del estator → CC | Borne **B+** (alimenta el auto y recarga la batería) | Grandes (manejan 60–120 A) |
| **Diodos de excitación** | 3 (el "trío") | Desvían una fracción de la corriente ya rectificada para **alimentar el propio rotor** | Borne **D+** (máx. ~1 A) | Chicos (solo la corriente del rotor) |

En resumen: los 6 grandes alimentan al vehículo, los 3 chicos **realimentan al alternador a sí mismo**. Esto es la **autoexcitación**.

### El ciclo paso a paso
1. **Arranque:** el alternador gira lento y aún no genera. La corriente inicial para excitar el rotor la presta la **batería** (corriente de **pre-excitación**), pasando por la **lámpara testigo de carga** del tablero, que actúa como resistencia limitadora.
2. **Por eso la luz de carga se enciende con el contacto:** hay diferencia de potencial entre la batería (empuja hacia D+) y el alternador (que todavía no genera).
3. **El alternador toma velocidad y genera:** los **3 diodos de excitación** rectifican parte de la corriente y la mandan de vuelta al rotor → el alternador **se autoalimenta** y ya no necesita a la batería.
4. **La luz testigo se apaga:** cuando hay ~14 V en el D+, la tensión se iguala a ambos lados de la lámpara → no circula corriente por ella → se apaga. Una luz que **queda encendida** con el motor en marcha indica falla del alternador.

### Esquema
```
        ESTATOR (genera CA trifásica)
                 │
      ┌──────────┴──────────┐
      │                     │
 6 DIODOS POTENCIA    3 DIODOS EXCITACIÓN
      │                     │
     B+                    D+
      │                     │
  ┌───┴───┐            ┌────┴─────┐
 Batería +          Rotor       Lámpara
 consumos        (excitación)   testigo
 del auto          ~1 A máx.
```

> **Nota:** el trío de diodos de excitación **no es obligatorio**. En los alternadores que no lo tienen, la corriente de excitación la derivan directamente los diodos de potencia. El trío es una solución más "limpia" que separa el circuito de excitación del de potencia y aporta el punto **D+** para señalización y para alimentar cargas externas chicas.

---

## P2. ¿Cómo funcionan los sistemas de avance al encendido (centrífugo y por vacío)?

### ¿Por qué hace falta "adelantar" la chispa?

La mezcla aire-nafta **no explota instantáneamente**: desde que salta la chispa hasta que termina de quemarse pasa un tiempo (la combustión "tarda"). Para aprovechar al máximo el empuje sobre el pistón, la presión máxima de los gases debe darse **justo después** de que el pistón pasó el PMS (punto muerto superior), aproximadamente a **23° de giro del cigüeñal** después del PMS.

> Si la chispa saltara exactamente en el PMS, la combustión terminaría demasiado tarde (con el pistón ya bajando) y se perdería fuerza. Por eso la chispa debe **adelantarse** (saltar *antes* de que el pistón llegue al PMS).

El detalle clave es que **cuánto hay que adelantar NO es fijo**: depende de las revoluciones y de la carga del motor. Como el tiempo de combustión es más o menos constante, pero el pistón se mueve más rápido o más lento según el régimen, hacen falta dos correctores automáticos.

---

### 🔩 Avance CENTRÍFUGO — corrige según las RPM

**El problema que resuelve:** a más RPM, el pistón viaja más rápido, entonces recorre más distancia en el mismo tiempo de combustión. Si no se adelantara la chispa, la combustión terminaría "tarde" respecto al pistón. → **A más RPM, más adelanto.**

**Cómo funciona (mecánico):**
- Debajo de la placa ruptora hay **dos contrapesos** unidos a la leva por medio de **resortes**.
- Al aumentar las RPM, la **fuerza centrífuga** vence a los resortes y los contrapesos se **abren hacia afuera**.
- Al abrirse, arrastran la placa solidaria a la leva, **haciéndola girar un poco en el mismo sentido de giro del eje**.
- Como la leva "gira adelantada", **ataca antes** al taco del brazo móvil → los platinos abren antes → **la chispa se adelanta**.
- Cuando bajan las RPM, la fuerza centrífuga disminuye, los resortes cierran los contrapesos y el avance se **retrasa** de nuevo.

**Detalle:** algunos sistemas usan **dos resortes** de distinta tensión — uno *primario* que controla el avance a bajas RPM y otro *secundario* que entra a RPM elevadas, para lograr una curva de avance más precisa.

---

### 💨 Avance por VACÍO — corrige según la carga del motor

**El problema que resuelve:** cuando la mariposa del acelerador está **parcialmente abierta** (marcha suave, poca carga), entra **menos mezcla** al cilindro. Esa mezcla más pobre/menos comprimida **quema más lento**, así que necesita empezar a arder antes. → **A mayor vacío (menos acelerador), más adelanto.**

**Cómo funciona (neumático):**
- Es una cápsula con un **diafragma**: de un lado tiene un **resorte**, del otro se conecta por un conducto al **múltiple de admisión** (por encima de la mariposa, en el carburador).
- El diafragma está unido por una **palanca a la placa ruptora**.
- Cuando la mariposa está parcialmente abierta, el **vacío** del múltiple **atrae al diafragma**, venciendo al resorte.
- La palanca **gira la placa ruptora en sentido CONTRARIO al giro de la leva** → la leva ataca antes al brazo móvil → **la chispa se adelanta**.
- Al disminuir el vacío (acelerador a fondo, mucha carga), el resorte devuelve el diafragma a su posición inicial y el avance se anula.

---

### Diferencia clave entre ambos

| | Avance centrífugo | Avance por vacío |
|---|---|---|
| **Responde a** | RPM del motor | Carga del motor (vacío del múltiple) |
| **Tipo de mecanismo** | Mecánico (contrapesos + resortes) | Neumático (diafragma + resorte) |
| **Qué mueve** | Gira la **leva** en el mismo sentido del eje | Gira la **placa ruptora** en sentido contrario a la leva |
| **Ubicación** | Dentro del distribuidor, bajo la placa ruptora | Cápsula externa conectada al carburador |

> **Los dos trabajan al mismo tiempo y se suman.** El centrífugo se ocupa del régimen (velocidad) y el vacío de la carga (esfuerzo/acelerador). Juntos logran que la chispa salte siempre en el momento óptimo en cualquier condición de marcha.

### Cómo se comprueba en la práctica
Con la lámpara estroboscópica y el motor acelerando, las marcas de la polea se **desplazan** cuando entra a operar el avance centrífugo. Al conectar la toma de vacío (con las RPM algo por encima del ralentí) se observa el efecto del avance por vacío. En la puesta a punto dinámica **se desconecta/tapa el avance por vacío** para medir solo el avance inicial, y se mantiene el ralentí bajo para que el centrífugo no opere.

> **Nota:** en los encendidos electrónicos integrales estos dos mecanismos mecánicos **desaparecen**: un calculador electrónico determina el avance según RPM y depresión mediante captores, con mucha mayor precisión.

---

## P3. Si la luz de platinos es MAYOR que la adecuada, ¿qué pasa y por qué?

**Respuesta corta:** se **reduce el ángulo de contacto (dwell)** y se **adelanta la chispa**.

### Qué es la "luz de platinos"
Es la **separación máxima** entre los dos contactos del ruptor cuando están **abiertos** (con el taquito en el punto más alto de la leva). Se mide/ajusta con una sonda o galga, moviendo el **contacto fijo** (nunca el brazo móvil).

### El mecanismo (la clave para entenderla)
La **leva** gira y tiene tantos vértices (lomas) como cilindros. El contacto móvil apoya sobre ella con un taquito:

```
Leva girando →   ___/‾‾‾\___/‾‾‾\___
                    ▲
              el taquito sube por la loma
```

- Taquito en la parte **baja** (círculo base) → platinos **CERRADOS**.
- Taquito **subiendo a la loma** → platinos **ABREN**.

La luz se regula acercando o alejando el contacto fijo: **más luz = lo alejás**.

### Por qué MÁS luz → MENOS tiempo cerrados (menos dwell)
Pensalo como una **puerta**: si tiene que **abrir más** (más luz), **empieza a separarse antes** al subir la loma y **recién vuelve a tocar más abajo** → pasa **menos tiempo cerrada**. Ese "tiempo cerrado", medido en grados de giro, es el **ángulo de contacto (dwell)**.
- **Más luz → menos dwell.** Menos luz → más dwell.

### Los dos efectos de MÁS luz
1. **Se reduce el ángulo de contacto:** los platinos están cerrados menos tiempo → la bobina tiene **menos tiempo para cargarse** → el campo magnético **no llega a su máximo** → chispa más débil (se nota a altas RPM).
2. **Se adelanta la chispa:** el instante en que los platinos **abren** es el instante en que **salta la chispa**. Con más luz, el taquito los separa **antes** → la chispa salta antes → el encendido **se adelanta** (un adelanto excesivo puede producir **detonación/pistoneo**).

### Al revés — MENOS luz que la adecuada
Más tiempo cerrados → **más dwell** → la corriente circula más tiempo por los contactos y **puede quemarlos**; además, por estar tan cerca cuando abren, puede saltar una chispa entre ellos. Y el encendido se **atrasa**.

### Reglas para memorizarla
> **Más luz = menos tiempo juntos = bobina mal cargada + chispa antes.**
>
> Truco: **"más ABRO, más ADELANTO"** (más luz → más adelanto de chispa).

---

## P4. ¿Por qué el orden de encendido de un motor de 6 cilindros es 1-5-3-6-2-4?

**Idea central:** el orden de encendido **NO sigue la numeración** (nunca es 1-2-3-4-5-6) a propósito. Se diseña para que las explosiones queden **repartidas de forma pareja** y **nunca en dos cilindros vecinos seguidos**. Así el motor gira suave y el cigüeñal no sufre.

### Primero: cada cuánto hay una explosión
En un motor de 4 tiempos hay una explosión por cilindro cada **720°** (dos vueltas de cigüeñal). Con 6 cilindros:

> 720° ÷ 6 = **una explosión cada 120°** de giro del cigüeñal.

O sea, los impulsos de fuerza están **igualmente espaciados** (cada 120°). Lo que decide el orden de encendido es **cuál cilindro** ocupa cada uno de esos turnos.

### Por qué ese orden y no otro — los 3 objetivos
1. **Equilibrio (que no vibre):** las explosiones deben repartirse a lo largo de todo el cigüeñal, no concentrarse en una punta.
2. **No usar dos cilindros vecinos seguidos:** si explotaran 1 y 2 uno atrás del otro, se "retorcería" y sobrecargaría un extremo del cigüeñal y sus cojinetes.
3. **Distribución pareja de la mezcla y del calor** entre todos los cilindros.

### La lógica de 1-5-3-6-2-4
Numerá los cilindros de adelante hacia atrás: mitad **delantera 1-2-3**, mitad **trasera 4-5-6**. Fijate cómo va saltando la chispa:

```
1   →  5  →  3  →  6  →  2  →  4
(del)  (tra) (del) (tra) (del) (tra)
```

- **Alterna adelante–atrás–adelante–atrás** todo el tiempo → equilibra el cigüeñal de punta a punta.
- **Ningún par es vecino:** 1→5, 5→3, 3→6, 6→2, 2→4 (y 4→1 al cerrar el ciclo). Nunca explotan dos cilindros contiguos seguidos.

### Ojo
El orden **exacto depende del diseño del cigüeñal y de cómo el fabricante numera los cilindros**; por eso existe también su inverso **1-4-2-6-3-5**, y otros motores usan otros. Lo que **siempre** se cumple es el principio: impulsos parejos (cada 120° en un 6 cil.) y sin vecinos consecutivos. Lo que hay que **memorizar** para el examen es la secuencia **1-5-3-6-2-4**; entender el porqué te ayuda a no confundirla con 1-2-3-4-5-6.

### Para memorizar
> 6 cilindros → **1-5-3-6-2-4**, saltando siempre **adelante/atrás** y **nunca a un vecino**.
>
> Recordá también: 3 cil → **1-3-2** · 4 cil → **1-3-4-2** (o 1-2-4-3) · 6 cil → **1-5-3-6-2-4**.

---

## P5. Durante la fase de ACTIVACIÓN del solenoide de arranque, ¿qué actúa y por qué?

**Respuesta corta:** actúan **las dos bobinas juntas** — la de **activación (o "llamado")** y la de **retención**.

### Qué es el solenoide y qué tiene adentro
El solenoide (mando magnético) es un electroimán que cumple **dos trabajos a la vez**:
1. **Empujar el piñón** hacia afuera para que engrane con la corona del volante.
2. **Cerrar el contacto principal** que deja pasar los 300+ A de la batería al motor eléctrico.

Para eso tiene **dos bobinados** enrollados sobre el mismo núcleo, que mueven un **émbolo**:
- **Bobina de activación / llamado (pull-in):** fuerte, hace la fuerza grande para **atraer** el émbolo desde cero.
- **Bobina de retención (hold-in):** más débil, solo alcanza para **mantener** el émbolo una vez que ya está adentro.

### Las tres fases (y por qué en la activación actúan las dos)

**1. Activación (llave en START):**
La corriente entra por el **terminal 50** y alimenta **a las dos bobinas al mismo tiempo**. ¿Por qué las dos? Porque arrancar el movimiento es el momento **más exigente**: hay que **vencer el resorte, mover el émbolo, empujar el piñón contra la corona y cerrar el contacto principal**. Se necesita la **máxima fuerza magnética**, y eso se logra sumando el tirón de ambas bobinas.
> Detalle: en esta fase la bobina de activación deja pasar algo de corriente al motor, que gira **lento**, lo que ayuda a que el piñón **engrane suave** con la corona.

**2. Retención (émbolo ya adentro, contacto principal cerrado):**
Cuando el contacto principal se cierra (terminal 30 → motor), los **dos extremos de la bobina de activación quedan al mismo potencial** (positivo de batería de los dos lados) → **deja de circular corriente por ella**. A partir de ahí, **solo la bobina de retención** sostiene el émbolo, con poca corriente. Ya no hace falta más fuerza: solo "mantener". El motor gira ahora a plena corriente directo de la batería.

**3. Retorno (llave de START a IGN/contacto):**
La corriente pasa ahora por las **dos bobinas en serie**, pero enrolladas de modo que sus campos **se oponen y se cancelan** → desaparece la fuerza magnética → el **resorte de retorno** empuja el émbolo, abre el contacto principal y retrae el piñón.

### Por qué el diseño de dos bobinas
Porque **arrancar el movimiento** (desde cero) necesita **mucha fuerza**, pero **mantenerlo** necesita **muy poca**. Usar las dos para tirar y solo una para sostener es lo **eficiente**: evita gastar corriente y generar calor de más. La bobina de retención sola **no podría** mover el émbolo desde el reposo.

### Para memorizar
> **Activación = las DOS bobinas** (máximo tirón para engranar y cerrar el contacto).
> **Retención = solo la de retención** (poca fuerza, solo sostener).
> **Retorno = las dos en serie, se anulan** → el resorte devuelve todo.

---

## P6. ¿Por qué la resistencia del bobinado secundario está en el orden de los kΩ?

**Respuesta corta:** porque el secundario tiene **muchísimas vueltas de alambre finísimo**, y esas dos cosas juntas disparan la resistencia. El valor típico es **5 a 20 kΩ**.

### La fórmula que lo explica
La resistencia de un alambre es:

> **R = ρ · L / A**  (ρ = resistividad del cobre, L = longitud, A = sección)

La resistencia **sube** cuando el alambre es **más largo (L)** y cuando es **más fino (menor sección A)**. En el secundario se dan **las dos cosas a la vez**:

| | Primario | Secundario |
|---|---|---|
| Vueltas | 100–250 | **10.000–25.000** |
| Diámetro del alambre | ~0,7 mm (grueso) | **~0,04–0,06 mm (finísimo)** |
| Resistencia | 0,3–0,6 Ω | **5–20 kΩ** |

- **Muchísimas vueltas → alambre larguísimo** (L enorme).
- **Alambre muy fino → sección chiquita** (A muy chica).

Ambos efectos empujan la resistencia hacia arriba, y por eso pasa de "fracciones de ohm" (primario) a "miles de ohms" (secundario).

### Comprobación rápida (para ver que cierra)
Secundario ≈ 20.000 vueltas de alambre de 0,05 mm ≈ **1.400 m** de cobre de sección ~0,002 mm²:
- R = 0,0175 · 1400 / 0,002 ≈ **12 kΩ** ✅ (cae justo en 5–20 kΩ).
- Primario ≈ 200 vueltas de 0,7 mm ≈ 14 m → R ≈ **0,6 Ω** ✅.

### Ojo: esa resistencia NO es lo que genera la alta tensión
La resistencia alta es una **consecuencia** de tener tantas vueltas finas, **no la causa** de la chispa. La alta tensión sale de la **relación de vueltas** (secundario/primario, ~100:1) **al cortarse la corriente** del primario. Los datos coinciden en todo el material: BERU **5–20 kΩ**, el TP **5–12 kΩ**, las bobinas Bosch **4,8–10,8 kΩ**.

### Para memorizar
> Secundario = **muchas vueltas + alambre fino = kΩ**. Primario = **pocas vueltas + alambre grueso = fracción de ohm**.

---

## P7. En un captor de efecto Hall, ¿por qué con la "ventana" ABIERTA la señal de salida es 0 V?

**Respuesta corta:** porque con la ventana abierta el **imán llega al elemento Hall**, éste dispara su etapa de salida y **la conmuta a masa** → la señal cae a **~0 V**. Con la ventana **cerrada** (la aleta tapa el entrehierro) el campo se desvía, la salida se libera y sube a **50–80 % de la alimentación** (≈ 3 a 9 V).

### Qué es el efecto Hall (en 2 líneas)
Si por una plaquita semiconductora circula corriente y encima se le acerca un **campo magnético perpendicular**, aparece una pequeña tensión transversal: la **tensión de Hall**. O sea: **hay campo → hay tensión Hall; no hay campo → no hay tensión Hall**. El captor usa esa tensión para gobernar un transistor de salida.

### Cómo está armado el captor Hall del distribuidor
Tres piezas enfrentadas con un **entrehierro** (huequito de aire) en el medio:

```
   IMÁN permanente
        │  campo magnético ↓
   ┌────┴────┐  ← ENTREHIERRO (por acá pasa el tambor)
   │ elemento│
   │  HALL   │──→ señal de salida
   └─────────┘
```

Entre el imán y el elemento Hall gira un **tambor obturador** (una copa metálica) que tiene **tantas aletas como cilindros** y, entre aleta y aleta, **ventanas** (huecos). Al girar el distribuidor, ese tambor va tapando y destapando el entrehierro:

| Estado del tambor | Qué pasa con el campo | Elemento Hall | Transistor de salida | Señal de salida |
|---|---|---|---|---|
| **Ventana ABIERTA** (hueco en el entrehierro) | El campo del imán **pasa** y llega al Hall | Genera tensión Hall | **Conduce** (cierra a masa) | **≈ 0 V** |
| **Ventana CERRADA** (la aleta metálica tapa el entrehierro) | La aleta **apantalla/desvía** el campo (actúa de blindaje) | Sin tensión Hall | **Se abre** (no conduce) | **50–80 % de la alim.** (≈ 3–9 V) |

> La clave para no marearse: **la aleta metálica “roba” el campo**. Cuando la aleta está en el medio (ventana cerrada) el Hall se queda sin campo; cuando pasa el hueco (ventana abierta) el campo llega. Y el Hall, al recibir campo, **tira la salida a masa** (0 V).

### “¿Campo presente y da 0 V? Es antiintuitivo” — por qué NO lo es
Es la duda más común, y se resuelve separando **dos cosas distintas**:
1. **El elemento Hall en sí** se comporta como uno espera: **campo → genera tensión Hall; sin campo → nada.** Ahí no hay sorpresa.
2. **Lo que medís en el pin de señal NO es la tensión Hall cruda.** Es la salida de un **transistor de conmutación (de colector abierto, a masa)** que el elemento Hall gobierna, y ese transistor **invierte la lógica**:

> "**Detecto campo → activo el transistor → conecto la salida a masa → 0 V.**"
> "**No detecto campo → transistor abierto → la salida sube al nivel alto (3–9 V).**"

Es decir, el sensor no te entrega la tensión Hall, te entrega el **estado de un interruptor a masa que se cierra cuando siente el imán**. Pensalo como un pulsador: *ve el campo → cierra contra masa → cae a 0 V*. **Lo que leés es el interruptor, no el campo** → por eso "campo presente = 0 V" **no** contradice el efecto Hall.

> ⚠️ **Cuál estado da 0 V es una convención de diseño** (hay sensores cableados al revés). Por eso lo confiable no es deducirlo sino recordar los **dos niveles medidos**: ventana abierta (campo pasa) = **0 V**; ventana cerrada (aleta tapa) = **3–9 V**.

### Por qué es una señal CUADRADA (y no senoidal)
El transistor de salida sólo tiene **dos estados**: conduce (0 V) o no conduce (nivel alto). No hay valores intermedios → la señal salta de golpe entre ~0 V y ~50–80 % de la alimentación: es una **onda cuadrada**.
- Su **amplitud es constante** (no depende de las RPM), porque la fija la alimentación.
- Lo que cambia con las RPM es la **frecuencia** (más vueltas → más pulsos por segundo).

### Ojo: el captor Hall es un sensor ALIMENTADO (activo)
Tiene **3 pines**: **(+)** alimentación (12 V, o regulada a 5/7/9 V), **(–)** masa y **señal**. Necesita que le den corriente para funcionar. Esto lo diferencia del **captor inductivo**, que **se autogenera** su propia tensión (alterna senoidal) por inducción y crece con las RPM (ver la comparación del TP1 en `trabajos-practicos/Resumen-TPs.md`).

### Cómo se comprueba en la práctica (TP1)
1. **Alimentación (+):** voltímetro entre el (+) del Hall y masa → debe dar la tensión de alimentación (12, 9, 7 o 5 V según el modelo).
2. **Masa (–):** entre el (–) del Hall y el positivo de batería → debe dar la tensión de batería.
3. **Señal:** voltímetro entre la señal y masa, girando el eje despacio:
   - **Ventana abierta → 0 V.**
   - **Ventana cerrada → 3 a 9 V** (el 50–80 % de la alimentación).
4. Con **osciloscopio** (canal en X1) se ve directamente la **onda cuadrada** de amplitud fija y frecuencia creciente con las RPM.

### Para memorizar
> **Aleta tapando (ventana CERRADA) = campo bloqueado = salida ALTA (3–9 V).**
> **Ventana ABIERTA = pasa el campo = el Hall corta a masa = 0 V.**
> Hall = **3 pines, alimentado, señal cuadrada de amplitud fija**. Inductivo = **2 pines, autogenerado, señal senoidal que crece con las RPM**.

---

## P8. Una densidad de electrolito de 1,120 gr/cm³, ¿qué estado de batería indica y por qué?

**Respuesta corta:** una batería **descargada**. La densidad del electrolito es un **termómetro del estado de carga**, y 1,120 es el piso de la escala.

### Por qué la densidad “mide” la carga
El electrolito es una mezcla de **ácido sulfúrico + agua**. La química de la batería es un ida y vuelta del ácido:
- **Al descargarse:** el ácido **reacciona con las placas** y se transforma en **sulfato de plomo** (queda pegado a las placas). El electrolito se queda **con menos ácido y más agua** → **se “aligera”, baja la densidad**.
- **Al cargarse:** el proceso se invierte, el sulfato **devuelve** el ácido al electrolito → **sube la densidad**.

Como el agua pesa menos que el ácido, **medir cuán “pesado” está el líquido** (su densidad, con el **densímetro**) dice cuánto ácido sin usar queda, es decir, **cuánta carga tiene**.

### La escala (a 25 °C)
| Densidad (gr/cm³) | Estado de carga |
|---|---|
| **1,265** | 100 % (plena carga) |
| 1,225 | 75 % |
| 1,190 | 50 % |
| 1,155 | 25 % |
| **1,120** | **Descargada** |

Por eso **1,120 = descargada**: es el extremo bajo, donde prácticamente **ya no queda ácido libre** en el electrolito (casi todo pasó a sulfato en las placas).

### Dos detalles importantes
- **Corrección por temperatura:** la lectura se corrige **±0,004 gr/cm³ por cada 5,5 °C** de diferencia respecto a los 25 °C de referencia (con calor el líquido se dilata y “miente” hacia abajo, con frío al revés).
- **Peligro con la batería descargada:** además de no arrancar, una batería muy descargada tiene el electrolito “aguado” y **puede congelarse** con frío; si queda así mucho tiempo, la sulfatación se vuelve **cristalina e irreversible** (la batería ya no recupera).

### Para memorizar
> **Más ácido = más densidad = más carga.** 1,265 → llena · 1,120 → vacía.
> Regla de bolsillo: los últimos dos dígitos “bajan de a 35–40” por cada cuarto de carga (265 → 225 → 190 → 155 → 120).

---

## P9. La luz de platinos, ¿ajustando qué contacto se calibra? (y por qué nunca el móvil)

**Respuesta corta:** se calibra moviendo el **contacto FIJO** (el que va atornillado a la placa), **nunca doblando el brazo móvil**. La medida se toma con una **sonda/galga** (o midiendo el ángulo dwell).

### Repaso: quién es quién en el ruptor
El ruptor (platinos) tiene **dos contactos**:
- **Contacto móvil:** va en un **brazo con resorte** que apoya, mediante un **taquito de fibra**, sobre la **leva** del distribuidor. La leva (con tantos vértices como cilindros) lo empuja y lo suelta → **abre y cierra** los platinos.
- **Contacto fijo:** va **atornillado a la placa ruptora**; su posición se puede correr aflojando su tornillo.

La **luz de platinos** es la **separación máxima** entre ambos contactos, medida cuando el taquito está **en el punto más alto de la leva** (platinos totalmente **abiertos**).

### Por qué se ajusta SOLO el contacto fijo
- La separación se cambia **acercando o alejando el contacto fijo** (aflojás su tornillo, corrés, y volvés a ajustar). Es la pieza **pensada para regularse**.
- El **brazo móvil NO se toca** porque:
  - Está **templado y calibrado** con una **tensión de resorte** determinada; si lo doblás, cambiás esa tensión y el platino **rebota** a altas RPM (pierde contacto y falla la chispa).
  - Doblarlo **desalinea** las caras de los contactos: apoyan de canto, se **sobrecargan y se queman** (los platinos deben tocarse **planos y centrados**).

### Cómo se mide (dos caminos)
1. **Con galga/sonda (láminas calibradas):** se gira el motor hasta que el taquito quede en el vértice de la leva (platinos abiertos al máximo) y se mide la separación; se corre el contacto fijo hasta que la galga entre “con leve roce”.
2. **Con el ángulo dwell (dwell-meter):** en vez de medir milímetros, se mide el **ángulo de contacto** (grados que los platinos quedan cerrados). Es más preciso porque se hace con el motor girando.

> **Luz y dwell son las dos caras de lo mismo:** **más luz → menos dwell** (menos tiempo cerrados) y **menos luz → más dwell**. El efecto de pasarse para un lado o el otro está explicado en **P3** (más luz = bobina mal cargada + chispa adelantada; menos luz = platinos que se queman + chispa atrasada).

### Para memorizar
> **Se corre el FIJO, jamás se dobla el MÓVIL.** Se mide con el taquito en el vértice de la leva (platinos abiertos).
> Y recordá el vínculo: **más luz = menos ángulo de contacto (dwell)**.
