import { useRef, useState } from 'react'
import '../css/estilos.css'
import '../css/menu.css'
import '../css/index.css'
import BeneficioTienda from '../componentes/BeneficioTienda'
import { agregarAlCarrito, obtenerProductos } from '../data/almacenamiento'
import TarjetaManga from '../componentes/TarjetaManga'
import TarjetaMangaCarrusel from '../componentes/TarjetaMangaCarrusel'

function Home() {
    const pistaCarrusel = useRef(null);
    const [productos] = useState(() => obtenerProductos());
    const mangasCarrusel = productos
        .filter((manga) => manga.destacadoCarrusel)
        .sort((primero, segundo) => primero.ordenCarrusel - segundo.ordenCarrusel);
    const mangasMasVendidos = productos
        .filter((manga) => manga.masVendido)
        .sort((primero, segundo) => primero.ordenMasVendido - segundo.ordenMasVendido);
    const manejarAnadirCarrito = (manga) => agregarAlCarrito(manga);
    const desplazarCarrusel = (direccion) => {
        const pista = pistaCarrusel.current;
        const tarjeta = pista?.querySelector('.recuadro-mangas');
        if (!pista || !tarjeta) return;

        const distancia = tarjeta.getBoundingClientRect().width + 20;
        if (direccion > 0 && pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 50) {
            pista.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (direccion < 0 && pista.scrollLeft <= 30) {
            pista.scrollTo({ left: pista.scrollWidth, behavior: 'smooth' });
        } else {
            pista.scrollBy({ left: distancia * direccion, behavior: 'smooth' });
        }
    };

    return (
        <main>
            {/* Sección de Presentación / Banner Informativo */}
            <section className="seccion-presentacion">
                <div className="contenedor-presentacion">
                    <div className="presentacion-imagen">
                        <img src="img/Imagen presentacion.jpg" alt="Leyendo manga" />
                    </div>
                    <div className="presentacion-texto">
                        <h2>¡Sumérgete en el fascinante mundo del manga!</h2>
                        <p>Descubre historias emocionantes, personajes inolvidables y aventuras que te atraparán desde la
                            primera página. Nuestra colección de mangas abarca todos los géneros: desde la acción trepidante
                            y la fantasía mágica hasta los romances más dulces y las comedias más divertidas.</p>
                        <p>Ya seas un ávido lector de manga o estés buscando tu próxima serie favorita, aquí encontrarás
                            algo que te encantará. Explora nuestra selección y déjate llevar por la narrativa visual y las
                            ilustraciones impresionantes que solo el manga puede ofrecer.</p>
                    </div>
                </div>
            </section>

            {/* Mangas nuevos (Carrusel en dos columnas) */}
            <section>
                <h1 className="titulo-seccion"><span>Mangas nuevos</span></h1>
            </section>

            <section className="seccion-mangas-nuevos">
                <div className="carrusel-contenedor-general">
                    {/* Botón Izquierda */}
                    <button type="button" className="carrusel-btn btn-prev" id="carrusel-prev" aria-label="Mangas anteriores" onClick={() => desplazarCarrusel(-1)}>&#10094;</button>

                    {/* Pista deslizante del carrusel */}
                    <div className="carrusel-pista" id="carrusel-pista" ref={pistaCarrusel}>

                        {mangasCarrusel.map((manga) => (
                            <TarjetaMangaCarrusel
                                key={manga.id}
                                manga={manga}
                                onAnadirCarrito={manejarAnadirCarrito}
                            />
                        ))}

                    </div>

                    {/* Botón Derecha */}
                    <button type="button" className="carrusel-btn btn-next" id="carrusel-next" aria-label="Mangas siguientes" onClick={() => desplazarCarrusel(1)}>&#10095;</button>
                </div>
            </section>

            {/* Beneficios */}
            <section>
                <div className="metricas">
                    <BeneficioTienda imagen="img/Dscto.png" titulo="Envío gratis" descripcion="Por compras superiores a $50.000" />
                    <BeneficioTienda imagen="img/Envio.png" titulo="Envíos a todo Chile" descripcion="Empaquetado seguro para tus mangas" />
                    <BeneficioTienda imagen="img/Tarjeta.png" titulo="3 cuotas sin interés" descripcion="Paga con Transbank en 3 cuotas sin interés" />
                </div>
            </section>

            {/* Sección de Presentación Inversa (Texto a la izquierda, Imagen a la derecha) */}
            <section className="seccion-presentacion">
                <div className="contenedor-presentacion inverso">
                    <div className="presentacion-texto">
                        <h2>¡Crea tu cuenta y vive Mangaverse al máximo!</h2>
                        <p>Si te encanta nuestra tienda y quieres llevar tu colección al siguiente nivel, te invitamos a
                            registrarte. Al crearte una sesión podrás acceder a descuentos exclusivos, ofertas especiales
                            para lectores frecuentes y enterarte antes que nadie de las nuevas llegadas.</p>
                        <p>Además, tu cuenta te permitirá guardar tus direcciones y seguir tus pedidos de manera mucho más
                            fácil y rápida. ¡Únete a nuestra comunidad y sé parte del universo Mangaverse!</p>
                    </div>
                    <div className="presentacion-imagen">
                        <img src="img/Invitacion registrate.jpg" alt="Colección de mangas" />
                    </div>
                </div>
            </section>

            {/* Más vendido */}
            <section>
                <h1 className="titulo-seccion"><span>Lo más vendido</span></h1>
            </section>

            <section className="seccion-mangas-masvendidos">
                <div className="recuadro-masvendidos">
                    {mangasMasVendidos.map((manga) => (
                        <TarjetaManga
                            key={manga.id}
                            manga={manga}
                            onAnadirCarrito={manejarAnadirCarrito}
                            className="recuadro-mangas-masvendidos"
                        />
                    ))}
                </div>
            </section>

            {/* Opiniones */}
            <section>
                <h1 className="titulo-seccion titulo-reviews"><span>Reviews de nuestros clientes</span></h1>
            </section>

            <section className="seccion-testimonios">
                <div className="contenedor-testimonios">
                    <div className="recuadro-testimonio">
                        <p className="texto-testimonio">"¡Excelente servicio! Los tomos llegaron impecables, súper bien
                            protegidos y rápido a la casa."</p>
                        <strong>Ignacio V.</strong>
                    </div>
                    <div className="recuadro-testimonio">
                        <p className="texto-testimonio">"Tienen mucha variedad y los precios están súper buenos. Definitivamente
                            seguiré comprando aquí."</p>
                        <strong>Fernanda M.</strong>
                    </div>
                    <div className="recuadro-testimonio">
                        <p className="texto-testimonio">"Excelente atención y los pagos con Transbank sin problemas. 10/10 la
                            tienda."</p>
                        <strong>Matías S.</strong>
                    </div>
                    <div className="recuadro-testimonio">
                        <p className="texto-testimonio">"Pedí un par de mangas y llegaron al otro día. Muy buen servicio de
                            entrega en Santiago."</p>
                        <strong>Valentina R.</strong>
                    </div>
                    <div className="recuadro-testimonio">
                        <p className="texto-testimonio">"Los mangas vienen con sus protecciones perfectas, se nota que cuidan
                            los libros para los coleccionistas."</p>
                        <strong>Carlos P.</strong>
                    </div>
                    <div className="recuadro-testimonio">
                        <p className="texto-testimonio">"Muy buena atención cuando tuve dudas con mi pedido. De verdad se
                            agradece la buena disposición."</p>
                        <strong>Camila A.</strong>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Home;