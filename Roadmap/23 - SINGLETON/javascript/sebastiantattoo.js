/*
 * EJERCICIO:
 * Explora el patrón de diseño "singleton" y muestra cómo crearlo
 * con un ejemplo genérico.
 */
 const counter = () => {
    let instance = null;
    let count = 0;
    function printCount () {
        console.log ("Número de instancias activas: " + count);
    }
    function init () {
        count++;
        return {};
    }
    function createInstance () {
        if (instance == null) {
            instance = init ();
        }
        return instance;
    }
    function closeInstance () {
        count--;
        instance = null;
    }
    return {
        createInstance: createInstance,
        closeInstance: closeInstance,
        printCount: printCount
    };
 };

 let foo = counter ();
 foo.printCount ();
 foo.createInstance ();
 foo.printCount ();
 foo.createInstance ();
 foo.printCount ();
 foo.createInstance ();
 foo.printCount ();
 foo.closeInstance ();
 foo.printCount ();
 foo.createInstance ();
 foo.printCount ();
 foo.closeInstance ();
 foo.printCount ();

 // Patron de diseño Singleton.

 class Office {
    constructor (name, employees)
    {
        this.name = name,
        this.employees = employees
        if (typeof Office.instance === "object") {
            return Office.instance
        }
        Office.instance = this
        return this
    }
 };

 let office1 = new Office ("Principal", 30);
 let office2 = new Office ("Principal", 60);

 console.log (office1);
 console.log (office2);

 /* DIFICULTAD EXTRA (opcional):
 * Utiliza el patrón de diseño "singleton" para representar una clase que
 * haga referencia a la sesión de usuario de una aplicación ficticia.
 * La sesión debe permitir asignar un usuario (id, username, nombre y email),
 * recuperar los datos del usuario y borrar los datos de la sesión.
 */

 class User {
    constructor (id, username, name, email) {
        this.id = id
        this.username = username
        this.name = name
        this.email = email

        if (typeof User.instance === "object") {
            return User.instance
        }
        User.instance = this
        return this
    }

    getData () {
        console.log (`Identificador: ${this.id}\nUsuario: ${this.username}\nNombre: ${this.name}\nemail: ${this.email}`)
    }
    deleteData () {
        this.id = ""
        this.username = ""
        this.name = ""
        this.email = ""
    }
 };

let usuario1 = new User (3, "user-3", "User Tres", "user3@gmail.com");
let usuario2 = new User (6, "user-6", "User Seis", "user6@gmail.com");

usuario1.getData ();
usuario2.getData ();
usuario2.deleteData ();

usuario1.getData ();
usuario2.getData ();




