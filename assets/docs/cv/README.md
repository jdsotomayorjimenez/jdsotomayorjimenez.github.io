# Currículum

Dos versiones del mismo currículum, con la misma información y dos trabajos distintos:

| Versión | Archivo | Para qué sirve |
|---|---|---|
| **ATS** | `juan-diego-sotomayor-jimenez-cv.pdf` | Postular. Una columna, texto seleccionable, sin elementos que confundan a un lector automático. |
| **Visual** | `juan-diego-sotomayor-jimenez-cv-visual.pdf` | Compartir con personas: contactos, redes y descarga desde el portafolio. |

Ambas están orientadas a posiciones de *internship*, *trainee* y *junior software engineer*.

## Archivos

```text
assets/docs/cv/
├── juan-diego-sotomayor-jimenez-cv.pdf          Versión ATS publicada
├── juan-diego-sotomayor-jimenez-cv-visual.pdf   Versión visual publicada
└── src/
    ├── datos.md                                 Formulario de datos: se llena una vez
    ├── index.html                               Contenido de la versión ATS
    ├── resume.css                               Presentación de la versión ATS
    └── visual/
        ├── index.html                           Contenido de la versión visual
        └── visual.css                           Presentación de la versión visual
```

## Empezar por aquí

[`src/datos.md`](src/datos.md) es el formulario. Los campos marcados como **pendiente**
son los únicos datos que hoy no están en el CV: fecha de nacimiento, teléfono, ciudad,
LinkedIn y las fechas exactas de la experiencia.

En los dos HTML el marcado de esos campos ya existe, comentado y señalado con
`PENDIENTE`. Al completar un dato en `datos.md` se descomenta el bloque correspondiente
y se vuelve a generar el PDF. Mientras tanto los PDF publicados son válidos: no
contienen marcadores de posición.

## Decisión de formato

### Por qué la versión ATS sigue siendo de una columna

El consenso de 2026 es que la columna única gana en compatibilidad: las versiones de
una columna extraen alrededor del 97% de los campos frente al 71% de la misma
información maquetada a dos columnas. Jake's Resume es la referencia entre ingenieros
de software y es la estructura que sigue `src/index.html`.

Esto se puede comprobar en este mismo repositorio:

```bash
pdftotext assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf -        # orden correcto
pdftotext assets/docs/cv/juan-diego-sotomayor-jimenez-cv-visual.pdf - # columnas entrelazadas
```

La segunda salida mezcla la barra lateral con el cuerpo (`PERFIL` seguido de
`HABILIDADES`). Un reclutador humano no se confunde con eso; un parser sí.

**La versión visual no se sube a portales de empleo.**

### Matriz evaluada

Escala de 1 a 5. La puntuación final aplica los pesos definidos durante el análisis.

| Opción | ATS | Lectura | Visual | Coherencia | Mantenimiento | Control | PDF/DOCX | Reutilización | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| HTML/CSS imprimible | 5 | 5 | 4 | 5 | 5 | 5 | 3 | 5 | **4.75** |
| Jake's Resume/LaTeX | 5 | 5 | 4 | 3 | 4 | 5 | 2 | 2 | 4.25 |
| DOCX/Google Docs | 5 | 4 | 3 | 3 | 5 | 4 | 5 | 2 | 4.05 |
| Canva | 2 | 3 | 5 | 4 | 3 | 3 | 2 | 1 | 3.00 |

HTML/CSS obtuvo la mejor puntuación porque mantiene texto seleccionable y lectura
lineal, permite reutilizar la identidad del portafolio y se puede actualizar en el
mismo repositorio.

## Decisiones de contenido

- Se incluye el GPA universitario `94.95/100` por ser competitivo.
- Se indica finalización académica prevista para diciembre de 2027 y titulación
  prevista para abril de 2028.
- No se incluye el promedio escolar `9.93/10`: los reconocimientos de Mejor Bachiller
  y Abanderado ya comunican ese desempeño sin duplicar información.
- Se incluyen Medalla Filantrópica del Guayas (2024), Mejor Bachiller de Ecomundo
  (2024) y Abanderado del Pabellón Nacional de Ecomundo (2023).
- Se incluyen Español nativo e Inglés B2. No se atribuye TOEFL, IELTS ni otra
  certificación externa.
- Los proyectos seleccionados cubren áreas distintas: análisis de datos, sistemas
  distribuidos, inteligencia de negocios, algoritmos sobre grafos y desarrollo web.
- Ecuador Quantificado se describe como una de ocho propuestas ganadoras, sin
  inventar una posición.
- Se conserva la experiencia del clúster de manera breve. Es la entrada más fácil de
  reforzar: una cifra concreta cambia por completo cómo se lee.

### Fecha de nacimiento y foto

En Ecuador es práctica habitual incluir fecha de nacimiento, teléfono y foto, y el
formato oficial del sector público incluso la exige. En Estados Unidos y buena parte
de Europa se omiten para reducir el sesgo en la selección.

Por eso el reparto es:

- **Teléfono:** en las dos versiones.
- **Fecha de nacimiento y foto:** solo en la versión visual.
- Si más adelante se hace una versión en inglés para postulaciones internacionales,
  va sin ninguna de las dos.

## Generar los PDF

Desde la raíz del repositorio, iniciar un servidor:

```bash
python3 -m http.server 8000
```

En otra terminal, versión ATS:

```bash
google-chrome-stable \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf=assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf \
  http://127.0.0.1:8000/assets/docs/cv/src/
```

Versión visual:

```bash
google-chrome-stable \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf=assets/docs/cv/juan-diego-sotomayor-jimenez-cv-visual.pdf \
  http://127.0.0.1:8000/assets/docs/cv/src/visual/
```

Cualquier navegador basado en Chromium sirve: sustituir `google-chrome-stable` por
`brave`, `chromium` o el que esté instalado. La versión visual carga sus tipografías
desde Google Fonts, así que conviene generarla con conexión.

## Validar

```bash
pdfinfo assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf
pdffonts assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf
pdftotext -layout assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf -
```

El resultado esperado es:

- una página A4 en las dos versiones;
- fuentes incrustadas;
- enlaces activos;
- ningún texto cortado;
- archivos menores de 500 KB;
- en la versión ATS, texto extraíble en el mismo orden visual.

## Próximas mejoras opcionales

- Completar los campos pendientes de [`src/datos.md`](src/datos.md).
- Confirmar fechas, alcance y tareas de la experiencia con el clúster.
- Añadir LinkedIn cuando exista un perfil actualizado.
- Crear una versión en inglés para postulaciones internacionales.
- Mantener una versión DOCX únicamente si una plataforma la solicita.
