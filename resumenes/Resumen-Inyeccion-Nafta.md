# ⛽ Resumen — Inyección Electrónica Nafta (ITCA / Ediciones Morcansa)

> Resumen técnico de la 2ª parte de la materia, **completo respecto del manual de Inyección** (págs. 44–122). Cubre sensores y actuadores, señales y multímetro, historia y sistemas Bosch, la ECU, la clasificación de la inyección, el sistema de combustible, los actuadores de ralentí, el catalizador, la EGR y el encendido DIS. La parte inicial de electricidad básica del manual (págs. 1–43) se omite: ya está en `Resumen-Electricidad-Basica.md`.
>
> Las citas "(manual p. X)" usan el **número impreso** en la página del manual. Lo que no sale del manual está marcado como *dato general de taller*.
>
> 🎨 Versión visual con simuladores: `web/guia/sensores-funcionamiento.html`, `web/guia/ecu-combustible.html` y `web/guia/actuadores-emisiones.html`.

---

## 1. Sensores y actuadores: fundamentos

**Sensores:** informan a la ECU el estado del motor. Categorías: **resistores, temporizadores, interruptores, transformadores y generadores**.
- Muchos son **resistivos**: no generan voltaje, solo **modifican un "voltaje de referencia"** que les entrega la computadora (típicamente 5 V).
- La señal de retorno varía entre **100 mV y 4.800 mV** y debe ser **menor al voltaje de batería**.
- ⚠️ Si la batería baja de **9 V**, las señales de los sensores son erróneas y el sistema falla.

**Actuadores:** transforman energía eléctrica en mecánica. Casi siempre son **solenoides** (bobina), alimentados con **12 V** y controlados por la computadora con **señales pulsantes o continuas**.

**Las 4 virtudes de un sensor/actuador** (manual p. 44). "Si envía señales correctas, está en buen estado":

| Virtud | Qué significa | Ejemplo / consecuencia |
|---|---|---|
| **Constancia** | Funciona igual miles de veces, sin desajustarse | Un interruptor de temperatura abre y cierra siempre en sus puntos de diseño |
| **Exactitud** | Trabaja dentro de la **tolerancia** que fija el fabricante | Interruptor de temp. que cierra a **90 °C ± 4 °C** |
| **Rango de trabajo** | Un digital tiene **2 valores** (ON/OFF); un analógico, un rango **proporcional** | Una señal **fuera de rango** = la ECU la toma como **anomalía** |
| **Linealidad** | Variación continua, de menor a mayor y a la inversa, **sin cortes** | Si la pista de un potenciómetro se corta, la señal **cae a 0 V** → la ECU registra avería y el motor anda mal |

### Tipos de sensores según su principio
| Tipo | Principio | Ejemplos |
|---|---|---|
| **Termistor** | Resistencia variable con la temperatura. **NTC** (baja R al subir T, el más usado) / **PTC** (sube R al subir T). Señal analógica. | Temp. refrigerante (ECT), aire (IAT), combustible |
| **Potenciómetro** | Cursor móvil sobre pista de carbón (positivo–masa–cursor). | TPS, caudalímetro, EGR, pedal acelerador |
| **Interruptor** | Abre/cierra el circuito totalmente (ON/OFF). | A/C, freno, embrague, dirección hidráulica |
| **Temporizador** | Cierra/abre el circuito en un tiempo dado. | Inyector de arranque en frío (años 80), relé bomba |
| **Generador** | Genera su propia tensión. | Sonda lambda, captor inductivo |

> **Temporizador clásico** (manual p. 47): el **termo-contacto temporizado** del **inyector de arranque en frío** (años 80). Tiene una **cinta bimetálica** con **resistencia calefactora**: con el motor frío da masa al inyector un tiempo que depende de la temperatura del refrigerante. Cuando la resistencia calienta el bimetal, este abre el contacto.

### Tipos de ondas/señales (se ven con osciloscopio, manual p. 48–49)
Las ondas son **cambios de voltaje oscilantes** y **solo se ven con el osciloscopio**.
- **Senoidal:** el voltaje varía **gradualmente** de un pico a otro (forma de "colinas"). La generan el **alternador** y los **captores inductivos**. Algunos sensores dan una "senoidal de corriente continua", es decir, una **señal analógica de voltaje variable**.
- **Cuadrada:** pulsos **alto/bajo** (prendido/apagado) **sin transición gradual**. Sus 4 parámetros:

