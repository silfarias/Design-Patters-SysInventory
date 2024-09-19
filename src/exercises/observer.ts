// Ejercicio 3: Patrón Observer para seguimiento de estado

interface IObservador {
    notificar(nombre: string, estado: string): void;
}

class Soporte implements IObservador {

    constructor(){}

    public notificar(nombre: string,estado: string): void { // recibe actualizaciones cuando el estado de un equipo cambia
        console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}.`);
    }
}

class EquipoInf {
    private observadores: IObservador[] = [];
    private nombre: string;
    private tipo: string;
    private estado: string;

    constructor(nombre: string, tipo: string, estado: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }

    public agregarObservador(observador: IObservador): void {
        this.observadores.push(observador);
    }

    public cambiarEstado(newEstado: string): void {
        this.estado = newEstado;
        this.notificar();
    }

    public notificar(): void {
        this.observadores.forEach(observador => observador.notificar(this.nombre, this.estado));
    }
}

const soporte = new Soporte();
const equipo = new EquipoInf("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.