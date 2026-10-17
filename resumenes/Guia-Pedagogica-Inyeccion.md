# 🎓 Guía Pedagógica — Inyección Electrónica Nafta

> Para leer y entender. En vez de listar datos, contamos **cómo piensa** un sistema de inyección: qué problema resuelve, cómo conversa la computadora con el motor, y por qué cada pieza está donde está. Los valores exactos están en `Resumen-Inyeccion-Nafta.md`.

---

## La idea central: reemplazar la intuición del carburador por matemática

El viejo carburador dosificaba la nafta de forma **mecánica**, aprovechando el vacío que genera el motor al aspirar. Funcionaba, pero era impreciso: no "sabía" la temperatura, la altitud, ni la carga real. La inyección electrónica cambia el paradigma:

> Una **computadora (ECU)** mide todo lo que le pasa al motor con **sensores**, hace un cálculo, y ordena a los **actuadores** exactamente cuánta nafta inyectar y cuándo encender la chispa.

Todo el sistema se reduce a un lazo de tres pasos que se repite miles de veces por segundo:

**SENSORES (medir) → ECU (decidir) → ACTUADORES (ejecutar)**

Si entendés este lazo, entendés cualquier sistema de inyección, de cualquier marca.

---

## Parte 1 — El lenguaje del sistema: sensores y señales

### Los sensores no "hablan", modifican un voltaje

Acá está la primera idea que cuesta pero es clave: **la mayoría de los sensores no generan electricidad**. La computadora les manda un **voltaje de referencia** (típicamente 5 V) y el sensor lo **modifica** según lo que mide. La ECU lee ese voltaje de vuelta y lo traduce a una magnitud física.

> 💡 Por eso un cable cortado es tan grave: si la señal se interrumpe, cae a **0 V**, y la ECU no lo interpreta como "cero temperatura" sino como **avería**. La linealidad (que la señal cambie de forma continua, sin saltos) es una virtud obligatoria del sensor.

Y por eso también **la batería importa tanto**: si baja de 9 V, el voltaje de referencia se vuelve inestable y **todos los sensores mienten** a la vez. Muchas "fallas fantasma" de inyección son en realidad una batería o masa flojas.

### Dos formas de medir: gradual o interruptor

- Los sensores **analógicos** dan un valor que cambia de a poco (una rampa): temperatura, posición de la mariposa, cantidad de aire. Su señal se parece a una **colina** (onda senoidal).
- Los sensores **digitales / interruptores** solo dicen SÍ o NO (ON/OFF): pedal de freno pisado o no, ventana del sensor Hall abierta o cerrada. Su señal es una **onda cuadrada**.

> 💡 Entender esta diferencia es la base del diagnóstico con osciloscopio: si esperás una onda cuadrada y ves una senoidal (o al revés), algo anda mal.

### El termistor y el potenciómetro: los dos caballitos de batalla

- **Termistor NTC:** una resistencia que **baja** cuando sube la temperatura. Es el truco detrás de casi todos los sensores de temperatura (motor, aire, combustible). Simple y confiable.
- **Potenciómetro:** una resistencia con un cursor que se desliza. Convierte una **posición mecánica** (la mariposa, el pedal, la aleta del caudalímetro) en un voltaje. Es el traductor de "movimiento" a "electricidad".

---

## Parte 2 — El cerebro: la ECU

La ECU es una computadora común, con la misma lógica de cualquier PC: **entrada → procesamiento → almacenamiento → salida**. Lo interesante es cómo maneja la memoria, porque explica varios comportamientos del taller:

- **ROM:** el "instinto" de fábrica. No se borra nunca. Contiene los mapas base del motor.
- **RAM stand-by:** acá está la magia. La ECU **aprende**: va corrigiendo el ralentí, la mezcla y la posición de la mariposa según cómo envejece el motor, guiándose sobre todo por la **sonda lambda**. Esta memoria necesita batería permanente.

> 💡 Por eso, **cuando desconectás la batería, el auto "se olvida" de sus adaptaciones** y anda raro un rato (ralentí inestable) hasta que vuelve a aprender. No es una falla: es la RAM stand-by rehaciendo su tabla.

- **EEPROM:** el "cuaderno de fallas". Guarda los códigos de avería que después leés con el **scanner**.

