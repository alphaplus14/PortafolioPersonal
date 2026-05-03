# Portafolio personal — César Rodas

Sitio web de una sola página que presenta proyectos y habilidades técnicas. El contenido dinámico (proyectos y skills) se obtiene desde una API REST desplegada en **Vercel**; la aplicación frontend se sirve desde **Netlify**.

## Demo en producción

- **Frontend:** [https://portafoliome.netlify.app/](https://portafoliome.netlify.app/)

## API (backend)

- **Base URL:** `https://api-portafolio-bay.vercel.app`
- **Endpoints usados por esta app:**
  - `GET /api/proyectos` — lista de proyectos (tarjetas con imagen, título, descripción, enlaces a código y demo).
  - `GET /api/habilidades` — lista de habilidades (nombre, nivel, URL del ícono).

La API puede vivir en otro repositorio o proyecto; este frontend solo consume esas rutas mediante `fetch`.

## Características

- **Secciones:** navegación fija, hero con mensajes rotativos, proyectos, habilidades, contacto y pie de página.
- **Modo claro / oscuro:** interruptor en la barra de navegación, preferencia guardada en `localStorage` (`portfolio-theme`) y respuesta a `prefers-color-scheme` en la primera visita.
- **Datos remotos:** proyectos y habilidades cargados al montar los componentes correspondientes.
- **Estados de UI:** indicadores de carga (skeletons) y mensajes si la API no responde o devuelve listas vacías.
- **Accesibilidad básica:** etiquetas `aria` en navegación y carrusel del hero, foco visible en controles interactivos.

## Stack tecnológico

| Área        | Tecnología                          |
| ----------- | ----------------------------------- |
| UI          | React 19                            |
| Build       | Vite 8                              |
| Estilos     | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Tipografía  | Plus Jakarta Sans (Google Fonts)    |
| Calidad     | ESLint 9 (flat config)              |

## Estructura del repositorio

```
PortafolioPersonal/
├── public/                 # Activos estáticos (p. ej. icons.svg)
├── src/
│   ├── components/         # Navbar, Hero, Projects, Skills, Contact, Footer
│   ├── context/            # Tema: ThemeProvider, theme-context, useTheme
│   ├── App.jsx             # Orden de las secciones
│   ├── main.jsx            # Punto de entrada + ThemeProvider
│   └── index.css           # Tailwind, variante dark por clase, estilos globales
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Requisitos previos

- **Node.js** (recomendado: versión LTS actual).
- **npm** (incluido con Node).

## Instalación y uso local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (hot reload)
npm run dev

# Comprobar lint
npm run lint

# Build de producción → carpeta dist/
npm run build

# Previsualizar el build localmente
npm run preview
```

Por defecto Vite sirve en `http://localhost:5173` (el puerto puede variar si está ocupado).

## Despliegue en Netlify

La demo pública está en [portafoliome.netlify.app](https://portafoliome.netlify.app/). Configuración típica:

| Campo              | Valor        |
| ------------------ | ------------ |
| Comando de build   | `npm run build` |
| Directorio publicado | `dist`    |

No hace falta configuración especial de servidor: es una SPA estática; las rutas son anclas (`#hero`, `#proyectos`, etc.) dentro del mismo `index.html`.

**Nota:** Si la API en Vercel no define CORS para tu dominio de Netlify y aparecen errores en red, hay que permitir el origen `https://portafoliome.netlify.app` (u otros dominios personalizados) en el backend.

## Personalización rápida

- **Enlaces de contacto:** edita el array `contactos` en `src/components/Contact.jsx` (`enlace`, textos).
- **Nombre y hero:** textos en `src/components/Hero.jsx` y marca en `src/components/Navbar.jsx` / `Footer.jsx`.
- **Cambiar la URL de la API:** sustituye la cadena base en `src/components/Projects.jsx` y `src/components/Skills.jsx`, o extráela a una variable de entorno de Vite (`import.meta.env.VITE_API_URL`) si prefieres no hardcodearla.

## Licencia

Este proyecto es de uso personal / educativo salvo que indiques lo contrario en el repositorio.

---

**Autor:** César Augusto Rodas · Frontend desplegado en **Netlify** · API en **Vercel**.
