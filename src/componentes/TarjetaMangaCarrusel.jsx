import '../css/estilos.css';
import '../css/menu.css';
import '../css/index.css';
import PrecioProducto from './PrecioProducto';

function TarjetaMangaCarrusel({ manga, onAnadirCarrito }) {
    return (
        <article className="recuadro-mangas">
            <div className="manga-imagen-izquierda">
                <img src={manga.img || manga.imagen} alt={manga.titulo} />
            </div>
            <div className="manga-info-derecha">
                <h1>{manga.titulo}</h1>
                {manga.descripcion && <p className="descripcion-manga">{manga.descripcion}</p>}
                <h2><PrecioProducto producto={manga} /></h2>
                <button className="anadir-carrito" onClick={() => onAnadirCarrito(manga)}>
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
}

export default TarjetaMangaCarrusel;
