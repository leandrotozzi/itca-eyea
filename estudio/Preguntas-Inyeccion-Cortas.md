# 📖 Preguntas Cortas — Inyección Electrónica Nafta (ITCA)

> Fichas de repaso rápido (pregunta corta + respuesta) para la 2ª parte de la materia. Complementa el [Resumen de Inyección](../resumenes/Resumen-Inyeccion-Nafta.md) y la [Guía Pedagógica](../resumenes/Guia-Pedagogica-Inyeccion.md).

---

## 🔷 Fundamentos: sensores, actuadores y señales

**1. ¿Qué hacen la mayoría de los sensores con el voltaje?**
No generan voltaje: modifican un voltaje de referencia (≈5 V) que les da la ECU.

**2. ¿Entre qué valores varía la señal de retorno de un sensor?**
Entre 100 mV y 4.800 mV, y siempre menor al voltaje de batería.

**3. ¿Qué pasa si la batería baja de 9 V?**
Las señales de los sensores se vuelven erróneas y el sistema falla.

**4. ¿Qué es un actuador?**
Un dispositivo que transforma energía eléctrica en mecánica (casi siempre un solenoide de 12 V).

**5. ¿Qué es un termistor NTC y para qué se usa?**
Una resistencia que baja al subir la temperatura; se usa en sensores de temperatura (motor, aire, combustible).

**6. ¿Qué convierte un potenciómetro?**
Una posición mecánica (mariposa, pedal, aleta) en un voltaje variable.

**7. ¿Qué diferencia hay entre señal analógica y digital?**
La analógica varía gradualmente (onda senoidal); la digital es ON/OFF (onda cuadrada).

**8. ¿En qué unidad se mide el tiempo de apertura del inyector?**
En milisegundos (ancho de pulso).

**9. ¿Qué instrumento se usa para medir y por qué no el analógico?**
El multímetro digital; el analógico puede dañar la electrónica.

---

## 🔷 Sistemas Bosch y ECU

**10. ¿Cómo es el sistema Le-Jetronic?**
Analógico, multipunto, de inyección simultánea, controla solo el combustible, sin memoria de averías.

**11. ¿Qué agrega el Motronic respecto al Le-Jetronic?**
Integra el encendido en la ECU y tiene sonda lambda, memoria de adaptación y testigo de averías.

**12. ¿Cuál es la diferencia entre Motronic y Mono-Motronic?**
La cantidad de inyectores: multipunto vs. monopunto (un solo inyector).

**13. ¿Qué es el K-Jetronic?**
Un sistema de inyección mecánica continua (flujo constante).

**14. ¿Qué memoria de la ECU no se borra al quitar la batería?**
La ROM (contiene el programa de fábrica).

**15. ¿Qué guarda la RAM stand-by?**
Las adaptaciones aprendidas (ralentí, mezcla, mariposa); se borra si se corta la batería.

**16. ¿Por qué el auto anda raro tras desconectar la batería?**
Porque la RAM stand-by perdió sus adaptaciones y debe volver a aprenderlas.

**17. ¿Cómo procesa la ECU la señal analógica de un sensor?**
La convierte a código binario digital con un conversor A/D.

**18. ¿Cuáles son las 4 funciones de la ECU?**
Entrada, procesamiento, almacenamiento y salida.

---

## 🔷 Clasificación de la inyección

**19. ¿Cómo inyecta la inyección simultánea?**
Todos los inyectores a la vez, por un solo circuito.

**20. ¿Cómo inyecta la semisecuencial (agrupada)?**
Por pares de cilindros, con dos circuitos.

**21. ¿Cómo inyecta la secuencial y qué ventaja tiene?**
Un pulso por inyector según el orden de encendido; mayor rendimiento y menos emisiones.

**22. ¿Qué sensor necesita la inyección secuencial?**
El sensor de fase (árbol de levas).

**23. ¿Dónde inyecta la inyección directa (GDI) vs. la indirecta?**
Directa: en la cámara de combustión. Indirecta: detrás de la válvula de admisión.

---

## 🔷 Sistema de combustible

**24. ¿Cómo se refrigera la bomba de combustible?**
Con el propio combustible que la baña.

**25. ¿A qué presión abre la válvula de alivio de la bomba?**
A 6–7 bar (64–85 psi).

**26. ¿Para qué sirve la válvula antirretorno?**
Para mantener presión residual y facilitar el arranque en caliente.

**27. ¿Cuál es el poro del filtro de combustible y cada cuánto se cambia?**
10 micras; cada ~50.000 km.

**28. ¿Cómo controla la ECU el caudal del inyector?**
Variando el tiempo de apertura (milisegundos); el inyector es normalmente cerrado.

**29. ¿Qué mantiene constante el regulador de presión?**
La diferencia de presión entre entrada y salida de los inyectores.

