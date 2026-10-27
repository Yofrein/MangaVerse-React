import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/estilos.css'
import '../css/menu.css'
import '../css/login.css'

function Login() {
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

                        <div id="alerta-box"></div>

                        <Form id="form-login">
                            <Form.Group className="mb-3" controlId="usuario">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ej: JeanToFranku" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="••••••••" required />
                            </Form.Group>

                            <Button type="submit" variant="dark" className="w-100">
                                Ingresar
                            </Button>

                            <p className="texto-registro">
                                ¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Login