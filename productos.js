// Base de datos de productos
const productos = [
    {
        id: 1,
        nombre: "Tuercas M8",
        categoria: "Tornillería",
        precio: 3.50,
        descripcion: "Tuercas de acero inoxidable M8",
        emoji: "🔩",
        disponible: true
    },
    {
        id: 2,
        nombre: "Pernos M10",
        categoria: "Tornillería",
        precio: 3.75,
        descripcion: "Pernos de alta resistencia M10",
        emoji: "🔧",
        disponible: true
    },
    {
        id: 3,
        nombre: "Arandelas",
        categoria: "Tornillería",
        precio: 1.20,
        descripcion: "Arandelas de acero galvanizado",
        emoji: "⭕",
        disponible: true
    },
    {
        id: 4,
        nombre: "Cable de cobre",
        categoria: "Eléctrica",
        precio: 5.50,
        descripcion: "Cable conductor 2.5mm² x 100m",
        emoji: "⚡",
        disponible: true
    },
    {
        id: 5,
        nombre: "Interruptor simple",
        categoria: "Eléctrica",
        precio: 4.00,
        descripcion: "Interruptor de luz simple 10A",
        emoji: "🔌",
        disponible: true
    },
    {
        id: 6,
        nombre: "Tubo PVC",
        categoria: "Fontanería",
        precio: 8.00,
        descripcion: "Tubo PVC 32mm x 3m",
        emoji: "🔷",
        disponible: false
    },
    {
        id: 7,
        nombre: "Codo 90°",
        categoria: "Fontanería",
        precio: 2.00,
        descripcion: "Codo PVC 32mm 90 grados",
        emoji: "⌐",
        disponible: true
    },
    {
        id: 8,
        nombre: "Pintura acrílica",
        categoria: "Pintura",
        precio: 15.00,
        descripcion: "Pintura acrílica blanca 5L",
        emoji: "🎨",
        disponible: true
    }
    {
        id: 9,
        nombre: "Tu producto",
        categoria: "Tu categoría",
        precio: 10.00,
        descripcion: "Descripción del producto",
        emoji: "🎯",
        disponible: true
    }
];

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productos;
}
