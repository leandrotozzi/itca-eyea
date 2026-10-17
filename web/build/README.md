# Build del test interactivo

El archivo [`../test-electricidad.html`](../test-electricidad.html) es **generado**.
No se edita a mano: se regenera desde la fuente con este pipeline.

## Fuente única de verdad
- **Preguntas:** [`estudio/Examen-Electricidad-Automotriz.md`](../../estudio/Examen-Electricidad-Automotriz.md)
- **Esqueleto (HTML/CSS/JS):** [`template.html`](template.html) (con placeholders `__DATA__` y `__LOGO__`)
- **Logo:** [`logo.png`](logo.png) (se embebe como data URI → el HTML final es autocontenido/offline)

## Regenerar
```bash
python3 web/build/build.py
```
`build.py` parsea el examen a JSON, valida (4 opciones en opción múltiple —o 2 en
verdadero/falso—, respuesta y explicación por pregunta) y escribe
`web/test-electricidad.html` con las preguntas y el logo embebidos.

## Agregar preguntas
1. Editar `estudio/Examen-Electricidad-Automotriz.md`. Formato:
   ```
   **N. enunciado**
   a) ...
   b) ...
   c) ...
   d) ...

   **Respuesta: b) ...**

   > 💡 explicación breve (se muestra al fallar)
   ```
   Para una pregunta de **verdadero/falso** es el mismo formato pero con solo 2
   opciones (la web las renderiza y el teclado `1`/`2` funcionan solos):
   ```
   **N. afirmación a evaluar**
   a) Verdadero
   b) Falso

   **Respuesta: b) Falso**

   > 💡 explicación breve
   ```
2. Para que una pregunta nueva quede **agrupada en un tema existente** en el filtro
   del test, ponerla bajo un header `## Bloque N — <Tema exacto> (rango)`; el parser
   toma el nombre del tema hasta el primer `" ("`.
   - **Parte de la materia:** las preguntas son de la **1ª parte** hasta el header de nivel 1
     `# 🟩 2ª PARTE — …`; todo lo que sigue es **2ª parte** (campo `parte` en el JSON). El
     filtro del test agrupa los temas en `<optgroup>` por parte y ofrece "Toda la 1ª/2ª parte".
     Las preguntas de inyección van **debajo** de ese header.
3. Correr `python3 web/build/build.py`.
4. Actualizar el conteo en el encabezado del examen si corresponde (la web toma la
   cantidad de forma dinámica, no hace falta tocarla).

## Cambiar el diseño / la lógica del test
Editar `template.html` (es HTML/CSS/JS con los placeholders) y volver a correr `build.py`.
