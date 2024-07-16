/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Sustitución de Liskov (Liskov Substitution Principle, LSP)" 
 * y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 */

// "Los objetos de una clase derivada deben poder sustituir a los objetos de su clase base sin afectar la funcionalidad del programa."

// Ejemplo incorrecto de uso del principio de sustitucipon de Liskov.

class Bird {
    fly () {
        console.log ("I am flying!");
    }
};

class Penguin extends Bird {
    fly () {
        throw new Error ("Penguins cannot fly");
    }
};

// Uso correcto del principio de sustitución de Liskov.

class Pajaro {
    moverse () {
        console.log ("Estoy moviendome");
    }
};

class PajaroVolando extends Pajaro {
    volar () {
        console.log ("Vuelo a lo loco");
    }
};

class Pinguino extends Pajaro {
    nadar () {
        console.log ("A mi me gusta nadar");
    }
};

// Uso de las clases.

let aguila = new PajaroVolando();
aguila.volar();

let pinguino = new Pinguino();
pinguino.nadar();

console.log ();

/* DIFICULTAD EXTRA (opcional):
 * Crea una jerarquía de vehículos. Todos ellos deben poder acelerar y frenar, así como
 * cumplir el LSP.
 * Instrucciones:
 * 1. Crea la clase Vehículo.
 * 2. Añade tres subclases de Vehículo.
 * 3. Implementa las operaciones "acelerar" y "frenar" como corresponda.
 * 4. Desarrolla un código que compruebe que se cumple el LSP.
 */

class Vehiculo {
    acelerar () {
        console.log ("Este método debe ser implementado por las subclases");
    }

    frenar () {
        console.log ("Este métododebe ser implementado por la subclase");
    }
};

class Automovil extends Vehiculo {
    acelerar() {
        console.log ("El automóvil está acelerando");
    }

    frenar() {
        console.log ("El automóvil está frenando");
    }
};

class Camion extends Vehiculo {
    acelerar() {
        console.log ("El camión está acelerando");
    }

    frenar() {
        console.log ("El camión esta frenando");
    }
};

class Motocicleta extends Vehiculo {
    acelerar() {
        console.log ("La motocicleta está acelerando");
    }

    frenar() {
        console.log ("La motocicleta está frenando");
    }
};

function probarVehiculo (vehiculo) {
    vehiculo.acelerar();
    vehiculo.frenar();
}

// Crear instancias de cada clase.
let coche = new Automovil();
let truck = new Camion();
let moto = new Motocicleta();

// Probar cada vehiculo.

console.log ("Probando vehiculos:");
probarVehiculo(coche);
probarVehiculo(truck);
probarVehiculo(moto);

console.log ();


