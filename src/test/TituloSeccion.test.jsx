import { render, screen } from '@testing-library/react';
import TituloSeccion from '../componentes/TituloSeccion';

describe('TituloSeccion', () => {
    it('muestra el contenido como título principal', () => {
        render(<TituloSeccion>Catálogo</TituloSeccion>);

        expect(screen.getByRole('heading', { level: 1, name: 'Catálogo' })).toBeInTheDocument();
    });
});
