/*
 * EJERCICIO:
 * Explora el concepto de callback en tu lenguaje creando un ejemplo
 * simple (a tu elección) que muestre su funcionamiento.
 */

// Un callback es una función que se le pasa a otra como argumento.
 
function modify (array, callback) {
    // Hacemos algo...
    array.push("Sebastian");
    // Despues de hacer algo ...
    callback ()
};

const names = ["Joseph", "Xavier", "Fullness"];

modify (names, function () {
    console.log ("He modificado el array con una función dentro de otra. Callback");
});

console.log (names);
console.log (names [2]);

names.forEach (name => {
    console.log (name); // Esto es un callback pasado como argumento a un forEach.
});

///////////////////////////////////////////

function userInfo (id, name, lastname, age ) {
    console.log ("Id: " + id);
    console.log ("Name: " + name);
    console.log ("Lastname: " + lastname);
    console.log ("Age: " + age);
};

function waitInfo (callback) {
    callback ("1", "Jeremias", "Loredo", 21);
};
console.log ("Datos del usuario: \n")
waitInfo (userInfo);


/* DIFICULTAD EXTRA (opcional):
 * Crea un simulador de pedidos de un restaurante utilizando callbacks.
 * Estará formado por una función que procesa pedidos.
 * Debe aceptar el nombre del plato, una callback de confirmación, una
 * de listo y otra de entrega.
 * - Debe imprimir un confirmación cuando empiece el procesamiento.
 * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
 *   procesos.
 * - Debe invocar a cada callback siguiendo un orden de procesado.
 * - Debe notificar que el plato está listo o ha sido entregado.
 */

// Extra.

async function pedido (plato, callbackConfirmation, callbackReady, callbackDelivered) {
    await callbackConfirmation (plato);
    await callbackReady (plato);
    await callbackDelivered (plato);
};

function confirmation (plato) {
    return new Promise (resolver => setTimeout (() => {
        console.log (`El pedido ${plato} está preparandose`)
        resolver ()
    }, Math.ceil(Math.random () * 10000)))
};

function ready (plato) {
    return new Promise (resolver => setTimeout (() => {
        console.log (`El pedido ${plato} está listo`)
        resolver ()
    }, Math.ceil (Math.random () * 10000)))
};

function delivered (plato) {
    return new Promise (resolver => setTimeout(() => {
        console.log (`El plato ${plato} ya fue entregado`)
        resolver ()
    }, Math.ceil (Math.random () * 10000)))
};


pedido ("Pizza Calabresa", confirmation, ready, delivered);
pedido ("Carne c/ papas", confirmation, ready, delivered);
pedido ("Sorrentios", confirmation, ready, delivered);
pedido ("Papas fritas", confirmation, ready, delivered);


