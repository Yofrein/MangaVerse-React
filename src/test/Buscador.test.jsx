import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Buscador from '../componentes/Buscador';

describe('Buscador', () => {
    it('muestra el campo de texto con su placeholder', () => {
        render(<Buscador />);
        expect(screen.getByPlaceholderText('Buscar manga...')).toBeInTheDocument();
    });

    it('actualiza el texto mientras el usuario escribe', async () => {
        const usuario = userEvent.setup();
        render(<Buscador />);

        const input = screen.getByPlaceholderText('Buscar manga...');
        await usuario.type(input, 'berserk');

        expect(input).toHaveValue('berserk');
    });

    it('llama a onBuscar con el texto al presionar el botón', async () => {
        const usuario = userEvent.setup();
        const onBuscar = vi.fn();
        render(<Buscador onBuscar={onBuscar} />);

        await usuario.type(screen.getByPlaceholderText('Buscar manga...'), 'berserk');
        await usuario.click(screen.getByRole('button'));

        expect(onBuscar).toHaveBeenCalledWith('berserk');
    });

    it('también busca al presionar Enter', async () => {
        const usuario = userEvent.setup();
        const onBuscar = vi.fn();
        render(<Buscador onBuscar={onBuscar} />);

        await usuario.type(screen.getByPlaceholderText('Buscar manga...'), 'mashle{Enter}');

        expect(onBuscar).toHaveBeenCalledWith('mashle');
    });
});