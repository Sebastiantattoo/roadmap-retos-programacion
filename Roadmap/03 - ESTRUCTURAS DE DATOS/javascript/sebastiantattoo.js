/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 */

 
// Módulo estructura de datos.

// Array.

let numbers = [3,6,9,12,15,18];
let letters = ["a", "b", "c", "d"];
let combined = ["abc", true, "def", false];

let array = [1,2,3,4,5];
    console.log (array);
    document.write (array);

let listaDeNombres = ["<br>Luis", "Jose", "Mariana", "soledad", "Osho<br>"];
    console.log (listaDeNombres);
    document.write (listaDeNombres);

let users = [
    {
        id1 : 1 ,
        name : "José",
        subscribed : true
    }, 
    {
        id2 : 2,
        name : "Luis",
        subscribed : false
    },
    {
        id3 : 3,
        name : "Paolo",
        subscribed : true
    }
];
console.log ("users: ", users);

// Añadir elementos al final del array.

    array.push (6);
    console.log (array);
    document.write (array);

    listaDeNombres.push ("Karincho<br>");
    console.log (listaDeNombres);
    document.write (listaDeNombres);

    let pushUser = {
        id : 33,
        name : "Jacobo",
        suscribed : true
    }

    users.push (pushUser);
    console.log ("Función push: ", pushUser);

// Aañadir elementos al principio del array.

    array.unshift (0);
    console.log (array);
    document.write (array);

    listaDeNombres.unshift ("Pedro");
    console.log (listaDeNombres);
    document.write (listaDeNombres);

    let unshiftUser = {
        id : 66,
        name : "Gerard",
        suscribed : true
    }

    users.unshift (unshiftUser);
    console.log ("Función unshift: ", unshiftUser);

// Añadir un elemento en un indice concreto.

//Splice - Agregar elementos en cualquier posicion
//El primer parametro es para indicar en que posicion agregarlo
//El segundo parametro es para indicar cuantos elementos se reemplazarian (0 es ningun elemento)
//El tercer parametro es el elemento a agregar

    array.splice (3, 0, 3.5);
    console.log (array);
    document.write (array);

    let spliceUser = {
        id : 99,
        name : "Cachito",
        suscribed : false
    };

    users.splice (2, 0, spliceUser);
    console.log ("función Splice: ", spliceUser, users);
 
// Eliminar el último elemento del array.

    array.pop ();
    console.log (array);
    document.write (array)

    listaDeNombres.pop ();
    console.log (listaDeNombres);
    document.write (listaDeNombres);

    users.pop ();

// Eliminar el primer elemanto de un array.

    array.shift ();
    console.log (array);
    document.write (array);

    listaDeNombres.shift ();
    console.log (listaDeNombres);
    document.write (listaDeNombres);

    users.shift ();

// Ejemplo de objeto.

    let objeto = {
        name : "Alexander",
        lastName : "Eleazar",
        age : 33
    };

    console.log (objeto);
    document.write (objeto);

//Splice - Eliminar un elemento en cualquier posición.
//El primer parámetro es la posición del elemento.
//El segundo parámetro es la cantidad de elementos a eliminar desde la posioción indicada.

    users.splice (3, 1);
    console.log ("Splice-eliminarelemento", users);

//Filter - Crea un nuevo array con los elementos que cumplan el criterio.

    let filterUsers = users.filter (function (user) {
        return user.id < 3;
    });

    console.log ("Función Filter: ", filterUsers);

//Sort - Método para ordenar datos.

    let listaDesordenada = [1,5,7,9,0,2,4,6];

    listaDesordenada.sort (function(a,b) {
        return a - b;
    });

    console.log ("Sort - ordena datos:", listaDesordenada);

// Añadir campo a un objeto.

    objeto.direccion = "Calle Pelliza 3693";
    console.log (objeto);

// Eliminar un campo a un objeto.

    delete objeto.age;
    console.log (objeto);

// Ejemplo de mapa.

    let mapa = new Map();

    mapa.set ("Name: ", "Miguel");
    mapa.set ("Last name: ", "Granados");
    mapa.set ("Age: ", 30);
    console.log (mapa);

// Añadir un campo al mapa.

    mapa.set ("Adress", "Cunnington st. 963");
    console.log (mapa);

