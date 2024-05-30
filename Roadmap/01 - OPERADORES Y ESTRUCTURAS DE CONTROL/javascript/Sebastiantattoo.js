// Operadores y estructura de control.

// Operadores aritméticos.

let unoSuma = 3 + 6 ; //Operador de Suma.
let unoResta = 12 - 3 ; //Operador de Resta.
let unoMultiplicacion = 12 * 3 ; //Operador de Multiplicación.
let unoDivision = 27 / 3 ; //Operador de División.
let unoModulo = 10 % 3 ; //Operador de Módulo.
    console.log (unoModulo);

// Operadores de incremento y decremento.

let dosIncremento = 9 ;
    dosIncremento ++;
    console.log (dosIncremento);

let anillos = 0;
    anillos ++;
    console.log (anillos);

let i = 6;
    i ++;
    console.log (i);
    

let dosDecremento = 9;
    dosDecremento -- ;
    console.log (dosDecremento);

let o = 9;
    o--;
    console.log (o);

// Operadores de asignación.

let uno = 10; // El simbolo de = sirve para asignar un valor a la variable.
 document.write (uno);

 let unoSumaYAsignacion = 9;
    unoSumaYAsignacion += 99; // unoSumaYAsignacion = unoSumaYAsignacion + 99.
    console.log (unoSumaYAsignacion);

 let dosRestaYAsignacion = 99;
    dosRestaYAsignacion -= 9; // dosRestaYAsignacion = dosRestaYAsignacion - 9.
    console.log (dosRestaYAsignacion);

let tresMultiplicacionYAsignacion = 36;
    tresMultiplicacionYAsignacion *= 2;
    console.log (tresMultiplicacionYAsignacion);

let cuatroDivisionYAsignacion = 63;
    cuatroDivisionYAsignacion /= 3;
    console.log (cuatroDivisionYAsignacion);

let cincoModuloYAsignacion = 99;
    cincoModuloYAsignacion %= 2;
    console.log (cincoModuloYAsignacion);

// Operadores de comparación.

let unoIgualdad = 9 == "nueve o 9";
    console.log (unoIgualdad);
let unoIgualdad2 = 9 == 9;
    console.log (unoIgualdad2);
let unoIgualdadEstrita = 9 === 9;
    console.log (unoIgualdadEstrita);
let unoIgualdadEstrita2 = 6 === "seis";
    console.log (unoIgualdadEstrita2);

let dosDesigualdad = 3 != "tres";
    console.log (dosDesigualdad);
let dosDesigualdad2 = 3 != 3;
    console.log (dosDesigualdad2);
let dosDesigualdadEstricta = 6 !== "seis";
    console.log (dosDesigualdadEstricta);
let dosDesigualdadEstricta2 = 6 !== 6;
    console.log (dosDesigualdadEstricta2);

let tresMayorque = 6 > 3;
    console.log (tresMayorque);
let tresMenorQue = 3 < 6;
    console.log (tresMenorQue);
let tresMayorOIgualQue = 9 >= 9;
    console.log (tresMayorOIgualQue);
let tresMenorOIgualQue = 6 <= 9;
    console.log (tresMenorOIgualQue)

// Operadores lógicos. (and (&&), or (||), not (!).

let unoOperadorAnd = (9 < 18) && (9 > 6);
    console.log (unoOperadorAnd);
let unoOperadorOr = (18 < 9) || (9 < 6);
    console.log (unoOperadorOr);
let unoOperadorLogicoNot = !(6 >= 6);
    console.log (unoOperadorLogicoNot);

// Operadores de concatenación.

let saludoOperadorDeConcatenacion = "Hola" + " " + "mundo" + "..."
    console.log (saludoOperadorDeConcatenacion);
let saludoOperadorConcatenacionMasAsignacion = "Hola";
    saludoOperadorConcatenacionMasAsignacion += " mundo...";
    console.log (saludoOperadorConcatenacionMasAsignacion);

// Operadores ternarios.
// Condicion ? TRUE O FALSE.

// Asignar un valor a una variable basado en una condición.
let edad = 18;
let tipo = edad >= 18 ? "Eres adulto" : "Eres menor de edad";
    console.log (tipo);
let perros = "dalmata";
let raza = perros == "dalmata" ? "Tu perro es dalmata" : "Tu perro es comunacho";
    console.log (raza);
let alumnos = 10;
let asistencia = alumnos >= 1 ? "Hay clases" : "No hay clases";
    console.log (asistencia);
let creditos = 675;
let escudo = creditos >= 1000 ? "Puedes comprar el escudo" : "Los créditos son insuficientes";
    console.log (escudo);
let creditos2 = 10000;
let trajeDeEscarlata = creditos2 >= 18000 ? "Felicitaciones, tienes tu traje" : "Lo siento, sos un seco!!!";
    console.log (trajeDeEscarlata);
let puntos = 100;
let oro = puntos >= 80 ? "Tienes tu oro" : "No llegas con los puntos";
    console.log (oro);

// Eleccion de una función basado o según una condición.
// Condicion ? TRUE O FALSE.

