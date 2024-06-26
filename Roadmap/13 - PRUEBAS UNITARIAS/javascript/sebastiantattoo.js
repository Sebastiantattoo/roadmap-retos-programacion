/*
 * EJERCICIO:
 * Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
 */

// Creación de la función.

// function suma (num1, num2) {
//     return num1 + num2;
// };

// // Hacemos la prueba de l función.

// test ("La suma de 1 + 2 debería dar 3", () => {
//     expect (suma (1, 2)).toBe(3);
// })

/* DIFICULTAD EXTRA (opcional):
 * Crea un diccionario con las siguientes claves y valores:
 * "name": "Tu nombre"
 * "age": "Tu edad"
 * "birth_date": "Tu fecha de nacimiento"
 * "programming_languages": ["Listado de lenguajes de programación"]
 * Crea dos test:
 * - Un primero que determine que existen todos los campos.
 * - Un segundo que determine que los datos introducidos son correctos.
 */

// Definimos el mapa
let sebastianTatto = new Map()
sebastianTatto.set("Nombre","Sebastian")
sebastianTatto.set("Edad", "42")
sebastianTatto.set("Fecha de nacimiento","22-01-1982")
sebastianTatto.set("Lenguajes de programación",["Python", "JavaScript", "Java"])

// Creamos la función para obtener las claves del mapa
function clave() {
    let clave_array = []
    for (let key of sebastianTatto.keys()) {
        clave_array.push(key)
    }
    return clave_array
}

function valor (){
    let valor_array = []
    for (let valor of sebastianTatto.values()){
        valor_array.push(valor)
    }
    return valor_array
}

// Realizamos las pruebas del test
test('Prueba de obtener las claves del mapa', () => {
    expect(clave()).toEqual(["Nombre", "Edad", "Fecha de nacimiento", "Lenguajes de programación"])
})

test('Prueba de obtener los valores del mapa',()=>{
    expect(valor()).toEqual(["Alejandro", "24","22-07-1999",["Python","JavaScript","Java"]])
})