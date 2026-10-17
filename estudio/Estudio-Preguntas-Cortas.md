# 📖 Material de Estudio — Preguntas Cortas y Respuestas (ITCA)

> Fichas de repaso rápido para examen. Preguntas puntuales con la respuesta debajo. Cubre todos los temas: electricidad básica, magnetismo, baterías, semiconductores, encendido, arranque y alternador.

---

## 🔷 Electricidad básica

**1. ¿Qué es la corriente eléctrica?**
El flujo de electrones que se desplazan desde un cuerpo de potencial negativo (–) hacia otro de potencial positivo (+).

**2. ¿Qué es un ion positivo y uno negativo?**
Ion positivo: átomo al que se le sacaron electrones (exceso de protones). Ion negativo: átomo al que se le agregaron electrones (exceso de electrones).

**3. Definí intensidad, tensión y resistencia con sus unidades.**
- Intensidad (I): cantidad de electrones que circulan por segundo → Amperio (A).
- Tensión (E, U, V): fuerza que impulsa la corriente → Voltio (V).
- Resistencia (R): oposición al paso de la corriente → Ohm (Ω).

**4. ¿Qué es la resistividad?**
La resistencia que presenta un material de 1 metro de largo y 1 mm² de sección (medida a 15 °C).

**5. Diferencia entre corriente continua y alterna.**
- CC: flujo en un solo sentido, valor fijo (línea recta en V-t).
- CA: los electrones oscilan cambiando de sentido; onda senoidal con amplitud, frecuencia y período.

**6. ¿Qué significa PTC y NTC?**
- PTC (coeficiente positivo): al subir la temperatura, sube la resistencia.
- NTC (coeficiente negativo): al subir la temperatura, baja la resistencia.

---

## 🔷 Leyes y fórmulas

**7. Enunciá la Ley de Ohm y sus 3 fórmulas.**
"En todo circuito la intensidad es directamente proporcional a la tensión e inversamente proporcional a la resistencia."
- `I = V / R` · `V = I × R` · `R = V / I`

**8. Enunciá la 1ª Ley de Kirchhoff (de los nudos).**
En cada nudo, la suma de las corrientes entrantes es igual a la suma de las corrientes salientes.
`I₁ = I₂ + I₃`

**9. Enunciá la 2ª Ley de Kirchhoff (de las mallas).**
La suma de las caídas de tensión parciales en un circuito en serie es igual a la tensión aplicada.
`E = E₁ + E₂ + E₃`

**10. Fórmula de la resistencia total en SERIE.**
`Rt = R₁ + R₂ + … + Rn`

**11. Fórmula de la resistencia total de 3 resistencias en PARALELO.**
`1/Rt = 1/R₁ + 1/R₂ + 1/R₃`
Despejando: `Rt = 1 / (1/R₁ + 1/R₂ + 1/R₃)`
(Para dos resistencias: `Rt = (R₁ × R₂) / (R₁ + R₂)`)

**12. En un circuito paralelo, ¿cómo es la resistencia total respecto a las resistencias individuales?**
Siempre es MENOR que la resistencia más pequeña (la corriente tiene más de un camino).

**13. Fórmula de la potencia eléctrica.**
`P = V × I` (en watts). Ejemplo: 12 V × 150 A = 1800 W.

**14. ¿Cuánto es 1 HP en watts?**
1 HP = 746 W.

---

## 🔷 Magnetismo y electromagnetismo

**15. ¿Cómo se comportan los polos magnéticos?**
Polos iguales se repelen (N-N, S-S); polos opuestos se atraen (N-S).

**16. ¿Qué es un electroimán?**
Un núcleo de hierro rodeado por una bobina; al circular corriente adquiere propiedades magnéticas. Ej.: bobina de encendido, solenoide, relé.

**17. ¿Qué es la inducción electromagnética?**
Al haber movimiento relativo entre un conductor y un campo magnético, se induce en el conductor una d.d.p. Es el principio del alternador.

**18. ¿Con qué regla se determina el sentido del campo magnético alrededor de un conductor?**
La regla del tirabuzón.

---

## 🔷 Instrumentos de medición

**19. ¿Cómo se conecta el amperímetro y cómo debe ser su resistencia interna?**
En SERIE, con resistencia interna lo más baja posible (hilo grueso, pocas espiras).

**20. ¿Cómo se conecta el voltímetro y cómo debe ser su resistencia interna?**
En PARALELO, con resistencia interna lo más alta posible (hilo fino, muchas espiras).

**21. ¿Qué es el shunt?**
Un resistor de muy bajo valor en paralelo con el devanado del amperímetro, para poder medir corrientes altas.

**22. ¿Qué ventaja tiene la pinza amperométrica?**
Mide la corriente sin abrir el circuito, de forma indirecta por el campo magnético del conductor.

---

## 🔷 Baterías / Acumuladores

**23. ¿De qué material son las placas positivas y negativas?**
Positivas: peróxido de plomo (PbO₂). Negativas: plomo esponjoso (Pb).

