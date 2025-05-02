
# EKSTASIS Landing Page

Landing page oficial del evento EKSTASIS, construida con **Next.js**, **Tailwind CSS** y **React Icons**.

## 🚀 Tecnologías

- [Next.js](https://nextjs.org/) 14 (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- JavaScript (sin TypeScript para mayor simplicidad)

---

## 📦 Instalación

1. Clona este repositorio o descomprime el archivo ZIP.
2. Instala las dependencias:

```bash
npm install
```

> Asegúrate de instalar también `react-icons`, ya que se usa en el menú:

```bash
npm install react-icons
```

---

## 🛠️ Estructura del Proyecto

- `/app`: Contiene las rutas (layout y página principal).
- `/components`: Secciones de la landing como `HeroSection`, `EventSection`, `Footer`, `MenuOverlay`.
- `/public/images`: Guarda aquí tus imágenes de eventos.
- `/styles/globals.css`: Estilos base con Tailwind.

---

## 🎨 Tailwind CSS

Ya está configurado correctamente:

- `tailwind.config.js`
- `postcss.config.js`
- `globals.css` importado en el layout

Si no ves estilos, asegúrate de ejecutar:

```bash
npm run dev
```

Y que no haya errores en consola.

---

## 🖼️ Imágenes

Guarda tus flyers o imágenes de eventos en `public/images` y modifica el array en `components/EventSection.js`:

```js
const events = [
  {
    image: '/images/ekstasis-event1.jpg',
    url: 'https://link-a-evento1.com',
  },
  ...
];
```

---

## 🌐 Despliegue en Vercel

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Sube este proyecto o conecta tu repo de GitHub.
3. Vercel detectará que es un proyecto Next.js automáticamente.

---

## 🧠 Notas Finales

- El vídeo debe ir en `public/video.mp4` (puedes cambiar el nombre en `HeroSection.js`)
- El logo debe ir como `/public/logo.png`
- La fecha del contador se puede cambiar en el mismo componente.

---

## 🧡 EKSTASIS 2025

Aquí no se baila, **se vuela**.
