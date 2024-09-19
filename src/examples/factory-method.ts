import { Tienda } from "./tienda/venta-libro";

// Uso del Factory Method
const tienda = new Tienda();
const producto1 = tienda.crearProducto('fisico', 100);
const producto2 = tienda.crearProducto('digital', 50);
console.log(producto1.calcularPrecio()); // 110
console.log(producto2.calcularPrecio()); // 50