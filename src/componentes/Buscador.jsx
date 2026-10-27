import { useState } from 'react';

function Buscador({ onBuscar }) {
    const [texto, setTexto] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault(); // evita que la página se recargue
        onBuscar?.(texto.trim());
    };

    return (
        <form className="search-box" onSubmit={manejarEnvio}>
            <input
                type="text"
                placeholder="Buscar manga..."
                className="search-input"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <button type="submit" className="search-btn">
                <img src="img/Buscador.png" alt="Buscar" className="search-btn" />
            </button>
        </form>
    );
}

export default Buscador;