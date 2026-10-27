import Buscador from './Buscador';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/index.css'

function Cabecera() {

    return (
        <>
            <header>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <img src="img/Logo.png" alt="MangaVerse" className="logo" />
                        </li>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/catalogo">Catalogo</a></li>
                        <li><a href="/quienes-somos">Quienes somos</a></li>

                        <li>
                            <Buscador />
                        </li>

                        <li>
                            <a href="/carrito" className="nav-links-right">
                                <img src="img/Carrito.png" alt="Carrito" className="nav-icon" />
                                <span>Carrito</span>
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="nav-links-right">
                                <img src="img/User.png" alt="Mi cuenta" className="nav-icon" />
                                <span>Mi cuenta</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Cabecera