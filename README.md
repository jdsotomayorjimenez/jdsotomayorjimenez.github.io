# Portafolio de Juan Diego Sotomayor Jiménez

Portafolio personal y académico publicado mediante GitHub Pages:

```text
https://jdsotomayorjimenez.github.io/
```

## Descripción

El sitio presenta mi perfil como estudiante de Ingeniería en Ciencias de la Computación, mis habilidades técnicas, proyectos universitarios, certificaciones, participaciones en hackathones y reconocimientos.

La navegación usa una barra lateral retráctil en escritorio (se expande con `hover` y `focus-within`) y un panel lateral con botón, fondo oscurecido y cierre con `Escape` en pantallas menores a 1200 px.

El sitio tiene tema oscuro y claro, con dos tonos de superficie alternos por sección y azul y turquesa como acentos. La portada no usa imagen: el ambiente sale de degradados, una retícula fina y una capa de grano definidas en CSS.

## Contenido

- Presentación personal y áreas de interés.
- Tema claro y oscuro con selector propio.
- Experiencia práctica con desarrollo, datos, Linux, infraestructura y hardware.
- Proyectos organizados por materia.
- Propuesta seleccionada como una de las ocho ganadoras de Ecuador Quantificado 2026.
- Certificaciones AWS Academy — Data Engineering y Cloud Architecting.
- Participaciones en SpaceHACK for Sustainability 2025 y 2026.
- Resumen de formación y experiencia práctica, con la sección de CV preparada para el PDF.

## Arquitectura

Es un sitio estático de una sola página, sin proceso de compilación:

```text
.
├── index.html                         # Contenido y estructura de la página
├── README.md                          # Documentación del repositorio
├── .gitignore                         # Impide que entren datos personales del CV
├── assets/
│   ├── css/
│   │   ├── main.css                   # Estilos base del template iPortfolio
│   │   └── custom.css                 # Tokens, temas y componentes propios
│   ├── js/
│   │   └── main.js                    # Tema, menú, contadores, filtros y scrollspy
│   ├── img/
│   │   ├── brand/                     # Monograma JD (SVG + PNG + favicon)
│   │   ├── projects/                  # WebP + PNG de respaldo
│   │   ├── certifications/
│   │   └── hackathons/
│   ├── docs/
│   │   ├── certifications/
│   │   ├── hackathons/
│   │   └── cv/                        # PDF públicos del CV
│   │       └── src/                   # Fuentes HTML/CSS y documentación del CV
│   └── vendor/                        # Bootstrap y librerías del template
└── materias/                          # Índices académicos por periodo/materia
```

## Tecnologías del sitio

- HTML5 semántico.
- CSS personalizado con tokens de color por tema.
- JavaScript sin framework.
- Bootstrap 5 (solo CSS) y Bootstrap Icons.
- AOS, PureCounter e Isotope.
- Tipografías Inter, Plus Jakarta Sans y JetBrains Mono.
- GitHub Pages.

`assets/vendor/` contiene únicamente las librerías que `index.html` carga. Las del
template que no se usaban (Swiper, GLightbox, Waypoints, Typed.js y el validador de
formularios) se eliminaron del repositorio.

## Tema claro y oscuro

Toda la paleta vive como tokens en `:root` dentro de `assets/css/custom.css`; el tema
claro redefine esos mismos nombres en `:root[data-theme="light"]`, así que ningún
componente necesita reglas duplicadas por tema.

- El botón de cambio está fijo en la esquina superior derecha.
- La elección se guarda en `localStorage`.
- Sin elección guardada, el sitio sigue `prefers-color-scheme` y reacciona si esa
  preferencia cambia durante la sesión.
- Un script en línea dentro del `<head>` resuelve el tema antes de pintar: sin él la
  página parpadearía en claro al cargar.

## Contadores y foto de perfil

Los números de la franja de datos y el conteo de proyectos del bloque de currículum se
calculan en `assets/js/main.js` a partir de las tarjetas de proyecto: cada tarjeta
declara su materia con `data-materia`, y de ahí salen el total de proyectos y el número
de materias representadas. Al publicar un proyecto nuevo no hay ningún número que
actualizar a mano.

La foto de la barra lateral apunta a `https://github.com/jdsotomayorjimenez.png?size=88`,
que redirige siempre al avatar vigente de la cuenta de GitHub: cambiar la foto en GitHub
la cambia en el sitio sin tocar el repositorio. Si GitHub no responde, el `onerror` del
`<img>` cae al monograma local.

## Recursos principales

### Imágenes

```text
assets/img/brand/jd-monogram.svg
assets/img/brand/jd-monogram-512.png
assets/img/brand/jd-favicon-32.png
assets/img/brand/jd-apple-touch-icon-180.png
assets/img/projects/
assets/img/certifications/
assets/img/hackathons/
```

Las capturas se sirven en WebP con el PNG original como respaldo, mediante `<picture>`.
Al añadir una imagen nueva conviene generar ambas:

```bash
magick assets/img/projects/nueva.png -quality 82 -define webp:method=6 assets/img/projects/nueva.webp
```

### Documentos

