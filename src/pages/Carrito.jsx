import { Link } from 'react-router-dom'
import './Carrito.css'

const Carrito = () => {
  return (
    <div className="carrito">
      <h2 className="carrito-title">🛒 Mi Carrito</h2>
      <div className="carrito-empty">
        <span className="carrito-empty-icon">🛒</span>
        <p className="carrito-empty-text">Tu carrito está vacío</p>
        <p className="carrito-empty-sub">
          La funcionalidad del carrito estará disponible próximamente.
        </p>
        <Link to="/productos" className="carrito-btn">
          Ver productos
        </Link>
      </div>
    </div>
  )
}

export default Carrito
