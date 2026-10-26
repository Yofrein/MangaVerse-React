import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminProductos() {
    return (
        <>
            <main className="seccion-admin">
                <div className="contenedor-admin">

                    {/* Menú Lateral */}
                    <aside className="panel-menu-admin">
                        <h1>Menú Admin</h1>
                        <ul className="admin-links-menu">
                            <li><a href="/admin-dashboard">Dashboard</a></li>
                            <li><a href="/admin-productos" className="activo">Gestión de Productos</a></li>
                            <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                            <li><a href="/admin-dscto">Cupones y Descuentos</a></li>
                            <li><a href="/admin-clientes">Clientes Registrados</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </aside>

                    {/* Contenido Principal */}
                    <section className="admin-contenido-box">
                        <div className="admin-header-seccion">
                            <h2>Inventario de Mangas</h2>
                            <p>Agrega, edita o elimina los tomos disponibles en la tienda.</p>
                        </div>

                        <div className="admin-tabla-container">
                            <div className="tabla-acciones-superior">
                                <h3>Listado de Tomos</h3>
                                <button type="button" id="btn-nuevo-producto" className="btn-nuevo-producto">+ Agregar Nuevo Manga</button>
                            </div>

                            <table className="tabla-admin-inventario">
                                <thead>
                                    <tr>
                                        <th>Portada</th>
                                        <th>Título</th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-productos-body">
                                    {/* Los productos se cargarán dinámicamente */}
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}

export default AdminProductos