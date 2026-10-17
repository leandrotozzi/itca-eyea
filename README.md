# ⚡ Electricidad Automotriz e Inyección — Apuntes de Estudio (ITCA)

Material de estudio elaborado a partir de los manuales de **Electricidad del Automóvil** e **Inyección Electrónica Nafta** (Ediciones Morcansa / ITCA), los Trabajos Prácticos del curso y documentación técnica de fabricantes. Incluye resúmenes teóricos, guías pedagógicas, exámenes y fichas de repaso.

> ⚠️ **Material de estudio no oficial**, hecho por un alumno. No reemplaza los manuales ni lo que diga el docente: ante cualquier duda, manda el manual o la clase.

🌐 **Online:** [leandrotozzi.github.io/itca-eyea](https://leandrotozzi.github.io/itca-eyea/) — Guía Visual + [test interactivo](https://leandrotozzi.github.io/itca-eyea/test-electricidad.html).

🖥️ **Uso local:** abrir [`web/guia/index.html`](web/guia/index.html) (Guía Visual) o [`web/test-electricidad.html`](web/test-electricidad.html) (test interactivo) con doble clic en el navegador.

La materia se divide en dos partes:
- **1ª parte — Electricidad del automóvil:** electricidad básica, encendido, arranque, alternador y bobinas.
- **2ª parte — Inyección electrónica nafta:** sensores, actuadores, ECU, sistema de combustible y gestión del motor.

---

# 🟦 1ª PARTE — Electricidad del Automóvil

### 📗 Resúmenes teóricos — [`resumenes/`](resumenes/)
| Documento | Contenido |
|---|---|
| [Resumen-Electricidad-Basica.md](resumenes/Resumen-Electricidad-Basica.md) | Fundamentos: electricidad, magnitudes, leyes (Ohm, Kirchhoff), magnetismo, instrumentos, baterías, relés, conductores/aislantes, semiconductores. |
| [Resumen-Electricidad-Automotriz.md](resumenes/Resumen-Electricidad-Automotriz.md) | Sistema de encendido, motor de arranque y alternador. Incluye sección de **Preguntas y Respuestas** ampliadas. |
| [Resumen-Bobinas-Encendido.md](resumenes/Resumen-Bobinas-Encendido.md) | Bobinas de encendido y módulos: principio, tipos (COP, chispa doble, casete), valores, resina asfáltica (Bosch), nomenclatura de terminales y prueba de banco (HELLAMEX). |

### 🔧 Trabajos Prácticos — [`trabajos-practicos/`](trabajos-practicos/)
| Documento | Contenido |
|---|---|
| [Guia-Pedagogica-TPs.md](trabajos-practicos/Guia-Pedagogica-TPs.md) | Explicación conceptual para entender el **por qué** de cada TP (encendido, alternador, arranque). |
| [Resumen-TPs.md](trabajos-practicos/Resumen-TPs.md) | Resumen teórico + **valores de medición clave** + preguntas y respuestas de los 3 TPs. |

### 📝 Estudio para examen — [`estudio/`](estudio/)
| Documento | Contenido |
|---|---|
| [Examen-Electricidad-Automotriz.md](estudio/Examen-Electricidad-Automotriz.md) | 511 preguntas de opción múltiple y V/F de **las dos partes** (1ª: 1–323; 2ª: 324–511, inyección completa) con respuestas y breve explicación de cada una. |
| [Estudio-Preguntas-Cortas.md](estudio/Estudio-Preguntas-Cortas.md) | 80 fichas de repaso rápido. |
| [Preguntas-Bobinas-Encendido.md](estudio/Preguntas-Bobinas-Encendido.md) | 45 fichas sobre bobinas de encendido, módulos y prueba de banco. |

### 🖥️ Test interactivo — [`web/`](web/)
| Archivo | Contenido |
|---|---|
| [web/test-electricidad.html](web/test-electricidad.html) | **Test multiple choice interactivo** (abrir con doble clic en el navegador). Diseño estilo tablero, tema claro/oscuro y logo ITCA. Se responde **una pregunta a la vez con el teclado (1–4)** y auto-avanza; el mouse sirve para elegir y para corregir (volver atrás con ← o los puntos). Elegí **10, 20, 40, 60, 80, 100 o todas** las preguntas, por tema o con el filtro especial **⚡ Solo valores de resistencia** (junta todas las preguntas de valores en Ω/kΩ de todos los temas). Al **Calificar** muestra el puntaje y un review filtrable a **"Solo incorrectas"** con la respuesta correcta y la explicación de cada una. Los temas están **agrupados por parte** (1ª Electricidad / 2ª Inyección), con la opción **▸ Toda la 1ª parte** o **▸ Toda la 2ª parte**. Lleva un **historial permanente de errores** (guardado en el navegador) con desglose por tema y un botón para **practicar solo las pendientes**. 511 preguntas (188 de inyección). |

### 🎨 Guía Visual — [`web/guia/`](web/guia/)
Resúmenes de la 1ª y 2ª parte en **HTML con diagramas en bloques (SVG) e interactivos**, misma identidad que el test, tema claro/oscuro, autocontenidos/offline. Abrir [`web/guia/index.html`](web/guia/index.html).
| Módulo | Esquemas interactivos |
|---|---|
| [Electricidad básica](web/guia/electricidad-basica.html) | átomo/ion, onda CC/CA, calculadora de Ohm, serie/paralelo, densímetro, relé y diodo. |
| [Sistema de encendido](web/guia/encendido.html) | bobina *cargar→cortar→chispa*, luz de platinos ↔ dwell, avance centrífugo/vacío, captor Hall, evolución. |
| [Arranque y alternador](web/guia/arranque-alternador.html) | solenoide en 3 fases, alternador trifásico, rectificación CA→CC, lámpara testigo, relación piñón/corona. |
| [Bobinas y módulos](web/guia/bobinas.html) | calculadora de chispas/min, tipos de bobina, chispa perdida, resina vs aceite, prueba de banco. |
| [Despiece interactivo](web/guia/despiece.html) | **partes** del motor de arranque, alternador, distribuidor y bobina de encendido: tocá cada pieza y ves qué es y qué función cumple (4 cortes SVG numerados). |
| [Sensores: cómo funcionan y cómo se miden](web/guia/sensores-funcionamiento.html) | **2ª parte · el libro de sensores:** todo el tema de sensores explicado desde cero. Fundamentos (señales, ondas, tipos de sensor, multitester), mapa del motor y ~30 sensores por familia (temperatura, carga MAP/MAF/VAF/BARO, mariposa, giro CKP/CMP, lambda, detonación, acelerador electrónico, VSS, freno, embrague, A/C, presostato). Cada uno con qué es, dónde va, cómo funciona, señal, fallas, pines y medición, lo que dice el manual y repaso tipo examen; simuladores y osciloscopio. |
| [ECU y combustible](web/guia/ecu-combustible.html) | **2ª parte · resto del manual:** la ECU por dentro (A/D, ROM/RAM/stand-by/EEPROM, botón *desconectar batería*), LE-Jetronic vs Motronic vs Mono-Motronic, diagrama de 720° de la inyección simultánea/agrupada/secuencial (y por qué hace falta el CMP), simulador del circuito de nafta (vacío del regulador, retorno obstruido → alivio 6–7 bar, choque → inercia, cebado de bomba) y ancho de pulso / ciclo de trabajo del inyector. |
| [Actuadores y emisiones](web/guia/actuadores-emisiones.html) | **2ª parte · resto del manual:** motor paso a paso de ralentí (pasos → mm → aire), regulador de CC del monopunto, catalizador de 3 vías (zonas de temperatura, ventana λ, plomo), EGR con diagnóstico por temperatura, encendido DIS de chispa perdida animado, y onda cuadrada + multímetro + potenciómetro de CO. |
| [Sensores por motor](web/guia/sensores-motores.html) | **2ª parte · competencia:** método en 4 pasos, regla de los cables, actuadores que no son sensores y mapa en bloques de 6 motores (Agile 1.4, Renault K7M, VW EA111, Fiat Fire 1.4, Peugeot TU, Ford Rocam) con ubicación, pines y cómo medir cada sensor. Comparativa, el porqué de cada diseño, quiz y hoja imprimible. |
| [Ayuda rápida (celular)](web/guia/competencia-movil.html) | **2ª parte · competencia en el celular:** elegís el motor y ves cada sensor con ubicación, pines, cómo medirlo y valores. |

---

# 🟩 2ª PARTE — Inyección Electrónica Nafta

### 📗 Resúmenes — [`resumenes/`](resumenes/)
| Documento | Contenido |
|---|---|
| [Resumen-Inyeccion-Nafta.md](resumenes/Resumen-Inyeccion-Nafta.md) | Sensores y actuadores, sistema de combustible, ECU, sonda lambda, sistemas Bosch (Le/Motronic), clasificación de la inyección, catalizador. |
| [Guia-Pedagogica-Inyeccion.md](resumenes/Guia-Pedagogica-Inyeccion.md) | Explicación narrativa para entender **cómo piensa** el sistema: el lazo sensores→ECU→actuadores. |

### 📝 Estudio para examen — [`estudio/`](estudio/)
| Documento | Contenido |
|---|---|
| [Examen-Electricidad-Automotriz.md](estudio/Examen-Electricidad-Automotriz.md) → sección **2ª PARTE** | 188 preguntas de inyección (preguntas 324–511): sensores, señales y ECU, sistemas Bosch y clasificación, combustible, actuadores y ralentí, catalizador y EGR, encendido DIS. También se practican en el test web filtrando por **▸ Toda la 2ª parte**. |
| [Preguntas-Inyeccion-Cortas.md](estudio/Preguntas-Inyeccion-Cortas.md) | 90 fichas de repaso rápido. |

---

## 📄 Material fuente (privado, no versionado)
Los PDFs originales (manuales de Electricidad e Inyección, TPs y catálogos de bobinas) son material privado del curso: **no se suben al repo**. Se guardan localmente en `material-fuente/` (ignorado por git) con esta estructura:
- `manual/` — `Electricidad MANUAL.pdf`, `Inyeccion Nafta MANUAL.pdf`.
- `trabajos-practicos/` — TPs de Encendido, Alternador y Motor de arranque.
- `bobinas-catalogos/` — catálogos de bobinas y módulos.

## 🛠️ Build y publicación
- `web/test-electricidad.html` es **generado**: tras editar `estudio/Examen-Electricidad-Automotriz.md` correr `python3 web/build/build.py` (valida y regenera). Detalle en [`web/build/README.md`](web/build/README.md).
- Cada push a `main` dispara [`.github/workflows/pages.yml`](.github/workflows/pages.yml): regenera el test, arma el sitio (`web/guia/` + test) y lo publica en **GitHub Pages**.

## 📕 Fe de erratas del manual

Algunos datos del manual Morcansa no coinciden con la práctica real. El material y el test **respetan el dato del manual** (es lo que se evalúa) y lo aclaran en la explicación.

| Tema | Dice el manual | Valor real / aclaración |
|---|---|---|
| Resistividad del aluminio | 0,27 Ω·mm²/m | ~0,028 |
| Verificación de potencia del arranque | cable de 1 Ω | seguramente 1 mΩ (1 Ω limitaría a ~12 A) |
| Velocidad máx. continua del alternador | 2000 rpm | ~12.000–18.000 rpm (2000 rpm es el régimen de prueba) |
| Bobina sobre bujía (COP) | "descarga capacitiva" | es inductiva |
| Conmutación de la sonda lambda | 30–40 veces por minuto | varias veces por segundo |
| Presión de la válvula de alivio | 6–7 bar = 64–85 psi | 6–7 bar ≈ 87–102 psi |
| Nitrógeno en el aire | 70 % | ~78 % |
| Corriente del motor de arranque | 400–500 A (el TP dice 120–400 A) | depende del motor; respondé según la fuente que pregunten |
| Relación piñón/corona | 1:10 a 1:15 (el TP dice 15:1 a 20:1) | es la misma idea expresada al revés |

## 🧠 Cómo usar este material

1. **Para aprender de cero:** empezá por los resúmenes teóricos de cada parte.
2. **Para entender la lógica:** leé las guías pedagógicas (TPs e inyección).
3. **Para repasar antes del examen:** usá las fichas cortas y los exámenes de opción múltiple.
4. **Como referencia de taller:** los valores de medición de los TPs y los resúmenes técnicos.

> **Estado:** las dos partes de la materia están completas (resúmenes, guía visual y test). Para la 2ª parte: resumen → guía visual (sensores, ECU y combustible, actuadores y emisiones) → test con "▸ Toda la 2ª parte".