**30. ¿Para qué sirve el tubo de vacío del regulador?**
Para compensar la depresión del múltiple (en ralentí la presión baja ~0,5 bar).

**31. ¿Qué hace el interruptor de inercia?**
Ante un choque, corta la bomba abriendo un circuito normalmente cerrado.

**32. ¿Qué hace el relé de bomba al dar contacto?**
Se energiza unos segundos para presurizar la línea.

**33. ¿Qué contiene y qué retiene el canister?**
Carbón activo que retiene los vapores de nafta del tanque.

---

## 🔷 Sensores de temperatura, carga y aire

**34. ¿De qué tipo es el sensor de temperatura de motor (ECT) y dónde va?**
NTC; antes del termostato, en contacto con el refrigerante.

**35. ¿Qué corrige el sensor de temperatura de aire (IAT)?**
El tiempo de inyección según la densidad del aire.

**36. ¿Cómo funciona el TPS y qué informa?**
Es un potenciómetro; informa posición, velocidad y sentido de la mariposa.

**37. ¿Qué señal da el TPS en reposo y a plena apertura?**
En reposo, décimas de voltio; a plena apertura, cercano al voltaje de referencia.

**38. ¿Qué mide el sensor MAP?**
La presión absoluta del múltiple (la carga del motor).

**39. ¿Cuándo da el MAP su voltaje más alto?**
Con presión alta en el múltiple (contacto y motor apagado, o acelerón).

**40. ¿Cómo funciona el MAF de hilo caliente?**
Una resistencia caliente (~200 °C) se enfría con el aire; más aire = más voltaje.

**41. ¿Cómo mide el aire el sensor VAF (caudalímetro)?**
Con una aleta-sonda que mueve un potenciómetro contra un resorte.

**42. ¿Qué particularidad tiene el TPS Bosch de doble pista?**
El vehículo que lo usa no tiene sensor MAP.

---

## 🔷 Sonda lambda y mezcla

**43. ¿Cuál es la relación estequiométrica (lambda = 1)?**
14,7 : 1 (aire : nafta).

**44. ¿De qué material es la sonda lambda y cómo genera tensión?**
De óxido de circonio con platino; genera tensión por la diferencia de oxígeno entre escape y aire.

**45. Mucho oxígeno en el escape: ¿mezcla y voltaje?**
Mezcla pobre, voltaje bajo → la ECU enriquece.

**46. Poco oxígeno en el escape: ¿mezcla y voltaje?**
Mezcla rica, voltaje alto → la ECU empobrece.

**47. ¿A qué temperatura empieza a funcionar bien la sonda?**
A partir de ~350 °C (por eso se usa calefaccionada/HEGO).

**48. ¿Cómo es la señal de una sonda buena?**
Oscila constantemente (30 a 40 veces por minuto); si está "planchada", está muerta.

**49. ¿Para qué sirven las dos sondas de OBD II?**
La pre-catalizador calcula la mezcla; la post-catalizador verifica el catalizador.

**50. En el potenciómetro de mezcla CO, ¿qué indica más de 2,5 V?**
Mezcla rica (menos de 2,5 V = pobre).

---

## 🔷 Sensores de posición y régimen

**51. ¿Qué informa el sensor de cigüeñal (CKP)?**
Las revoluciones (RPM) y el punto muerto superior (PMS).

**52. ¿Cómo es la rueda fónica típica del CKP?**
58 dientes + 2 suprimidos; el hueco marca el PMS.

**53. ¿Qué señal genera el CKP inductivo?**
Alterna, cuya amplitud crece con las RPM.

**54. ¿Cuál es el entrehierro del CKP inductivo?**
1 a 1,5 mm.

**55. ¿Para qué sirve el sensor de fase (CMP)?**
Para identificar qué cilindro está en compresión.

**56. ¿Cómo funciona el sensor de PMS óptico?**
Con un LED infrarrojo y un fotodiodo, y un disco ranurado.

**57. ¿Con cuántos cables se conecta un sensor Hall?**
Con 3 (alimentación, masa y señal).

---

## 🔷 Otros sensores y actuadores

**58. ¿Qué tipo de sensor es el de detonación (knock)?**
Piezoeléctrico (de vibraciones); detecta el picado.

**59. ¿Qué señal da el sensor de velocidad (VSS)?**
Pulsos rectangulares cuya frecuencia crece con la velocidad.

**60. ¿Por qué el pedal de acelerador (APP) tiene dos potenciómetros?**
Para prueba de plausibilidad / seguridad (a prueba de fallos).

**61. ¿Cómo se alimenta una válvula de ralentí de 3 pines?**
Pin central a 12 V; los otros dos reciben pulsos de masa de la ECU.

**62. ¿Cómo se controla el actuador de mariposa (ETC)?**
Con señal PWM (frecuencia fija, período variable).