| Parámetro | Definición | Ejemplo del manual |
|---|---|---|
| **Amplitud** | Cambio de voltaje desde la parte de abajo de la onda hasta la de arriba | Onda de 0 a 12 V → amplitud **12 V** |
| **Frecuencia** | Ciclos por segundo, en **Hz** | 10 pulsos por segundo = **10 Hz**. Es clave para diagnosticar |
| **Ancho de pulso** | Cuánto tiempo está activado el actuador (en **ms**) | Pulsos de la ECU a los **inyectores** |
| **Ciclo de trabajo** | Proporción del período en que está ON (t_ON / T), en **%** | Es el viejo **ángulo de detención (dwell)** del primario de encendido, medido en grados |

> 🧮 *Fórmulas útiles (dato general):* período T = 1/f; ciclo de trabajo % = t_ON / T × 100. Ejemplo: 100 Hz → T = 10 ms; con 2,5 ms ON → 25 %.

### Uso del multímetro digital (multitester, manual p. 50–53)
- Se usa el **digital**: el **analógico** tiene **impedancia baja**, así que "chupa" corriente del circuito y **puede dañar la electrónica**.
- El **scanner** acerca a la falla (códigos y flujo de datos sacados de la memoria de la ECU). El **multímetro** sirve para **confirmarla** en el componente. Otros equipos son el osciloscopio y el analizador de gases.

| Medición | Cómo se hace | Dato clave |
|---|---|---|
| **Resistencia / continuidad** | Componente **sin corriente y desconectado** (si no, se suma la R del circuito) | El buzzer suena con **R < ~30 Ω**. Un conductor sano marca **000** |
| **Diodos** | Corriente de prueba fija de **1 mA** | En inversa marca **"1"** (bloquea); en directa, unos **mV** (caída de tensión) |
| **Tensión DC** | Voltímetro **en paralelo** | Batería sana ≈ **12,5 V**; menos = caída de tensión |
| **Corriente DC** | Amperímetro **en serie**: toda la corriente pasa por el instrumento | Escala **10 A máx.** o **10 mA**. Respetar el tiempo máximo de medición |
| **Frecuencia** | Rango bajo | En inyección se ven **6 Hz a ~6.000 Hz** |
| **Temperatura** | Termocupla, o termistor sobre la pieza | Sin la sonda conectada muestra la temperatura ambiente |

---

## 2. Historia de la inyección (hitos clave)

- **Siglo XIX:** origen; Otto y Lenoir en la Feria de París (1867).
- **1940 – Ottavio Fuscaldo:** primero en usar un **solenoide eléctrico** para controlar el combustible.
- **1957 – Chevrolet Corvette:** primer motor con inyección de producción masiva (sistema **Rochester Ramjet**).
- **1957 – Bendix Electrojector:** primer sistema de **inyección electrónica (EFI)**, antecesor de casi todos los modernos (patente otorgada en 1961).
- **1966:** Bendix licencia sus patentes a **Bosch** → nace la familia Jetronic.
- **1967/68:** VW presenta el **D-Jetronic de Bosch**.
- **1975/76 – Cadillac Seville:** primer EFI de producción masiva en EEUU.
- **1980 – Cadillac:** inyección **digital**.

**Ventajas de la inyección electrónica vs. carburador/mecánica:** menos partes móviles, dosificación precisa, menor consumo y emisiones, mejor arranque en frío, y control integrado de varios sistemas del motor.

---

## 3. Sistemas Bosch (manual p. 62–64)

| | **LE-Jetronic** | **Motronic** | **Mono-Motronic** |
|---|---|---|---|
| Puntos de inyección | Multipunto | Multipunto | **Monopunto** (1 inyector en el cuerpo de mariposa) |
| Electrónica | **Analógica** | **Digital** | Digital |
| Qué controla la ECU | **Solo el combustible** | Combustible **+ encendido** | Combustible **+ encendido** |
| Forma de inyectar | **Simultánea** | (según versión) | Un único inyector central |
| Sonda lambda | No | **Sí** (en el escape) | **Sí** |
| Memoria / testigo de averías | **No tiene** ninguno de los dos | **Memoria de adaptación + testigo** en el tablero | Sí |
| Canister | No figura | **Válvula de canister** | Válvula de canister |
| Rotación | – | **Sensor de revoluciones en el volante** (en motores sin distribuidor) | Sensor de revoluciones |
| Medición de aire | Caudalímetro **VAF** | VAF | (IAT integrada en el cuerpo) |

