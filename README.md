# 🛒 E-Commerce Project

Aplicación web de comercio electrónico desarrollada con **React**, **Vite** y **React Router DOM**.

---

## 🚀 Características

- **Página de Inicio (Home):** Sección principal con banner informativo y accesos directos a la tienda.
- **Catálogo de Productos (`ItemListContainer`):** Carga dinámica de productos desde datos locales (`productos.json`) con indicador de carga (*spinner*).
- **Detalle de Producto (`ItemDetail`):** Vista individual de cada producto mediante rutas dinámicas (`/producto/:id`).
- **Carrito de Compras (`Carrito`):** Sección dedicada a gestionar los productos seleccionados para la compra.
- **Layout Modular:** Componentes reutilizables para el encabezado (`Header`), barra de navegación (`NavBar`) y pie de página (`Footer`).
- **Ruteo Declarativo:** Navegación fluida utilizando `react-router-dom`.

---

## 🛠️ Tecnologías Utilizadas

- [React 19](https://react.dev/) - Biblioteca para construir interfaces de usuario.
- [Vite](https://vite.dev/) - Entorno de desarrollo rápido y empaquetador de módulos.
- [React Router DOM v7](https://reactrouter.com/) - Enrutamiento y navegación para aplicaciones SPA.
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) - Linter de alto rendimiento en JavaScript/React.
- **CSS3** - Estilos personalizados y diseño responsivo.

---

## 📁 Estructura del Proyecto

```plaintext
E-commerce/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── productos.json          # Datos de los productos
├── src/
│   ├── assets/                 # Imágenes y recursos estáticos
│   ├── components/
│   │   ├── Item/               # Tarjeta de producto individual
│   │   ├── ItemDetail/         # Vista detallada del producto
│   │   ├── ItemListContainer/  # Contenedor y grilla del catálogo
│   │   └── Layout/             # Estructura general (Header, NavBar, Footer)
│   ├── pages/
│   │   ├── Carrito.jsx         # Página del carrito de compras
│   │   └── Home.jsx            # Página de inicio
│   ├── App.jsx                 # Configuración de rutas y layout principal
│   ├── main.jsx                # Punto de entrada de la aplicación
│   └── index.css               # Estilos globales
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio o abrir la carpeta del proyecto:**
   ```bash
   cd E-commerce
   ```

2. **Instalar las dependencias:**
   Con **pnpm**:
   ```bash
   pnpm install
   ```
   *O alternativamente con **npm**:*
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm run dev
   # o
   npm run dev
   ```

4. **Abrir en el navegador:**
   Visita la URL local indicada en la consola (usualmente `http://localhost:5173`).

---

## 📜 Scripts Disponibles

- `pnpm run dev` / `npm run dev`: Inicia el servidor de desarrollo local con recarga rápida (HMR).
- `pnpm run build` / `npm run build`: Compila y optimiza la aplicación para producción en la carpeta `dist/`.
- `pnpm run preview` / `npm run preview`: Previsualiza localmente el build de producción.
- `pnpm run lint` / `npm run lint`: Ejecuta el linter (Oxlint) para análisis estático del código.