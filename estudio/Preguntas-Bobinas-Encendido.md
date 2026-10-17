# ❓ Preguntas y Respuestas — Bobinas de Encendido y Módulos

> Fichas de repaso sobre bobinas de encendido, módulos y su diagnóstico. Basado en la documentación de BERU, Bosch, Indiel y material de bobinas modernas. Complementa el [Resumen de Bobinas](../resumenes/Resumen-Bobinas-Encendido.md).

---

## 🔷 Principio de funcionamiento

**1. ¿En qué principio/ley física se basa la bobina de encendido?**
En el principio del **transformador** y la **ley de inducción**: todo cambio de corriente en una bobina induce (crea) una tensión.

**2. ¿En qué momento nace realmente la chispa: al cargar o al cortar la corriente?**
Al **cortar** bruscamente la corriente primaria. El colapso instantáneo del campo magnético induce la alta tensión.

**3. ¿Cuál es la secuencia de trabajo de la bobina?**
Carga (almacena energía en el campo magnético, primario cerrado) → corte de la corriente → inducción de alta tensión → descarga disruptiva (chispa) en la bujía.

**4. ¿De qué tres factores depende la tensión máxima que genera la bobina?**
De la relación de vueltas secundario/primario, la calidad del núcleo de hierro y el campo magnético.

**5. ¿Cuál de los dos cables de la bobina es más grueso?**
El del **bobinado primario** (menos vueltas, cable grueso). El secundario es de alambre finito con muchísimas vueltas.

**6. Durante el "tiempo de cierre", ¿qué está pasando en un encendido electrónico?**
La **corriente primaria está activada** (la bobina se está cargando). En un encendido por platino, el "cierre" es cuando el contacto está cerrado.

---

## 🔷 Valores y especificaciones

**7. ¿Cuál es la resistencia típica del primario y del secundario en una bobina moderna?**
Primario: **0,3 a 0,6 Ω**. Secundario: **5 a 20 kΩ**.

**8. ¿Qué tensión secundaria máxima genera una bobina moderna?**
Hasta **45.000 V** (25 a 45 kV según el sistema).

**9. ¿Cuál es la corriente primaria típica de una bobina?**
Entre **6 y 20 A**.

**10. ¿En qué unidad se mide la energía de la chispa y cuánto vale hoy?**
En **milijulios (mJ)**: entre 10 y 60 mJ en motores normales, hasta 100–200 mJ en las de última generación / inyección directa.

**11. ¿Cuántas vueltas tienen el primario y el secundario?**
Primario: 100 a 250 vueltas. Secundario: 10.000 a 25.000 vueltas.

**12. Calculá las chispas por minuto de un motor de 4 cilindros a 3.000 rpm.**
(rpm × cilindros) ÷ 2 = (3.000 × 4) ÷ 2 = **6.000 chispas/min**.

**13. ¿En qué rango de temperatura debe trabajar una bobina moderna?**
De **-40 °C a +180 °C**.

---

## 🔷 Tipos de bobinas

**14. ¿Qué caracteriza a una bobina de chispa doble (chispa perdida)?**
Alimenta **dos bujías a la vez** (pares de trabajo), genera 2 chispas por giro de cigüeñal y **solo sirve para motores con número PAR de cilindros**. No necesita sensor de árbol de levas.

**15. ¿Cuántas bobinas de chispa doble lleva un motor de 4 cilindros? ¿Y uno de 6?**
4 cilindros → **2 bobinas**. 6 cilindros → **3 bobinas**.

**16. ¿Qué es una bobina COP (tipo lápiz / chispa simple) y qué ventaja tiene?**
Una bobina por bujía montada directamente sobre ella, sin cables de alta. Ventaja: **las menores pérdidas de tensión** de todos los sistemas y monitoreo de fallos por OBD.

**17. ¿Por qué la bobina de chispa simple SÍ necesita sensor de árbol de levas y la de chispa doble no?**
Porque la simple genera una chispa por carrera de explosión y hay que saber en qué cilindro está el ciclo; la doble dispara pares de cilindros a la vez, así que no necesita distinguir el ciclo exacto.

**18. ¿Qué es una regleta (casete) de bobinas?**
Varias bobinas de chispa simple **independientes** dentro de una carcasa común; se usa en motores de 3 y 4 cilindros. Reduce cables.

**19. ¿Para qué sirve el diodo de alta tensión en una bobina de chispa simple?**
Para **suprimir la chispa de activación** (bloquea la descarga de la tensión de activación en el secundario). ⚠️ No se debe invertir la polaridad de los terminales 1 y 15 o se destruye el diodo.

**20. ¿Qué ventajas trajo integrar la etapa final (electrónica de potencia) dentro de la bobina?**
Diagnóstico, supresión de interferencias, limitación de corriente, corte térmico, identificación de cortocircuitos y estabilización de alta tensión.

---

## 🔷 Bobinas de resina asfáltica (Bosch)

**21. ¿Qué ventaja tiene la resina asfáltica frente al aceite en una bobina?**
Es mejor aislante sólido, mayor rigidez dieléctrica y potencia de encendido, no gotea ni explota, y **funciona en cualquier posición**.

**22. ¿Por qué las bobinas de aceite fallan en motores modernos?**
Porque los motores modernos necesitan **más de 26.000 V** y las de aceite no los garantizan en todo el régimen; además el aceite puede hervir/gotear con la alta temperatura.

