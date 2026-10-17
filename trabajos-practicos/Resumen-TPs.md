# 🔧 Resumen de Trabajos Prácticos (TP) — ITCA

> Resumen teórico, valores de medición clave y preguntas de repaso de los tres TPs:
> - **TP1 — Tipos de Encendido** (TPMyTA1-11)
> - **TP2 — Alternador** (TPMyTA2-11)
> - **TP3 — Motor de Arranque** (TPMyTA2-12)

---

# 🔥 TP1 — Tipos de Encendido (TPMyTA1-11)

## Resumen teórico

**Función del sistema de encendido:** sin importar el tipo, es **provocar el salto de chispa** para encender la mezcla. Para ello hay que **elevar la tensión disponible (12 V) en dos etapas** hasta el orden de los **KV**, y luego **distribuir la chispa** a cada cilindro en el momento oportuno.

**Los 5 procesos/etapas** son comunes a todos los encendidos, pero cambian los componentes que los cumplen:

| Proceso | Componente que lo cumple |
|---|---|
| **1. Determinación del salto de chispa** (y cantidad de cilindros) | Leva del distribuidor / reluctor-tambor obturador / rueda objetivo-sensor-ECU |
| **2. Corrección del avance** | Variadores por vacío y centrífugo / la ECU con sus sensores |
| **3. Conmutación** | Ruptor (platino) / transistor |
| **4. Elevación de la tensión** | Bobina de encendido |
| **5. Distribución de la chispa** | Rotor-tapa de distribuidor / ECU-cable de activación |

**Tipos de encendido estudiados:** convencional (con ruptor), con balastro, electrónico inductivo (captor inductivo) y electrónico de efecto Hall.

## Valores de medición clave (¡para memorizar!)

| Medición | Valor esperado |
|---|---|
| **Tensión alimentación bobina (sin balastro)** | Cercana a la de batería (~12 V) |
| **Tensión alimentación bobina (con balastro, en contacto)** | Entre **6 y 9 V** |
| **Tensión alimentación bobina (con balastro, en arranque)** | Cercana a batería (se **puentea** el resistor) |
| **Resistencia primario (convencional, sin balastro)** | **2,5 Ω a 4,5 Ω** |
| **Resistencia primario (con balastro)** | **1 Ω a 2 Ω** (resistor balastro: 0,5–1 Ω) |
| **Resistencia primario (electrónico)** | **0,5 Ω a 1 Ω** |
| **Resistencia secundario** | **5 KΩ a 12 KΩ** |
| **Capacidad del condensador** | **0,22 µF a 0,28 µF** |
| **Aislación (condensador, primario a carcasa)** | Infinita → pantalla muestra **OL / 1** |
| **Resistencia del captor inductivo** | **500 Ω a 4 KΩ** |
| **Tensión generada por captor inductivo (en arranque)** | **0,5 VCA a 2 VCA** |
| **Frecuencia captor inductivo (4 cilindros, en arranque)** | **6 Hz a 12 Hz** |
| **Señal del captor Hall (ventana abierta)** | **0 V** |
| **Señal del captor Hall (ventana cerrada)** | 50–80% de la alimentación (≈ 3 a 9 V) |
| **Caída de tensión admisible por tramo de cable** | 0,1 V a 0,3 V (total ~1 V) |

**Notas importantes de la práctica:**
- Al medir tensión en el primario, hacerlo **rápido**: con el ruptor cerrado la bobina se está cargando y podría dañarse si queda cargando mucho tiempo.
- En encendidos electrónicos no hay ruptor mecánico, así que para medir la alimentación hay que **conectar la bobina a masa manualmente** con un cable auxiliar (y no olvidar sacarlo al terminar).
- Antes de medir resistencias bajas, conocer la **resistencia residual** del multímetro (juntando las puntas) y restarla.
- **Prueba de la lámpara** (entre negativo de batería y negativo de bobina, accionando el arranque): destella / siempre encendida / siempre apagada → cada caso indica una falla distinta.
- El **captor inductivo** genera tensión **alterna** (bobinado interno); el **Hall** genera señal **cuadrada** y tiene normalmente **3 pines**.

