import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
