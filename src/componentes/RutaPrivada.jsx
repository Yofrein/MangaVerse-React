import { Navigate } from 'react-router-dom';
import { obtenerCuentaActiva } from '../data/almacenamiento';

function RutaPrivada({ children, rol }) {
    const cuenta = obtenerCuentaActiva();

    if (!cuenta || (rol && cuenta.rol !== rol)) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default RutaPrivada;
