# 📝 Examen — Electricidad Automotriz (ITCA)

> 511 preguntas (opción múltiple y verdadero/falso), en dos partes. **1ª parte (1–323):** electricidad básica, encendido, arranque, alternador, bobinas y un simulacro de examen. **2ª parte (324–511, desde el header "2ª PARTE"):** súper quiz de sensores de inyección, el repaso de inyección (ex `Examen-Inyeccion-Nafta.md`) y el súper quiz 2 sobre señales, ECU, sistemas Bosch, combustible, actuadores de ralentí, catalizador, EGR y DIS. Debajo de cada respuesta hay una breve explicación (💡).

---

## Bloque 1 — Electricidad básica, magnitudes y leyes (1–20)

**1. Un átomo al que se le quitan electrones queda cargado y se denomina:**
a) Ion negativo
b) Ion positivo
c) Neutrón
d) Molécula

**Respuesta: b) Ion positivo**

> 💡 Quitar electrones deja al átomo con exceso de protones (carga +): es un ion positivo.
---

**2. La corriente eléctrica, definida como flujo de electrones, se desplaza:**
a) Del polo positivo al negativo
b) Del potencial negativo al positivo
c) Siempre en corriente alterna
d) Solo dentro del núcleo atómico

**Respuesta: b) Del potencial negativo al positivo**

> 💡 El flujo real de electrones (corriente electrónica) va del polo negativo al positivo.
---

**3. ¿Cuál de los siguientes materiales tiene la MENOR resistividad (mejor conductor)?**
a) Cobre (0,017)
b) Aluminio (0,27)
c) Plata (0,016)
d) Hierro (0,13)

**Respuesta: c) Plata (0,016)**

> 💡 Menor resistividad = mejor conductor; la plata (0,016) es la más baja de la lista. (Ojo: 0,27 para el aluminio es el dato del manual; el valor real es ~0,028.)
---

**4. Un material con coeficiente de temperatura NEGATIVO (NTC):**
a) Aumenta su resistencia al calentarse
b) Disminuye su resistencia al calentarse
c) Mantiene constante su resistencia
d) Solo conduce en corriente alterna

**Respuesta: b) Disminuye su resistencia al calentarse**

> 💡 NTC = coeficiente negativo: al calentarse, su resistencia baja.
---

**5. En una asociación de resistencias en PARALELO, la resistencia total es:**
a) La suma de todas las resistencias
b) Igual a la mayor resistencia
c) Siempre menor que la resistencia más pequeña
d) El promedio de las resistencias

**Respuesta: c) Siempre menor que la resistencia más pequeña**

> 💡 En paralelo la corriente tiene más caminos, así que la resistencia total es menor que la más chica.
---

**6. Lo que caracteriza a una asociación en SERIE es que:**
a) La tensión es la misma en todas las resistencias
b) La corriente es la misma en todas las resistencias
c) Hay varios caminos para la corriente
d) La resistencia total disminuye

**Respuesta: b) La corriente es la misma en todas las resistencias**

> 💡 En serie hay un solo camino, por eso la misma corriente atraviesa todas las resistencias.
---

**7. Según la 1ª Ley de Kirchhoff, en un nudo:**
a) La suma de caídas de tensión es igual a la tensión aplicada
b) La suma de corrientes entrantes es igual a la suma de las salientes
c) La resistencia total es la suma de las parciales
d) La potencia se conserva como calor

**Respuesta: b) La suma de corrientes entrantes es igual a la suma de las salientes**

> 💡 1ª ley de Kirchhoff (nudos): lo que entra al nudo es igual a lo que sale.
---

**8. Un motor de arranque de 12 V que consume 150 A desarrolla una potencia de:**
a) 162 W
b) 1800 W
c) 12,5 W
d) 746 W

**Respuesta: b) 1800 W**

> 💡 P = V × I = 12 × 150 = 1800 W.
---

**9. La equivalencia correcta de 1 HP (caballo de potencia) es:**
a) 1000 W
b) 550 W
c) 746 W
d) 736 W

**Respuesta: c) 746 W**

> 💡 Por definición, 1 HP = 746 W.
---

**10. La resistividad de un material se mide tomando una muestra de:**
a) 1 metro de largo y 1 mm² de sección
b) 1 cm de largo y 1 cm² de sección
c) 1 metro de largo y 1 cm² de sección
d) 1 mm de largo y 1 m² de sección

**Respuesta: a) 1 metro de largo y 1 mm² de sección**

> 💡 La resistividad se define sobre una muestra de 1 m de largo y 1 mm² de sección.
---

**11. En la corriente continua, la gráfica tensión-tiempo (V-t) se representa como:**
a) Una onda senoidal
b) Una línea recta de valor V
c) Una curva exponencial
d) Una onda cuadrada

**Respuesta: b) Una línea recta de valor V**

> 💡 En CC la tensión es constante en el tiempo, por eso en V-t es una recta horizontal.
---

**12. La resistencia por contacto entre dos conductores unidos por presión se debe a que:**
a) El metal aumenta su resistividad al unirse
b) La superficie real de contacto es menor por los espacios intermoleculares
c) Se genera un campo magnético opositor
d) La corriente cambia de sentido en la unión

**Respuesta: b) La superficie real de contacto es menor por los espacios intermoleculares**

> 💡 La materia no es continua: el contacto real es menor que la superficie aparente, y eso agrega resistencia.
---

**13. Según la ley de Ohm, la intensidad de corriente es:**
a) Directamente proporcional a la resistencia
b) Inversamente proporcional a la tensión
c) Directamente proporcional a la tensión e inversamente proporcional a la resistencia
d) Independiente de la resistencia

**Respuesta: c) Directamente proporcional a la tensión e inversamente proporcional a la resistencia**

> 💡 Ley de Ohm (I = V/R): la corriente sube con la tensión y baja con la resistencia.
---

**14. El agua destilada se comporta como:**
a) Un buen conductor siempre
b) Un aislante, salvo que contenga sales o ácido
c) Un semiconductor tipo N
d) Un dieléctrico de constante 1

**Respuesta: b) Un aislante, salvo que contenga sales o ácido**

> 💡 El agua destilada pura es aislante; con sales o ácido se vuelve conductora.
---

**15. En un circuito con dos resistencias de 1 KΩ en paralelo sobre 12 V, la corriente total tomada de la batería es:**
a) 12 mA
b) 6 mA
c) 24 mA
d) 48 mA

**Respuesta: c) 24 mA**

> 💡 Cada rama de 1 KΩ toma 12 mA (12/1000); dos ramas en paralelo suman 24 mA.
---

**16. El núcleo de un átomo concentra:**
a) Casi toda la masa del átomo
b) Solo los electrones
c) Las cargas negativas
d) La energía cinética de los electrones

**Respuesta: a) Casi toda la masa del átomo**

> 💡 El núcleo (protones + neutrones) concentra casi toda la masa del átomo.
---

**17. El múltiplo del Ohm que se adopta para los cuerpos aisladores es:**
a) El miliohm
b) El microohm
c) El Megaohm
d) El kiloamperio

**Respuesta: c) El Megaohm**

> 💡 Los aisladores tienen resistencias enormes, por eso se usa el Megaohm (millón de ohms).
---

**18. En la corriente alterna, los electrones:**
a) Se desplazan del negativo al positivo permanentemente
b) Oscilan a ambos lados de su posición fija a una frecuencia determinada
c) No se mueven en absoluto
d) Circulan solo por la superficie del conductor

**Respuesta: b) Oscilan a ambos lados de su posición fija a una frecuencia determinada**

> 💡 En corriente alterna los electrones oscilan alrededor de su posición a una frecuencia dada.
---

**19. La tensión eléctrica (E, U) se define como:**
a) La cantidad de electrones que circulan por segundo
b) La oposición al paso de la corriente
c) La fuerza que se aplica para que circule la corriente
d) La energía disipada en forma de calor

**Respuesta: c) La fuerza que se aplica para que circule la corriente**

> 💡 La tensión es la fuerza (presión eléctrica) que impulsa la circulación de corriente.
---

**20. En la 2ª Ley de Kirchhoff, si un circuito serie tiene caídas de 6 V, 3 V y 3 V, la tensión aplicada es:**
a) 6 V
b) 9 V
c) 12 V
d) 4 V

**Respuesta: c) 12 V**

> 💡 2ª ley de Kirchhoff: la tensión aplicada es la suma de las caídas → 6+3+3 = 12 V.
---

## Bloque 2 — Magnetismo, instrumentos y baterías (21–36)

**21. Los materiales que alinean sus momentos magnéticos ante un campo y los mantienen alineados se denominan:**
a) Dieléctricos
b) Ferromagnéticos
c) Paramagnéticos débiles
d) Semiconductores

**Respuesta: b) Ferromagnéticos**

> 💡 Los ferromagnéticos alinean y mantienen sus momentos magnéticos frente a un campo.
---

**22. Las líneas de flujo magnético:**
a) Se cortan entre sí en los polos
b) Salen del polo sur y entran por el norte
c) Son continuas y no se cruzan entre sí
d) Solo existen en electroimanes

**Respuesta: c) Son continuas y no se cruzan entre sí**

> 💡 Las líneas de flujo son cerradas y continuas; nunca se cortan ni se cruzan.
---

**23. El principio en el que se basa el funcionamiento del alternador es:**
a) El efecto Joule
b) La inducción electromagnética
c) La resistencia por contacto
d) El efecto Hall

**Respuesta: b) La inducción electromagnética**

> 💡 El alternador genera electricidad por inducción electromagnética (imán en movimiento).
---

**24. El amperímetro debe conectarse:**
a) En paralelo y con alta resistencia interna
b) En serie y con baja resistencia interna
c) En paralelo y con baja resistencia interna
d) En serie y con alta resistencia interna

**Respuesta: b) En serie y con baja resistencia interna**

> 💡 El amperímetro va en serie y con baja resistencia para no alterar la corriente que mide.
---

**25. El "shunt" de un amperímetro es:**
a) Una bobina de hilo fino con muchas espiras
b) Un resistor de muy bajo valor en paralelo con el devanado
c) Un condensador de protección
d) Un diodo rectificador

**Respuesta: b) Un resistor de muy bajo valor en paralelo con el devanado**

> 💡 El shunt es un resistor de muy bajo valor en paralelo que desvía casi toda la corriente.
---

**26. El voltímetro debe poseer una resistencia interna:**
a) Lo más baja posible, para no caer tensión
b) Lo más alta posible, para no consumir corriente apreciable
c) Igual a la del circuito medido
d) Nula

**Respuesta: b) Lo más alta posible, para no consumir corriente apreciable**

> 💡 El voltímetro va en paralelo con alta resistencia para no consumir corriente y no falsear la medida.
---

**27. La pinza amperométrica mide la corriente:**
a) Abriendo el circuito e intercalando el instrumento
b) De forma indirecta, a partir del campo magnético del conductor
c) Midiendo la caída de tensión en un shunt interno
d) Solo en corriente continua

**Respuesta: b) De forma indirecta, a partir del campo magnético del conductor**

> 💡 La pinza mide sin abrir el circuito, detectando el campo magnético que genera la corriente.
---

**28. En una batería plomo-ácido, la materia activa de las placas POSITIVAS es:**
a) Plomo esponjoso
b) Peróxido (piróxido) de plomo (PbO₂)
c) Sulfato de plomo
d) Aleación plomo-antimonio

**Respuesta: b) Peróxido (piróxido) de plomo (PbO₂)**

> 💡 Las placas positivas son de peróxido (piróxido) de plomo, PbO₂, de color café oscuro.
---

**29. La densidad del electrolito de una batería a plena carga (25 °C) es aproximadamente:**
a) 1,120 gr/cm³
b) 1,190 gr/cm³
c) 1,265 gr/cm³
d) 2,10 gr/cm³

**Respuesta: c) 1,265 gr/cm³**

> 💡 A plena carga y 25 °C la densidad del electrolito es ≈ 1,265 gr/cm³.
---

**30. La tensión a circuito abierto de una celda completamente cargada es de:**
a) 1,4 V
b) 2,1 V
c) 12 V
d) 6 V

**Respuesta: b) 2,1 V**

> 💡 Cada celda cargada entrega 2,1 V a circuito abierto.
---

**31. Durante la DESCARGA de la batería, sobre las placas se forma:**
a) Peróxido de plomo
b) Plomo esponjoso
c) Sulfato de plomo
d) Óxido de aluminio

**Respuesta: c) Sulfato de plomo**

> 💡 En la descarga, el ácido reacciona con las placas y forma sulfato de plomo.
---

**32. La corrección por temperatura de la densidad es de ±0,004 gr/cm³ por cada:**
a) 1 °C
b) 5,5 °C
c) 10 °C
d) 25 °C

**Respuesta: b) 5,5 °C**

> 💡 La corrección es ±0,004 gr/cm³ por cada 5,5 °C respecto a los 25 °C de referencia.
---

**33. El CCA (Cold Cranking Amperes) de una batería indica:**
a) La capacidad de entrega de corriente en forma instantánea
b) La corriente constante durante 20 horas
c) La tensión nominal en frío
d) El tiempo de reserva en minutos

**Respuesta: a) La capacidad de entrega de corriente en forma instantánea**

> 💡 El CCA es la corriente que la batería entrega en forma instantánea para el arranque en frío.
---

**34. Los gases que desprende una batería durante la carga son:**
a) Dióxido de carbono y nitrógeno
b) Hidrógeno y oxígeno (mezcla explosiva)
c) Vapor de ácido sulfúrico
d) Metano

**Respuesta: b) Hidrógeno y oxígeno (mezcla explosiva)**

> 💡 La carga descompone el agua en hidrógeno y oxígeno, que juntos forman mezcla explosiva.
---

**35. La intensidad recomendada para cargar totalmente una batería es igual a:**
a) Su capacidad nominal multiplicada por 20
b) Su capacidad nominal dividida por 20
c) La mitad de su capacidad nominal
d) El CCA dividido por 10

**Respuesta: b) Su capacidad nominal dividida por 20**

> 💡 La intensidad de carga se calcula como la capacidad nominal dividida por 20.
---

**36. En una batería de libre mantenimiento, un visor de control de color NEGRO indica:**
a) Carga correcta
b) Que requiere carga
c) Cortocircuito interno
d) Nivel de electrolito bajo

**Respuesta: b) Que requiere carga**

> 💡 En el visor de control, negro = requiere carga (verde = carga OK).
---

## Bloque 3 — Relés, conductores, fusibles y semiconductores (37–50)

**37. La gran ventaja del relé es:**
a) Aumentar la tensión de la batería
b) La separación eléctrica total entre el circuito de accionamiento (bobina) y el controlado (contactos)
c) Rectificar la corriente alterna
d) Almacenar carga eléctrica

**Respuesta: b) La separación eléctrica total entre el circuito de accionamiento (bobina) y el controlado (contactos)**

> 💡 La ventaja del relé es aislar el circuito de mando (bobina) del de potencia (contactos).
---

**38. Un contacto de relé Normal Cerrado (N.C.):**
a) Conecta el circuito cuando el relé se activa
b) Desconecta el circuito cuando el relé se activa
c) Controla dos circuitos a la vez
d) Siempre está abierto

**Respuesta: b) Desconecta el circuito cuando el relé se activa**

> 💡 Normal cerrado (N.C.): al activarse el relé, abre y desconecta el circuito.
---

**39. En la nomenclatura de un relé universal, el terminal N° 30 corresponde a:**
a) Salida de positivo
b) Positivo directo (batería)
c) Negativo a bobina
d) Positivo de contacto a bobina

**Respuesta: b) Positivo directo (batería)**

> 💡 El terminal 30 es el positivo directo que viene de la batería.
---

**40. En el sistema de calibres de cables, ¿cuál es el MÁS grueso?**
a) Calibre N° 20
b) Calibre N° 16
c) Calibre N° 4
d) Calibre N° 0

**Respuesta: d) Calibre N° 0**

> 💡 En los calibres, a menor número mayor sección: el 0 es el más grueso.
---

**41. Un fusible de color ROJO corresponde a una capacidad de:**
a) 5 A
b) 10 A
c) 15 A
d) 20 A

**Respuesta: b) 10 A**

> 💡 En el código de fusibles, el rojo corresponde a 10 A.
---

**42. Para reparaciones eléctricas NUNCA debe usarse:**
a) Soldadura de estaño con núcleo de resina
b) Tubo termocontraíble
c) Soldadura con núcleo de ácido (es corrosiva)
d) Terminales de empalme

**Respuesta: c) Soldadura con núcleo de ácido (es corrosiva)**

> 💡 La soldadura con núcleo de ácido es corrosiva; se usa la de estaño con núcleo de resina.
---

**43. Un diodo de silicio conduce en directa con una caída aproximada de:**
a) 0,6 – 0,7 V
b) 1,5 V
c) 5 V
d) 12 V

**Respuesta: a) 0,6 – 0,7 V**

> 💡 Un diodo de silicio conduce en directa con una caída de ~0,6–0,7 V.
---

**44. Un semiconductor tipo P se obtiene dopando el silicio con:**
a) Fósforo o arsénico
b) Galio o boro
c) Cobre
d) Antimonio

**Respuesta: b) Galio o boro**

> 💡 El semiconductor tipo P es silicio dopado con galio o boro (exceso de huecos).
---

**45. Los diodos deben funcionar siempre con:**
a) Un condensador en serie
b) Una resistencia de protección para limitar la corriente
c) Polaridad invertida
d) Refrigeración líquida

**Respuesta: b) Una resistencia de protección para limitar la corriente**

> 💡 El diodo necesita una resistencia de protección que limite la corriente a un valor admisible.
---

**46. La capacidad de un condensador AUMENTA cuando:**
a) Se aumenta la superficie de placas y se disminuye la distancia entre ellas
b) Se disminuye la superficie de placas
c) Se aumenta la distancia entre placas
d) Se reduce la constante dieléctrica

**Respuesta: a) Se aumenta la superficie de placas y se disminuye la distancia entre ellas**

> 💡 La capacidad crece al aumentar la superficie de placas y al reducir la distancia entre ellas.
---

**47. La constante dieléctrica de referencia del aire es:**
a) 0
b) 1
c) 8
d) 80

**Respuesta: b) 1**

> 💡 El aire se toma como dieléctrico de referencia, con constante 1.
---

**48. Los tres terminales de un transistor son:**
a) Ánodo, cátodo y compuerta
b) Base, colector y emisor
c) Positivo, negativo y masa
d) Drenaje, fuente y núcleo

**Respuesta: b) Base, colector y emisor**

> 💡 El transistor tiene tres terminales: base, colector y emisor.
---

**49. Al medir un transistor bipolar con el multímetro en posición diodo, entre COLECTOR y EMISOR:**
a) Conduce en ambos sentidos
b) Conduce solo en directa
c) No conduce en ningún sentido
d) Conduce solo en inversa

**Respuesta: c) No conduce en ningún sentido**

> 💡 Colector-emisor no conduce en ningún sentido (equivale a dos diodos enfrentados).
---

**50. En el símbolo del transistor, la flecha del emisor:**
a) Apunta siempre hacia la base
b) Indica la dirección del flujo de corriente y apunta hacia el material N
c) Solo aparece en transistores de efecto de campo
d) Indica el terminal de mayor potencia

**Respuesta: b) Indica la dirección del flujo de corriente y apunta hacia el material N**

> 💡 En el símbolo, la flecha está en el emisor e indica el flujo apuntando hacia el material N.
---

## Bloque 4 — Sistema de encendido (51–66)

**51. La bobina de ignición es en realidad un:**
a) Rectificador de corriente
b) Autotransformador de corriente
c) Condensador de alta tensión
d) Generador de impulsos

**Respuesta: b) Autotransformador de corriente**

> 💡 La bobina es un autotransformador: eleva los 12 V hasta miles de volts para la chispa.
---

**52. El bobinado SECUNDARIO de la bobina consta aproximadamente de:**
a) 150 a 250 vueltas de alambre de 0,7 mm
b) 15.000 a 25.000 vueltas de alambre de 0,04 mm
c) 1.000 vueltas de alambre de 1 mm
d) 500 vueltas de alambre de 0,5 mm

**Respuesta: b) 15.000 a 25.000 vueltas de alambre de 0,04 mm**

> 💡 El secundario tiene 15.000–25.000 vueltas de alambre finísimo (0,04 mm).
---

**53. El condensador del sistema de encendido se conecta:**
a) En serie con los platinos
b) En paralelo con los platinos
c) En serie con la bobina secundaria
d) A masa directamente

**Respuesta: b) En paralelo con los platinos**

> 💡 El condensador se conecta en paralelo con los platinos.
---

**54. El "ángulo de contacto" (Dwell) es:**
a) El tiempo en que los platinos permanecen abiertos
b) Los grados que gira la leva con los contactos cerrados
c) El ángulo de avance centrífugo
d) La separación máxima entre electrodos de la bujía

**Respuesta: b) Los grados que gira la leva con los contactos cerrados**

> 💡 El dwell (ángulo de contacto) son los grados que gira la leva con los platinos cerrados, cargando la bobina.
---

**55. Si la luz de platinos es MAYOR que la adecuada:**
a) Aumenta el ángulo de contacto y se atrasa la chispa
b) Se reduce el ángulo de contacto y se adelanta la chispa
c) No afecta al funcionamiento del motor
d) Se quema el condensador

**Respuesta: b) Se reduce el ángulo de contacto y se adelanta la chispa**

> 💡 Más luz de platinos reduce el ángulo de contacto y adelanta el salto de chispa.
---

**56. Los contactos ruptores (platinos) se construyen generalmente de:**
a) Cobre
b) Aluminio
c) Tungsteno
d) Plata

**Respuesta: c) Tungsteno**

> 💡 Los platinos son de tungsteno por su alta resistencia al desgaste.
---

**57. El mecanismo de avance por VACÍO actúa en función de:**
a) Las RPM del motor
b) La depresión del múltiple de admisión (posición de la mariposa)
c) La temperatura del refrigerante
d) La carga de la batería

**Respuesta: b) La depresión del múltiple de admisión (posición de la mariposa)**

> 💡 El avance por vacío actúa según la depresión del múltiple (posición de la mariposa/carga).
---

**58. El mecanismo de avance CENTRÍFUGO adelanta la chispa en función de:**
a) La depresión del múltiple
b) Las RPM del motor (contrapesos)
c) La apertura de la mariposa
d) La tensión de la bobina

**Respuesta: b) Las RPM del motor (contrapesos)**

> 💡 El avance centrífugo adelanta la chispa según las RPM, mediante contrapesos.
---

**59. La corriente de "extra-ruptura" (~300 V) que aparece al abrir los platinos es absorbida por:**
a) La bobina secundaria
b) El condensador
c) La batería directamente
d) El rotor del distribuidor

**Respuesta: b) El condensador**

> 💡 El condensador absorbe la corriente de extra-ruptura y evita que se quemen los platinos.
---

**60. El orden de encendido típico de un motor de 4 cilindros es:**
a) 1-2-3-4
b) 1-3-4-2 (o 1-2-4-3)
c) 1-5-3-6-2-4
d) 1-4-2-3 únicamente

**Respuesta: b) 1-3-4-2 (o 1-2-4-3)**

> 💡 El orden de encendido de un 4 cilindros es 1-3-4-2 (o 1-2-4-3).
---

**61. La puesta a punto DINÁMICA del encendido se realiza con:**
a) Una lámpara de prueba y el motor parado
b) Una lámpara estroboscópica y el motor en marcha a ralentí
c) Un densímetro
d) Un óhmetro en el rotor

**Respuesta: b) Una lámpara estroboscópica y el motor en marcha a ralentí**

> 💡 La puesta a punto dinámica se hace con lámpara estroboscópica y el motor en marcha a ralentí.
---

**62. En el encendido con resistencia BALASTRO, durante el arranque la resistencia:**
a) Se conecta en serie para reducir la corriente
b) Es puenteada momentáneamente para dar más energía de chispa
c) Se calienta al máximo
d) Se desconecta permanentemente

**Respuesta: b) Es puenteada momentáneamente para dar más energía de chispa**

> 💡 Durante el arranque se puentea el balastro para que la bobina reciba tensión plena y dé más chispa.
---

**63. En el encendido electrónico INDUCTIVO, el rotor (rueda dentada) tiene tantos dientes como:**
a) Vueltas del secundario
b) Cilindros posee el motor
c) Voltios de la batería
d) Bujías por cilindro

**Respuesta: b) Cilindros posee el motor**

> 💡 La rueda del captor inductivo tiene tantos dientes como cilindros tiene el motor.
---

**64. En el encendido por efecto HALL, el salto de la chispa se produce cuando:**
a) La aleta del rotor entra en el entrehierro
b) La aleta abandona el entrehierro y el campo atraviesa la capa Hall
c) El condensador se descarga
d) Los platinos se cierran

**Respuesta: b) La aleta abandona el entrehierro y el campo atraviesa la capa Hall**

> 💡 En Hall, la chispa salta cuando la aleta abandona el entrehierro y el campo vuelve a atravesar la capa Hall.
---

**65. En el encendido CDI (descarga capacitiva), la energía se acumula en:**
a) El campo magnético de la bobina primaria
b) El campo eléctrico de un condensador (hasta ~400 V)
c) La batería
d) El bobinado del rotor

