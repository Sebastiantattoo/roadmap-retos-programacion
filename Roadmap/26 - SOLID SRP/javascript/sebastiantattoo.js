/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Responsabilidad Única (Single Responsibility
 * Principle, SRP)" y crea un ejemplo simple donde se muestre su funcionamiento
 * de forma correcta e incorrecta.
 */

// Representación de clases de forma incorrecta o sin SRP.

class Compra {
    constructor (items, tasaImpuesto) {
        this.items = items;
        this.tasaImpuesto = tasaImpuesto;
    }
    

    compraTotal () {
        let total = this.items.reduce((acc, item) => acc + item[1], 0);
        const descuento = 5;
        let impuesto = (total - descuento) * this.tasaImpuesto;
        return total - descuento + impuesto;
    }

    funcionFacturar () {
        const total = this.compraTotal();
        let facturar = "Factura:\n";
        this.items.forEach(([item, precio]) => {
            facturar += `${item}: $${precio}\n`;
        });
        facturar += "Total (incluyendo impuestos): $" + total.toFixed(2);
        return facturar;
    }

    enviarConfirmacionEmail (email) {
        const facturar = this.funcionFacturar();
        console.log (`Enviando email a ${email} con la siguiente factura: ${facturar}\n`)
    }
};

const orden1 = new Compra ([["item1", 10], ["item2", 20]], 0.1);
console.log (orden1.funcionFacturar());
orden1.enviarConfirmacionEmail("nombreuser@gmail.com");

// Manera correcta utilizando el principio de responsabilidad única (SRP).

class Order {
    constructor (items) {
        this.items = items;
    }

    getTotal () {
        return this.items.reduce((sum, item) => sum + item[1], 0);
    }
};

class TaxCalculator {
    constructor (taxRate, discount = 5) {
        this.taxRate = taxRate;
        this.discount = discount;
    }

    calculateTax (total) {
        return (total - this.discount) * this.taxRate;
    }

    calculateFinalTotal (total) {
        const tax = this.calculateTax(total);
        return total - this.discount + tax; 
    }
};

class InvoiceGenerator {
    generateInvoice (order, finalTotal) {
        let invoice = "Factura:\n";
        order.items.forEach(([item, price]) => {
            invoice += `${item}: $${price}\n`;
        });
        invoice += `Total (incluyendo impuestos): $${finalTotal.toFixed(2)}\n`;
        return invoice;
    }
};

class EmailSender {
    sendConfirmationEmail (email, invoice) {
        console.log (`Enviando email a: ${email} con la siguiente factura:\n${invoice}`);
    }
};

// Uso del programa.

const order = new Order ([["item1", 10], ["item2", 20]]);
const taxCalculator = new TaxCalculator (0.1);
const invoiceGenerator = new InvoiceGenerator ();
const emailSender = new EmailSender ();

const total = order.getTotal ();
const finalTotal = taxCalculator.calculateFinalTotal (total);
const invoice = invoiceGenerator.generateInvoice (order, finalTotal);

console.log (invoice);
emailSender.sendConfirmationEmail ("nameuser@gmail.com", invoice);

/* DIFICULTAD EXTRA (opcional):
 * Desarrolla un sistema de gestión para una biblioteca. El sistema necesita
 * manejar diferentes aspectos como el registro de libros, la gestión de usuarios
 * y el procesamiento de préstamos de libros.
 * Requisitos:
 * 1. Registrar libros: El sistema debe permitir agregar nuevos libros con
 * información básica como título, autor y número de copias disponibles.
 * 2. Registrar usuarios: El sistema debe permitir agregar nuevos usuarios con
 * información básica como nombre, número de identificación y correo electrónico.
 * 3. Procesar préstamos de libros: El sistema debe permitir a los usuarios
 * tomar prestados y devolver libros.
 * Instrucciones:
 * 1. Diseña una clase que no cumple el SRP: Crea una clase Library que maneje
 * los tres aspectos mencionados anteriormente (registro de libros, registro de
 * usuarios y procesamiento de préstamos).
 * 2. Refactoriza el código: Separa las responsabilidades en diferentes clases
 * siguiendo el Principio de Responsabilidad Única.
 */

class libreria {
    constructor () {
        this.libros = []
        this.usuarios = []
        this.alquiler = []
    }

    agregarLibro (titulo, autor, copias) {
        let libro = {
            "titulo": titulo,
            "autor": autor,
            "copias": copias
        };
        this.libros.push(libro)
    }

    agregarUsuario (nombre, Idusuario, email ) {
        let usuario = {
            "nombre": nombre,
            "Idusuario": Idusuario,
            "email": email
        };
        this.usuarios.push(usuario)
    }

