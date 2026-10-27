function BeneficioTienda({ imagen, titulo, descripcion }) {
    return (
        <div className="metrica-item">
            <img src={imagen} alt="" className="metrica-imagen" />
            <strong>{titulo}</strong>
            <p className="metrica-p">{descripcion}</p>
        </div>
    );
}

export default BeneficioTienda;