## Preguntas y respuestas — TP1

**P1. ¿Cuáles son las dos etapas de trabajo del sistema de encendido?**
Elevar la tensión de 12 V al orden de los KV (en dos etapas de elevación) y distribuir la chispa a cada cilindro en el momento oportuno.

**P2. ¿Cómo está conectado el condensador respecto al ruptor?**
En **paralelo**.

**P3. ¿Qué resistencia tiene el primario de un encendido convencional?**
De **2,5 Ω a 4,5 Ω**.

**P4. En una bobina de encendido, ¿cómo es el bobinado primario?**
Tiene alambre **grueso** y **menos vueltas** que el secundario.

**P5. En un encendido con balastro, ¿dónde se encuentra el resistor?**
En **serie con el primario** de la bobina.

**P6. En un encendido con balastro, ¿cuánta tensión hay en el borne + de la bobina (en contacto)?**
Inferior a 12 V, entre **6 V y 9 V** (el resistor cae parte de la tensión).

**P7. ¿Por qué se puentea el resistor balastro durante el arranque?**
Porque en el arranque se requiere más energía de chispa; al puentear el resistor la bobina recibe tensión plena de batería.

**P8. ¿Qué ventaja ofrece un encendido electrónico frente al convencional?**
**Mayor corriente en el primario y mayor tensión en el secundario** (el transistor maneja más corriente que el platino, sin chisporroteo).

**P9. ¿Cuál es la función del módulo de encendido?**
**Conmutar el negativo (–) de la bobina** (reemplaza al ruptor).

**P10. ¿En qué tipo de encendido circula MÁS corriente por el primario?**
En el **electrónico**.

**P11. ¿Qué controles pueden hacerse a un captor inductivo?**
Medir la **tensión alterna generada** y la **resistencia de la bobina** (500 Ω a 4 KΩ).

**P12. ¿Qué caracteriza a un captor de efecto Hall?**
Tiene normalmente **3 pines** y genera una **señal cuadrada**.

**P13. ¿Por qué se reemplazó el encendido con ruptor por el electrónico?**
Porque el ruptor mecánico se desgasta, limita la corriente del primario (chisporroteo) y a altas RPM rebota/no carga bien la bobina. El transistor elimina esos problemas y da chispa más potente y estable.

**P14. ¿Se puede reemplazar una bobina convencional por una para balastro?**
No directamente: la bobina de balastro es de menor resistencia (trabaja a ~9 V) y necesita el resistor en serie; usarla sin balastro la haría trabajar sobreexcitada.

**P15. Al emular el captor inductivo con una pila de 1,5 V, ¿qué debe ocurrir si el módulo está bueno?**
Al conectar/desconectar la pila intermitentemente, el módulo debe conmutar la masa de la bobina y producir **salto de chispa** en la bujía.

---

# ⚡ TP2 — Controles del Alternador (TPMyTA2-11)

## Resumen teórico

**Principio de funcionamiento:** el alternador convierte energía mecánica en eléctrica. A diferencia del generador, lo que gira es el **campo magnético (rotor)** y los conductores (estator) quedan fijos. Genera **corriente alterna trifásica** (tres bobinas a 120°) que luego se rectifica.

**Componentes:**
- **Rotor (bobina inductora):** imán giratorio, bobina sobre **6 pares de polos (12 polos)**; recibe corriente por **dos anillos rozantes**. Lleva ventiladores para refrigerar.
- **Estator (bobina inducida):** elemento fijo; **3 pares de bobinas** que se unen en el **punto neutro**; genera la CA trifásica.
- **Puente rectificador:** **6 diodos de potencia** (3 positivos + 3 negativos), dos por fase → rectificación de onda completa. La batería en paralelo nivela la ondulación (efecto condensador).
- **Diodos de excitación (trío):** derivan corriente para alimentar el bobinado de excitación (rotor) por el borne **D+**, hasta ~1 A.
- **Limitador/regulador de carga:** mantiene la tensión de salida constante regulando la **corriente de excitación** (ciclos ON/OFF). Compensa por temperatura (más tensión con frío, menos con calor). Lleva el porta-escobillas incorporado.

