// Principio FIFO (First In, First Out)

let cola = [];

// Agregar elementos
cola.push(10);
cola.push(20);
cola.push(30);

console.log(cola);

// Eliminar elemento (sale el primero)
let elementoEliminado = cola.shift();
console.log("Eliminado:", elementoEliminado);

// Mostrar el primero en la cola
let primero = cola[0];
console.log("Primero:", primero);

