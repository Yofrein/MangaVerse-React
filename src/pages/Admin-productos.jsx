import { useState } from 'react';
import { Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import { obtenerProductos, guardarDatos, formatearPrecio } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminProductos() {
    const [productos, setProductos] = useState(() => obtenerProductos());
    const [productoActual, setProductoActual] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const guardarProductos = (nuevosProductos) => {
        setProductos(nuevosProductos);
        guardarDatos('productosMangaVerse', nuevosProductos);
    };
    const abrirNuevo = () => setProductoActual({ titulo: '', precio: '', stock: '', imagen: '' });
    const abrirEdicion = (producto) => setProductoActual(producto);
    const guardarProducto = (evento) => {
        evento.preventDefault();
        const datos = new FormData(evento.currentTarget);
        const producto = {
            ...productoActual,
            id: productoActual.id ?? Date.now(),
            titulo: datos.get('titulo').trim(),
            precio: Number(datos.get('precio')),
            stock: Number(datos.get('stock')),
            img: datos.get('imagen').trim(),
            imagen: datos.get('imagen').trim(),
        };
        const nuevosProductos = productoActual.id
            ? productos.map((item) => item.id === productoActual.id ? producto : item)
            : [...productos, producto];
        guardarProductos(nuevosProductos);
        setProductoActual(null);
        setMensaje('Producto guardado.');
    };
    const eliminarProducto = (id) => {
        const nuevosProductos = productos.filter((producto) => producto.id !== id);
        guardarProductos(nuevosProductos);
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
                            <li><a href="/admin-productos" className="activo">Gestión de Productos</a></li>
                            <li><a href="/admin-pedidos">Pedidos Recientes</a></li>
                            <li><a href="/admin-dscto">Cupones y Descuentos</a></li>
                            <li><a href="/admin-clientes">Clientes Registrados</a></li>
                            <li><a href="/">Salir al sitio</a></li>
                            <li><CerrarSesion /></li>
                        </ul>
                    </aside>

                    {/* Contenido Principal */}
                    <section className="admin-contenido-box">
                        <div className="admin-header-seccion">
                            <h2>Inventario de Mangas</h2>
                            <p>Agrega, edita o elimina los tomos disponibles en la tienda.</p>
                        </div>

                        <div className="admin-tabla-container">
                            <div className="tabla-acciones-superior">
                                <h3>Listado de Tomos</h3>
                                <Button type="button" id="btn-nuevo-producto" className="btn-nuevo-producto" onClick={abrirNuevo}>+ Agregar Nuevo Manga</Button>
                            </div>

                                {mensaje && <Alert variant="success">{mensaje}</Alert>}
                                <Table responsive className="tabla-admin-inventario">
                                    <thead><tr><th>Portada</th><th>Título</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr></thead>
                                    <tbody id="tabla-productos-body">
                                        {productos.length === 0 ? (
                                            <tr><td colSpan="5">No hay mangas en el inventario.</td></tr>
                                        ) : productos.map((producto) => (
                                            <tr key={producto.id}>
                                                <td><img src={producto.imagen || producto.img} alt={producto.titulo} className="img-tabla-manga" /></td>
                                                <td>{producto.titulo}</td>
                                                <td>{formatearPrecio(producto.precio)}</td>
                                                <td>{producto.stock}</td>
                                                <td>
                                                    <Button size="sm" className="btn-accion editar" onClick={() => abrirEdicion(producto)}>Editar</Button>{' '}
                                                    <Button size="sm" variant="danger" className="btn-accion eliminar" onClick={() => eliminarProducto(producto.id)}>Eliminar</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                    </section>

                </div>
            </main>
            <Modal show={Boolean(productoActual)} onHide={() => setProductoActual(null)}>
                <Modal.Header closeButton><Modal.Title>{productoActual?.id ? 'Editar manga' : 'Agregar manga'}</Modal.Title></Modal.Header>
                <Form onSubmit={guardarProducto}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="input-titulo">
                            <Form.Label>Título</Form.Label>
                            <Form.Control name="titulo" defaultValue={productoActual?.titulo || ''} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="input-precio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control name="precio" type="number" min="0" defaultValue={productoActual?.precio ?? ''} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="input-stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control name="stock" type="number" min="0" defaultValue={productoActual?.stock ?? ''} required />
                        </Form.Group>
                        <Form.Group controlId="input-imagen">
                            <Form.Label>Ruta de imagen</Form.Label>
                            <Form.Control name="imagen" defaultValue={productoActual?.imagen || productoActual?.img || ''} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setProductoActual(null)}>Cancelar</Button>
                        <Button variant="dark" type="submit">Guardar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AdminProductos