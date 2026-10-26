import '../css/estilos.css'
import '../css/menu.css'
import '../css/mi-cuenta.css'

function MiCuentaContraseña() {
    return (
        <>
        <main className="seccion-admin">
    <div className="contenedor-admin">

        {/* Menú Lateral de Usuario */}
        <aside className="panel-menu-admin">
            <h1>Mi Perfil</h1>
            <ul className="admin-links-menu">
                <li><a href="/mi-cuenta">Administrar cuenta</a></li>
                <li><a href="/mi-cuenta-contraseña" className="activo">Cambiar contraseña</a></li>
                <li><a href="/mi-cuenta-pedidos">Mis pedidos</a></li>
                <li><a href="/">Salir al sitio</a></li>
                <li><a href="#" id="btn-cerrar-sesion" className="cerrar-sesion">Cerrar sesión</a></li>
            </ul>
        </aside>

        {/* Área de Contenido Principal */}
        <section className="admin-contenido-box">
            
            <div className="admin-header-seccion">
                <h2>Seguridad de la cuenta</h2>
                <p>Actualiza tu contraseña de acceso de forma segura.</p>
                {/* Contenedor para alertas dinámicas */}
                <div id="alerta-box" className="alerta-dinamica"></div>
            </div>

            {/* Formulario de Cambio de Contraseña */}
            <div className="admin-tabla-container">
                <form id="form-cambiar-password" className="form-contenedor-perfil">
                    
                    <div className="form-grupo-perfil">
                        <label>Contraseña antigua</label>
                        <input type="password" id="pass-antigua" placeholder="Ingresa tu contraseña actual" required />
                    </div>

                    <div className="form-grupo-perfil">
                        <label>Contraseña nueva</label>
                        <input type="password" id="pass-nueva" placeholder="Ingresa tu nueva contraseña" required />
                    </div>

                    <div className="form-grupo-perfil">
                        <label>Confirmar contraseña nueva</label>
                        <input type="password" id="pass-confirmar" placeholder="Repite tu nueva contraseña" required />
                    </div>

                    <div>
                        <button type="submit" className="btn-nuevo-producto">Actualizar Contraseña</button>
                    </div>

                </form>
            </div>

        </section>
    </div>
</main>
        </>
    )
}

export default MiCuentaContraseña