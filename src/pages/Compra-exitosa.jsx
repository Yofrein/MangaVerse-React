import '../css/estilos.css'
import '../css/menu.css'
import '../css/carrito.css'
import '../css/compra-exitosa.css'

function CompraExitosa() {
    return (
        <>
            <main>
                <section className="seccion-exito">
                    <div className="exito-titulo">
                        <h3>¡Muchas gracias por tu compra!</h3>
                        <h1>Tu pedido ha sido recibido🎉</h1>
                    </div>

                    {/* Contenedor dinámico de miniaturas de productos */}
                    <div id="exito-productos-container" className="exito-productos-grid">
                        {/* Se llena mediante JS */}
                    </div>

                    {/* Detalles del pedido */}
                    <div className="exito-detalles">
                        <div className="exito-detalle-linea">
                            <span>Numero de pedido:</span>
                            <span id="detalle-codigo">#0123_45678</span>
                        </div>
                        <div className="exito-detalle-linea">
                            <span>Fecha:</span>
                            <span id="detalle-fecha">October 19, 2023</span>
                        </div>
                        <div className="exito-detalle-linea">
                            <span>Total:</span>
                            <span id="detalle-total">$0</span>
                        </div>
                        <div className="exito-detalle-linea">
                            <span>Método de pago:</span>
                            <span>Webpay</span>
                        </div>
                    </div>

                    <div>
                        <a href="/" className="btn-historial">Volver al inicio</a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CompraExitosa