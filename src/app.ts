// Ejercicio 4: Patrón Adapter para cambiar la interfaz de inventarios viejos
import { Inventario } from "./exercises/singleton";


class InventarioViejo {
    private items: string[] = [];

    agregarItem(item: string): void {
        this.items.push(item)
    }
    listarItems(): string[] {
        return this.items;
    }
}

class AdaptadorInventario {

    private inventarioViejo: InventarioViejo

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo
    }

    public agregarEquipo():{}
    public listarEquipos():{}

}

// const inventarioViejo = new InventarioViejo();
// const adaptador = new AdaptadorInventario(inventarioViejo);
// adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
// console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]