**Respuesta: b) El campo eléctrico de un condensador (hasta ~400 V)**

> 💡 En el CDI la energía se acumula en el campo eléctrico de un condensador (hasta ~400 V).
---

**66. En el sistema DIS de "chispa perdida", ambos extremos del secundario alimentan:**
a) Una sola bujía por vez
b) Dos bujías de cilindros que forman pares de trabajo
c) Todas las bujías simultáneamente
d) El rotor del distribuidor

**Respuesta: b) Dos bujías de cilindros que forman pares de trabajo**

> 💡 En DIS de chispa perdida, una bobina alimenta dos bujías de cilindros que forman pares de trabajo.
---

## Bloque 5 — Motor de arranque y alternador (67–80)

**67. El consumo aproximado de corriente de un motor de arranque es de:**
a) 40 a 50 A
b) 400 a 500 A
c) 1 a 5 A
d) 150 a 200 A

**Respuesta: b) 400 a 500 A**

> 💡 El motor de arranque consume muchísima corriente: unos 400–500 A. (Dato del manual; el TP de arranque da 120–400 A.)
---

**68. La relación de engranaje entre corona y piñón del arranque es aproximadamente:**
a) 1:1 a 1:2
b) 1:10 a 1:15
c) 1:50
d) 1:100

**Respuesta: b) 1:10 a 1:15**

> 💡 La relación piñón/corona es de aproximadamente 1:10 a 1:15. (Dato del manual; el TP lo expresa como 15:1 a 20:1.)
---

**69. La "fuerza contraelectromotriz" en el motor de arranque:**
a) Aumenta la corriente al subir la velocidad
b) Aparece al girar el motor y reduce la corriente a medida que sube la velocidad
c) Solo existe en el solenoide
d) Es independiente de la velocidad

**Respuesta: b) Aparece al girar el motor y reduce la corriente a medida que sube la velocidad**

> 💡 Al girar, el motor genera una fuerza contraelectromotriz que reduce la corriente y el par al subir la velocidad.
---

**70. Durante la fase de RETENCIÓN del solenoide:**
a) Circula corriente por ambas bobinas (activación y retención)
b) Solo la bobina de retención mantiene el émbolo; no pasa corriente por la de activación
c) El piñón se retrae
d) Se corta el contacto principal

**Respuesta: b) Solo la bobina de retención mantiene el émbolo; no pasa corriente por la de activación**

> 💡 En la fase de retención, solo la bobina de retención sostiene el émbolo (no pasa corriente por la de activación).
---

**71. El terminal por el que ingresa la corriente de la batería al solenoide en START es el:**
a) Terminal 30
b) Terminal 50
c) Terminal 87
d) Terminal 15

**Respuesta: b) Terminal 50**

> 💡 En posición START la corriente ingresa al solenoide por el terminal 50.
---

**72. El inducido del motor de arranque puede alcanzar velocidades de hasta:**
a) 3.000 rpm
b) 10.000 rpm
c) 30.000 rpm
d) 100.000 rpm

**Respuesta: c) 30.000 rpm**

> 💡 El inducido puede llegar a girar hasta 30.000 rpm.
---

**73. Las escobillas del motor de arranque están hechas de:**
a) Tungsteno puro
b) Mezcla de polvos sinterizados con alto porcentaje de carbono y cobre
c) Aleación plomo-antimonio
d) Acero galvanizado

**Respuesta: b) Mezcla de polvos sinterizados con alto porcentaje de carbono y cobre**

> 💡 Las escobillas son de polvos sinterizados con mucho carbono y algo de cobre: conducen bien y se gastan ellas, no el colector.
---

**74. Una ventaja de la excitación por IMANES PERMANENTES frente a la eléctrica es que:**
a) El flujo magnético se mantiene constante (no cae con la tensión de la batería)
b) Alcanza mayor par de aceleración sin reductor
c) No sufre desmagnetización nunca
d) No requiere escobillas

**Respuesta: a) El flujo magnético se mantiene constante (no cae con la tensión de la batería)**

> 💡 Con imanes permanentes el flujo magnético queda constante (no cae con la tensión de la batería).
---

**75. La verificación de la potencia del motor de arranque se realiza con un cable de alimentación de:**
a) 0,1 Ω y batería al 100%
b) 1 Ω y batería cargada al 70%
c) 10 Ω y batería descargada
d) Sin resistencia

**Respuesta: b) 1 Ω y batería cargada al 70%**

> 💡 La potencia se verifica con un cable de 1 Ω y la batería cargada al 70% (dato del manual; un cable de 1 Ω real limitaría la corriente a ~12 A, seguramente quiso decir 1 mΩ).
---

**76. En el alternador, a diferencia del generador, lo que se mueve es:**
a) Los conductores de la armadura
b) El campo magnético (rotor)
c) El puente rectificador
d) El regulador

**Respuesta: b) El campo magnético (rotor)**

> 💡 A diferencia del generador, en el alternador gira el campo magnético (rotor) y el estator queda fijo.
---

**77. El puente rectificador estándar del alternador está formado por:**
a) 3 diodos
b) 6 diodos de potencia (3 positivos y 3 negativos)
c) 12 diodos
d) 2 tiristores

**Respuesta: b) 6 diodos de potencia (3 positivos y 3 negativos)**

> 💡 El puente rectificador estándar tiene 6 diodos de potencia (3 positivos y 3 negativos), para onda completa.
---

**78. La función de los 3 diodos de EXCITACIÓN es:**
a) Rectificar toda la corriente de salida del alternador
b) Derivar corriente para alimentar el bobinado de excitación (rotor) por el borne D+, hasta ~1 A
c) Regular la tensión de salida
d) Refrigerar el estator

**Respuesta: b) Derivar corriente para alimentar el bobinado de excitación (rotor) por el borne D+, hasta ~1 A**

> 💡 Los 3 diodos de excitación derivan corriente al bobinado del rotor por el borne D+ (hasta ~1 A).
---

**79. El regulador de tensión mantiene constante la salida del alternador regulando:**
a) La velocidad del motor
b) La corriente de excitación (campo magnético) mediante ciclos ON/OFF
c) El número de diodos activos
d) La sección de los cables

**Respuesta: b) La corriente de excitación (campo magnético) mediante ciclos ON/OFF**

> 💡 El regulador mantiene la salida constante regulando la corriente de excitación con ciclos ON/OFF.
---

**80. La compensación térmica del regulador entrega una tensión:**
a) Más alta con temperaturas altas y más baja con temperaturas bajas
b) Más alta con temperaturas bajas y más baja con temperaturas altas
c) Constante sin importar la temperatura
d) Nula por debajo de 0 °C

**Respuesta: b) Más alta con temperaturas bajas y más baja con temperaturas altas**

> 💡 La compensación térmica da más tensión con frío y menos con calor, para cargar bien en cualquier clima.
---

## Bloque 6 — Bobinas de encendido y módulos (81–95)

**81. ¿En qué principio físico se basa la bobina de encendido?**
a) En el efecto Joule
b) En el principio del transformador y la ley de inducción
c) En el efecto Hall
d) En la resistencia por contacto

**Respuesta: b) En el principio del transformador y la ley de inducción**

> 💡 La bobina funciona como transformador y se basa en la ley de inducción.
---

**82. ¿En qué momento se genera realmente la alta tensión de la chispa?**
a) Cuando la corriente primaria se establece (carga)
b) Cuando se corta bruscamente la corriente primaria
c) Cuando el secundario se conecta a masa
d) Cuando el condensador se descarga

**Respuesta: b) Cuando se corta bruscamente la corriente primaria**

> 💡 La alta tensión nace al cortar bruscamente la corriente primaria (colapso del campo magnético).
---

**83. La resistencia típica del bobinado primario de una bobina moderna es del orden de:**
a) 0,3 a 0,6 Ω
b) 5 a 20 kΩ
c) 100 a 250 Ω
d) 1 a 2 MΩ

**Respuesta: a) 0,3 a 0,6 Ω**

> 💡 La resistencia del primario en una bobina moderna es de 0,3 a 0,6 Ω.
---

**84. La resistencia típica del bobinado secundario está en el orden de:**
a) 0,5 a 1 Ω
b) 5 a 20 kΩ
c) 45 kV
d) 2 a 4 Ω

**Respuesta: b) 5 a 20 kΩ**

> 💡 La resistencia del secundario está en el orden de 5 a 20 kΩ.
---

**85. Una bobina de encendido moderna puede generar una tensión secundaria de hasta:**
a) 300 V
b) 12.000 V
c) 45.000 V
d) 400.000 V

**Respuesta: c) 45.000 V**

> 💡 Una bobina moderna genera hasta unos 45.000 V en el secundario.
---

**86. ¿Cuántas chispas por minuto genera un motor de 4 cilindros a 3.000 rpm?**
a) 3.000
b) 6.000
c) 12.000
d) 1.500

**Respuesta: b) 6.000**

> 💡 Chispas/min = (rpm × cilindros) ÷ 2 = (3.000 × 4) ÷ 2 = 6.000.
---

**87. Una bobina de chispa doble (chispa perdida) solo puede usarse en motores con:**
a) Número impar de cilindros
b) Número par de cilindros
c) Inyección directa únicamente
d) Un solo cilindro

**Respuesta: b) Número par de cilindros**

> 💡 La bobina de chispa doble dispara pares de cilindros, así que solo sirve con número par de cilindros.
---

**88. ¿Cuántas bobinas de chispa doble lleva un motor de 6 cilindros?**
a) 6
b) 1
c) 3
d) 2

**Respuesta: c) 3**

> 💡 En un 6 cilindros se usan 3 bobinas de chispa doble (una por par).
---

**89. La principal ventaja de la bobina de chispa simple (COP / tipo lápiz) es que:**
a) No necesita sensor de árbol de levas
b) Presenta las menores pérdidas de tensión (sin cables de alta) y permite monitoreo de fallos
c) Sirve solo para motores de número par de cilindros
d) No requiere unidad de control

**Respuesta: b) Presenta las menores pérdidas de tensión (sin cables de alta) y permite monitoreo de fallos**

> 💡 La COP no tiene cables de alta, por eso tiene las menores pérdidas y permite monitoreo de fallos por OBD.
---

**90. ¿Para qué sirve el diodo de alta tensión en una bobina de chispa simple?**
a) Para rectificar la corriente de la batería
b) Para suprimir la chispa de activación (bloquea la descarga de la tensión de activación)
c) Para elevar la tensión primaria
d) Para refrigerar la bobina

**Respuesta: b) Para suprimir la chispa de activación (bloquea la descarga de la tensión de activación)**

> 💡 El diodo de alta tensión suprime la chispa de activación bloqueando la descarga de esa tensión.
---

**91. ¿Qué ventaja tiene la bobina de resina asfáltica (Bosch) frente a la de aceite?**
a) Es más barata de fabricar
b) No gotea ni explota, funciona en cualquier posición y tiene mayor rigidez dieléctrica
c) Genera menos tensión
d) No necesita núcleo de hierro

**Respuesta: b) No gotea ni explota, funciona en cualquier posición y tiene mayor rigidez dieléctrica**

> 💡 La resina asfáltica no gotea ni explota, funciona en cualquier posición y tiene más rigidez dieléctrica.
---

**92. Una bobina que requiere resistor (balastro) externo trabaja con una alimentación de:**
a) 12 V
b) 7 a 10 V
c) 24 V
d) 45 V

**Respuesta: b) 7 a 10 V**

> 💡 Una bobina con balastro externo trabaja con 7 a 10 V (el resistor cae el resto).
---

**93. ¿Qué función cumple el módulo de ignición?**
a) Rectificar la corriente alterna
b) Conmutar la corriente del primario de la bobina (reemplaza al platino)
c) Distribuir mecánicamente la chispa
d) Regular la carga de la batería

**Respuesta: b) Conmutar la corriente del primario de la bobina (reemplaza al platino)**

> 💡 El módulo de ignición conmuta la corriente del primario, reemplazando al platino.
---

**94. En la prueba de banco de una bobina (HELLAMEX), ¿qué elemento se usa como fuente de pulso/excitación?**
a) Un osciloscopio
b) Un condensador
c) Un densímetro
d) Una lámpara estroboscópica

**Respuesta: b) Un condensador**

> 💡 En la prueba de banco, el condensador se usa como fuente de pulso para excitar/disparar la bobina.
---

**95. En el conector de una bobina, ¿qué es una terminal "pulsante"?**
a) La terminal positiva de alimentación
b) La terminal negativa que la ECU corta a masa para disparar la chispa
c) La salida de alta tensión
d) La conexión al tacómetro

**Respuesta: b) La terminal negativa que la ECU corta a masa para disparar la chispa**

> 💡 La terminal pulsante es la negativa, que la ECU corta a masa para disparar la chispa.
---

## Bloque 7 — Repaso integrador (96–115)

**96. Tres resistencias de 6 Ω en paralelo dan una resistencia total de:**
a) 18 Ω
b) 6 Ω
c) 2 Ω
d) 3 Ω

**Respuesta: c) 2 Ω**

> 💡 Tres resistencias iguales en paralelo: R ÷ n = 6 ÷ 3 = 2 Ω.
---

**97. Una lámpara de 12 V que consume 4 A tiene una resistencia de:**
a) 48 Ω
b) 3 Ω
c) 0,33 Ω
d) 16 Ω

**Respuesta: b) 3 Ω**

> 💡 R = V/I = 12/4 = 3 Ω.
---

**98. ¿Qué potencia disipa un resistor de 6 Ω por el que circulan 2 A?**
a) 12 W
b) 24 W
c) 3 W
d) 48 W

**Respuesta: b) 24 W**

> 💡 Potencia por resistor: P = I² × R = 2² × 6 = 24 W.
---

**99. En un circuito serie de 4 Ω, 6 Ω y 2 Ω alimentado por 24 V, la corriente es:**
a) 2 A
b) 12 A
c) 0,5 A
d) 4 A

**Respuesta: a) 2 A**

> 💡 En serie Rt = 4+6+2 = 12 Ω; I = V/Rt = 24/12 = 2 A.
---

**100. La sulfatación irreversible de las placas de una batería se produce por:**
a) Sobrecarga permanente
b) Trabajar mucho tiempo con carga insuficiente
c) Exceso de agua destilada
d) Alta temperatura del alternador

**Respuesta: b) Trabajar mucho tiempo con carga insuficiente**

> 💡 Trabajar mucho con carga insuficiente forma un sulfato cristalino que ya no se revierte (sulfatación).
---

**101. ¿Qué gas desprende con más abundancia el borne negativo de una batería en la prueba de agua salada?**
a) Oxígeno
b) Hidrógeno
c) Nitrógeno
d) Dióxido de carbono

**Respuesta: b) Hidrógeno**

> 💡 En la prueba de agua salada, el borne negativo desprende hidrógeno en gran cantidad.
---

**102. Al medir un diodo con el óhmetro, debe conducir:**
a) En ambos sentidos
b) En un solo sentido (directa)
c) En ningún sentido
d) Solo con corriente alterna

**Respuesta: b) En un solo sentido (directa)**

> 💡 El diodo conduce en un solo sentido (directa) y bloquea en el inverso.
---

**103. En un transistor NPN, la capa central (base) es de material:**
a) Tipo N
b) Tipo P
c) Aislante
d) Semiconductor intrínseco

**Respuesta: b) Tipo P**

> 💡 En un transistor NPN la capa central (base) es de material tipo P.
---

**104. El condensador electrolítico se caracteriza por:**
a) Muy baja capacidad y ser no polarizado
b) Elevada capacidad y estar polarizado
c) Usar mica como dieléctrico
d) No poder fallar nunca

**Respuesta: b) Elevada capacidad y estar polarizado**

> 💡 El condensador electrolítico tiene elevada capacidad y está polarizado.
---

**105. En el encendido electrónico inductivo, la señal que genera el captor es:**
a) Continua y constante
b) Alterna, que crece en amplitud y frecuencia con las RPM
c) Cuadrada de amplitud fija
d) De 45.000 V

**Respuesta: b) Alterna, que crece en amplitud y frecuencia con las RPM**

> 💡 El captor inductivo genera una señal alterna que crece en amplitud y frecuencia con las RPM.
---

**106. En el encendido CDI, el componente que descarga el condensador es:**
a) Un diodo zener
b) Un tiristor
c) El platino
d) La bobina captora

**Respuesta: b) Un tiristor**

> 💡 En el CDI, el tiristor es el que descarga el condensador para producir la chispa.
---

**107. En el sistema DIS de chispa perdida de un motor de 4 cilindros, los pares de trabajo son:**
a) 1-2 y 3-4
b) 1-4 y 2-3
c) 1-3 y 2-4
d) 1-6 y 2-5

**Respuesta: b) 1-4 y 2-3**

> 💡 En un 4 cilindros, los pares de trabajo del DIS son 1-4 y 2-3.
---

**108. El transistor Darlington se usa en el encendido electrónico porque:**
a) Reduce la tensión de la bobina
b) Produce una amplificación de la señal manejando alta potencia
c) Reemplaza al condensador
d) Rectifica la corriente

**Respuesta: b) Produce una amplificación de la señal manejando alta potencia**

> 💡 El Darlington (doble transistor) amplifica la señal y maneja alta potencia.
---

**109. Durante la fase de ACTIVACIÓN del solenoide de arranque, actúan:**
a) Solo la bobina de retención
b) Las bobinas de activación y de retención juntas
c) Solo el piñón
d) Únicamente el contacto principal

**Respuesta: b) Las bobinas de activación y de retención juntas**

> 💡 En la activación del solenoide actúan juntas las bobinas de activación y de retención.
---

**110. El colector del inducido del motor de arranque está hecho de:**
a) Tungsteno
b) Láminas de cobre
c) Aleación plomo-antimonio
d) Aluminio galvanizado

**Respuesta: b) Láminas de cobre**

> 💡 El colector del inducido está hecho de láminas de cobre.
---

**111. Si el piñón Bendix no se desacoplara al arrancar el motor, ¿qué pasaría?**
a) Nada, es seguro
b) El arranque giraría a una velocidad excesiva y se destruiría
c) La batería se sobrecargaría
d) Se quemaría el alternador

**Respuesta: b) El arranque giraría a una velocidad excesiva y se destruiría**

> 💡 Sin desacople, el motor arrastraría al arranque a una velocidad excesiva y lo destruiría.
---

**112. El estator del alternador genera corriente:**
a) Continua monofásica
b) Alterna trifásica
c) Continua pulsante
d) Alterna monofásica

**Respuesta: b) Alterna trifásica**

> 💡 El estator del alternador genera corriente alterna trifásica.
---

**113. La ondulación de la tensión continua a la salida del alternador la suaviza:**
a) El regulador
b) La batería conectada en paralelo (efecto condensador)
c) El rotor
d) Los diodos de excitación

**Respuesta: b) La batería conectada en paralelo (efecto condensador)**

> 💡 La batería en paralelo (efecto condensador) suaviza la ondulación de la tensión continua.
---

**114. Al probar los diodos del alternador con el multímetro, en el sentido de conducción deben indicar:**
a) 0 mV
b) Entre 400 y 700 mV
c) Infinito
d) 12 V

**Respuesta: b) Entre 400 y 700 mV**

> 💡 Al probar los diodos, en conducción deben indicar entre 400 y 700 mV.
---

**115. En una bobina de encendido, la relación que determina la tensión secundaria es:**
a) La resistencia del primario
b) La relación de vueltas entre secundario y primario
c) La sección del cable de bujía
d) La capacidad del condensador

**Respuesta: b) La relación de vueltas entre secundario y primario**

> 💡 La tensión secundaria depende de la relación de vueltas entre secundario y primario.
---

## Bloque 8 — Electricidad básica, magnitudes y leyes (práctica extra) (116–121)

**116. Dos resistencias iguales de 10 Ω en paralelo dan una resistencia total de:**
a) 20 Ω
b) 10 Ω
c) 5 Ω
d) 0 Ω

**Respuesta: c) 5 Ω**

> 💡 Dos resistencias iguales en paralelo: R ÷ 2 = 10 ÷ 2 = 5 Ω.
---

**117. ¿Qué corriente circula por un resistor de 4 Ω conectado a 12 V?**
a) 48 A
b) 3 A
c) 0,33 A
d) 16 A

**Respuesta: b) 3 A**

> 💡 I = V/R = 12/4 = 3 A.
---

**118. Si una batería de 12 V entrega 5 A a un circuito, la potencia entregada es:**
a) 2,4 W
b) 17 W
c) 60 W
d) 7 W

**Respuesta: c) 60 W**

> 💡 P = V × I = 12 × 5 = 60 W.
---

**119. Una corriente de 2.500 mA equivale a:**
a) 0,25 A
b) 2,5 A
c) 25 A
d) 250 A

**Respuesta: b) 2,5 A**

> 💡 2.500 mA ÷ 1.000 = 2,5 A.
---

**120. La unidad de resistencia eléctrica es:**
a) El voltio (V)
b) El amperio (A)
c) El ohm (Ω)
d) El watt (W)

**Respuesta: c) El ohm (Ω)**

> 💡 La unidad de resistencia eléctrica es el ohm (Ω).
---

**121. En un circuito serie, la corriente que circula por cada resistencia es:**
a) Distinta en cada una
b) La misma en todas
c) Cero
d) Proporcional a cada resistencia

**Respuesta: b) La misma en todas**

> 💡 En serie hay un solo camino, así que la misma corriente pasa por todas las resistencias.
---

## Bloque 9 — Magnetismo, instrumentos y baterías (práctica extra) (122–128)

**122. Al acercar dos polos magnéticos NORTE entre sí, estos:**
a) Se atraen
b) Se repelen
c) No se afectan
d) Se anulan

**Respuesta: b) Se repelen**

> 💡 Los polos magnéticos iguales (N-N o S-S) se repelen.
---

**123. El instrumento que se conecta en SERIE con el circuito es el:**
a) Voltímetro
b) Amperímetro
c) Óhmetro
d) Densímetro

**Respuesta: b) Amperímetro**

> 💡 El amperímetro se conecta en serie para que la corriente lo atraviese.
---

**124. Para medir la resistencia de un componente con el óhmetro, este debe estar:**
a) Bajo tensión y conectado
b) Desconectado y sin corriente
c) En cortocircuito
d) A plena carga

**Respuesta: b) Desconectado y sin corriente**

> 💡 El óhmetro se usa con el componente desconectado y sin corriente.
---

**125. Una densidad de electrolito de 1,120 gr/cm³ indica una batería:**
a) A plena carga (100%)
b) Al 75%
c) Al 50%
d) Descargada

**Respuesta: d) Descargada**

> 💡 Una densidad de 1,120 gr/cm³ corresponde a una batería descargada.
---

**126. La materia activa de las placas negativas de una batería es:**
a) Peróxido de plomo
b) Plomo esponjoso
c) Ácido sulfúrico
d) Sulfato de plomo

**Respuesta: b) Plomo esponjoso**

> 💡 Las placas negativas están hechas de plomo esponjoso.
---

**127. El electroimán se forma con:**
a) Un imán permanente solo
b) Un núcleo de hierro rodeado por una bobina con corriente
c) Dos resistencias en serie
d) Un condensador cargado

**Respuesta: b) Un núcleo de hierro rodeado por una bobina con corriente**

> 💡 El electroimán es un núcleo de hierro rodeado por una bobina por la que circula corriente.
---

**128. Una batería de 12 V está compuesta por:**
a) 3 celdas de 4 V
b) 6 celdas de 2 V
c) 12 celdas de 1 V
d) 2 celdas de 6 V

**Respuesta: b) 6 celdas de 2 V**

> 💡 Una batería de 12 V tiene 6 celdas de 2 V cada una.
---

## Bloque 10 — Relés, conductores, fusibles y semiconductores (práctica extra) (129–134)

**129. En un relé, la separación entre el circuito de la bobina y el de los contactos permite:**
a) Aumentar la tensión de batería
b) Manejar alta potencia con una señal de control pequeña
c) Rectificar la corriente
d) Almacenar carga

**Respuesta: b) Manejar alta potencia con una señal de control pequeña**

> 💡 El relé permite manejar alta potencia con una señal de control pequeña.
---

**130. Un fusible de color amarillo corresponde a una capacidad de:**
a) 10 A
b) 15 A
c) 20 A
d) 30 A

**Respuesta: c) 20 A**

> 💡 En el código de fusibles, el amarillo corresponde a 20 A.
---

**131. En el sistema de calibres de cables, a mayor número de calibre:**
a) Mayor sección (más grueso)
b) Menor sección (más fino)
c) Igual sección
d) Mayor tensión

**Respuesta: b) Menor sección (más fino)**

> 💡 A mayor número de calibre, menor sección (cable más fino).
---

**132. Un diodo semiconductor se obtiene de la unión de:**
a) Dos materiales tipo N
b) Un material tipo P con uno tipo N
c) Dos materiales tipo P
d) Dos metales conductores

**Respuesta: b) Un material tipo P con uno tipo N**

> 💡 El diodo se obtiene de la unión de un material tipo P con uno tipo N.
---

**133. El terminal del transistor que controla el paso de corriente es:**
a) El emisor
b) El colector
c) La base
d) El ánodo

**Respuesta: c) La base**

> 💡 La base es el terminal que controla el paso de corriente en el transistor.
---

**134. La unidad de capacidad de un condensador es:**
a) El ohm
b) El faradio
c) El henrio
d) El voltio

