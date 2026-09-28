import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">🛒 TechStore</Link>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/carrito" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              🛒 Carrito
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