- **LE-Jetronic** (p. 62): la ECU calcula el **tiempo de inyección (TI)** y todas las válvulas pulverizan **a la vez**. Como es **analógico**, **no guarda averías** ni enciende testigo. Componentes de la figura: bomba, filtro, regulador, inyector, VAF, sensor de temperatura, **control de marcha mínima**, **interruptor de mariposa** (todavía no potenciómetro), ECU, relé de bomba y bujía.
- **Motronic** (p. 63): suma el **encendido** dentro de la ECU, la **sonda lambda**, el **potenciómetro** de mariposa, el **actuador de ralentí**, la **bobina** y la **válvula de canister**. El manual destaca que reaprovechar los vapores de nafta es "la principal ventaja de la inyección" para bajar la contaminación.
- **Mono-Motronic** (p. 64): el **cuerpo de mariposa** (parecido a un carburador) integra el **regulador de presión, el inyector, el sensor de temperatura de aire y el actuador de ralentí**, que en el Motronic están repartidos por el motor.
- **K-Jetronic** (p. 71): **mecánica**, inyección **continua** con dosificador y **plato sonda**. No es pulsada.

> 💡 La diferencia clave entre Motronic y Mono-Motronic es la **cantidad de inyectores** (multipunto vs. monopunto). Entre LE y Motronic, en cambio, son **analógico vs. digital** y **solo nafta vs. nafta + encendido**.

---

## 4. Unidad de Control Electrónico (ECU / ECM / UCE)

Recibe señales de los sensores, las procesa según un **programa** y comanda los actuadores. También se la llama ordenador, centralita, ECM o computadora (manual p. 65).

**Estructura interna (de la entrada a la salida):**
```
sensores ──► [Adquisición + conversor A/D] ──► [Microprocesador] ──► [Drivers] ──► actuadores
  (V analógico)     (lo pasa a binario)         ▲   │  (calcula, compara)   (etapas de potencia)
                                                 │   ▼
                                    ROM · RAM · RAM stand-by · EEPROM ──► toma de diagnóstico (scanner)
```
- **Sección de adquisición y codificación:** **convertidores analógico-digital (A/D)**. La ECU es un procesador matemático que **no entiende voltajes variables**: necesita **código binario** (p. 70).
- **Microprocesador:** consulta las memorias, compara los datos con los preestablecidos (mapas) y gestiona los circuitos de mando.

**Memorias:**
- **ROM:** programa de funcionamiento; permanente, **no se borra** al quitar la batería.
- **RAM:** transición; guarda datos de entrada y códigos de avería. Parte **volátil** (se borra al quitar contacto) y **RAM stand-by** (guarda las adaptaciones —ralentí, mariposa, sonda lambda—; necesita batería permanente; si se corta, los parámetros **se ponen a cero** y se readaptan con el uso).
- **EEPROM:** se borra y reprograma eléctricamente; comunica las anomalías por la **toma de diagnóstico (scanner)**.
- **Drivers (etapas finales):** alimentan los actuadores (inyectores, ralentí, relé de bomba, electroválvulas).

| Memoria | ¿Se puede escribir? | ¿Qué pasa si desconecto la batería? |
|---|---|---|
| ROM | No (solo lectura, grabada de fábrica) | **Nada**: queda igual |
| RAM volátil | Sí | Se borra al pasar a **STOP** (sacar contacto) |
| RAM stand-by | Sí (adaptaciones) | **Se pone a cero** → ralentí y mezcla "re-aprenden" andando |
| EEPROM | Sí, eléctricamente (varias veces) | Las averías quedan. **Se borran con scanner** (en la mayoría de los casos) |

> 🔧 **Por qué importa en el taller:** después de **desconectar la batería, un fusible, un relé o el conector de la ECU**, el auto puede tener un **ralentí inestable** un rato. La RAM stand-by perdió las correcciones del actuador de ralentí, la posición de mariposa cerrada y el factor de corrección de la lambda (p. 66).

**Las 4 funciones básicas** (p. 68–69): **entrada** (señales de voltaje de sensores, botones, llave) → **procesamiento** (circuitos lógicos según el programa) → **almacenamiento** (memoria) → **salida** (voltaje hacia los actuadores).

**Comunicación con otras computadoras:** por la salida, la ECU se comunica con la de **transmisión automática**, la de **frenos ABS** y la de **suspensión**. Ejemplo del manual: la señal del **TPS** la usan la ECU de motor, la de freno y la de la caja automática (p. 69).

