import '../css/estilos.css'
import '../css/menu.css'
import '../css/registro.css'

function Registro() {
    return (
        <>
            <main className="registro-contenedor">
                <div className="registro-box">
                    {/* Columna Izquierda: Imagen del Logo */}
                    <div className="registro-imagen">
                        <img src="img/Logo.png" alt="MangaVerse Logo" />
                    </div>

                    {/* Columna Derecha: Formulario de Registro */}
                    <div className="registro-formulario">
                        <h2>Crear Cuenta</h2>
                        <p>Únete a MangaVerse para gestionar tu catálogo, compras y recibir descuentos.</p>

                        {/* Caja dinámica para alertas de validación */}
                        <div id="alerta-box" className="mensaje-alerta"></div>

                        <form id="form-registro">
                            <div className="campo-grupo">
                                <label htmlFor="reg-nombre">Nombre</label>
                                <input type="text" id="reg-nombre" placeholder="Ej: JeanToFranku" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="reg-apellido">Apellido</label>
                                <input type="text" id="reg-apellido" placeholder="Ej: Warrior" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="reg-usuario">Nombre de usuario</label>
                                <input type="text" id="reg-usuario" placeholder="Ej: Yofrein" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="reg-correo">Correo electrónico</label>
                                <input type="email" id="reg-correo" placeholder="ejemplo@duocuc.cl" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="reg-fecha">Fecha de nacimiento</label>
                                <input type="date" id="reg-fecha" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="reg-password">Contraseña</label>
                                <input type="password" id="reg-contrasena" placeholder="••••••••" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="reg-confirm-password">Confirmar contraseña</label>
                                <input type="password" id="reg-confirmar-contrasena" placeholder="••••••••" required />
                            </div>

                            <button type="submit" className="btn-registro">Registrarse</button>

                            <p className="texto-login">
                                ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Registro