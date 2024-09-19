// Ejercicio 3: Patrón Observer para seguimiento de estado

interface IObservador {
    notificar(estado: string, equipo: string): void;
}

class Soporte implements IObservador {

    public notificar(estado: string, equipo: string): void {
        console.log(`Soporte notificado: ${equipo} ha cambiado su estado a ${estado}.`);
    }
}

class EquipoInf {
    
    private observadores: IObservador[] = [];

    public agregarObservador(observador: IObservador): void {
        this.observadores.push(observador);
    }
}