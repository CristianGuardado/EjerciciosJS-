// Constructor 
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// Objeto para gestionar las imágenes
const images = {
  list: [],
  contains: function(title) {
    return this.list.some(img => img.title === title);
  },
  add: function(title, artist, date) {
    if (!this.contains(title)) {
      this.list.push(new Image(title, artist, date));
    }
  }
};

// 1. Metemos el show en el prototipo para ahorrar memoria
Image.prototype.show = function() {
  console.log(`${this.title} (${this.artist}, ${this.date})`);
};

// 2. Editamos el show de la lista para que use el método de arriba
images.show = function() {
  this.list.forEach(img => img.show());
};

// 3. Método para actualizar los datos si coincide el título
images.edit = function(title, artist, date) {
  let item = this.list.find(img => img.title === title);
  if (item) {
    item.artist = artist;
    item.date = date;
  }
};

// 4. Borrar buscando el índice y usando splice
images.delete = function(title) {
  let idx = this.list.findIndex(img => img.title === title);
  if (idx !== -1) {
    this.list.splice(idx, 1);
  }
};

// --- Secuencia de prueba solicitada ---
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);

images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');

images.show();