# Datos del currículum

Llena este formulario una sola vez. De aquí salen las dos versiones del CV:
`src/index.html` (ATS) y `src/visual/index.html` (visual).

Los campos marcados como **pendiente** son los únicos que hoy no están en el CV.
En los dos HTML el marcado correspondiente ya existe, comentado y señalado con
`PENDIENTE`: al completar un dato aquí, se descomenta allá y se regenera el PDF.

---

## 1. Identidad

| Campo | Valor |
|---|---|
| Nombre completo | Juan Diego Sotomayor Jiménez |
| Titular profesional | Estudiante de Ingeniería en Ciencias de la Computación |
| Fecha de nacimiento | **pendiente** — formato `DD de mes de AAAA` |
| Nacionalidad | **pendiente** |
| Ciudad de residencia | **pendiente** — ej. `Guayaquil, Ecuador` |

> Sobre la fecha de nacimiento: en Ecuador es práctica habitual incluirla y el
> formato oficial del sector público incluso la exige. En Estados Unidos y buena
> parte de Europa se omite para reducir sesgo en la selección. Por eso va en la
> **versión visual** (la que compartes tú, en tu contexto local) y no en la
> **versión ATS**, que es la que se sube a portales de empleo.

## 2. Contacto

| Campo | Valor |
|---|---|
| Correo | jdsotomayorjimenez@icloud.com |
| Teléfono | **pendiente** — formato internacional, ej. `+593 99 999 9999` |
| GitHub | github.com/jdsotomayorjimenez |
| Portafolio | jdsotomayorjimenez.github.io |
| LinkedIn | **pendiente** — o marcar `no aplica` si aún no tienes perfil |

> El teléfono va en las dos versiones. LinkedIn solo si el perfil está al día:
> un enlace a un perfil vacío resta más de lo que suma.

## 3. Perfil (solo versión visual)

Dos o tres líneas en primera persona sobre lo que haces y lo que buscas.
Borrador actual, editable:

> Estudiante de Ingeniería en Ciencias de la Computación con proyectos
> documentados en desarrollo web, bases de datos, sistemas distribuidos y
> análisis de algoritmos. Busco una pasantía donde llevar a producción lo que
> hasta ahora he construido en el ámbito académico.

## 4. Educación

| Campo | Valor |
|---|---|
| Institución | Universidad de Especialidades Espíritu Santo (UEES) |
| Carrera | Ingeniería en Ciencias de la Computación |
| Periodo | 2024 – abril 2028 |
| GPA | 94.95/100 |
| Notas | Finalización académica prevista para diciembre de 2027; titulación prevista para abril de 2028 |

## 5. Experiencia

| Campo | Valor |
|---|---|
| Puesto | Apoyo técnico en infraestructura universitaria |
| Organización | UEES |
| Fechas | **pendiente** — mes y año de inicio y fin |
| Alcance | **pendiente** — cuántos equipos, en cuánto tiempo |
| Tareas | Mantenimiento y acondicionamiento de equipos para la arquitectura de un clúster universitario |

> Esta es la entrada más débil del CV y la más fácil de reforzar: una cifra
> ("acondicioné 24 equipos en tres semanas") cambia por completo cómo se lee.

## 6. Idiomas

| Idioma | Nivel |
|---|---|
| Español | Nativo |
| Inglés | B2 |

## 7. Disponibilidad (solo versión visual)

| Campo | Valor |
|---|---|
| Disponibilidad | **pendiente** — ej. `Medio tiempo · pasantías` |
| Movilidad | **pendiente** — ej. `Guayaquil y remoto` |

---

## Qué hacer al terminar

1. Sustituir cada **pendiente** por su valor real.
2. En `src/index.html` y `src/visual/index.html`, buscar `PENDIENTE` y
   descomentar las líneas cuyo dato ya esté completo.
3. Regenerar los dos PDF con los comandos de [`../README.md`](../README.md).
4. Validar el resultado con `pdftotext`, también descrito ahí.