**Respuesta: b) El faradio**

> 💡 La unidad de capacidad de un condensador es el faradio.
---

## Bloque 11 — Sistema de encendido (práctica extra) (135–141)

**135. La bobina de encendido eleva la tensión de la batería para:**
a) Cargar la batería
b) Producir el arco eléctrico (chispa) en la bujía
c) Mover el motor de arranque
d) Alimentar las luces

**Respuesta: b) Producir el arco eléctrico (chispa) en la bujía**

> 💡 La bobina eleva la tensión para producir el arco (chispa) entre los electrodos de la bujía.
---

**136. El circuito primario del encendido convencional está formado por:**
a) Bobina secundaria, tapa, rotor y bujías
b) Batería, llave, primario de la bobina, ruptor y condensador
c) Solo la batería y las bujías
d) El alternador y el regulador

**Respuesta: b) Batería, llave, primario de la bobina, ruptor y condensador**

> 💡 El circuito primario (baja tensión) lo forman batería, llave, primario, ruptor y condensador.
---

**137. Una bujía "fría" se diferencia de una "caliente" por:**
a) El diámetro de la rosca
b) El largo de la punta del aislante del electrodo central
c) El material del electrodo
d) La cantidad de electrodos

**Respuesta: b) El largo de la punta del aislante del electrodo central**

> 💡 La diferencia entre bujía fría y caliente es el largo de la punta del aislante del electrodo central.
---

**138. La luz de platinos se calibra ajustando:**
a) El brazo del contacto móvil (doblándolo)
b) El soporte del contacto fijo
c) La leva del distribuidor
d) El condensador

**Respuesta: b) El soporte del contacto fijo**

> 💡 La luz de platinos se corrige en el soporte del contacto fijo (nunca doblando el brazo móvil).
---

**139. En el encendido por efecto Hall, la señal generada es de tipo:**
a) Alterna senoidal
b) Cuadrada
c) De alta tensión
d) Continua constante

**Respuesta: b) Cuadrada**

> 💡 El captor de efecto Hall entrega una señal cuadrada.
---

**140. El orden de encendido típico de un motor de 6 cilindros es:**
a) 1-2-3-4-5-6
b) 1-5-3-6-2-4
c) 1-3-4-2
d) 1-6-2-5-3-4

**Respuesta: b) 1-5-3-6-2-4**

> 💡 El orden de encendido de un 6 cilindros es 1-5-3-6-2-4.
---

**141. La chispa de encendido, en términos de energía, nace cuando:**
a) Se establece la corriente en el primario
b) Se interrumpe (corta) la corriente del primario
c) El condensador se carga
d) Los platinos se cierran

**Respuesta: b) Se interrumpe (corta) la corriente del primario**

> 💡 Energéticamente, la chispa nace cuando se interrumpe la corriente del primario.
---

## Bloque 12 — Motor de arranque y alternador (práctica extra) (142–148)

**142. El motor de arranque convierte la energía eléctrica en:**
a) Energía química
b) Energía mecánica (giro del cigüeñal)
c) Alta tensión
d) Calor únicamente

**Respuesta: b) Energía mecánica (giro del cigüeñal)**

> 💡 El motor de arranque convierte energía eléctrica en energía mecánica (giro del cigüeñal).
---

**143. En el motor de arranque, la bobina de retención del solenoide:**
a) Empuja el piñón hacia afuera con fuerza
b) Mantiene el émbolo en posición una vez cerrado el contacto principal
c) Rectifica la corriente
d) Regula las RPM

**Respuesta: b) Mantiene el émbolo en posición una vez cerrado el contacto principal**

> 💡 La bobina de retención mantiene el émbolo una vez cerrado el contacto principal.
---

**144. El piñón Bendix tiene menos dientes que la corona para:**
a) Girar más lento que el motor
b) Lograr la relación de fuerza (multiplicación de par) necesaria
c) Consumir menos corriente
d) Evitar la chispa

**Respuesta: b) Lograr la relación de fuerza (multiplicación de par) necesaria**

> 💡 El piñón tiene menos dientes que la corona para multiplicar el par (relación de fuerza).
---

**145. El rotor del alternador es, básicamente:**
a) Un juego de diodos
b) Un electroimán giratorio alimentado por los anillos rozantes
c) Un conjunto de bobinas fijas
d) El regulador de tensión

**Respuesta: b) Un electroimán giratorio alimentado por los anillos rozantes**

> 💡 El rotor del alternador es un electroimán giratorio alimentado por los anillos rozantes.
---

**146. La corriente de pre-excitación que arranca al alternador la aporta:**
a) El estator
b) La batería, a través de la lámpara testigo
c) El motor de arranque
d) Los diodos de potencia

**Respuesta: b) La batería, a través de la lámpara testigo**

> 💡 La corriente de pre-excitación la aporta la batería, pasando por la lámpara testigo.
---

**147. La tensión nominal de regulación de un alternador es de aproximadamente:**
a) 12 V
b) 14 V
c) 24 V
d) 45 V

**Respuesta: b) 14 V**

> 💡 La tensión nominal de regulación del alternador es de unos 14 V.
---

**148. Si la luz testigo de carga queda encendida con el motor en marcha, indica:**
a) Funcionamiento normal
b) Que el alternador no está cargando
c) Batería sobrecargada
d) Exceso de combustible

**Respuesta: b) Que el alternador no está cargando**

> 💡 Si la luz de carga queda encendida con el motor en marcha, el alternador no está cargando.
---

## Bloque 13 — Bobinas de encendido y módulos (práctica extra) (149–155)

**149. El bobinado primario de una bobina, comparado con el secundario, tiene:**
a) Más vueltas y alambre fino
b) Menos vueltas y alambre grueso
c) La misma cantidad de vueltas
d) Alambre aislado con mica

**Respuesta: b) Menos vueltas y alambre grueso**

> 💡 El primario tiene menos vueltas y alambre grueso; el secundario, muchas vueltas de alambre fino.
---

**150. La energía de la chispa de una bobina se mide en:**
a) Voltios
b) Milijulios (mJ)
c) Amperios
d) Ohmios

**Respuesta: b) Milijulios (mJ)**

> 💡 La energía de la chispa se mide en milijulios (mJ).
---

**151. Una bobina de resina asfáltica, frente a una de aceite, tiene la ventaja de:**
a) Generar menos tensión
b) Poder funcionar en cualquier posición sin gotear ni explotar
c) No necesitar núcleo
d) Ser más barata y de menor calidad

**Respuesta: b) Poder funcionar en cualquier posición sin gotear ni explotar**

> 💡 La resina asfáltica funciona en cualquier posición sin gotear ni explotar (ventaja sobre el aceite).
---

**152. Una bobina que trabaja con 7 a 10 V de alimentación:**
a) No necesita resistor
b) Requiere un resistor (balastro) externo
c) Es de chispa simple
d) Está fallada

**Respuesta: b) Requiere un resistor (balastro) externo**

> 💡 Si trabaja con 7–10 V, la bobina necesita un resistor (balastro) externo.
---

**153. En la prueba de banco (HELLAMEX), el condensador se usa como:**
a) Filtro de la señal
b) Fuente de pulso/excitación para disparar la bobina
c) Regulador de tensión
d) Carga de prueba

**Respuesta: b) Fuente de pulso/excitación para disparar la bobina**

> 💡 En la prueba de banco, el condensador genera el pulso de excitación para disparar la bobina.
---

**154. Una bobina de encendido de chispa doble solo sirve para motores con:**
a) Número impar de cilindros
b) Número par de cilindros
c) Un solo cilindro
d) Inyección directa

**Respuesta: b) Número par de cilindros**

> 💡 La bobina de chispa doble dispara pares de cilindros: solo sirve con número par.
---

**155. La bobina de chispa simple (COP) requiere sincronizarse con:**
a) El sensor de detonación
b) El sensor de árbol de levas (fase)
c) El sensor de temperatura
d) El regulador del alternador

**Respuesta: b) El sensor de árbol de levas (fase)**

> 💡 La COP (chispa simple) se sincroniza con el sensor de árbol de levas (fase).
---

## Bloque 14 — Electricidad básica, magnitudes y leyes (práctica extra 2) (156–162)

**156. Un kiloohm (1 KΩ) equivale a:**
a) 100 Ω
b) 1.000 Ω
c) 10.000 Ω
d) 1.000.000 Ω

**Respuesta: b) 1.000 Ω**

> 💡 El prefijo kilo significa mil, así que 1 KΩ = 1.000 Ω.

---

**157. Dos resistencias de 4 Ω y 6 Ω conectadas en serie dan una resistencia total de:**
a) 2,4 Ω
b) 10 Ω
c) 24 Ω
d) 5 Ω

**Respuesta: b) 10 Ω**

> 💡 En serie las resistencias se suman: 4 + 6 = 10 Ω.

---

**158. La conductibilidad eléctrica es:**
a) La oposición al paso de la corriente
b) La facilidad con que un material deja pasar los electrones
c) La cantidad de electrones de un átomo
d) La fuerza que impulsa la corriente

**Respuesta: b) La facilidad con que un material deja pasar los electrones**

> 💡 A mayor conductibilidad, menor resistencia: el material conduce con más facilidad.

---

**159. ¿Cuál de estos materiales es un buen aislante?**
a) Cobre
b) Aluminio
c) Porcelana
d) Hierro

**Respuesta: c) Porcelana**

> 💡 La porcelana, el vidrio, la goma y la baquelita son aislantes; cobre, aluminio y hierro son conductores.

---

**160. Un material con coeficiente de temperatura POSITIVO (PTC):**
a) Baja su resistencia al calentarse
b) Aumenta su resistencia al calentarse
c) No cambia su resistencia
d) Solo conduce en frío

**Respuesta: b) Aumenta su resistencia al calentarse**

> 💡 PTC = coeficiente positivo: al subir la temperatura, sube la resistencia (lo contrario del NTC).

---

**161. La unidad de diferencia de potencial (d.d.p.) es:**
a) El amperio
b) El voltio
c) El ohm
d) El watt

**Respuesta: b) El voltio**

> 💡 La diferencia de potencial, como la tensión, se mide en voltios (V).

---

**162. La magnitud que se mide en watts (W) es:**
a) La resistencia
b) La intensidad
c) La potencia
d) La tensión

**Respuesta: c) La potencia**

> 💡 El watt es la unidad de potencia eléctrica (P = V × I).

---

## Bloque 15 — Magnetismo, instrumentos y baterías (práctica extra 2) (163–169)

**163. La regla del tirabuzón se usa para determinar:**
a) El valor de una resistencia
b) El sentido del campo magnético alrededor de un conductor
c) La polaridad de una batería
d) La caída de tensión

**Respuesta: b) El sentido del campo magnético alrededor de un conductor**

> 💡 La corriente en un conductor genera un campo magnético; su sentido se halla con la regla del tirabuzón.

---

**164. Al acercar un polo NORTE y uno SUR, estos:**
a) Se repelen
b) Se atraen
c) No se afectan
d) Se desmagnetizan

**Respuesta: b) Se atraen**

> 💡 Los polos opuestos (N-S) se atraen; los iguales (N-N, S-S) se repelen.

---

**165. El instrumento que mide la capacidad de un condensador es el:**
a) Óhmetro
b) Amperímetro
c) Capacímetro
d) Densímetro

**Respuesta: c) Capacímetro**

> 💡 El capacímetro mide la capacidad (en pF, nF o µF) de condensadores.

---

**166. Una densidad de electrolito de 1,225 gr/cm³ indica una batería cargada al:**
a) 100%
b) 75%
c) 50%
d) 25%

**Respuesta: b) 75%**

> 💡 En la tabla de densidades: 1,265 = 100%, 1,225 = 75%, 1,190 = 50%, 1,120 = descargada.

---

**167. La sobrecarga permanente de una batería produce:**
a) Sulfatación cristalina irreversible
b) Corrosión de las rejillas y desprendimiento del material activo
c) Congelamiento del electrolito
d) Aumento de la capacidad

**Respuesta: b) Corrosión de las rejillas y desprendimiento del material activo**

> 💡 El exceso de carga corroe las rejillas positivas y desprende la materia activa (la carga insuficiente, en cambio, sulfata).

---

**168. El analizador de baterías evalúa su estado:**
a) Midiendo la densidad del electrolito
b) Simulando el consumo de arranque y midiendo la caída de tensión
c) Pesando la batería
d) Midiendo su temperatura

**Respuesta: b) Simulando el consumo de arranque y midiendo la caída de tensión**

> 💡 Aplica una carga similar a la del arranque y observa cuánto cae la tensión.

---

**169. Una batería inactiva conviene recargarla aproximadamente cada:**
a) 24 horas
b) 30 días
c) 6 meses
d) 2 años

**Respuesta: b) 30 días**

> 💡 Por la descarga espontánea, se aconseja recargarla cada 30 días con baja intensidad.

---

## Bloque 16 — Relés, conductores, fusibles y semiconductores (práctica extra 2) (170–175)

**170. El relé es un interruptor accionado por:**
a) Un resorte
b) Un electroimán
c) Un condensador
d) Un diodo

**Respuesta: b) Un electroimán**

> 💡 Al circular corriente por su bobina, el electroimán mueve los contactos.

---

**171. El terminal 87 de un relé corresponde a:**
a) Positivo directo de batería
b) Salida de positivo
c) Negativo a bobina
d) Masa

**Respuesta: b) Salida de positivo**

> 💡 El 30 es el positivo directo de batería y el 87 la salida de positivo hacia el consumo.

---

**172. Los cables de batería de 12 V normalmente son de calibre:**
a) 16 a 18
b) 4 a 6
c) 20
d) 12 a 14

**Respuesta: b) 4 a 6**

> 💡 Al manejar mucha corriente, la batería usa cables gruesos (calibre 4–6); las luces usan 16–18.

---

**173. Un fusible de color verde corresponde a una capacidad de:**
a) 15 A
b) 20 A
c) 30 A
d) 40 A

**Respuesta: c) 30 A**

> 💡 En el código de fusibles, el verde corresponde a 30 A.

---

**174. Un semiconductor tipo N se caracteriza por tener:**
a) Exceso de huecos
b) Exceso de electrones
c) Igual cantidad de cargas
d) No conducir nunca

**Respuesta: b) Exceso de electrones**

> 💡 El tipo N transporta la corriente por electrones (el tipo P, por huecos).

---

**175. El condensador de papel usa como dieléctrico:**
a) Mica
b) Óxido de aluminio
c) Papel encerado o parafinado
d) Aire

**Respuesta: c) Papel encerado o parafinado**

> 💡 El condensador de papel usa papel de seda parafinado; el de mica usa mica, y el electrolítico un óxido.

---

## Bloque 17 — Sistema de encendido (práctica extra 2) (176–182)

**176. La función del rotor del distribuidor es:**
a) Interrumpir el circuito primario
b) Llevar la alta tensión a cada torre (bujía) según el orden de encendido
c) Elevar la tensión de la batería
d) Regular el avance

**Respuesta: b) Llevar la alta tensión a cada torre (bujía) según el orden de encendido**

> 💡 El rotor gira y reparte la alta tensión desde la torre central a cada cable de bujía.

---

**177. La tapa del distribuidor se fabrica de:**
a) Aluminio
b) Baquelita o polivinilo (material aislante)
c) Cobre
d) Acero

**Respuesta: b) Baquelita o polivinilo (material aislante)**

> 💡 Debe ser aislante para soportar la alta tensión sin fugas.

---

**178. El sistema de encendido está formado por dos circuitos:**
a) Uno de arranque y uno de carga
b) El primario (baja tensión) y el secundario (alta tensión)
c) Dos circuitos de bujías
d) Uno de luces y uno de encendido

**Respuesta: b) El primario (baja tensión) y el secundario (alta tensión)**

> 💡 Primario = baja tensión (batería, ruptor); secundario = alta tensión (bujías).

---

**179. Para lograr la máxima presión sobre el pistón, la combustión debe terminar aproximadamente:**
a) En el PMS exacto
b) 23° después del PMS
c) 90° antes del PMS
d) Al final del escape

**Respuesta: b) 23° después del PMS**

> 💡 Por eso se adelanta la chispa: para que la presión máxima llegue ~23° después del punto muerto superior.

---

**180. El encendido electrónico integral elimina:**
a) La bobina
b) Los avances mecánicos (por vacío y centrífugo)
c) Las bujías
d) La batería

**Respuesta: b) Los avances mecánicos (por vacío y centrífugo)**

> 💡 Un calculador electrónico define el avance según RPM y carga, reemplazando a los mecanismos mecánicos.

---

**181. La chispa del encendido CDI se caracteriza por ser:**
a) Muy intensa pero de corta duración (~0,3 ms)
b) Débil y muy larga
c) De baja tensión
d) Continua

**Respuesta: a) Muy intensa pero de corta duración (~0,3 ms)**

> 💡 La descarga capacitiva da una chispa potente pero breve; permite mayor separación de electrodos.

---

**182. El orden de encendido de un motor de 3 cilindros es:**
a) 1-2-3
b) 1-3-2
c) 1-3-4-2
d) 1-2-4-3

**Respuesta: b) 1-3-2**

> 💡 Para 3 cilindros el orden típico es 1-3-2.

---

## Bloque 18 — Motor de arranque y alternador (práctica extra 2) (183–189)

**183. Los tres conjuntos básicos del motor de arranque son:**
a) Rotor, estator y diodos
b) Solenoide, motor eléctrico y impulsor (Bendix)
c) Bobina, platino y condensador
d) Bomba, filtro y rampa

**Respuesta: b) Solenoide, motor eléctrico y impulsor (Bendix)**

> 💡 Solenoide (mando magnético), motor eléctrico y piñón Bendix son los tres conjuntos del arranque.

---

**184. La rueda libre (embrague) del arranque:**
a) Transmite fuerza en ambos sentidos
b) Transmite fuerza en un solo sentido y evita que el motor arrastre al arranque
c) Regula la corriente
d) Engrana el piñón con la corona

**Respuesta: b) Transmite fuerza en un solo sentido y evita que el motor arrastre al arranque**

> 💡 Cuando el motor arranca y acelera, la rueda libre patina y protege al arranque de la sobrevelocidad.

---

**185. En el motor de arranque, el terminal 30 corresponde a:**
a) La señal de la ECU
b) El contacto principal (positivo directo de batería hacia el motor)
c) La masa
d) La bobina de retención

**Respuesta: b) El contacto principal (positivo directo de batería hacia el motor)**

> 💡 Por el terminal 30 pasa la corriente principal (300+ A) de la batería al motor eléctrico.

---

**186. El punto donde se unen las tres bobinas del estator del alternador se llama:**
a) Punto neutro
b) Borne B+
c) Rotor
d) Puente rectificador

**Respuesta: a) Punto neutro**

> 💡 Las tres fases del estator se unen en el punto neutro (conexión en estrella).

---

**187. La autoexcitación del alternador significa que:**
a) Nunca necesita a la batería
b) Una vez en marcha, se alimenta a sí mismo la corriente de excitación
c) El regulador genera la corriente
d) Funciona sin rotor

**Respuesta: b) Una vez en marcha, se alimenta a sí mismo la corriente de excitación**

> 💡 La batería da la pre-excitación inicial; luego el propio alternador, rectificado, alimenta el rotor.

---

**188. Según el TP, la caída de tensión máxima admisible en el cable positivo (B+ a batería) es:**
a) 0,2 V
b) 0,4 V
c) 1 V
d) 2 V

**Respuesta: b) 0,4 V**

> 💡 En el control del circuito de carga, la caída en el cable positivo debe ser menor a 0,4 V (y la de masa, menor a 0,2 V).

---

**189. Al medir la continuidad del rotor del alternador (entre sus dos anillos), el valor debe estar entre:**
a) 0,1 y 0,3 Ω
b) 2,5 y 5 Ω
c) 400 y 700 mV
d) 5 y 20 kΩ

**Respuesta: b) 2,5 y 5 Ω**

> 💡 El rotor debe medir 2,5–5 Ω; el estator, 0,1–0,3 Ω entre bobinados.

---

## Bloque 19 — Bobinas de encendido y módulos (práctica extra 2) (190–195)

**190. El núcleo de la bobina de encendido es de hierro laminado (chapas finas) para:**
a) Aumentar el peso
b) Evitar corrientes parásitas y el sobrecalentamiento
c) Conducir la alta tensión
d) Reemplazar al condensador

**Respuesta: b) Evitar corrientes parásitas y el sobrecalentamiento**

> 💡 El núcleo laminado reduce las corrientes de Foucault (parásitas) y las pérdidas por calor.

---

**191. Una regleta (casete) de bobinas está formada por:**
a) Una sola bobina para todos los cilindros
b) Varias bobinas independientes en una carcasa común
c) Un módulo sin bobinas
d) Dos platinos

**Respuesta: b) Varias bobinas independientes en una carcasa común**

> 💡 Cada bobina funciona como chispa simple; agruparlas reduce cables y ordena el motor.

---

**192. La corriente primaria típica de una bobina de encendido está en el orden de:**
a) 80 a 120 mA
b) 6 a 20 A
c) 100 a 200 A
d) 1 a 2 mA

**Respuesta: b) 6 a 20 A**

> 💡 La corriente del primario ronda 6–20 A; la del secundario (chispa) es de solo 80–120 mA.

---

**193. En la nomenclatura de bobinas modernas, la señal EST significa:**
a) Estado del motor
b) Control de avance de encendido (Electronic Spark Timing)
c) Estabilizador de tensión
d) Salida al tacómetro

**Respuesta: b) Control de avance de encendido (Electronic Spark Timing)**

> 💡 EST es el pulso con que la ECU controla el avance del encendido.

---

**194. Una ventaja de integrar la etapa final (electrónica) dentro de la bobina es:**
a) Eliminar la chispa
b) Poder diagnosticar, limitar corriente y hacer corte térmico
c) Reducir la tensión secundaria
d) Prescindir del núcleo

**Respuesta: b) Poder diagnosticar, limitar corriente y hacer corte térmico**

> 💡 La etapa final integrada agrega diagnóstico, limitación de corriente, corte térmico y detección de cortocircuitos.

---

**195. Una bobina de aceite montada con la salida de alta tensión hacia abajo puede:**
a) Generar más chispa
b) Gotear (perder aceite)
c) Funcionar mejor
d) Cargar más rápido

**Respuesta: b) Gotear (perder aceite)**

> 💡 Por eso la resina asfáltica es mejor: es sólida, no gotea y funciona en cualquier posición.

---

## Bloque 20 — Repaso final (196–200)

**196. ¿Qué corriente circula por un circuito serie de 6 Ω y 6 Ω alimentado con 24 V?**
a) 4 A
b) 2 A
c) 12 A
d) 8 A

**Respuesta: b) 2 A**

> 💡 En serie Rt = 6 + 6 = 12 Ω; I = V/Rt = 24/12 = 2 A.

---

**197. El proceso de recuperar la carga de una batería (carga) es posible porque el sulfato de las placas:**
a) Se pierde para siempre
b) Se descompone y regresa al electrolito, devolviéndole su concentración
c) Se convierte en agua
d) Aumenta la resistencia interna

**Respuesta: b) Se descompone y regresa al electrolito, devolviéndole su concentración**

> 💡 Al circular corriente en sentido inverso, el sulfato vuelve al electrolito y sube la densidad: la batería se recarga.

---

**198. En un diodo, el terminal por el que entra la corriente en directa (polo positivo) se llama:**
a) Cátodo
b) Ánodo
c) Base
d) Colector

**Respuesta: b) Ánodo**

> 💡 En directa, el positivo va al ánodo y el negativo al cátodo; así el diodo conduce.

---

**199. El mecanismo de avance centrífugo hace girar la leva:**
a) En sentido contrario al giro del eje
b) En el mismo sentido de giro del eje, adelantando la apertura de los platinos
c) Sin moverla
d) Solo con el motor apagado

**Respuesta: b) En el mismo sentido de giro del eje, adelantando la apertura de los platinos**

> 💡 Los contrapesos, al abrirse por la fuerza centrífuga, adelantan la leva y con ella el salto de chispa (el avance por vacío, en cambio, gira la placa en sentido contrario).

---

**200. En una bobina de encendido, la corriente de la chispa (secundario) es del orden de:**
a) 6 a 20 A
b) 80 a 120 mA
c) 400 a 500 A
d) 1 a 2 A

**Respuesta: b) 80 a 120 mA**

> 💡 El secundario da altísima tensión pero poca corriente (80–120 mA); el primario maneja 6–20 A.

---

## Bloque 21 — Electricidad básica, magnitudes y leyes (práctica extra 3) (201–203)

**201. La corriente convencional (la que se toma por convenio) circula:**
a) Del polo negativo al positivo
b) Del polo positivo al negativo
c) En ambos sentidos a la vez
d) Solo dentro de la batería

**Respuesta: b) Del polo positivo al negativo**

> 💡 Por convenio, la corriente se toma del positivo al negativo; es al revés del flujo real de electrones (que va de negativo a positivo).

---

**202. ¿Cuál de estos materiales tiene la MAYOR resistividad (peor conductor)?**
a) Cobre (0,017)
b) Plata (0,016)
c) Nicrom (1,2)
d) Aluminio (0,27)

**Respuesta: c) Nicrom (1,2)**

