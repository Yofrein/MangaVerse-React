function FiltroCatalogo({ id, titulo, valor, opciones, onCambiar }) {
    return (
        <div className="grupo-filtro">
            <label htmlFor={id}>{titulo}</label>
            <select
                id={id}
                className="desplegable-filtro form-select"
                value={valor}
                onChange={(evento) => onCambiar(evento.target.value)}
            >
                {opciones.map((opcion) => (
                    <option key={opcion.valor} value={opcion.valor}>
                        {opcion.etiqueta}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FiltroCatalogo;
