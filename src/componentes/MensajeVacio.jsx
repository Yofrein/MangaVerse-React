function MensajeVacio({ titulo, mensaje }) {
    return (
        <div className="alert alert-light text-center py-4" role="status">
            <h2>{titulo}</h2>
            <p className="mb-0">{mensaje}</p>
        </div>
    );
}

export default MensajeVacio;
