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
│   │   └── cv/                        # Destino del CV en PDF
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

La sección `#cv` muestra un resumen de formación y experiencia dentro del sitio y ofrece tres acciones:

- **Ver CV:** abre en una pestaña nueva la versión pensada para postular.
- **Descargar PDF:** descarga esa misma versión.
- **Versión visual:** abre la variante a dos columnas, para compartir con personas.

Hay dos documentos porque hacen dos trabajos distintos: la versión de una columna es la
que leen bien los sistemas ATS de los portales de empleo, y la de dos columnas es la que
se ve mejor. Ambas salen de la misma información.

Los datos que aún faltan (teléfono, fecha de nacimiento, ciudad, LinkedIn) se completan
en el formulario [`assets/docs/cv/src/datos.md`](assets/docs/cv/src/datos.md). Las
fuentes HTML/CSS, las decisiones de contenido y las instrucciones para regenerar y
validar los PDF están en [`assets/docs/cv/README.md`](assets/docs/cv/README.md).

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
