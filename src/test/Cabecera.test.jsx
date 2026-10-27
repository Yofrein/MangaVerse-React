import { render, screen } from '@testing-library/react';
import Cabecera from '../componentes/Cabecera';

describe('Cabecera', () => {
    it('muestra el logo de MangaVerse', () => {
        render(<Cabecera />);
        expect(screen.getByAltText('MangaVerse')).toBeInTheDocument();
    });

    it('muestra los enlaces de navegación con sus rutas', () => {
        render(<Cabecera />);

        expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: 'Catalogo' })).toHaveAttribute('href', '/catalogo');
        expect(screen.getByRole('link', { name: 'Quienes somos' })).toHaveAttribute('href', '/quienes-somos');
    });

    it('muestra los enlaces de carrito y mi cuenta', () => {
        render(<Cabecera />);

        expect(screen.getByRole('link', { name: /carrito/i })).toHaveAttribute('href', '/carrito');
        expect(screen.getByRole('link', { name: /mi cuenta/i })).toHaveAttribute('href', '/login');
    });

    it('incluye el buscador de mangas', () => {
        render(<Cabecera />);
        expect(screen.getByPlaceholderText('Buscar manga...')).toBeInTheDocument();
    });
});