**Analógico vs. digital:** las primeras ECU eran analógicas. Hoy son **digitales** porque procesan más rápido (p. 70).

---

## 5. Clasificación de la inyección multipunto

| Tipo | Cómo inyecta | Circuitos ECU | Detalle |
|---|---|---|---|
| **Simultánea** | Todos los inyectores a la vez | 1 | La menos eficaz (condensa combustible). ~1980–1995 |
| **Agrupada (semisecuencial)** | Por pares de cilindros | 2 | 4 cil.: circuito 1 → cil. 1 y 4; circuito 2 → cil. 2 y 3 |
| **Secuencial** | Según el orden de encendido (ej. 1-3-4-2) | 1 por inyector | Mejor rendimiento y menos emisiones. Requiere **sensor de fase** |
| **Directa (GDI)** | Directo a la cámara de combustión | 1 por inyector | Mayor presión, más sensores, bomba especial |

> **Indirecta (en puerto):** inyecta **detrás de la válvula de admisión**. **Directa:** en la **cámara de combustión**.

**Detalles que toman en el examen** (manual p. 71–73):
- **Simultánea:** es la menos efectiva porque la nafta tiene que **esperar a que abra la válvula de admisión**, y entonces **se condensa en las lumbreras**. Los inyectores reciben **12 V** desde el **relé de inyección** (o un fusible), y la ECU les da **masa** por **un solo circuito**.
- **Agrupada:** en un 4 cilindros, el **circuito 1 maneja 1 y 4** y el **circuito 2 maneja 2 y 3**. Son los mismos pares que están juntos en el PMS.
- **Secuencial:** un **circuito por inyector**, y cada uno inyecta siguiendo el **orden de encendido 1-3-4-2**. Se la reconoce porque **tiene sensor de fase (CMP)**. Sin él, la ECU no puede distinguir si el cilindro 1 está en compresión o en escape, porque el cigüeñal da la misma señal cada 360°.
- **Directa:** tiene **circuitos independientes**, **más presión** de combustible, **más sensores** y **otro tipo de bomba**.
- La **inyección alternada** aparece en la lista del manual pero **no se describe**.

---

## 6. Sistema de alimentación de combustible

**Recorrido** (manual p. 74–81):
```
            ┌─────────────── retorno ◄──── [Regulador de presión] ◄── vacío del múltiple
            ▼                                       ▲
[Tanque] ─► [Bomba] ─► [Filtro 10 µm] ─► [Rampa / riel] ─► Inyectores (×4, en paralelo)
   │       (alivio +                                         ▲ masa pulsada desde la ECU
   │        antirretorno)   [Relé de bomba] ◄── ECU (tras la señal del CKP)
   │                        [Interruptor de inercia] (N.C.) en serie con la bomba
   └─ vapores ─► [Canister] ─► electroválvula N.C. ─► múltiple de admisión
```
La ECU **activa el relé de bomba después de recibir la señal del sensor de posición de cigüeñal**. Así, si el motor no gira, no se bombea nafta (p. 74). La lista del manual incluye también un **sensor de presión diferencial OBD II** (del tanque/canister).

| Componente | Función / dato clave |
|---|---|
| **Bomba de combustible (rodillos)** | Motor + bomba en una carcasa; el combustible la **refrigera y lubrica**. Rodillos que cierran por fuerza centrífuga. Tiene **válvula de alivio** (abre a **6–7 bar / 64–85 psi**) y **válvula antirretorno** (mantiene presión residual → arranque en caliente). |
| **Filtro de combustible** | Papel, poro **10 micras**, superficie **~2 m²**. Cambio **~50.000 km**. Respetar el **sentido de la flecha**. |
| **Rampa de inyectores** | Riel común que **homogeniza la presión** para los 4 inyectores (conectados **en paralelo**). |
| **Inyectores** | Electroválvulas **normalmente cerradas**. La ECU controla el **tiempo de apertura** (ms). El caudal depende del tiempo que el solenoide está activo. |
| **Regulador de presión** | Membrana + muelle tarado + **tubo de vacío** al múltiple. Mantiene **constante la diferencia de presión** en los inyectores. En ralentí (vacío 0,5 bar) la presión de trabajo **baja 0,5 bar**. |
| **Interruptor de inercia** | Seguridad: en un choque, una **esfera se suelta de un imán** y **abre el circuito (N.C.)** de la bomba. Se rearma presionándolo. |
| **Relé de bomba** | La ECU lo energiza unos segundos al dar contacto (presuriza) y lo mantiene con el motor en marcha. Salida de **12 V negativo**. |
| **Canister** | Depósito de **carbón activo** que retiene los **vapores del tanque**. La ECU abre una **electroválvula (N.C.)** y el **vacío del múltiple** succiona los vapores para quemarlos. |

