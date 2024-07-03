/*
 * EJERCICIO:
 * Explora el concepto de "logging" en tu lenguaje. Configúralo y muestra
 * un ejemplo con cada nivel de "severidad" disponible.
 */

// Mensaje general.
console.log ("Mensaje que se imprime en nuestra consola");
// Mensaje informativo.
console.info("Mensaje para dar información");
// Mensaje de advertencia.
console.warn("Mensaje de warning o advertencia");
// Mensaje de error.
console.error("Mensaje para mostrar un error");
// Limpiar consola.
console.clear();
// Mensaje de depuración por consola.
console.debug("Mensaje de depurador en el proyecto");

// Grupo de mensajes.
console.group("Iniciar un grupo de logs");
console.log("Primera linea con mensaje por consola");
console.info("Segunda linea con información");
console.error("Tercera linea con un mensaje de error");
console.groupEnd();

// Logs para evaluar tiempos de ejecuciòn.
console.time("Inicio de proceso a evaluar");
// Proceso para testear.
console.timeEnd();

// Tablas. (Muestra una tabla por consola con sus indices).
console.table (["Javascript", "Python", "C#", "C++"]);

const user = [
    {
        name: "Sebastián",
        lastname: "Tatto",
        age: 42,
        skills: "Javascript"
    },
    {
        name: "Eduardo",
        lastname: "Silva",
        age: 24,
        skills: "Python"
    },
];

console.table(user);

/* DIFICULTAD EXTRA (opcional):
 * Crea un programa ficticio de gestión de tareas que permita añadir, eliminar
 * y listar dichas tareas.
 * - Añadir: recibe nombre y descripción.
 * - Eliminar: por nombre de la tarea.
 * Implementa diferentes mensajes de log que muestren información según la
 * tarea ejecutada (a tu elección).
 * Utiliza el log para visualizar el tiempo de ejecución de cada tarea.
 */

class administradorDeTareas {
    constructor () {
        this.tareas = [];
    }

    agregarTarea (nombre, descripcion) {
        console.time (`Tiempo de ejecución - Añadir tarea: ${nombre}`);
        const nombreTarea = this.tareas.find(tareas => tareas.nombre === nombre);
        if (nombreTarea) {
            console.error(`La tarea "${nombre}" ya existe`);
        } else {
            const tarea = {nombre, descripcion};
            this.tareas.push(tarea);
            console.log(`Tarea ${nombre} - ${descripcion}: añadida correctamente`);
        }
        console.timeEnd(`Tiempo de ejecución - Añadir tarea: ${nombre}`);
        return
    }
    // Borrar tarea.
    borrarTarea (nombre) {
        console.time(`Tiempo de ejecución - Eliminar tarea: ${nombre}`);
        const inicio = this.tareas.length;
        this.tareas = this.tareas.filter(tarea => tarea.nombre !== nombre);
        if (this.tareas.length === inicio) {
            console.error(`No se encontró la tarea con el nombre: "${nombre}`);
        } else {
            console.log (`Tarea eliminada: "${nombre}`);
        }
        console.timeEnd(`Tiempo de ejecución - Eliminando tarea: "${nombre}`);
    }
    // Listar tareas.
    listaDeTareas () {
        console.log("Listado de tareas");
        console.table(this.tareas);
    }
};

// Ejemplo de tareas.

const listadoTareas = new administradorDeTareas();
listadoTareas.agregarTarea("Estudiar", "a full Javascript");
listadoTareas.agregarTarea("Continuar", "estudiando Javascript");
listadoTareas.agregarTarea("Seguir", "y seguir estudiando");
listadoTareas.listaDeTareas();
listadoTareas.borrarTarea("Seguir");
listadoTareas.listaDeTareas();



