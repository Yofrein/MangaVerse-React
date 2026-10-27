import { render, screen } from '@testing-library/react';
import Banner from '../componentes/Banner';

describe('Banner', () => {
    it('muestra el mensaje de bienvenida de la tienda', () => {
        render(<Banner />);

        expect(screen.getByText(/Bienvenido a la mejor tienda de mangas de Chile/i)).toBeInTheDocument();
    });
});