**Cómo funciona el regulador, paso a paso** (p. 78):
1. La nafta entra a la **cámara inferior**. El retorno está cerrado por el elemento de cierre, así que **sube la presión**.
2. Cuando la fuerza de la nafta sobre la **membrana** iguala a la del **resorte tarado**, el elemento se corre y **deja volver** nafta al tanque. Esa es la **presión del sistema**.
3. Si el motor consume más o la bomba manda más, simplemente vuelve **menos o más** nafta al tanque, y la presión **no cambia**.
4. El **tubo de vacío** compensa el múltiple: en **ralentí (vacío de 0,5 bar)** la presión de trabajo **baja 0,5 bar**, porque el vacío ayuda a abrir el retorno. Así la **diferencia de presión a través del inyector queda constante**, y la cantidad de nafta depende **solo del tiempo de inyección**.

**Válvula de alivio, causas típicas de que abra** (p. 76): cuando **no hay retorno** la presión sube hasta **6–7 bar (64–85 psi)** y la válvula descarga al tanque. Pasa con **regulador obstruido, retorno obstruido o filtro obstruido**.

**Válvula de retención (antirretorno)** (p. 75): al parar el motor, un **resorte** la cierra y queda **presión residual** en el circuito. Esto **evita burbujas de vapor** con el motor caliente y permite un **arranque instantáneo**.

**Inyector por dentro** (p. 77): sello de goma superior, **filtro fino**, conector, **bobina**, **aguja** y sello inferior. Se monta en el riel con **anillos de goma** y la nafta entra **por arriba**. Como el orificio está **calibrado** y la presión **regulada**, el caudal depende **solo del tiempo que el solenoide está activado**.
> 🧪 *Dato general de taller (no figura en el manual):* la presión de línea típica de una multipunto con retorno ronda los **3 bar**. La resistencia de bobina de un inyector de alta impedancia es de unos **12–16 Ω**.

---

## 7. Sensores (detalle)

### De temperatura
- **ECT (temp. motor/refrigerante):** **NTC**. La ECU ajusta mezcla, tiempo de inyección y encendido. Se ubica **antes del termostato**. También activa el electroventilador.
- **IAT (temp. aire admisión):** **NTC**. Corrige el tiempo de inyección según la **densidad del aire** (oxígeno disponible). Puede venir combinado con MAP/MAF/VAF.

### De carga / aire
- **TPS (posición de mariposa):** **potenciómetro**. En reposo, señal de **décimas de voltio**; a plena apertura, cercana al **voltaje de referencia**. Informa posición, velocidad y sentido → estabiliza ralentí, corta inyección en desaceleración (**cut-off**) y enriquece en aceleración.
  - **TPS Bosch de doble pista:** pista 1 hasta **24°**, pista 2 de **~22° a 90°**. Estos vehículos **no llevan MAP**.
- **MAP (presión absoluta del múltiple):** chip de silicio que cambia su resistencia con la presión. Refleja la **carga del motor**. Voltaje **alto** con presión alta (contacto y motor apagado / acelerón); voltaje **bajo** en desaceleración con mariposa cerrada. Conectado por manguera de vacío. Versión **digital** entrega impulsos y mide la presión atmosférica (corrige por altitud).
- **MAF (masa de flujo de aire):** resistencia (**hilo caliente**) calentada a **~200 °C** que se enfría con el aire aspirado. Versión **película caliente** (~**180 °C**), después del filtro y antes de la mariposa: **más aire → más enfriamiento → más voltaje**.
- **VAF (volumen de flujo de aire / caudalímetro):** aleta-sonda empujada por el aire contra un **resorte**; mueve un **potenciómetro** (relación **logarítmica**). Puede incluir el **interruptor de la bomba** y un tornillo de ralentí calibrado.

### De oxígeno / mezcla
- **Sonda lambda (λ):** cerámica de **óxido de circonio** recubierta de **platino**. Genera tensión según la **diferencia de O₂** entre el escape y el aire. Objetivo: mantener **λ = 1** (relación estequiométrica **14,7 : 1**). Funciona fiable **desde ~350 °C** (por eso las modernas son **calefaccionadas / HEGO**).
  - **Mucho O₂ en escape → voltaje BAJO → mezcla POBRE → la ECU enriquece.**
  - **Poco O₂ en escape → voltaje ALTO → mezcla RICA → la ECU empobrece.**
  - Corrige **30 a 40 veces por minuto**. Cables: blanco, gris, negro.
  - **OBD II:** dos sondas — **pre-catalizador** (calcula la mezcla) y **post-catalizador** (verifica que el catalizador funcione).
