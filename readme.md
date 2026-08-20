# Desarrollo Web Profesional - Leonardo Bringas

Plataforma de servicios de desarrollo web liderada por **Leonardo Bringas** (LeoBringasAtLife), basada en Buenos Aires, Argentina. Sitio enfocado en crear sitios web claros, rápidos y estratégicos, pensados para convertir visitas en consultas y ventas.

[Sitio web](https://leobringasatlife.site)

---

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Secciones del Sitio](#secciones-del-sitio)
- [Planes de Precios](#planes-de-precios)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Despliegue](#despliegue)
- [Autor](#autor)

---

## Descripción del Proyecto

Landing page estática de un solo archivo (`index.html`) que funciona como **portfolio y herramienta de ventas** para servicios de desarrollo web freelance. El sitio presenta un selector de planes (Individuos / Empresas) con precios claros, e integra botones de WhatsApp y un formulario de contacto para generar leads directamente.

### Objetivos

- **Generar leads**: Cada botón CTA envía a WhatsApp con mensaje pre-llenado y hay un formulario de contacto con validación.
- **SEO completo**: JSON-LD con schema `ProfessionalService`, meta tags Open Graph / Twitter Card y canonical URL.
- **Totalmente responsive**: Diseño mobile-first adaptable a todos los dispositivos, con menú hamburguesa.
- **Despliegue automático**: Push a `main` → GitHub Actions → GitHub Pages.
- **PWA**: Web manifest permite "Añadir a pantalla de inicio".

---

## Características

- **Planes con selector de pestañas** (Individuos / Empresas)
- 3 planes de precio definidos: **Inicial** ($150.000), **Landing Pages** ($270.000, recomendado) y **Ecommerce** ($1.700.000)
- Tabla comparativa de características entre planes
- Proceso de trabajo de 4 pasos documentado
- Botón flotante de WhatsApp para contacto rápido
- Menú de navegación sticky con hamburger responsive
- FAQ interactivo con acordeón
- Formulario de contacto con validación y honeypot anti-spam
- Métodos de contacto: email, WhatsApp e Instagram
- Imagen Open Graph para compartir en redes sociales
- Web manifest para instalación como PWA

---

## Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Lenguaje | HTML, CSS, JavaScript | Vanilla |
| CSS Framework | Tailwind CSS | v3.4.19 |
| Despliegue | GitHub Pages | vía GitHub Actions |
| PWA | Web Manifest | Manifest V2 |

---

## Estructura del Proyecto

```
Website-Landing/
├── .github/
│   └── workflows/
│       └── static.yml            # Workflow de despliegue a GitHub Pages
├── assets/
│   ├── css/
│   │   ├── global.css            # CSS fuente con clases Tailwind custom
│   │   └── tailwind.min.css      # CSS compilado y minificado (generado automáticamente)
│   ├── image/
│   │   ├── og-image.png          # Imagen para compartir en redes sociales
│   │   ├── yo.webp               # Foto de perfil de Leonardo Bringas
│   │   ├── images.png            # Asset de imagen adicional
│   │   └── leo.ico               # Favicon del sitio (referenciado)
│   └── javascript/
│       └── main.js               # Lógica del menú móvil responsive
├── index.html                    # Aplicación completa
├── package.json                  # Configuración de proyecto y scripts npm
├── tailwind.config.js            # Configuración mínima de Tailwind CSS
├── site.webmanifest              # Manifest PWA para instalación
├── robots.txt                    # Reglas para crawlers
├── sitemap.XML                   # Sitemap para SEO
└── README.md                     # Este archivo
```

---

## Secciones del Sitio

| Sección | Descripción |
|---------|-------------|
| `<head>` | Meta SEO, Open Graph, Twitter Card, JSON-LD estructurado, favicon, estilos |
| Botón WhatsApp | Botón flotante fijo en la esquina inferior derecha |
| Header / Nav | Navegación sticky con menú hamburguesa responsive (slide-in) |
| Hero | Título principal: "Diseño y desarrollo web para empresas y emprendedores" con botón CTA |
| Beneficios | 3 estadísticas clave: desde 10 días, pago 50/50, 100% responsive/SEO |
| Planes | Selector Individuos/Empresas con página de precios y features |
| Tabla Comparativa | Comparación lado a lado de los planes |
| Proceso | 4 pasos desde consulta gratuita hasta lanzamiento y soporte |
| Sobre mí | Biografía, estadísticas (7+ proyectos, 100% recomiendan) |
| Contacto + FAQ | Vías de contacto (email, WhatsApp, Instagram), formulario y preguntas frecuentes |
| Footer | Footer de 4 columnas con navegación, contacto e información |

---

## Planes de Precios

> Los planes se presentan por defecto en la pestaña "Individuos". La pestaña "Empresas" está preparada como placeholder para planes futuros.

| Plan | Precio (ARS) | Entrega | Destacado |
|------|-------------|---------|-----------|
| Inicial | $150.000 | 5-7 días / 10 días | — |
| Landing Pages | $270.000 | 15-20 días | ⭐ Recomendado |
| Ecommerce | $1.700.000 | 45-60 días | Tienda online (hasta +200 productos) |

---

## Instalación y Desarrollo

### Requisitos Previos

- [Node.js](https://nodejs.org/) (v16 o superior)
- npm

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/LeoBringasAtLife/Website-Landing.git
cd Website-Landing
```

2. Instalar dependencias:

```bash
npm install
```

3. Compilar CSS (producción):

```bash
npm run build:css
```

4. O ejecutar en modo observación (desarrollo):

```bash
npm run watch:css
```

### Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `build:css` | `tailwindcss -i ./assets/css/global.css -o ./assets/css/tailwind.min.css --minify` | Compila y minifica el CSS una sola vez |
| `watch:css` | `tailwindcss -i ./assets/css/global.css -o ./assets/css/tailwind.min.css --watch` | Observa cambios y recompila automáticamente |

### Desarrollo Local

Para ver el sitio en local, simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

> **Nota:** `server.js` sirve como servidor de desarrollo local con LiveReload, pero actualmente está configurado con `index: 'index2.html'`, un archivo que no existe en el proyecto. Ajusta esa línea a `index.html` si quieres usarlo.

---

## Despliegue

El sitio se despliega **automáticamente** a GitHub Pages mediante GitHub Actions:

1. Se realiza un push a la rama `main`
2. El workflow `.github/workflows/static.yml` se ejecuta automáticamente
3. Los archivos estáticos se suben y despliegan a GitHub Pages
4. El sitio queda disponible en `https://leobringasatlife.site`

### Configuración del Workflow

- **Trigger**: Push a la rama `main`
- **Acción**: Sube artifacts estáticos y despliega a GitHub Pages
- **Dependencias**: `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v5`

---

## Autor

**Leonardo Bringas** (LeoBringasAtLife)

- Sitio web: [https://leobringasatlife.site](https://leobringasatlife.site)
- Ubicación: Buenos Aires, Argentina
- GitHub: [LeoBringasAtLife](https://github.com/LeoBringasAtLife)
- Instagram: [@leobringasatlife](https://instagram.com/leobringasatlife)

---

## Licencia

Este proyecto está bajo la licencia ISC.