**Importante:** el control del circuito de carga **empieza siempre verificando la batería** (una batería defectuosa no retiene la carga). Posibles defectos: placas en cortocircuito, bornes sulfatados, terminales flojos, envejecimiento (3–5 años).

## Valores de medición clave

### Controles del circuito de carga (alternador montado)

| Medición | Valor esperado |
|---|---|
| **Régimen de prueba** | **2.000 rpm** |
| **Tensión de batería (motor a 2.000 rpm)** | > **13,5 V** |
| **Tensión de carga (con consumidores, a 2.000 rpm)** | **13,5 V a 14,5 V** |
| **Corriente de carga (con consumidores)** | ≥ **60% del valor nominal** (ej. alternador 80 A → >48 A) |
| **Caída de tensión en cable positivo (B+ a batería)** | < **0,4 V** |
| **Caída de tensión en cable de masa** | < **0,2 V** |
| **Tensión de rizado/CA en B+ (diodos)** | < **0,4 V** (si es mayor → diodo abierto o en corto) |
| **Fuga de corriente por diodos (motor detenido)** | < **2 mA** (normal ~0,5 mA) |

### Controles del alternador desarmado

> ⚠️ **Las pruebas con lámpara de 220 V CA son con tensión de red:** solo con el docente, con el componente desmontado y sin tocar las puntas.

| Medición | Valor esperado |
|---|---|
| **Continuidad del rotor (entre anillos)** | **2,5 Ω a 5 Ω** |
| **Aislación rotor a masa (lámpara 220 V CA)** | Lámpara **apagada** (si enciende → hay contacto a masa) |
| **Continuidad del estator (entre bobinados)** | **0,1 Ω a 0,3 Ω** |
| **Aislación estator a masa (lámpara 220 V CA)** | Lámpara **apagada** |
| **Diodos — sentido conducción (multímetro)** | **400 mV a 700 mV** |
| **Diodos — sentido bloqueo** | Infinito |
| **Resistencia de escobillas** | < **1 Ω** |

## Preguntas y respuestas — TP2

**P1. ¿Con qué debe comenzar siempre el control del circuito de carga?**
Con la **verificación del estado de la batería** (carga, bornes, conexiones).

**P2. ¿Qué instrumentos se usan para verificar el nivel de carga?**
**Voltímetro** (en paralelo entre bornes) y **amperímetro o pinza amperométrica**.

**P3. ¿Dónde se instala la pinza amperométrica?**
Sobre el cable **positivo (+)** que conecta el alternador con la batería.

**P4. ¿A qué régimen se hacen las pruebas de carga?**
A **2.000 rpm**.

**P5. ¿Entre qué valores debe mantenerse la tensión de carga con consumidores encendidos?**
Entre **13,5 V y 14,5 V**.

**P6. Para un alternador de 12 V / 80 A, ¿qué corriente mínima debe entregar con consumidores?**
El **60% del nominal**, es decir más de **48 A**.

**P7. ¿Cuál es la caída de tensión máxima admisible en el cable positivo (B+ a batería) y en el de masa?**
Positivo: < **0,4 V**. Masa: < **0,2 V**.

**P8. Al medir tensión alterna (2 VCA) entre B+ y masa, ¿qué significa un valor > 0,4 V?**
Que uno o más **diodos están abiertos o en cortocircuito**.

**P9. ¿Qué consecuencia tienen los diodos con fugas si el motor está detenido?**
Producen una **leve descarga de la batería** (fuga que debe ser < 2 mA).

**P10. ¿Qué valor de continuidad debe tener el rotor entre sus dos anillos?**
Entre **2,5 Ω y 5 Ω**.

