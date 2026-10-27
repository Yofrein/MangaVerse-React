import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ToastCarrito from '../componentes/ToastCarrito';
import { agregarAlCarrito } from '../data/almacenamiento';

describe('ToastCarrito', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('muestra y actualiza la cantidad al agregar mangas', () => {
        render(<ToastCarrito />);

        act(() => agregarAlCarrito({ titulo: 'Berserk 01', precio: 10000 }));
        expect(screen.getByRole('status')).toHaveTextContent('1 manga en el carrito');

        act(() => agregarAlCarrito({ titulo: 'Berserk 01', precio: 10000 }));
        expect(screen.getByRole('status')).toHaveTextContent('2 mangas en el carrito');
        expect(screen.getByRole('status')).toHaveTextContent('Berserk 01');
    });

    it('oculta la notificación después de tres segundos', () => {
        render(<ToastCarrito />);
        act(() => agregarAlCarrito({ titulo: 'Berserk 01', precio: 10000 }));

        act(() => vi.advanceTimersByTime(3000));

        expect(screen.getByRole('status')).not.toHaveClass('visible');
    });
});
