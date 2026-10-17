# 🎓 Guía Pedagógica de los TP — ITCA

> Explicación para leer y entender. En lugar de listas de valores, acá desarrollamos el **por qué** de cada cosa: la lógica del sistema, qué se mide y para qué, y los razonamientos de diagnóstico. Los valores numéricos exactos están en `Resumen-TPs.md`; acá lo importante es que **queden los conceptos**.

---

# 🔥 TP1 — Tipos de Encendido

## La idea central que hay que entender

Todo sistema de encendido, por más viejo o moderno que sea, existe para hacer **una sola cosa**: generar una chispa lo suficientemente potente, en el cilindro correcto, en el momento justo. Nada más. Lo que cambia entre un encendido a platinos de los años 70 y uno electrónico moderno **no es el objetivo, sino las herramientas** con que se logra.

Por eso el TP arranca con una idea muy poderosa: sin importar el tipo de encendido, siempre ocurren **los mismos 5 procesos**. Si entendés estos 5 pasos, entendés cualquier encendido que te toque.

### Los 5 procesos (la columna vertebral)

1. **Determinar cuándo salta la chispa** (y a qué cilindro). → Lo decide la leva (en los viejos) o un sensor + rueda dentada + ECU (en los modernos).
2. **Corregir el avance.** → Lo hacen los variadores mecánicos (centrífugo y vacío) o la computadora con sus sensores.
3. **Conmutar** (abrir y cerrar el circuito para "cargar y soltar" la bobina). → Lo hace el ruptor/platino o un transistor.
4. **Elevar la tensión** de 12 V a miles de volts. → Siempre lo hace la bobina.
5. **Distribuir la chispa** al cilindro que corresponde. → El rotor y la tapa, o directamente la ECU.

> 💡 **Concepto clave:** el encendido no evolucionó cambiando *qué* hace, sino *quién* hace cada paso. El platino y el transistor cumplen la misma función (conmutar); el distribuidor y la ECU cumplen la misma función (repartir). Cambia la tecnología, no la lógica.

## ¿Por qué la bobina es el corazón?

La batería da 12 V. Una bujía necesita **miles de volts** para que la chispa salte el espacio entre sus electrodos. La bobina es un **autotransformador**: tiene un bobinado **primario** (pocas vueltas, alambre grueso) y uno **secundario** (muchísimas vueltas, alambre finito).

El truco está en el **magnetismo**:
1. Cuando el primario recibe corriente, se crea un campo magnético (la bobina "se carga").
2. Cuando se **corta bruscamente** esa corriente (al abrir el platino o el transistor), el campo magnético se derrumba de golpe.
3. Ese derrumbe induce en el secundario una tensión altísima (por la enorme relación de vueltas). **Ahí nace la chispa.**

> 💡 **Por eso el momento crítico no es cuando la bobina se carga, sino cuando se DESCARGA** (se corta la corriente). La chispa nace del corte, no de la carga.

Esto explica una advertencia importante del TP: al medir la alimentación del primario, hacelo **rápido**. Con el platino cerrado la bobina se está cargando, y si la dejás cargando mucho tiempo (sin que se corte), se recalienta y se puede dañar.

## Las tres "generaciones" de encendido

### 1. Convencional (a platinos)
El platino es un interruptor mecánico que abre y cierra millones de veces. **Su problema:** al abrirse, salta una chispa entre sus contactos que los va quemando (por eso existe el **condensador**, que absorbe esa chispa). Además, a altas RPM el platino "rebota" y no alcanza a cargar bien la bobina.

### 2. Con balastro (resistencia)
Un truco para mejorar el convencional. Se pone una **resistencia (balastro) en serie** con el primario, y una bobina de menor resistencia (que trabaja a ~9 V). ¿Para qué?
- En marcha normal, el balastro limita la corriente y protege los platinos.
- En el **arranque** (cuando más energía de chispa hace falta), el balastro se **puentea** momentáneamente → la bobina recibe los 12 V plenos → chispa más fuerte para arrancar.

> 💡 **Concepto clave:** por eso en un encendido con balastro, si medís el borne + de la bobina en contacto, encontrás **menos de 12 V** (6–9 V). Eso NO es una falla: es la caída normal en el resistor. En arranque, en cambio, sube a 12 V porque el resistor quedó puenteado.

