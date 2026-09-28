import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    )
  }

  return (
    <div className="item-list-container">
      <h2 className="item-list-title">Nuestros Productos</h2>
      <div className="item-list">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer
