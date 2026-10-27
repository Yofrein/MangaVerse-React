import { useNavigate } from 'react-router-dom';

function CerrarSesion() {
    const navegar = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem('usuarioMangaVerse');
        navegar('/login');
    };

    return (
        <button type="button" id="btn-cerrar-sesion" className="cerrar-sesion" onClick={cerrarSesion}>
            Cerrar sesión
        </button>
    );
}

export default CerrarSesion;
