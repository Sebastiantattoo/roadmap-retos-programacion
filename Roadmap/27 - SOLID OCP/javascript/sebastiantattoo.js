/*
 * EJERCICIO:
 * Explora el "Principio SOLID Abierto-Cerrado (Open-Close Principle, OCP)" 
 * y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 */

// Forma incorrecta de aplicar el principio Solid OCP.

class Order {
    constructor () {
        this.items = [];
        this.quantities = [];
        this.prices = [];
        this.status = "open";
    }

    addItem (name, quantity, price) {
        this.items.push(name);
        this.quantities.push(quantity);
        this.prices.push(price);
    }

    totalPrices () {
        let total = 0;
        for (let i = 0; i < this.prices.length; i++) {
            total += this.quantities[i] * this.prices[i];
        }
        return total;        
    }
};


class PaymentProcessor {
    payDebit (order, securityCode) {
        console.log ("Procesando el tipo de pago 'debito'");
        console.log (`Verificando código de seguridad ${securityCode}`);
        order.status = "paid";
    }

    payCredit (order, securityCode) {
        console.log (`Procesando el tipo de pago 'credito' `);
        console.log (`Veificando código de seguridad ${securityCode}`);
        order.status = "paid";
    }

    payPaypal (order, securityCode) {
        console.log (`Procesando el tipo de pago 'Paypal'`);
        console.log (`Verificando código de seguridad ${securityCode}`);
        order.status = "paid";
    }
};

const order1 = new Order();
order1.addItem ("Keyboard", 1, 50); 
order1.addItem ("SSD", 1, 150); 
order1.addItem ("USB Cable", 2, 5);

console.log (`El precio total es: ${order1.totalPrices()}`);

const proccesor = new PaymentProcessor();
proccesor.payDebit (order1, "123456");
console.log (`Estatus: ${order1.status}`);

console.log ();

// Con la forma correcta Solid OCP.

class Orden {
    constructor () {
        this.items = [];
        this.cantidades = [];
        this.precios = [];
        this.status = "abierto";
    }

    agregarProducto (nombre, cantidad, precio) {
        this.items.push(nombre);
        this.cantidades.push(cantidad);
        this.precios.push(precio);
    }

    precioTotal () {
        let total = 0;
        for (let i = 0; i < this.precios.length; i++) {
            total += this.cantidades[i] * this.precios[i];
        }
        return total;
    }
};

class ProcesadorPagos {
    pago (orden, códigoseguridad) {
        throw new Error("Este método debería ser anulado");
    }
};

class ProcesadorPagoDebito extends ProcesadorPagos {
    pago (orden, códigoseguridad) {
        console.log ("Procesando el tipo de pago 'debito'.");
        console.log (`Verificando código de seguridad; ${códigoseguridad}`);
        orden.status = "Pagado";
    }
};

class ProcesadorPagoCredito extends ProcesadorPagos {
    pago (orden, códigoseguridad) {
        console.log ("Procesando el tipo de pago 'crédito'.");
        console.log (`Verificando código de seguridad ${códigoseguridad}`);
        orden.status = "Pagado";
    }
}

class ProcesadorPagoPaypal extends ProcesadorPagos {
    pago (orden, códigoseguridad) {
        console.log ("Procesando el tipo de pago 'Paypal'.");
        console.log (`Verificando código de seguridad ${códigoseguridad}`);
        orden.status = "Pagado";
    }
};

const orden = new Orden();
orden.agregarProducto ("Motherboard", 2, 150);
orden.agregarProducto ("Camara", 3, 200);
orden.agregarProducto ("Hojas A4", 6, 27);

console.log (`El precio total es: U$S ${orden.precioTotal()}`);

const procesoDebito = new ProcesadorPagoDebito();
procesoDebito.pago(orden, "336699");
console.log (`Estatus: ${orden.status}`);

const procesoCredito = new ProcesadorPagoCredito();
procesoCredito.pago(orden, "123456");
console.log (`Estatus: ${orden.status}`);

const paypalProcesador = new ProcesadorPagoPaypal();
paypalProcesador.pago(orden, "999999");
console.log (`Estatus: ${orden.status}`);

console.log ();

/* DIFICULTAD EXTRA (opcional):
 * Desarrolla una calculadora que necesita realizar diversas operaciones matemáticas. 
 * Requisitos:
 * - Debes diseñar un sistema que permita agregar nuevas operaciones utilizando el OCP.
 * Instrucciones:
 * 1. Implementa las operaciones de suma, resta, multiplicación y división.
 * 2. Comprueba que el sistema funciona.
 * 3. Agrega una quinta operación para calcular potencias.
 * 4. Comprueba que se cumple el OCP.
 */


class Operation {
    execute (valora, valorb) {
        throw new error ('Tienes que implementar el método ejecutar.')
    }
};

class Addition extends Operation {
    execute (valora, valorb) {
        return valora + valorb;
    }
};

class Substraction extends Operation {
    execute (valora, valorb) {
        return valora - valorb;
    }
};

class Multiplication extends Operation {
    execute (valora, valorb) {
        return valora * valorb;
    }
};

class Division extends Operation {
    execute (valora, valorb) {
        if (valorb === 0) {
            throw new Error ("No se puede dividir por 0");
        }
        return valora / valorb;
    }
};

// Agregar la operación de potencia.

class Power {
    execute (valora, valorb) {
        return Math.pow(valora, valorb); //a ** b;
    }
};

class Calculator {
    constructor() {
        this.operations = {};
    }

    addOperation (name, operation) {
        this.operations[name] = operation;
    }

    calculate (name, valora, valorb) {
        if (!this.operations[name]) {
            throw new Error (`La operación ${name} no funciona.`)
        }
        return this.operations[name].execute(valora, valorb);
    }
};

const calculator = new Calculator ();

calculator.addOperation("add", new Addition());
calculator.addOperation("substract", new Substraction());
calculator.addOperation("multiply", new Multiplication());
calculator.addOperation("divide", new Division());
// Agregar la operación de potencia a la calculadora.
calculator.addOperation("power", new Power());

// Uso de la calculadora.

console.log (calculator.calculate("add", 9, 6));
console.log (calculator.calculate("substract", 99, 33));
console.log (calculator.calculate("multiply", 9, 9));
console.log (calculator.calculate("divide", 666, 9));
// Uso de la operación de potencia.
console.log(calculator.calculate("power", 3, 3));






