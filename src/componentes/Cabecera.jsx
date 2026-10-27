import { Link, useLocation, useNavigate } from 'react-router-dom';
import Buscador from './Buscador';
import CerrarSesion from './CerrarSesion';
import { obtenerCuentaActiva } from '../data/almacenamiento';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/index.css'

function Cabecera() {
    const navegar = useNavigate();
    const ubicacion = useLocation();
    const usuario = localStorage.getItem('usuarioMangaVerse');
    const rol = obtenerCuentaActiva()?.rol || '';

    const manejarBusqueda = (texto) => {
        if (texto) navegar(`/catalogo?buscar=${encodeURIComponent(texto)}`);
        else navegar('/catalogo');
    };

    return (
        <>
            <header>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <img src="img/Logo.png" alt="MangaVerse" className="logo" />
                        </li>
                        <li><Link to="/" aria-current={ubicacion.pathname === '/' ? 'page' : undefined}>Inicio</Link></li>
                        <li><Link to="/catalogo" aria-current={ubicacion.pathname === '/catalogo' ? 'page' : undefined}>Catálogo</Link></li>
                        <li><Link to="/quienes-somos" aria-current={ubicacion.pathname === '/quienes-somos' ? 'page' : undefined}>Quiénes somos</Link></li>

                        <li>
                            <Buscador onBuscar={manejarBusqueda} />
                        </li>

                        <li>
                            <Link to="/carrito" className="nav-links-right">
                                <img src="img/Carrito.png" alt="Carrito" className="nav-icon" />
                                <span>Carrito</span>
                            </Link>
                        </li>
                        <li>
                            {usuario ? (
                                <div className="nav-account">
                                    <Link to={rol === 'admin' ? '/admin-dashboard' : '/mi-cuenta'} className="nav-links-right">
                                        <img src="img/User.png" alt="" className="nav-icon" />
                                        <span>{usuario}</span>
                                    </Link>
                                    <CerrarSesion />
                                </div>
                            ) : (
                                <Link to="/login" className="nav-links-right">
                                    <img src="img/User.png" alt="Mi cuenta" className="nav-icon" />
                                    <span>Mi cuenta</span>
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Cabecera