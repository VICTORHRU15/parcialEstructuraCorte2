// Principio LIFO (Last In, First Out)

let pila = [];

// Agregar objetos
pila.push({ Nombre: "Orlando", Edad: 30 });
pila.push({ Nombre: "Victor", Edad: 25 });
pila.push({ Nombre: "Diego", Edad: 40 });

console.log(pila);

// Eliminar elemento
let elementoEliminado = pila.pop();
console.log("Eliminado:", elementoEliminado);

// Mostrar el tope (último elemento)
let tope = pila[pila.length - 1];
console.log("Tope:", tope);

// Validar si está vacía
if (pila.length === 0) {
    console.log("La pila está vacía");
}