**63. ¿Qué precisión tiene el motor paso a paso de ralentí?**
~0,04 mm por paso; recorrido máximo ~200 pasos = 8 mm.

**64. ¿Qué desactivan los sensores de pedal de freno y embrague?**
El programador de velocidad (control crucero).

**65. ¿Qué indica una temperatura de EGR demasiado alta?**
Que la válvula EGR quedó continuamente abierta (pegada).

**66. ¿Por qué la EGR reduce los NOx?**
Porque baja la temperatura de combustión (los NOx nacen del nitrógeno del aire a alta temperatura).

**67. ¿Qué gases trata un catalizador de 3 vías?**
CO, HC y NOx (los convierte en CO₂, agua y nitrógeno).

**68. ¿Qué metales nobles usa el catalizador y para qué?**
Platino, paladio y rodio. El platino oxida CO y HC; el rodio reduce los NOx.

**69. ¿En qué rango de temperatura trabaja bien el catalizador?**
Entre 400 y 800 °C.

**70. ¿Por qué el catalizador solo funciona con nafta sin plomo?**
Porque el plomo lo "envenena" y destruye su actividad catalítica.

---

## 🔷 Señales, ECU y actuadores de ralentí (ampliación)

**71. ¿Cuáles son las 4 virtudes que debe tener un sensor?**
Constancia, exactitud, rango de trabajo y linealidad.

**72. ¿Qué es el ciclo de trabajo de una onda cuadrada y a qué equivale en el encendido?**
La relación % entre tiempo ON y tiempo OFF; equivale al ángulo de detención (dwell) del primario.

**73. ¿Por qué no se usa un multímetro analógico en autos con ECU?**
Tiene baja impedancia: "chupa" corriente y puede dañar la electrónica.

**74. ¿Qué memoria guarda las adaptaciones (ralentí, mariposa cerrada, corrección lambda)?**
La RAM stand-by. Se pone a cero si se desconecta la batería, un fusible, el relé o el conector de la ECU.

**75. ¿Para qué sirve el conversor A/D de la ECU?**
Convierte el voltaje analógico de los sensores en código binario que el microprocesador puede procesar.

**76. ¿Qué es el caudal Q₀ en el ralentí?**
El aire mínimo que se filtra por debajo de la mariposa cerrada; viene regulado de fábrica con un tapón de inviolabilidad.

**77. ¿Cómo cambia de sentido el regulador de ralentí de CC del monopunto Bosch?**
La ECU invierte la polaridad del motor (terminales 32 y 34). Mueve la mariposa hasta ~18°.

**78. ¿Qué activa el microinterruptor de ralentí del monopunto al cerrarse?**
La doble función: cut-off en desaceleración y regulación del ralentí (pone a masa el terminal 8 de la ECU).

---

## 🔷 Combustible, catalizador, EGR y DIS (ampliación)

**79. ¿Cuándo activa la ECU el relé de bomba con el motor en marcha?**
Cuando recibe la señal del sensor de posición de cigüeñal (al dar contacto solo lo energiza unos segundos).

**80. ¿Qué tres fallas hacen abrir la válvula de alivio de la bomba (6–7 bar)?**
Regulador de presión obstruido, retorno obstruido o filtro obstruido.

**81. ¿Para qué sirve la presión residual que deja la válvula antirretorno?**
Evita burbujas de vapor (arranque en caliente) y permite un arranque instantáneo.

**82. ¿Qué abre el interruptor de inercia y cómo se rearma?**
Abre el circuito N.C. de la bomba (la esfera se suelta del imán); se rearma presionando el pulsador.

**83. ¿Qué capa aumenta la superficie activa del catalizador?**
Un revestimiento poroso de alúmina (Al₂O₃) sobre el panal cerámico.

**84. ¿A partir de qué temperatura empieza a convertir el catalizador y a cuál se derrite?**
Desde 250–300 °C; el sustrato se derrite a ~1400 °C.

**85. ¿Qué daña al catalizador además del plomo?**
Fallas de mezcla o encendido (lo obstruyen o lo recalientan) y las vibraciones del escape.

**86. ¿Cuáles son las dos misiones de la EGR?**
Reducir los gases contaminantes (NOx) y bajar la temperatura de combustión.

**87. ¿Cómo comanda la ECU la válvula EGR?**
A través de una electroválvula que le deja pasar vacío.

**88. ¿Qué es un "par de trabajo" en el encendido DIS?**
Dos cilindros que llegan juntos al PMS: uno en final de compresión y otro en final de escape.

**89. ¿Cuáles son los pares de chispa perdida en 4 y 6 cilindros?**
4 cil.: 1-4 y 2-3. 6 cil.: 1-6, 2-5 y 3-4.

**90. ¿Qué tensión genera el encendido estático integral (bobina sobre bujía)?**
Más de 40 kV (es de descarga capacitiva).
