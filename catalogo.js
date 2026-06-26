// Variables globales
let productosActuales = [...productos];

// Elementos del DOM
const inputBusqueda = document.getElementById('busqueda');
const selectCategoria = document.getElementById('categoria');
const selectOrdenar = document.getElementById('ordenar');
const divProductos = document.getElementById('productos');

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarCategorias();
    mostrarProductos();
    
    // Event listeners
    inputBusqueda.addEventListener('input', filtrarProductos);
    selectCategoria.addEventListener('change', filtrarProductos);
    selectOrdenar.addEventListener('change', ordenarProductos);
});

// Cargar categorías en el selector
function cargarCategorias() {
    const categorias = [...new Set(productos.map(p => p.categoria))];
    
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        selectCategoria.appendChild(option);
    });
}

// Mostrar productos
function mostrarProductos(listaProductos = productos) {
    divProductos.innerHTML = '';
    
    if (listaProductos.length === 0) {
        divProductos.innerHTML = '<div class="sin-productos">No se encontraron productos</div>';
        return;
    }
    
    listaProductos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        divProductos.appendChild(tarjeta);
    });
}

// Crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-producto';
    
    const disponibilidad = producto.disponible 
        ? '<span class="disponibilidad disponible">✓ Disponible</span>'
        : '<span class="disponibilidad agotado">✗ Agotado</span>';
    
    tarjeta.innerHTML = `
        <div class="imagen-producto">${producto.emoji}</div>
        <div class="info-producto">
            <div class="nombre-producto">${producto.nombre}</div>
            <span class="categoria-producto">${producto.categoria}</span>
            <p class="descripcion-producto">${producto.descripcion}</p>
            <div class="precio-producto">$${producto.precio.toFixed(2)}</div>
            ${disponibilidad}
        </div>
    `;
    
    return tarjeta;
}

// Filtrar productos
function filtrarProductos() {
    const termino = inputBusqueda.value.toLowerCase();
    const categoria = selectCategoria.value;
    
    productosActuales = productos.filter(producto => {
        const coincideTermino = 
            producto.nombre.toLowerCase().includes(termino) ||
            producto.descripcion.toLowerCase().includes(termino);
        
        const coincideCategoria = !categoria || producto.categoria === categoria;
        
        return coincideTermino && coincideCategoria;
    });
    
    // Aplicar orden actual
    const orden = selectOrdenar.value;
    aplicarOrden(productosActuales, orden);
    
    mostrarProductos(productosActuales);
}

// Ordenar productos
function ordenarProductos() {
    const orden = selectOrdenar.value;
    aplicarOrden(productosActuales, orden);
    mostrarProductos(productosActuales);
}

// Aplicar orden
function aplicarOrden(listaProductos, orden) {
    switch(orden) {
        case 'nombre':
            listaProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'precio-asc':
            listaProductos.sort((a, b) => a.precio - b.precio);
            break;
        case 'precio-desc':
            listaProductos.sort((a, b) => b.precio - a.precio);
            break;
    }
}
