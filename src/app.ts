import { InventarioViejo, AdaptadorInventario } from './exercises/adaptador'
import { EquipoFactory } from './exercises/factory-method';
import { EquipoInf, Soporte } from './exercises/observer';
import { Inventario } from './exercises/singleton';

console.log('<<<<<<<<<<<<<<<<<<Patrón Singleton>>>>>>>>>>>>>>>>>>>>>>');
const inventario = Inventario.obtenerInstancia()
inventario.agregarEquipo({ nombre: "Notebook HP", tipo: "Portatil", estado: "Disponible" });
console.log(inventario.listarEquipos());

console.log('<<<<<<<<<<<<<<<<<<Patrón Factory Method>>>>>>>>>>>>>>>>>>>>>>');
const factory = new EquipoFactory();
const tipoNotebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(tipoNotebook.detalles());

console.log('<<<<<<<<<<<<<<<<<<Patrón Observer>>>>>>>>>>>>>>>>>>>>>>');
const soporte = new Soporte();
const equipo = new EquipoInf("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

console.log('<<<<<<<<<<<<<<<<<<Patrón Adapter>>>>>>>>>>>>>>>>>>>>>>');
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.addItem({ nombre: 'Mouse', tipo: 'USB', estado: 'Disponible' });
console.log(adaptador.items())