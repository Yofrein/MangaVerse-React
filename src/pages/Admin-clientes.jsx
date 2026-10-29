import { useState } from 'react';
import { Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import { formatearPrecio, guardarDatos, leerDatos } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminCliente() {
    const [clientes, setClientes] = useState(() => leerDatos('cuentasMangaVerse', []));
    const [pedidos, setPedidos] = useState(() => leerDatos('pedidosMangaVerse', []));
    const [clienteEditando, setClienteEditando] = useState(null);
    const [clienteHistorial, setClienteHistorial] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [errorEdicion, setErrorEdicion] = useState('');
    const eliminarCliente = (usuario) => {
        if (!window.confirm(`¿Eliminar la cuenta de ${usuario}?`)) return;
        const nuevosClientes = clientes.filter((cliente) => cliente.usuario !== usuario);
        setClientes(nuevosClientes);
        guardarDatos('cuentasMangaVerse', nuevosClientes);
    };
    const abrirEdicion = (cliente) => {
        setMensaje('');
        setErrorEdicion('');
        setClienteEditando(cliente);
    };
    const guardarEdicion = (evento) => {
        evento.preventDefault();
        const datos = new FormData(evento.currentTarget);
        const usuario = datos.get('usuario').trim();

        if (clientes.some((cliente) =>
            cliente.usuario.toLocaleLowerCase('es') === usuario.toLocaleLowerCase('es') &&
            cliente.usuario !== clienteEditando.usuario,
        )) {
            setErrorEdicion('Ese alias ya está en uso.');
            return;
        }

        const clienteActualizado = {
            ...clienteEditando,
            nombre: datos.get('nombre').trim(),
            apellido: datos.get('apellido').trim(),
            fecha: datos.get('fecha'),
            correo: datos.get('correo').trim(),
            usuario,
        };
        const clientesActualizados = clientes.map((cliente) =>
            cliente.usuario === clienteEditando.usuario ? clienteActualizado : cliente,
        );
        setClientes(clientesActualizados);
        guardarDatos('cuentasMangaVerse', clientesActualizados);
        if (usuario !== clienteEditando.usuario) {
            const pedidosActualizados = pedidos.map((pedido) =>
                pedido.usuario === clienteEditando.usuario ? { ...pedido, usuario } : pedido,
            );
            setPedidos(pedidosActualizados);
            guardarDatos('pedidosMangaVerse', pedidosActualizados);
        }

        const cuentaRegistrada = JSON.parse(localStorage.getItem('cuentaRegistrada') || 'null');
        if (cuentaRegistrada?.usuario === clienteEditando.usuario) {
            guardarDatos('cuentaRegistrada', { ...cuentaRegistrada, ...clienteActualizado });
        }
        if (localStorage.getItem('usuarioMangaVerse') === clienteEditando.usuario) {
            localStorage.setItem('usuarioMangaVerse', usuario);
        }

        setClienteEditando(null);
        setMensaje('Datos del cliente actualizados correctamente.');
    };
    const pedidosCliente = pedidos.filter((pedido) => pedido.usuario === clienteHistorial?.usuario);

    return (
        <main className="seccion-admin">
            <div className="contenedor-admin">

                {/* Menú Lateral */}
                <aside className="panel-menu-admin">
                    <h1>Menú Admin</h1>
                    <ul className="admin-links-menu">
                        <li><a href="/admin-dashboard">Dashboard</a></li>
                        <li><a href="/admin-productos">Gestión de Productos</a></li>
                        <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                        <li><a href="/admin-dscto">Cupones y Descuentos</a></li>
                        <li><a href="/admin-clientes" className="activo">Clientes Registrados</a></li>
                        <li><a href="/">Salir al sitio</a></li>
                        <li><CerrarSesion /></li>
                    </ul>
                </aside>

                {/* Contenido Principal */}
                <section className="admin-contenido-box">
                    <div className="admin-header-seccion">
                        <h2>Base de Usuarios</h2>
                        <p>Visualiza los clientes que han creado una cuenta en la plataforma.</p>
                    </div>

                    <div className="admin-tabla-container">
                        {mensaje && <Alert variant="success" role="status">{mensaje}</Alert>}
                        <Table responsive className="tabla-admin-inventario">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre Completo</th>
                                    <th>Correo Electrónico</th>
                                    <th>Rol</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="tabla-clientes-body">
                                {clientes.length === 0 ? (
                                    <tr><td colSpan="5">No hay clientes registrados actualmente.</td></tr>
                                ) : clientes.map((cliente, indice) => (
                                    <tr key={cliente.usuario}>
                                        <td><strong>#{String(indice + 1).padStart(2, '0')}</strong></td>
                                        <td>{`${cliente.nombre || ''} ${cliente.apellido || ''} (${cliente.usuario})`}</td>
                                        <td>{cliente.correo || 'Sin correo'}</td>
                                        <td>{cliente.rol === 'admin' ? 'Administrador' : 'Cliente'}</td>
                                        <td>{cliente.rol === 'admin'
                                            ? 'Sistema'
                                            : (
                                                <>
                                                    <Button size="sm" className="btn-accion editar" onClick={() => abrirEdicion(cliente)}>Editar</Button>{' '}
                                                    <Button size="sm" variant="info" onClick={() => setClienteHistorial(cliente)}>Historial</Button>{' '}
                                                    <Button size="sm" variant="danger" onClick={() => eliminarCliente(cliente.usuario)}>Eliminar</Button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </section>

            </div>
            <Modal show={Boolean(clienteEditando)} onHide={() => setClienteEditando(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar datos del cliente</Modal.Title>
                </Modal.Header>
                <Form key={clienteEditando?.usuario} onSubmit={guardarEdicion}>
                    <Modal.Body>
                        {errorEdicion && <Alert variant="danger" role="alert">{errorEdicion}</Alert>}
                        <Form.Group className="mb-3" controlId="editar-cliente-nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="nombre" defaultValue={clienteEditando?.nombre || ''} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editar-cliente-apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control name="apellido" defaultValue={clienteEditando?.apellido || ''} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editar-cliente-alias">
                            <Form.Label>Alias</Form.Label>
                            <Form.Control name="usuario" defaultValue={clienteEditando?.usuario || ''} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editar-cliente-correo">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control name="correo" type="email" defaultValue={clienteEditando?.correo || ''} required />
                        </Form.Group>
                        <Form.Group controlId="editar-cliente-fecha">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control name="fecha" type="date" defaultValue={clienteEditando?.fecha || ''} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setClienteEditando(null)}>Cancelar</Button>
                        <Button variant="dark" type="submit">Guardar cambios</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Modal show={Boolean(clienteHistorial)} onHide={() => setClienteHistorial(null)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Historial de compras: {clienteHistorial?.usuario}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive striped>
                        <thead>
                            <tr>
                                <th>ID Pedido</th>
                                <th>Fecha</th>
                                <th>Productos</th>
                                <th>Total pagado</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidosCliente.length === 0 ? (
                                <tr><td colSpan="5">Este cliente todavía no tiene compras registradas.</td></tr>
                            ) : pedidosCliente.map((pedido, indice) => (
                                <tr key={pedido.id || `${pedido.usuario}-${pedido.fecha}-${indice}`}>
                                    <td>{pedido.id || 'Sin ID'}</td>
                                    <td>{pedido.fecha || 'Sin fecha'}</td>
                                    <td>{(pedido.productos || [])
                                        .map((producto) => `${producto.nombre} × ${producto.cantidad}`)
                                        .join(', ') || 'Sin productos'}</td>
                                    <td>{formatearPrecio(pedido.total)}</td>
                                    <td>{pedido.estado || 'Sin estado'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setClienteHistorial(null)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </main>
    )
}

export default AdminCliente