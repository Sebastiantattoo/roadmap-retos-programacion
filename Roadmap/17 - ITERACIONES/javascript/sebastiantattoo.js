/*
 * EJERCICIO:
 * Utilizando tu lenguaje, emplea 3 mecanismos diferentes para imprimir
 * números del 1 al 10 mediante iteración.
 */


// For.
console.log ("Bucle for: ")

for (let index = 0; index <= 10; index++) {
    console.log (index);
};

// For each.

console.log ("Bucle for each: ")

let numbers = [0,1,2,3,4,5,6,7,8,9,10];
numbers.forEach (function (i) {
    console.log (i);
});

let numbersString = "1234567890";
numbersString.split ("").forEach ((n) => {
    console.log (n);
});

// For in.

console.log ("Bucle for in: ")

for (let i in numbers) {
    console.log (numbers[i]);
};

// For of.

console.log ("Bucle for of: ")

for (let _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    let i = numbers_1 [_i];
    console.log (i);
};

// While.

console.log ("Bucle while: ")

let w = 0;
while (w < 11) {
    console.log (w);
    w++;
};

// Do - while.

console.log ("Bucle do - while: ")

let d = 0;
do{
    console.log (d);
    d++;
} while (d < 11);

/* DIFICULTAD EXTRA (opcional):
 * Escribe el mayor número de mecanismos que posea tu lenguaje
 * para iterar valores. ¿Eres capaz de utilizar 5? ¿Y 10?
 */

// Extra.

console.log ("\n -Recursivo -");

function countTen( i = 1) {
    if (i <= 10) {
        console.log (i);
        countTen (i +1);
    }
};

countTen ();

console.log ("\n - Bucle for each - ");

const numbers1 = [1,2,3,4,5,6,7,8,9,0];

numbers1.forEach ((n) => {
    console.log (n);
});

console.log ("\n - Bucle for in - ");

const numbersObj = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
};

for (let i in numbersObj) {
    console.log (i);
};

console.log ("\n - Bucle for of -");

const numberSet = new Set (numbers);

for (let i of numberSet) {
    console.log (i);
};

console.log("\n-ITERANDO UNA STRING CONVERTIDA EN ARRAY-");

let numberString = "1,2,3,4,5,6,7,8,9,0";

numberString.split ("").forEach ((n) => {
    console.log (n);
});

console.log ("Fin del ejercicio");

// Fin del ejercicio.