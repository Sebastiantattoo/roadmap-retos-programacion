/*
 * EJERCICIO:
 * Empleando tu lenguaje, explora la definición del tipo de dato
 * que sirva para definir enumeraciones (Enum).
 * Crea un Enum que represente los días de la semana del lunes
 * al domingo, en ese orden. Con ese enumerado, crea una operación
 * que muestre el nombre del día de la semana dependiendo del número entero
 * utilizado (del 1 al 7).
 */

let diasDeLaSemana = {
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
    7: "Domingo"
};

console.log (diasDeLaSemana [3]);
console.log (diasDeLaSemana [7]);

 /* DIFICULTAD EXTRA (opcional):
 * Crea un pequeño sistema de gestión del estado de pedidos.
 * Implementa una clase que defina un pedido con las siguientes características:
 * - El pedido tiene un identificador y un estado.
 * - El estado es un Enum con estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
 * - Implementa las funciones que sirvan para modificar el estado:
 *   - Pedido enviado
 *   - Pedido cancelado
 *   - Pedido entregado
 *   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
 * - Implementa una función para mostrar un texto descriptivo según el estado actual.
 * - Crea diferentes pedidos y muestra cómo se interactúa con ellos. 
 */

 class Pedidos {
    constructor (id) {
        this.id = id;
        this.nombreEstado =["PENDIENTE", "ENVIADO", "ENTREGADO", "CANCELADO"];
        this.estado = this.nombreEstado [0];
    };
    consultar() {
        console.log (`Pedido: ${this.id} \nEstado de envio: ${this.estado}`);
    };

    enviado () {
        if (this.estado == this.nombreEstado [0]) {
            this.estado = this.nombreEstado [1];
            console.log ("El envio fue entregado correctamente");
        } else if (this.estado == this.nombreEstado [1]) {
            console.log ("El pedido ya está en estado de enviado");
        } else if (this.estado == this.nombreEstado [2]) {
            console.log ("El pedido ya ha sido entregado");
        } else {
            console.log ("El pedido ha sido cancelado");
        }
    };

    entregado () {
        if (this.estado == this.nombreEstado [1]) {
            this.estado = this.nombreEstado [2];
            console.log ("El pedido ha sido entregado con exito")
        } else if (this.estado == this.nombreEstado [2]) {
            console.log ("El pedido ya esta entregado");
        } else if (this.estado == this.nombreEstado [0]) {
            console.log ("El pedido esta pendiente, no ha salido aún");
        } else {
            console.log ("El pedido ha sido cancelado");
        }
    }

    cancelado () {
        if (this.estado != this.nombreEstado [3]) {
            this.estado = this.nombreEstado [3];
            console.log ("El pedido se canceló con exito")
        } else {
            console.log ("El pedido ya se encontraba cancelado");
        }
    }
 };

 let pedido3 = new Pedidos (3);
 let pedido33 = new Pedidos (33);
 let pedido36 = new Pedidos (36);
 let pedido39 = new Pedidos (39);
 let pedido63 = new Pedidos (63);
 let pedido93 = new Pedidos (93);

 pedido3.entregado ();
 pedido3.consultar ();

pedido33.cancelado ();
pedido33.consultar ();

pedido36.enviado ();
pedido36.consultar ();

pedido39.consultar ();
pedido63.consultar ();
pedido93.consultar ();

// Fin del ejercicio.