> 💡 A mayor resistividad, peor conductor: el nicrom (1,2) es el más resistivo de la lista; por eso se usa en resistencias calefactoras. (Ojo: 0,27 para el aluminio es el dato del manual; el valor real es ~0,028.)

---

**203. Un microfaradio (µF) equivale a:**
a) La millonésima parte del faradio
b) Un millón de faradios
c) La milésima parte del ohm
d) Mil faradios

**Respuesta: a) La millonésima parte del faradio**

> 💡 El faradio es una unidad enorme; en la práctica se usa el microfaradio (µF), la millonésima parte.

---

## Bloque 22 — Magnetismo, instrumentos y baterías (práctica extra 3) (204–206)

**204. La permeabilidad magnética de un material indica:**
a) Su resistencia eléctrica
b) La facilidad con que atrae y deja pasar un campo magnético
c) Su capacidad de almacenar carga
d) Su punto de fusión

**Respuesta: b) La facilidad con que atrae y deja pasar un campo magnético**

> 💡 Los materiales ferromagnéticos (hierro) tienen alta permeabilidad: concentran y conducen bien las líneas de campo.

---

**205. Al aumentar la temperatura del electrolito, la resistencia interna de la batería:**
a) Aumenta
b) Disminuye
c) No cambia
d) Se vuelve infinita

**Respuesta: b) Disminuye**

> 💡 Por eso el regulador del alternador compensa: baja la tensión de carga con calor (batería acepta más) y la sube con frío.

---

**206. El densímetro se usa para medir:**
a) La tensión de la batería
b) La densidad del electrolito (estado de carga)
c) La corriente de arranque
d) La resistencia de las placas

**Respuesta: b) La densidad del electrolito (estado de carga)**

> 💡 Mide cuánto ácido queda sin usar en el electrolito: más densidad = más carga (1,265 = 100%).

---

## Bloque 23 — Relés, conductores, fusibles y semiconductores (práctica extra 3) (207–209)

**207. Un relé inversor controla:**
a) Un solo contacto normal abierto
b) Un contacto normal abierto y otro normal cerrado, con un terminal común
c) Dos bobinas independientes
d) Solo el circuito de la bobina

**Respuesta: b) Un contacto normal abierto y otro normal cerrado, con un terminal común**

> 💡 El inversor conmuta entre dos circuitos: uno se abre mientras el otro se cierra, compartiendo el terminal común.

---

**208. ¿Cuál de estas sustancias tiene la mayor constante dieléctrica?**
a) Aire (1)
b) Papel parafinado (6)
c) Mica (8)
d) Agua (80)

**Respuesta: d) Agua (80)**

> 💡 El aire vale 1 (referencia); el agua tiene una constante dieléctrica muy alta (80).

---

**209. El primer transistor (1947, Laboratorios Bell) se fabricó con:**
a) Silicio
b) Germanio
c) Cobre
d) Galena

**Respuesta: b) Germanio**

> 💡 El primer transistor fue de germanio; después se impuso el silicio. La galena (sulfuro de plomo) se usó antes como diodo en las radios.

---

## Bloque 24 — Sistema de encendido (práctica extra 3) (210–213)

**210. Muchas bobinas de encendido vienen en baño de aceite para:**
a) Lubricar los platinos
b) Proveer aislamiento adicional y ayudar a disipar el calor
c) Aumentar el peso
d) Reemplazar al condensador

**Respuesta: b) Proveer aislamiento adicional y ayudar a disipar el calor**

> 💡 El aceite aísla los bobinados y disipa el calor que genera la transformación de tensión.

---

**211. El rango térmico de una bujía expresa:**
a) La tensión que soporta
b) Su capacidad para disipar la temperatura (bujía fría o caliente)
c) El diámetro de la rosca
d) La cantidad de electrodos

**Respuesta: b) Su capacidad para disipar la temperatura (bujía fría o caliente)**

> 💡 Una bujía "caliente" disipa poco (se mantiene más caliente); una "fría" disipa más. La diferencia está en el largo del aislante central.

---

**212. Una ventaja del encendido DIS (sin distribuidor) es:**
a) Necesitar más cables de alta tensión
b) Eliminar elementos mecánicos propensos a desgaste y reducir/eliminar los cables de alta
c) Bajar la tensión de la chispa
d) Prescindir de la ECU

**Respuesta: b) Eliminar elementos mecánicos propensos a desgaste y reducir/eliminar los cables de alta**

> 💡 Sin distribuidor no hay piezas mecánicas girando ni interferencias; las bobinas van cerca o sobre la bujía.

---

**213. El encendido con resistencia balastro se usaba sobre todo en motores de:**
a) 1 cilindro
b) 6 y 8 cilindros (alto régimen)
c) 2 cilindros
d) Motores diésel

**Respuesta: b) 6 y 8 cilindros (alto régimen)**

> 💡 A alto régimen los platinos están poco tiempo cerrados; el balastro permite más corriente en el primario sin quemarlos.

---

## Bloque 25 — Motor de arranque y alternador (práctica extra 3) (214–217)

**214. El reductor del motor de arranque sirve para:**
a) Bajar la tensión de la batería
b) Aumentar el par al piñón, reduciendo su velocidad respecto al inducido
c) Rectificar la corriente
d) Enfriar el motor

**Respuesta: b) Aumentar el par al piñón, reduciendo su velocidad respecto al inducido**

> 💡 Intercala una relación de transmisión entre inducido y piñón: más par y menos revoluciones (útil con potencias mayores a 1 kW).

---

**215. La excitación eléctrica (por bobinas) del motor de arranque logra un par de aceleración muy alto gracias a:**
a) Los imanes permanentes
b) La saturación magnética del inductor
c) El reductor
d) La rueda libre

**Respuesta: b) La saturación magnética del inductor**

> 💡 Al saturarse, el flujo se mantiene alto desde cierta intensidad, dando gran par sin necesidad de reductor (la excitación por imanes, en cambio, sí suele necesitarlo).

---

**216. El regulador de tensión de los alternadores modernos lleva incorporado:**
a) El puente de diodos
b) El porta-escobillas
c) El rotor
d) La polea

**Respuesta: b) El porta-escobillas**

> 💡 Hoy el regulador integra el porta-escobillas y se monta en el soporte posterior del alternador.

---

**217. Al medir tensión ALTERNA entre el borne B+ y masa (motor a 2.000 rpm), un valor mayor a 0,4 V indica:**
a) Funcionamiento normal
b) Uno o más diodos abiertos o en cortocircuito
c) Batería sobrecargada
d) Correa floja

**Respuesta: b) Uno o más diodos abiertos o en cortocircuito**

> 💡 Si aparece componente alterna en la salida, es que la rectificación falla: hay un diodo defectuoso.

---

## Bloque 26 — Bobinas de encendido y módulos (práctica extra 3) (218–220)

**218. Una bobina de chispa doble genera, por cada giro de cigüeñal:**
a) Una sola chispa
b) Dos chispas (una útil y una "perdida")
c) Cuatro chispas
d) Ninguna

**Respuesta: b) Dos chispas (una útil y una "perdida")**

> 💡 Dispara sus dos bujías a la vez: en una el cilindro comprime (chispa útil) y en la otra está en escape (chispa perdida).

---

**219. Las regletas (casetes) de bobinas se usan habitualmente en motores de:**
a) 8 cilindros
b) 3 o 4 cilindros
c) 1 cilindro
d) Motores diésel

**Respuesta: b) 3 o 4 cilindros**

> 💡 Agrupan varias bobinas de chispa simple en una sola carcasa; es una solución típica de motores de 3 y 4 cilindros.

---

**220. La leyenda "ÚSESE CON RESISTOR EXTERNO" en una bobina indica que:**
a) Trae el resistor incorporado
b) Necesita un resistor (balastro) externo en serie
c) No debe usarse nunca
d) Es una bobina de chispa doble

**Respuesta: b) Necesita un resistor (balastro) externo en serie**

> 💡 Esa bobina trabaja a menor tensión (7–10 V) y requiere el balastro en serie; sin él, se recalienta.

---

## Bloque 27 — Electricidad básica, magnitudes y leyes (práctica extra 4) (221–226)

**221. Un consumo alimentado con 12 V que toma 150 A desarrolla una potencia de:**
a) 162 W
b) 18.000 W
c) 1.800 W
d) 12,5 W

**Respuesta: c) 1.800 W**

> 💡 Potencia = tensión × intensidad (P = V·I): 12 V × 150 A = 1.800 W. Es el orden de magnitud de un motor de arranque.

---

**222. ¿A cuántos watts equivale 1 HP (caballo de fuerza)?**
a) 746 W
b) 550 W
c) 1.000 W
d) 100 W

**Respuesta: a) 746 W**

> 💡 La equivalencia de conversión es 1 HP = 746 W; sirve para pasar la potencia mecánica del arranque a potencia eléctrica.

---

**223. En un material con coeficiente de temperatura NEGATIVO (NTC), al subir la temperatura su resistencia:**
a) Aumenta
b) No cambia
c) Se vuelve infinita
d) Disminuye

**Respuesta: d) Disminuye**

> 💡 Los NTC (aislantes y semiconductores) bajan su resistencia con el calor; los metales, en cambio, son PTC (suben).

---

**224. La 1ª ley de Kirchhoff (ley de los nudos) establece que:**
a) La suma de las caídas de tensión en serie es igual a la tensión aplicada
b) La suma de las corrientes que entran a un nudo es igual a la suma de las que salen
c) La resistencia total en paralelo es la suma de las resistencias
d) La intensidad es proporcional a la resistencia

**Respuesta: b) La suma de las corrientes que entran a un nudo es igual a la suma de las que salen**

> 💡 En un nudo no se acumula carga: todo lo que entra sale. La 2ª ley (mallas) es la de las caídas de tensión.

---

**225. En una asociación de resistencias en PARALELO, la resistencia total es:**
a) La suma de todas las resistencias
b) El promedio de las resistencias
c) Siempre menor que la resistencia más chica del grupo
d) Siempre mayor que la resistencia más grande

**Respuesta: c) Siempre menor que la resistencia más chica del grupo**

> 💡 Al ofrecer varios caminos, el paralelo facilita el paso de corriente: la resistencia total baja por debajo de la menor del grupo.

---

**226. Si a un conductor se le DUPLICA la sección (mismo largo y material), su resistencia:**
a) Se reduce a la mitad
b) Se duplica
c) No cambia
d) Se cuadruplica

**Respuesta: a) Se reduce a la mitad**

> 💡 R = ρ·L/A: la resistencia es inversamente proporcional a la sección. Doble sección → mitad de resistencia.

---

## Bloque 28 — Magnetismo, instrumentos y baterías (práctica extra 4) (227–232)

**227. Para medir corrientes altas, el amperímetro (conectado en serie) utiliza:**
a) Un densímetro
b) Un shunt o resistencia en derivación
c) Una bobina de muchas espiras finas
d) Un dieléctrico

**Respuesta: b) Un shunt o resistencia en derivación**

> 💡 El shunt deriva la mayor parte de la corriente y el instrumento mide solo una fracción proporcional; así se leen corrientes grandes.

---

**228. Para no consumir corriente del circuito que mide, el voltímetro se construye con:**
a) Baja resistencia interna (hilo grueso)
b) Un shunt en paralelo
c) Un núcleo de hierro laminado
d) Alta resistencia interna (hilo fino, muchas espiras)

**Respuesta: d) Alta resistencia interna (hilo fino, muchas espiras)**

> 💡 Se conecta en paralelo; su alta resistencia interna evita desviar corriente y falsear la medición. El amperímetro es al revés (baja resistencia).

---

**229. Cada celda cargada de una batería de plomo-ácido entrega una tensión de:**
a) 1,5 V
b) 6 V
c) 2,1 V
d) 12 V

**Respuesta: c) 2,1 V**

> 💡 Una batería de 12 V tiene 6 celdas (6 × 2,1 ≈ 12,6 V); una de 6 V, 3 celdas.

---

**230. Una densidad de electrolito de 1,190 gr/cm³ indica un estado de carga de aproximadamente:**
a) 100%
b) 50%
c) 75%
d) Descargada

**Respuesta: b) 50%**

> 💡 Escala del densímetro: 1,265 = 100%, 1,225 = 75%, 1,190 = 50%, 1,155 = 25%, 1,120 = descargada.

---

**231. Las placas POSITIVAS de una batería de plomo-ácido están hechas de:**
a) Peróxido de plomo (PbO₂)
b) Plomo esponjoso (Pb)
c) Sulfato de plomo
d) Aleación plomo-antimonio

**Respuesta: a) Peróxido de plomo (PbO₂)**

> 💡 Las positivas son de peróxido de plomo (color café oscuro); las negativas, de plomo esponjoso. El sulfato aparece al descargarse.

---

**232. El dato CCA (Cold Cranking Amperes) de una batería expresa:**
a) Su capacidad en amperios-hora
b) La densidad del electrolito
c) Su tensión nominal
d) La corriente instantánea de arranque en frío (hasta caer a 10,5 V)

**Respuesta: d) La corriente instantánea de arranque en frío (hasta caer a 10,5 V)**

> 💡 El CCA mide el pico de corriente que da la batería en frío; la capacidad (Ah) es cuánta carga almacena, otra cosa distinta.

---

## Bloque 29 — Relés, conductores, fusibles y semiconductores (práctica extra 4) (233–238)

**233. Un fusible de color ROJO protege el circuito a:**
a) 5 A
b) 20 A
c) 10 A
d) 15 A

**Respuesta: c) 10 A**

> 💡 Código de fusibles cuchilla: rojo 10 A, azul 15 A, amarillo 20 A, verde 30 A.

---

**234. En la nomenclatura de un relé universal, el terminal 30 corresponde a:**
a) Positivo directo de batería
b) Masa de la bobina
c) Salida de positivo hacia la carga
d) Positivo de la bobina

**Respuesta: a) Positivo directo de batería**

> 💡 30 = positivo directo de batería; 87/87a = salida hacia la carga; 85/86 = bobina de mando.

---

**235. Un diodo de silicio conduciendo en directa presenta una caída de tensión de aproximadamente:**
a) 12 V
b) 0,6–0,7 V
c) 0 V
d) 220 V

**Respuesta: b) 0,6–0,7 V**

> 💡 En directa (positivo al ánodo) conduce con ~0,6–0,7 V; en inversa bloquea. Por eso al probarlo el multímetro marca 0,4–0,7 V.

---

**236. En un semiconductor de tipo P, la corriente es transportada principalmente por:**
a) Electrones libres
b) Protones
c) Iones
d) Huecos (dopaje con galio o boro)

**Respuesta: d) Huecos (dopaje con galio o boro)**

> 💡 El tipo P tiene exceso de "huecos"; el tipo N, exceso de electrones. La unión de ambos forma el diodo.

---

**237. Al soldar conductores se usa estaño con núcleo de resina y NUNCA de ácido porque:**
a) El ácido es más caro
b) La resina no conduce la electricidad
c) El ácido es corrosivo y con el tiempo daña la conexión
d) El ácido no permite fundir el estaño

**Respuesta: c) El ácido es corrosivo y con el tiempo daña la conexión**

> 💡 El decapante ácido corroe el cobre y el empalme; en electrónica/automotriz se suelda siempre con resina.

---

**238. Al probar un transistor bipolar con el multímetro en posición diodo, entre COLECTOR y EMISOR debe ocurrir que:**
a) No conduce en ningún sentido
b) Conduce en ambos sentidos
c) Cae 0,6 V como un diodo
d) Conduce solo en directa

**Respuesta: a) No conduce en ningún sentido**

> 💡 El transistor equivale a dos diodos enfrentados: base-emisor y base-colector conducen, pero colector-emisor no conduce en ninguna dirección.

---

## Bloque 30 — Sistema de encendido (práctica extra 4) (239–245)

**239. El orden de encendido típico de un motor de 4 cilindros es:**
a) 1-2-3-4
b) 1-4-2-3
c) 1-3-4-2
d) 1-5-3-6-2-4

**Respuesta: c) 1-3-4-2**

> 💡 4 cil → 1-3-4-2 (o 1-2-4-3); nunca la numeración corrida, para no explotar en cilindros vecinos seguidos. El 1-5-3-6-2-4 es de 6 cilindros.

---

**240. En el avance por vacío, al AUMENTAR el vacío del múltiple (menos acelerador), la chispa:**
a) Se retrasa
b) Se adelanta
c) No cambia
d) Se invierte

**Respuesta: b) Se adelanta**

> 💡 Con poca carga entra menos mezcla y quema más lento: hay que encenderla antes. A mayor vacío, más adelanto.

---

**241. En un motor de 4 tiempos de 6 cilindros, se produce una explosión cada:**
a) 90° de giro del cigüeñal
b) 720° de giro del cigüeñal
c) 120° de giro del cigüeñal
d) 180° de giro del cigüeñal

**Respuesta: c) 120° de giro del cigüeñal**

> 💡 Hay una explosión por cilindro cada 720° (2 vueltas); 720° ÷ 6 = 120°: impulsos igualmente espaciados.

---

**242. Para aprovechar al máximo el empuje sobre el pistón, la presión máxima de la combustión debe darse:**
a) Exactamente en el PMS
b) Unos 90° antes del PMS
c) Al final de la carrera de escape
d) Aproximadamente 23° después del PMS

**Respuesta: d) Aproximadamente 23° después del PMS**

> 💡 Como la combustión no es instantánea, la chispa se adelanta para que la presión máxima llegue justo después del PMS, con el pistón ya empujando hacia abajo.

---

**243. En el encendido CDI (descarga capacitiva), la energía acumulada en el condensador se descarga mediante:**
a) Un tiristor
b) Un platino
c) Un transistor Darlington
d) Un diodo zener

**Respuesta: a) Un tiristor**

> 💡 El CDI carga un condensador (hasta ~400 V) y lo descarga con un tiristor: chispa muy intensa pero corta (~0,3 ms).

---

**244. Los cables de bujía antiparasitarios (grafitados) tienen una resistencia del orden de:**
a) 0 Ω
b) 4–6 KΩ
c) 5–20 MΩ
d) 0,3 Ω

**Respuesta: b) 4–6 KΩ**

> 💡 Su resistencia interna (grafito) suprime interferencias; son obligatorios con encendido/inyección electrónica.

---

**245. ¿Cuántas chispas por minuto produce un motor de 4 cilindros girando a 3.000 rpm?**
a) 3.000
b) 1.500
c) 12.000
d) 6.000

**Respuesta: d) 6.000**

> 💡 Chispas/min = (rpm × nº cilindros) ÷ 2 = (3.000 × 4) ÷ 2 = 6.000. Cada cilindro enciende una vez cada 2 vueltas.

---

## Bloque 31 — Motor de arranque y alternador (práctica extra 4) (246–253)

**246. El motor de arranque consume, durante el accionamiento, una corriente aproximada de:**
a) 5–10 A
b) 120–400 A
c) 1–2 A
d) 1.000–2.000 A

**Respuesta: b) 120–400 A**

> 💡 Es un consumo enorme (unos 2 CV a 12 V); por eso no debe accionarse en exceso: descarga la batería en minutos. (Dato del TP; el manual da 400–500 A.)

---

**247. Al medir la continuidad del ROTOR del alternador entre sus dos anillos rozantes, el valor esperado es:**
a) 2,5 Ω a 5 Ω
b) 0,1 Ω a 0,3 Ω
c) 5 kΩ a 20 kΩ
d) Infinita

**Respuesta: a) 2,5 Ω a 5 Ω**

> 💡 El bobinado de excitación del rotor da unos pocos ohms (≈3,4 Ω nominal). Un valor infinito indicaría bobinado cortado.

---

**248. La continuidad entre los bobinados del ESTATOR de un alternador debe dar aproximadamente:**
a) 2,5 Ω a 5 Ω
b) 0,1 Ω a 0,3 Ω
c) 5 kΩ a 12 kΩ
d) 100 Ω

**Respuesta: b) 0,1 Ω a 0,3 Ω**

> 💡 El estator es de hilo grueso y pocas vueltas: resistencia muy baja entre fases (≈0,138 Ω nominal).

---

**249. Al probar un diodo del puente rectificador con el multímetro, en sentido de CONDUCCIÓN debe indicar:**
a) Infinito
b) 0 V
c) 400 a 700 mV
d) 14 V

**Respuesta: c) 400 a 700 mV**

> 💡 En conducción marca 0,4–0,7 V (caída típica del diodo de silicio); en bloqueo, infinito. Si conduce en ambos sentidos, está en corto.

---

**250. La rueda libre (embrague de contra vuelta) del motor de arranque cumple la función de:**
a) Aumentar el par del piñón
b) Cerrar el contacto principal del solenoide
c) Rectificar la corriente
d) Transmitir torsión en un solo sentido, impidiendo que el volante acelere al arranque

**Respuesta: d) Transmitir torsión en un solo sentido, impidiendo que el volante acelere al arranque**

> 💡 Deja que el arranque mueva al volante, pero al encender el motor lo desacopla: sin ella, el volante lanzaría el inducido a 36.000 rpm y lo destruiría.

---

**251. Con el motor a 2.000 rpm y consumidores encendidos, la tensión de carga del alternador debe estar entre:**
a) 9,6 y 13,5 V
b) 13,5 y 14,5 V
c) 2 y 5 V
d) 24 y 28 V

**Respuesta: b) 13,5 y 14,5 V**

> 💡 El régimen de prueba es 2.000 rpm y la tensión regulada ronda los 14 V. Menos de 13,5 V con consumidores indica carga insuficiente.

---

**252. La relación piñón/corona del motor de arranque es de aproximadamente:**
a) 1:1
b) 2:1
c) 15:1 a 20:1
d) 100:1

**Respuesta: c) 15:1 a 20:1**

> 💡 El piñón (pocos dientes) gira 15 a 20 veces más rápido que la corona del volante: da la reducción/relación de fuerza para mover el motor. (Dato del TP; el manual lo expresa como 1:10 a 1:15.)

---

**253. Se considera fuga problemática (que descarga la batería estando todo apagado) un consumo en reposo superior a:**
a) 30 mA
b) 2 A
c) 500 mA
d) 10 A

**Respuesta: a) 30 mA**

> 💡 En reposo el auto consume unos pocos mA (memorias, alarma); por encima de 30 mA la batería se descarga durante la noche.

---

## Bloque 32 — Bobinas de encendido y módulos (práctica extra 4) (254–260)

**254. La alta tensión (chispa) de una bobina de encendido se genera en el momento del:**
a) Cierre y carga del primario
b) Corte brusco de la corriente primaria (colapso del campo magnético)
c) Giro del rotor del distribuidor
d) Aumento gradual de la tensión de batería

**Respuesta: b) Corte brusco de la corriente primaria (colapso del campo magnético)**

> 💡 La chispa nace del CORTE, no de la carga: al colapsar de golpe el campo magnético, se induce la alta tensión en el secundario.

---

**255. Bosch reemplazó (desde 1974) las bobinas de aceite por las de resina asfáltica porque la resina:**
a) Es más barata de fabricar
b) Pesa más
c) Necesita resistor balastro
d) Ofrece mayor rigidez dieléctrica, no gotea ni explota y funciona en cualquier posición

**Respuesta: d) Ofrece mayor rigidez dieléctrica, no gotea ni explota y funciona en cualquier posición**

> 💡 La resina sólida aísla mejor, fija los bobinados y evita fugas; las de aceite podían gotear o aumentar su presión interna con el calor.

---

**256. Una bobina de chispa doble (chispa perdida) solo puede usarse en motores con número de cilindros:**
a) Impar
b) Cualquiera
c) Par
d) Solo de 1 cilindro

**Respuesta: c) Par**

> 💡 Dispara pares de bujías a la vez (una útil y una perdida), así que necesita cilindros en pares complementarios: 4 cil → 2 bobinas, 6 cil → 3.

---

**257. La bobina COP (chispa simple, una por bujía) necesita para sincronizarse:**
a) Un distribuidor mecánico
b) Un sensor de árbol de levas
c) Un resistor balastro
d) Un condensador

**Respuesta: b) Un sensor de árbol de levas**

> 💡 Al haber una chispa por carrera de explosión (no dos), el sistema debe saber en qué fase está cada cilindro: lo aporta el sensor de árbol de levas.

---

**258. ¿Bosch fabrica bobinas con el resistor (balastro) incorporado?**
a) No; cuando se necesita, el resistor va externo (por porcelana o cable resistivo)
b) Sí, todas lo traen incorporado
c) Solo las de 12 V
d) Solo las de baño de aceite

**Respuesta: a) No; cuando se necesita, el resistor va externo (por porcelana o cable resistivo)**

> 💡 Hay que consultar el adhesivo/tabla: poner resistor donde no corresponde baja la potencia de chispa; no ponerlo donde sí corresponde recalienta la bobina.

---

**259. Según BERU, la tensión secundaria (U₂) típica de una bobina de encendido moderna es de:**
a) 300–400 V
b) 1–2 kV
c) 25–45 kV
d) 12 V

**Respuesta: c) 25–45 kV**

> 💡 Los motores modernos y el encendido electrónico exigen decenas de kV (25–45 kV típico, hasta >45 kV); tocarlas en marcha puede ser mortal.

---

**260. El probador de módulos de ignición PPM 03 chequea especialmente la señal a:**
a) 5.000 RPM
b) 500 RPM
c) 800 RPM (ralentí)
d) 2.000 RPM