**24. ¿Qué compone el electrolito y cuál es su densidad a plena carga?**
Ácido sulfúrico (SO₄H₂) + agua (H₂O). Densidad ≈ 1,265 gr/cm³ a 25 °C.

**25. ¿Cuál es la tensión de una celda cargada y cuántas tiene una batería de 12 V?**
2,1 V por celda; una batería de 12 V tiene 6 celdas.

**26. ¿Qué se forma en las placas durante la descarga?**
Sulfato de plomo (el electrolito se debilita, baja la densidad).

**27. ¿Qué instrumento mide el estado de carga y cómo?**
El densímetro, midiendo la densidad del electrolito (más densidad = más carga).

**28. ¿Con qué intensidad se carga una batería?**
Con una intensidad igual a su capacidad nominal dividida por 20.

**29. ¿Qué diferencia hay entre capacidad (Ah) y CCA?**
Capacidad (Ah): corriente constante en 20 h. CCA (Cold Cranking Amperes): corriente de entrega instantánea de arranque.

**30. ¿Por qué es peligroso cargar una batería cerca de una llama?**
Porque desprende hidrógeno y oxígeno, que forman una mezcla explosiva.

---

## 🔷 Relés, cables y fusibles

**31. ¿Qué es un relé y para qué sirve en el auto?**
Un interruptor accionado por un electroimán; permite controlar un circuito de alto consumo (luces, claxon, electroventilador) con un circuito de mando de baja corriente.

**32. ¿Cuál es la principal ventaja del relé?**
La separación eléctrica total entre el circuito de la bobina (mando) y el de los contactos (potencia).

**33. Diferencia entre contacto N.A. y N.C.**
- N.A. (normal abierto): conecta al activarse el relé.
- N.C. (normal cerrado): desconecta al activarse el relé.

**34. ¿Qué representa el terminal 30 y el 87 en un relé?**
30 = positivo directo de batería. 87 = salida de positivo.

**35. En el sistema de calibres, ¿cuál es más grueso, el 0 o el 20?**
El calibre N° 0 es el más grueso; el N° 20 el más fino.

**36. ¿De qué color es un fusible de 10 A y uno de 15 A?**
10 A = rojo. 15 A = azul.

**37. ¿Qué tipo de soldadura NO debe usarse en reparaciones eléctricas y por qué?**
La soldadura con núcleo de ácido, porque es corrosiva. Se usa la de estaño con núcleo de resina.

---

## 🔷 Semiconductores

**38. ¿Qué es un semiconductor tipo N y tipo P?**
Tipo N: exceso de electrones. Tipo P: silicio dopado con galio/boro (exceso de "huecos").

**39. ¿Qué hace un diodo y cuál es su caída en directa?**
Deja pasar la corriente en un solo sentido; en directa cae ~0,6–0,7 V (silicio).

**40. ¿Para qué se usan los diodos en el alternador?**
Para rectificar la corriente alterna en continua (mínimo 6: 3 positivos y 3 negativos).

**41. ¿Qué es la capacidad de un condensador y cómo aumenta?**
La cantidad de carga que almacena a una tensión dada. Aumenta al agrandar la superficie de placas y al reducir la distancia entre ellas.

**42. ¿Cuáles son los 3 terminales del transistor y sus funciones?**
Base (controla), emisor (cede electrones) y colector (los recibe).

**43. ¿Qué dos tipos de transistores bipolares existen?**
NPN y PNP.

**44. Al probar un transistor bipolar con multímetro, ¿qué pasa entre colector y emisor?**
No conduce en ningún sentido (equivale a dos diodos enfrentados).

---

## 🔷 Sistema de encendido

**45. ¿Qué función cumple la bobina de encendido?**
Es un autotransformador: eleva los 12 V de la batería hasta 25.000–90.000 V para generar la chispa.

**46. ¿Cuántas vueltas tiene el primario y el secundario?**
Primario: 150–250 vueltas (0,7 mm). Secundario: 15.000–25.000 vueltas (0,04 mm).

**47. ¿Cómo se conecta el condensador y qué hace?**
En paralelo con los platinos; absorbe la corriente de extra-ruptura (~300 V) para que no se quemen los contactos.

**48. ¿Qué es el ángulo de contacto (Dwell)?**
Los grados que gira la leva con los platinos cerrados; el tiempo necesario para que el campo magnético del primario alcance su máximo.

**49. ¿Qué pasa si la luz de platinos es demasiado grande? ¿Y muy chica?**
Grande: reduce el ángulo de contacto y adelanta la chispa. Chica: aumenta el ángulo, se prolonga la corriente y los contactos se queman.

**50. ¿De qué material son los platinos y por qué?**
De tungsteno, por su alta resistencia al desgaste (reduce la transferencia de metal).

**51. ¿Por qué hay que adelantar la chispa (avance)?**
Porque la combustión no es instantánea; la presión máxima debe darse ~23° después del PMS.

**52. ¿En función de qué actúa el avance centrífugo? ¿Y el de vacío?**
Centrífugo: RPM del motor (contrapesos). Vacío: carga del motor / depresión del múltiple (diafragma).

