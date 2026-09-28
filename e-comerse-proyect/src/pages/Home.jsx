import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Bienvenidos a TechStore</h1>
        <p className="hero-subtitle">
          Encontrá los mejores productos de tecnología al mejor precio.
          Notebooks, periféricos, audio y más.
        </p>
        <Link to="/productos" className="hero-btn">
          Ver productos
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <h3>Envío Gratis</h3>
          <p>En compras mayores a $50.000</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <h3>Compra Segura</h3>
          <p>Tus datos siempre protegidos</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💳</span>
          <h3>Hasta 12 Cuotas</h3>
          <p>Con todas las tarjetas</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🎧</span>
          <h3>Soporte 24/7</h3>
          <p>Estamos para ayudarte</p>
        </div>
      </section>
    </div>
  )
}

export default Home
