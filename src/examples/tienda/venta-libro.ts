interface Producto {
    calcularPrecio(): number;
}

class ProductoFisico implements Producto {
    private costo: number;

    constructor(costo: number) {
        this.costo = costo;
    }

    calcularPrecio(): number {
        return this.costo + 10; // Costo más una tarifa de envío fija
    }
}

export class ProductoDigital implements Producto {
    private costo: number;

    constructor(costo: number) {
        this.costo = costo;
    }

    calcularPrecio(): number {
        return this.costo; // No tiene costo de envío
    }
}

export class Tienda {
    public crearProducto(tipo: string, costo: number): Producto {
        if (tipo === 'fisico') {
            return new ProductoFisico(costo);
        } else if (tipo === 'digital') {
            return new ProductoDigital(costo);
        }
        throw new Error('Tipo de producto no reconocido');
    }
}