Un detalle conceptual importante: el microprocesador **no entiende voltaje variable**, solo números binarios. Por eso la ECU tiene un **conversor analógico-digital** que traduce la "colina" de voltaje del sensor a un número que se pueda calcular.

---

## Parte 3 — El circuito de combustible: presión constante, caudal variable

Este es un concepto que ilumina todo el sistema de nafta:

> El sistema mantiene la **presión constante** y varía el **tiempo** que el inyector está abierto. Así, cuanta más nafta hace falta, más tiempo se abre el inyector (más milisegundos), pero siempre a la misma presión.

Para que esto funcione, cada pieza tiene su lógica:

- La **bomba** manda **más nafta de la que se usa**, a propósito. El sobrante vuelve al tanque.
- El **regulador de presión** es el que "sangra" ese sobrante para mantener la presión clavada. Y tiene un detalle genial: un **tubo de vacío** conectado al múltiple. Como los inyectores rocían **contra** el vacío del múltiple, el regulador compensa restando presión cuando hay mucho vacío (ralentí), para que la **diferencia** de presión en la punta del inyector sea siempre la misma.
- El **inyector** es una simple canilla eléctrica **normalmente cerrada**: la ECU la abre por pulsos de milisegundos.

> 💡 Moraleja: si la presión de combustible está mal (regulador, bomba o filtro tapado), **toda la dosificación se descalibra**, porque la ECU calcula los milisegundos asumiendo una presión fija.

Y dos piezas de seguridad/ambiente que conviene entender:
- El **interruptor de inercia**: una bolita sostenida por un imán que, ante un golpe fuerte, se suelta y **corta la bomba** para evitar incendios tras un choque.
- El **canister**: un frasco de carbón activo que **atrapa los vapores de nafta del tanque** para no tirarlos al aire, y los quema después cuando la ECU abre su electroválvula.

---

## Parte 4 — Los tres sensores que definen "cuánta nafta"

De todos los sensores, hay un núcleo que responde la pregunta central *"¿cuánto aire está entrando?"* (porque de eso depende cuánta nafta poner):

1. **Cuánto aire entra:** lo mide el **MAP** (por la presión/vacío del múltiple) o el **MAF/VAF** (midiendo el aire directamente). Un auto usa uno u otro enfoque.
2. **En qué condición está ese aire:** el **IAT** (temperatura del aire → densidad → oxígeno real).
3. **Qué le pide el conductor:** el **TPS** (posición de la mariposa).

Con eso la ECU calcula una **primera dosis** de nafta. Pero después viene el corrector fino…

### La sonda lambda: el sensor que cierra el lazo

La sonda lambda es especial porque **mira el resultado**: huele el escape y le dice a la ECU si la mezcla quedó rica o pobre.

> El objetivo sagrado es **lambda = 1**, la mezcla estequiométrica de **14,7 partes de aire por 1 de nafta**. Es el punto donde el catalizador limpia mejor los gases.

La lógica es contraintuitiva al principio pero simple:
- **Mucho oxígeno en el escape** → sobró aire → **mezcla pobre** → la sonda da **voltaje bajo** → la ECU **agrega** nafta.
- **Poco oxígeno en el escape** → faltó aire → **mezcla rica** → la sonda da **voltaje alto** → la ECU **saca** nafta.

Y lo hace **30 a 40 veces por minuto**, oscilando permanentemente alrededor de lambda 1. Por eso la señal de una sonda buena **nunca está quieta**: sube y baja constantemente. Una sonda "planchada" (quieta) es una sonda muerta.

> 💡 En OBD II hay **dos sondas**: la de **antes** del catalizador regula la mezcla; la de **después** vigila que el catalizador esté funcionando (su señal debe estar mucho más quieta que la de adelante).

---

## Parte 5 — Los sensores de posición: "¿dónde está el motor?"

La ECU no puede inyectar ni encender si no sabe **en qué punto del giro** está el motor. Para eso:

- El **CKP (cigüeñal)** le da las **RPM** y el punto muerto superior. El truco más común: una rueda de **58 dientes con 2 faltantes** — ese "hueco" es la marca que le dice a la ECU dónde está el PMS, como un punto de referencia en una pista.
- El **CMP (árbol de levas)** resuelve una ambigüedad: el cigüeñal gira **dos veces** por cada ciclo completo, así que un mismo diente aparece en compresión y en escape. El sensor de fase desempata: dice **cuál cilindro está realmente comprimiendo**.

