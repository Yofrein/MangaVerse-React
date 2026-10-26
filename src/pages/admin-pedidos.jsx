import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminPedidos() {
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
                            <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </aside>

                    {/* Contenido Principal */}
                    <section className="admin-contenido-box">
                        <div className="admin-header-seccion">
                            <h2>Órdenes de Compra</h2>
                            <p>Revisa el estado de los envíos y despachos hacia las distintas regiones.</p>
                        </div>

                        <div className="admin-tabla-container">
                            <table className="tabla-admin-inventario">
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
                                    <tr>
                                        <td>#MV-1048</td>
                                        <td>Ignacio Valenzuela</td>
                                        <td>Región Metropolitana</td>
                                        <td>$23.000</td>
                                        <td><span className="estado-en-camino">En camino</span></td>
                                    </tr>
                                    <tr>
                                        <td>#MV-1049</td>
                                        <td>Fernanda Morales</td>
                                        <td>Región de Valparaíso</td>
                                        <td>$33.000</td>
                                        <td><span className="estado-preparando">Preparando</span></td>
                                    </tr>
                                    <tr>
                                        <td>#MV-1050</td>
                                        <td>Matías Soto</td>
                                        <td>Región del Biobío</td>
                                        <td>$13.000</td>
                                        <td><span className="estado-pendiente">Pendiente</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}

export default AdminPedidos