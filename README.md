# Opalina Florería

Sitio web de Opalina Florería Piura. Estructura modular separada en `frontend/`
(lo que navega el usuario) y `backend/` (futuro). La base arranca con
**`frontend/index.html`** como página de ejemplo ya migrada a Bootstrap 5.3
(v5.3.8 por CDN) y la referencia del navbar con carrito y footer.

## Estructura del proyecto

```
OpalinaFloreria/
├── frontend/            → todo lo que se sirve al navegador
│   ├── index.html       → página de ejemplo (base global)
│   ├── pages/           → páginas del sitio (catalogo.html, producto.html, …)
│   ├── components/      → fragmentos reutilizables (navbar, footer, …)
│   ├── assets/
│   │   ├── imagenes/    → fotos (arreglos/, productos/, logo)
│   │   └── svg/         → íconos ilustrativos
│   └── css/
│       ├── colores.css      → paleta, tipografías y radios de Opalina
│       └── componentes.css  → overrides de Bootstrap + look del navbar/footer
├── backend/             → (pendiente) API / lógica del e-commerce
├── LICENSE
└── README.md
```

## Cómo usar — guía de migración

Todo el frontend vive en `frontend/` y es autónomo: trae sus propias imágenes
en `assets/` y sus estilos en `css/`. Lo que vas a copiar para cada página
vive aquí mismo.

### Componentes reutilizables (`frontend/components/`)

| Archivo | Qué es |
|---|---|
| `navbar.html` | Menú superior (navbar fijo con blur) + carrito. |
| `footer.html` | Pie con contacto, redes y enlaces legales. |
| `legal.html` | Barra legal suelta (copyright + Términos y Privacidad). |
| `cuenta.html` | Sidebar de cuenta (`account-sidebar`) para páginas del perfil. |

`frontend/index.html` ya los trae incrustados en línea (sin iframes): el markup
del navbar y del footer está copiado tal cual desde los fragmentos.

### Pasos para migrar una página de `PaginasSinBootstrap/`

1. Copia tu `.html` de `PaginasSinBootstrap/` (carpeta fuera del repo, el
   material original) a `frontend/pages/` con su nombre de destino
   (p. ej. `catalogo.html`).
2. Reemplaza el `<head>` por el de `index.html`: fonts de Google, CDN de
   Bootstrap 5.3.8 (con `integrity` y `crossorigin`), `css/colores.css` y
   `css/componentes.css`. El orden de carga es siempre ese.
3. Sustituye el navbar y footer propios (clases viejas `.encabezado`/`.pie` y
   sus `media` queries de `css/secciones/`) por los bloques
   `<nav class="navbar ... navbar-opalina">` y `<footer class="footer-opalina">`
   copiados de `index.html`.
4. Marca tu sección en el navbar: en tu `<a>` agrega `class="nav-link active"`
   y `aria-current="page"` (una sola página activa por documento).
5. Convierte el contenido de `<main>` a clases de Bootstrap:
   - Layout: `.container` + `.row` + `.col-lg-*` (antes `main`, `seccion`, etc.).
   - Grillas de productos/servicios: `row row-cols-1 row-cols-md-2/3/4 g-4`
     con `.card .h-100` (antes `.tarjeta`).
   - Botones: `.btn .btn-primary` / `.btn-outline-secondary`
     (antes `.boton-*`). Los colores ya están sobrescritos en `componentes.css`.
   - Títulos y textos: `.h1`/`.h2`, `.lead`, `.text-body-secondary`
     (antes `.titulo-*`, `.texto-*`).
   - Formularios: `.form-label`, `.form-control`, `.form-select`, `.form-check`
     (antes `formularios.css`). Flotantes o radios con `form-check-input`.
   - Tablas: `.table`. Badges: `.badge`. Modales: `.modal` con
     `data-bs-toggle="modal"`.
   - En páginas de cuenta, agrega `<aside class="account-sidebar">` con el
     contenido de `cuenta.html`.
6. Ajusta los enlaces: internos quedan `#!` hasta la integración (quien une el
   proyecto conecta los `.html` reales); los externos ya apuntan a WhatsApp
   (`https://wa.me/51939355038`), Instagram y `mailto:` de la página original.
7. Al terminar guarda con UTF-8 y prueba abriendo tu archivo directamente en
   el navegador desde `frontend/`.

### Rutas correctas desde cada ubicación

Dentro del repo, siempre relativas al archivo:

- Desde una página en `frontend/pages/`: imágenes `../assets/imagenes/...`,
  svg `../assets/svg/...`, estilos `../css/...`.
- Desde los fragmentos en `frontend/components/`: estilos `../css/...`,
  logo `../assets/imagenes/Opalina-Logo.png`.
- En `frontend/index.html` (en la raíz de frontend): imágenes
  `assets/imagenes/...`, svg `assets/svg/...`, estilos `css/...`.

### Lo que NO debes hacer

- No copies los CSS de `PaginasSinBootstrap/css/` (estilos, responsivo,
  animaciones, secciones, componentes, paginas): en Bootstrap viven como clases
  propias + los 2 archivos `colores.css` y `componentes.css`.
- No uses iframes para el navbar/footer: copia el markup en línea como en
  `index.html` (responsive en móvil sin recortes).

## Documentación Bootstrap 5.3

- Introducción y CDN: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Navbar: https://getbootstrap.com/docs/5.3/components/navbar/
- Grid: https://getbootstrap.com/docs/5.3/layout/grid/
- Botones: https://getbootstrap.com/docs/5.3/components/buttons/
- Cards: https://getbootstrap.com/docs/5.3/components/card/
- Badges: https://getbootstrap.com/docs/5.3/components/badge/
- Formularios: https://getbootstrap.com/docs/5.3/forms/overview/
- Tablas: https://getbootstrap.com/docs/5.3/content/tables/
- Modales: https://getbootstrap.com/docs/5.3/components/modal/
- Offcanvas: https://getbootstrap.com/docs/5.3/components/offcanvas/
- Checkbox/radio: https://getbootstrap.com/docs/5.3/forms/checks-radios/
- Variables CSS: https://getbootstrap.com/docs/5.3/customize/css-variables/

## Notas

- Los fragmentos de `frontend/components/` usan estilos de Bootstrap y solo los
  colores de Opalina (definidos en `colores.css` y `componentes.css`): navbar
  crema translúcido con blur y footer `tinta` oscuro.
- `frontend/index.html` incluye navbar y footer copiados en línea desde los
  fragmentos (no hay iframes), por lo que el layout es responsive sin recortes
  en móvil.
- Los enlaces internos quedan `#!` hasta la integración; WhatsApp, Instagram y
  correo ya apuntan a los destinos reales de la página original.
- El contador del carrito es estático "2" (badge `bg-success`).
- `Términos y Condiciones` y `Política de Privacidad` quedan como futuras
  páginas.