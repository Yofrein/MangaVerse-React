import '../css/estilos.css'
import '../css/menu.css'
import '../css/mi-cuenta.css'

function MiCuenta() {
    return (
        <>
            <main className="seccion-cuenta">
                <div className="contenedor-cuenta">

                    {/* Menú Lateral de Usuario */}
                    <aside className="panel-menu-cuenta">
                        <h1>Mi Perfil</h1>
                        <ul className="cuenta-links-menu">
                            <li><a href="mi-cuenta.html" className="activo">Administrar cuenta</a></li>
                            <li><a href="mi-cuenta-contraseña.html">Cambiar contraseña</a></li>
                            <li><a href="mi-cuenta-pedidos.html">Mis pedidos</a></li>
                            <li><a href="index.html">Salir al sitio</a></li>
                            <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
                        </ul>
                    </aside>

                    {/* Área de Contenido Principal */}
                    <section className="cuenta-contenido-box">

                        <div className="cuenta-header-seccion">
                            <h2>Detalles de tu cuenta</h2>
                            <p>Información de tu perfil personal y datos de contacto.</p>
                            {/* Contenedor para alertas dinámicas */}
                            <div id="alerta-box" className="alerta-dinamica"></div>
                        </div>

                        <div className="cuenta-tabla-container">
                            <form id="form-actualizar-cuenta" className="form-contenedor-perfil">

                                <div className="form-grupo-perfil">
                                    <label>Nombre</label>
                                    <input type="text" id="cuenta-nombre" disabled />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Apellido</label>
                                    <input type="text" id="cuenta-apellido" disabled />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Nombre de usuario</label>
                                    <input type="text" id="cuenta-usuario" required />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Correo electrónico</label>
                                    <input type="email" id="cuenta-correo" required />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" id="cuenta-fecha" disabled />
                                </div>

                                <div>
                                    <button type="submit" className="btn-guardar-perfil">Guardar Cambios</button>
                                </div>

                            </form>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}

export default MiCuenta