import { beforeEach, describe, expect, it } from 'vitest';
import { mangas } from '../data/mangas';
import { obtenerProductos } from '../data/almacenamiento';

describe('obtenerProductos', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('migra los precios del inventario de demostración anterior', () => {
        const inventarioAnterior = mangas.map((manga) => ({
            ...manga,
            precio: 10000,
            stock: 10,
        }));
        localStorage.setItem('productosMangaVerse', JSON.stringify(inventarioAnterior));

        const productos = obtenerProductos();

        expect(productos.map((producto) => producto.precio)).toEqual(
            mangas.map((manga) => manga.precio),
        );
        expect(localStorage.getItem('preciosCatalogoMangaVerseV2')).toBe('true');
    });

    it('no reemplaza los precios de un inventario que ya fue modificado', () => {
        const inventarioPersonalizado = mangas.map((manga) => ({
            ...manga,
            precio: 10000,
            stock: 10,
        }));
        inventarioPersonalizado[0].precio = 8800;
        localStorage.setItem('productosMangaVerse', JSON.stringify(inventarioPersonalizado));

        const productos = obtenerProductos();

        expect(productos[0].precio).toBe(8800);
        expect(localStorage.getItem('preciosCatalogoMangaVerseV2')).toBeNull();
    });
});
