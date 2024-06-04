/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 */

// Stack (pila). Last in first out (FIFO).

let stack = [];
stack.push ("tres");
stack.push ("seis");
stack.push ("nueve");
console.log (stack);
stack.pop ();
console.log (stack);

// peek: Retorna el último valor ingresado a la pila, sin sacarlo de ésta.

function peek (stack) {
    return stack [stack.length -1];
}
console.log (peek (stack));

// Queue (cola). First in first out.

let queue = [];
queue.push ("Ciervo");
queue.push ("Boa");
queue.push ("Puma");
console.log (queue);
queue.shift ();
console.log (queue);

 /* DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atras" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */

let documents = ["chula.txt", "reabre.txt", "flipo.txt", "legia.txt"];
let toprint = [];

console.log ("agregando a impresora: ");
for (let i = 0; i < documents.length; i++ ) {
    toprint.unshift (documents [i]);
    console.log ("Cola de impresión: ", toprint);
};

console.log ("Imprimiendo: ");
do {
    toprint.pop ();
    console.log ("Impresiones pendientes:", toprint);
} while (toprint.length > 0);

 //pila - last in first out. 
 //la pila de stack siempre elimina al último , no guarda el elemento eliminado, solo puedes agregar y eliminar en un sentido.

let historial = [];
let paginaActual = 0;

var agregarPagina = function (web) {
    if (historial.length > 0) {
        paginaActual++;
    }
    historial.push (web);
};

let atras = function () {
    console.log (historial [paginaActual -1]);
};

let adelante = function () {
    console.log (historial [paginaActual + 1]);
}

agregarPagina ("Super.com");
    console.log (historial);

agregarPagina ("Hiper.com");
    console.log (historial);

atras ();
    console.log (historial);