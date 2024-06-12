/*
 * EJERCICIO:
 * Utilizando tu lenguaje crea un conjunto de datos y realiza las siguientes
 * operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
 */
const nombresInvitados = ["Luis", "Jose", "Pedro", "Luisa", "Antonia"];
console.log ("Nombres originales del conjunto: ", nombresInvitados);

// Añadir un elemento al final.

nombresInvitados.push ("Geraldine");
console.log ("Elemento con agregado al final. Método push: ", nombresInvitados);

// Añadir elemento al principio.

nombresInvitados.unshift ("Keacy");
console.log ("Elemento agregado al principio del conjunto. Método unshift: ", nombresInvitados);

// Añadir varios elementos en bloqe al final del conjunto.

const newInvitados = ["Sole", "Cintia", "Gabriel"];
nombresInvitados.push (...newInvitados);
console.log ("Bloque de elementos agregados al final del conjunto: ", nombresInvitados);

// Añadir un bloque de elementos en una posición concreta.

const newInvitados2 = ["Parse", "Amigo", "Pana", "Friends"];
nombresInvitados.splice (5, 0, ...newInvitados2); // 1er param (lugar). 2do param (borrar cantidad de elementos).
console.log ("Bloque de elementos añadidos en posiciones concretas: ", nombresInvitados);

// Eliminar un elemento en una posición concreta.

nombresInvitados.splice (5, 1,);
console.log ("Eliminar un elemento en una posición concreta: ", nombresInvitados);

// Actualiza el valor de un elemeneto en una posición concreta.

nombresInvitados [0] = "Acidodesoxiribonucleico";
console.log ("Actualizar el valor de un elemento en una posición concreta: ", nombresInvitados);

// Comprobar si un elemento se encuentra en un conjunto.

const existLetterAInArray = nombresInvitados.find (nombresInvitados => nombresInvitados === "Antonia" ? true : false);
console.log ("Existe el elemento Antonia en el conjunto?: ", existLetterAInArray);
const existLetterPInArray = nombresInvitados.find (nombresInvitados => nombresInvitados === "Pedro" ? true : false);
console.log ("existe Pedro en el conjunto?: ", existLetterPInArray);

// Eliminar todos los elementos de un conjunto.

// nombresInvitados.length = 0;
// console.log (nombresInvitados);

/* DIFICULTAD EXTRA (opcional):
 * Muestra ejemplos de las siguientes operaciones con conjuntos:
 * - Unión.
 * - Intersección.
 * - Diferencia.
 * - Diferencia simétrica.
 */

// Operaciones con conjuntos.

const nombresInvitados2 = ["Argentina", "Uruguay"];
const listaFinalDeInvitados = new Set ();

nombresInvitados.forEach (nombres => listaFinalDeInvitados.add (nombres));
nombresInvitados2.forEach (nombres => listaFinalDeInvitados.add (nombres));

console.log ("Union de 2 conjuntos", listaFinalDeInvitados);

const interseccion = new Set (); /* La intersección es lo que une o tienen en común los dos conjuntos. En este caso no tienen nombres en común por eso nos devuelve por consola un set vacio.*/

nombresInvitados.forEach (nI1 => {
    nombresInvitados2.forEach (nI2 => {
        if (nI1 === nI2) {
            interseccion.add (nI1)
        }
    })
});

console.log ("Interseción: ", interseccion);

// Diferencia.

const diferencia = new Set ();

nombresInvitados.forEach (nD1 => diferencia.add (nD1));
nombresInvitados2.forEach (nD1 => {
    if (diferencia.has (nD1)) { // Método has es para saber si existe dentro del set un valor.
        diferencia.delete (nD1);
    }
});

console.log ("Diferencia: ", diferencia);


nombresInvitados2.forEach (nD1 => diferencia.add (nD1));
nombresInvitados.forEach (nD1 => {
    if (diferencia.has (nD1)) { // Método has es para saber si existe dentro del set un valor.
        diferencia.delete (nD1);
    }
});

console.log ("Diferencia: ", diferencia);

// Diferencia simétrica.

const diferenciaSimetrica = new Set ();

nombresInvitados.forEach (nD1 => diferenciaSimetrica.add (nD1));
nombresInvitados2.forEach (nD1 => {
    if (diferenciaSimetrica.has (nD1)) {
        diferenciaSimetrica.delete (nD1);
    } else {
        diferenciaSimetrica.add (nD1);
    }
});

console.log ("Diferencia simétrica: " ,diferenciaSimetrica);

// Fin del ejercicio.