> 💡 Por eso la **inyección secuencial** (la más eficiente, un pulso por inyector en el orden de encendido) **necesita el sensor de fase**: sin él, la ECU sabe la posición pero no el cilindro exacto, y tiene que inyectar de a pares (semisecuencial) o todos juntos (simultánea).

---

## Parte 6 — Los actuadores y el ralentí

Los actuadores son los "músculos". El más rico conceptualmente es el **control de ralentí**. Con el pie afuera del acelerador la mariposa está cerrada, pero el motor igual necesita un poco de aire para no apagarse. Ese aire mínimo se llama **Q₀**: se filtra por debajo de la mariposa y viene **regulado de fábrica con un tapón de inviolabilidad** (no se toca). El problema es que la necesidad de aire **cambia con la carga**: motor frío, aire acondicionado, dirección hidráulica, caja automática. Hace falta un **aire extra Q** que la ECU dosifica según dos datos: **RPM** y **temperatura del refrigerante**.

Hay cuatro formas de hacerlo, y conviene verlas como una evolución:

| Actuador | Analogía | Cómo se mueve |
|---|---|---|
| **Válvula de aire adicional** | Una canilla que se abre más o menos según cuán rápido le das golpecitos | Solenoide con **pulsos de masa de frecuencia variable**; un resorte la vuelve a su posición de reposo |
| **Válvula rotativa de ralentí** | Un motorcito que puede girar para los dos lados | **3 pines**: el del centro a **12 V**; la ECU da masa a uno u otro lateral según quiera abrir o cerrar |
| **Motor paso a paso** | Un tornillo que la ECU gira "de a clicks" contados | **2 bobinados**; cada paso avanza el obturador **~0,04 mm**; **~200 pasos = 8 mm** (máximo aire). Como cuenta pasos, sabe siempre dónde está |
| **Regulador de CC (monopunto Bosch)** | En vez de abrir un desvío, **empuja la propia mariposa** | Motor de **12 V**; la ECU **invierte la polaridad** para abrir o cerrar; hasta **~18°** de mariposa |

En el monopunto aparece además el **microinterruptor de ralentí**: cuando soltás el pedal se cierra y le avisa a la ECU "estoy en ralentí". Con ese aviso la ECU hace dos cosas. Si el motor viene con vueltas (desaceleración), **corta la inyección (cut-off)**: no tiene sentido gastar nafta si el auto va "arrastrado". Si las vueltas bajan al ralentí, **regula el mínimo**.

Cuando prendés el A/C y el ralentí no se cae, es este actuador trabajando.

> 💡 **Por qué el ralentí "baila" después de cambiar la batería:** la posición aprendida del actuador de ralentí vive en la **RAM stand-by**. Si se corta la alimentación, la ECU arranca de cero y tiene que volver a aprender andando.

Y el actuador estrella de los autos modernos es el **acelerador electrónico (ETC)**: ya no hay cable entre el pedal y la mariposa. El **pedal** tiene un doble potenciómetro (doble para poder chequearse a sí mismo) que le dice a la ECU cuánto querés acelerar, y la ECU mueve la mariposa con un motorcito. Con el ETC, el ralentí lo hace **la misma mariposa**, sin bypass, y la ECU puede "filtrar" tu pie para cuidar el consumo, las emisiones y la suavidad.

---

## Parte 7 — El final del recorrido: bajar la contaminación

El motor fabrica tres venenos, y cada uno tiene su causa:

| Veneno | De dónde sale | Quién lo combate |
|---|---|---|
| **CO** (monóxido de carbono) | Nafta que quemó **con poco oxígeno** (mezcla rica) | Catalizador (lo **oxida** a CO₂) + sonda lambda (evita la mezcla rica) |
| **HC** (hidrocarburos) | Nafta **sin quemar** (falta de chispa, mezcla mala) | Catalizador (lo oxida a CO₂ + H₂O) + buen encendido |
| **NOx** (óxidos de nitrógeno) | El **nitrógeno del aire (70 %)** que reacciona con oxígeno **a alta temperatura** | **EGR** (baja la temperatura) + catalizador (lo **reduce** a N₂) |