### 3. Electrónico (transistor)
El transistor reemplaza al platino como conmutador. Ventajas enormes:
- No tiene contactos que se quemen ni reboten.
- Maneja **mucha más corriente** en el primario → chispa más potente.
- Ya no hace falta condensador.

**El módulo** es la pieza que gobierna el transistor. Su función es **conmutar el negativo (–) de la bobina**. Pero el transistor necesita que algo le diga *cuándo* conmutar → ahí entran los **captores**.

## Los dos captores (el corazón del diagnóstico moderno)

### Captor inductivo
Es una **bobina con un imán**. Frente a ella pasa una rueda dentada. Cada vez que un diente pasa, varía el campo magnético y **se induce una tensión alterna (CA)**. Por eso:
- Genera **corriente alterna** (sube y baja como una onda senoidal).
- Su amplitud y frecuencia **dependen de la velocidad de giro**: más rápido gira, más tensión y más frecuencia. (Por eso se mide accionando el arranque.)
- Se puede medir su **resistencia** (tiene bobinado interno) y la **tensión CA** que genera.

### Captor de efecto Hall
Funciona distinto: es un **semiconductor** alimentado que entrega una **señal cuadrada** (tipo interruptor ON/OFF). Una "ventana" (aleta) tapa y destapa un campo magnético:
- Ventana **abierta** → señal ≈ 0 V.
- Ventana **cerrada** → señal alta (50–80% de la alimentación).
- Tiene normalmente **3 pines** (alimentación +, masa – y señal).
- **La amplitud de la señal NO cambia con las RPM** (a diferencia del inductivo); lo que cambia es la **frecuencia**.

> 💡 **Diferencia que siempre se pregunta:** inductivo = 2 cables, señal **alterna** que crece con las RPM. Hall = 3 cables, señal **cuadrada** de amplitud fija, cambia la frecuencia.

## La lógica del diagnóstico (lo que enseña el TP)

El TP no te hace medir "por medir". Cada medición confirma o descarta algo. La secuencia mental es:
1. **¿Llega alimentación a la bobina?** (tensión en el primario).
2. **¿La bobina está sana por dentro?** (resistencia de primario y secundario).
3. **¿El condensador está bien?** (capacidad y aislación).
4. Si sigue sin haber chispa → **lámpara de prueba** para ver si el circuito conmuta bien (destella / siempre encendida / siempre apagada, cada caso apunta a una falla).
5. En electrónicos → verificar **captor** (resistencia + señal generada) y **módulo** (emulando la señal con una pila; si conmuta y da chispa, está bueno).

> 💡 **Concepto clave del oficio:** el buen diagnóstico va **de lo simple a lo complejo** y de lo barato a lo caro. Primero alimentación y cables, después la bobina, y recién al final el módulo (lo más caro). No se cambia una pieza sin confirmar que las anteriores están bien.

---

# ⚡ TP2 — Controles del Alternador

## La idea central

El alternador es **la usina eléctrica del auto en marcha**. La batería solo arranca el auto y cubre picos; **una vez en marcha, el alternador alimenta todo y recarga la batería.** Si el alternador falla, tarde o temprano el auto se queda sin electricidad aunque la batería esté nueva.

## Cómo genera electricidad (el principio)

Es electromagnetismo puro: **si movés un imán cerca de una bobina, en la bobina aparece corriente** (inducción). El alternador aplica esto al revés que un generador viejo:
- **Lo que gira es el imán** (el rotor, un electroimán alimentado por los anillos rozantes).
- **Las bobinas quedan quietas** (el estator).

Como el estator tiene **tres juegos de bobinas a 120°**, genera **corriente alterna trifásica** (tres ondas desfasadas). Pero el auto funciona con **corriente continua** → por eso hace falta rectificar.

> 💡 **Concepto clave:** rotor = imán giratorio (campo magnético). Estator = bobinas fijas (donde nace la corriente). El alternador genera CA; el auto necesita CC; el puente de diodos hace la conversión.

## El puente de diodos y el problema de la autoexcitación

Los **6 diodos de potencia** convierten la CA trifásica en CC (rectificación de onda completa). Esa CC sale por el borne **B+** y alimenta todo.

