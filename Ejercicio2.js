// Constructor clásico
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// Factory function básica
function getImage(title, artist, date) {
  return {
    title: title,
    artist: artist,
    date: date
  };
}

// Datos de partida (usando los del ejercicio anterior)
let images = [
  { titulo: "Mona Lisa", artista: "Leonardo da Vinci", año: 1503 },
  { titulo: "The Last Supper", artista: "Leonardo da Vinci", año: 1495 },
  { titulo: "Starry Night", artista: "Vincent van Gogh", año: 1889 }
];

// Creamos  usando el constructor (new)
let images1 = images.map(p => new Image(p.titulo, p.artista, p.año));

// Creamos  a partir de la anterior usando la factory
let images2 = images1.map(p => getImage(p.title, p.artist, p.date));

// Resultado final 
console.log("--- Listado images2 ---");
images2.forEach(img => {
  console.log(`${img.title} - ${img.artist} (${img.date})`);
});