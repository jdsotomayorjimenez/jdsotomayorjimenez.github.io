# Portafolio de Juan Diego Sotomayor Jiménez

Portafolio personal y académico publicado mediante GitHub Pages:

```text
https://jdsotomayorjimenez.github.io/
```

## Descripción

El sitio presenta mi perfil como estudiante de Ingeniería en Ciencias de la Computación, mis habilidades técnicas, proyectos universitarios, certificaciones, participaciones en hackathones y reconocimientos.

La navegación usa una barra lateral retráctil en escritorio (se expande con `hover` y `focus-within`) y un panel lateral con botón, fondo oscurecido y cierre con `Escape` en pantallas menores a 1200 px.

El sitio sigue una sola dirección visual oscura, con dos tonos de superficie alternos por sección y azul y turquesa como acentos.

## Contenido

- Presentación personal y áreas de interés.
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
│   │   └── custom.css                 # Identidad visual y componentes propios
│   ├── js/
│   │   └── main.js                    # Menú, animaciones, filtros y scrollspy
│   ├── img/
│   │   ├── brand/                     # Monograma JD (SVG + PNG + favicon)
│   │   ├── hero-bg.jpg                # Fondo de portada
│   │   ├── projects/
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
- CSS personalizado.
- JavaScript sin framework.
- Bootstrap 5 (solo CSS) y Bootstrap Icons.
- AOS, Typed.js, PureCounter e Isotope.
- Tipografías Inter, Plus Jakarta Sans y JetBrains Mono.
- GitHub Pages.

Las librerías del template que no se usan (Swiper, GLightbox, Waypoints, el JS de Bootstrap y el validador de formularios) permanecen en `assets/vendor/` pero ya no se cargan en `index.html`.

## Recursos principales

### Imágenes

```text
assets/img/brand/jd-monogram.svg
assets/img/brand/jd-monogram-512.png
assets/img/brand/jd-favicon-32.png
assets/img/brand/jd-apple-touch-icon-180.png
assets/img/hero-bg.jpg
assets/img/projects/
assets/img/certifications/
assets/img/hackathons/
```

### Documentos

```text
assets/docs/certifications/aws-data-engineering.pdf
assets/docs/hackathons/spacehack-2025-certificate.pdf
assets/docs/hackathons/spacehack-2025-presentation.pdf
assets/docs/hackathons/spacehack-2026-certificate.pdf
assets/docs/hackathons/spacehack-2026-presentation.pdf
```

## Currículum

La sección `#cv` muestra un resumen de formación y experiencia dentro del sitio y ofrece dos acciones:

- **Ver CV:** abre el PDF en una pestaña nueva.
- **Descargar PDF:** descarga `assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf`.

La fuente HTML/CSS, las decisiones de contenido y las instrucciones para regenerar y validar el documento están en [`assets/docs/cv/README.md`](assets/docs/cv/README.md).

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
