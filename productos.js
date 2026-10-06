// Base de datos de productos - Ampliada y centrada en categorías principales
const productos = [
    // ==================== OFICINA ====================
    {
        id: 1,
        nombre: "Papel Bond A4 500 hojas",
        categoria: "Oficina",
        precio: 4.50,
        descripcion: "Resma de papel bond blanco de 80 gramos",
        emoji: "📄",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 2,
        nombre: "Bolígrafo Azul x12",
        categoria: "Oficina",
        precio: 2.99,
        descripcion: "Caja de 12 bolígrafos azules de tinta líquida",
        emoji: "🖊️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 3,
        nombre: "Archivador Plastico",
        categoria: "Oficina",
        precio: 3.25,
        descripcion: "Archivador de plástico tamaño oficio con 4 anillas",
        emoji: "📁",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 4,
        nombre: "Grapadora de Escritorio",
        categoria: "Oficina",
        precio: 5.99,
        descripcion: "Grapadora metálica resistente para 20-30 hojas",
        emoji: "📎",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 5,
        nombre: "Cinta Adhesiva Transparente",
        categoria: "Oficina",
        precio: 1.50,
        descripcion: "Cinta adhesiva 48mm x 50m, transparente",
        emoji: "🎀",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 6,
        nombre: "Marcadores Fluorescentes x6",
        categoria: "Oficina",
        precio: 3.99,
        descripcion: "Set de 6 marcadores fluorescentes de colores vibrantes",
        emoji: "🖍️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 7,
        nombre: "Sobre Kraft 25x35cm",
        categoria: "Oficina",
        precio: 8.50,
        descripcion: "Paquete de 100 sobres kraft sin ventana",
        emoji: "✉️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 8,
        nombre: "Cuaderno 200 hojas",
        categoria: "Oficina",
        precio: 2.75,
        descripcion: "Cuaderno espiral con 200 hojas rayadas",
        emoji: "📓",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 9,
        nombre: "Portaminas 0.5mm",
        categoria: "Oficina",
        precio: 2.50,
        descripcion: "Portaminas mecánico con mina de 0.5mm",
        emoji: "✏️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 10,
        nombre: "Carpeta Colgante",
        categoria: "Oficina",
        precio: 1.99,
        descripcion: "Carpeta colgante para archivos tamaño carta",
        emoji: "📂",
        disponible: true,
        estado: "disponible"
    },

    // ==================== PAPELERÍA ====================
    {
        id: 11,
        nombre: "Papel Lustre A4",
        categoria: "Papelería",
        precio: 6.99,
        descripcion: "Resma de papel lustre de colores surtidos 75 hojas",
        emoji: "🎨",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 12,
        nombre: "Cartulina Blanca",
        categoria: "Papelería",
        precio: 5.50,
        descripcion: "Paquete de 50 cartulinas blancas 210g",
        emoji: "📰",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 13,
        nombre: "Tijeras Escolares",
        categoria: "Papelería",
        precio: 3.75,
        descripcion: "Tijeras de seguridad con punta redonda",
        emoji: "✂️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 14,
        nombre: "Pegamento Blanco",
        categoria: "Papelería",
        precio: 1.25,
        descripcion: "Botella de pegamento blanco 120ml",
        emoji: "🧴",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 15,
        nombre: "Pega de Barra",
        categoria: "Papelería",
        precio: 0.99,
        descripcion: "Stick de pegamento 15g, fácil de usar",
        emoji: "📦",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 16,
        nombre: "Colores x24",
        categoria: "Papelería",
        precio: 4.99,
        descripcion: "Caja de 24 lápices de color premium",
        emoji: "🎨",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 17,
        nombre: "Libreta Pequeña",
        categoria: "Papelería",
        precio: 1.50,
        descripcion: "Libreta con 50 hojas para notas rápidas",
        emoji: "📝",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 18,
        nombre: "Marcador Permanente",
        categoria: "Papelería",
        precio: 2.25,
        descripcion: "Marcador permanente punto fino resistente",
        emoji: "🖌️",
        disponible: true,
        estado: "disponible"
    },

    // ==================== ASEO ====================
    {
        id: 19,
        nombre: "Papel Higienico 12 rollos",
        categoria: "Aseo",
        precio: 5.99,
        descripcion: "Paquete de 12 rollos de papel higiénico suave",
        emoji: "🧻",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 20,
        nombre: "Jabón Líquido 500ml",
        categoria: "Aseo",
        precio: 3.50,
        descripcion: "Jabón líquido antibacterial para manos",
        emoji: "🧼",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 21,
        nombre: "Desinfectante Multiusos",
        categoria: "Aseo",
        precio: 4.25,
        descripcion: "Desinfectante en spray 750ml para superficies",
        emoji: "🧴",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 22,
        nombre: "Papel Toalla 6 rollos",
        categoria: "Aseo",
        precio: 6.50,
        descripcion: "Rollos de papel toalla absorbente premium",
        emoji: "🧽",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 23,
        nombre: "Toallitas Húmedas",
        categoria: "Aseo",
        precio: 2.99,
        descripcion: "Paquete de 80 toallitas húmedas antibacteriales",
        emoji: "🧴",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 24,
        nombre: "Escoba con Recogedor",
        categoria: "Aseo",
        precio: 7.99,
        descripcion: "Juego de escoba y recogedor de plástico",
        emoji: "🧹",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 25,
        nombre: "Trapo de Limpieza",
        categoria: "Aseo",
        precio: 1.50,
        descripcion: "Trapo multiusos 30x30cm para limpiar",
        emoji: "🧼",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 26,
        nombre: "Bolsas Plásticas",
        categoria: "Aseo",
        precio: 3.99,
        descripcion: "Rollos de 100 bolsas plásticas resistentes",
        emoji: "🛍️",
        disponible: true,
        estado: "disponible"
    },

    // ==================== CAFETERÍA ====================
    {
        id: 27,
        nombre: "Café Premium 500g",
        categoria: "Cafetería",
        precio: 9.99,
        descripcion: "Café molido 100% arábica de alta calidad",
        emoji: "☕",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 28,
        nombre: "Té en Sobres x20",
        categoria: "Cafetería",
        precio: 4.50,
        descripcion: "Caja de 20 sobres de té variado",
        emoji: "🫖",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 29,
        nombre: "Azúcar Blanca 1kg",
        categoria: "Cafetería",
        precio: 2.50,
        descripcion: "Bolsa de azúcar blanca refinada",
        emoji: "🍬",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 30,
        nombre: "Leche en Polvo",
        categoria: "Cafetería",
        precio: 6.75,
        descripcion: "Leche en polvo integral 400g",
        emoji: "🥛",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 31,
        nombre: "Vasos Plásticos 200ml",
        categoria: "Cafetería",
        precio: 5.50,
        descripcion: "Paquete de 100 vasos plásticos descartables",
        emoji: "🥤",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 32,
        nombre: "Servilletas de Papel",
        categoria: "Cafetería",
        precio: 2.75,
        descripcion: "Paquete de 100 servilletas blancas",
        emoji: "🧻",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 33,
        nombre: "Cucharas Plásticas",
        categoria: "Cafetería",
        precio: 3.25,
        descripcion: "Caja de 50 cucharas desechables",
        emoji: "🥄",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 34,
        nombre: "Galletitas Surtidas",
        categoria: "Cafetería",
        precio: 7.99,
        descripcion: "Caja de galletas de vainilla y chocolate",
        emoji: "🍪",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 35,
        nombre: "Chocolate en Polvo",
        categoria: "Cafetería",
        precio: 5.99,
        descripcion: "Chocolate en polvo 400g, soluble",
        emoji: "🍫",
        disponible: false,
        estado: "agotado"
    },

    // ==================== TECNOLOGÍA ====================
    {
        id: 36,
        nombre: "Cable USB Tipo C",
        categoria: "Tecnología",
        precio: 8.99,
        descripcion: "Cable USB-C de 2 metros, carga rápida",
        emoji: "🔌",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 37,
        nombre: "Adaptador HDMI",
        categoria: "Tecnología",
        precio: 12.50,
        descripcion: "Adaptador HDMI macho a hembra dorado",
        emoji: "📺",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 38,
        nombre: "Mouse Inalámbrico",
        categoria: "Tecnología",
        precio: 15.99,
        descripcion: "Mouse óptico 2.4GHz con batería incluida",
        emoji: "🖱️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 39,
        nombre: "Teclado Inalámbrico",
        categoria: "Tecnología",
        precio: 22.99,
        descripcion: "Teclado compacto inalámbrico 2.4GHz",
        emoji: "⌨️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 40,
        nombre: "Memoria USB 32GB",
        categoria: "Tecnología",
        precio: 11.50,
        descripcion: "Pendrive USB 3.0 de 32GB ultra rápido",
        emoji: "💾",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 41,
        nombre: "Auriculares Bluetooth",
        categoria: "Tecnología",
        precio: 28.99,
        descripcion: "Auriculares inalámbricos con micrófono",
        emoji: "🎧",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 42,
        nombre: "Webcam HD",
        categoria: "Tecnología",
        precio: 24.50,
        descripcion: "Cámara web 1080p con micrófono integrado",
        emoji: "📷",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 43,
        nombre: "Hub USB 4 Puertos",
        categoria: "Tecnología",
        precio: 16.75,
        descripcion: "Distribuidor USB 3.0 con 4 puertos",
        emoji: "🔗",
        disponible: false,
        estado: "sobre-pedido"
    },
    {
        id: 44,
        nombre: "Protector Pantalla",
        categoria: "Tecnología",
        precio: 6.99,
        descripcion: "Vidrio templado para smartphone 6.5 pulgadas",
        emoji: "📱",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 45,
        nombre: "Batería Externa 20000mAh",
        categoria: "Tecnología",
        precio: 19.99,
        descripcion: "Power bank con carga rápida dual USB",
        emoji: "🔋",
        disponible: true,
        estado: "disponible"
    },

    // ==================== PIÑATERÍA ====================
    {
        id: 46,
        nombre: "Piñata Clásica",
        categoria: "Piñatería",
        precio: 12.99,
        descripcion: "Piñata de cartón forma de burro tradicional",
        emoji: "🎉",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 47,
        nombre: "Confeti de Colores",
        categoria: "Piñatería",
        precio: 3.50,
        descripcion: "Bolsa de confeti multicolor 500g",
        emoji: "🎊",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 48,
        nombre: "Globos x50",
        categoria: "Piñatería",
        precio: 4.99,
        descripcion: "Paquete de 50 globos de látex variados",
        emoji: "🎈",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 49,
        nombre: "Serpentinas Metalizadas",
        categoria: "Piñatería",
        precio: 5.75,
        descripcion: "Rollos de serpentinas plateadas y doradas",
        emoji: "🎀",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 50,
        nombre: "Gorras de Fiesta",
        categoria: "Piñatería",
        precio: 6.50,
        descripcion: "Paquete de 12 gorras de papel para fiestas",
        emoji: "🎩",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 51,
        nombre: "Máscaras Venecianas",
        categoria: "Piñatería",
        precio: 8.99,
        descripcion: "Set de 6 máscaras decoradas con brillos",
        emoji: "🎭",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 52,
        nombre: "Bolsas de Sorpresas",
        categoria: "Piñatería",
        precio: 4.25,
        descripcion: "Paquete de 20 bolsas kraft con asas",
        emoji: "🎁",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 53,
        nombre: "Velas de Cumpleaños",
        categoria: "Piñatería",
        precio: 2.75,
        descripcion: "Caja de 20 velas de cumpleaños de colores",
        emoji: "🕯️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 54,
        nombre: "Moños de Decoración",
        categoria: "Piñatería",
        precio: 3.99,
        descripcion: "Set de 12 moños de tela para regalos",
        emoji: "🎀",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 55,
        nombre: "Papel Crepe",
        categoria: "Piñatería",
        precio: 2.50,
        descripcion: "Rollos de papel crepé de colores surtidos",
        emoji: "📜",
        disponible: true,
        estado: "disponible"
    },

    // ==================== ESCOLARES ====================
    {
        id: 56,
        nombre: "Mochila Escolar",
        categoria: "Escolares",
        precio: 24.99,
        descripcion: "Mochila ergonómica con compartimentos múltiples",
        emoji: "🎒",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 57,
        nombre: "Lonchera Térmica",
        categoria: "Escolares",
        precio: 15.99,
        descripcion: "Lonchera aislante con asa y bolsillo lateral",
        emoji: "🍱",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 58,
        nombre: "Termo para Bebidas",
        categoria: "Escolares",
        precio: 12.75,
        descripcion: "Termo de acero inoxidable 500ml",
        emoji: "🧃",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 59,
        nombre: "Regla Plástica",
        categoria: "Escolares",
        precio: 1.25,
        descripcion: "Regla de 30cm de plástico transparente",
        emoji: "📏",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 60,
        nombre: "Compás Escolar",
        categoria: "Escolares",
        precio: 3.50,
        descripcion: "Compás de acero con adaptador para lápiz",
        emoji: "🧭",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 61,
        nombre: "Calculadora Científica",
        categoria: "Escolares",
        precio: 18.99,
        descripcion: "Calculadora con 240 funciones y display grande",
        emoji: "🧮",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 62,
        nombre: "Diccionario Escolar",
        categoria: "Escolares",
        precio: 14.50,
        descripcion: "Diccionario con 15000 palabras ilustrado",
        emoji: "📖",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 63,
        nombre: "Pizarrón Magnético",
        categoria: "Escolares",
        precio: 9.99,
        descripcion: "Pizarra blanca 60x40cm con marcadores incluidos",
        emoji: "🖊️",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 64,
        nombre: "Cuaderno Escolar 100 hojas",
        categoria: "Escolares",
        precio: 2.25,
        descripcion: "Cuaderno de raya con 100 hojas calidad premium",
        emoji: "📕",
        disponible: true,
        estado: "disponible"
    },
    {
        id: 65,
        nombre: "Carpeta Escolar Plastico",
        categoria: "Escolares",
        precio: 3.75,
        descripcion: "Carpeta plástica tipo clip con bolsillos internos",
        emoji: "📂",
        disponible: true,
        estado: "disponible"
    }
];

const imagenesPorCategoria = {
    Oficina: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    "Papelería": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    Aseo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    Cafetería: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    Tecnología: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    "Piñatería": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    Escolares: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
};

productos.forEach((producto) => {
    producto.imagen = producto.imagen || imagenesPorCategoria[producto.categoria] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = productos;
}
