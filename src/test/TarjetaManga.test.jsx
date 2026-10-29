import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import TarjetaManga from '../componentes/TarjetaManga';

const manga = {
    id: 1,
    titulo: 'Berserk 01',
    genero: 'seinen',
    editorial: 'panini',
    autor: 'kentaro-miura',
    precio: 10000,
    img: '/img/Mangas/Berserk 01.jpg',
};

describe('TarjetaManga', () => {
    it('muestra el título del manga', () => {
        render(<TarjetaManga manga={manga} onAnadirCarrito={() => {}} />);
        expect(screen.getByRole('heading', { name: 'Berserk 01' })).toBeInTheDocument();
    });

    it('muestra el precio formateado', () => {
        render(<TarjetaManga manga={manga} onAnadirCarrito={() => {}} />);
        expect(screen.getByText(/10\.000/)).toBeInTheDocument();
    });

    it('muestra el precio original tachado y el precio de oferta', () => {
        render(
            <TarjetaManga
                manga={{ ...manga, ofertaActiva: true, descuentoPorcentaje: 20 }}
                onAnadirCarrito={() => {}}
            />,
        );

        expect(screen.getByLabelText('Precio original')).toHaveTextContent('$10.000');
        expect(screen.getByLabelText('Precio oferta')).toHaveTextContent('$8.000');
        expect(screen.getByText('(20% de descuento)')).toBeInTheDocument();
    });

    it('muestra la imagen con su texto alternativo', () => {
        render(<TarjetaManga manga={manga} onAnadirCarrito={() => {}} />);
        const imagen = screen.getByAltText('Berserk 01');
        expect(imagen).toHaveAttribute('src', '/img/Mangas/Berserk 01.jpg');
    });

    it('llama a onAnadirCarrito con el manga al hacer clic en el botón', async () => {
        const usuario = userEvent.setup();
        const onAnadirCarrito = vi.fn();

        render(<TarjetaManga manga={manga} onAnadirCarrito={onAnadirCarrito} />);
        await usuario.click(screen.getByRole('button', { name: /añadir al carrito/i }));

        expect(onAnadirCarrito).toHaveBeenCalledTimes(1);
        expect(onAnadirCarrito).toHaveBeenCalledWith(manga);
    });
});