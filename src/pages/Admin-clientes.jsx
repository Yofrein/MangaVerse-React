import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminCliente() {
    return (
        <main className="seccion-admin">
            <div className="contenedor-admin">

                {/* Menú Lateral */}
                <aside className="panel-menu-admin">
                    <h1>Menú Admin</h1>
                    <ul className="admin-links-menu">
                        <li><a href="/admin-dashboard">Dashboard</a></li>
                        <li><a href="/admin-productos">Gestión de Productos</a></li>
                        <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                        <li><a href="/admin-dscto">Cupones y Descuentos</a></li>
                        <li><a href="/admin-clientes" className="activo">Clientes Registrados</a></li>
                        <li><a href="/">Salir al sitio</a></li>
                        <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                    </ul>
                </aside>

                {/* Contenido Principal */}
                <section className="admin-contenido-box">
                    <div className="admin-header-seccion">
                        <h2>Base de Usuarios</h2>
                        <p>Visualiza los clientes que han creado una cuenta en la plataforma.</p>
                    </div>

                    <div className="admin-tabla-container">
                        <table className="tabla-admin-inventario">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre Completo</th>
                                    <th>Correo Electrónico</th>
                                    <th>Rol</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="tabla-clientes-body">
                                {/* Los clientes se cargarán dinámicamente desde el JS */}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default AdminCliente