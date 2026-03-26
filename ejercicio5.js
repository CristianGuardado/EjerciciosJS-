// Función para comparar objetos a fondo, ignorando métodos
function deepComp(a, b) {
  // Si son el mismo valor o referencia, terminamos de una
  if (a === b) return true;

  // Si alguno no es objeto o es null, ya no pueden ser iguales
  if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
    return false;
  }

  // Sacamos las llaves pero filtramos para ignorar los métodos
  let keysA = Object.keys(a).filter(k => typeof a[k] !== 'function');
  let keysB = Object.keys(b).filter(k => typeof b[k] !== 'function');

  // Si no tienen la misma cantidad de propiedades, ni nos molestamos
  if (keysA.length !== keysB.length) return false;

  // Comparamos cada propiedad una por una
  for (let key of keysA) {
    // Si la llave no existe en el otro o el valor es distinto (recursivo)
    if (!keysB.includes(key) || !deepComp(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// --- Código de prueba del Lab ---
let a = {x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b = {x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c = {x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d = {x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e = {x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f = {x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};

console.log(deepComp(a, b)); // true
console.log(deepComp(a, c)); // false
console.log(deepComp(a, d)); // false
console.log(deepComp(a, e)); // false
console.log(deepComp(a, f)); // false