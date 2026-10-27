import { useState } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import { guardarDatos, leerDatos } from '../data/almacenamiento';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/contacto.css'


function Contacto() {
    const [mensaje, setMensaje] = useState('');
    const [tipoMensaje, setTipoMensaje] = useState('danger');
    const [contactos, setContactos] = useState(() => leerDatos('contactos', []));
    const [mostrarLista, setMostrarLista] = useState(false);

    const enviarContacto = (evento) => {
        evento.preventDefault();
        const datos = new FormData(evento.currentTarget);
        const edad = Number(datos.get('edad'));
        if (edad < 18) {
            setTipoMensaje('danger');
            setMensaje('Solo mayores de edad pueden enviar consultas.');
            return;
        }

        const contacto = {
            id: Date.now(),
            correo: datos.get('correo'),
            asunto: datos.get('asunto').trim(),
            edad,
            mensaje: datos.get('mensaje').trim(),
            sexo: datos.get('sexo'),
        };
        const nuevosContactos = [...contactos, contacto];
        setContactos(nuevosContactos);
        guardarDatos('contactos', nuevosContactos);
        setTipoMensaje('success');
        setMensaje('¡Mensaje de contacto enviado con éxito!');
        evento.currentTarget.reset();
    };

    return (
        <main className="seccion-contacto">
            <p className="subtitulo-contacto">
                ¿Tienes dudas o sugerencias? Envíanos un mensaje y te responderemos a la brevedad.
            </p>

            <div className="contacto-box">
                {/* Caja dinámica para alertas de validación */}
                {mensaje && <Alert id="alerta-box" variant={tipoMensaje} role="status">{mensaje}</Alert>}

                <form action="" method="post" onSubmit={enviarContacto} className="form-contacto">

                    <div className="campo-grupo">
                        <label htmlFor="txtEmail">Correo electrónico:</label>
                        <input type="email" id="txtEmail" name="correo" required placeholder="ejemplo@duocuc.cl" />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="txtAsunto">Asunto:</label>
                        <input type="text" id="txtAsunto" name="asunto" minLength="3" required placeholder="Ingrese el asunto" />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="txtMensaje">Mensaje:</label>
                        <textarea id="txtMensaje" name="mensaje" cols="30" rows="4" required minLength="5"
                            placeholder="Escriba su mensaje aquí..."></textarea>
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="txtEdad">Edad:</label>
                        <input type="number" id="txtEdad" name="edad" min="1" max="120" required placeholder="Ej: 20" />
                    </div>

                    <div className="campo-grupo">
                        <label htmlFor="cboSexo">Sexo:</label>
                        <select id="cboSexo" name="sexo" defaultValue="" required>
                            <option value="" disabled>Seleccione...</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="O">Otro</option>
                        </select>
                    </div>

                    <div className="grupo-botones">
                        <Button type="submit" value="Enviar" className="btn-form btn-enviar">Enviar</Button>
                        <Button type="reset" className="btn-form btn-limpiar">Limpiar</Button>
                        <Button type="button" onClick={() => setMostrarLista(!mostrarLista)} className="btn-form btn-listar">Listar</Button>
                    </div>

                </form>

                {/* Contenedor para renderizar la tabla al presionar Listar */}
                {mostrarLista && (
                    <div id="salida" className="mt-4">
                        {contactos.length === 0 ? <p>No hay mensajes de contacto registrados.</p> : (
                            <Table responsive striped>
                                <thead><tr><th>Asunto</th><th>Correo</th><th>ID Registro</th></tr></thead>
                                <tbody>{contactos.map((contacto) => (
                                    <tr key={contacto.id}>
                                        <td>{contacto.asunto}</td><td>{contacto.correo}</td><td>{contacto.id}</td>
                                    </tr>
                                ))}</tbody>
                            </Table>
                        )}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Contacto