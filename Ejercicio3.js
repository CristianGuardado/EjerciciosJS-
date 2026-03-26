// Definimos el constructor básico para cada obra
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Objeto principal para gestionar la colección
const images = {
    list: [],

    // Revisa si el título ya existe en nuestro array para evitar duplicados
    contains: function(title) {
        return this.list.some(img => img.title === title);
    },

    // Añade una nueva imagen solo si no la tenemos ya guardada
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            const newImage = new Image(title, artist, date);
            this.list.push(newImage);
        } else {
            console.log(`Nota: "${title}" ya está en la lista.`);
        }
    },

    // Recorre el array y muestra los datos con el formato solicitado
    show: function() {
        if (this.list.length === 0) {
            console.log("La lista está vacía.");
        } else {
            this.list.forEach(img => {
                console.log(`${img.title} (${img.artist}, ${img.date})`);
            });
        }
    },

    // Vacía el array por completo
    clear: function() {
        this.list = [];
    }
};
