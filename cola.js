let cola = [];

// Agregar elementos
cola.push(10);
cola.push(30);
cola.push(27);

console.log(cola);

// Eliminar elemento
let elementoEliminado = cola.shift();
console.log("Eliminado:", elementoEliminado);

// Mostrar el primero en la cola
let primero = cola[0];
console.log("Primero:", primero);

// Validar si está vacía
if (cola.length === 0) {
    console.log("La cola está vacía");
}
