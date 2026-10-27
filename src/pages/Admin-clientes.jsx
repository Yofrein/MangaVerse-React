import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { guardarDatos, leerDatos } from '../data/almacenamiento';
import CerrarSesion from '../componentes/CerrarSesion';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/admin.css'

function AdminCliente() {
    const [clientes, setClientes] = useState(() => leerDatos('cuentasMangaVerse', []));
    const eliminarCliente = (usuario) => {
        if (!window.confirm(`¿Eliminar la cuenta de ${usuario}?`)) return;
        const nuevosClientes = clientes.filter((cliente) => cliente.usuario !== usuario);
        setClientes(nuevosClientes);
        guardarDatos('cuentasMangaVerse', nuevosClientes);
    };

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
                                            : <Button size="sm" variant="danger" onClick={() => eliminarCliente(cliente.usuario)}>Eliminar</Button>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default AdminCliente