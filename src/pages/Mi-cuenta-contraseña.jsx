import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { guardarDatos, leerDatos, obtenerCuentaActiva } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/mi-cuenta.css'

function MiCuentaContraseña() {
    const cuenta = obtenerCuentaActiva();
    const [mensaje, setMensaje] = useState('');
    const [exito, setExito] = useState(false);

    const cambiarPassword = (evento) => {
        evento.preventDefault();
        const datos = new FormData(evento.currentTarget);
        const actual = datos.get('actual');
        const nueva = datos.get('nueva');
        if (actual !== cuenta.pass) {
            setExito(false);
            setMensaje('La contraseña actual es incorrecta.');
            return;
        }
        if (nueva !== datos.get('confirmar')) {
            setExito(false);
            setMensaje('Las nuevas contraseñas no coinciden.');
            return;
        }

        const cuentas = leerDatos('cuentasMangaVerse', []);
        const actualizada = { ...cuenta, pass: nueva };
        guardarDatos('cuentasMangaVerse', cuentas.map((item) =>
            item.usuario === cuenta.usuario ? actualizada : item,
        ));
        const cuentaRegistrada = leerDatos('cuentaRegistrada', null);
        if (cuentaRegistrada?.usuario === cuenta.usuario) {
            guardarDatos('cuentaRegistrada', actualizada);
        }
        setExito(true);
        setMensaje('Contraseña actualizada correctamente.');
    };

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
                <li><CerrarSesion /></li>
            </ul>
        </aside>

        {/* Área de Contenido Principal */}
        <section className="admin-contenido-box">
            
            <div className="admin-header-seccion">
                <h2>Seguridad de la cuenta</h2>
                <p>Actualiza tu contraseña de acceso de forma segura.</p>
                {/* Contenedor para alertas dinámicas */}
                {mensaje && <Alert id="alerta-box" variant={exito ? 'success' : 'danger'} role="status">{mensaje}</Alert>}
            </div>

            {/* Formulario de Cambio de Contraseña */}
            <div className="admin-tabla-container">
                <form id="form-cambiar-password" className="form-contenedor-perfil" onSubmit={cambiarPassword}>
                    
                    <div className="form-grupo-perfil">
                        <label>Contraseña antigua</label>
                        <input type="password" id="pass-antigua" name="actual" placeholder="Ingresa tu contraseña actual" required />
                    </div>

                    <div className="form-grupo-perfil">
                        <label>Contraseña nueva</label>
                        <input type="password" id="pass-nueva" name="nueva" placeholder="Ingresa tu nueva contraseña" required />
                    </div>

                    <div className="form-grupo-perfil">
                        <label>Confirmar contraseña nueva</label>
                        <input type="password" id="pass-confirmar" name="confirmar" placeholder="Repite tu nueva contraseña" required />
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