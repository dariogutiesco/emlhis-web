# Web EMLHIS — mujereslidereshispanas.com

Sitio estático. **No hay nada que compilar**: son archivos HTML, una hoja de estilos
y un script pequeño. Se puede abrir `index.html` directamente en el navegador.

## Estructura

```
netlify.toml      Raíz del repositorio. Indica que el sitio vive en EMLHIS/
EMLHIS/
  index.html      Portada
  madrid.html     Encuentro de Madrid · 19 de octubre
  barcelona.html  Encuentro de Barcelona · 21 de octubre y 11 de noviembre
  legal.html      Aviso legal, privacidad y cookies
  styles.css      Todos los estilos del sitio
  app.js          Contador de cifras y aparición de la galería
  robots.txt      Permite el rastreo y señala el sitemap
  sitemap.xml     Las cuatro páginas, para Google
  img/            Fotografías, logotipos de aliados y retratos del equipo
  fonts/          Poppins, alojada aquí (no se pide a Google: RGPD)
```

`netlify.toml` va **en la raíz del repositorio**, no dentro de `EMLHIS/`.
Es la línea `publish = "EMLHIS"` la que le dice a Netlify dónde está el sitio.

## Cómo cambiar algo habitual

| Qué | Dónde |
|---|---|
| Fechas, sedes u horarios | `madrid.html` / `barcelona.html`, bloque `<article class="sesion">` |
| Enlaces de inscripción | buscar `luma.com` en los tres HTML |
| Cifras de impacto | `index.html`, bloque `<div class="figs">` |
| Equipo | `index.html`, bloque `<div class="team">` + fotos en `img/equipo/` |
| Aliados | `index.html`, bloque `<div class="logos">` + logotipos en `img/aliados/` |
| Colores y tipografía | `styles.css`, bloque `:root` al principio |

## Logotipos de aliados

Cada logotipo se carga desde `img/aliados/<nombre>.png`. Si el archivo no existe,
aparece automáticamente el nombre de la entidad en texto, así que el muro nunca
se rompe. Para añadir uno nuevo, basta con dejar el PNG con el nombre correcto.

## Publicación

Netlify está conectado a este repositorio: cada `push` a la rama principal
publica el sitio en unos 30 segundos.

**El DNS vive en CDMON, no en Netlify.** Solo se tocan los registros A y CNAME.
Cambiar los *nameservers* rompería el correo `contacto@mujereslidereshispanas.com`.

## Privacidad

El sitio no instala cookies ni carga recursos de terceros: la tipografía se sirve
desde este mismo dominio. Por eso no hace falta banner de cookies. Si algún día se
añade Google Analytics, Google Fonts o un píxel de Meta, deja de ser cierto y habrá
que actualizar `legal.html` y poner un banner.
