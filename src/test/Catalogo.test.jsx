import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Catalogo from '../pages/Catalogo';
import { mangas } from '../data/mangas';

const contarTarjetas = () =>
    screen.queryAllByRole('button', { name: /añadir al carrito/i }).length;

describe('Catalogo', () => {
    it('muestra todos los mangas al inicio', () => {
        render(<Catalogo />);
        expect(contarTarjetas()).toBe(mangas.length);
    });

    it('filtra por género', async () => {
        const usuario = userEvent.setup();
        render(<Catalogo />);

        const selectGenero = screen.getByDisplayValue('Todos los géneros');
        await usuario.selectOptions(selectGenero, 'seinen');

        const esperados = mangas.filter((m) => m.genero === 'seinen').length;
        expect(contarTarjetas()).toBe(esperados);
    });

    it('filtra por editorial', async () => {
        const usuario = userEvent.setup();
        render(<Catalogo />);

        const selectEditorial = screen.getByDisplayValue('Todas las editoriales');
        await usuario.selectOptions(selectEditorial, 'panini');

        const esperados = mangas.filter((m) => m.editorial === 'panini').length;
        expect(contarTarjetas()).toBe(esperados);
    });

    it('no muestra mangas si ninguno cumple el rango de precio', async () => {
        const usuario = userEvent.setup();
        render(<Catalogo />);

        const selectPrecio = screen.getByDisplayValue('Todos los precios');
        await usuario.selectOptions(selectPrecio, '100000+');

        expect(contarTarjetas()).toBe(0);
    });
});