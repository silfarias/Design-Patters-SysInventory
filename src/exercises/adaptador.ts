// Ejercicio 4: Patrón Adapter para cambiar la interfaz de inventarios viejos

type Equipo = {
    nombre: string,
    tipo: string,
    estado: Estado
}

type Estado = 'Disponible' | 'No disponible' |'Mantenimiento';

export class InventarioViejo {
    private items: Equipo[] = [];

    agregarItem(item: Equipo): void {
        this.items.push(item)
    }
    listarItems(): Equipo[] {
        return this.items;
    }
}

interface IInventario {
    addItem(equipo: Equipo): void;
    items(): Equipo[];
}

export class AdaptadorInventario implements IInventario {

    private inventarioViejo: InventarioViejo

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo
    }

    public addItem(equipo: Equipo): void {
        this.inventarioViejo.agregarItem(equipo)
    }
    public items(): Equipo[] {
        return this.inventarioViejo.listarItems()
    }
}