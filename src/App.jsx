import { useState } from 'react'

//import './App.css'
import Cabecera from './componentes/Cabecera'
import Banner from './componentes/Banner'
import Pie from './componentes/Pie'

import Home from './pages/Home'
import Contacto from './pages/Contacto'
import AdminClientes from './pages/Admin-clientes'
import AdminDscto from './pages/admin-dscto'
import AdminPedidos from './pages/admin-pedidos'
import AdminProductos from './pages/Admin-productos'
import AdminDashboard from './pages/admin-dashboard'
import Carrito from './pages/Carrito'
import Catalogo from './pages/Catalogo'
import CompraExitosa from './pages/Compra-exitosa'
import Login from './pages/Login'
import MiCuentaContraseña from './pages/Mi-cuenta-contraseña'
import MiCuentaPedidos from './pages/Mi-cuenta-pedidos'
import MiCuenta from './pages/Mi-cuenta'
import QuienesSomos from './pages/Quienes-somos'
import Registro from './pages/Registro'

import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner></Banner>
    <Cabecera></Cabecera>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/admin-clientes" element={<AdminClientes />} />
      <Route path="/admin-dscto" element={<AdminDscto />} />
      <Route path="/admin-pedidos" element={<AdminPedidos />} />
      <Route path="/admin-productos" element={<AdminProductos />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/compra-exitosa" element={<CompraExitosa />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mi-cuenta-contraseña" element={<MiCuentaContraseña />} />
      <Route path="/mi-cuenta-pedidos" element={<MiCuentaPedidos />} />
      <Route path="/mi-cuenta" element={<MiCuenta />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
    <Pie></Pie>
    </>
  )
}

export default App
