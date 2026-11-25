const API_URL = 'http://localhost:8089/api';

function obtenerHeaders(conAuth = false) {
    const headers = {
        'Content-Type': 'application/json',
    };
    if (conAuth) {
        const token = localStorage.getItem('tokenMangaVerse');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
    }
    return headers;
}

async function manejarRespuesta(response) {
    const texto = await response.text();
    const data = texto ? JSON.parse(texto) : null;

    if (!response.ok) {
        const mensaje = data?.error || data?.mensaje || `Error HTTP ${response.status}`;
        throw new Error(mensaje);
    }
    return data;
}

// ==================== AUTENTICACIÓN ====================
export async function loginApi(username, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: obtenerHeaders(false),
        body: JSON.stringify({ username, password }),
    });
    return manejarRespuesta(res); // Devuelve { token, username, rol }
}

export async function registerApi(datosUsuario) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: obtenerHeaders(false),
        body: JSON.stringify(datosUsuario),
    });
    return manejarRespuesta(res);
}

// ==================== PRODUCTOS (CRUD) ====================
export async function obtenerProductosApi() {
    const res = await fetch(`${API_URL}/productos`, {
        method: 'GET',
        headers: obtenerHeaders(false),
    });
    return manejarRespuesta(res);
}

export async function crearProductoApi(producto) {
    const res = await fetch(`${API_URL}/productos`, {
        method: 'POST',
        headers: obtenerHeaders(true),
        body: JSON.stringify(producto),
    });
    return manejarRespuesta(res);
}

export async function actualizarProductoApi(id, producto) {
    const res = await fetch(`${API_URL}/productos/${id}`, {
        method: 'PUT',
        headers: obtenerHeaders(true),
        body: JSON.stringify(producto),
    });
    return manejarRespuesta(res);
}

export async function eliminarProductoApi(id) {
    const res = await fetch(`${API_URL}/productos/${id}`, {
        method: 'DELETE',
        headers: obtenerHeaders(true),
    });
    return manejarRespuesta(res);
}

// ==================== PEDIDOS ====================
export async function crearPedidoApi(pedido) {
    const res = await fetch(`${API_URL}/pedidos`, {
        method: 'POST',
        headers: obtenerHeaders(true),
        body: JSON.stringify(pedido),
    });
    return manejarRespuesta(res);
}

export async function obtenerPedidosUsuarioApi(username) {
    const res = await fetch(`${API_URL}/pedidos/usuario/${encodeURIComponent(username)}`, {
        method: 'GET',
        headers: obtenerHeaders(true),
    });
    return manejarRespuesta(res);
}

export async function obtenerTodosLosPedidosApi() {
    const res = await fetch(`${API_URL}/pedidos`, {
        method: 'GET',
        headers: obtenerHeaders(true),
    });
    return manejarRespuesta(res);
}