**53. ¿Qué instrumento se usa en la puesta a punto dinámica?**
La lámpara estroboscópica (conectada al cable de bujía N°1).

**54. Orden de encendido de un motor de 4 y de 6 cilindros.**
4 cil: 1-3-4-2 (o 1-2-4-3). 6 cil: 1-5-3-6-2-4.

**55. ¿Qué diferencia una bujía fría de una caliente?**
El largo de la punta del aislante del electrodo central (define su capacidad de disipar temperatura).

**56. ¿Qué resistencia tienen los cables de bujía antiparasitarios?**
Entre 4 KΩ y 6 KΩ; evitan interferencias y son obligatorios con encendido/inyección electrónica.

**57. ¿Qué ventaja aporta el transistor en el encendido electrónico?**
Maneja corrientes mayores (10–15 A) que los platinos, elimina el chisporroteo y ya no se necesita condensador.

**58. ¿En qué se basa el encendido por efecto Hall?**
En la tensión de Hall: una pantalla/aletas corta el campo magnético para gobernar el transistor. La chispa salta cuando la aleta abandona el entrehierro.

**59. ¿Qué caracteriza al encendido CDI (descarga capacitiva)?**
La energía se acumula en el campo eléctrico de un condensador (~400 V) y se descarga por un tiristor. Chispa muy intensa pero corta (~0,3 ms).

**60. ¿Qué es el sistema DIS y la "chispa perdida"?**
Encendido directo sin distribuidor; una bobina alimenta dos bujías de cilindros que forman pares de trabajo (una chispa es útil y la otra "perdida").

---

## 🔷 Motor de arranque

**61. ¿Cuál es la finalidad del motor de arranque?**
Dar el primer impulso al cigüeñal para iniciar el ciclo del motor.

**62. ¿Cuánta corriente consume aproximadamente?**
Entre 400 y 500 A.

**63. ¿Cuáles son los 3 conjuntos básicos del arranque?**
Solenoide (mando magnético), motor eléctrico propiamente dicho, e impulsor/Bendix.

**64. ¿Qué dos funciones cumple el solenoide?**
Prender/apagar el motor de arranque y engranar/desengranar el piñón contra la corona.

**65. Nombrá las 3 fases del solenoide.**
Activación (atrae el émbolo), retención (lo mantiene) y retorno (lo devuelve).

**66. ¿Por qué terminal ingresa la corriente en START y por cuál pasa el contacto principal?**
Ingresa por el terminal 50; el contacto principal (a alta corriente) pasa por el terminal 30.

**67. ¿Qué es la fuerza contraelectromotriz en el arranque?**
Una tensión inversa que aparece al girar el motor y reduce la corriente y el par a medida que sube la velocidad.

**68. ¿A qué velocidad puede girar el inducido?**
Hasta 30.000 rpm.

**69. Ventaja de la excitación por imanes permanentes.**
El flujo magnético se mantiene constante (no cae con la tensión de la batería).

**70. ¿Para qué sirve el reductor del arranque?**
Para aumentar el par al piñón, reduciendo la velocidad de rotación respecto al inducido (útil con potencias > 1 kW).

---

## 🔷 Alternador

**71. ¿Cuál es la función del alternador?**
Generar electricidad mientras el motor gira, alimentar todos los consumos y recargar la batería.

**72. ¿Qué se mueve en el alternador, a diferencia del generador?**
El campo magnético (el rotor gira), mientras los conductores (estator) quedan fijos.

**73. ¿Qué tipo de corriente genera y por qué se necesita rectificarla?**
Corriente alterna trifásica; se rectifica a continua para el vehículo con el puente de diodos.

**74. ¿Cuántos diodos tiene el puente rectificador y cómo se dividen?**
6 diodos de potencia: 3 positivos y 3 negativos (rectificación de onda completa).

**75. ¿Qué es la autoexcitación?**
El alternador se alimenta a sí mismo: la excitación inicial la da la batería (pre-excitación por la lámpara testigo) y luego el propio alternador, rectificado, alimenta el rotor.

**76. ¿Qué función cumplen los 3 diodos de excitación (borne D+)?**
Derivan una fracción de la corriente para alimentar el bobinado de excitación (rotor), hasta ~1 A.

**77. ¿Por qué se enciende y luego se apaga la luz testigo de carga?**
Se enciende porque hay diferencia de potencial batería-alternador al arrancar; se apaga cuando el alternador genera (~14 V) e iguala la tensión a ambos lados de la lámpara.

**78. ¿Cómo regula el regulador la tensión de salida?**
Regulando la corriente de excitación (campo magnético) mediante ciclos ON/OFF, sin importar RPM ni carga.

**79. ¿Qué hace la compensación térmica del regulador?**
Entrega más tensión con temperaturas bajas y menos con temperaturas altas, para cargar bien la batería en cualquier clima.

**80. ¿Cuál es la tensión nominal del alternador?**
14 V.
