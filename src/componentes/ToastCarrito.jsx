import { useEffect, useState } from 'react';
import '../css/toast.css';

function ToastCarrito() {
    const [notificacion, setNotificacion] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;

        const mostrarNotificacion = (evento) => {
            setNotificacion(evento.detail);
            setVisible(true);
            window.clearTimeout(temporizador);
            temporizador = window.setTimeout(() => setVisible(false), 3000);
        };

        window.addEventListener('mangaverse:carrito-actualizado', mostrarNotificacion);
        return () => {
            window.removeEventListener('mangaverse:carrito-actualizado', mostrarNotificacion);
            window.clearTimeout(temporizador);
        };
    }, []);

    if (!notificacion) return null;

    const textoUnidades = notificacion.unidades === 1 ? 'manga' : 'mangas';

    return (
        <div
            className={`toast-carrito${visible ? ' visible' : ''}`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
        >
            <span className="toast-carrito-icono" aria-hidden="true">✓</span>
            <span>
                <strong>{notificacion.titulo}</strong> añadido al carrito
                <small>{notificacion.unidades} {textoUnidades} en el carrito</small>
            </span>
        </div>
    );
}

export default ToastCarrito;
