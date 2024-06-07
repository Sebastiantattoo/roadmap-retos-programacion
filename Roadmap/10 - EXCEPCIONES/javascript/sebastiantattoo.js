/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 */

//TRY - Bloque del código que se va a evaluar.
//CATCH - Bloque del código que se ejecuta si se encuentra un error en el bloque TRY.
//FINALLY - Bloque de código (opcional) que se va a ejecutar una vez haya terminado el bloque TRY, independientemente de su resultado.

let myArray = [1,2,3,4];
try {
    myArray [3].length
} catch (error) {
    throw "No se puede acceder a esa posición " + error;
} finally {
    console.log (myArray.length);
};
console.log ("El programa ha finalizado");

 /* DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */

// DIFICULTAD EXTRA

class customException extends Error{
    constructor(message){
      super(message)
      this.name = 'Custom Exception'
    }
  }
  
  const myFunction = (num1, num2) => {
    try{
      if(num1 < 0){
        throw new Error('El primer valor no puede ser menor a cero.')
      }
  
      if((num2 % 2) !== 0){
        throw new Error('El segundo valor debe ser un numero par.')
      }
  
      if((num1 + num2) > 99){
        throw new customException('La suma de los valores no puede sobrepasar de 100.')
      }
    }catch(error){
      console.log('Tipo de error: ', error instanceof customException ? 'Custom error' : 'Normal error')
      console.log('Mensaje de error: ', error.message)
    }finally{
      console.log('Fin del ejercicio')
    }
  }
  
  myFunction(444, 50)