- **Potenciómetro de mezcla CO** (manual p. 96): en autos **sin sonda ni catalizador**. Alimentado con **5 V** desde la ECU (referencia, masa y retorno). Referencia de fábrica **2,5 V**: **> 2,5 V = rica**, **< 2,5 V = pobre**. Se controla en cada service porque se desajusta con el desgaste del motor y de la electrónica. Se regula con **voltímetro** o con el **analizador de gases**, que lee **HC (ppm), CO, CO₂, O₂ y λ**.

### De posición / régimen
- **CKP (posición de cigüeñal / PMS):** da las **RPM**. Tres tipos:
  - **Inductivo:** rueda fónica de **58 dientes + 2 suprimidos** (el hueco marca el PMS). Genera **tensión alterna** cuya amplitud crece con las RPM. Entrehierro **1 a 1,5 mm**.
  - **Efecto Hall:** interruptor; 3 cables (alimentación 5 o 12 V, masa, señal). Rotor con tantas ventanas como cilindros.
  - **Óptico:** LED **infrarrojo** + fotodiodo; disco ranurado (4 ranuras → 4 señales en un motor de 4 cil.).
- **CMP (sensor de fase / árbol de levas):** identifica el cilindro en **compresión**. Tipo Hall; la ventana se enfrenta **una vez cada 2 vueltas de cigüeñal** (cil. N°1 a 58° antes del PMS). Necesario para la **inyección secuencial**. Señal cuadrada.

### Otros sensores
- **Detonación (knock):** piezoeléctrico; detecta el **picado** (combustión anormal). 4 cil. en línea → 1 sensor; 6 cil. → 2; 8 cil. → 2+.
- **VSS (velocidad):** tipo Hall en la caja; **pulsos rectangulares** cuya **frecuencia** crece con la velocidad (detenido = sin pulsos).
- **BARO (presión atmosférica):** dentro de la ECU; corrige por altitud y presión de turbo. Si falla → **modo de emergencia**.
- **APP (pedal de acelerador):** **dos potenciómetros** (plausibilidad) en autos con acelerador electrónico (ETC), sin cable.
- **Freno / embrague:** interruptores; desactivan el **programador de velocidad** (crucero). El de embrague reduce brevemente la inyección al cambiar.
- **Temp. EGR:** NTC; diagnostica la EGR (temp. alta → válvula pegada abierta; temp. baja → no abre).
- **Presión de A/A:** piezorresistivo; saca de servicio el A/A si la presión está fuera de rango.

---

## 8. Actuadores (detalle)

| Actuador | Función / dato clave |
|---|---|
| **Actuador de mariposa (ETC)** | Motor CC con reducción; en reposo la mariposa queda a **~5°**. Se controla por **PWM** (frecuencia fija; lo que varía es el tiempo ON). Lleva **potenciómetro doble** de posición. |
| **Válvula de ralentí** | Motor eléctrico que regula aire suplementario. **3 pines:** central a **12 V**, los otros dos reciben **pulsos de masa** de la ECU. |
| **Válvula de aire adicional** | Solenoide que abre un paso de aire junto a la mariposa; la ECU envía **pulsos de masa** de frecuencia variable. |
| **Motor paso a paso** | 2 bobinados en el estator + rotor magnético + reductor tornillo. Regula el aire de ralentí. Resolución **~0,04 mm/paso**, recorrido máx. **200 pasos = 8 mm**. |
| **Regulador de ralentí CC (IAC)** | Motor CC de 12 V + microinterruptor (cierra en ralentí → activa **cut-off** y regulación). Apertura máx. de la mariposa **~18°**. |
| **Válvula EGR** | Recircula gases de escape para **bajar la temperatura de combustión** y reducir los **NOx**. Controlada por la ECU vía electroválvula y vacío. |

