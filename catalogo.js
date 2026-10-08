let productosActuales = [];
let inputBusqueda;
let selectCategoria;
let divProductos;

function inicializarDOM() {
    inputBusqueda = document.getElementById('busqueda');
    selectCategoria = document.getElementById('categoria');
    divProductos = document.getElementById('productos');

    if (!inputBusqueda || !selectCategoria || !divProductos) {
        console.error('No se encontraron los elementos del DOM.');
        return false;
    }
    return true;
}

function inicializar() {
    if (!inicializarDOM()) {
        return;
    }

    if (!Array.isArray(productos)) {
        console.error('No se encontró el array de productos.');
        return;
    }

    productosActuales = [...productos];
    cargarCategorias();
    mostrarProductos(productosActuales);

    inputBusqueda.addEventListener('input', filtrarProductos);
    selectCategoria.addEventListener('change', filtrarProductos);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

function cargarCategorias() {
    const categorias = [...new Set(productos.map(p => p && p.categoria))]
        .filter(Boolean)
        .sort();

    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        selectCategoria.appendChild(option);
    });
}

function mostrarProductos(listaProductos) {
    divProductos.innerHTML = '';

    if (!listaProductos || listaProductos.length === 0) {
        const msg = document.createElement('div');
        msg.className = 'sin-productos';
        msg.textContent = 'No se encontraron productos';
        divProductos.appendChild(msg);
        return;
    }

    const fragment = document.createDocumentFragment();

    listaProductos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        if (tarjeta) {
            fragment.appendChild(tarjeta);
        }
    });

    divProductos.appendChild(fragment);
}

function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-producto';
    tarjeta.setAttribute('role', 'article');
    tarjeta.setAttribute('aria-label', `${producto.nombre || 'Producto'} - ${producto.categoria || 'Sin categoría'}`);

    const nombre = escaparHTML(producto.nombre || 'Sin nombre');
    const categoria = escaparHTML(producto.categoria || 'Sin categoría');
    const descripcion = escaparHTML(producto.descripcion || '');
    const imagen = producto.imagen || '';

    tarjeta.innerHTML = `
        <div class="imagen-producto">
            <img src="${imagen}" alt="${nombre}" loading="lazy" decoding="async">
        </div>
        <div class="info-producto">
            <div class="nombre-producto">${nombre}</div>
            <span class="categoria-producto">${categoria}</span>
            <p class="descripcion-producto">${descripcion}</p>
        </div>
    `;

    return tarjeta;
}

function escaparHTML(texto) {
    if (typeof texto !== 'string') {
        return '';
    }

    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function filtrarProductos() {
    const termino = (inputBusqueda.value || '').toLowerCase().trim();
    const categoriaSeleccionada = selectCategoria.value || '';

    productosActuales = productos.filter(producto => {
        if (!producto) {
            return false;
        }

        const nombre = (producto.nombre || '').toLowerCase();
        const descripcion = (producto.descripcion || '').toLowerCase();
        const categoria = producto.categoria || '';

        const coincideTermino = !termino || nombre.includes(termino) || descripcion.includes(termino);
        const coincideCategoria = !categoriaSeleccionada || categoria === categoriaSeleccionada;

        return coincideTermino && coincideCategoria;
    });

    mostrarProductos(productosActuales);
}
