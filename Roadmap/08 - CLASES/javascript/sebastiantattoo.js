/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 */

/**
 * Las clases son plantillas para crear objetos.
 *  Las clases son una forma de encapsular datos y funciones relacionadas en un solo objeto,
    proporcionando una estructura más organizada y orientada a objetos al código JavaScript. 
 */

class todo {
    constructor (título, descripción, hecho, usuario, daysLeft) {
        this.título = título,
        this.descripción = descripción,
        this.hecho = hecho,
        this.usuario = usuario,
        this.daysLeft = daysLeft
    };

    mostrarData () {
        console.log (`Aquí se muestra la info de : ${this.título}, ${this.descripción}, ${this.hecho}, ${this.usuario}, ${this.daysLeft}`)
    }
};

const datos = new todo ("Universitario", "9", "369", "@3399", 5);

datos.mostrarData ();

datos.usuario = "@onem1llion";
datos.descripción = "Experimentado";

datos.mostrarData ();

// Clases.
class Programmer {
    // Constructor en mi inicio.
    constructor (nombre, experiencia, lenguajes) {
        this.nombre = nombre,
        this.experiencia = experiencia,
        this.lenguajes = lenguajes
    };
    // Función que imprima por consola.
    saludar () {
        console.log (this.nombre, this.experiencia,this.lenguajes)
    }
}; 

// Crear un objeto para usar la clase
const programmerList = new Programmer ("Aparicio", 5, ["java", "cobol"]);

// Imprime la información.
programmerList.saludar ();// Llama el saludo que esta dentro de la clase.

// Modificación del objeto.

programmerList.nombre = "Yolanda";
programmerList.experiencia = 1;

// Imprimir información después de la modificación.

programmerList.saludar ();

 /* DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 */

 // Pilas.

 class Stack {
    constructor () {
        this.pila = [];
    }
    push (item) {
        return this.pila.push (item);
    }
    pop () {
        if (this.count () == 0) {
            return "none";
        } else {
            return this.pila.pop ();
        }
    }
    count () {
        return  this.pila.length;
     }
     print () {
        return console.log (this.pila);
     }
 }

// Ejemplo de pila.

const myStack = new Stack ();
myStack.push ("A");
myStack.push ("B");
myStack.push ("C");
console.log (myStack.count ());
myStack.print ();
console.log (myStack.pop ());// Imprime C.
console.log (myStack.pop ());// Imprime B.
console.log (myStack.pop ());// Imprime A.
console.log (myStack.pop ());// Imprime "none".
myStack.print ();

// Colas.

class Queue {
    constructor () {
        this.cola = [];
    }
    enqueue (item) {
        return this.cola.push (item);
    }
    dequeue () {
        if (this.count () == 0) {
            return "None";
        } else {
            return this.cola.shift ();
        }
    }
    count () {
        return this.cola.length;
    }
    print () {
       return console.log (this.cola);
    }
}

// Ejemplo de cola.

const myQueue = new Queue ();
myQueue.enqueue ("A");
myQueue.enqueue ("B");
myQueue.enqueue ("C");
console.log (myQueue.count ());
myQueue.print ();
console.log (myQueue.dequeue ());
console.log (myQueue.dequeue ());
console.log (myQueue.dequeue ());
console.log (myQueue.dequeue ());
console.log (myQueue.print ());

// Fin del ejercicio.
