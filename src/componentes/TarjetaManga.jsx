import '../css/estilos.css';
import '../css/menu.css';
import '../css/catalogo.css';

function TarjetaManga({ manga, onAnadirCarrito }) {
    const { titulo, precio, img } = manga;

    return (
        <div className="card-manga">
            <img src={img} alt={titulo} />
            <h3>{titulo}</h3>
            <p className="precio">${precio.toLocaleString('es-CL')}</p>
            <button className="anadir-carrito" onClick={() => onAnadirCarrito(manga)}>
                Añadir al carrito
            </button>
        </div>
    );
}

export default TarjetaManga;