// Eliminar un campo del mapa.

    mapa.delete ("Age: ");
    console.log (mapa);

// Ejemplo de set.

    let set = new Set ();
    set.add ("Alvaro");
    set.add ("Aparicio");
    set.add (63);

    console.log (set);

// Añadir un campo al set.

    set.add ("Liboustrine st. 3");
    console.log (set);

// Verificar si un valor existe dentro de un set. (has).

    set.has (63);
    console.log ("Método has: ", set);

//Size - Devuelve el tamaño del set.

    console.log ( "Método size:", set.size);

// Eliminar un campo del set.

    set.delete (63);
    console.log (set);

//Clear - Eliminar todos los elementos.

    set.clear ();
    console.log ("Método clear", set);

/* DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

    let contacts = [];
    let addContact = function () {
        let newName = null;
        let newPhone = null;
        do {
            newName = prompt ("Name: ");
            if (!newName) {
                console.log ("Please insert a valid name");
            };
        } while (!newName);
        do {
            newPhone = prompt ("Phone number: ");
            if (!newPhone) {
                console.log ("Please insert a valid phone number");
            };
        } while (!newPhone);
        let newContact = {
            name : newName,
            phone : parseInt (newPhone)
        };
        contacts.push (newContact);
    };
    let searchContact = function () {
        let searchedName = null;
        do {
            searchedName = prompt ("Search by name: ");
        } while (!searchedName);
        let searchedResult = contacts.find (function (contact) {
            return contact.name.toLocaleLowerCase () === searchedName.toLocaleLowerCase();});
            if (searchedResult === undefined) {
                alert (searchedName + "don´t exist this name");
            }
            else {
               alert (JSON.stringify (searchedResult, null, 2)); 
            }
    };
    let updateContact = function () {
        let _a , _b;
        let searchedName = null;
        do {
            searchedName = prompt ("Search by user: ");
        } while (!searchedName);
        let searchedResult = contacts.findIndex (function (contact) {
            return contact.name.toLocaleLowerCase () === searchedName.toLocaleLowerCase ();
        });
        if (searchedResult === undefined) {
            alert (searchedName + " don´t exist");
        }
        else {
            let newName = null;
            let newPhone = null;
            do {
                newName = prompt (("New name: ", (_a = contacts [searchedResult]) === null ||
                _a === void 0 ? void 0 : _a.name || ""));
                contacts [searchedResult].name = newName;
            } while (newName = null);
            do {
                newPhone = prompt(("New phone:", (_b = contacts [searchedResult]) === null ||
            _b === void 0 ? void 0 : _b.phone.toString ()) || "");
            contacts [searchedResult].phone = parseInt (newPhone);
            } while (newPhone === null);
            alert (searchedName + "it´s updated to " + newName)
        }
    };
    let deleteContact = function () {
        let searchedName = null;
        do {
            searchedName = prompt ("Contact to delete: ");
        } while (!searchedName);
        let searchedResult = contacts.findIndex (function (contact) {
            return contact.name.toLocaleLowerCase () === searchedName.toLocaleLowerCase ();
        });
        if (searchedResult === undefined) {
            alert (searchedName + "dont exist.");
        }
        else {
            if (searchedResult >= 0 && searchedResult < contacts.length) {
                contacts.splice (searchedResult, 1);
                alert (searchedName + " its deleted");
            }
            else {
                console.log ("Index no valid");
            }
        }
    };
    let listContacts = function () {
        let contactsString = JSON.stringify (contacts, null, 2);
        alert (contactsString);
    };
    let agendApp = function () {
        let option = "";
        let menu = "MENU: \n 1. Add new contact \n 2. Search contact \n 3. Update contact \n 4. Delete contact \n 5. List all contacts \n 6. Exit";
        while (option !== "6") {
            option = prompt (menu);
            switch (option) {
                case "1":
                    addContact ();
                    break;
                case "2" :
                    searchContact ();
                    break;
                case "3" :
                    updateContact ();
                    break;
                case "4" :
                    deleteContact ();
                    break;
                case "5" :
                    listContacts ()
                    break;
                    case "6" :
                        break;
                    default :
                    console.log ("Invalid option. Try again");
                    break;
            }
        }
    };
    agendApp ();