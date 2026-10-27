import { render, screen } from '@testing-library/react';
import ResumenCompra from '../componentes/ResumenCompra';

describe('ResumenCompra', () => {
    it('calcula el total con envío y descuento', () => {
        render(<ResumenCompra subtotal={20000} envio={3000} descuento={5000} />);

        expect(screen.getByText('$20.000')).toBeInTheDocument();
        expect(screen.getByText('$3.000')).toBeInTheDocument();
        expect(document.getElementById('resumen-descuento')).toHaveTextContent('-$5.000');
        expect(screen.getByText('$18.000')).toBeInTheDocument();
    });

    it('no permite que el total sea menor que cero', () => {
        render(<ResumenCompra subtotal={1000} envio={0} descuento={5000} />);

        expect(document.getElementById('resumen-total')).toHaveTextContent('$0');
    });
});
