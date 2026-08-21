# Datos del currículum

Este es el formulario del que salen los dos formatos del CV:
`src/index.html` (ATS) y `src/visual/index.html` (visual).

**Los datos personales no están aquí y no deben estarlo.** Este repositorio es un
sitio público de GitHub Pages: todo lo que se commitea queda publicado. Teléfono,
dirección y fecha de nacimiento viven en `~/Documents/CV-privado/datos-personales.env`,
fuera del repo, junto con el script `build-privado.py` que los inyecta al generar la
versión que no se publica. Ni los datos ni el generador están en este repositorio.

En los HTML de esta carpeta esos campos son anclas en comentario
(`<!-- CV-PRIVADO:telefono -->`, `:direccion`, `:nacimiento`). **No las borres al editar
el CV:** son los puntos por donde el generador inserta los datos.

Ver «Currículum» en el [README del repositorio](../../../../README.md).

---

## 1. Identidad

| Campo | Valor |
|---|---|
| Nombre completo | Juan Diego Sotomayor Jiménez |
| Titular profesional | Backend · Datos · Infraestructura |
| Fecha de nacimiento | Solo versión privada — `CV-privado/datos-personales.env` |
| Nacionalidad | Ecuatoriana |
| Ciudad de residencia | Samborondón, Ecuador (versión pública) |
| Dirección | Solo versión privada — `CV-privado/datos-personales.env` |

> Sobre la fecha de nacimiento: en Ecuador es práctica habitual incluirla y el
> formato oficial del sector público incluso la exige. En Estados Unidos y buena
> parte de Europa se omite para reducir sesgo en la selección. Por eso va en la
> **versión privada visual** y no en la ATS, que es la que se sube a portales de
> empleo. Si algún día la quieres también en la ATS, pon
> `ATS_INCLUIR_NACIMIENTO="si"` en el archivo de datos personales.

## 2. Contacto

| Campo | Valor |
|---|---|
| Correo | jdsotomayorjimenez@icloud.com |
| Teléfono | Solo versión privada — `CV-privado/datos-personales.env` |
| GitHub | github.com/jdsotomayorjimenez |
| Portafolio | jdsotomayorjimenez.github.io |
| LinkedIn | No aplica — no hay perfil |

> El teléfono va en los dos formatos de la versión privada, y en ninguno de los
> públicos. LinkedIn está descartado: no existe perfil y un enlace a un perfil
> vacío resta más de lo que suma.

## 3. Perfil

> Estudiante de Ingeniería en Ciencias de la Computación, 6.º de 8 semestres, GPA
> 94.67/100. Construyo backend, modelos de datos e infraestructura: un data
> warehouse con ETL y un clúster de cinco nodos con Kafka, Spark y MongoDB
> replicado, hoy en piloto en mi universidad. Busco prácticas preprofesionales
> donde llevar eso a un equipo real.

## 4. Educación

| Campo | Valor |
|---|---|
| Institución | Universidad de Especialidades Espíritu Santo (UEES) |
| Carrera | Ingeniería en Ciencias de la Computación |
| Periodo | 2024 – abril 2028 |
| Avance | 6.º de 8 semestres |
| GPA | 94.67/100 |
| Notas | Finalización académica prevista para diciembre de 2027; titulación prevista para abril de 2028 |

## 5. Experiencia técnica — clúster UEES

Fuente: `Informe_Ejecutivo_Infraestructura_UEES.pdf` (agosto 2026).

| Campo | Valor |
|---|---|
| Título | Clúster de procesamiento distribuido e IA |
| Organización | UEES |
| Fechas | **pendiente** — mes y año de inicio y fin; hoy solo dice `2026` |
| Rol | Proyecto en equipo. **Pendiente**: qué parte se hizo personalmente |
| Alcance | 5 nodos, Intel i7-7700 / 16 GB / GTX 1660 Super, Ubuntu Server |
| Pipeline | Kafka (2 brokers) → Spark (1 master + 3 workers) → MongoDB replica set de 3 nodos |
| IA | Qwen2.5 servido con Ollama sobre GPU, instancia de respaldo con conmutación automática |
| Monitoreo | Prometheus + Grafana sobre las 5 máquinas |
| Red | LAN Gigabit, IP fija por nodo, acceso remoto por Tailscale |
| Cifras | Más de 390 estudiantes y 6 periodos académicos migrados |

> Verifica los verbos antes de postular: si una parte la hizo el equipo y no tú,
> cámbiala a `Participé en…` o `Junto al equipo…`. Una cifra o un componente que
> no puedas defender en una entrevista hace más daño que el que suma en el papel.

## 6. Proyectos en el CV

Cuatro fichas completas y una línea de cierre, en este orden:

1. Informalidad laboral en Ecuador — Python, pandas, matplotlib, pdfplumber
2. Enreach — PostgreSQL, Pentaho, Spring Boot, React
3. TaskFlow — React, Node.js, MongoDB, Kubernetes, Tailscale
4. Huellitas — PHP, Laravel, MariaDB, Blade, Eloquent
5. Línea «También»: Propagación de malware en grafos · IceFrame

## 7. Idiomas

| Idioma | Nivel |
|---|---|
| Español | Nativo |
| Inglés | B2 |

