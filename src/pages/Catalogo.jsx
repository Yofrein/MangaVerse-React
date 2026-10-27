import { useState } from 'react';
import TarjetaManga from '../componentes/TarjetaManga';
import { mangas } from '../data/mangas';
import '../css/estilos.css';
import '../css/menu.css';
import '../css/catalogo.css';

function Catalogo() {
    const [genero, setGenero] = useState('');
    const [editorial, setEditorial] = useState('');
    const [rangoPrecio, setRangoPrecio] = useState('');
    const [autor, setAutor] = useState('');

    const cumplePrecio = (precio) => {
        if (rangoPrecio === '') return true;
        if (rangoPrecio.endsWith('+')) return precio > parseInt(rangoPrecio);
        const [min, max] = rangoPrecio.split('-').map(Number);
        return precio >= min && precio <= max;
    };

    const mangasFiltrados = mangas.filter((m) =>
        (genero === '' || m.genero === genero) &&
        (editorial === '' || m.editorial === editorial) &&
        (autor === '' || m.autor === autor) &&
        cumplePrecio(m.precio)
    );

    const manejarAnadirCarrito = (manga) => {
        console.log('Añadido al carrito:', manga.titulo);
    };

    return (
        <>

            <section>
                <h1 className="titulo-seccion">
                    <span>Catálogo</span>
                </h1>
            </section>
            
            <main className="seccion-catalogo">
                <div className="contenedor-catalogo">

                    {/*Filtros*/}
                    <section className="panel-filtros">
                        <h1>Filtros</h1>

                        <div className="grupo-filtro">
                            <h2>Genero</h2>
                            <select
                                id="cboGenero"
                                className="desplegable-filtro"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            >
                                <option value="">Todos los géneros</option>
                                <option value="shonen">Shonen</option>
                                <option value="seinen">Seinen</option>
                                <option value="shojo">Shojo</option>
                                <option value="romance">Romance</option>
                                <option value="terror">Terror</option>
                            </select>
                        </div>

                        <div className="grupo-filtro">
                            <h2>Editorial</h2>
                            <select
                                id="cboEditorial"
                                className="desplegable-filtro"
                                value={editorial}
                                onChange={(e) => setEditorial(e.target.value)}
                            >
                                <option value="">Todas las editoriales</option>
                                <option value="ivrea">Ivrea</option>
                                <option value="panini">Panini Manga</option>
                                <option value="norma">Norma Editorial</option>
                                <option value="ovni">Ovni Press</option>
                                <option value="distrito">Distrito Manga</option>
                                <option value="milkyway">Milky Way Ediciones</option>
                                <option value="planeta">Planeta Cómic</option>
                                <option value="viz">Viz Media</option>
                                <option value="arechi">Arechi Manga</option>
                                <option value="satori">Satori Ediciones</option>
                            </select>
                        </div>

                        <div className="grupo-filtro">
                            <h2>Rango de Precio</h2>
                            <select
                                id="cboPrecio"
                                className="desplegable-filtro"
                                value={rangoPrecio}
                                onChange={(e) => setRangoPrecio(e.target.value)}
                            >
                                <option value="">Todos los precios</option>
                                <option value="0-10000">Hasta $10.000</option>
                                <option value="10000-20000">$10.000 - $20.000</option>
                                <option value="20000-30000">$20.000 - $30.000</option>
                                <option value="30000-40000">$30.000 - $40.000</option>
                                <option value="40000-50000">$40.000 - $50.000</option>
                                <option value="50000-70000">$50.000 - $70.000</option>
                                <option value="70000-100000">$70.000 - $100.000</option>
                                <option value="100000+">Más de $100.000</option>
                            </select>
                        </div>

                        <div className="grupo-filtro">
                            <h2>Autor</h2>
                            <select
                                id="cboAutor"
                                className="desplegable-filtro"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            >
                                <option value="">Todos los autores</option>
                                <option value="kentaro-miura">Kentaro Miura (Berserk)</option>
                                <option value="muneyuki-kaneshiro">Muneyuki Kaneshiro (Blue Lock)</option>
                                <option value="tsubasa-yamaguchi">Tsubasa Yamaguchi (Blue Period)</option>
                                <option value="tatsuki-fujimoto">Tatsuki Fujimoto (Chainsaw Man)</option>
                                <option value="koyoharu-gotouge">Koyoharu Gotouge (Demon Slayer)</option>
                                <option value="satoru-noda">Satoru Noda (Golden Kamuy)</option>
                                <option value="rumiko-takahashi">Rumiko Takahashi (Inuyasha)</option>
                                <option value="gege-akutami">Gege Akutami (Jujutsu Kaisen)</option>
                                <option value="hajime-komoto">Hajime Komoto (Mashle)</option>
                                <option value="kohei-horikoshi">Kohei Horikoshi (My Hero Academia)</option>
                                <option value="eiichiro-oda">Eiichiro Oda (One Piece)</option>
                                <option value="nobuhiro-watsuki">Nobuhiro Watsuki (Rurouni Kenshin)</option>
                                <option value="masami-kurumada">Masami Kurumada (Saint Seiya)</option>
                                <option value="hajime-isayama">Hajime Isayama (Shingeki no Kyojin)</option>
                            </select>
                        </div>
                    </section>

                    {/*Grilla de mangas*/}
                    <section className="catalogo-grid">
                        {mangasFiltrados.map((manga) => (
                            <TarjetaManga
                                key={manga.id}
                                manga={manga}
                                onAnadirCarrito={manejarAnadirCarrito}
                            />
                        ))}
                    </section>

                </div>
            </main>
        </>
    );
}

export default Catalogo;