// * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
//  * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
//  * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
//  * Calcula cuántos años han transcurrido entre ambas fechas.

const fechaNow = new Date ();
    console.log (fechaNow);

const añoNow = fechaNow.getFullYear ();
    console.log (añoNow); 

const fechaBD = new Date ("1982-01-22 3:15:00z");
    console.log (fechaBD);
const añoBD = fechaBD.getFullYear ();
    console.log (añoBD);

function calculadoraDeAños (añoN, añoB) {
    return añoN - añoB;
};

    console.log (calculadoraDeAños (añoNow, añoBD) + " Años transcurridos desde que naciste." );

// También se pueden crear con  cadenas de caracteres ("strings").

const fecha = new Date ("1/22/1982"); // <mes, día, año>.

// Métodos.

var dia1 = fecha.getDate();
var mes1 = fecha.getMonth();
var anio = fecha.getFullYear();

console.log ("Día: " + dia1 + " " + "Mes: " + (mes1 + 1));

// Extra 
// Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
//  * 10 maneras diferentes. Por ejemplo:
//  * - Día, mes y año.
//  * - Hora, minuto y segundo.
//  * - Día de año.
//  * - Día de la semana.
//  * - Nombre del mes.
//  * (lo que se te ocurra...)

console.log ("Fecha normal: " + fechaNow.getFullYear (), fechaNow.getMonth (), fechaNow.getDay ());
console.log (fechaNow.toDateString () + " Datos en formato string");
console.log ("Hora: " + fechaNow.getHours (), fechaNow.getMinutes (), fechaNow.getSeconds ());
console.log (fechaNow.toTimeString ());
console.log (fechaNow[Symbol.toPrimitive]("string"));
console.log (fechaNow.toISOString () + " iso");
console.log (fechaNow.toTimeString ());

const [mes, dia, año] = [
    fechaBD.getMonth () + 1,
    fechaBD.getDay (),
    fechaBD.getFullYear (),
];
console.log (mes, dia, año);

const [hora, minutos, segundos] = [
    fechaBD.getHours (),
    fechaBD.getMinutes (),
    fechaBD.getSeconds (),
];

console.log (hora, minutos, segundos);

// Fin del ejercicio.