Pero hay un problema elegante: **el rotor es un electroimán que necesita corriente para generar campo... y esa corriente la produce el propio alternador.** ¿Cómo arranca si todavía no genera?
- Al principio, la **batería** presta una pequeña corriente al rotor (pre-excitación), pasando por la **lámpara testigo** del tablero.
- Una vez que el alternador toma velocidad y genera, los **3 diodos de excitación** (borne D+) toman parte de esa corriente y **realimentan el rotor**. El alternador ya se autoalimenta.
- Por eso la **luz de carga se enciende al dar contacto y se apaga cuando el motor arranca**: al generar ~14 V, la tensión se iguala a ambos lados de la lámpara y se apaga. **Luz que queda prendida = alternador que no carga.**

> 💡 (Esto está desarrollado en detalle en la sección Preguntas y Respuestas del `Resumen-Electricidad-Automotriz.md`.)

## Por qué se necesita el regulador

Sin control, el alternador subiría la tensión de forma lineal con las RPM y "freiría" todo (lámparas, electrónica, batería). El **regulador** mantiene la salida clavada en ~14 V **regulando la corriente de excitación** del rotor (lo enciende y apaga muy rápido, ON/OFF).

Además **compensa por temperatura**: da un poco más de tensión con frío y menos con calor, porque la batería acepta la carga distinto según la temperatura.

## La lógica del diagnóstico (lo que enseña el TP)

Acá hay una regla de oro que se repite en los tres TPs:

> 💡 **SIEMPRE se empieza por la batería.** Una batería fallada no retiene la carga, y entonces cualquier prueba del alternador da resultados engañosos. Primero verificás batería y conexiones, después el circuito de carga.

La secuencia es de **"afuera hacia adentro"**:

1. **Con el alternador montado y andando** (a 2.000 rpm): ¿la tensión de carga está en 13,5–14,5 V? ¿entrega al menos el 60% de su corriente nominal con todo encendido?
2. **Caídas de tensión en los cables:** el alternador puede generar bien, pero si el cable positivo o el de masa tienen resistencia (sulfatos, flojos), a la batería le llega menos. Por eso se mide la caída en B+ (debe ser chica) y en masa (aún más chica).
3. **Estado de los diodos sin desarmar:** midiendo la componente **alterna** en B+. Si aparece CA, es que un diodo dejó pasar la onda sin rectificar → diodo abierto o en corto. También se mide la **fuga** con el motor detenido (un diodo con fuga descarga la batería de noche).
4. **Recién si todo lo anterior está bien y sigue sin cargar → se desarma** y se prueban rotor (continuidad entre anillos + aislación a masa), estator (continuidad + aislación) y diodos uno por uno.

> 💡 **Concepto clave:** un alternador puede "cargar bien en el banco" pero fallar en el auto por culpa de los **cables y conexiones**. Por eso las caídas de tensión son tan importantes: el problema muchas veces no está en la máquina, sino en cómo llega la corriente. Y ojo con lo mecánico: una **correa floja que patina** también da carga insuficiente sin que el alternador tenga nada malo.

---

# 🔋 TP3 — Controles del Motor de Arranque

## La idea central

El motor de arranque tiene un trabajo brutal: **hacer girar todo un motor apagado** venciendo la compresión de los cilindros. Para eso consume **una barbaridad de corriente** (120–400 A) durante unos segundos. Es el mayor consumidor eléctrico del auto por lejos.

Esto explica dos cosas:
- Por qué **descarga la batería si insistís** mucho con la llave.
- Por qué es **tan sensible a la calidad de las conexiones**: con 300 A circulando, un cable flojo o sulfatado cae mucha tensión y el arranque "no tiene fuerza".

## Cómo funciona (las tres piezas)

### El solenoide: dos trabajos en uno
El solenoide es un electroimán con **dos misiones simultáneas**:
1. **Empujar el piñón** hacia afuera para que engrane con la corona del volante.
2. **Cerrar el contacto principal** que deja pasar los 300+ A al motor eléctrico.

Y lo hace con **dos bobinados**:
- El de **llamado/activación** (fuerte, para atraer el émbolo de golpe).
- El de **retención** (más débil, solo para mantenerlo puesto una vez que ya cerró el contacto).