**Respuesta: b) 500 RPM**

> 💡 Muchas fallas intermitentes en frío o a bajas vueltas se deben a un módulo que entrega señal débil a bajas RPM; por eso el probador chequea a 500 RPM.

---

## Bloque 33 — Sistema de encendido (práctica extra 5) (261–266)

**261. La capacidad típica del condensador de un encendido convencional (con ruptor) es de:**
a) 2,2 a 2,8 µF
b) 0,022 a 0,028 µF
c) 0,22 a 0,28 µF
d) 22 a 28 µF

**Respuesta: c) 0,22 a 0,28 µF**

> 💡 En el TP se mide entre 0,22 y 0,28 µF; una capacidad mal calibrada quema los contactos del ruptor.

---

**262. Al probar un captor inductivo mientras se acciona el arranque, la tensión que genera es del orden de:**
a) 12 V continua
b) 0,5 a 2 V alterna
c) 220 V alterna
d) 0 V (no genera)

**Respuesta: b) 0,5 a 2 V alterna**

> 💡 El captor inductivo genera tensión ALTERNA por su bobinado interno; su amplitud y frecuencia crecen con las RPM. En arranque ronda 0,5–2 VCA.

---

**263. La resistencia del bobinado de un captor inductivo debe estar comprendida entre:**
a) 0,1 a 0,3 Ω
b) 5 a 20 MΩ
c) 2,5 a 5 Ω
d) 500 Ω a 4 KΩ

**Respuesta: d) 500 Ω a 4 KΩ**

> 💡 Se mide con el óhmetro entre sus terminales; fuera de 500 Ω–4 KΩ se reemplaza el captor.

---

**264. En un captor de efecto Hall, cuando la "ventana" (aleta) está ABIERTA, la señal de salida es de:**
a) 0 V
b) 12 V
c) 50–80% de la alimentación
d) Una onda senoidal

**Respuesta: a) 0 V**

> 💡 Ventana abierta → 0 V; ventana cerrada → 50–80% de la alimentación (≈3 a 9 V). Es una señal cuadrada, no senoidal.

---

**265. ¿Qué diferencia hay entre la señal de un captor de efecto Hall y la de un captor inductivo?**
a) Ambos generan una señal senoidal
b) El Hall genera alterna y el inductivo continua
c) El Hall genera una señal cuadrada; el inductivo, una senoidal (alterna)
d) No hay ninguna diferencia

**Respuesta: c) El Hall genera una señal cuadrada; el inductivo, una senoidal (alterna)**

> 💡 El Hall (3 pines, alimentado) entrega una señal cuadrada de amplitud fija; el inductivo genera por sí mismo una onda senoidal que crece con las RPM.

---

**266. Para verificar un módulo de encendido, se puede emular la señal del captor inductivo conectando y desconectando:**
a) Una pila de 1,5 V (o el multímetro en continuidad)
b) La batería de 12 V en directo
c) Un cable de 220 V
d) El osciloscopio

**Respuesta: a) Una pila de 1,5 V (o el multímetro en continuidad)**

> 💡 Al conmutar intermitentemente la pila de 1,5 V, un módulo bueno conmuta la masa de la bobina y salta la chispa en la bujía (a veces hay que invertir la polaridad).

---

## Bloque 34 — Motor de arranque y alternador (práctica extra 5) (267–270)

**267. Si la armadura de un alternador tuviera dos bobinas montadas a 90° una de otra, generaría corriente alterna:**
a) Monofásica
b) Bifásica
c) Trifásica
d) Continua

**Respuesta: b) Bifásica**

> 💡 Una bobina → monofásica; dos a 90° → bifásica; tres a 120° → trifásica (la que usa el alternador automotriz).

---

**268. El alternador automotriz genera corriente alterna trifásica porque su estator está formado por:**
a) Una sola bobina
b) Dos bobinas a 90°
c) Tres pares de bobinas dispuestos a 120°, unidos en el punto neutro
d) Seis diodos de potencia

**Respuesta: c) Tres pares de bobinas dispuestos a 120°, unidos en el punto neutro**

> 💡 Las tres bobinas a 120° generan tres ondas desfasadas (CA trifásica); luego el puente de 6 diodos la rectifica a continua.

---

**269. Durante el ensayo de arranque (llave sostenida 10 s), la tensión de descarga de la batería debe mantenerse entre:**
a) 9,6 y 13,5 V
b) 6 y 9 V
c) 2 y 5 V
d) 0 y 1 V

**Respuesta: a) 9,6 y 13,5 V**

> 💡 En ese ensayo la corriente de descarga ronda 120–200 A; si la tensión cae por debajo de 9,6 V, la batería no tiene eficacia suficiente.

---

**270. Tras el ensayo de arranque, dejando la batería recuperarse 60 s, la tensión residual debe quedar entre:**
a) 9,6 y 10,5 V
b) 11,5 y 13,5 V
c) 2 y 5 V
d) 14 y 15 V

**Respuesta: b) 11,5 y 13,5 V**

> 💡 Para el ensayo la batería debe reposar antes al menos 8 hs; si tras recuperarse no vuelve a 11,5–13,5 V, está deteriorada.

---

## Bloque 35 — Simulacro de examen (271–323)

**271. La carga eléctrica del electrón es:**
a) Positiva
b) Negativa
c) Neutra (sin carga)
d) Depende del material

**Respuesta: b) Negativa**

> 💡 El electrón tiene carga negativa; el protón positiva y el neutrón es neutro. El flujo real de electrones va del negativo al positivo.

---

**272. ¿Cuál se considera el componente fundamental de la electrónica analógica?**
a) El transistor
b) El capacitor
c) El inductor
d) La resistencia

**Respuesta: d) La resistencia**

> 💡 En este examen se toma la resistencia como componente básico: limita y controla la corriente y aparece en casi todo circuito. Ojo con esta pregunta: si se piensa en amplificación el componente activo clave es el transistor, pero la respuesta buscada acá es la resistencia.

---

**273. El potenciómetro mantiene constante el voltaje en un circuito.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 El potenciómetro es una resistencia variable: sirve para VARIAR (regular) tensión o resistencia, no para mantenerla constante.

---

**274. En un diodo, la corriente puede circular en ambos sentidos.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 El diodo conduce en un solo sentido (polarización directa) y bloquea el inverso; por eso sirve para rectificar.

---

**275. ¿Cuál es la función del diodo en un circuito rectificador?**
a) Convertir corriente alterna (CA) en continua (CC)
b) Convertir corriente continua en alterna
c) Amplificar la señal
d) Almacenar energía

**Respuesta: a) Convertir corriente alterna (CA) en continua (CC)**

> 💡 El diodo deja pasar la corriente en un solo sentido, así "recorta" la CA y la transforma en CC (rectificación).

---

**276. El transistor tiene tres terminales.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Sus tres terminales son base, colector y emisor.

---

**277. ¿Qué componente almacena energía eléctrica en forma de campo eléctrico?**
a) El capacitor (condensador)
b) La resistencia
c) El diodo
d) El fusible

**Respuesta: a) El capacitor (condensador)**

> 💡 El capacitor acumula carga entre sus placas (campo eléctrico) y la entrega cuando el circuito la necesita.

---

**278. En un circuito serie, si duplico el voltaje y la resistencia permanece constante, la corriente:**
a) Se duplica
b) Se reduce a la mitad
c) No cambia
d) Se cuadruplica

**Respuesta: a) Se duplica**

> 💡 Por la Ley de Ohm (I = V/R): si V se duplica y R no cambia, la corriente se duplica (relación directa).

---

**279. La Ley de Ohm establece que la resistencia de un conductor aumenta a medida que aumenta la corriente.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 La Ley de Ohm relaciona V = I·R; no dice que la resistencia dependa de la corriente. La R depende del material, longitud, sección y temperatura.

---

**280. La resistencia de un conductor aumenta a medida que aumenta la corriente que lo atraviesa.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 La resistencia no cambia por la corriente en sí: depende del material, longitud, sección y temperatura. (Si el paso de corriente calienta mucho el conductor, ahí sí puede variar, pero por la temperatura, no por la corriente directamente.)

---

**281. ¿Cuál es la fórmula de la Ley de Ohm?**
a) V = I · R
b) V = I / R
c) V = R / I
d) I = V · R

**Respuesta: a) V = I · R**

> 💡 Tensión = corriente × resistencia. De ahí se despejan I = V/R y R = V/I.

---

**282. En un circuito serie, si duplico el valor de todas las resistencias, la resistencia total:**
a) Se duplica
b) Se reduce a la mitad
c) No cambia
d) Se hace cero

**Respuesta: a) Se duplica**

> 💡 En serie las resistencias se suman; si todas se duplican, la suma total también se duplica.

---

**283. En un circuito serie, la resistencia total es menor que la resistencia más baja.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 En serie las resistencias se suman: la total es siempre MAYOR que cualquiera de ellas. Que sea menor que la más baja es propio del PARALELO.

---

**284. Si aumento la resistencia total de un circuito (con la tensión constante), la corriente:**
a) Disminuye
b) Aumenta
c) No cambia
d) Se duplica

**Respuesta: a) Disminuye**

> 💡 I = V/R: a mayor resistencia, menor corriente (relación inversa).

---

**285. En un circuito serie, si agrego una resistencia más, la resistencia total:**
a) Aumenta
b) Disminuye
c) No cambia
d) Se reduce a la mitad

**Respuesta: a) Aumenta**

> 💡 En serie las resistencias se suman, así que sumar una más siempre aumenta la total.

---

**286. En un circuito serie, la caída de tensión total es igual a la suma de las caídas en cada resistencia.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Es la ley de tensiones de Kirchhoff: en serie la tensión de la fuente se reparte y la suma de las caídas iguala la tensión total.

---

**287. En un circuito serie, la corriente es la misma en todas las resistencias.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 En serie hay un solo camino, así que la misma corriente atraviesa todos los componentes. Lo que se reparte es la tensión.

---

**288. ¿Cómo se calcula la resistencia total en un circuito serie?**
a) Sumando todas las resistencias (Rt = R1 + R2 + … + Rn)
b) Con 1/Rt = 1/R1 + 1/R2 + …
c) Multiplicando todas las resistencias
d) Promediando las resistencias

**Respuesta: a) Sumando todas las resistencias (Rt = R1 + R2 + … + Rn)**

> 💡 En serie se suman directamente. La fórmula de las inversas es la del paralelo.

---

**289. En un circuito paralelo, la resistencia total es menor que la resistencia más pequeña.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Al agregar caminos en paralelo se facilita el paso de corriente, así que la resistencia equivalente queda por debajo de la menor de las ramas.

---

**290. ¿Cómo se calcula la resistencia total en un circuito paralelo?**
a) Rt = 1 / (1/R1 + 1/R2 + … + 1/Rn)
b) Rt = R1 + R2 + … + Rn
c) Rt = R1 · R2 · … · Rn
d) Rt = (R1 + R2 + … + Rn) / n

**Respuesta: a) Rt = 1 / (1/R1 + 1/R2 + … + 1/Rn)**

> 💡 Se suman las inversas (conductancias) y se invierte el resultado. Para dos resistencias también sirve Rt = (R1·R2)/(R1+R2).

---

**291. El transistor puede amplificar señales eléctricas.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Una pequeña corriente de base controla una corriente mucho mayor entre colector y emisor: así amplifica.

---

**292. El transistor puede funcionar como un interruptor (conmutador).**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 En corte casi no conduce (abierto) y en saturación conduce al máximo (cerrado): trabaja como interruptor electrónico, base de la electrónica digital.

---

**293. ¿Qué material se utiliza principalmente para fabricar transistores?**
a) Silicio
b) Cobre
c) Aluminio
d) Caucho

**Respuesta: a) Silicio**

> 💡 El silicio es el semiconductor más usado (antes también germanio). El cobre y el aluminio son conductores, no semiconductores.

---

**294. ¿Qué determina la corriente de salida (colector) de un transistor?**
a) La corriente de base multiplicada por la ganancia (β)
b) El color del encapsulado
c) La temperatura ambiente únicamente
d) La cantidad de terminales

**Respuesta: a) La corriente de base multiplicada por la ganancia (β)**

> 💡 Ic ≈ β · Ib: la corriente de base, amplificada por la ganancia, define la corriente de colector.

---

**295. ¿En qué se diferencian los transistores NPN y PNP?**
a) En la polaridad/disposición de sus materiales semiconductores
b) En el tamaño físico
c) En que uno es de silicio y el otro de cobre
d) En la cantidad de terminales

**Respuesta: a) En la polaridad/disposición de sus materiales semiconductores**

> 💡 Cambia el orden del dopado (N-P-N vs P-N-P), y con él la polaridad de las tensiones y el sentido de las corrientes; ambos tienen 3 terminales.

---

**296. ¿Cuál es la función principal de un transistor?**
a) Amplificar o conmutar señales eléctricas
b) Almacenar carga eléctrica
c) Rectificar corriente alterna
d) Generar tensión

**Respuesta: a) Amplificar o conmutar señales eléctricas**

> 💡 Sus dos usos típicos son amplificar (analógico) y conmutar como interruptor (digital).

---

**297. ¿Qué significa la sigla LED?**
a) Diodo Emisor de Luz
b) Lámpara de Emisión Directa
c) Elemento de Luz Difusa
d) Diodo de Baja Energía

**Respuesta: a) Diodo Emisor de Luz**

> 💡 Del inglés Light-Emitting Diode: un diodo que emite luz al conducir en directa.

---

**298. El LED emite luz cuando se lo polariza en inversa.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 El LED, como todo diodo, sólo conduce (y emite luz) en polarización directa. En inversa no conduce ni ilumina.

---

**299. ¿Cuál es el componente principal de un LED?**
a) La juntura o unión P-N (semiconductora)
b) Un filamento de tungsteno
c) Un gas noble
d) Una bobina

**Respuesta: a) La juntura o unión P-N (semiconductora)**

> 💡 El LED es una unión P-N que, al recombinarse los portadores, libera energía en forma de luz. El filamento es de las lámparas incandescentes.

---

**300. ¿Qué característica del sensor Hall le permite detectar campos magnéticos?**
a) La generación de una tensión (efecto Hall) al circular corriente en presencia de un campo
b) El aumento de su temperatura
c) La vibración mecánica
d) La emisión de luz

**Respuesta: a) La generación de una tensión (efecto Hall) al circular corriente en presencia de un campo**

> 💡 Efecto Hall: si por un semiconductor circula corriente y hay un campo magnético perpendicular, aparece una tensión transversal proporcional al campo.

---

**301. ¿Qué material se utiliza en un sensor Hall?**
a) Un semiconductor
b) Madera
c) Caucho
d) Vidrio

**Respuesta: a) Un semiconductor**

> 💡 El efecto Hall se aprovecha en materiales semiconductores, donde es mucho más notorio que en un conductor común.

---

**302. ¿Cuál es una aplicación típica de los sensores Hall en el automóvil?**
a) Medir la velocidad/rpm o la posición (cigüeñal, árbol de levas)
b) Medir el nivel de aceite
c) Medir la presión de los neumáticos
d) Medir la temperatura ambiente

**Respuesta: a) Medir la velocidad/rpm o la posición (cigüeñal, árbol de levas)**

> 💡 Se usan como captadores de rpm y posición (cigüeñal/levas) y de velocidad; entregan una señal digital limpia.

---

**303. Un sensor Hall detecta campos magnéticos.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Su tensión de salida varía según el campo magnético presente: por eso detecta la presencia y la variación del campo.

---

**304. ¿Dónde se instalan típicamente los sensores inductivos?**
a) En el sistema de ABS y como captadores de rpm (cigüeñal)
b) En el tablero de instrumentos
c) Dentro de la batería
d) En los faros

**Respuesta: a) En el sistema de ABS y como captadores de rpm (cigüeñal)**

> 💡 El sensor inductivo (bobina + imán) capta el paso de los dientes de una rueda dentada: velocidad de rueda (ABS) y rpm/posición del cigüeñal.

---

**305. Los sensores inductivos solo sirven para medir la temperatura del motor.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 El inductivo mide velocidad/rpm y posición por variación del campo magnético. La temperatura del motor la mide un NTC, no un inductivo.

---

**306. ¿Qué tipo de señal genera un sensor inductivo?**
a) Analógica (onda de corriente alterna, senoidal)
b) Digital cuadrada
c) Continua de valor fijo
d) Óptica

**Respuesta: a) Analógica (onda de corriente alterna, senoidal)**

> 💡 Al pasar los dientes de la rueda induce una tensión alterna cuya amplitud y frecuencia crecen con la velocidad.

---

**307. ¿Qué función cumple un sensor NTC?**
a) Medir temperatura (su resistencia baja al aumentar la temperatura)
b) Medir la velocidad del motor
c) Medir la presión de aceite
d) Generar la chispa de encendido

**Respuesta: a) Medir temperatura (su resistencia baja al aumentar la temperatura)**

> 💡 NTC = coeficiente de temperatura negativo: a más temperatura, menos resistencia. Se usa para medir temperatura de agua/aire (motor).

---

**308. ¿Para qué sirve el osciloscopio?**
a) Visualizar la forma de onda de las señales eléctricas en el tiempo
b) Cargar la batería
c) Generar corriente
d) Medir la presión de aceite

**Respuesta: a) Visualizar la forma de onda de las señales eléctricas en el tiempo**

> 💡 Muestra cómo varía la tensión en el tiempo (forma de onda), lo que permite diagnosticar sensores y señales.

---

**309. ¿Qué es la atenuación en un osciloscopio?**
a) La reducción de la amplitud de la señal
b) El aumento de la frecuencia
c) El cambio de color de la pantalla
d) El aumento del voltaje mostrado

**Respuesta: a) La reducción de la amplitud de la señal**

> 💡 Atenuar es reducir la amplitud (por ejemplo con la punta 10:1) para medir señales grandes sin saturar la entrada.

---

**310. El osciloscopio permite ver la frecuencia de una señal.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Al mostrar la señal en el tiempo se puede medir su período y, a partir de él, la frecuencia (f = 1/T).

---

**311. El osciloscopio sirve para medir directamente la corriente.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 El osciloscopio mide TENSIÓN en el tiempo. Para ver corriente se necesita una pinza amperométrica o una resistencia shunt que la convierta en tensión.

---

**312. ¿Qué tipos de señales se pueden visualizar en un osciloscopio?**
a) Analógicas y digitales
b) Solo analógicas
c) Solo digitales
d) Ninguna, sólo muestra números

**Respuesta: a) Analógicas y digitales**

> 💡 Grafica cualquier variación de tensión en el tiempo, sea una onda analógica o una señal digital (cuadrada).

---

**313. ¿Por qué es importante verificar las conexiones de un motor de arranque?**
a) Para asegurar un flujo de corriente adecuado (evitar resistencias que impidan el arranque)
b) Para mejorar el sonido del motor
c) Para ahorrar combustible
d) Para enfriar el motor

**Respuesta: a) Para asegurar un flujo de corriente adecuado (evitar resistencias que impidan el arranque)**

> 💡 El arranque consume cientos de amperes; una conexión floja o sulfatada agrega resistencia, cae la tensión y el motor gira débil o no arranca.

---

**314. ¿Para qué sirve el solenoide (automático) en el motor de arranque?**
a) Actúa como interruptor de alta corriente y empuja el piñón hacia el volante
b) Genera la chispa de encendido
c) Rectifica la corriente
d) Carga la batería

**Respuesta: a) Actúa como interruptor de alta corriente y empuja el piñón hacia el volante**

> 💡 El solenoide cumple doble función: cierra el contacto de alta corriente hacia el motor y, con su horquilla, desplaza el piñón para que engrane.

---

**315. ¿Qué parte del motor de arranque engrana con el volante del motor?**
a) El piñón impulsor (Bendix)
b) El solenoide
c) Las escobillas
d) El regulador

**Respuesta: a) El piñón impulsor (Bendix)**

> 💡 El piñón del impulsor (Bendix) se desplaza y engrana con la corona dentada del volante para hacer girar el motor.

---

**316. ¿Cuál de estas partes NO corresponde al motor de arranque?**
a) Estator
b) Rotor
c) Horquilla
d) Solenoide

**Respuesta: a) Estator**

> 💡 En el motor de arranque (de corriente continua) se habla de inducido y bobinas de campo; "estator" es un término propio del alternador (CA). Horquilla, solenoide y la parte giratoria sí pertenecen al arranque. (Pregunta con letra chica: la respuesta buscada es "estator".)

---

**317. ¿Qué ocurre cuando un alternador está sobrecargado?**
a) Se le exige más corriente de la que puede entregar (más consumos que su capacidad)
b) Genera demasiado voltaje sin control
c) Se apaga el motor
d) Carga la batería más rápido

**Respuesta: a) Se le exige más corriente de la que puede entregar (más consumos que su capacidad)**

> 💡 "Sobrecargado" = la demanda de los consumos (luces, ventiladores, audio, etc.) supera la capacidad del alternador; la batería termina aportando la diferencia y se descarga.

---

**318. ¿Cuál de estos NO es parte del alternador?**
a) El impulsor (Bendix)
b) La polea
c) El estator
d) El rotor

**Respuesta: a) El impulsor (Bendix)**

> 💡 El impulsor o Bendix pertenece al motor de arranque. El alternador tiene polea, rotor, estator, puente rectificador y regulador.

---

**319. ¿Para qué sirve el regulador de tensión del alternador?**
a) Estabilizar/regular la tensión de salida (≈14 V)
b) Rectificar la corriente alterna
c) Aumentar las rpm del motor
d) Enfriar el estator

**Respuesta: a) Estabilizar/regular la tensión de salida (≈14 V)**

> 💡 El regulador controla la corriente de excitación del rotor para mantener la tensión de carga estable (~14 V) pese a las rpm y el consumo.

---

**320. ¿Qué tipo de corriente genera internamente el alternador?**
a) Corriente alterna trifásica
b) Corriente continua pura
c) Corriente alterna monofásica
d) Corriente continua pulsante

**Respuesta: a) Corriente alterna trifásica**

> 💡 El estator genera CA trifásica (tres bobinas a 120°); recién el puente de diodos la rectifica a continua para el auto.

---

**321. ¿Qué componente del alternador convierte la corriente alterna en continua?**
a) El puente rectificador (diodos)
b) El regulador de tensión
c) El estator
d) La polea

**Respuesta: a) El puente rectificador (diodos)**

> 💡 El puente de 6 diodos rectifica la CA trifásica del estator y entrega corriente continua.

---

**322. ¿Qué componente del alternador convierte la energía mecánica en eléctrica?**
a) El estator (bobinado donde se induce la corriente)
b) El puente rectificador
c) El regulador de tensión
d) La batería

**Respuesta: a) El estator (bobinado donde se induce la corriente)**

> 💡 El rotor gira creando un campo magnético que, al barrer las bobinas del estator, induce en ellas la corriente: ahí la energía mecánica se transforma en eléctrica.

---

**323. ¿Cuál es la función del alternador?**
a) Generar energía eléctrica para alimentar los consumos y cargar la batería
b) Hacer girar el motor para arrancarlo
c) Producir la chispa en las bujías
d) Regular la temperatura del motor

**Respuesta: a) Generar energía eléctrica para alimentar los consumos y cargar la batería**

> 💡 Con el motor en marcha, el alternador genera electricidad para todos los consumos y mantiene cargada la batería.

# 🟩 2ª PARTE — Inyección electrónica nafta

## Bloque 36 — Sensores de inyección (súper quiz) (324–366)

**324. ¿Qué le pasa a la resistencia de un sensor NTC cuando se calienta?**
a) Sube, y con ella sube la tensión de señal
b) Baja, y con ella baja la tensión de señal
c) Se mantiene fija y solo cambia la corriente
d) Sube hasta abrirse cuando pasa los 90 °C

**Respuesta: b) Baja, y con ella baja la tensión de señal**

> 💡 NTC = coeficiente de temperatura negativo: más temperatura, menos resistencia. En el divisor con la R interna de la ECU, la tensión del nodo baja.

---

**325. Con el cable de señal del ECT cortado, ¿qué temperatura cree ver la ECU?**
a) Unos 140 °C, porque el nodo queda en 0 V
b) La temperatura real, porque usa la del IAT
c) Unos −40 °C, porque el nodo queda en 5 V
d) Unos 90 °C, porque usa un valor promedio

**Respuesta: c) Unos −40 °C, porque el nodo queda en 5 V**

> 💡 Cortado, no hay caída en la NTC: el nodo sube a 5 V, que la ECU interpreta como frío extremo. Enriquece y marca falla.

---

**326. ¿Por qué no conviene poner una NTC Ford en un auto de otra marca?**
a) Porque las NTC Ford trabajan con 12 V directos
b) Su curva y la R interna de la ECU no coinciden
c) Porque la NTC Ford aumenta su R con el calor
d) Porque las NTC Ford entregan una señal digital

**Respuesta: b) Su curva y la R interna de la ECU no coinciden**

> 💡 La NTC del Rocam tiene ≈36 kΩ a 20 °C, unas diez veces más que una Bosch. Cada ECU tiene su resistencia de polarización para su curva.

---

**327. El MAP, ¿qué presión mide?**
a) La diferencia entre el múltiple y la presión atmosférica
b) La presión absoluta dentro del múltiple de admisión
c) La presión de combustible en la rampa de inyectores
d) La presión de los gases antes del catalizador

