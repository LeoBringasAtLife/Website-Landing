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
- [Servicios Opcionales](#servicios-opcionales)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Despliegue](#despliegue)
- [Autor](#autor)

---

## Descripción del Proyecto

Landing page estática de un solo archivo (`index.html`) que funciona como **portfolio y herramienta de ventas** para servicios de desarrollo web freelance. El sitio presenta 7 planes de precios claramente definidos con features detalladas, e integra botones de WhatsApp para generar leads directamente.

### Objetivos

- **Generar leads**: Cada botón CTA envía a WhatsApp con mensaje pre-llenado
- **SEO completo**: JSON-LD con schema `ProfessionalService`, metas Open Graph, canonical URL
- **Totalmente responsive**: Diseño mobile-first adaptable a todos los dispositivos
- **Despliegue automático**: Push a `main` → GitHub Actions → GitHub Pages
- **PWA**: Web manifest permite "Añadir a pantalla de inicio"

---

## Características

- 7 planes de precios detallados (desde $90,000 hasta $1,700,000 ARS)
- Tabla comparativa de features entre planes
- 7 servicios opcionales adicionales
- Proceso de trabajo de 8 pasos documentado
- Botón flotante de WhatsApp para contacto rápido
- Menú de navegación sticky con hamburger responsive
- FAQ interactivo con acordeón
- Métodos de pago: transferencia bancaria y Mercado Pago
- Imagen Open Graph para compartir en redes sociales
- Web manifest para instalación como PWA

---

## Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Lenguaje | HTML, CSS, JavaScript | Vanilla |
| CSS Framework | Tailwind CSS | v3.4.19 |
| Fuentes | Google Fonts: Inter | 400, 500, 600, 700 |
| Despliegue | GitHub Pages | via GitHub Actions |
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
│   │   ├── global.css            # CSS fuente con clases Tailwind custom (168 líneas)
│   │   └── tailwind.min.css      # CSS compilado y minificado (generado automáticamente)
│   ├── image/
│   │   ├── og-image.png          # Imagen para compartir en redes sociales
│   │   ├── leo.webp              # Foto de perfil de Leonardo Bringas
│   │   ├── leo.ico               # Favicon del sitio
│   │   └── images.png            # Asset de imagen adicional
│   └── javascript/
│       └── main.js               # Lógica del menú móvil responsive (37 líneas)
├── index.html                    # Aplicación completa (1,359 líneas)
├── package.json                  # Configuración de proyecto y scripts npm
├── tailwind.config.js            # Configuración mínima de Tailwind CSS
├── site.webmanifest              # Manifest PWA para instalación
└── readme.md                     # Este archivo
```

---

## Secciones del Sitio

| Sección | Líneas | Descripción |
|---------|--------|-------------|
| `<head>` | 1-215 | Meta tags SEO, Open Graph, Twitter Card, JSON-LD estructurado, favicon, estilos |
| Botón WhatsApp | 219-237 | Botón flotante fijo en esquina inferior derecha |
| Header / Nav | 240-341 | Navegación sticky con menú hamburguesa responsive (slide-in) |
| Hero | 345-367 | Título principal: "Impulsa tu presencia digital..." con botones CTA |
| Beneficios | 370-387 | 3 estadísticas clave: 15-30 días, pago 50/50, 100% responsive/SEO |
| Planes | 390-636 | 7 niveles de servicio con features detalladas y botones WhatsApp |
| Tabla Comparativa | 639-826 | Comparación lado a lado de todos los planes (scroll horizontal en móvil) |
| Servicios Opcionales | 829-888 | 7 servicios adicionales: mantenimiento, SEO, urgencia, carga, branding, hosting, rediseño |
| Proceso de Trabajo | 891-977 | 8 pasos desde contacto inicial hasta soporte post-lanzamiento |
| Sobre Mí | 980-1003 | Foto de perfil + biografía |
| Métodos de Pago | 1006-1046 | Condiciones 50/50, transferencia bancaria y Mercado Pago |
| CTA Banner | 1049-1061 | Banner oscuro invitando a iniciar un proyecto |
| Contacto + FAQ | 1064-1288 | Información de email + 6 preguntas frecuentes con acordeón |
| Footer | 1292-1339 | Footer de 4 columnas con navegación, contacto y ubicación |
| Scripts | 1341-1355 | Carga de `main.js` + script inline del acordeón FAQ |

---

## Planes de Precios

| Plan | Precio (ARS) | Descripción |
|------|-------------|-------------|
| Landing Page Básica | $90,000 | Página única profesional para emprendedores |
| Landing Page Plus | $160,000 | Landing page con secciones adicionales |
| Sitio Web Corporativo | $350,000 | Sitio multipágina para empresas |
| E-commerce Básico | $600,000 | Tienda online con hasta 20 productos |
| E-commerce Completo | $950,000 | Tienda online con funcionalidades avanzadas |
| E-commerce Premium | $1,350,000 | Tienda online con todas las funcionalidades |
| Plan Personalizado | $1,700,000 | Desarrollo a medida según requerimientos |

---

## Servicios Opcionales

- **Mantenimiento mensual**: Actualizaciones y soporte continuo
- **Posicionamiento SEO**: Optimización para motores de búsqueda
- **Entrega en 72 horas**: Desarrollo con fecha límite ajustada
- **Carga de productos**: Subida de catálogo a la tienda online
- **Diseño de branding**: Creación de identidad visual
- **Hosting profesional**: Alojamiento del sitio web
- **Rediseño web**: Actualización de sitio existente

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

---

## Licencia

Este proyecto está bajo la licencia ISC.
