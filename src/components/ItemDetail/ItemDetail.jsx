import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === parseInt(id))
        setProducto(encontrado)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar el producto:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando producto...</p>
      </div>
    )
  }

  if (!producto) {
    return (
      <div className="item-detail-not-found">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscás no existe.</p>
        <Link to="/productos" className="back-btn">Volver a productos</Link>
      </div>
    )
  }

  return (
    <div className="item-detail">
      <Link to="/productos" className="back-link">← Volver a productos</Link>
      <div className="item-detail-content">
        <div className="item-detail-img-container">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="item-detail-img"
          />
        </div>
        <div className="item-detail-info">
          <span className="item-detail-categoria">{producto.categoria}</span>
          <h2 className="item-detail-nombre">{producto.nombre}</h2>
          <p className="item-detail-precio">${producto.precio.toLocaleString('es-AR')}</p>
          <p className="item-detail-descripcion">{producto.descripcion}</p>
          <p className="item-detail-stock">
            {producto.stock > 0
              ? `✅ Stock disponible: ${producto.stock} unidades`
              : '❌ Sin stock'}
          </p>
          <button className="item-detail-btn" disabled={producto.stock === 0}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