### Para qué existe el control de ralentí
En ralentí la mariposa está **cerrada**, pero el motor necesita un aire mínimo **Q₀** para vencer sus rozamientos internos. Ese Q₀ pasa **por debajo de la mariposa** y queda fijado en fábrica con un **tapón de inviolabilidad** (p. 110–111). Cuando aparece una carga (**motor frío, A/C, dirección hidráulica, caja automática**, consumidores eléctricos), hace falta un **aire extra Q** para que las vueltas no caigan. Ese Q lo dosifica la ECU a través de un **bypass** de la mariposa, o moviendo directamente la mariposa. Para decidir usa sobre todo las **RPM** y la **temperatura del refrigerante**.

| Actuador | Cómo lo comanda la ECU | Movimiento / dato clave |
|---|---|---|
| **Válvula de ralentí rotativa** (p. 109) | Pin **central a 12 V**. La ECU da **pulsos de masa** a uno u otro pin lateral | Un motorcito gira **hacia un lado o el otro** y abre o cierra el paso de aire suplementario |
| **Válvula de aire adicional** (p. 109) | **Pulsos de masa de frecuencia variable** sobre un solenoide | El vástago se corre. Sin corriente, un **resorte** la deja abierta o cerrada según el diseño |
| **Motor paso a paso** (p. 110–111) | Pulsos a **2 bobinados** del estator. Rotor de imanes permanentes | Mecanismo **tornillo / tuerca**: rotación → avance lineal de **~0,04 mm/paso**. **~200 pasos = 8 mm** = caudal máximo Q₂ (Q₃ con caja automática) |
| **Regulador CC Bosch monopunto** (p. 113–114) | Motor **CC de 12 V**. La ECU **invierte la polaridad** para cambiar el sentido de giro (terminales **32 y 34**) | Tornillo sin fin + rueda helicoidal + vástago que empuja la **leva de la mariposa**: hasta **~18°** de apertura |

**Microinterruptor de ralentí (monopunto):** está **cerrado con el pedal suelto**. Ese cierre pone a masa el **terminal 8** de la ECU, que activa la doble función de **cut-off** (corte en desaceleración) y de **regulación del ralentí**. La ECU vuelve a inyectar después del cut-off según **RPM y temperatura del refrigerante**.

---

## 9. Convertidor catalítico de tres vías (manual p. 114–117)

**Historia:** el control legal de emisiones arrancó en **California en los años 60**. Primero aparecieron los catalizadores de **oxidación (2 vías: CO y HC)**. Al sumar el control de **NOx** nació el de **3 vías**, y a mediados de los 80 toda la flota nafta de EE. UU. lo usaba. Europa (Rover, VW, Peugeot, Citroën) probó primero con **motores de mezcla pobre**.

- **Ubicación:** en el escape, cerca del múltiple, **después de la sonda de oxígeno**. Los motores **en V** suelen llevar **2**. Algunos llevan una **sonda post-catalizador** para vigilar su eficiencia.
- **Estructura:** monolito tipo **panal de abeja**, generalmente **cerámico** (también hay metálicos). Tiene una capa de **alúmina (Al₂O₃)** porosa que **aumenta la superficie activa**, y sobre ella los metales nobles: **platino, paladio y rodio** (a veces rutenio e iridio). Por eso **cuesta caro** y **no se repara**.
- **Química:**
  - **Oxidación:** CO → **CO₂**; HC → **CO₂ + H₂O**. La hace sobre todo el **platino** (con mezcla estequiométrica o rica).
  - **Reducción:** NOx → **N₂** (se le saca el oxígeno). La hace el **rodio**.
  - Un **catalizador** acelera la reacción **sin cambiar él mismo**.
- **Temperaturas:**

| Temperatura | Qué pasa |
|---|---|
| < 250–300 °C | **No convierte**: la reacción necesita gases por encima de 250–300 °C |
| 300–400 °C | Escape típico; a plena carga el escape llega a **900 °C** |
| **400–800 °C** | **Banda de trabajo** para mantener alta eficiencia mucho tiempo (lo típico es 500–600 °C) |
| 800–1000 °C prolongado | **Envejecimiento térmico**: los metales y el washcoat se aglomeran (sinterizan) |
| **~1400 °C** | **El sustrato se derrite**. Lo provoca una **contraexplosión** o un fallo de encendido: la nafta cruda se quema en el catalizador |

- **Enemigos:** la **nafta con plomo** lo **envenena** (todos los autos desde el **modelo 1996** lo traen y exigen nafta sin plomo). También las **fallas del sistema de mezcla o de encendido**, que lo **obstruyen** total o parcialmente, y las **vibraciones** del escape.
- **No funciona solo:** necesita que el sistema de control de emisiones (sonda lambda + ECU) mantenga **λ ≈ 1**.
> ⚠️ El manual dice que un convertidor "en condiciones ideales" dura "unos **10000 km**". Casi seguro es una errata (*dato general de taller:* un catalizador sano dura más de 100.000 km). Si toman la pregunta textual, responder lo que dice el manual.

