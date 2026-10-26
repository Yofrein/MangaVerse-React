import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminDscto() {
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
                            <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                            <li><a href="/admin-dscto" className="activo">Cupones y Descuentos</a></li>
                            <li><a href="/admin-clientes">Clientes Registrados</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </aside>

                    {/* Contenido Principal */}
                    <section className="admin-contenido-box">
                        <div className="admin-header-seccion">
                            <h2>Códigos Promocionales</h2>
                            <p>Administra los descuentos activos para el carrito de compras.</p>
                        </div>

                        <div className="admin-tabla-container">
                            <div className="tabla-acciones-superior">
                                <h3>Listado de Cupones</h3>
                                <button type="button" id="btn-crear-cupon" className="btn-nuevo-producto">Crear codigo dscto</button>
                            </div>

                            <table className="tabla-admin-inventario">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Descuento</th>
                                        <th>Vigencia (Inicio - Vencimiento)</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-cupones-body">
                                    {/* Los cupones se cargarán dinámicamente */}
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}

export default AdminDscto