**P11. ¿Qué valor debe dar la continuidad de los bobinados del estator?**
Entre **0,1 Ω y 0,3 Ω**.

**P12. Al probar los diodos con el multímetro, ¿qué debe indicar en conducción y en bloqueo?**
En conducción: **400 a 700 mV**. En bloqueo: **infinito**.

**P13. Al verificar la aislación del rotor/estator con lámpara de 220 V CA, ¿qué debe pasar?**
La lámpara debe permanecer **apagada**; si enciende, hay contacto (fuga) a masa.

**P14. ¿Cómo se comprueba la lámpara testigo de carga?**
Con el motor en marcha, se conecta a masa el cable del testigo (D+): la lámpara debe **encenderse**. Si no enciende, revisar masa del alternador y alimentación del tablero.

**P15. ¿Qué causa mecánica puede provocar carga insuficiente aunque el alternador esté bien?**
El **patinamiento de la correa** (floja o gastada) o una polea de cigüeñal floja/deteriorada.

---

# 🔋 TP3 — Controles del Motor de Arranque (TPMyTA2-12)

## Resumen teórico

**Funcionamiento:** el motor de arranque es un **motor eléctrico de corriente continua** que vence la resistencia inicial del motor térmico. Suele ser de **~2 CV, 12 V y 120–400 A**. Al girar la llave, el acumulador lo activa; su **piñón de ataque** (de pocos dientes) engrana con la **corona dentada** del volante de inercia.

**Componentes clave:**
- **Solenoide de arranque:** bobina cilíndrica de hilo grueso que genera un campo magnético intenso; actúa como electroimán. Cumple dos funciones: **acoplar el piñón** a la corona y **cerrar el contacto principal** de alimentación al motor.
- **Piñón de ataque (impulsor):** engrana con la corona; sus dientes se estrechan en las puntas para asegurar un acople suave. **Debe engranar ANTES de que gire el motor** para no dañar los dientes.
- **Rueda libre (embrague de contra vuelta):** embrague de rodillo que transmite torsión en **un solo sentido**; permite que el arranque mueva al volante, pero **impide** que el volante acelere al arranque (lo desacopla cuando el motor arranca, evitando su destrucción).

**Relación piñón/corona:** entre **15:1 y 20:1** → el arranque gira 15 a 20 veces más rápido que el motor.
- Ejemplo: velocidad de arranque ~200 rpm con relación 18:1 → el arranque gira a **3.600 rpm**. Si el motor se acelera a 2.000 rpm sin desacoplarse, el arranque llegaría a **36.000 rpm** y se destruiría.

**Controles preliminares** (una puesta en marcha dificultosa puede NO ser culpa del arranque):
- **Carga del alternador:** si no mantiene 13,8–14,5 V, la batería queda con poca carga.
- **Fugas de corriente:** un consumo en reposo > **30 mA** descarga la batería durante la noche.

## Valores de medición clave

### Controles del circuito de arranque

| Medición | Valor esperado |
|---|---|
| **Reposo previo de la batería para el ensayo** | Al menos **8 hs** a temperatura ambiente |
| **Tensión de descarga en arranque (10 s)** | **9,6 V a 13,5 V** |
| **Corriente de descarga en arranque** | **120 A a 200 A** |
| **Tensión residual tras recuperación (60 s)** | **11,5 V a 13,5 V** |
| **Caída de tensión en cable de alimentación** | < **0,5 V** |
| **Caída de tensión en cable de masa** | < **0,5 V** |
| **Tensión de excitación del solenoide (terminal 50)** | > **9 V** |
| **Caída de tensión entre contactos del solenoide** | < **0,2 V** |
| **Consumo en reposo (fugas) que descarga batería** | > **30 mA** (problema) |

### Controles del motor de arranque desarmado

