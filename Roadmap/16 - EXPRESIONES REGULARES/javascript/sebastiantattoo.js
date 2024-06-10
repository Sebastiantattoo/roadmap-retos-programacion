/*
 * EJERCICIO:
 * Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto.
 */
let regularExpresion = /ab+c/;
let regularExpresion1 = new RegExp ("ab+c");

const paragraph = "Rapidamente hago un texto para continuar con el ejercicio de expresiones regulares en Java Script. abc";
const mayus = /[A-Z]/g;
const minus = /[a-z]/g;
const found = paragraph.match (mayus);
const found1 = paragraph.match (minus);
const found2 = paragraph.match (regularExpresion1);
console.log (found);
console.log (found2);


const expresionRegularNumeros = /[0-9]/g;
function extraerNumeros (frase) {
    const numeros = frase.match (expresionRegularNumeros);
    return console.log (numeros);
};

extraerNumeros ("Aquí va la frase necesaria para que la función buzque. 33");

/* DIFICULTAD EXTRA (opcional):
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
 */

console.log ("Validación de email: ")

const email1 = "ejemplo@gmail.com";
const email2 = "ejemplo@gmail";

function emailCheck (email) {
    const mailRegEx = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/);
    if (mailRegEx.test (email)) {
        console.log ("El email introducido es valido")
    } else {
        console.log ("el email es incorrecto")
    }
};

emailCheck (email1, email2);

console.log ("Validación de teléfono");

const phone1 = "1540-9990";
const phone2 = "1560-3245";

function phoneCheck (phone1) {
    const phoneRegEx = /([0-9]{4})+-([0-9]{4})/;
    if (phoneRegEx.test(phone1)) {
        console.log ("Teléfono valido")
    } else {
        console.log ("Teléfon invalido")
    }
};

phoneCheck (phone1);

console.log ("Validación de URL");

const web= "http://www.youtube.com";
const web1= "https://www.youtube.com";

function webCheck (web) {
    const webRegEx = /^http\[s\]?:\/\/(www.)?[\w]+\.\[a-zA-Z\]{2,}$/;
    if (webRegEx.test (web)) {
        console.log ("web aprobada")
    } else {
        console.log ("Web rechazada")
    }
};

webCheck (web);
webCheck (web1);

// Fin del ejercicio.
