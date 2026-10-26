import '../css/estilos.css'
import '../css/menu.css'
import '../css/login.css'

function Login() {
    return (
        <>
            <main className="login-contenedor">
                <div className="login-box">
                    <div className="login-imagen">
                        <img src="img/Logo.png" alt="MangaVerse Logo" />
                    </div>

                    {/* Columna Derecha: Formulario de Login */}
                    <div className="login-formulario">
                        <h2>Iniciar Sesión</h2>
                        <p>Ingresa tus datos para acceder a tu cuenta de MangaVerse</p>

                        {/* Caja dinámica para alertas de validación */}
                        <div id="alerta-box" className="mensaje-alerta"></div>

                        <form id="form-login">
                            <div className="campo-grupo">
                                <label htmlFor="usuario">Nombre de usuario</label>
                                <input type="text" id="usuario" placeholder="Ej: JeanToFranku" required />
                            </div>

                            <div className="campo-grupo">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password" placeholder="••••••••" required />
                            </div>

                            <button type="submit" className="btn-login">Ingresar</button>

                            <p className="texto-registro">
                                ¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login