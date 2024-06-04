/*
    * EJERCICIO:
    * Entiende el concepto de recursividad creando una función recursiva que imprima
    * números del 100 al 0.

    ** QUE ES LA RECURSIVIDAD?
    ** La recursividad en la programación es una técnica de una función que se llama a si misma ** durante su ejecución. 
    ** Este proceso se repite hasta que se cumpla una condición base que evita que la función se ** llame recursivamente.
*/

function recursiveFunction (number) {
    if (number === 0) {   // Si el número es 0 entonces, imprimimos el número y luego retornamos.
        console.log (number);
        return;
    }
    // Imprimir el número actual, luego llamamos a la función con el número - 1.
        console.log (number);
        recursiveFunction (number -1);
};

    recursiveFunction (100);

/* 
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * // Crear la sucesión de Fibonacci con una función recursiva.
*/

function funcionFactorialRecursiva (number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * funcionFactorialRecursiva (number -1);
};
    


    let resultadoDeLaFuncionFactorial = funcionFactorialRecursiva (10);
    console.log ("Este es el resultado: ", resultadoDeLaFuncionFactorial);

// Fibonacci.

function sucesionFibonacci (number, diccionarioDeValores = {}) {
    // Si el número es menor a 0 retorna valor null.
    if (number < 0) {
        return null;
    }
    // Si el número es 0 retornar 0.
    else if (number === 0) {
        return 0;
    }
    // Si el número es 1 retornar 1.
    else if (number === 1) {
        return 1;
    }
    // Si el número existe en el diccionario de valores de la sucesión de Fibonacci entonces, retornar el valor del número en la sucesión.
    else if (number in diccionarioDeValores) {
        return diccionarioDeValores [number];
    }
/*  Si ninguna de las condiciones anteriores se cumple, entonces vamos a conseguir el resultado   del número en la sucesión de fibonacci llamandola recursivamente hasta que se cumpla una condición base */
    else {
        let resultado = sucesionFibonacci (number - 1, diccionarioDeValores) + sucesionFibonacci (number - 2, diccionarioDeValores);
// Guardar el resultado con su respectivo número en el diccionario de valores de la sucesión de fibonacci.
diccionarioDeValores [number] = resultado;
// Retornar el resultado.
return resultado;
    }
};

let resultadoDeLaSucesionFibonacci = sucesionFibonacci (5);
console.log ("El resultado de la sucesión Fibonacci es: ", resultadoDeLaSucesionFibonacci);

console.log ("Fin del ejercicio.");
//************************************************************************************** */

function fibonacci(posicion) {
    if (posicion === 0 || posicion === 1) {
      return posicion;
    } else {
      return fibonacci(posicion - 1) + fibonacci(posicion - 2);
    }
  }
  
  console.log(fibonacci(5));