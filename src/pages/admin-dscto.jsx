import { useState } from 'react';
import { Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import { guardarDatos, leerDatos } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminDscto() {
    const [cupones, setCupones] = useState(() => leerDatos('cuponesMangaVerse', []));
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const guardarCupones = (nuevosCupones) => {
        setCupones(nuevosCupones);
        guardarDatos('cuponesMangaVerse', nuevosCupones);
    };
    const crearCupon = (evento) => {
        evento.preventDefault();
        const datos = new FormData(evento.currentTarget);
        const codigo = datos.get('codigo').trim().toUpperCase();
        const descuento = datos.get('descuento').trim();
        const inicio = datos.get('inicio');
        const vencimiento = datos.get('vencimiento');
        if (vencimiento < inicio) {
            setMensaje('La fecha de vencimiento no puede ser anterior a la fecha de inicio.');
            return;
        }
        if (cupones.some((cupon) => cupon.codigo === codigo)) {
            setMensaje('Ya existe un cupón con ese código.');
            return;
        }
        guardarCupones([...cupones, { codigo, descuento, inicio, vencimiento, estado: 'Activo' }]);
        setMostrarModal(false);
        setMensaje('Cupón creado correctamente.');
    };
    const cambiarEstado = (codigo) => {
        guardarCupones(cupones.map((cupon) => cupon.codigo === codigo
            ? { ...cupon, estado: cupon.estado === 'Activo' ? 'Expirado' : 'Activo' }
            : cupon));
    };
    const eliminarCupon = (codigo) => {
        if (window.confirm(`¿Eliminar el cupón ${codigo}?`)) {
            guardarCupones(cupones.filter((cupon) => cupon.codigo !== codigo));
        }
    };

    return (
        <>
            <main className="seccion-admin">
                <div className="contenedor-admin">

                    {/* Menú Lateral */}
                    <aside className="panel-menu-admin">
                        <h1>Menú Admin</h1>
                        <ul className="admin-links-menu">
                            <li><a href="/admin-dashboard">Dashboard</a></li>
                            <li><a href="/admin-productos">Gestión de Productos</a></li>
                            <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                            <li><a href="/admin-dscto" className="activo">Cupones y Descuentos</a></li>
                            <li><a href="/admin-clientes">Clientes Registrados</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><CerrarSesion /></li>
                        </ul>
                    </aside>

                    {/* Contenido Principal */}
                    <section className="admin-contenido-box">
                        <div className="admin-header-seccion">
                            <h2>Códigos Promocionales</h2>
                            <p>Administra los descuentos activos para el carrito de compras.</p>
                        </div>

                        <div className="admin-tabla-container">
                            <div className="tabla-acciones-superior">
                                <h3>Listado de Cupones</h3>
                                <Button type="button" id="btn-crear-cupon" className="btn-nuevo-producto" onClick={() => setMostrarModal(true)}>Crear código descuento</Button>
                            </div>

                            {mensaje && <Alert variant={mensaje.startsWith('Ya existe') || mensaje.startsWith('La fecha') ? 'danger' : 'success'} role="status">{mensaje}</Alert>}
                            <Table responsive className="tabla-admin-inventario">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Descuento</th>
                                        <th>Vigencia (Inicio - Vencimiento)</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-cupones-body">
                                    {cupones.length === 0 ? (
                                        <tr><td colSpan="5">No hay cupones registrados actualmente.</td></tr>
                                    ) : cupones.map((cupon) => (
                                        <tr key={cupon.codigo}>
                                            <td><strong>{cupon.codigo}</strong></td>
                                            <td>{cupon.descuento}</td>
                                            <td>{cupon.inicio} al {cupon.vencimiento}</td>
                                            <td>{cupon.estado}</td>
                                            <td>
                                                <Button size="sm" variant="outline-dark" onClick={() => cambiarEstado(cupon.codigo)}>
                                                    {cupon.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                                                </Button>{' '}
                                                <Button size="sm" variant="danger" onClick={() => eliminarCupon(cupon.codigo)}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </section>

                </div>
            </main>
            <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
                <Modal.Header closeButton><Modal.Title>Crear nuevo cupón</Modal.Title></Modal.Header>
                <Form onSubmit={crearCupon}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="input-codigo">
                            <Form.Label>Código del cupón</Form.Label>
                            <Form.Control name="codigo" placeholder="Ej: ANIVERSARIO" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="input-descuento">
                            <Form.Label>Descuento</Form.Label>
                            <Form.Control name="descuento" placeholder="Ej: 20% de rebaja o $5.000" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="input-inicio">
                            <Form.Label>Fecha de inicio</Form.Label>
                            <Form.Control name="inicio" type="date" required />
                        </Form.Group>
                        <Form.Group controlId="input-vencimiento">
                            <Form.Label>Fecha de vencimiento</Form.Label>
                            <Form.Control name="vencimiento" type="date" required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setMostrarModal(false)}>Cancelar</Button>
                        <Button type="submit" variant="dark">Guardar cupón</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AdminDscto