**Respuesta: b) La presión absoluta dentro del múltiple de admisión**

> 💡 Tiene vacío perfecto como referencia, así que mide presión absoluta. Por eso con motor parado mide la atmosférica.

---

**328. ¿Cuándo da la tensión más baja el sensor MAP?**
a) Desacelerando con la mariposa cerrada
b) Con contacto y el motor detenido
c) Acelerando a fondo en una subida
d) En ralentí con el aire acondicionado prendido

**Respuesta: a) Desacelerando con la mariposa cerrada**

> 💡 Mariposa cerrada y motor girando rápido = máximo vacío = presión mínima. El manual lo da como la condición de señal más baja.

---

**329. Con contacto y el motor parado, el MAP sirve como:**
a) Vacuómetro, porque el múltiple queda con vacío
b) Termómetro, porque mide la temperatura del aire quieto
c) Barómetro: el múltiple queda a presión atmosférica
d) Caudalímetro, porque mide el aire en reposo

**Respuesta: c) Barómetro: el múltiple queda a presión atmosférica**

> 💡 Sin giro no hay vacío: el múltiple está a la presión de afuera. La ECU guarda ese valor para corregir por la altura.

---

**330. ¿Qué es un sensor TMAP?**
a) Un MAP que entrega su señal en frecuencia
b) Un MAP con un caudalímetro de hilo caliente integrado
c) Un MAP y una NTC de aire en el mismo cuerpo
d) Un MAP ubicado dentro de la propia ECU

**Respuesta: c) Un MAP y una NTC de aire en el mismo cuerpo**

> 💡 T de temperatura: suma el IAT al MAP. Tiene 4 pines: 5 V, masa común, señal MAP y señal IAT.

---

**331. Un sensor de 4 pines atornillado arriba del múltiple de admisión casi seguro es:**
a) Un TPS de doble pista para la mariposa
b) Un sensor de fase Hall con su malla
c) Un TMAP (presión y temperatura del aire)
d) Una sonda lambda calefaccionada

**Respuesta: c) Un TMAP (presión y temperatura del aire)**

> 💡 MAP solo = 3 pines; TMAP = 4 pines con un pico hacia adentro del múltiple. TPS, Hall y lambda van en otros lugares.

---

**332. ¿Dónde va el BARO según el manual?**
a) Dentro de la ECU, con una toma filtrada
b) En el múltiple de admisión, al lado del sensor MAP
c) En la caja del filtro, junto al IAT
d) En el escape, antes del catalizador

**Respuesta: a) Dentro de la ECU, con una toma filtrada**

> 💡 Se ubica dentro de la unidad de mando, con una toma con filtro hacia el exterior.

---

**333. ¿Qué mide un caudalímetro de aleta (VAF)?**
a) El volumen de aire que entra al motor
b) La masa de aire que entra al motor
c) La presión absoluta en el múltiple
d) La humedad del aire que se aspira

**Respuesta: a) El volumen de aire que entra al motor**

> 💡 La aleta se abre según el caudal: es volumen. Para pasar a masa la ECU necesita la temperatura (trae una NTC adentro).

---

**334. ¿Qué mide un MAF de hilo o película caliente?**
a) La masa de aire, porque el aire denso enfría más
b) El volumen de aire, sin importar la densidad
c) La presión del aire antes de la mariposa
d) La velocidad del aire dentro de la cámara de combustión

**Respuesta: a) La masa de aire, porque el aire denso enfría más**

> 💡 Cuanto más aire (en gramos) pasa, más calor se lleva del hilo. Por eso compensa temperatura y altura solo.

---

**335. ¿Dónde se instala el MAF?**
a) Entre la mariposa y las válvulas
b) Entre el filtro de aire y la mariposa
c) Dentro de la ECU, con una manguera
d) En el escape, antes del catalizador

**Respuesta: b) Entre el filtro de aire y la mariposa**

> 💡 El manual: después del filtro y antes del cuerpo de aceleración. El MAP, en cambio, va después de la mariposa.

---

**336. En un MAF de película caliente, ¿qué pasa con la señal al aumentar el aire?**
a) Sube: hace falta más corriente para calentarla
b) Baja, porque la película queda más fría
c) No cambia, porque lo único que varía es la frecuencia
d) Se invierte, porque el aire va en contra

**Respuesta: a) Sube: hace falta más corriente para calentarla**

> 💡 La electrónica mantiene la película a ≈180 °C. Más aire, más enfriamiento, más corriente: mayor tensión de señal.

---

**337. Un MAF sucio de aceite o polvo:**
a) Lee más aire del real y la mezcla queda bastante rica
b) Deja de medir y la ECU corta la inyección
c) Mide igual porque la suciedad no lo afecta
d) Lee menos aire del real y la mezcla queda pobre

**Respuesta: d) Lee menos aire del real y la mezcla queda pobre**

> 💡 La mugre aísla el hilo: el aire lo enfría menos y la ECU cree que entra menos aire. Inyecta de menos.

---

**338. Una toma de aire falsa después del caudalímetro, en un motor con MAF, produce:**
a) Mezcla rica, porque el MAF mide aire de más
b) Ningún cambio, porque la sonda lambda no lo puede detectar
c) Mezcla pobre, porque entra aire que no se midió
d) Corte de inyección, porque el MAF se apaga

**Respuesta: c) Mezcla pobre, porque entra aire que no se midió**

> 💡 Ese aire entra al cilindro pero el MAF nunca lo vio. La ECU inyecta para menos aire del que hay.

---

**339. Si la manguera del MAP se suelta, ¿qué lee el sensor?**
a) Presión atmosférica, como si fuera a fondo
b) Vacío máximo, como si desacelerara
c) Cero, como si el sensor estuviera cortado
d) El valor real, porque lo corrige el IAT

**Respuesta: a) Presión atmosférica, como si fuera a fondo**

> 💡 Al aire libre mide la presión de afuera. La ECU interpreta carga máxima y enriquece de más.

---

**340. Los motores sin caudalímetro calculan el aire con el método:**
a) Velocidad-densidad: MAP, IAT y RPM
b) Masa directa: MAF y temperatura
c) Volumen directo: VAF y presión
d) Lazo cerrado: sonda lambda y RPM solamente

**Respuesta: a) Velocidad-densidad: MAP, IAT y RPM**

> 💡 Sin medir el aire, lo deducen con la presión del múltiple, la temperatura, las RPM y la cilindrada grabada.

---

**341. En el VAF, ¿para qué sirve la aleta de compensación?**
a) Para medir la temperatura del aire aspirado
b) Para frenar las oscilaciones de la aleta sonda
c) Para cortar la bomba de nafta cuando el motor se para
d) Para regular el ralentí con un tornillo

**Respuesta: b) Para frenar las oscilaciones de la aleta sonda**

> 💡 Va en una cámara de amortiguación y actúa como un amortiguador sobre la aleta que mide.

---

**342. ¿Cómo es la señal de un TPS al abrir la mariposa despacio?**
a) Baja de casi 5 V hasta unas pocas décimas de volt
b) Oscila entre 0,1 y 0,9 V varias veces
c) Sube de unas décimas de volt hasta casi 5 V
d) Pasa de 0 V a 12 V de golpe al final

**Respuesta: c) Sube de unas décimas de volt hasta casi 5 V**

> 💡 Es un potenciómetro: en reposo pocas décimas y a fondo cerca de la referencia de 5 V, de forma lineal.

---

**343. Un pozo a 0 V en la señal del TPS cerca de ralentí indica:**
a) El conector del TPS bien apretado
b) Una mariposa motorizada sin alimentación
c) La pista de carbón gastada en esa zona
d) Un TPS de doble pista funcionando bien

**Respuesta: c) La pista de carbón gastada en esa zona**

> 💡 La pista se gasta donde más trabaja. El cursor pierde contacto, la ECU cree que soltaste el pedal y el auto tironea.

---

**344. Según el manual, ¿qué motores con TPS Bosch de doble pista no llevan MAP?**
a) Los que tienen caudalímetro de película
b) Los que tienen sensor de fase inductivo
c) Los que tienen sonda lambda de banda ancha
d) Los que usan ese TPS para calcular la carga

**Respuesta: d) Los que usan ese TPS para calcular la carga**

> 💡 El manual dice que los vehículos con ese sensor (pista 1 de 0 a 24° y pista 2 de 22° a 90°) no tienen MAP.

---

**345. En el acelerador electrónico, ¿por qué el pedal tiene dos pistas?**
a) Para mover la mariposa con más fuerza
b) Para tener una pista por cada pedal
c) Para medir la temperatura del habitáculo
d) Para que la ECU las compare y detecte fallas

**Respuesta: d) Para que la ECU las compare y detecte fallas**

> 💡 La ECU chequea la plausibilidad: la pista 2 suele dar la mitad de la 1. Si no coinciden, entra en modo emergencia.

---

**346. Si las dos pistas del pedal no coinciden, la ECU:**
a) Abre la mariposa a fondo por seguridad
b) Corta el encendido y detiene el motor
c) Ignora el pedal y usa la sonda lambda
d) Pasa a modo emergencia y limita la mariposa

**Respuesta: d) Pasa a modo emergencia y limita la mariposa**

> 💡 Limita la apertura, prende la luz y la mariposa queda cerca de su reposo (≈5°, la abre un resorte).

---

**347. ¿Cómo se comanda el motor de la mariposa motorizada?**
a) Con PWM: frecuencia fija y ancho variable
b) Con tensión alterna de frecuencia variable
c) Con pulsos de 5 V iguales a los del pedal
d) Con un relé que solo la abre o la cierra

**Respuesta: a) Con PWM: frecuencia fija y ancho variable**

> 💡 El manual: motor de CC con reducción, comandado con frecuencia fija y ciclo de trabajo variable.

---

**348. En un CKP inductivo, al subir las RPM:**
a) Sube la frecuencia y la amplitud no cambia
b) Sube la amplitud y la frecuencia no cambia
c) Suben la amplitud y la frecuencia de la señal
d) Bajan tanto la amplitud como la frecuencia de la señal

**Respuesta: c) Suben la amplitud y la frecuencia de la señal**

> 💡 La tensión inducida depende de la velocidad del cambio de flujo: más RPM, más volts y más dientes por segundo.

---

**349. En un sensor Hall, al subir las RPM:**
a) Suben la amplitud y la frecuencia de la señal
b) Sube la frecuencia y la amplitud sigue en 5 V
c) Sube la amplitud y la frecuencia no cambia
d) Baja la frecuencia y la amplitud se mantiene en 5 V

**Respuesta: b) Sube la frecuencia y la amplitud sigue en 5 V**

> 💡 El Hall conmuta entre 0 y su alimentación. Más RPM: pulsos más juntos y angostos, mismo alto y mismo ciclo de trabajo.

---

**350. ¿Por qué un Hall sirve mejor que un inductivo a muy bajas RPM?**
a) Porque genera más tensión al girar lento
b) Porque no necesita ninguna alimentación de la ECU
c) Porque usa una rueda con más dientes
d) Porque su señal no depende de la velocidad

**Respuesta: d) Porque su señal no depende de la velocidad**

> 💡 El inductivo casi no genera tensión al girar lento. El Hall entrega 5 V aunque la rueda esté casi quieta.

---

**351. En una rueda fónica 60-2, el hueco de dos dientes sirve para:**
a) Que el sensor no se roce con la rueda
b) Que la señal tenga la misma amplitud
c) Darle a la ECU una referencia de posición
d) Contar las vueltas del árbol de levas

**Respuesta: c) Darle a la ECU una referencia de posición**

> 💡 Al faltar dientes la señal tiene un hueco que la ECU reconoce como referencia de PMS para ubicar el cigüeñal.

---

**352. ¿Qué entrehierro da el manual para el CKP inductivo?**
a) Alrededor de 5 mm (entre 4 y 6 mm)
b) Alrededor de 0,1 mm (casi tocando)
c) Alrededor de 1 mm (entre 0,5 y 1,5 mm)
d) Alrededor de 10 mm (lejos de la rueda)

**Respuesta: c) Alrededor de 1 mm (entre 0,5 y 1,5 mm)**

> 💡 El texto dice 1 a 1,5 mm y la figura 1 ± 0,5 mm. Si se aleja, baja la amplitud.

---

**353. Cuántos pulsos da el sensor de fase (CMP) por cada vuelta del cigüeñal:**
a) Medio: uno cada dos vueltas del cigüeñal
b) Uno: un pulso en cada vuelta del cigüeñal
c) Dos: un pulso cada media vuelta del motor
d) Sesenta: uno por cada diente de la rueda

**Respuesta: a) Medio: uno cada dos vueltas del cigüeñal**

> 💡 El árbol de levas gira a la mitad. El CMP da un pulso por ciclo (2 vueltas) y así la ECU sabe qué cilindro está en compresión.

---

**354. ¿Cómo se identifica un CKP inductivo midiendo en el conector?**
a) Un pin tiene 12 V con la llave en contacto
b) Dos pines dan unos cientos de ohms entre sí
c) Todos los pines dan circuito abierto (OL)
d) La señal es cuadrada de 0 a 5 V al girar

**Respuesta: b) Dos pines dan unos cientos de ohms entre sí**

> 💡 Es una bobina: entre sus dos pines se miden cientos de Ω (≈400–1.100 según el motor). El Hall no se mide en Ω.

---

**355. Con mezcla rica, una sonda lambda de circonio entrega:**
a) Cerca de 0,1 V, porque hay mucho oxígeno
b) Cerca de 5 V, porque está saturada
c) Cerca de 0 V, porque se enfría
d) Cerca de 0,9 V, porque hay poco oxígeno

**Respuesta: d) Cerca de 0,9 V, porque hay poco oxígeno**

> 💡 Poco O₂ en el escape → mucha diferencia con el aire de referencia → tensión alta (≈0,9 V).

---

**356. ¿Desde qué temperatura regula bien la sonda lambda?**
a) Desde unos 90 °C
b) Desde unos 900 °C o más
c) Desde unos 35 °C
d) Desde unos 350 °C

**Respuesta: d) Desde unos 350 °C**

> 💡 Fría no conduce iones de oxígeno. Por eso las sondas actuales tienen calefactor.

---

**357. La sonda post-catalizador de un catalizador sano muestra:**
a) La misma oscilación rápida que la sonda pre-catalizador
b) Una señal estable, sin las oscilaciones de la pre
c) Una señal cuadrada de 0 a 5 V muy rápida
d) Cero volts fijos, porque no hay oxígeno

**Respuesta: b) Una señal estable, sin las oscilaciones de la pre**

> 💡 El catalizador almacena y libera oxígeno y amortigua las oscilaciones. Si la post copia a la pre, el catalizador está agotado.

---

**358. La ECU trabaja en lazo cerrado con la lambda porque la sonda:**
a) Indica exactamente cuánto de rica o pobre está la mezcla
b) Indica la masa de aire que entra al motor
c) Indica la temperatura de los gases de escape
d) Solo indica de qué lado de λ = 1 está la mezcla

**Respuesta: d) Solo indica de qué lado de λ = 1 está la mezcla**

> 💡 La curva es casi un escalón en λ = 1: la ECU enriquece y empobrece alternando y la mezcla oscila alrededor de 1.

---

**359. El sensor de detonación genera su señal con:**
a) Una bobina y un imán frente a una rueda dentada
b) Una NTC que se calienta con cada golpe del pistón en el block
c) Un chip Hall que detecta el paso de la llama
d) Un cristal piezoeléctrico que se comprime al vibrar

**Respuesta: d) Un cristal piezoeléctrico que se comprime al vibrar**

> 💡 Una masa por inercia aprieta el piezo cuando el block vibra y aparece tensión entre sus caras.

---

**360. Al detectar detonación, la ECU:**
a) Atrasa el encendido y luego lo recupera
b) Adelanta el encendido para quemar más rápido
c) Corta la inyección de todos los cilindros
d) Enriquece la mezcla y apaga la sonda lambda

**Respuesta: a) Atrasa el encendido y luego lo recupera**

> 💡 Atrasar la chispa baja la presión pico y frena el picado. Luego vuelve a adelantar escalón por escalón.

---

**361. ¿Por qué el sensor de detonación se monta sin arandela y con torque fijo?**
a) Para transmitir bien la vibración del block
b) Para aislarlo eléctricamente de la masa
c) Para que no se caliente con el motor
d) Para poder girarlo y ajustar la señal

**Respuesta: a) Para transmitir bien la vibración del block**

> 💡 Flojo no detecta; pasado de torque detecta de más y la ECU atrasa sin necesidad. Va a ≈20–25 Nm.

---

**362. El VSS de efecto Hall, con el auto detenido, entrega:**
a) Pulsos fijos que no cambian con la velocidad
b) Ningún pulso; aparecen y aumentan al andar
c) Una tensión alterna que crece con la velocidad
d) Una tensión fija de 12 V que baja al andar

**Respuesta: b) Ningún pulso; aparecen y aumentan al andar**

> 💡 El manual: detenido, sin pulsos; andando, la frecuencia aumenta con la velocidad y la amplitud es constante.

---

**363. El presostato de aceite, con el motor andando y buena presión:**
a) Cierra el contacto a masa y la luz se prende
b) Entrega una tensión que sube con la presión
c) Abre el contacto a masa y la luz se apaga
d) Entrega pulsos cuya frecuencia sube con la presión

**Respuesta: c) Abre el contacto a masa y la luz se apaga**

> 💡 Es un interruptor normalmente cerrado: parado da masa y prende la luz; con presión (≈0,3–0,5 bar) abre.

---

**364. En el Renault K7M, ¿dónde está el CKP?**
a) Adelante, frente a la polea del cigüeñal
b) En la carcasa de la caja, leyendo el volante
c) En la tapa de cilindros, junto al árbol
d) En el múltiple de admisión, justo al lado del MAP

**Respuesta: b) En la carcasa de la caja, leyendo el volante**

> 💡 En el K7M es inductivo, mide 175–295 Ω y lee los dientes del volante desde la carcasa de la caja.

---

**365. ¿Qué tiene de particular el Renault K7M respecto de los otros motores?**
a) Un MAF de película en lugar de un MAP
b) Un CKP Hall en lugar de uno inductivo
c) Una sonda lambda de banda ancha
d) MAP e IAT separados en lugar de un TMAP

**Respuesta: d) MAP e IAT separados en lugar de un TMAP**

> 💡 El IAT va en la entrada de aire y el MAP en el múltiple. Los demás usan un TMAP de 4 pines.

---

**366. En el Ford Rocam (EEC-V), el sensor de fase (CMP) es:**
a) Hall de 3 pines, con señal de 0 a 5 V
b) Inductivo de 2 pines, de 400 a 600 Ω
c) Óptico, con un disco ranurado
d) Piezoeléctrico, igual al de detonación

**Respuesta: b) Inductivo de 2 pines, de 400 a 600 Ω**

> 💡 Según el manual EEC-V: CMP inductivo de 2 cables, 400–600 Ω y 0,1–0,5 VAC, un pulso cada dos vueltas.

---

## Bloque 37 — Señales, instrumentos y ECU (repaso) (367–385)

**367. La mayoría de los sensores del sistema de inyección:**
a) Generan su propio voltaje
b) No generan voltaje, solo modifican un voltaje de referencia de la ECU
c) Funcionan solo con corriente alterna
d) Trabajan siempre a 12 V

**Respuesta: b) No generan voltaje, solo modifican un voltaje de referencia de la ECU**

> 💡 Son resistivos: la ECU les da 5 V de referencia y lee cuánto 'cae'. Solo la lambda y el captor inductivo generan su propia tensión.

---

**368. El rango típico de la señal de retorno de un sensor va de:**
a) 0 a 12 V
b) 100 mV a 4.800 mV
c) 1 a 5 A
d) 0 a 45 kV

**Respuesta: b) 100 mV a 4.800 mV**

> 💡 La señal siempre es menor que la referencia de 5 V: entre ~0,1 y 4,8 V. Fuera de ese rango, la ECU lo toma como falla.

---

**369. Si la batería baja de 9 V, ¿qué pasa con los sensores?**
a) No se ven afectados
b) Sus señales se vuelven erróneas y el sistema falla
c) Aumentan su precisión
d) Se apagan por completo sin consecuencias

**Respuesta: b) Sus señales se vuelven erróneas y el sistema falla**

> 💡 Con menos de 9 V de batería la referencia y la masa ya no son confiables: todos los sensores 'mienten' a la vez.

---

**370. Un actuador es un dispositivo que:**
a) Transforma energía eléctrica en mecánica
b) Mide la temperatura
c) Genera el voltaje de referencia
d) Almacena códigos de falla

**Respuesta: a) Transforma energía eléctrica en mecánica**

> 💡 Sensor = informa (entrada); actuador = ejecuta (salida), convirtiendo energía eléctrica en movimiento.

---

**371. La mayoría de los actuadores están formados por:**
a) Un termistor
b) Una bobina (solenoide), alimentada con 12 V
c) Un potenciómetro
d) Un chip de silicio

**Respuesta: b) Una bobina (solenoide), alimentada con 12 V**

> 💡 Inyectores, relés, electroválvulas: casi todos son bobinas a 12 V que la ECU comanda dándoles masa.

---

**372. Un termistor NTC:**
a) Aumenta su resistencia al subir la temperatura
b) Disminuye su resistencia al subir la temperatura
c) Mantiene constante su resistencia
d) Solo funciona con señal digital

**Respuesta: b) Disminuye su resistencia al subir la temperatura**

> 💡 NTC = coeficiente negativo: más temperatura, menos resistencia. Es el más usado (ECT, IAT).

---

**373. Si un potenciómetro sufre una interrupción en su pista, la señal:**
a) Se mantiene igual
b) Cae a 0 V y la ECU lo interpreta como avería
c) Sube al voltaje de batería
d) Se convierte en digital

**Respuesta: b) Cae a 0 V y la ECU lo interpreta como avería**

> 💡 Linealidad: si la pista se corta, la señal cae a 0 V; para la ECU es una avería y el motor anda mal.

---

**374. ¿Cuál de estos usa un potenciómetro como principio?**
a) Sensor de temperatura de motor
b) Sonda lambda
c) Sensor de posición de mariposa (TPS)
d) Sensor de detonación

**Respuesta: c) Sensor de posición de mariposa (TPS)**

> 💡 TPS, caudalímetro VAF, posición de EGR y pedal electrónico usan potenciómetro (cursor sobre pista de carbón).

---

**375. Un sensor de tipo interruptor entrega una señal:**
a) Analógica proporcional
b) Digital (ON/OFF)
c) Senoidal de corriente alterna
d) De frecuencia variable continua

**Respuesta: b) Digital (ON/OFF)**

> 💡 El interruptor abre o cierra del todo: solo dos estados (ON/OFF). Ej.: A/C, freno, embrague.

---

**376. El ancho de pulso (tiempo de apertura del inyector) se mide en:**
a) Amperios
b) Milisegundos
c) Grados
d) Ohmios

**Respuesta: b) Milisegundos**

> 💡 El tiempo de inyección (ancho de pulso) se mide en milisegundos: más ms, más nafta.

---

**377. El "ciclo de trabajo" (%) de una onda cuadrada equivale, en el encendido, a:**
a) La amplitud
b) La frecuencia
c) El ángulo de detención (dwell)
d) El voltaje de referencia

**Respuesta: c) El ángulo de detención (dwell)**

> 💡 El ciclo de trabajo (% ON/OFF) es lo mismo que el viejo ángulo de detención (dwell) del primario de encendido.

---

**378. Para medir la electrónica del vehículo se debe usar un multímetro:**
a) Analógico
b) Digital
c) De aguja
d) De pinza únicamente

**Respuesta: b) Digital**

> 💡 El analógico tiene baja impedancia: chupa corriente del circuito y puede dañar la electrónica.

---

**379. La memoria que contiene el programa de fábrica y NO se borra al quitar la batería es la:**
a) RAM
b) ROM
c) EEPROM
d) RAM stand-by

**Respuesta: b) ROM**

> 💡 La ROM se graba en fábrica y solo se lee: desconectar la batería no la altera.

---

**380. La RAM stand-by de la ECU:**
a) Contiene el programa permanente
b) Guarda las adaptaciones (ralentí, mezcla) y se borra si se corta la batería
c) No existe en autos modernos
d) Almacena el manual de taller

**Respuesta: b) Guarda las adaptaciones (ralentí, mezcla) y se borra si se corta la batería**

> 💡 La RAM stand-by guarda las autoadaptaciones (ralentí, mariposa cerrada, corrección lambda) y necesita batería permanente.

---

**381. ¿Por qué un auto anda con ralentí inestable un rato después de desconectar la batería?**
a) Porque se descargó la bomba
b) Porque la RAM stand-by perdió sus adaptaciones y debe volver a aprenderlas
c) Porque se borró la ROM
d) Porque falló la sonda lambda

**Respuesta: b) Porque la RAM stand-by perdió sus adaptaciones y debe volver a aprenderlas**

> 💡 Sin batería la RAM stand-by se pone a cero; la ECU vuelve a aprender el ralentí andando.

---

**382. Los códigos de avería se leen de la ECU a través de:**
a) La memoria ROM
b) La toma de diagnóstico (scanner) desde la EEPROM
c) Un voltímetro en la batería
d) El sensor de fase