**23. ¿Con qué tensión trabaja una bobina que necesita resistor (balastro) externo?**
Con **7 a 10 V** (el resistor cae el resto). Las que no lo necesitan trabajan con 12 V.

**24. ¿Qué pasa si le ponés un resistor a una bobina que no lo requiere? ¿Y al revés?**
Con resistor de más → **baja la potencia de chispa**. Sin el resistor que necesita → **se recalienta** la bobina.

**25. ¿Fabrica Bosch bobinas con resistor incorporado?**
No. El resistor siempre es externo (porcelana o cable resistivo, a veces en el cable de la llave de contacto).

---

## 🔷 Módulos de ignición y nomenclatura

**26. ¿Qué función cumple el módulo de ignición?**
Es la etapa de potencia que reemplaza al platino: recibe la señal del captor y **conmuta la corriente del primario** de la bobina.

**27. ¿Qué detecta un probador de módulos como el PPM 03 y a qué régimen?**
Detecta problemas de **baja señal a 500 RPM** (fallas que aparecen a bajas revoluciones).

**28. ¿Qué significan las señales EST y REF en las bobinas/módulos modernos?**
**EST** (Electronic Spark Timing) = pulso de control de **avance de encendido** hacia la ECU. **REF** = señal de **RPM** del módulo hacia la ECU.

**29. ¿Qué representan los terminales P+ y P− en un módulo?**
La señal (positiva y negativa) que envía la **bobina impulsora / captor inductivo** hacia el módulo de ignición.

**30. ¿Cómo se clasifican las bobinas modernas a primera vista?**
Por su **cantidad de pines** (de 1 a 7) y su tipo: con/sin módulo integrado, doble (chispa perdida, ~3 pines), COP tipo lápiz o casete/regleta (6–7 pines).

---

## 🔷 Diagnóstico y fallas

**31. ¿Qué pruebas básicas se le hacen a una bobina con multímetro?**
Medir la **resistencia del primario** y la **del secundario**, y compararlas con la especificación del fabricante.

**32. ¿Cómo se diagnostica una bobina con lámpara estroboscópica?**
Con el motor en marcha, conectada a cada cilindro: si la **frecuencia de intermitencia es irregular** en un cilindro, hay falla en la bobina o el sistema de ese cilindro.

**33. Cuando una bobina moderna falla, ¿suele ser culpa de la bobina?**
No: muchas veces la causa está en el **entorno** (conectores/cables de bujía dañados, humedad, calor excesivo, mala instalación).

**34. ¿Por qué hay que poner grasa en el conector de la bujía al cambiarla?**
Para evitar la **fusión** del conector de silicona con la bujía y las **descargas disruptivas** en el cuello de la bujía. También facilita sacar la bujía después.

**35. ¿Qué pasa si se aprieta la bobina con un par incorrecto (ej. 15 N·m en vez de 6 N·m)?**
Se producen **grietas longitudinales** en el cuerpo de la bobina.

**36. ¿Por qué fallan las copias/falsificaciones de bobinas?**
Usan materiales de baja calidad: soldaduras deficientes, cable de alta cerca del núcleo, relleno con "grava" en lugar de resina → burbujas de aire que se **ionizan** y terminan en cortocircuito o descarga disruptiva.

---

## 🔷 Conexión y prueba de banco (HELLAMEX)

**37. ¿Qué instrumental se usa para la prueba de banco de una bobina?**
Una **batería** (fuente), un **condensador** (como fuente de pulso/excitación) y una **lámpara de prueba** (o destornillador/bujía) para ver el arco voltaico.

**38. ¿Cuál es el procedimiento básico para probar una bobina COP de 2 pines en el banco?**
Positivo de la bobina al positivo de batería; el condensador entre el negativo de batería y la terminal negativa de la bobina; se **excita** (se chispean las puntas del condensador) y debe saltar alta tensión en la **torreta central**.

**39. ¿Qué distancia debe haber entre la punta de prueba y la bobina?**
Aproximadamente **0,5 cm** (la chispa salta de la torre de la bobina a la punta de la lámpara).

**40. En el conector de una bobina, ¿qué es una terminal "pulsante"?**
La terminal **negativa** que la ECU corta a masa para disparar la chispa (es el lado de conmutación).

**41. Al excitar una sola terminal en una bobina de chispa perdida, ¿qué se observa?**
Un **arco voltaico simultáneo en las dos torretas** de los cilindros complementarios (disparan a la vez).

**42. ¿Qué significan los terminales S, EST y REF en la prueba de banco?**
**S** = excitación/mando (se puentea a positivo) o referencia (no se conecta, según modelo). **EST** = mando de encendido, se excita para disparar. **REF** = referencia, NO se conecta en la prueba.

**43. Según HELLAMEX, ¿cuáles son los dos síntomas típicos de una bobina/módulo fallado?**
Que el **motor no arranque** (sin salida de alta) o que tenga **marcha inestable** por un cilindro que no trabaja.

**44. ¿Cuáles son los dos pasos del diagnóstico recomendado?**
(1) Comprobar las **alimentaciones en el arnés** (falsos contactos, fisuras, corrosión) y (2) hacer la **prueba de banco** al módulo y/o la bobina.

**45. ¿Cómo se prueba un módulo de encendido externo en el banco?**
Se alimenta el módulo, se conecta su salida a un borne de la bobina (el otro a positivo), su masa al negativo, y se **excita puenteando sus terminales de mando**; la chispa debe brincar entre la bobina y la lámpara.
