import { calcularPrecioOferta, formatearPrecio } from '../data/almacenamiento';

function PrecioProducto({ producto }) {
    const precioOferta = calcularPrecioOferta(producto);
    const tieneOferta = precioOferta < Number(producto.precio);

    return (
        <span className="precio-producto">
            {tieneOferta && (
                <del className="precio-producto-original" aria-label="Precio original">
                    {formatearPrecio(producto.precio)}
                </del>
            )}
            <span className={tieneOferta ? 'precio-producto-oferta' : ''} aria-label={tieneOferta ? 'Precio oferta' : undefined}>
                {formatearPrecio(precioOferta)}
            </span>
            {tieneOferta && (
                <span className="precio-producto-descuento">
                    ({Number(producto.descuentoPorcentaje)}% de descuento)
                </span>
            )}
        </span>
    );
}

export default PrecioProducto;
