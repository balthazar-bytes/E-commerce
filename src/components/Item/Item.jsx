import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <div className="item-img-container">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="item-img"
        />
        <span className="item-categoria">{producto.categoria}</span>
      </div>
      <div className="item-info">
        <h3 className="item-nombre">{producto.nombre}</h3>
        <p className="item-precio">${producto.precio.toLocaleString('es-AR')}</p>
        <p className="item-stock">
          {producto.stock > 0 ? `Stock disponible: ${producto.stock}` : 'Sin stock'}
        </p>
        <Link to={`/producto/${producto.id}`} className="item-btn">
          Ver detalle
        </Link>
      </div>
    </div>
  )
}

export default Item
