// Ejercicio 1: Patrón Singleton para el Inventario de equipos informáticos

type Equipo = {
    nombre: string,
    tipo: string,
    estado: Estado
}

type Estado = 'Disponible' | 'No disponible' |'Mantenimiento';

export class Inventario {
    private static instancia: Inventario;
    private inventario: Equipo[] = [];

    private constructor() {};

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    };

    public agregarEquipo(equipo: Equipo) {
        this.inventario.push(equipo);
    };

    public listarEquipos(): Equipo[] {
        return this.inventario;
    }
};