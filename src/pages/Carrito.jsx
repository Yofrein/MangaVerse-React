import '../css/estilos.css'
import '../css/menu.css'
import '../css/carrito.css'

function Carrito() {
    return (
        <>
            <main>
                {/* Titulo superior */}
                <section>
                    <h1 className="titulo-seccion">
                        <span>Carrito de Compras</span>
                    </h1>
                </section>

                {/* Contenido Principal del Carrito */}
                <section className="seccion-carrito">
                    <div className="carrito-contenedor">

                        {/* Tabla de Productos Seleccionados */}
                        <div className="carrito-tabla-box">
                            <table className="tabla-carrito">
                                <thead>
                                    <tr>
                                        <th>Manga</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-carrito-cuerpo">
                                    {/* Los productos añadidos se cargarán dinámicamente aquí */}
                                </tbody>
                            </table>
                        </div>

                        {/* Resumen de la Compra */}
                        <div className="carrito-resumen-box">
                            <div>
                                <h3>Resumen del Pedido</h3>
                                <div className="resumen-linea">
                                    <span>Subtotal:</span>
                                    <span id="resumen-subtotal">$0</span>
                                </div>
                                <div className="resumen-linea">
                                    <span>Envío:</span>
                                    <span id="resumen-envio">$3.000</span>
                                </div>
                                {/* Nueva línea para mostrar el descuento aplicado */}
                                <div className="resumen-linea resumen-linea-descuento">
                                    <span>Descuento aplicado:</span>
                                    <span id="resumen-descuento">$0</span>
                                </div>
                                <div className="resumen-linea resumen-total">
                                    <span>Total:</span>
                                    <span id="resumen-total">$3.000</span>
                                </div>

                                {/* Sección de Código de Descuento */}
                                <div className="cupon-container">
                                    <label htmlFor="codigo-descuento">Introducir código de descuento</label>
                                    <div className="cupon-input-grupo">
                                        <input type="text" id="codigo-descuento" placeholder="Introducir código de descuento" />
                                        <button type="button" className="btn-aplicar-cupon">Aplicar descuento</button>
                                    </div>
                                </div>

                                {/* Sección de Región */}
                                <div className="region-container">
                                    <label htmlFor="select-region">Región</label>
                                    <div className="region-select-grupo">
                                        <select id="select-region" defaultValue="">
                                            <option value="" disabled>Seleccione una región</option>
                                            <option value="arica">Región de Arica y Parinacota</option>
                                            <option value="tarapaca">Región de Tarapacá</option>
                                            <option value="antofagasta">Región de Antofagasta</option>
                                            <option value="atacama">Región de Atacama</option>
                                            <option value="coquimbo">Región de Coquimbo</option>
                                            <option value="valparaiso">Región de Valparaíso</option>
                                            <option value="metropolitana">Región Metropolitana de Santiago</option>
                                            <option value="ohiggins">Región del Libertador Gral. Bernardo O'Higgins</option>
                                            <option value="maule">Región del Maule</option>
                                            <option value="nuble">Región de Ñuble</option>
                                            <option value="biobio">Región del Biobío</option>
                                            <option value="araucania">Región de La Araucanía</option>
                                            <option value="rios">Región de Los Ríos</option>
                                            <option value="lagos">Región de Los Lagos</option>
                                            <option value="aysen">Región de Aysén del Gral. Carlos Ibáñez del Campo</option>
                                            <option value="magallanes">Región de Magallanes y de la Antártica Chilena</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="carrito-botones-accion">
                                <button id="btn-pagar" className="btn-pagar">Proceder al Pago</button>
                                <a href="index.html" className="btn-seguir-comprando">Seguir comprando</a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Carrito