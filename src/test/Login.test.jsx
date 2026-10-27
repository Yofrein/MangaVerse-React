import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Login from '../pages/Login';

function RutaActual() {
    const ubicacion = useLocation();
    return <span data-testid="ruta-actual">{ubicacion.pathname}</span>;
}

describe('Login', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('permite iniciar sesión con la cuenta de demostración admin', async () => {
        const usuario = userEvent.setup();
        render(<MemoryRouter><Login /><RutaActual /></MemoryRouter>);

        await usuario.type(screen.getByLabelText('Nombre de usuario'), 'admin');
        await usuario.type(screen.getByLabelText('Contraseña'), 'admin123');
        await usuario.click(screen.getByRole('button', { name: 'Ingresar' }));

        expect(localStorage.getItem('usuarioMangaVerse')).toBe('admin');
        expect(screen.getByTestId('ruta-actual')).toHaveTextContent('/admin-dashboard');
    });

    it('muestra un error para credenciales incorrectas', async () => {
        const usuario = userEvent.setup();
        render(<MemoryRouter><Login /><RutaActual /></MemoryRouter>);

        await usuario.type(screen.getByLabelText('Nombre de usuario'), 'alguien');
        await usuario.type(screen.getByLabelText('Contraseña'), 'incorrecta');
        await usuario.click(screen.getByRole('button', { name: 'Ingresar' }));

        expect(screen.getByRole('alert')).toHaveTextContent('Usuario o contraseña incorrectos');
    });
});
