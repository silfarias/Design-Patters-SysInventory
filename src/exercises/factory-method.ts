// Ejercicio 2: Patrón Factory Method para la creación de equipos

interface IEquipo {
    detalles(): string
}

class TipoNotebook implements IEquipo {
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre
        this.ram = ram
        this.procesador = procesador
    }

    detalles(): string {
        return `Tipo: Notebook, Nombre ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class TipoDesktop implements IEquipo {
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre
        this.ram = ram
        this.procesador = procesador
    }
    detalles(): string {
        return `Tipo: Desktop, Nombre ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class TipoServidor implements IEquipo {
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre
        this.ram = ram
        this.procesador = procesador
    }
    detalles(): string {
        return `Tipo: Servidor, Nombre ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

export class EquipoFactory {
    public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
        switch (tipo) {
            case 'Notebook':
                return new TipoNotebook(nombre, ram, procesador)
                break;
            case 'Desktop':
                return new TipoDesktop(nombre, ram, procesador)
                break
            case 'Servidor':
                return new TipoServidor(nombre, ram, procesador)
                break
            default:
                throw new Error('El tipo no es reconocido')
                break;
        }
    }
}