**La EGR** es contraintuitiva: ¿por qué meterías gas de escape, ya quemado, de vuelta en el motor? Justamente **porque ya está quemado**. Es un gas "de relleno" que no aporta energía, absorbe calor y baja la temperatura de la llama. Menos temperatura, menos NOx. La ECU la abre con una **electroválvula que le manda vacío**. Para saber si realmente abrió, algunas EGR traen un **sensor de temperatura (NTC)**: si está **demasiado caliente**, la válvula quedó **abierta siempre**; si está **demasiado fría**, **no está abriendo**.

**El catalizador** es el filtro químico final. Es un panal cerámico con una capa porosa de alúmina (para ganar superficie) recubierta de **platino, paladio y rodio**. El platino **oxida** (CO y HC, sumándoles oxígeno) y el rodio **reduce** (NOx, sacándole oxígeno). Para que eso funcione necesita tres condiciones:
1. **Temperatura:** arranca por encima de **250–300 °C** y trabaja bien entre **400 y 800 °C**. Arriba de 800–1000 °C sostenidos **envejece**, y cerca de **1400 °C se derrite**. Esto último pasa cuando un cilindro falla: la nafta cruda llega al catalizador y se quema adentro.
2. **Mezcla justa (λ ≈ 1):** para oxidar hace falta oxígeno sobrante, y para reducir hace falta que sobre poco. Las dos cosas a la vez solo se dan en una ventana angosta alrededor de lambda 1. Por eso **la sonda lambda es la socia obligatoria del catalizador**.
3. **Nafta sin plomo:** el plomo recubre los metales nobles y lo **envenena** para siempre. Por eso, desde los modelos **1996**, todos lo traen y exigen nafta sin plomo.

> 💡 Todo el sistema conspira hacia el mismo objetivo: quemar la mezcla en el punto justo (**lambda 1**) para que el catalizador pueda hacer su trabajo. La sonda lambda, la EGR y el catalizador son un equipo.

---

## Parte 8 — El encendido sin distribuidor (DIS)

En la 1ª parte viste el distribuidor: un "repartidor" mecánico que manda la alta tensión de **una** bobina a cada bujía en su turno. Tiene piezas que se gastan, hace chispas internas (interferencia) y, a muchas vueltas, la bobina tiene poco tiempo para cargarse.

El **DIS** lo elimina con un truco ingenioso, la **chispa perdida**. En un 4 cilindros, los pistones **1 y 4** suben y bajan **juntos**, y lo mismo pasa con **2 y 3**. Cuando el 1 llega arriba en **compresión**, el 4 llega arriba en **escape**. Entonces se pone **una bobina doble por par**, con un extremo del secundario en cada bujía. La chispa salta **en las dos a la vez**:
- en el cilindro que comprime, enciende la mezcla (**chispa útil**);
- en el que está escapando, salta "al vacío", sin mezcla y casi sin presión, así que cuesta muy poca energía (**chispa perdida**).

Una vuelta después los papeles se invierten. Como el secundario es un circuito en serie que pasa por las dos bujías, **en una la corriente va del centro a masa y en la otra al revés**.

La evolución final es la **bobina sobre bujía** ("estática integral"): **una bobina por cilindro**, sin cables, de **descarga capacitiva** y **más de 40 kV**. La ECU decide el avance de cada chispa según la carga.

> 💡 La lógica es la misma que en la inyección: **sacar lo mecánico y darle el control a la ECU**. Así como el inyector reemplazó al carburador, la bobina comandada por la ECU reemplazó al distribuidor.

---

## 🧠 Las 4 ideas que resumen toda la materia

1. **Es un lazo cerrado:** medir → decidir → ejecutar → volver a medir. La sonda lambda es lo que "cierra" el lazo (mide el resultado y corrige).
2. **Presión constante, tiempo variable:** el sistema de nafta mantiene la presión fija y dosifica variando los milisegundos de apertura del inyector.
3. **Todo depende del voltaje de referencia y la masa:** batería y conexiones flojas hacen "mentir" a todos los sensores a la vez.
4. **La computadora aprende:** la RAM stand-by adapta el motor con el uso; desconectar la batería borra ese aprendizaje.
