/* const listado = function (param1, param2, param3){
    if (param1 != null && param2 != null && param3 != null){
        console.log(`El listado tiene a ${param1}, ${param2} y a ${param3}`)
    } else {
        console.log("La lista esta vacía");
    }
}

listado() */


// Misma funcion que el anterior pero con spread
/* function saludar(...nombres){
    console.log(nombres);
}

saludar("Valentin", "Mollo", "Belpu") */

/* class  Animal {
    constructor(sonido, nombre){
        this.sonido = sonido
        this.nombre = nombre
    }
    mostrarAnimal(){
        console.log(`El perro hace ${this.sonido} y se llama ${this.nombre}`)
    }
}

const perro = new Animal ("guau", "Aila")
perro.mostrarAnimal() */

class Usuario {
    constructor(Nombre, Apellido, Libros, Mascota) {
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Libros = Libros
        this.Mascota = Mascota
    }
    getFullName() {
        console.log(`${this.Nombre} ${this.Apellido}`)
    }
    addMascota() {
        const nuevaMascota = this.Mascota
        nuevaMascota.push("Awka")
        console.log(nuevaMascota);
    }
    countMascotas() {
        const cantidadMascotas = this.Mascota
        console.log(cantidadMascotas.length);
    }
    addBook() {
        const newBook = this.Libros
        newBook.push({Autor: "J. K. Rowling", Nombre: "Harry Potter y al piedra filosofal"})
        console.log(newBook);
    }
    getBookNames() {
        const bookNames = this.Libros
        console.log(bookNames.Nombre)
    }
}

const usuario1 = new Usuario("Valentín", "Martinez", [{ Autor: "Stephen King", Titulo: "El resplandor" }, { Autor: "Edgar Allan Poe", Titulo: "El cuervo" }], ["Botitas", "Aila", "Ringo"])

const usuario2 = new Usuario("Lionel", "Messi", [{ Autor: "Stephen King", Nombre: "It" }, { Autor: "Edgar Allan Poe", Nombre: "El gato negro" }], ["Meli", "Max", "Lola"])


usuario1.getFullName()
usuario2.addMascota()
usuario2.countMascotas()
usuario1.addBook()
usuario1.getBookNames()