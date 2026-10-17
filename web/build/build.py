#!/usr/bin/env python3
"""
Genera web/test-electricidad.html (test interactivo) a partir de:
  - estudio/Examen-Electricidad-Automotriz.md   (fuente única de las preguntas)
  - web/build/template.html                     (esqueleto HTML/CSS/JS con __DATA__ y __LOGO__)
  - web/build/logo.png                           (logo ITCA, se embebe como data URI)

Uso (desde la raíz del repo o desde cualquier lado):
    python3 web/build/build.py

Cada pregunta en el Markdown tiene este formato:
    **N. enunciado**
    a) ...
    b) ...
    c) ...
    d) ...

    **Respuesta: b) ...**

    > 💡 explicación breve (se muestra al fallar)

También admite preguntas de verdadero/falso: mismas reglas pero con SOLO 2 opciones
    a) Verdadero
    b) Falso
(la web renderiza y el teclado 1/2 funcionan solos porque son dinámicos).

Los bloques se agrupan por tema con headers `## Bloque N — <Tema> (rango)`.
Reusar EXACTAMENTE el nombre de un tema existente hace que el filtro del test
agrupe las nuevas preguntas dentro de ese tema (el parser toma el texto hasta " (").
"""
import re, json, base64, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
EXAM = os.path.join(ROOT, "estudio", "Examen-Electricidad-Automotriz.md")
TEMPLATE = os.path.join(ROOT, "web", "build", "template.html")
LOGO = os.path.join(ROOT, "web", "build", "logo.png")
OUT = os.path.join(ROOT, "web", "test-electricidad.html")

LETTERS = {"a": 0, "b": 1, "c": 2, "d": 3}


def parse_questions(md_path):
    lines = open(md_path, encoding="utf-8").read().split("\n")
    questions, cur_block, q, parte = [], "", None, 1
    for raw in lines:
        s = raw.strip()
        if re.match(r"^#\s.*2ª PARTE", s):
            parte = 2
            continue
        mb = re.match(r"^##\s*Bloque\s*\d+\s*—\s*(.+?)\s*\(", s)
        if mb:
            cur_block = mb.group(1).strip()
            continue
        mq = re.match(r"^\*\*(\d+)\.\s*(.+?)\*\*$", s)
        if mq:
            if q:
                questions.append(q)
            q = {"n": int(mq.group(1)), "bloque": cur_block, "parte": parte,
                 "pregunta": mq.group(2).strip(), "opciones": [], "correcta": None, "nota": ""}
            continue
        if q is not None:
            mo = re.match(r"^([a-d])\)\s*(.+)$", s)
            if mo and q["correcta"] is None and len(q["opciones"]) < 4:
                q["opciones"].append(mo.group(2).strip())
                continue
            mr = re.match(r"^\*\*Respuesta:\s*([a-d])\)\s*(.*?)\*\*(.*)$", s)
            if mr:
                q["correcta"] = LETTERS[mr.group(1)]
                m2 = re.search(r"—\s*(.+)$", mr.group(3) or "")
                if m2:
                    q["nota"] = m2.group(1).strip()
                continue
            mn = re.match(r"^>\s*💡\s*(.+)$", s)
            if mn and q["correcta"] is not None:
                q["nota"] = mn.group(1).strip()
                continue
    if q:
        questions.append(q)
    return questions


def validate(qs):
    errs = []
    for q in qs:
        if len(q["opciones"]) not in (2, 4):
            errs.append(f'Q{q["n"]}: {len(q["opciones"])} opciones '
                        f'(deben ser 4 en opción múltiple, o 2 en verdadero/falso)')
        if q["correcta"] is None or not (0 <= q["correcta"] < len(q["opciones"])):
            errs.append(f'Q{q["n"]}: correcta inválida')
        if not q["nota"]:
            errs.append(f'Q{q["n"]}: sin explicación (falta la línea `> 💡`)')
        if not q["bloque"]:
            errs.append(f'Q{q["n"]}: sin bloque')
    return errs


def main():
    qs = parse_questions(EXAM)
    errs = validate(qs)
    if errs:
        print("ERRORES de validación:")
        for e in errs:
            print("  -", e)
        sys.exit(1)
    # Marca las preguntas cuyo VALOR de respuesta es una resistencia (n Ω / kΩ),
    # para el filtro "Solo valores de resistencia" del test. Excluye "El ohm (Ω)"
    # (nombra la unidad, sin dígito) por exigir un número junto al símbolo Ω.
    ohm = re.compile(r"\d[\d.,]*\s*[kKmM]?Ω")
    n_res = 0
    for q in qs:
        ans = q["opciones"][q["correcta"]] if q["opciones"] else ""
        q["res"] = bool(ohm.search(ans))
        n_res += q["res"]
    data = json.dumps(qs, ensure_ascii=False, separators=(",", ":"))
    logo = "data:image/png;base64," + base64.b64encode(open(LOGO, "rb").read()).decode()
    html = open(TEMPLATE, encoding="utf-8").read().replace("__DATA__", data).replace("__LOGO__", logo)
    open(OUT, "w", encoding="utf-8").write(html)
    from collections import Counter
    print(f"OK · {len(qs)} preguntas · {len(set(q['bloque'] for q in qs))} temas · {n_res} de valores de resistencia")
    for (p, t), c in Counter((q["parte"], q["bloque"]) for q in qs).items():
        print(f"   {p}ª {c:>3}  {t}")
    print("Escrito:", OUT)


if __name__ == "__main__":
    main()
