import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import Carrito from './pages/Carrito'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>
  )
}

export default App
