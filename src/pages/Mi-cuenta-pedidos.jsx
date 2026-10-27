import '../css/estilos.css'
import '../css/menu.css'
import '../css/mi-cuenta.css'

function MiCuentaPedidos() {
    const cuenta = obtenerCuentaActiva();
    const pedidos = leerDatos('pedidosMangaVerse', [])
        .filter((pedido) => pedido.usuario === cuenta?.usuario);

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
                            <li><CerrarSesion /></li>
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
                                    {pedidos.length === 0 ? (
                                        <tr><td colSpan="5">Todavía no tienes pedidos.</td></tr>
                                    ) : pedidos.map((pedido) => (
                                        <tr key={pedido.id}>
                                            <td><strong>{pedido.id}</strong></td>
                                            <td>{pedido.fecha}</td>
                                            <td>{pedido.productos.map((producto) => `${producto.nombre} × ${producto.cantidad}`).join(', ')}</td>
                                            <td>{formatearPrecio(pedido.total)}</td>
                                            <td><span className="estado-pedido estado-entregado">{pedido.estado}</span></td>
                                        </tr>
                                    ))}
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
import CerrarSesion from '../componentes/CerrarSesion';
import { formatearPrecio, obtenerCuentaActiva, leerDatos } from '../data/almacenamiento';