> 💡 **Por qué dos bobinados:** atraer el émbolo desde cero necesita mucha fuerza (bobina de llamado), pero mantenerlo puesto necesita poca (bobina de retención). Usar solo la fuerte gastaría corriente y calor de más; la combinación es eficiente.

### El piñón: el detalle del "engranar antes de girar"
El piñón tiene pocos dientes y engrana con la corona (que tiene muchos). Un detalle fino pero importante: **el piñón debe engranar ANTES de que el motor empiece a girar.** Si girara primero y engranara después, los dientes chocarían y se romperían. Por eso las puntas de los dientes están **estrechadas**, para que "entren" suave.

### La rueda libre: el seguro de vida del arranque
Acá está el concepto más lindo del TP. Relación piñón/corona ≈ **15:1 a 20:1** → el arranque gira 15 a 20 veces más rápido que el motor. Eso está bien para arrancar. **Pero cuando el motor arranca y acelera, se invierte el problema:** ahora es el motor el que arrastraría al arranque a velocidades imposibles.

El ejemplo del TP lo deja clarísimo: con relación 18:1, si el motor sube a 2.000 rpm, el arranque giraría a **36.000 rpm** → se destruye.

La **rueda libre** (embrague de una sola dirección) evita esto: transmite fuerza en el sentido "arranque → motor", pero **patina en el sentido inverso**. En cuanto el motor arranca, desacopla al arranque automáticamente.

> 💡 **Concepto clave:** la rueda libre es un embrague que solo "agarra" en un sentido. Deja que el arranque mueva al motor, pero no deja que el motor acelere al arranque. Sin ella, el arranque se destruiría en cada puesta en marcha.

## La lógica del diagnóstico (lo que enseña el TP)

Igual que en el alternador, la regla de oro:

> 💡 **Un arranque que "no tiene fuerza" muchas veces NO es culpa del arranque.** Antes de tocarlo, se revisan las causas "de afuera": ¿la batería está cargada? ¿el alternador la mantiene bien? ¿hay fugas que la descargan de noche (>30 mA)? Un arranque lento a la mañana suele ser batería/alternador, no el motor de arranque.

La secuencia:

1. **Eficacia de la batería:** con la batería reposada, se acciona el arranque 10 s y se mira que la tensión no se caiga demasiado (no baje de ~9,6 V) y que entregue la corriente esperada (120–200 A). Si la tensión se desploma, la batería no da.
2. **Caídas de tensión en cables** (alimentación y masa): con esas corrientes gigantes, cualquier resistencia en el camino se "come" la tensión. Deben ser mínimas.
3. **Excitación del solenoide** (terminal 50) y **caída entre sus contactos:** confirma que al solenoide le llega orden y que sus contactos internos no están gastados.
4. **Recién ahí se desarma** y se prueba por dentro: resistencia de los dos bobinados del solenoide, el **inducido con inductómetro** (si la varilla vibra, hay cortocircuito), y las pruebas de **continuidad y aislación** con lámpara.

### Un detalle de seguridad importante
Varias pruebas de aislación se hacen con **lámpara de 220 V CA**. La regla es simple: **la lámpara NO debe encender.** Si enciende, hay una fuga a masa donde no debería haberla. ⚠️ Son pruebas peligrosas por la tensión: se hacen con cuidado y con los elementos bien aislados.

> 💡 **Concepto clave del oficio (los tres TP lo comparten):** primero se descarta lo externo y barato (batería, cables, conexiones), y solo entonces se desarma la máquina. Y toda prueba de aislación busca lo mismo: que la corriente vaya **solo por donde debe** y no se fugue a masa. Continuidad = "¿hay camino donde debe haberlo?"; Aislación = "¿NO hay camino donde no debe haberlo?".

---

## 🧠 Los 3 conceptos que unen a los tres TP

1. **Siempre de lo simple a lo complejo, y de lo barato a lo caro.** Se descartan batería, cables y conexiones antes de desarmar o cambiar la pieza cara.
2. **La batería es el punto de partida de todo diagnóstico eléctrico.** Una batería fallada envenena cualquier medición.
3. **Continuidad vs. Aislación son las dos preguntas de oro.** Continuidad: ¿la corriente puede pasar por donde debe? Aislación: ¿NO se está fugando por donde no debe? Casi todo el diagnóstico se reduce a estas dos.
