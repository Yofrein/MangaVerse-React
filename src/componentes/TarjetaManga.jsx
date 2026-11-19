import '../css/estilos.css';
import '../css/menu.css';
import '../css/catalogo.css';
import PrecioProducto from './PrecioProducto';

function TarjetaManga({ manga, onAnadirCarrito, className = '' }) {
    const { titulo, img } = manga;

    return (
        <div className={`card-manga ${className}`.trim()}>
            <img src={img || manga.imagen} alt={titulo} />
            <h3>{titulo}</h3>
            {manga.descripcion && <p className="descripcion-manga">{manga.descripcion}</p>}
            <p className="precio"><PrecioProducto producto={manga} /></p>
            <button className="anadir-carrito" onClick={() => onAnadirCarrito(manga)}>
                Añadir al carrito
            </button>
        </div>
    );
}

export default TarjetaManga;