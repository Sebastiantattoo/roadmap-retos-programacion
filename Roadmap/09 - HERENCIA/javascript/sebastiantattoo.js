/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 */
 
class Animal {
    constructor (name, size, isDomestic) {
        this.name = name
        this.size =size
        this.isDomestic = isDomestic
    }
}

class Dog extends Animal {
    get makeDogSound () {
        return this.dogSound ();
    }
    dogSound () {
        return "guau guau" + " es el sonido que emite: " + this.name;
    }
};

class Cat extends Animal {
    get makeCatSound () {
        return this.catsound ();
    }
    catsound () {
        return "miau miau" + " es el sonido que emite: " + this.name;
    }
};

const myDog = new Dog ("Trapito ", "Medium", true) 
console.log (myDog.makeDogSound);

const myCat = new Cat ("Merlina ", "Small", true) 
console.log (myCat.makeCatSound);

console.log (myCat.catsound); 

/* DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

class Empleado {
    constructor (id, nombreEmpleado) {
        this.id = id
        this.nombreEmpleado = nombreEmpleado
    }

    get hacerPresentacion () {
        return this.presentacion ()
    }

    presentacion () {
        return "Mi nombre es: " + this.nombreEmpleado
    }
}

class Gerente extends Empleado {
    constructor (id, nombreEmpleado, clientes = []) {
        super (id, nombreEmpleado)
        this.clientes = clientes
    }

    get mostrarListaClientes () {
        return this.listaClientes ()
    }

    listaClientes () {
        return this.clientes
    }

    agregarCliente (nombreCompania) {
        this.clientes.push (nombreCompania)
    }
}

const nuevoGerente = new Gerente (33, "Giusseppe")
console.log (nuevoGerente.hacerPresentacion)
console.log (nuevoGerente.mostrarListaClientes)
nuevoGerente.agregarCliente ("ABB")
console.log (nuevoGerente.mostrarListaClientes)

class GerenteDeProyecto extends Empleado {
    constructor (id, nombreEmpleado, proyectos = [] ) {
        super (id, nombreEmpleado)
        this.proyectos = proyectos
    }

    get mostrarListaProyectos () {
        return this.listaProyectos ()
    }

    listaProyectos () {
        return this.proyectos
    }

    comenzarNuevoProyecto (nombreProyecto) {
        this.proyectos.push (nombreProyecto)
    }

    finalizarProyecto (nombreProyecto) {
        this.proyectos = this.proyectos.filter (proyectos => proyectos !== nombreProyecto)
    }
};

const nuevoGerenteProyecto = new GerenteDeProyecto (66, "Luisana");
console.log (nuevoGerenteProyecto.hacerPresentacion);
console.log (nuevoGerenteProyecto.mostrarListaProyectos);
nuevoGerenteProyecto.comenzarNuevoProyecto ("Página web");
nuevoGerenteProyecto.comenzarNuevoProyecto ("Mobile app");
nuevoGerenteProyecto.comenzarNuevoProyecto ("Retocar logo");

console.log (nuevoGerenteProyecto.mostrarListaProyectos);
nuevoGerenteProyecto.finalizarProyecto ("Mobile app");
console.log (nuevoGerenteProyecto.mostrarListaProyectos);

class Programador extends Empleado {
    constructor (id, nombreEmpleado, tareas = []) {
        super (id, nombreEmpleado)
        this.tareas = tareas    
    }

    get mostrarListaTareas () {
        return this.listaTareas () 
    }

    listaTareas () {
        return this.tareas
    }

    comenzarNuevaTarea (nuevaTarea) {
        this.tareas.push (nuevaTarea)
    }

    finaizacionTarea (nombreTarea) {
        this.tareas = this.tareas.filter (tarea => tarea !== nombreTarea)
    }
};

const nuevoProgramador = new Programador (99, "Yo soy");
console.log (nuevoProgramador.hacerPresentacion);
console.log (nuevoProgramador.mostrarListaTareas);
nuevoProgramador.comenzarNuevaTarea ("Crear código en JAVA");
nuevoProgramador.comenzarNuevaTarea ("Crear código en C ++");
nuevoProgramador.comenzarNuevaTarea ("Crear código en PYTHON");
console.log (nuevoProgramador.mostrarListaTareas);
nuevoProgramador.finaizacionTarea ("Crear código en C ++");
console.log (nuevoProgramador.mostrarListaTareas);


// Fin del ejercicio.
