/*
 * EJERCICIO:
 * Explora el concepto de "decorador" y muestra cómo crearlo
 * con un ejemplo genérico.
 */
/* DIFICULTAD EXTRA (opcional):
 * Crea un decorador que sea capaz de contabilizar cuántas veces
 * se ha llamado a una función y aplícalo a una función de tu elección.
 */

/**
 * Los decoradores en JavaScript son funciones que permiten agregar nuevas funcionalidades a clases, métodos o propiedades sin cambiar su código original.
 * Funcionan envolviendo el elemento original con una nueva función que añade o modifica su comportamiento.
 * Esto es útil porque permite extender las capacidades de un objeto de manera flexible y reutilizable, siguiendo el patrón de diseño.
 * Decorator que consiste en añadir funcionalidades adicionales a un objeto colocándolo dentro de otro objeto especial que contiene estas funcionalidades.
*/

class BasicMath {
    sumar(a, b){
      return a + b
    }
  
    restar(a, b){
      return a - b
    }
  
    multiplicar(a, b){
      return a * b
    }
  
    dividir(a, b){
      if (b === 0) {
        throw new Error('No se permite dividir por 0')
      }
      return a / b
    }
  }
  
  const mathDecorator = (fun) => {
    return function(...args){
      console.log(`Llamando a la funcion ${fun.name} con argumentos`, args)
      return fun.apply(this, args)
    }
  }
  
  BasicMath.prototype.sumar = mathDecorator(BasicMath.prototype.sumar)
  BasicMath.prototype.restar = mathDecorator(BasicMath.prototype.restar)
  BasicMath.prototype.multiplicar = mathDecorator(BasicMath.prototype.multiplicar)
  BasicMath.prototype.dividir = mathDecorator(BasicMath.prototype.dividir)
  
  const test = new BasicMath()
  
  console.log(test.sumar(3, 6))
  console.log(test.restar(6, 3))
  console.log(test.multiplicar(9, 3)) 
  console.log(test.dividir(9, 3)) 

  // Fin de ejercicio.