/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 */

//at, charAt - Recibe un número y devuelve el caracter en esa posición.

const phrase = "San Martínez cruzó los Andes";
console.log ("at", phrase.charAt (10));
console.log ("charAt", phrase.charAt (4));

//concat - Conecta dos strings y devuelve uno nuevo.

let string1 = "Paz";
let string2 = "Ciencia";
console.log ("Concatenar con espacio: ", string1.concat (" " + string2));
console.log ("Concatenar con guión: ", string1.concat ("-" + string2));


//startsWith & endsWith - Evalua si el string inicia en el caso de startsWith o termina en el caso de endsWith con los caracteres del string del argumento y devuelve un booleano. (true - false).

console.log ("startWith: ", phrase.startsWith ("San"));
console.log ("startWith: ", phrase.startsWith ("Andes"));
console.log ("endWith: ", phrase.endsWith ("San"));
console.log ("endWith: ", phrase.endsWith ("Andes"));

//fromCharCode - Devuelve un string creada por una secuencia de unidades de UTF-16.

console.log ("fromCharCode:", String.fromCharCode (12, 24, 15, 9));

//includes - Evalua si un substring se encuentra dentro de un string. Devuelve un booleano. Se diferencia entre mayúsculas y minúsculas.

let string3 = "Character";
let string4 = "Martínez";

console.log ("Includes: ", phrase.includes (string3));
console.log ("Includes: ", phrase.includes (string4));

//indexOf - Devuelve la posición en la que un substring inicia dentro de un string. 
//En caso que la substring se repita, devuelve la posición de la primera encontrada.
//lastIndexOf - Devuelve la posición en la que un substring inicia dentro de un string. En caso que la substring se repita, devuelve la posición de la última encontrada.

let newSentence = "Frase de ejemplo para aplicar la operación indexOf";
let newSentence2 = "La frase de ejemplo para utilizar La operación lastIndexOf";
let string5 = "aplicar";
let string6 = "La";
console.log ("indexOf: ", newSentence.indexOf (string5)); //Posición 22.
console.log ("lastIndexOf: ", newSentence2.lastIndexOf (string6));

//match - Devuelve los valores que coincidan con el regex.

let regex = /[A-Z]/g; // Evalua solo mayúsculas.
console.log ("Operación match: ", newSentence2.match (regex));

//padStart & padEnd - Agregan un caracter al inicio o al final de la string, según tantos espacios falten entre el ancho del string, y el ancho del argumento.

console.log ("padStart: ", newSentence.padStart (53, "!"));
console.log ("padStart: ", newSentence.padStart (51, "*"));
console.log ("padEnd: ", newSentence.padEnd (53, "/"));
console.log ("padEnd: ", newSentence.padEnd (51, "#"));

//raw - Método que funciona con template literals para crear un string, en base a otra que tenga caracteres especiales que no se quieren perder o interpretar de forma inadecuada.

const __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty){
        Object.defineProperty (cooked, "raw", {value : raw});
    } else {
        cooked.raw = raw;
    }return cooked;
};

const filePath = String.raw (__makeTemplateObject (["C:Hola.html"], ["C:Chau.html"]));
console.log ("Método raw: ", "Access Path: ".concat (filePath));

//repeat - Devuelve una nueva string que contiene el numero de copias del string del argumento, concatenadas.

let stringWithSpace = "Brinco ";
let stringWithoutSpace = "Brinco";
console.log ("Método repeat1: ", "Demos un buen ".concat (stringWithoutSpace.repeat (3)));
console.log ("Método repeat2: ", "Demos un buen ".concat (stringWithSpace.repeat (3)));

//replace - Sustituye uno o toda un string, con otra string del segundo argumento del metodo.

const OwnRegex = /San Martínez/i; //Importante no colocar el valor entre "".
console.log ("Replace 1: ", phrase.replace ("San", "Super"));
console.log ("Replace 2: ", phrase.replace (OwnRegex, "Saladillo"));

//search - Ejecuta una búsqueda en base a un regex para hallar una similitud en un string, y devolver el index de esa primera similitud.

let regex2 = /[^\w\s']/g; //Este regex evalua todo lo que NO sea una palabra, espacios en blanco o comillas.
console.log ("Método search: ", newSentence2.search (regex2));

//slice - Extrae una sección del string y retorna una nueva, sin modificar la original.

console.log ("Método slice: ", newSentence2.slice (15));

//split - Divide el string en base a un patrón, y crea un array con las substrings resultantes.

console.log ("Método split: ", newSentence.split ('')); // ['F', 'r', 'a', 's', 'e', etc...]

//toLowerCase & toUpperCase - Devuelve un string transformado todo a minúsculas/mayúsculas.

console.log ("Método toLowerCase: ", newSentence2.toLocaleLowerCase ());
console.log ("Método toUpperCase: ", newSentence2.toUpperCase ());

//trim - Elimina todos los espacios vacios que se encuentren al inicio o al final de un string.
//trimStart - Elimina solo los espacios vacios que se encuentran al inicio.
//trimEnd - Elimina solo los espacios vacios que se encuentran al final.

let whiteSpaces = "     !Aguante Tayereee¡    "          ;

console.log ("Método trim: ", whiteSpaces.trim());
console.log ("Método trimStart: ", whiteSpaces.trimStart ());
console.log ("Método trimEnd: ", whiteSpaces.trimEnd ());

/* DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

let esUnPalindromo = function (my_string) {
    let reverseString = my_string.toLocaleLowerCase().split('').reverse().join('');
    if (my_string.toLocaleLowerCase () === reverseString) {
        console.log ("Es un palindromo.");
    } else {
        console.log ("No es una palabra palindroma.");
    }
};

esUnPalindromo ("reconocer");
esUnPalindromo ("amor");
esUnPalindromo ("mundo");
esUnPalindromo ("capac");

let esUnAnagrama = function (str1, str2) {
    let reverseString2 = str2.toLocaleLowerCase().split('').reverse().join('');
    if (str1.toLocaleLowerCase () === reverseString2) {
        console.log ("La palabra ".concat (str1, " es una anagrama de ", str2));
    } else {
        console.log ("La palabra ".concat (str1, " no es un anagrama de ", str2));
    }
};

esUnAnagrama ("amor", "roma");
esUnAnagrama ("callao", "collar");

let esUnIsograma = function (my_string) {
    let letrasDelArray = my_string.toLocaleLowerCase().split ('');
    let setDeLetras = new Set (letrasDelArray);
    if (letrasDelArray.length === setDeLetras.size) {
        console.log ("La palabra ".concat (my_string, " es un isograma."));
    } else {
        console.log ("La palabra ".concat (my_string, " no es un isograma"));
    }
};

esUnIsograma ("murcielago");
esUnIsograma ("relevante");

console.log ("Fin del ejercicio");