let cansancioDelJugador = 6;
cansancioDelJugador <= 6 ? console.log ("Estas cansado") : console.log ( "Tienes fuerzas aún");

let frequency = 528;
frequency >= 528 ? console.log ("Estas vibrando correctamente") : console.log ("deberias equilibrarte");

let poisons = 6;
poisons === 6 ? console.log ("Tienes todas las pociones") : console.log ("Aún faltan pociones");

// Elejir que valor retornar en una función.
// Condicion ? TRUE O FALSE.

function obtenerPrecio (descuento) {
    return descuento ? 30.90 : 39.90;
}
    console.log (obtenerPrecio(true));

function supersayan (niveldos) {
    return niveldos ? "No llegas al nivel 2" : "Eres super Sayayin";
}
    console.log (supersayan (false));

function supersayan1 (niveldosa) {
    return niveldosa ? "Te has convertido en supersayan 2" : "Aún no llegas con tu ki";
}
    console.log (supersayan1 (true));

// Operadores de flujo.
// IF.

let años = 18;
    if (años >= 18);
    console.log ("Eres mayor de edad");

let years = 18;
    if (years <=17);
    console.log ("Eres menor de edad");

let credits = 1000;
    if (credits <= 1000) {console.log ("Tus creditos son suficientes");
};
// IF Else

let años1 = 18;
    if (años1 <= 17) {
        console.log ("Eres menor de edad");
}    else {
    console.log ("Eres mayor de edad");
};

let years1 = 16;
    if (years1 <= 16) {
        console.log ("Eres un pre adolecente");
} else {
    console.log ("Eres muy mayor para jugar este juego");
}

let credits1 = 1000;
    if (credits1 <= 1000) {
        console.log ("No puedes aceder a ese beneficio");
    } else {
        console.log ("Puedes acceder al plan con beneficios");
    }

// IF - ELSE IF - ELSE.

let años2 = 15;
    if (años2 >= 18) {
        console.log ("Eres mayor de edad");
    } else if (años2 >= 16) {
        console.log ("eres un adolesente");
    } else {
        console.log ("eres menor de edad");
    }

let credits2 = 1000;
    if (credits2 >= 1000) {
        console.log ("Puedes obtener este poder");
    } else if (credits2 >= 900) {
        console.log ("Puedes tener esta capa");
    } else {
        console.log("Tienes muy pocos creditos, sigue intentandolo");
    }

// SWITCH.

let dia = 4;
    switch (dia) {
        case 1:
            console.log ("Lunes");
            break;
        case 2:
            console.log ("Martes");
            break;
        case 3:
            console.log ("Miercoles");
            break;
        case 4 :
            console.log ("Jueves");
            break;
        case 5:
            console.log ("Viernes");
            break;
        case 6:
            console.log ("Sabado");
            break;
        case 7:
            console.log ("Domingo");
            break;
        default:
            console.log ("Día invalido");
    }

let razasDePerro = 4;
    switch (razasDePerro) {
        case 1:
            console.log ("Dalmata");
            break;
        case 2:
            console.log ("Cocker");
            break;
        case 3:
            console.log ("Gran Danes");
            break;
        case 4:
            console.log ("Mastropiero");
            break;
            default:
                console.log ("La raza elegida no esta en la base de datos");

    }

// Operador de flujo FOR.

console.log ("Operador for");

for (let one = 0; one < 9; one++) {
    console.log (one);
};

for (let o = 0; o < 9; o++) {
    if (o >= 5) {break;}
    console.log (o);
};

for (let dulces = 9; dulces <= 10; dulces++) {
    console.log (dulces);
};

for (let dulces1 = 9; dulces1 < 18; dulces1++) {
    if (dulces1 >= 12) {break;}
    console.log (dulces1);
};

for (let one1 = 10; one1 <= 14; one1++) {
    console.log (one1);
};

console.log ("Aquí es el punto");

for (let five = 10; five <= 14; five++) {
    if (five >= 13) {break;}
    console.log (five);
};

// Operador de flujo WHILE.
let to = 0;
    while (to < 5) {
        console.log (to);
        to++;
    }

let two11 = 0;
    while (two11 < 14) {
        console.log (two11);
        two11++;
    }

let cuenta = 2;
    while (cuenta < 6) {
        console.log (cuenta);
        cuenta++
    }

//Operador de flujo DO...While.

let to2 = 0;
    do {
        console.log (to2);
        to2++;
    } while (to2 < 6);

let two12 = 2;
    do {
        console.log (two12);
        two12++;
    } while (two12 < 7);

let cuenta1 = 0;
    do {
        console.log (cuenta1);
        cuenta1++;
    } while (cuenta1 < 3);


// Ejercicio: 
/*
 * Crea un programa que imprima por consola todos los números comprendidos
  * entre 10 y 55(incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
*/

console.log ("Ejercicio:")

for ( a=10; a <= 55; a++) {
    if (a % 2 === 0 && a !== 16 && a % 3 !== 0) {
        console.log (a);
    }
}

let extra = 10;
    while (extra <= 55) {
        if ( extra % 2 === 0 && extra !== 16 && extra % 3 !== 0) {
            console.log (extra);
        }
        extra++;
    }

    console.log ("This is the end");
