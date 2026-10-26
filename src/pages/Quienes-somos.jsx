import '../css/estilos.css'
import '../css/menu.css'
import '../css/quienes-somos.css'

function QuienesSomos() {
    return (
        <>
            <main>
                <section>
                    <h1 className="titulo-seccion">
                        <span>Quiénes somos</span>
                    </h1>
                </section>
                <section className="seccion-quienes-somos">

                    <div className="contenedor-presentacion">
                        <div className="presentacion-imagen">
                            <img src="img/Foto grupal.jpeg" alt="" />
                        </div>
                        <div className="presentacion-texto">
                            <h2>Sobre MangaVerse</h2>
                            <p>Somos un grupo de estudiantes de DUOC UC, apasionados por el mundo del manga y el anime. Nuestro
                                objetivo es crear una plataforma en línea que permita a los fanáticos del manga y el anime
                                descubrir, explorar y adquirir sus obras favoritas de manera fácil y segura.</p>
                            <p>En MangaVerse, nos esforzamos por ofrecer una experiencia única a nuestros usuarios, brindando un
                                catálogo diverso y actualizado de mangas y animes. Nos enorgullece ser parte de la comunidad de
                                fans
                                y estamos comprometidos en proporcionar un espacio donde puedan compartir su pasión.</p>
                        </div>
                    </div>

                    <div className="contenedor-presentacion inverso">
                        <div className="presentacion-texto">
                            <h2>Nuestra misión</h2>
                            <p>Nuestro objetivo es poder facilitar la distribución y alcance del entretenimiento del manga a lo
                                largo de todo Santiago, conectando con distintos usuarios para poder cumplir el deseo del
                                entretenimiento en la lectura del manga en físico.</p>
                        </div>
                        <div className="presentacion-imagen">
                            <img src="img/Pasando libro.jpg" alt="Colección de mangas" />
                        </div>
                    </div>

                    <div className="contenedor-presentacion">
                        <div className="presentacion-imagen">
                            <img src="img/Manga en mano.jpg" alt="" />
                        </div>
                        <div className="presentacion-texto">
                            <h2>Nuestra visión</h2>
                            <p>Nuestra visión es poder ser la tienda N° 1 en distribución ágil, eficiente y accesible para los
                                usuarios a nivel regional, buscando expandir nuestros horizontes más allá de la ciudad, pudiendo
                                expandirnos a más lugares del país, para poder conectar a más usuarios con este hermoso medio de
                                entretenimiento.</p>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

export default QuienesSomos