**Respuesta: b) La toma de diagnóstico (scanner) desde la EEPROM**

> 💡 La EEPROM recibe las anomalías de la RAM stand-by y las entrega por la toma de diagnóstico al scanner.

---

**383. Las cuatro funciones básicas de la ECU son:**
a) Medir, cortar, encender, apagar
b) Entrada, procesamiento, almacenamiento y salida
c) Cargar, descargar, rectificar, regular
d) Abrir, cerrar, subir, bajar

**Respuesta: b) Entrada, procesamiento, almacenamiento y salida**

> 💡 Como toda computadora: entrada (sensores) → procesamiento → almacenamiento (memorias) → salida (actuadores).

---

**384. La señal analógica de un sensor se convierte, dentro de la ECU, en:**
a) Corriente alterna
b) Código binario digital (conversor A/D)
c) Alta tensión
d) Señal de frecuencia

**Respuesta: b) Código binario digital (conversor A/D)**

> 💡 El microprocesador no entiende voltajes variables: el conversor A/D los pasa a código binario.

---

**385. Los "drivers" o etapas finales de la ECU:**
a) Miden los sensores
b) Alimentan y comandan los actuadores
c) Almacenan el programa
d) Convierten la señal a digital

**Respuesta: b) Alimentan y comandan los actuadores**

> 💡 Los drivers son las etapas de potencia que alimentan inyectores, motor de ralentí, relé de bomba y electroválvulas.

---

## Bloque 38 — Sistemas Bosch y clasificación (repaso) (386–400)

**386. El primero en incorporar un solenoide eléctrico para controlar el combustible (1940) fue:**
a) Robert Bosch
b) Ottavio Fuscaldo
c) Stuart Hilborn
d) Carl Benz

**Respuesta: b) Ottavio Fuscaldo**

> 💡 Ottavio Fuscaldo (1940) fue el primero en controlar el combustible con un solenoide eléctrico.

---

**387. El primer sistema de inyección electrónica (EFI), antecesor de los modernos, fue:**
a) El Rochester Ramjet
b) El Bendix Electrojector
c) El K-Jetronic
d) El Motronic

**Respuesta: b) El Bendix Electrojector**

> 💡 El Bendix Electrojector (1957) fue el primer EFI; Bendix licenció sus patentes a Bosch en 1966.

---

**388. El sistema Le-Jetronic se caracteriza por ser:**
a) Digital y con sonda lambda
b) Analógico, multipunto, de inyección simultánea y sin memoria de averías
c) Monopunto con encendido integrado
d) Mecánico de flujo continuo

**Respuesta: b) Analógico, multipunto, de inyección simultánea y sin memoria de averías**

> 💡 LE-Jetronic: analógico, multipunto, simultáneo, solo combustible; sin memoria de averías ni testigo.

---

**389. ¿Qué diferencia principal tiene el Motronic respecto al Le-Jetronic?**
a) Usa un solo inyector
b) Es mecánico
c) Integra el sistema de encendido en la ECU y tiene sonda lambda
d) No tiene ECU

**Respuesta: c) Integra el sistema de encendido en la ECU y tiene sonda lambda**

> 💡 Motronic = LE + encendido dentro de la ECU + sonda lambda + memoria de adaptación y testigo.

---

**390. La diferencia clave entre Motronic y Mono-Motronic es:**
a) La cantidad de inyectores (multipunto vs. monopunto)
b) Que uno es analógico
c) El tipo de bomba
d) La marca del vehículo

**Respuesta: a) La cantidad de inyectores (multipunto vs. monopunto)**

> 💡 Motronic y Mono-Motronic funcionan casi igual: la diferencia es multipunto vs. un solo inyector.

---

**391. El K-Jetronic es un sistema de inyección:**
a) Electrónica secuencial
b) Mecánica continua (flujo constante)
c) Directa GDI
d) Monopunto digital

**Respuesta: b) Mecánica continua (flujo constante)**

> 💡 K-Jetronic es mecánica: dosificador y plato sonda, con inyección continua (no pulsada).

---

**392. Una ventaja de la inyección electrónica frente al carburador es:**
a) Más partes móviles
b) Dosificación precisa, menor consumo y menores emisiones
c) Menor costo de fabricación
d) No necesita sensores

**Respuesta: b) Dosificación precisa, menor consumo y menores emisiones**

> 💡 Dosifica con precisión, consume y contamina menos, arranca mejor en frío. Ojo: no es más barata que el carburador.

---

**393. El sistema Motronic reduce la contaminación reaprovechando los vapores de nafta mediante:**
a) El catalizador
b) La válvula de canister
c) El regulador de presión
d) El sensor MAP

**Respuesta: b) La válvula de canister**

> 💡 La válvula del canister deja que el vacío del múltiple succione los vapores del tanque para quemarlos.

---

**394. En la inyección simultánea, los inyectores:**
a) Se abren de a uno según el orden de encendido
b) Se abren todos a la vez
c) Se abren de a pares
d) Nunca se cierran

**Respuesta: b) Se abren todos a la vez**

> 💡 Simultánea: un solo circuito de la ECU abre todos los inyectores a la vez.

---

**395. La inyección agrupada (semisecuencial) inyecta:**
a) Todos los inyectores juntos
b) Por pares de cilindros (dos circuitos)
c) Uno por uno según el orden de encendido
d) De forma continua

**Respuesta: b) Por pares de cilindros (dos circuitos)**

> 💡 Agrupada: dos circuitos; en 4 cilindros, uno maneja 1-4 y el otro 2-3.

---

**396. La inyección secuencial se caracteriza por:**
a) Un pulso independiente por inyector, según el orden de encendido
b) Inyectar todos a la vez
c) No necesitar sensor de fase
d) Ser mecánica

**Respuesta: a) Un pulso independiente por inyector, según el orden de encendido**

> 💡 Secuencial: un circuito por inyector, que inyecta siguiendo el orden de encendido (ej. 1-3-4-2).

---

**397. ¿Qué sensor es imprescindible para la inyección secuencial?**
a) El sensor MAP
b) El sensor de fase (árbol de levas)
c) El sensor de detonación
d) El sensor de velocidad

**Respuesta: b) El sensor de fase (árbol de levas)**

> 💡 El CKP da la misma señal cada 360°; el sensor de fase dice cuál cilindro está en compresión.

---

**398. La inyección directa (GDI) inyecta el combustible:**
a) Detrás de la válvula de admisión
b) Directamente en la cámara de combustión
c) En el cuerpo de mariposa
d) En el filtro de aire

**Respuesta: b) Directamente en la cámara de combustión**

> 💡 Directa: el inyector está en la cámara de combustión (mayor presión, más sensores, otra bomba).

---

**399. La inyección indirecta (en puerto) inyecta:**
a) En la cámara de combustión
b) Detrás de la válvula de admisión (en el múltiple)
c) En el escape
d) En el tanque

**Respuesta: b) Detrás de la válvula de admisión (en el múltiple)**

> 💡 Indirecta o en puerto: el inyector rocía en el múltiple, detrás de la válvula de admisión.

---

**400. ¿Cuál de estas inyecciones es la más eficiente y de menores emisiones?**
a) Simultánea
b) Agrupada
c) Secuencial
d) Todas por igual

**Respuesta: c) Secuencial**

> 💡 La secuencial inyecta cada cilindro en su momento justo: más rendimiento, economía y menos emisiones.

---

## Bloque 39 — Sistema de combustible (repaso) (401–412)

**401. La bomba de combustible tipo rodillos se refrigera y lubrica con:**
a) Aceite del motor
b) El propio combustible que la baña
c) Aire
d) Líquido refrigerante

**Respuesta: b) El propio combustible que la baña**

> 💡 Motor y bomba están en la misma carcasa, bañados por la nafta que los refrigera y lubrica.

---

**402. La válvula de alivio de la bomba abre aproximadamente a:**
a) 0,5 bar
b) 6–7 bar (64–85 psi)
c) 45 bar
d) 100 bar

**Respuesta: b) 6–7 bar (64–85 psi)**

> 💡 Si no hay retorno (regulador, retorno o filtro obstruido), la presión sube hasta 6–7 bar y la válvula de alivio descarga. (Ojo: 6–7 bar son en realidad ~87–102 psi; el manual dice 64–85.)

---

**403. La válvula antirretorno de la bomba sirve para:**
a) Aumentar el caudal
b) Mantener presión residual y facilitar el arranque en caliente
c) Filtrar el combustible
d) Regular la mezcla

**Respuesta: b) Mantener presión residual y facilitar el arranque en caliente**

> 💡 Al parar el motor, la antirretorno conserva presión residual: evita burbujas de vapor y el arranque es inmediato.

---

**404. El filtro de combustible tiene un tamaño de poro de:**
a) 1 micra
b) 10 micras
c) 100 micras
d) 1 mm

**Respuesta: b) 10 micras**

> 💡 Papel con estructura textil, poro de 10 micras y ~2 m² de superficie; cambio cada ~50.000 km.

---

**405. Los inyectores en la rampa están conectados eléctricamente:**
a) En serie
b) En paralelo
c) Uno por circuito independiente siempre
d) A masa directa

**Respuesta: b) En paralelo**

> 💡 Los 4 inyectores cuelgan de un riel eléctrico común (en paralelo) con un solo conector de alimentación.

---

**406. El inyector es un dispositivo electromecánico:**
a) Normalmente abierto
b) Normalmente cerrado, controlado por el tiempo de apertura de la ECU
c) Que regula la presión
d) Que genera alta tensión

**Respuesta: b) Normalmente cerrado, controlado por el tiempo de apertura de la ECU**

> 💡 Es una electroválvula normalmente cerrada: el caudal depende solo del tiempo que la ECU la mantiene energizada.

---

**407. El regulador de presión mantiene constante:**
a) La temperatura del combustible
b) La diferencia de presión entre entrada y salida de los inyectores
c) El caudal de la bomba
d) La tensión de batería

**Respuesta: b) La diferencia de presión entre entrada y salida de los inyectores**

> 💡 Con diferencia de presión constante en el inyector, la cantidad inyectada depende solo del tiempo de apertura.

---

**408. El tubo de vacío del regulador de presión sirve para:**
a) Enfriar el combustible
b) Compensar la depresión del múltiple (en ralentí baja la presión ~0,5 bar)
c) Filtrar los vapores
d) Medir la temperatura

**Respuesta: b) Compensar la depresión del múltiple (en ralentí baja la presión ~0,5 bar)**

> 💡 Con 0,5 bar de vacío en ralentí, el vacío ayuda a abrir el retorno y la presión baja 0,5 bar.

---

**409. El interruptor de inercia:**
a) Regula el ralentí
b) Ante un choque, corta la bomba de combustible abriendo un circuito N.C.
c) Controla la mezcla
d) Enciende el electroventilador

**Respuesta: b) Ante un choque, corta la bomba de combustible abriendo un circuito N.C.**

> 💡 Una esfera de acero sujeta por un imán se suelta en el choque y abre el circuito N.C. de la bomba.

---

**410. Al dar contacto, el relé de bomba de combustible:**
a) Queda apagado hasta que arranca el motor
b) Se energiza unos segundos para presurizar la línea
c) Corta el encendido
d) Regula la presión

**Respuesta: b) Se energiza unos segundos para presurizar la línea**

> 💡 Al dar contacto, la ECU energiza el relé unos segundos para presurizar; después lo mantiene solo con el motor girando.

---

**411. El canister contiene:**
a) Combustible de reserva
b) Carbón activo que retiene los vapores del tanque
c) Aceite lubricante
d) Líquido refrigerante

**Respuesta: b) Carbón activo que retiene los vapores del tanque**

> 💡 El canister es carbón activo: retiene los vapores del tanque hasta que la ECU decide quemarlos.

---

**412. Los vapores retenidos en el canister se queman cuando:**
a) La ECU abre su electroválvula y el vacío del múltiple los succiona
b) El motor está apagado
c) Se llena el tanque
d) Baja la temperatura

**Respuesta: a) La ECU abre su electroválvula y el vacío del múltiple los succiona**

> 💡 La electroválvula del canister es N.C.: cuando la ECU la abre, el vacío del múltiple succiona los vapores.

---

## Bloque 40 — Sensores de inyección (repaso) (413–442)

**413. El sensor de temperatura de motor (ECT) es del tipo:**
a) Potenciómetro
b) NTC (coeficiente negativo)
c) Piezoeléctrico
d) Óptico

**Respuesta: b) NTC (coeficiente negativo)**

> 💡 ECT = NTC: con el motor frío tiene mucha resistencia, en caliente poca.

---

**414. El sensor ECT debe ubicarse:**
a) Después del termostato
b) Antes del termostato, en contacto con el refrigerante
c) En el escape
d) En el filtro de aire

**Respuesta: b) Antes del termostato, en contacto con el refrigerante**

> 💡 Debe estar en contacto con el refrigerante del lado del motor (antes del termostato) para medir la temperatura real del bloque.

---

**415. El sensor de temperatura de aire (IAT) corrige la inyección según:**
a) La velocidad del vehículo
b) La densidad del aire (oxígeno disponible)
c) La presión de aceite
d) La carga de la batería

**Respuesta: b) La densidad del aire (oxígeno disponible)**

> 💡 El aire frío es más denso (más oxígeno por litro): la ECU corrige el tiempo de inyección con el IAT.

---

**416. El TPS funciona mediante:**
a) Un termistor
b) Un potenciómetro accionado por el eje de la mariposa
c) Un imán permanente
d) Un chip de silicio

**Respuesta: b) Un potenciómetro accionado por el eje de la mariposa**

> 💡 El TPS es un potenciómetro solidario al eje de la mariposa: el cursor se mueve con el ángulo.

---

**417. En posición de reposo, la señal del TPS es de:**
a) 12 V
b) Unas décimas de voltio
c) 5 V exactos
d) 0 V siempre

**Respuesta: b) Unas décimas de voltio**

> 💡 Con la mariposa cerrada da décimas de voltio; a plena apertura, casi la referencia de 5 V.

---

**418. La función "cut-off" (corte de inyección) actúa:**
a) En plena aceleración
b) En desaceleración con la mariposa cerrada
c) Durante el arranque
d) Con el motor frío

**Respuesta: b) En desaceleración con la mariposa cerrada**

> 💡 Cut-off: con mariposa cerrada y RPM altas (desaceleración), la ECU corta la inyección.

---

**419. El sensor MAP mide:**
a) La temperatura del aire
b) La presión absoluta del múltiple (carga del motor)
c) Las revoluciones del motor
d) La posición de la mariposa

**Respuesta: b) La presión absoluta del múltiple (carga del motor)**

> 💡 El MAP mide la presión absoluta en el múltiple, que refleja la carga del motor.

---

**420. La señal del MAP entrega su voltaje MÁS ALTO cuando:**
a) El motor está en desaceleración
b) La presión del múltiple es alta (contacto y motor apagado / acelerón)
c) El motor está frío
d) La mariposa está cerrada

**Respuesta: b) La presión del múltiple es alta (contacto y motor apagado / acelerón)**

> 💡 Presión alta = voltaje alto: con contacto sin arrancar (presión atmosférica) o a fondo.

---

**421. El sensor MAF de hilo caliente funciona porque:**
a) Un imán gira con el aire
b) Una resistencia caliente (~200 °C) se enfría con el aire aspirado
c) Mide la presión del múltiple
d) Cuenta los dientes de una rueda

**Respuesta: b) Una resistencia caliente (~200 °C) se enfría con el aire aspirado**

> 💡 Una resistencia a ~200 °C se enfría con el aire aspirado; la corriente para mantenerla caliente indica la masa de aire.

---

**422. En un MAF de película caliente, a mayor cantidad de aire:**
a) Menor voltaje
b) Mayor enfriamiento y mayor voltaje
c) La señal no cambia
d) Se corta la inyección

**Respuesta: b) Mayor enfriamiento y mayor voltaje**

> 💡 Más aire → más enfriamiento → más corriente para recalentarla → más voltaje de señal.

---

**423. El sensor VAF (caudalímetro) mide el aire mediante:**
a) Una aleta-sonda que mueve un potenciómetro contra un resorte
b) Un hilo caliente
c) Un chip de presión
d) Un fotodiodo

**Respuesta: a) Una aleta-sonda que mueve un potenciómetro contra un resorte**

> 💡 El VAF tiene una aleta que el aire empuja contra un resorte y mueve un potenciómetro (respuesta logarítmica).

---

**424. El TPS Bosch de doble pista se usa en vehículos que:**
a) Tienen sensor MAP
b) NO cuentan con sensor MAP
c) No tienen ECU
d) Son monopunto

**Respuesta: b) NO cuentan con sensor MAP**

> 💡 El TPS Bosch de doble pista (0–24° y ~22–90°) da la carga con precisión; esos autos no usan MAP.

---

**425. El objetivo de la sonda lambda es mantener la relación estequiométrica de:**
a) 10 : 1
b) 14,7 : 1 (lambda = 1)
c) 20 : 1
d) 1 : 1

**Respuesta: b) 14,7 : 1 (lambda = 1)**

> 💡 Lambda 1 = 14,7 kg de aire por kg de nafta: la mezcla justa para que el catalizador convierta los tres gases.

---

**426. La sonda lambda de circonio genera tensión a partir de:**
a) La temperatura del motor
b) La diferencia de oxígeno entre el escape y el aire exterior
c) La presión del múltiple
d) Las revoluciones

**Respuesta: b) La diferencia de oxígeno entre el escape y el aire exterior**

> 💡 El circonio compara el O₂ del escape con el del aire exterior y genera tensión según la diferencia.

---

**427. Mucho oxígeno en el escape significa mezcla ____ y la sonda da voltaje ____:**
a) rica / alto
b) pobre / bajo
c) rica / bajo
d) pobre / alto

**Respuesta: b) pobre / bajo**

> 💡 Sobra oxígeno = mezcla pobre = voltaje bajo (~0,1 V). La ECU enriquece.

---

**428. Poco oxígeno en el escape significa mezcla ____ y la sonda da voltaje ____:**
a) rica / alto
b) pobre / bajo
c) rica / bajo
d) pobre / alto

**Respuesta: a) rica / alto**

> 💡 Falta oxígeno = mezcla rica = voltaje alto (~0,9 V). La ECU empobrece.

---

**429. La sonda lambda funciona de forma fiable a partir de:**
a) 0 °C
b) ~350 °C (por eso se usa calefaccionada)
c) 90 °C
d) 1.000 °C

**Respuesta: b) ~350 °C (por eso se usa calefaccionada)**

> 💡 Debajo de ~350 °C la sonda no es confiable; por eso se calefacciona (HEGO).

---

**430. Una sonda lambda en buen estado tiene una señal que:**
a) Se mantiene fija
b) Oscila constantemente (30 a 40 veces por minuto)
c) Sube linealmente
d) Es siempre 0 V

**Respuesta: b) Oscila constantemente (30 a 40 veces por minuto)**

> 💡 La ECU corrige todo el tiempo alrededor de lambda 1: una sonda sana oscila; si está quieta, está muerta. ("30 a 40 veces por minuto" es el dato del manual; en la práctica conmuta varias veces por segundo.)

---

**431. En OBD II, la sonda POST-catalizador sirve para:**
a) Calcular la mezcla
b) Verificar que el catalizador esté funcionando
c) Medir la presión
d) Regular el ralentí

**Respuesta: b) Verificar que el catalizador esté funcionando**

> 💡 La pre-catalizador regula la mezcla; la post-catalizador vigila que el catalizador esté trabajando.

---

**432. El potenciómetro de mezcla CO (autos sin sonda) tiene una referencia de fábrica de 2,5 V; por encima de ese valor la mezcla es:**
a) Pobre
b) Rica
c) Estequiométrica
d) Indiferente

**Respuesta: b) Rica**

> 💡 Referencia de fábrica 2,5 V: por encima, rica; por debajo, pobre. Se ajusta con voltímetro o analizador de gases.

---

**433. El sensor de cigüeñal (CKP) le informa a la ECU principalmente:**
a) La temperatura
b) Las revoluciones (RPM) y el PMS
c) La presión de combustible
d) La posición de la mariposa

**Respuesta: b) Las revoluciones (RPM) y el PMS**

> 💡 El CKP da las RPM y la referencia de PMS: sin él, no hay inyección ni chispa.

---

**434. La rueda fónica del CKP inductivo típico tiene:**
a) 60 dientes completos
b) 58 dientes + 2 suprimidos (el hueco marca el PMS)
c) 4 dientes
d) 12 dientes

**Respuesta: b) 58 dientes + 2 suprimidos (el hueco marca el PMS)**

> 💡 58 dientes + 2 faltantes (60-2): el hueco es la marca de referencia del PMS.

---

**435. El CKP inductivo genera una señal:**
a) Cuadrada de amplitud fija
b) Alterna cuya amplitud crece con las RPM
c) Constante de 5 V
d) De presión

**Respuesta: b) Alterna cuya amplitud crece con las RPM**

> 💡 Es un generador inductivo: más velocidad de los dientes, más amplitud y más frecuencia.

---

**436. La distancia (entrehierro) entre el CKP inductivo y los dientes debe ser:**
a) 1 a 1,5 mm
b) 5 a 10 mm
c) 0,5 cm
d) 2 cm

**Respuesta: a) 1 a 1,5 mm**

> 💡 Entrehierro de 1 a 1,5 mm; con más distancia, la señal se debilita.

---

**437. El sensor de fase (CMP / árbol de levas) sirve para:**
a) Medir las RPM
b) Identificar qué cilindro está en compresión
c) Medir el aire
d) Regular la presión

**Respuesta: b) Identificar qué cilindro está en compresión**

> 💡 El sensor de fase da un pulso cada dos vueltas de cigüeñal (cilindro 1 a 58° antes del PMS).

---

**438. El sensor de PMS óptico funciona con:**
a) Un imán y una bobina
b) Un LED infrarrojo y un fotodiodo, con un disco ranurado
c) Un termistor
d) Un piezoeléctrico

**Respuesta: b) Un LED infrarrojo y un fotodiodo, con un disco ranurado**

> 💡 El óptico usa un LED infrarrojo y un fotodiodo enfrentados, con un disco ranurado en el medio.

---

**439. Un sensor de PMS efecto Hall se conecta normalmente con:**
a) 2 cables
b) 3 cables (alimentación, masa y señal)
c) 4 cables
d) 1 cable

**Respuesta: b) 3 cables (alimentación, masa y señal)**

> 💡 El Hall necesita alimentación (5 o 12 V), masa y señal: 3 cables, y entrega una onda cuadrada.

---

**440. El sensor de detonación (knock) es un sensor de:**
a) Temperatura
b) Vibraciones (piezoeléctrico), detecta el picado
c) Presión
d) Posición

**Respuesta: b) Vibraciones (piezoeléctrico), detecta el picado**

> 💡 El sensor de detonación es piezoeléctrico: la vibración del picado genera tensión, y la ECU atrasa el encendido.

---

**441. El sensor de velocidad (VSS) tipo Hall entrega:**
a) Una señal analógica proporcional
b) Pulsos rectangulares cuya frecuencia crece con la velocidad
c) Un voltaje fijo
d) Alta tensión

**Respuesta: b) Pulsos rectangulares cuya frecuencia crece con la velocidad**

> 💡 El VSS Hall da pulsos rectangulares: más velocidad, más frecuencia; detenido, sin pulsos.

---

**442. El sensor de pedal de acelerador (APP) en un acelerador electrónico suele tener:**
a) Un solo potenciómetro
b) Dos potenciómetros (para prueba de plausibilidad)
c) Un termistor
d) Un imán

**Respuesta: b) Dos potenciómetros (para prueba de plausibilidad)**

> 💡 Dos potenciómetros que se chequean entre sí: si no coinciden, la ECU entra en modo seguro.

---

## Bloque 41 — Actuadores y ralentí (repaso) (443–444)

**443. La válvula de ralentí de 3 pines tiene:**
a) Los tres pines a masa
b) El pin central a 12 V y los otros dos reciben pulsos de masa
c) Los tres a 5 V
d) Uno solo activo

**Respuesta: b) El pin central a 12 V y los otros dos reciben pulsos de masa**

> 💡 Pin central a 12 V; la ECU da masa a un lado o al otro para girar el motor en un sentido u otro.

---

**444. El actuador de mariposa (ETC) se controla mediante una señal:**
a) Analógica constante
b) PWM (frecuencia fija, varía el tiempo ON)
c) De alta tensión
d) Senoidal

**Respuesta: b) PWM (frecuencia fija, varía el tiempo ON)**

> 💡 PWM: la frecuencia es fija y lo que varía es el tiempo ON dentro del período.

---

## Bloque 42 — Emisiones: catalizador y EGR (repaso) (445–446)

**445. La válvula EGR reduce la contaminación porque:**
a) Aumenta la temperatura de combustión
b) Recircula gases de escape y baja la temperatura de combustión, reduciendo los NOx
c) Filtra el combustible
d) Enriquece la mezcla

**Respuesta: b) Recircula gases de escape y baja la temperatura de combustión, reduciendo los NOx**

> 💡 El gas de escape ya quemado absorbe calor: baja la temperatura de la llama y se forman menos NOx.

---

**446. Los metales nobles del catalizador de 3 vías son:**
a) Cobre y aluminio
b) Platino, paladio y rodio (Pt oxida CO/HC, Rh reduce NOx)
c) Hierro y níquel
d) Plomo y estaño