## 8. Disponibilidad (solo versión visual)

| Campo | Valor |
|---|---|
| Disponibilidad | Lunes a viernes, 6 h diarias (hasta 8 si hace falta) |

---

---

# Decisiones

Por qué el CV es como es. Se conserva aquí para que un cambio futuro no deshaga sin
querer algo que se decidió a propósito.

## Por qué el formato ATS es de una columna

Las versiones de una columna extraen alrededor del 97 % de los campos frente al 71 %
de la misma información maquetada a dos columnas. Jake's Resume es la referencia entre
ingenieros de software y es la estructura que sigue `index.html`.

Se comprueba en este mismo repositorio:

```bash
pdftotext assets/docs/cv/juan-diego-sotomayor-jimenez-cv.pdf -        # orden correcto
pdftotext assets/docs/cv/juan-diego-sotomayor-jimenez-cv-visual.pdf - # columnas entrelazadas
```

La segunda salida mezcla la barra lateral con el cuerpo (`PERFIL` seguido de
`HABILIDADES`). Un reclutador humano no se confunde con eso; un parser sí.
**El formato visual no se sube a portales de empleo.**

## Por qué HTML/CSS y no LaTeX, DOCX o Canva

Escala de 1 a 5, con los pesos definidos durante el análisis.

| Opción | ATS | Lectura | Visual | Coherencia | Mantenimiento | Control | PDF/DOCX | Reutilización | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| HTML/CSS imprimible | 5 | 5 | 4 | 5 | 5 | 5 | 3 | 5 | **4.75** |
| Jake's Resume/LaTeX | 5 | 5 | 4 | 3 | 4 | 5 | 2 | 2 | 4.25 |
| DOCX/Google Docs | 5 | 4 | 3 | 3 | 5 | 4 | 5 | 2 | 4.05 |
| Canva | 2 | 3 | 5 | 4 | 3 | 3 | 2 | 1 | 3.00 |

HTML/CSS gana porque mantiene texto seleccionable y lectura lineal, reutiliza la
identidad del portafolio y se actualiza en el mismo repositorio.

## Contenido

- Se incluye el GPA `94.67/100` por ser competitivo, y el avance `6.º de 8 semestres`
  para situar en qué punto de la carrera está.
- No se incluye el promedio escolar `9.93/10`: Mejor Bachiller y Abanderado ya
  comunican ese desempeño sin duplicar información.
- Español nativo e inglés B2. No se atribuye TOEFL, IELTS ni otra certificación
  externa que no exista.
- Ecuador Quantificado se describe como una de ocho propuestas ganadoras, sin inventar
  una posición.

### El clúster es la entrada principal

Antes ocupaba una línea (*«mantenimiento y acondicionamiento de equipos»*) y se leía
como trabajo de soporte. Con el informe ejecutivo de agosto de 2026 a la vista pasó a
ser la entrada más fuerte del CV: 5 nodos, pipeline Kafka → Spark → MongoDB con replica
set de 3 nodos, un modelo servido en local sobre GPU con conmutación automática,
monitoreo con Prometheus y Grafana, y más de 390 estudiantes migrados.

Va bajo **Experiencia técnica** y no bajo Proyectos porque corre sobre infraestructura
institucional con datos institucionales reales. El subtítulo dice *«Proyecto en
equipo»* y las viñetas describen el sistema en lugar de atribuir cada pieza a una
persona: es lo que se puede sostener en una entrevista.

### Habilidades

La lista solo nombra tecnologías respaldadas por un proyecto del propio CV. En el
formato visual la negrita marca lo que mejor se domina, con una nota que lo dice
explícitamente: es una señal de honestidad que se lee bien en una entrevista.

Se retiraron C#, Unity, JavaFX y Prolog: son reales y están en el portafolio, pero
ninguno aporta a un puesto de backend o datos y diluían la lista. También se retiraron
pandas y JWT por decisión propia; siguen apareciendo en los proyectos que sí los usan,
donde son un hecho del proyecto y no una habilidad que se reclama.

### Proyectos

Cuatro fichas completas —análisis de datos, inteligencia de negocios, Kubernetes y
desarrollo web— y una línea de cierre que recupera *Propagación de malware en grafos*
e *IceFrame* sin gastar seis líneas en ellos. Cabe más señal en el mismo espacio.

### Fecha de nacimiento, teléfono y foto

En Ecuador es práctica habitual incluir fecha de nacimiento, teléfono y foto, y el
formato oficial del sector público incluso la exige. En Estados Unidos y buena parte de
Europa se omiten para reducir el sesgo en la selección. Por eso:

- **Teléfono y dirección:** solo en las versiones privadas.
- **Fecha de nacimiento:** solo en la versión privada visual.
- **Foto:** el marcado existe y está comentado; hoy no se usa.
- Si se hace una versión en inglés para postular fuera, va sin ninguna de las tres.

---

## Qué hacer al terminar

1. Editar los HTML de `src/` (nunca con datos personales dentro).
2. Regenerar los PDF públicos con los comandos de [`../README.md`](../README.md).
3. Regenerar los privados con `python3 ~/Documents/CV-privado/build-privado.py`.
4. Validar el resultado con `pdftotext` y `pdfinfo`, también descritos ahí.
