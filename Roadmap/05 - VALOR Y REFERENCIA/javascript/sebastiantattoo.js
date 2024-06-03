/*
* EJERCICIO:
* - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
*   su tipo de dato.
* - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
*   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
* (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
*/

// Asignación de variables por valor y por referencia.

let myNum = 33;
let myNum2 = myNum; //Asignación por valor.
 console.log (myNum2);

myNum = 66;
    console.log (myNum);
    console.log (myNum2);

let user1 = {nombre: "Giovanni"};
let user2 = user1;// Asignación por referencia (en este caso, se copia la dirección de memoria) y si se modifica user1, también se modifica user2.
    console.log (user2.nombre);
user1.nombre = "Richarlison";
    console.log (user1.nombre);
    console.log (user2.nombre);

// Funciones con parámetros por valor y por referencia.

function cambiarValor1 (value1) {
    value1 = 369;
    console.log (value1);
};

cambiarValor1 ();

let value2 = 963;
cambiarValor1 (value2);
console.log (value2);// imprime 963 por que se pasó por valor no la referencia.

function cambiarValorObjeto (value3) {
    value3.nombre = "Landrisina";
    console.log (value3.nombre);
};

let value4 = {nombre: "Giusseppe"};
cambiarValorObjeto (value4);
console.log (value4.nombre); // imprime "Landrisina" por que se pasó por referencia.

/* DIFICULTAD EXTRA (opcional):
* Crea dos programas que reciban dos parámetros (cada uno) definidos como
* variables anteriormente.
* - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
*   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
*   se asigna a dos variables diferentes a las originales. A continuación, imprime
*   el valor de las variables originales y las nuevas, comprobando que se ha invertido
*   su valor en las segundas.
*   Comprueba también que se ha conservado el valor original en las primeras.
*/

function intercambiarValoresPorValor (a, b) {
    let variableAuxiliar = a;
    a = b;
    b = variableAuxiliar;
    return [a,b];
};

let g = 33;
let h = 66;
let resultado = intercambiarValoresPorValor (g,h);
console.log (g);
console.log (h);
console.log (resultado [0]);
console.log (resultado [1]);

function intercambioDeValorPorReferencia (c, d) {
    let variableAuxiliar2 = c.nombre;
    c.nombre = d.nombre;
    d.nombre = variableAuxiliar2;
    return [c, d];
};

let i = {nombre: "Agente 99"};
let j = {nombre: "Agente 120"};
let resultado2 = intercambioDeValorPorReferencia (i, j);
console.log (i.nombre);
console.log (j.nombre);
console.log (resultado2 [0].nombre);
console.log (resultado2 [1].nombre);


console.log ("Fin del ejercicio");






