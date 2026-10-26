import '../css/estilos.css'
import '../css/menu.css'
import '../css/contacto.css'


function Contacto() {
    return (
        <main className="seccion-contacto">
            <p className="subtitulo-contacto">
                ¿Tienes dudas o sugerencias? Envíanos un mensaje y te responderemos a la brevedad.
            </p>

            <div className="contacto-box">
                {/* Caja dinámica para alertas de validación */}
                <div id="alerta-box" className="mensaje-alerta"></div>

                <form action="" method="post" onSubmit={(e) => validacionFormulario(e)} className="form-contacto">

                    <div className="campo-grupo">
                        <label htmlFor="txtEmail">Correo electrónico:</label>
                        <input type="email" id="txtEmail" required placeholder="ejemplo@duocuc.cl" />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="txtAsunto">Asunto:</label>
                        <input type="text" id="txtAsunto" minLength="3" required placeholder="Ingrese el asunto" />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="txtMensaje">Mensaje:</label>
                        <textarea id="txtMensaje" cols="30" rows="4" required minLength="5"
                            placeholder="Escriba su mensaje aquí..."></textarea>
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="txtEdad">Edad:</label>
                        <input type="number" id="txtEdad" min="1" max="120" required placeholder="Ej: 20" />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="cboSexo">Sexo:</label>
                        <select id="cboSexo" required>
                            <option value="" selected disabled>Seleccione...</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="O">Otro</option>
                        </select>
                    </div>

                    <div className="grupo-botones">
                        <input type="submit" value="Enviar" className="btn-form btn-enviar" />
                        <input type="reset" value="Limpiar" className="btn-form btn-limpiar" />
                        <input type="button" value="Listar" onClick={() => listar()} className="btn-form btn-listar" />
                    </div>

                </form>

                {/* Contenedor para renderizar la tabla al presionar Listar */}
                <div id="salida" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}></div>
            </div>
        </main>
    )
}

export default Contacto