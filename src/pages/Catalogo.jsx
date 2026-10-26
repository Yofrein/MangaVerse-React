import '../css/estilos.css'
import '../css/menu.css'
import '../css/catalogo.css'

function Catalogo() {
    return (
        <>
            <main className="seccion-catalogo">
                <div className="contenedor-catalogo">

                    {/*Filtros*/}
                    <section className="panel-filtros">
                        <h1>Filtros</h1>

                        <div className="grupo-filtro">
                            <h2>Genero</h2>
                            <select id="cboGenero" className="desplegable-filtro" defaultValue="">
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
                            <select id="cboEditorial" className="desplegable-filtro" defaultValue="">
                                <option value="">Todas las editoriales</option>
                                <option value="ivrea">Ivrea</option>
                                <option value="panini">Panini Manga</option>
                                <option value="norma">Norma Editorial</option>
                                <option value="ovni">Ovni Press</option>
                                <option value="distrito">Distrito Manga</option>
                                <option value="milkyway">Milky Way Ediciones</option>
                                <option value="planeta">Planeta Cómic</option>
                                <option value="vIZ">Viz Media</option>
                                <option value="arechi">Arechi Manga</option>
                                <option value="satori">Satori Ediciones</option>
                            </select>
                        </div>

                        <div className="grupo-filtro">
                            <h2>Rango de Precio</h2>
                            <select id="cboPrecio" className="desplegable-filtro" defaultValue="">
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
                            <select id="cboAutor" className="desplegable-filtro" defaultValue="">
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

                    {/*Grilla de Mangas con atributos de filtro*/}
                    <section className="catalogo-grid">

                        <div className="card-manga" data-genero="seinen" data-editorial="ovni" data-precio="10000"
                            data-autor="satoru-noda">
                            <img src="img/Mangas/Golden kamuy 01.png" alt="Manga" />
                            <h3>Golden Kamuy 01</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="panini" data-precio="10000"
                            data-autor="gege-akutami">
                            <img src="img/Mangas/Jujutsu kaisen 29.jpg" alt="Manga" />
                            <h3>Jujutsu Kaisen 29</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="norma" data-precio="10000"
                            data-autor="tatsuki-fujimoto">
                            <img src="img/Mangas/Chainsaw man 24.png" alt="Manga" />
                            <h3>Chainsaw Man 24</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="ivrea" data-precio="10000"
                            data-autor="eiichiro-oda">
                            <img src="img/Mangas/One piece 59.jpg" alt="Manga" />
                            <h3>One piece 59</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="ivrea" data-precio="10000"
                            data-autor="rumiko-takahashi">
                            <img src="img/Mangas/Inuyasha 25.jpg" alt="Manga" />
                            <h3>Inuyasha 25</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="seinen" data-editorial="panini" data-precio="10000"
                            data-autor="kentaro-miura">
                            <img src="img/Mangas/Berserk 01.jpg" alt="Manga" />
                            <h3>Berserk 01</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="ivrea" data-precio="10000"
                            data-autor="muneyuki-kaneshiro">
                            <img src="img/Mangas/Blue lock 11.jpg" alt="Manga" />
                            <h3>Blue lock 11</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="panini" data-precio="10000"
                            data-autor="hajime-komoto">
                            <img src="img/Mangas/Mashle 17.jpg" alt="Manga" />
                            <h3>Mashle 17</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="seinen" data-editorial="ovni" data-precio="10000"
                            data-autor="satoru-noda">
                            <img src="img/Mangas/Shingeki 22.jpg" alt="Manga" />
                            <h3>Shingeki no kyojin 22</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="panini" data-precio="10000"
                            data-autor="gege-akutami">
                            <img src="img/Mangas/Saint seya the lost canva 01.jpg" alt="Manga" />
                            <h3>Saint Seiya: The lost canva 01</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="norma" data-precio="10000"
                            data-autor="tatsuki-fujimoto">
                            <img src="img/Mangas/Rurouni kenshin 12.jpg" alt="Manga" />
                            <h3>Rurouni kenshin 12</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="ivrea" data-precio="10000"
                            data-autor="eiichiro-oda">
                            <img src="img/Mangas/Demon slayer 08.png" alt="Manga" />
                            <h3>Demon slayer 08</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="shonen" data-editorial="ivrea" data-precio="10000"
                            data-autor="rumiko-takahashi">
                            <img src="img/Mangas/My hero academia 05.jpg" alt="Manga" />
                            <h3>My hero academia 05</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                        <div className="card-manga" data-genero="seinen" data-editorial="panini" data-precio="10000"
                            data-autor="kentaro-miura">
                            <img src="img/Mangas/Blue period 06.jpg" alt="Manga" />
                            <h3>Blue period 06</h3>
                            <p className="precio">$10.000</p>
                            <button className="anadir-carrito">Añadir al carrito</button>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}

export default Catalogo