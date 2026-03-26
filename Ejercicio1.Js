// Listado de obras para el inventario
let pinturas = [
    { titulo: "Mona Lisa", artista: "Leonardo da Vinci", año: 1503 },
    { titulo: "The Last Supper", artista: "Leonardo da Vinci", año: 1495 },
    { titulo: "Starry Night", artista: "Vincent van Gogh", año: 1889 },
    { titulo: "The Scream", artista: "Edvard Munch", año: 1893 },
    { titulo: "Guernica", artista: "Pablo Picasso", año: 1937 },
    { titulo: "The Kiss", artista: "Gustav Klimt", año: 1907 },
    { titulo: "Girl With a Pearl Earring", artista: "Johannes Vermeer", año: 1665 },
    { titulo: "The Birth of Venus", artista: "Sandro Botticelli", año: 1485 },
    { titulo: "Las Meninas", artista: "Diego Velázquez", año: 1656 },
    { titulo: "The Creation of Adam", artista: "Michelangelo", año: 1512 }
];

console.log("--- Inventario de Pinturas Famosas ---");

// Imprimimos cada cuadro con el formato limpio
pinturas.forEach(p => {
    console.log(`Título: ${p.titulo} | Artista: ${p.artista} | Año: ${p.año}`);
});