| Medición | Valor esperado |
|---|---|
| **Bobina en paralelo (bobinado de llamado/activación)** | **0,9 Ω a 2 Ω** |
| **Bobina en serie (bobinado de retención)** | **0,3 Ω a 0,6 Ω** |
| **Inducido (con inductómetro)** | La varilla **NO debe vibrar** (si vibra → cortocircuito) |
| **Continuidad del inducido (lámpara 12 V-100 W entre delgas)** | Lámpara siempre **encendida** |
| **Aislación inducido a masa (lámpara 220 V CA-15 W)** | Lámpara **apagada** |
| **Aislación campos inductores a masa (220 V)** | Lámpara **apagada** |
| **Continuidad de campos inductores (12 V-100 W)** | Lámpara **encendida** |
| **Aislación porta-escobillas positivo a masa (220 V)** | Lámpara **apagada** |
| **Continuidad escobillas de masa (12 V-100 W)** | Lámpara **encendida** |

## Preguntas y respuestas — TP3

**P1. ¿Cuál es la función del motor de arranque y su consumo típico?**
Vencer la resistencia inicial del motor térmico para arrancarlo. Consume aproximadamente **120–400 A** (unos 2 CV, 12 V).

**P2. ¿Qué dos funciones cumple el solenoide de arranque?**
**Acoplar el piñón** a la corona dentada y **cerrar el contacto principal** de alimentación al motor eléctrico.

**P3. ¿Por qué el piñón debe engranar antes de que gire el motor de arranque?**
Para **no dañar los dientes** del piñón ni de la corona (por eso los dientes se estrechan en las puntas, para un acople suave).

**P4. ¿Qué función cumple la rueda libre (embrague de contra vuelta)?**
Transmite torsión en un solo sentido: permite que el arranque mueva al volante, pero **impide que el volante acelere al arranque**, desacoplándolo cuando el motor arranca.

**P5. ¿Cuál es la relación típica piñón/corona?**
Entre **15:1 y 20:1** (el arranque gira 15 a 20 veces más rápido que el motor).

**P6. Con relación 18:1 y motor a 2.000 rpm, ¿a qué velocidad giraría el arranque si no se desacoplara?**
A **36.000 rpm**, lo que lo destruiría.

**P7. ¿Cuánto tiempo debe reposar la batería antes del ensayo de eficacia?**
Al menos **8 horas** a temperatura ambiente.

**P8. Durante el arranque (10 s), ¿entre qué valores debe estar la tensión de descarga y la corriente?**
Tensión: **9,6 V a 13,5 V**. Corriente: **120 A a 200 A**.

**P9. ¿Qué caída de tensión máxima se admite en los cables de alimentación y de masa del arranque?**
Menor a **0,5 V** en cada uno.

**P10. ¿Qué tensión mínima debe llegar al terminal 50 del solenoide en posición de arranque?**
Mayor a **9 V**.

**P11. ¿Cuánto debe ser la caída de tensión entre los contactos del solenoide?**
Menor a **0,2 V** (si es mayor, hay resistencia por contactos gastados/sucios).

**P12. ¿Qué dos bobinados tiene el solenoide y sus resistencias?**
El de **llamado/activación** (en paralelo, 0,9–2 Ω) y el de **retención** (en serie, 0,3–0,6 Ω).

**P13. ¿Para qué se usa el inductómetro y qué indica que el inducido esté fallado?**
Para detectar **cortocircuito en el inducido**: se hace girar la bobina con una varilla encima; si la **varilla vibra**, el inducido está en cortocircuito.

**P14. Al probar la aislación con lámpara de 220 V CA, ¿qué resultado indica que está bueno?**
La lámpara debe permanecer **apagada** (si enciende, hay fuga/contacto a masa). ⚠️ Prueba peligrosa por trabajar con 220 V.

**P15. ¿Qué controles preliminares se hacen antes de culpar al motor de arranque por un arranque dificultoso?**
Verificar la **carga del alternador** (13,8–14,5 V) y las **fugas de corriente** de la batería (consumo en reposo > 30 mA la descarga).

**P16. ¿Por qué los terminales de masa y positivo del porta-escobillas no deben estar flojos?**
Porque por ellos pasan **más de 100 A**; si están flojos generan resistencia, calor y mal funcionamiento.
