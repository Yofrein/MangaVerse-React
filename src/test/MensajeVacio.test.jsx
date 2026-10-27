import { render, screen } from '@testing-library/react';
import MensajeVacio from '../componentes/MensajeVacio';

describe('MensajeVacio', () => {
    it('muestra un mensaje accesible cuando no hay resultados', () => {
        render(<MensajeVacio titulo="Sin resultados" mensaje="Prueba otros filtros." />);

        expect(screen.getByRole('status')).toHaveTextContent('Sin resultados');
        expect(screen.getByText('Prueba otros filtros.')).toBeInTheDocument();
    });
});
