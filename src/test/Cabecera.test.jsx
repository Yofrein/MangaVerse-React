import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';

const renderCabecera = () => render(<MemoryRouter><Cabecera /></MemoryRouter>);

describe('Cabecera', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('muestra el logo de MangaVerse', () => {
        renderCabecera();
        expect(screen.getByAltText('MangaVerse')).toBeInTheDocument();
    });

    it('muestra los enlaces de navegación con sus rutas', () => {
        renderCabecera();

        expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: 'Catálogo' })).toHaveAttribute('href', '/catalogo');
        expect(screen.getByRole('link', { name: 'Quiénes somos' })).toHaveAttribute('href', '/quienes-somos');
    });

    it('muestra los enlaces de carrito y mi cuenta', () => {
        renderCabecera();

        expect(screen.getByRole('link', { name: /carrito/i })).toHaveAttribute('href', '/carrito');
        expect(screen.getByRole('link', { name: /mi cuenta/i })).toHaveAttribute('href', '/login');
    });

    it('incluye el buscador de mangas', () => {
        renderCabecera();
        expect(screen.getByPlaceholderText('Buscar manga...')).toBeInTheDocument();
    });

    it('muestra la acción de cerrar sesión junto a la cuenta iniciada', async () => {
        const usuario = userEvent.setup();
        localStorage.setItem('usuarioMangaVerse', 'lector');
        localStorage.setItem('cuentasMangaVerse', JSON.stringify([
            { usuario: 'lector', rol: 'cliente' },
        ]));
        renderCabecera();

        const botonCerrarSesion = screen.getByRole('button', { name: 'Cerrar sesión' });
        expect(botonCerrarSesion.closest('.nav-account')).toContainElement(
            screen.getByRole('link', { name: 'lector' }),
        );

        await usuario.click(botonCerrarSesion);
        expect(localStorage.getItem('usuarioMangaVerse')).toBeNull();
    });
});