```text
assets/docs/certifications/aws-data-engineering.pdf
assets/docs/certifications/aws-cloud-architecting.pdf
assets/docs/hackathons/spacehack-2025-certificate.pdf
assets/docs/hackathons/spacehack-2025-presentation.pdf
assets/docs/hackathons/spacehack-2026-certificate.pdf
assets/docs/hackathons/spacehack-2026-presentation.pdf
```

## Currículum

El CV se cruza en dos ejes: **formato** (visual o ATS) y **alcance de los datos**
(pública o privada). Salen cuatro PDF, todos de una página.

| Formato | Para qué sirve |
|---|---|
| **Visual** | Dos columnas. Compartir con personas, entregar en mano y descargar desde el sitio. |
| **ATS** | Una columna, texto seleccionable en orden lineal. Subir a portales de empleo. |

| Alcance | Dónde vive | Qué lleva |
|---|---|---|
| **Pública** | `assets/docs/cv/`, se publica | Correo, GitHub, portafolio y ciudad. |
| **Privada** | `~/Documents/CV-privado/`, fuera del repo | Lo anterior más teléfono, dirección y fecha de nacimiento. |

La sección `#cv` del sitio ofrece tres acciones, todas sobre las versiones públicas:
**Ver CV** y **Descargar PDF** apuntan a la visual, y **Versión ATS** a la de una
columna.

### El repositorio nunca contiene datos personales

`jdsotomayorjimenez.github.io` es un sitio público de GitHub Pages: cualquier cosa que
se commitee queda publicada y en el historial de git, aunque se borre después. Por eso
el teléfono, la dirección y la fecha de nacimiento viven en
`~/Documents/CV-privado/datos-personales.env` (permisos `600`) y se inyectan al
generar, nunca al editar.

En los HTML de `assets/docs/cv/src/` esos tres campos son anclas en comentario
(`<!-- CV-PRIVADO:telefono -->`, `:direccion`, `:nacimiento`). **No hay que borrarlas al
editar el CV:** son los puntos por donde el generador privado inserta los datos. Si se
renombra o elimina una, el generador falla en vez de producir un PDF incompleto en
silencio.

### Regenerar los PDF públicos

Con el servidor local levantado (ver «Probar localmente»):

```bash
google-chrome-stable --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf \
  http://127.0.0.1:8000/assets/docs/cv/src/

google-chrome-stable --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=assets/docs/cv/juan-diego-sotomayor-jimenez-cv-visual.pdf \
  http://127.0.0.1:8000/assets/docs/cv/src/visual/
```

Sirve cualquier navegador basado en Chromium: sustituir por `brave`, `chromium` o el
que esté instalado. El formato visual carga sus tipografías desde Google Fonts, así que
conviene generarlo con conexión.

### Regenerar los PDF privados

El generador tampoco vive en este repositorio: está en `~/Documents/CV-privado/`, junto
a los datos que consume.

```bash
python3 ~/Documents/CV-privado/build-privado.py
```

Levanta su propio servidor en un puerto libre, copia `assets/docs/cv/src/` a un
directorio temporal, inyecta ahí los datos personales y escribe los PDF en
`~/Documents/CV-privado/`. El temporal se borra al terminar y el repositorio no se toca
en ningún momento. Si falta el archivo de datos o alguna de sus claves, se detiene con
un mensaje.

La ruta a las fuentes la toma de la clave `REPO_SRC` de ese mismo archivo: si mueves el
repositorio de sitio, hay que corregirla ahí.

### Validar

```bash
pdfinfo   assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf
pdffonts  assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf
pdftotext assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf -
```

Se espera una página A4, fuentes incrustadas, enlaces activos, ningún texto cortado,
menos de 500 KB y, en el formato ATS, texto extraíble en el mismo orden visual.

Y la comprobación que más importa: que no se haya escapado nada personal a lo que se
publica. Toma cada valor del archivo privado y lo busca en git y en los PDF publicados,
sin escribir ningún dato en el repositorio.

```bash
grep -oP '^(TELEFONO|DIRECCION|NACIMIENTO)="\K[^"]+' ~/Documents/CV-privado/datos-personales.env |
while read -r valor; do
  git grep -qF -- "$valor" && echo "FUGA en git: $valor"
  for f in assets/docs/cv/*.pdf; do
    pdftotext "$f" - | grep -qF -- "$valor" && echo "FUGA en $f: $valor"
  done
done
echo "revisión terminada"
```

Solo debe imprimir `revisión terminada`.

### Contenido y decisiones

El formulario de datos, las decisiones de formato y el porqué de cada sección están en
[`assets/docs/cv/src/datos.md`](assets/docs/cv/src/datos.md).

## Probar localmente

Desde la raíz del repositorio:

```bash
python3 -m http.server 8000
```

Abrir:

```text
http://localhost:8000
```

## Publicación

GitHub Pages sirve directamente `index.html`. No se requiere generar una carpeta `dist` ni ejecutar un build.

## Base del diseño

El sitio conserva componentes del template [iPortfolio de BootstrapMade](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) y mantiene el crédito correspondiente.
