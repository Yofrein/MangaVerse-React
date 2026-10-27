import { mangas } from './mangas';

export function leerDatos(clave, valorInicial) {
    const guardado = localStorage.getItem(clave);
    return guardado ? JSON.parse(guardado) : valorInicial;
}

export function guardarDatos(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

export function formatearPrecio(precio) {
    return `$${Number(precio).toLocaleString('es-CL')}`;
}

export function obtenerCuentaActiva() {
    const usuarioActivo = localStorage.getItem('usuarioMangaVerse');
    if (!usuarioActivo) return null;

    const cuenta = leerDatos('cuentasMangaVerse', [])
        .find((item) => item.usuario === usuarioActivo);
    const cuentaRegistrada = leerDatos('cuentaRegistrada', null);
    return cuenta || (cuentaRegistrada?.usuario === usuarioActivo ? cuentaRegistrada : null);
}

export function obtenerProductos() {
    const productosGuardados = leerDatos('productosMangaVerse', null);
    if (productosGuardados) {
        const preciosPorTitulo = new Map(
            mangas.map((manga) => [manga.titulo.toLocaleLowerCase('es'), manga.precio]),
        );
        const catalogoAnterior = productosGuardados.length === mangas.length &&
            productosGuardados.every((producto) =>
                Number(producto.precio) === 10000 &&
                typeof producto.titulo === 'string' &&
                preciosPorTitulo.has(producto.titulo.toLocaleLowerCase('es')),
            );
        let productosActualizados = productosGuardados;

        if (catalogoAnterior && !localStorage.getItem('preciosCatalogoMangaVerseV2')) {
            productosActualizados = productosGuardados.map((producto) => ({
                ...producto,
                precio: preciosPorTitulo.get(producto.titulo.toLocaleLowerCase('es')),
            }));
            guardarDatos('productosMangaVerse', productosActualizados);
            localStorage.setItem('preciosCatalogoMangaVerseV2', 'true');
        }

        return productosActualizados.map((producto, indice) => ({
            ...producto,
            id: producto.id ?? indice + 1,
            img: producto.img || producto.imagen,
            imagen: producto.imagen || producto.img,
            stock: Number(producto.stock) || 0,
        }));
    }

    const productosIniciales = mangas.map((manga) => ({
        ...manga,
        stock: 10,
        imagen: manga.img,
    }));
    guardarDatos('productosMangaVerse', productosIniciales);
    return productosIniciales;
}

export function inicializarAdministrador() {
    const cuentas = leerDatos('cuentasMangaVerse', []);
    if (cuentas.some((cuenta) => cuenta.usuario === 'admin')) return;

    cuentas.push({
        nombre: 'Administrador',
        apellido: 'MangaVerse',
        usuario: 'admin',
        pass: 'admin123',
        correo: 'admin@mangaverse.cl',
        fecha: '2026-01-01',
        rol: 'admin',
    });
    guardarDatos('cuentasMangaVerse', cuentas);
}

export function agregarAlCarrito(manga) {
    const carrito = leerDatos('carritoMangaVerse', []);
    const item = carrito.find((producto) =>
        producto.nombre.toLocaleLowerCase('es') === manga.titulo.toLocaleLowerCase('es'),
    );

    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({
            nombre: manga.titulo,
            precio: Number(manga.precio),
            imagen: manga.imagen || manga.img,
            cantidad: 1,
        });
    }

    guardarDatos('carritoMangaVerse', carrito);
    const unidades = carrito.reduce((total, producto) => total + Number(producto.cantidad || 0), 0);
    window.dispatchEvent(new CustomEvent('mangaverse:carrito-actualizado', {
        detail: { titulo: manga.titulo, unidades },
    }));
}
