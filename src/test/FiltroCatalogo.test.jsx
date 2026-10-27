import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import FiltroCatalogo from '../componentes/FiltroCatalogo';

describe('FiltroCatalogo', () => {
    it('muestra las opciones y comunica el valor seleccionado', async () => {
        const usuario = userEvent.setup();
        const onCambiar = vi.fn();
        const opciones = [
            { valor: '', etiqueta: 'Todos los géneros' },
            { valor: 'seinen', etiqueta: 'Seinen' },
        ];

        render(
            <FiltroCatalogo
                id="genero"
                titulo="Género"
                valor=""
                opciones={opciones}
                onCambiar={onCambiar}
            />,
        );

        await usuario.selectOptions(screen.getByLabelText('Género'), 'seinen');

        expect(onCambiar).toHaveBeenCalledWith('seinen');
    });
});