---

## 10. Recirculación de gases de escape — EGR (manual p. 118–120)

- **Origen del problema:** el aire tiene un **70 % de nitrógeno**, que es inerte en frío. Cuando **sube la temperatura de la cámara**, el N₂ se combina con el oxígeno y forma **NOx**, un contaminante urbano importante. La relación ideal sigue siendo **14,7:1**. Las mezclas más pobres ahorran nafta pero **calientan** la combustión y pueden dañar el motor.
- **Qué hace la EGR:** devuelve una parte del **gas de escape** (inerte, ya quemado) a la admisión. La mezcla se vuelve "más fluida" y quema a **menor temperatura**, así que se forma **menos NOx** y la economía mejora. Se sacrifica un poco de rendimiento.
- **Dos misiones:** 1) **reducir los gases contaminantes** que salen; 2) **bajar la temperatura de combustión**.
- **Mando:** la **ECU** la abre a través de una **electroválvula** que deja pasar el **vacío** a la válvula EGR.
- **Historia:** las primeras de los **70** funcionaban solo con el vacío del múltiple y andaban mal (los dueños las anulaban). Con la ECU dejaron de afectar la manejabilidad.
- **Diagnóstico con el sensor de temperatura EGR (NTC)** (p. 108): **muy caliente → válvula abierta todo el tiempo**; **muy fría → no está abriendo**.
- Trabaja junto a la **válvula PCV** (ventilación del cárter) en la limpieza del aire.
> *Dato general de taller:* la EGR no se abre en **ralentí** (el motor tironea) ni a **plena carga** (se pierde potencia). Trabaja en **carga parcial con el motor caliente**.

---

## 11. Encendido DIS — sin distribuidor (manual p. 121–122)

- **DIS = Direct Ignition System**: **no tiene distribuidor**, así que desaparecen las piezas mecánicas que se gastan y la **interferencia eléctrica** del distribuidor.
- **Ventajas:** la bobina tiene **más tiempo para cargar** su campo magnético (mejor chispa); las bobinas van **cerca de las bujías o encima de ellas** (cables más cortos o ninguno); el **avance** se ajusta con **más precisión**.
- **Chispa perdida (bobina doble):** cada extremo del secundario va a una bujía de un **par de trabajo**, es decir, dos cilindros que llegan **juntos al PMS** pero en tiempos distintos:
  - uno está **terminando la compresión** → **chispa útil**;
  - el otro está **terminando el escape** (cruce de válvulas) → **chispa perdida**.
  - Las dos chispas saltan **a la vez** y con **sentidos opuestos**: en una bujía la corriente va del **electrodo central a masa** y en la otra, **al revés**.
  - **Pares:** 4 cil. → **1-4 y 2-3**; 6 cil. → **1-6, 2-5 y 3-4**. Solo sirve para motores con **número par** de cilindros.
  - Al principio se lo llamó encendido **estático** (sin distribuidor, todavía con cables de alta).
- **Encendido estático integral (bobina sobre bujía, COP):** **una bobina por bujía**, sin cables de alta. Es de **descarga capacitiva** y genera **más de 40 kV**. La ECU corrige el **avance inicial** según la **carga del motor**.

---

## 12. Mapa del manual de Inyección (págs. impresas)

| Págs. | Tema | En este resumen |
|---|---|---|
| 1–43 | Electricidad básica, relés, fusibles, semiconductores, transistores | Ver `Resumen-Electricidad-Basica.md` |
| 44–47 | Virtudes de sensores, termistor, potenciómetro, interruptores, temporizadores | §1 |
| 48–53 | Ondas y multímetro digital | §1 |
| 54–61 | Historia de la inyección | §2 |
| 62–64 | LE-Jetronic, Motronic, Mono-Motronic | §3 |
| 65–70 | ECU | §4 |
| 71–73 | Clasificación de la inyección | §5 |
| 74–81 | Sistema de combustible | §6 |
| 82–108 | Sensores | §7 (y `web/guia/sensores-*.html`) |
| 109–114 | Actuadores de ralentí | §8 |
| 114–117 | Catalizador | §9 |
| 118–120 | EGR | §10 |
| 121–122 | Encendido DIS | §11 |
