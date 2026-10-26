import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminDashboard() {
    return (
        <>
            <main className="seccion-admin">
                <div className="contenedor-admin">

                    {/* Menú Lateral */}
                    <aside className="panel-menu-admin">
                        <h1>Menú Admin</h1>
                        <ul className="admin-links-menu">
                            <li><a href="/admin-dashboard" className="activo">Dashboard</a></li>
                            <li><a href="/admin-productos">Gestión de Productos</a></li>
                            <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                            <li><a href="/admin-dscto">Cupones y Descuentos</a></li>
                            <li><a href="/admin-clientes">Clientes Registrados</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </aside>

                    {/* Área de Contenido Principal */}
                    <section className="admin-contenido-box">

                        <div className="admin-header-seccion">
                            <h2>Bienvenido al Panel de Control</h2>
                            <p>Selecciona una opción del menú lateral para gestionar la tienda.</p>
                        </div>

                        {/* Resumen de métricas */}
                        <div className="admin-metricas-grid">
                            <div className="metrica-card">
                                <h3>Ventas del Mes</h3>
                                <p className="valor-metrica">$450.000</p>
                            </div>
                            <div className="metrica-card">
                                <h3>Pedidos Pendientes</h3>
                                <p className="valor-metrica">8</p>
                            </div>
                            <div className="metrica-card">
                                <h3>Mangas en Stock</h3>
                                <p className="valor-metrica">124</p>
                            </div>
                        </div>

                        {/* Tabla de Inventario Rápido */}
                        <div className="admin-tabla-container">
                            <div className="tabla-acciones-superior">
                                <h3>Inventario Rápido</h3>
                                <button className="btn-nuevo-producto">+ Agregar Nuevo Manga</button>
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
                                <tbody>
                                    <tr>
                                        <td><img src="img/Mangas/Berserk 01.jpg" alt="Manga" className="img-tabla-manga" /></td>
                                        <td>Berserk 01</td>
                                        <td>$10.000</td>
                                        <td>15</td>
                                        <td>
                                            <button className="btn-accion editar">Editar</button>
                                            <button className="btn-accion eliminar">Eliminar</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="img/Mangas/Chainsaw man 24.png" alt="Manga" className="img-tabla-manga" /></td>
                                        <td>Chainsaw Man 24</td>
                                        <td>$10.000</td>
                                        <td>22</td>
                                        <td>
                                            <button className="btn-accion editar">Editar</button>
                                            <button className="btn-accion eliminar">Eliminar</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="img/Mangas/Jujutsu kaisen 29.jpg" alt="Manga" className="img-tabla-manga" /></td>
                                        <td>Jujutsu Kaisen 29</td>
                                        <td>$10.000</td>
                                        <td>9</td>
                                        <td>
                                            <button className="btn-accion editar">Editar</button>
                                            <button className="btn-accion eliminar">Eliminar</button>
                                        </td>
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

export default AdminDashboard