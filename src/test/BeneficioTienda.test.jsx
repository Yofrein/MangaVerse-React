import { render, screen } from '@testing-library/react';
import BeneficioTienda from '../componentes/BeneficioTienda';

describe('BeneficioTienda', () => {
    it('muestra el beneficio y su imagen', () => {
        render(
            <BeneficioTienda
                imagen="/img/Envio.png"
                titulo="Envíos a todo Chile"
                descripcion="Empaquetado seguro"
            />,
        );

        expect(screen.getByText('Envíos a todo Chile')).toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', '/img/Envio.png');
        expect(screen.getByText('Empaquetado seguro')).toBeInTheDocument();
    });
});
