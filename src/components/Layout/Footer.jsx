import './Footer.css'

const equipo = [
  {
    nombre: 'María García',
    rol: 'CEO & Fundadora',
    descripcion: 'Apasionada por la tecnología y la innovación.',
  },
  {
    nombre: 'Juan Pérez',
    rol: 'Director de Tecnología',
    descripcion: 'Experto en desarrollo de software y sistemas.',
  },
  {
    nombre: 'Ana López',
    rol: 'Diseñadora UX/UI',
    descripcion: 'Creando experiencias digitales memorables.',
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-section">
            <h3>TechStore</h3>
            <p>Tu tienda de tecnología de confianza desde 2024.</p>
            <p>© 2026 TechStore. Todos los derechos reservados.</p>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <p>📧 contacto@techstore.com</p>
            <p>📞 +54 11 1234-5678</p>
            <p>📍 Av. Corrientes 1234, CABA</p>
          </div>

          <div className="footer-section">
            <h3>Links</h3>
            <ul className="footer-links">
              <li>Políticas de Privacidad</li>
              <li>Términos y Condiciones</li>
              <li>Newsletter</li>
              <li>Sucursales</li>
            </ul>
          </div>
        </div>

        <div className="footer-equipo">
          <h3>Nuestro Equipo</h3>
          <div className="equipo-cards">
            {equipo.map((persona, index) => (
              <div key={index} className="equipo-card">
                <div className="equipo-avatar">{persona.nombre.charAt(0)}</div>
                <h4>{persona.nombre}</h4>
                <p className="equipo-rol">{persona.rol}</p>
                <p className="equipo-desc">{persona.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
