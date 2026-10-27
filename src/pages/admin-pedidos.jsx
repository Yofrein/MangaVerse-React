import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminPedidos() {
    const pedidos = leerDatos('pedidosMangaVerse', []);

    return (
        <>
            <main className="seccion-admin">
                <div className="contenedor-admin">

                    {/* Menú Lateral */}
                    <aside className="panel-menu-admin">
                        <h1>Menú Admin</h1>
                        <ul className="admin-links-menu">
                            <li><a href="/admin-dashboard">Dashboard</a></li>
                            <li><a href="/admin-productos">Gestión de Productos</a></li>
                            <li><a href="/admin-pedidos" className="activo">Pedidos Recientes</a></li>
                            <li><a href="/admin-dscto">Cupones y Descuentos</a></li>
                            <li><a href="/admin-clientes">Clientes Registrados</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><CerrarSesion /></li>
                        </ul>
                    </aside>

                    {/* Contenido Principal */}
                    <section className="admin-contenido-box">
                        <div className="admin-header-seccion">
                            <h2>Órdenes de Compra</h2>
                            <p>Revisa el estado de los envíos y despachos hacia las distintas regiones.</p>
                        </div>

                        <div className="admin-tabla-container">
                            <Table responsive className="tabla-admin-inventario">
                                <thead>
                                    <tr>
                                        <th>ID Pedido</th>
                                        <th>Cliente</th>
                                        <th>Región de Despacho</th>
                                        <th>Total Pagado</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {pedidos.length === 0 ? (
                                            <tr><td colSpan="5">Todavía no hay pedidos registrados.</td></tr>
                                        ) : pedidos.map((pedido) => (
                                            <tr key={pedido.id}>
                                                <td>{pedido.id}</td>
                                                <td>{pedido.usuario}</td>
                                                <td>{pedido.region || 'No especificada'}</td>
                                                <td>{formatearPrecio(pedido.total)}</td>
                                                <td><span className="estado-pedido">{pedido.estado}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </Table>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}

export default AdminPedidos
import { Table } from 'react-bootstrap';
import { formatearPrecio, leerDatos } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';