**Respuesta: b) Platino, paladio y rodio (Pt oxida CO/HC, Rh reduce NOx)**

> 💡 Pt, Pd y Rh sobre alúmina: el platino oxida CO y HC y el rodio reduce los NOx.

---

## Bloque 43 — Señales, instrumentos y ECU (súper quiz 2) (447–459)

**447. ¿Cuál de estas NO es una de las 4 virtudes que el manual pide a un sensor?**
a) Constancia
b) Exactitud
c) Linealidad
d) Amplificación

**Respuesta: d) Amplificación**

> 💡 Las 4 virtudes son constancia, exactitud, rango de trabajo y linealidad. Amplificar no es tarea del sensor.

---

**448. Verdadero o falso: un sensor de tipo digital tiene un rango de trabajo de solo dos valores posibles (ON-OFF).**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 El digital tiene dos estados; el analógico, un rango proporcional. Fuera de rango, la ECU lo toma como anomalía.

---

**449. Una onda cuadrada que se repite 10 veces por segundo tiene una frecuencia de:**
a) 1 Hz
b) 10 Hz
c) 100 Hz
d) 10 ms

**Respuesta: b) 10 Hz**

> 💡 Frecuencia = ciclos por segundo, en Hz. Es el ejemplo textual del manual.

---

**450. Una onda cuadrada que va de 0 V a 12 V tiene una amplitud de:**
a) 6 V
b) 0 V
c) 12 V
d) 24 V

**Respuesta: c) 12 V**

> 💡 Amplitud = cambio de voltaje entre la parte de abajo y la de arriba de la onda: 12 − 0 = 12 V.

---

**451. Una señal de 100 Hz que está 2,5 ms en ON, ¿qué ciclo de trabajo tiene?**
a) 2,5 %
b) 40 %
c) 75 %
d) 25 %

**Respuesta: d) 25 %**

> 💡 Período = 1/100 Hz = 10 ms. Ciclo de trabajo = 2,5 ms / 10 ms = 25 %.

---

**452. En la prueba de continuidad, ¿con qué resistencia empieza a sonar el buzzer del multímetro?**
a) Menos de ~30 Ω
b) Menos de ~1 kΩ
c) Más de 30 Ω
d) Solo con 0 Ω exactos

**Respuesta: a) Menos de ~30 Ω**

> 💡 Suena por debajo de ~30 Ω. Un conductor sano, además, marca 000 en el display.

---

**453. Al probar un diodo en polaridad inversa, el display del multímetro digital muestra:**
a) 000
b) Unos 600 mV
c) “1” (bloqueado)
d) 12,5 V

**Respuesta: c) “1” (bloqueado)**

> 💡 En inversa el diodo bloquea y el display marca '1'. En directa muestra unos mV de caída (corriente de prueba de 1 mA).

---

**454. Verdadero o falso: para medir corriente, el multímetro se conecta en paralelo con el consumidor.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: el amperímetro va en serie (toda la corriente pasa por el instrumento). En paralelo va el voltímetro.

---

**455. Según el manual, ¿qué rango de frecuencias se encuentra en los vehículos con inyección electrónica?**
a) 50 a 60 Hz
b) 1 a 10 kHz
c) 6 Hz a ~6.000 Hz
d) 0,1 a 1 Hz

**Respuesta: c) 6 Hz a ~6.000 Hz**

> 💡 Por eso para medir frecuencia se usa un rango bajo del multímetro: entre ~6 Hz y ~6.000 Hz.

---

**456. La parte volátil de la RAM de la ECU se borra cuando:**
a) Se pone la llave en STOP (se saca el contacto)
b) Se desconecta el scanner
c) El motor supera las 6.000 RPM
d) Nunca se borra

**Respuesta: a) Se pone la llave en STOP (se saca el contacto)**

> 💡 La RAM volátil se activa en IGN y se borra en STOP. La stand-by, en cambio, sobrevive mientras haya batería.

---

**457. Verdadero o falso: para borrar las averías confirmadas de la EEPROM, en la mayoría de los casos hace falta un scanner.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Verdadero: la EEPROM transmite las anomalías por la toma de diagnóstico y, casi siempre, se borran con scanner.

---

**458. Según el manual, la señal del TPS puede usarla, además de la ECU de motor:**
a) Solo el tablero
b) La ECU de frenos ABS y la de caja automática
c) El alternador
d) La sonda lambda

**Respuesta: b) La ECU de frenos ABS y la de caja automática**

> 💡 Por la salida, la ECU se comunica con otras computadoras (ABS, caja automática, suspensión). El TPS informa a varias.

---

**459. El temporizador del inyector de arranque en frío (años 80) funcionaba con:**
a) Un potenciómetro de carbón
b) Una cinta bimetálica con resistencia calefactora
c) Un sensor Hall
d) Un chip piezorresistivo

**Respuesta: b) Una cinta bimetálica con resistencia calefactora**

> 💡 Termo-contacto temporizado: con el motor frío da masa al inyector; la resistencia calienta el bimetal y abre el contacto.

---

## Bloque 44 — Sistemas Bosch y clasificación (súper quiz 2) (460–468)

**460. En el esquema del LE-Jetronic, la posición de la mariposa se informa con:**
a) Un potenciómetro de doble pista
b) Un sensor MAP
c) Un interruptor de mariposa
d) Un sensor Hall

**Respuesta: c) Un interruptor de mariposa**

> 💡 El LE usa un interruptor de mariposa (contactos de ralentí y plena carga); el Motronic ya usa potenciómetro.

---

**461. En el Mono-Motronic, el cuerpo de mariposa integra:**
a) Regulador de presión, inyector, sensor de temperatura de aire y actuador de ralentí
b) Solo el inyector
c) La bomba y el filtro de combustible
d) La ECU y la bobina

**Respuesta: a) Regulador de presión, inyector, sensor de temperatura de aire y actuador de ralentí**

> 💡 Lo que en el Motronic está repartido por el motor, en el monopunto queda en el cuerpo de mariposa, parecido a un carburador.

---

**462. Verdadero o falso: el LE-Jetronic enciende un testigo de avería en el tablero cuando falla un sensor.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: el LE es analógico; no tiene memoria de averías ni indicación en el tablero. Eso llega con el Motronic.

---

**463. En un Motronic de motor sin distribuidor, el momento de la chispa se controla con:**
a) El sensor MAP
b) El sensor de temperatura
c) La sonda lambda
d) Un sensor de revoluciones en el volante del motor

**Respuesta: d) Un sensor de revoluciones en el volante del motor**

> 💡 El Motronic integra el encendido: el sensor de revoluciones en el volante le da la posición para disparar la chispa.

---

**464. ¿Por qué la inyección simultánea es la menos efectiva?**
a) Porque usa inyectores de baja impedancia
b) Porque la nafta espera a que abra la válvula de admisión y se condensa en las lumbreras
c) Porque inyecta en el escape
d) Porque no usa ECU

**Respuesta: b) Porque la nafta espera a que abra la válvula de admisión y se condensa en las lumbreras**

> 💡 Todos inyectan a la vez, pero cada cilindro está en un tiempo distinto: la nafta queda esperando y se condensa.

---

**465. En la inyección simultánea, ¿cómo se alimentan y comandan los inyectores?**
a) 12 V desde el relé de inyección (o un fusible) y la ECU los pulsa por un solo circuito
b) 5 V desde la ECU, un circuito por inyector
c) Directo de la batería, sin ECU
d) Con alta tensión de la bobina

**Respuesta: a) 12 V desde el relé de inyección (o un fusible) y la ECU los pulsa por un solo circuito**

> 💡 Positivo común desde el relé o un fusible; la ECU les da masa a todos juntos por un único circuito.

---

**466. En la inyección agrupada de un motor de 4 cilindros, el primer circuito de la ECU controla los inyectores de los cilindros:**
a) 1 y 2
b) 1 y 3
c) 1 y 4
d) 2 y 4

**Respuesta: c) 1 y 4**

> 💡 Circuito 1 → cilindros 1 y 4; circuito 2 → cilindros 2 y 3. Son los pares que llegan juntos al PMS.

---

**467. Verdadero o falso: sin sensor de fase, la ECU puede igual hacer inyección secuencial porque el CKP marca el PMS.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: el CKP marca el PMS cada 360° y no distingue compresión de escape. Para la secuencial hace falta el sensor de fase.

---

**468. Además del lugar donde inyecta, la inyección directa se diferencia de la indirecta en:**
a) Que no usa ECU
b) Que usa carburador
c) Mayor presión de combustible, más sensores y otro tipo de bomba
d) Que inyecta en el múltiple

**Respuesta: c) Mayor presión de combustible, más sensores y otro tipo de bomba**

> 💡 Según el manual: cambian la presión de combustible, algunos sensores y el tipo de bomba.

---

## Bloque 45 — Sistema de combustible (súper quiz 2) (469–480)

**469. La ECU activa el relé de bomba, con el motor en marcha, después de recibir la señal del:**
a) Sensor de posición de cigüeñal (CKP)
b) Sensor de temperatura
c) Sensor de detonación
d) Interruptor de freno

**Respuesta: a) Sensor de posición de cigüeñal (CKP)**

> 💡 Si no hay señal de giro, no hay bomba: es una seguridad para no tirar nafta con el motor parado.

---

**470. ¿Qué hace que la válvula de alivio de la bomba se abra (6–7 bar)?**
a) Que el tanque esté lleno
b) Que el motor esté en ralentí
c) Que la batería tenga más de 14 V
d) Que no haya retorno: regulador, retorno o filtro obstruidos

**Respuesta: d) Que no haya retorno: regulador, retorno o filtro obstruidos**

> 💡 Sin retorno, la presión sube hasta 6–7 bar (64–85 psi) y la válvula descarga la nafta al depósito.

---

**471. Verdadero o falso: la válvula antirretorno de la bomba evita la formación de burbujas de vapor en caliente al conservar presión residual.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Verdadero: al parar, un resorte la cierra y queda presión en el circuito, así se evita el bloqueo por vapor y el arranque es inmediato.

---

**472. Con el motor en ralentí (vacío de 0,5 bar en el múltiple), la presión de trabajo del combustible:**
a) Sube 0,5 bar
b) Baja 0,5 bar
c) Se mantiene igual
d) Cae a cero

**Respuesta: b) Baja 0,5 bar**

> 💡 El vacío en la cámara del resorte ayuda a abrir el retorno: la presión baja 0,5 bar, igual que la presión del múltiple.

---

**473. ¿Para qué tiene el regulador de presión un tubo de vacío conectado al múltiple?**
a) Para enfriar la nafta
b) Para medir la carga del motor
c) Para que la cantidad inyectada dependa solo del tiempo de inyección
d) Para purgar el canister

**Respuesta: c) Para que la cantidad inyectada dependa solo del tiempo de inyección**

> 💡 Compensa la presión del múltiple: la diferencia de presión en el inyector queda constante y la ECU dosifica solo con los ms.

---

**474. En el regulador, cuando la fuerza de la nafta sobre la membrana iguala a la del resorte tarado:**
a) La bomba se apaga
b) El inyector se cierra
c) Se abre el canister
d) El elemento de cierre se corre y la nafta retorna al tanque

**Respuesta: d) El elemento de cierre se corre y la nafta retorna al tanque**

> 💡 Ahí queda fijada la presión del sistema: si sobra nafta, vuelve más al tanque; si falta, vuelve menos.

---

**475. El filtro de combustible tiene una superficie efectiva de ~2 m² y se cambia normalmente cada:**
a) 5.000 km
b) 50.000 km
c) 200.000 km
d) Nunca

**Respuesta: b) 50.000 km**

> 💡 Cada ~50.000 km, para que no se obture y caiga el caudal. Poro de 10 micras.

---

**476. Verdadero o falso: el filtro de combustible se puede montar en cualquier sentido.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: hay que respetar la flecha del sentido de circulación del combustible.

---

**477. En un inyector multipunto, la nafta entra:**
a) Por la parte superior, pasando por un filtro fino
b) Por el costado del conector
c) Por la punta, desde el múltiple
d) Desde la bomba directamente, sin riel

**Respuesta: a) Por la parte superior, pasando por un filtro fino**

> 💡 Del riel entra por arriba y pasa por un filtro fino antes de la aguja. Los sellos de goma aseguran la hermeticidad.

---

**478. El elemento que detecta el choque en el interruptor de inercia es:**
a) Un resorte con pesa
b) Un sensor piezoeléctrico
c) Una esfera de acero retenida por un imán permanente
d) Un péndulo de mercurio

**Respuesta: c) Una esfera de acero retenida por un imán permanente**

> 💡 En el impacto, la esfera se suelta del imán y abre el contacto N.C. Se rearma apretando el pulsador.

---

**479. En reposo (sin señal de la ECU), la electroválvula del canister está:**
a) Normalmente abierta
b) Normalmente cerrada
c) Abierta a medias
d) Desconectada del múltiple

**Respuesta: b) Normalmente cerrada**

> 💡 Es N.C.: los vapores se acumulan en el carbón activo hasta que la ECU la abre y el vacío los succiona.

---

**480. Verdadero o falso: la ECU comanda el relé de bomba con una salida de 12 V negativo (da masa a la bobina del relé).**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Verdadero: el manual lo describe como una salida de '12 voltios negativo', o sea, la ECU cierra el circuito a masa.

---

## Bloque 46 — Actuadores y ralentí (súper quiz 2) (481–491)

**481. El caudal de aire mínimo Q₀ del ralentí:**
a) Lo regula el motor paso a paso
b) Lo calcula la sonda lambda
c) Pasa por el canister
d) Se filtra por debajo de la mariposa cerrada y viene fijado con un tapón de inviolabilidad

**Respuesta: d) Se filtra por debajo de la mariposa cerrada y viene fijado con un tapón de inviolabilidad**

> 💡 Q₀ es fijo, de fábrica. Lo que la ECU regula es el aire extra Q por el bypass (motor frío, A/C, dirección).

---

**482. El motor paso a paso de ralentí tiene en el estator:**
a) Un bobinado
b) Dos bobinados
c) Cuatro imanes y ninguna bobina
d) Un potenciómetro

**Respuesta: b) Dos bobinados**

> 💡 Dos bobinados en el estator y un rotor con pares de polos de imanes permanentes.

---

**483. En el motor paso a paso, ¿qué transforma el giro en movimiento lineal del obturador?**
a) Un mecanismo tornillo / tuerca (tornillo hembra)
b) Una biela
c) Un piñón y cremallera de dirección
d) Un resorte

**Respuesta: a) Un mecanismo tornillo / tuerca (tornillo hembra)**

> 💡 El reductor tornillo / tornillo hembra convierte la rotación en avance lineal: ~0,04 mm por paso.

---

**484. Si el motor paso a paso avanza 50 pasos, el obturador se desplaza aproximadamente:**
a) 0,2 mm
b) 8 mm
c) 2 mm
d) 20 mm

**Respuesta: c) 2 mm**

> 💡 50 pasos × 0,04 mm/paso = 2 mm. El recorrido total es de ~200 pasos = 8 mm.

---

**485. Con el obturador en su máxima retracción (~200 pasos = 8 mm), el motor recibe:**
a) El caudal mínimo Q₀
b) Cero aire
c) Aire solo por el canister
d) El caudal máximo de aire del bypass (Q₂, o Q₃ con caja automática)

**Respuesta: d) El caudal máximo de aire del bypass (Q₂, o Q₃ con caja automática)**

> 💡 Máxima retracción = bypass totalmente abierto = caudal máximo garantizado.

---

**486. Para regular el ralentí con el motor paso a paso, la ECU usa principalmente:**
a) La velocidad del vehículo y la presión de aceite
b) La velocidad angular del motor (RPM) y la temperatura del refrigerante
c) Solo la sonda lambda
d) La tensión de batería

**Respuesta: b) La velocidad angular del motor (RPM) y la temperatura del refrigerante**

> 💡 RPM y temperatura del refrigerante: con el motor frío o con cargas, abre más el bypass.

---

**487. Verdadero o falso: la válvula de aire adicional se controla con pulsos de masa de frecuencia variable.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Verdadero: la ECU calcula la frecuencia y el vástago se corre. Sin corriente, un resorte la deja en su posición de diseño.

---

**488. ¿Cómo logra el regulador de ralentí de corriente continua del monopunto Bosch abrir y cerrar la mariposa?**
a) Con dos motores distintos
b) Con un resorte y vacío
c) La ECU invierte la polaridad del motor
d) Con un solenoide de frecuencia variable

**Respuesta: c) La ECU invierte la polaridad del motor**

> 💡 Un conmutador interno de la ECU invierte la polaridad (terminales 32 y 34): gira en sentido horario o inverso.

---

**489. El regulador de ralentí de CC del monopunto puede abrir la mariposa hasta aproximadamente:**
a) 5°
b) 18°
c) 45°
d) 90°

**Respuesta: b) 18°**

> 💡 Tornillo sin fin + rueda helicoidal + vástago sobre la leva: apertura máxima de cerca de 18°.

---

**490. En el monopunto, el microinterruptor de ralentí cerrado (pedal suelto) activa:**
a) El cut-off en desaceleración y la regulación del ralentí
b) La bomba de combustible
c) El electroventilador
d) La purga del canister

**Respuesta: a) El cut-off en desaceleración y la regulación del ralentí**

> 💡 Pone a masa el terminal 8 de la ECU: doble función de cut-off y de regulación automática del mínimo.

---

**491. Verdadero o falso: cuando se conecta el aire acondicionado o la dirección hidráulica, la ECU cierra el bypass de ralentí.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: con más carga hace falta más aire (Q₀ + Q) para que las RPM no caigan, así que la ECU abre más el bypass.

---

## Bloque 47 — Emisiones: catalizador y EGR (súper quiz 2) (492–503)

**492. Para que el catalizador empiece a oxidar y reducir, los gases de escape deben superar:**
a) 50–100 °C
b) 250–300 °C
c) 1.000 °C
d) 1.400 °C

**Respuesta: b) 250–300 °C**

> 💡 Por debajo de 250–300 °C no hay conversión: por eso contamina más en los primeros minutos en frío.

---

**493. ¿En qué banda de temperatura se lo diseña para mantener alta eficiencia durante mucho tiempo?**
a) 100–300 °C
b) 1.000–1.400 °C
c) 400–800 °C
d) Cualquier temperatura

**Respuesta: c) 400–800 °C**

> 💡 400–800 °C. Arriba de 800–1000 °C sostenidos envejece; cerca de 1400 °C se derrite.

---

**494. ¿Qué puede llevar al catalizador a ~1.400 °C y derretir su sustrato?**
a) Usar nafta sin plomo
b) Andar en ralentí
c) Un sensor de temperatura flojo
d) Una contraexplosión o falla de encendido: nafta cruda que se quema adentro

**Respuesta: d) Una contraexplosión o falla de encendido: nafta cruda que se quema adentro**

> 💡 Si un cilindro falla, la nafta sin quemar llega al catalizador y se quema ahí: sube la temperatura hasta fundirlo.

---

**495. La capa de alúmina (Al₂O₃) sobre el panal del catalizador sirve para:**
a) Aislar el ruido
b) Aumentar la superficie activa donde se apoyan los metales nobles
c) Retener el plomo
d) Medir el oxígeno

**Respuesta: b) Aumentar la superficie activa donde se apoyan los metales nobles**

> 💡 Es una capa porosa e irregular que multiplica la superficie expuesta a los gases.

---

**496. En el catalizador, ¿qué metal es muy activo en la reducción de los óxidos de nitrógeno (NOx)?**
a) Rodio
b) Platino
c) Plomo
d) Cobre

**Respuesta: a) Rodio**

> 💡 El rodio reduce los NOx a N₂; el platino oxida CO y HC. También lleva paladio.

---

**497. Verdadero o falso: el catalizador de 2 vías trata el CO y los HC, pero no los NOx.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Verdadero: los de oxidación (2 vías) fueron los primeros; al sumar el control de NOx apareció el de 3 vías.

---

**498. Verdadero o falso: un catalizador dañado se puede reparar reponiendo los metales nobles.**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: el manual aclara que no es reparable, y su reposición es muy cara.

---

**499. Según el manual, los vehículos a nafta vienen con catalizador (y exigen nafta sin plomo) a partir de los modelos:**
a) 1980
b) 1996
c) 1960
d) 2010

**Respuesta: b) 1996**

> 💡 Modelos 1996 en adelante: el plomo envenena los metales nobles.

---

**500. Los NOx se forman porque:**
a) La nafta tiene nitrógeno
b) El aceite se quema
c) El nitrógeno del aire (~70 %) se combina con oxígeno a alta temperatura
d) La sonda lambda los genera

**Respuesta: c) El nitrógeno del aire (~70 %) se combina con oxígeno a alta temperatura**

> 💡 El nitrógeno es inerte en frío; con la cámara muy caliente reacciona. Por eso bajar la temperatura (EGR) baja los NOx. (El ~70 % es el dato del manual; el valor real es ~78 %.)

---

**501. Las dos misiones de la válvula EGR son:**
a) Enriquecer la mezcla y subir la potencia
b) Reducir los gases contaminantes y bajar la temperatura de combustión
c) Purgar el canister y regular el ralentí
d) Medir el oxígeno y calentar el catalizador

**Respuesta: b) Reducir los gases contaminantes y bajar la temperatura de combustión**

> 💡 Mezcla el gas ya quemado con la admisión: la combustión es más 'fría' y salen menos NOx.

---

**502. Si el sensor de temperatura de la EGR marca una temperatura demasiado BAJA, indica que:**
a) La válvula EGR quedó abierta siempre
b) El catalizador está tapado
c) La válvula EGR no está abriendo
d) La mezcla es rica

**Respuesta: c) La válvula EGR no está abriendo**

> 💡 Si no pasa gas caliente, el sensor queda frío. Muy caliente, en cambio, indica que quedó abierta todo el tiempo.

---

**503. La ECU comanda la válvula EGR:**
a) Con alta tensión
b) Directamente con un cable de acelerador
c) Con la presión de aceite
d) A través de una electroválvula que le deja pasar vacío

**Respuesta: d) A través de una electroválvula que le deja pasar vacío**

> 💡 La ECU maneja una electroválvula y el vacío acciona el diafragma de la válvula EGR.

---

## Bloque 48 — Encendido DIS (súper quiz 2) (504–511)

**504. La principal característica del encendido DIS es que:**
a) No tiene distribuidor
b) No tiene bobina
c) Usa platinos
d) Funciona sin ECU

**Respuesta: a) No tiene distribuidor**

> 💡 Al eliminar el distribuidor desaparecen piezas que se gastan y sus interferencias eléctricas.

---

**505. En un motor de 4 cilindros con chispa perdida, los pares de trabajo son:**
a) 1-2 y 3-4
b) 1-3 y 2-4
c) 1-4 y 2-3
d) Cada cilindro solo

**Respuesta: c) 1-4 y 2-3**

> 💡 1 y 4 (y 2 y 3) llegan juntos al PMS: uno en compresión y el otro en escape.

---

**506. En un motor de 6 cilindros con chispa perdida, los pares son:**
a) 1-2, 3-4 y 5-6
b) 1-6, 2-5 y 3-4
c) 1-4, 2-5 y 3-6
d) 1-3, 2-4 y 5-6

**Respuesta: b) 1-6, 2-5 y 3-4**

> 💡 Según el manual: 1-6, 2-5 y 3-4.

---

**507. En la chispa perdida, la chispa 'perdida' salta en el cilindro que está:**
a) En admisión
b) En final de compresión
c) En explosión
d) En final de escape (cruce de válvulas)

**Respuesta: d) En final de escape (cruce de válvulas)**

> 💡 Ahí casi no hay presión ni mezcla: la chispa gasta poca energía. La útil salta en el que termina la compresión.

---

**508. Verdadero o falso: en la chispa perdida, las dos chispas saltan con la corriente en el mismo sentido (del centro a masa).**
a) Verdadero
b) Falso

**Respuesta: b) Falso**

> 💡 Falso: el secundario pasa en serie por las dos bujías; en una va del centro a masa y en la otra al revés.

---

**509. El encendido estático integral (bobina sobre bujía) es de descarga capacitiva y genera:**
a) Unos 5 kV
b) Unos 12 V
c) Más de 40 kV
d) Exactamente 15 kV

**Respuesta: c) Más de 40 kV**

> 💡 Una bobina por bujía, sin cables de alta, y más de 40 kV. La ECU corrige el avance según la carga. (Así lo dice el manual; en la práctica las bobinas sobre bujía son inductivas.)

---

**510. ¿Qué ventaja da el DIS a la bobina respecto del encendido con distribuidor?**
a) Más tiempo para formar el campo magnético y producir una buena chispa
b) Menos tensión en la bujía
c) No necesita masa
d) Funciona sin batería

**Respuesta: a) Más tiempo para formar el campo magnético y producir una buena chispa**

> 💡 Cada bobina dispara cada dos cilindros (o uno): tiene más tiempo de carga, incluso a muchas RPM.

---

**511. Verdadero o falso: el sistema de chispa perdida solo puede aplicarse a motores con número par de cilindros.**
a) Verdadero
b) Falso

**Respuesta: a) Verdadero**

> 💡 Verdadero: necesita pares de cilindros que lleguen juntos al PMS.

---
