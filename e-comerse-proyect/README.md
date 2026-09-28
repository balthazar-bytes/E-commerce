# 🛒 TechStore - E-Commerce React

Proyecto de e-commerce desarrollado con React JS para la Pre-Entrega del curso de React JS 2026-2C.

## 📋 Descripción

TechStore es una tienda de tecnología online que permite visualizar un catálogo de productos, ver el detalle de cada producto y navegar de forma fluida entre las distintas secciones de la aplicación.

## 🛠️ Tecnologías

- **React** - Biblioteca principal para la UI
- **React Router DOM** - Sistema de ruteo y navegación
- **CSS** - Estilos nativos por componente

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador: `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── NavBar.jsx
│   │   └── Footer.jsx
│   ├── ItemListContainer/
│   │   └── ItemListContainer.jsx
│   ├── Item/
│   │   └── Item.jsx
│   └── ItemDetail/
│       └── ItemDetail.jsx
├── pages/
│   ├── Home.jsx
│   └── Carrito.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🗺️ Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página de bienvenida |
| `/productos` | ItemListContainer | Catálogo de productos |
| `/producto/:id` | ItemDetail | Detalle de un producto |
| `/carrito` | Carrito | Carrito de compras |

## 📌 Estado del Proyecto

### ✅ Pre-Entrega (Completado)
- Estructura de carpetas organizada
- Componente Layout con Header, NavBar y Footer
- Catálogo de productos con fetch desde archivo JSON
- Componente Item reutilizable con props
- Sistema de ruteo con react-router-dom
- Navegación fluida con componente Link

### 🔜 Entrega Final (Pendiente)
- Funcionalidad del carrito con Context API
- Alojamiento online
