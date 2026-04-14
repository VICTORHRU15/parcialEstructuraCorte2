class Pila {
    constructor() {
        this.items = [];
    }

    push(obj) {
        this.items.push(obj);
        console.log("Elemento agregado:", obj);
    }

    pop() {
        if (this.items.length === 0) {
            console.log("La pila está vacía");
            return null;
        }
        const eliminado = this.items.pop();
        console.log("Elemento eliminado:", eliminado);
        return eliminado;
    }
}

const pila = new Pila();

pila.push({ Nombre: "Orlando", Edad: 30 });
pila.push({ Nombre: "Victor", Edad: 28 });

pila.pop();