    agregarAlquiler (Idusuario, titulo) {
        for (let libro of this.libros) {
            if (libro.titulo === titulo && libro.copias > 0) {
                libro.copias -= 1;
                const alquiler = {"ID:": Idusuario, "titulo": titulo};
                this.alquiler.push(alquiler);
                return `El usuario "${Idusuario}" alquiló el libro "${titulo}".`; 
            } 
        }
        return `Libro "${titulo}" no se encuentra disponible.`
    }

    devolverLibro (Idusuario, titulo) {
        for (let alquiler of this.alquiler) {
            if (alquiler.Idusuario === Idusuario && alquiler.titulo === titulo) {
                this.alquiler = this.alquiler.filter(1 >= 1 !== alquiler);
                for (let libro of this.libros) {
                    if (libro.titulo === titulo) {
                        libro.copias += 1
                    }
                }
                return `Libro "${titulo}" devuelto por el usuario "${Idusuario}".`
            }
        }
        return `No existe registro que el usuario: "${Idusuario}" alquilo el libro: "${titulo}"`;
    }
};

const libreria1 = new libreria();

libreria1.agregarLibro("titulo1", "autor", 10);
libreria1.agregarLibro("titulo2", "autor2", 6);

libreria1.agregarUsuario("example369", "1", "example369@gmail.com");
libreria1.agregarUsuario("example963", "2", "example963@gmail.com");
libreria1.agregarUsuario("example333", "3", "example333@gmail.com");

console.log (libreria1.agregarAlquiler("1", "titulo1"));
console.log (libreria1.agregarAlquiler("2", "titulo2"));
console.log (libreria1.agregarAlquiler("1", "titulo2"));
console.log (libreria1.agregarAlquiler("3", "titulo1"));

// Forma correcta cumpliendo el principio de responsabilidad única.SRP.

class Library {
    constructor () {
        this.books = [];
        this.users = [];
    }

    addBook (book) {
        this.books.push(book);
    }

    addUser (user) {
        this.users.push(user);
    }

    findBook (title) {
        return this.books.find(book => book.title === title) || null;
    }

    findUser (userId) {
        return this.users.find (user => user.userId === userId) || null;
    }

    totalBooks () {
        return this.books.reduce ((sum, book) => sum + book.copies, 0);
    }

    getLibraryInfo () {
        const totalBoocks = this.totalBooks();
        const booksInfo = this.books.map(book => book.showInfo());
        return {totalBoocks, booksInfo};
    }
};

class Book {
    constructor (title, author, copies) {
        this.title = title;
        this.author = author;
        this.copies = copies;
    }

    showInfo () {
        return `"${this.title}" por "${this.author}", numero de copias: "${this.copies}"`;
    }
};

class User {
    constructor (name, userId, email) {
        this.name = name;
        this.userId = userId;
        this.email = email;
        this.loans = []; 
    }
};

class LoanProcess {
    borrowBook (library, userId, title) {
        let user = library.findUser(userId);
        let book = library.findBook(title);
        if (book && user) {
            if (book.copies > 0) {
                user.loans.push(book)
                book.copies -= 1
                console.log (`Libro "${book.title}" prestado a: "${user.name}"`);
            } else {
                console.log ("Este libro no se encuentra disponible")
            }
        } else {
            console.log ("Usuario o libro no encontrado");
        }
    }

    returnBook (library, userId, title) {
        let user = library.findUser(userId);
        let book = library.findBook(title);
        if (book && user) {
            const loanIndex = user.loans.indexOf(book);
            if (loanIndex !== -1) {
                user.loans.splice (loanIndex, 1);
                book.copies += 1;
                console.log (`Libro "${book.title}" devuelto por: "${user.name}"`);
            } else {
                console.log (`No existe registro de que el libro "${book.title}" halla sido prestado a: "${user.name}"`);
            }
        } else {
            console.log ("Usuario o libro no encontrado")
        }
    }
};

const library = new Library();
const book1 = new Book ("titulo1", "autor", 9);
const book2 = new Book ("Titulo2", "autor2", 520);
const user = new User ("Usuario1", "1", "usuario1@gmail.com");

library.addBook(book1);
library.addBook(book2);
library.addUser(user);

const loanProcessor = new LoanProcess();
loanProcessor.borrowBook (library, "1", "titulo1");
loanProcessor.returnBook (library, "1", "titulo1");

// Total de libros en la biblioteca.

const { totalBoocks, booksInfo } = library.getLibraryInfo();
console.log (`Total de lobros en la biblioteca: ${totalBoocks}`);
console.log ("Información de la biblioteca:");
booksInfo.forEach (info => console.log (info));



