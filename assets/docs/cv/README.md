# Currículum

CV de una página orientado a posiciones de *internship*, *trainee* y *junior
software engineer*.

## Archivos

```text
assets/docs/cv/
├── juan-diego-sotomayor-jimenez-cv.pdf
└── src/
    ├── index.html
    └── resume.css
```

- `src/index.html` contiene el contenido y los enlaces.
- `src/resume.css` contiene exclusivamente la presentación en pantalla e impresión.
- `juan-diego-sotomayor-jimenez-cv.pdf` es la versión publicada desde el portafolio.

## Decisión de formato

El CV usa HTML y CSS imprimible, una columna, página A4, fondo blanco, texto oscuro y
azul como único acento. No incluye fotografía, gráficos, barras de habilidades,
tablas de maquetación ni información crítica dentro de imágenes.

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
mismo repositorio. Canva puede servir como referencia visual, pero no es la fuente
principal.

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
- Se seleccionan cuatro proyectos que muestran áreas diferentes: análisis de datos,
  sistemas distribuidos, inteligencia de negocios y desarrollo web con Laravel.
- Ecuador Quantificado se describe como una de ocho propuestas ganadoras, sin
  inventar una posición.
- Se conserva la experiencia del clúster de manera breve. Cuando existan fechas,
  cantidad de equipos y tareas exactas, conviene reforzar ese apartado.

## Generar el PDF

Desde la raíz del repositorio, iniciar un servidor:

```bash
python3 -m http.server 8000
```

En otra terminal:

```bash
google-chrome-stable \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf=assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf \
  http://127.0.0.1:8000/assets/docs/cv/src/
```

## Validar

```bash
pdfinfo assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf
pdffonts assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf
pdftotext -layout assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf -
```

El resultado esperado es:

- una página A4;
- texto extraíble en el mismo orden visual;
- fuentes incrustadas;
- enlaces activos;
- ningún texto cortado;
- un archivo menor de 500 KB.

## Próximas mejoras opcionales

- Confirmar fechas, alcance y tareas de la experiencia con el clúster.
- Añadir LinkedIn cuando exista un perfil actualizado.
- Crear una versión en inglés para postulaciones internacionales.
- Mantener una versión DOCX únicamente si una plataforma la solicita.
