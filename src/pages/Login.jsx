import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { inicializarAdministrador, leerDatos } from '../data/almacenamiento';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/login.css'

function Login() {
    const navegar = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const iniciarSesion = (evento) => {
        evento.preventDefault();
        inicializarAdministrador();
        const cuentas = leerDatos('cuentasMangaVerse', []);
        let cuenta = cuentas.find((item) =>
            item.usuario.toLowerCase() === usuario.trim().toLowerCase() && item.pass === password,
        );
        if (!cuenta) {
            const registrada = leerDatos('cuentaRegistrada', null);
            if (registrada?.usuario.toLowerCase() === usuario.trim().toLowerCase()
                && registrada.pass === password) {
                cuenta = registrada;
            }
        }

        if (!cuenta) {
            setMensaje('Usuario o contraseña incorrectos. Intenta nuevamente.');
            return;
        }

        localStorage.setItem('usuarioMangaVerse', cuenta.usuario);
        navegar(cuenta.rol === 'admin' ? '/admin-dashboard' : '/mi-cuenta');
    };

    return (
        <main className="login-contenedor d-flex align-items-center py-5">
            <Container>
                <Row className="g-0 bg-white rounded-3 shadow overflow-hidden">

                    <Col md={6} className="login-imagen d-flex justify-content-center align-items-center p-4">
                        <img src="img/Logo.png" alt="MangaVerse Logo" className="login-logo" />
                    </Col>

                    <Col md={6} className="login-formulario p-4 p-md-5">
                        <h2>Iniciar Sesión</h2>
                        <p>Ingresa tus datos para acceder a tu cuenta de MangaVerse</p>

                        {mensaje && <div id="alerta-box" className="alert alert-danger" role="alert">{mensaje}</div>}

                        <Form id="form-login" onSubmit={iniciarSesion}>
                            <Form.Group className="mb-3" controlId="usuario">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ej: JeanToFranku" value={usuario} onChange={(evento) => setUsuario(evento.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="••••••••" value={password} onChange={(evento) => setPassword(evento.target.value)} required />
                            </Form.Group>

                            <Button type="submit" variant="dark" className="w-100">
                                Ingresar
                            </Button>

                            <p className="texto-registro">
                                ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Login