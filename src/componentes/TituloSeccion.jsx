function TituloSeccion({ children }) {
    return (
        <section>
            <h1 className="titulo-seccion">
                <span>{children}</span>
            </h1>
        </section>
    );
}

export default TituloSeccion;
