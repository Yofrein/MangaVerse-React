const formatoPrecio = (precio) => `$${precio.toLocaleString('es-CL')}`;

function ResumenCompra({ subtotal, envio, descuento }) {
    const total = Math.max(subtotal + envio - descuento, 0);

    return (
        <div aria-label="Resumen del pedido">
            <h3>Resumen del Pedido</h3>
            <div className="resumen-linea">
                <span>Subtotal:</span>
                <span id="resumen-subtotal">{formatoPrecio(subtotal)}</span>
            </div>
            <div className="resumen-linea">
                <span>Envío:</span>
                <span id="resumen-envio">{formatoPrecio(envio)}</span>
            </div>
            <div className="resumen-linea resumen-linea-descuento">
                <span>Descuento aplicado:</span>
                <span id="resumen-descuento">{descuento > 0 ? `-${formatoPrecio(descuento)}` : formatoPrecio(0)}</span>
            </div>
            <div className="resumen-linea resumen-total">
                <span>Total:</span>
                <span id="resumen-total">{formatoPrecio(total)}</span>
            </div>
        </div>
    );
}

export default ResumenCompra;
