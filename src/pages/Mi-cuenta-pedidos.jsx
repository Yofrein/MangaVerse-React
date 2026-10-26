import '../css/estilos.css'
import '../css/menu.css'
import '../css/mi-cuenta.css'

function MiCuentaPedidos() {
    return (
        <>
            <main className="seccion-cuenta">
                <div className="contenedor-cuenta">

                    {/* Menú Lateral de Usuario */}
                    <aside className="panel-menu-cuenta">
                        <h1>Mi Perfil</h1>
                        <ul className="cuenta-links-menu">
                            <li><a href="/mi-cuenta">Administrar cuenta</a></li>
                            <li><a href="/mi-cuenta-contraseña">Cambiar contraseña</a></li>
                            <li><a href="/mi-cuenta-pedidos" className="activo">Mis pedidos</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </aside>

                    {/* Área de Contenido Principal */}
                    <section className="cuenta-contenido-box">

                        <div className="cuenta-header-seccion">
                            <h2>Historial de Compras</h2>
                            <p>Revisa el estado actual y los detalles de tus pedidos anteriores.</p>
                        </div>

                        <div className="cuenta-tabla-container">
                            <table className="tabla-cuenta">
                                <thead>
                                    <tr>
                                        <th>ID Pedido</th>
                                        <th>Fecha</th>
                                        <th>Productos</th>
                                        <th>Total Pagado</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>#MV-1048</strong></td>
                                        <td>20/10/2026</td>
                                        <td>Berserk 01, Chainsaw Man 24</td>
                                        <td>$23.000</td>
                                        <td><span className="estado-pedido estado-camino">En camino</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>#MV-1012</strong></td>
                                        <td>05/09/2026</td>
                                        <td>Jujutsu Kaisen 29</td>
                                        <td>$13.000</td>
                                        <td><span className="estado-pedido estado-entregado">Entregado</span></td>
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

export default MiCuentaPedidos