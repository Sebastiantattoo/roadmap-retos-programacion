/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 */
// Si quieres ver que es fs y propiedades https://www.w3schools.com/nodejs/nodejs_filesystem.asp.

// const fs = require ('fs');

// fs.writeFile ("sebastiantattoo.txt", "Nombre: sebastian \nEdad: 42 \nLenguaje: Javascript", function (error) {
//     if (error) 
//         console.log (error, "ha ocurrido un error inesperado");
//         console.log ("Fué creado correctamente");
// } );

// // Imprimir.

// fs.readFile ("sebastiantattoo.txt", function (data, error) {
//     if (error)
//         console.log (error + "Algo salió mal");
//     return console.log (data.toString ());
// })

// // Eliminar.

// fs.unlink ("sebastiantattoo.txt", function (err){
//     if (err) throw err;
//     console.log ("documento eliminado");
// });

/* DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un 
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

let guardarVenta = function () {
    let nombreProoducto = readlineSync.question ("Nombre del producto: ");
    let cantidadVendida = readlineSync.question ("Cantidad de productos: ");
    let precioTotal = readlineSync.question ("Precio total: ");
    fs.appendFile ("ventas.txt", "".concat (nombreProoducto, ", ").concat (cantidadVendida, ", $").concat (precioTotal, "]"),function (error) {
        if (error)
            throw error;
    });
};

let listarVentas = function () {
    fs.readFile ("ventas.txt", function (error, data) {
        if (error)
            throw error;
        console.log (data.toString ());
    });
};

let gestionarVentas = function () {
    let option = "";
    let menu = "MENU; \n 1. Agregar nueva venta \n 2. Listar ventas \n 3. Salir \n Escoger una opción: ";
    while (option !== "3") {
        option = readlineSync.question (menu);
        switch (option) {
            case "1":
                guardarVenta ();
                break;
            case "2":
                listarVentas ();
                break;
            case "3":
                fs.unlink ("ventas.txt", function (error) {
                    if (error)
                        throw error;
                    console.log ("Fichero eliminado");
                });
                break;
                default:
                    console.log ("Opción no válida. Intentar de nuevo");
                    break;
        }
    }
};

gestionarVentas ();