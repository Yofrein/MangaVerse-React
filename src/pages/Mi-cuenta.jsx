import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { guardarDatos, leerDatos, obtenerCuentaActiva } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/mi-cuenta.css'

function MiCuenta() {
    const cuenta = obtenerCuentaActiva();
    const [mensaje, setMensaje] = useState('');
    const cuentas = leerDatos('cuentasMangaVerse', []);

    const actualizarCuenta = (evento) => {
        evento.preventDefault();
        const datos = new FormData(evento.currentTarget);
        const usuario = datos.get('usuario').trim();
        const correo = datos.get('correo').trim();
        const usuarioOcupado = cuentas.some((item) =>
            item.usuario.toLowerCase() === usuario.toLowerCase() && item.usuario !== cuenta.usuario,
        );

        if (usuarioOcupado) {
            setMensaje('Ese nombre de usuario ya está en uso.');
            return;
        }

        const cuentaActualizada = { ...cuenta, usuario, correo };
        guardarDatos('cuentasMangaVerse', cuentas.map((item) =>
            item.usuario === cuenta.usuario ? cuentaActualizada : item,
        ));
        const cuentaRegistrada = leerDatos('cuentaRegistrada', null);
        if (cuentaRegistrada?.usuario === cuenta.usuario) {
            guardarDatos('cuentaRegistrada', cuentaActualizada);
        }
        localStorage.setItem('usuarioMangaVerse', usuario);
        setMensaje('Datos actualizados correctamente.');
    };

    return (
        <>
            <main className="seccion-cuenta">
                <div className="contenedor-cuenta">

                    {/* Menú Lateral de Usuario */}
                    <aside className="panel-menu-cuenta">
                        <h1>Mi Perfil</h1>
                        <ul className="cuenta-links-menu">
                            <li><Link to="/mi-cuenta" className="activo">Administrar cuenta</Link></li>
                            <li><Link to="/mi-cuenta-contraseña">Cambiar contraseña</Link></li>
                            <li><Link to="/mi-cuenta-pedidos">Mis pedidos</Link></li>
                            <li><Link to="/">Salir al sitio</Link></li>
                            <li><CerrarSesion /></li>
                        </ul>
                    </aside>

                    {/* Área de Contenido Principal */}
                    <section className="cuenta-contenido-box">

                        <div className="cuenta-header-seccion">
                            <h2>Detalles de tu cuenta</h2>
                            <p>Información de tu perfil personal y datos de contacto.</p>
                            {/* Contenedor para alertas dinámicas */}
                            {mensaje && <Alert id="alerta-box" variant={mensaje.startsWith('Ese') ? 'danger' : 'success'} role="status">{mensaje}</Alert>}
                        </div>

                        <div className="cuenta-tabla-container">
                            <form id="form-actualizar-cuenta" className="form-contenedor-perfil" onSubmit={actualizarCuenta}>

                                <div className="form-grupo-perfil">
                                    <label>Nombre</label>
                                    <input type="text" id="cuenta-nombre" value={cuenta?.nombre || ''} disabled readOnly />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Apellido</label>
                                    <input type="text" id="cuenta-apellido" value={cuenta?.apellido || ''} disabled readOnly />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Nombre de usuario</label>
                                    <input type="text" id="cuenta-usuario" name="usuario" defaultValue={cuenta?.usuario || ''} required />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Correo electrónico</label>
                                    <input type="email" id="cuenta-correo" name="correo" defaultValue={cuenta?.correo || ''} required />
                                </div>

                                <div className="form-grupo-perfil">
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" id="cuenta-fecha" value={cuenta?.fecha || ''} disabled readOnly />
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