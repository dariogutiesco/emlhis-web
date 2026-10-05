# Web EMLHIS — mujereslidereshispanas.com

Sitio estático servido por **GitHub Pages** desde la raíz de la rama `main`.
No hay nada que compilar: son archivos HTML, una hoja de estilos y un script pequeño.

## Estructura

```
index.html            Portada
madrid/index.html     Encuentro de Madrid · 19 de octubre
barcelona/index.html  Encuentro de Barcelona · 21 de octubre y 11 de noviembre
legal/index.html      Aviso legal, privacidad y cookies
404.html              Página de error
actividades/          Redirección a la portada (URL de la web anterior)
riquezafemenina/      Redirección a la portada (URL de la web anterior)
styles.css            Todos los estilos
app.js                Contador de cifras y aparición de la galería
robots.txt            Permite el rastreo y señala el sitemap
sitemap.xml           Las cuatro páginas, para Google
CNAME                 El dominio propio. No borrar.
.nojekyll             Desactiva el procesado Jekyll de GitHub. No borrar.
google2321...html     Verificación de Google Search Console. No borrar.
img/                  Fotografías, logotipos de aliados y retratos
fonts/                Poppins, alojada aquí (no se pide a Google: RGPD)
```

**Cada página vive en su propia carpeta** para que la URL sea `/madrid/` y no
`/madrid.html`. Si añades una página nueva, crea `nombre/index.html`.

Las rutas de recursos son **absolutas desde la raíz** (`/styles.css`, `/img/...`).
Si usas rutas relativas dentro de una subcarpeta, se romperán.

## Cómo cambiar algo habitual

| Qué | Dónde |
|---|---|
| Fechas, sedes u horarios | `madrid/index.html` · `barcelona/index.html`, bloque `<article class="sesion">` |
| Ponentes de cada mesa | mismo archivo, bloque `<div class="panel">` + fotos en `img/ponentes/` |
| Enlaces de inscripción | buscar `luma.com` |
| Cifras de impacto | `index.html`, bloque `<div class="figs">` |
| Equipo | `index.html`, bloque `<div class="team-txt">` (solo texto, sin fotos) |
| Aliados | `index.html`, bloque `<div class="logos">` + logotipos en `img/aliados/` |
| Colores y tipografía | `styles.css`, bloque `:root` |

## Fotografías de ponentes

Cada una se carga de `img/ponentes/<nombre>.jpg`. Si el archivo no existe,
aparece automáticamente un círculo con las iniciales, así que la página nunca
se ve rota. Para añadir una, basta con dejar el JPG con el nombre correcto.

## Publicación

Cada `push` a `main` republica el sitio en uno o dos minutos.
GitHub Pages no tiene límite de despliegues.

**El DNS vive en CDMON, no en GitHub.** Solo se tocan los registros A del
dominio raíz y el CNAME de `www`. Cambiar los *nameservers* rompería el correo
`contacto@mujereslidereshispanas.com`.

## Privacidad

El sitio no instala cookies ni carga recursos de terceros: la tipografía se
sirve desde este mismo dominio. Por eso no hace falta banner de cookies. Si
algún día se añade Google Analytics, Google Fonts o un píxel de Meta, deja de
ser cierto y habrá que actualizar `legal/index.html` y poner un banner.
