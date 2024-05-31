/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 */

// Ejemplo de funciones sin varible ni retorno.

    function saludo () {
        console.log ("Hello world");
    };

    function uno () {
        let saludo = document.write ("Hello world<br>");
        return uno;
    }

    uno();


// Ejemplo de función con variable pero sin retorno.

    function saludo2 (name) {
        console.log ("Hello, " + name);
};
    saludo2 ("my friend!!!");

    function dos (a, b, c) {
        let datos = document.write ("Mi nombre es :" + a + "<br>Mi apellido es : " + b + "<br>Mi edad es : " + c);
        return datos;
    };

    dos ("Asturias", "Moreno", 36);

// Ejemplo de función con variable y con retorno,

    function saludo3 (name) {
        return "Hello, " + name;
    };

    let mensaje = saludo3  ("Evander");
        console.log (mensaje);

    function tres (name = "") {
        let nombreCompleto = name;
        return document.write ("<br>" + nombreCompleto);
    }

    tres("Arturo Bonelli");

    function cuatro (nombre, apellido) {
        if (nombre != null && apellido != null) {
            respuesta = document.write ("<br>", nombre + " ", apellido);
        } else {
            respuesta = document.write ("<br>Por favor introduzca sus datos completos");
        };
        return respuesta;
    }

    cuatro ("Caetano", "Aristizabal");

// Ejemplo de funcion flecha de función sumar.

    const sumar = (a,b) => {
        return a + b;
    };

    let suma = sumar (6,9);
        console.log (suma);

// Ejemplo de una función dentro de otra función.

    function saludarYSumar (a,b) {
        console.log ("hola, haremos una suma con nuestra función");
        function sumar (a,b) {
            return a + b;
        };
        console.log (sumar (a,b));
    };

    saludarYSumar (3,9);

// Ambito global y local de las variables.

    // Variable global significa que puede ser utilizada desde fuera de la función.
    let variableGlobal = "Yo soy una variable global";

    function mostrarVariableGlobal (){
        console.log (variableGlobal);
    };

    mostrarVariableGlobal();

    // Variable local significa que debe estar dentro de la función para ser utilizada.

    function mostrarVariableLocal () {
        let variableLocal = "Yo soy una variable local";
        console.log (variableLocal);
    }
    
    mostrarVariableLocal();

// Ejemplo de funciones del sistema.

    console.log (parseInt(369));

// Ejemplo de función anónima.

    let anonima = function () {
        console.log ("Yo soy una función anónima");
    }

        anonima ();

// Extra.

/* 
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

    function exercisenro2 (param1, param2) {
        let numVeces = 0;
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log (param1 + param2);
            }else if (i % 3 === 0) {
                console.log (param1);
            }else if (i % 5 === 0) {
                console.log (param2);
            }else {
                console.log (i);
                numVeces++;
            }
        }
        return numVeces;  
    };

    const extra = exercisenro2 ("Fizz ", "Buzz");
    console.log ("La cantidad de números impresos son: " + extra);