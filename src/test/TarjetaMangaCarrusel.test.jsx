import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import TarjetaMangaCarrusel from '../componentes/TarjetaMangaCarrusel';

describe('TarjetaMangaCarrusel', () => {
    it('ubica la imagen a la izquierda y la información a la derecha', () => {
        render(
            <TarjetaMangaCarrusel
                manga={{
                    titulo: 'Berserk 01',
                    descripcion: 'Edición definitiva',
                    precio: 24990,
                    img: '/berserk.jpg',
                }}
                onAnadirCarrito={() => {}}
            />,
        );

        const tarjeta = screen.getByRole('article');
        expect(tarjeta.children[0]).toHaveClass('manga-imagen-izquierda');
        expect(tarjeta.children[1]).toHaveClass('manga-info-derecha');
        expect(screen.getByAltText('Berserk 01')).toHaveAttribute('src', '/berserk.jpg');
        expect(screen.getByRole('heading', { name: 'Berserk 01' })).toBeInTheDocument();
        expect(screen.getByText('Edición definitiva')).toBeInTheDocument();
        expect(screen.getByText('$24.990')).toBeInTheDocument();
    });

    it('agrega el manga recibido al carrito al presionar el botón', () => {
        const manga = { titulo: 'Berserk 01', precio: 24990, img: '/berserk.jpg' };
        const onAnadirCarrito = vi.fn();
        render(<TarjetaMangaCarrusel manga={manga} onAnadirCarrito={onAnadirCarrito} />);

        fireEvent.click(screen.getByRole('button', { name: 'Añadir al carrito' }));

        expect(onAnadirCarrito).toHaveBeenCalledWith(manga);
    });
});
