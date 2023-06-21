// SUGAR SYNTAX: simil clases en javascript
/*
function Usuario(nombre, apellido, edad, admin, ano, fecha_nacimiento, comosaluda){
    this.Nombre= nombre,
    this.Apellido= apellido,
    this.Edad= edad,
    this.Admin= false,
    this.ano= ano,
    this.comosaluda= comosaluda
}

Usuario.prototype.setAdmin = function () {
    this.Admin = true;
}

Usuario.prototype.saludar = function() {
    console.log(`${this.Nombre} dice: ${this.comosaluda}`);
}*/

// SIEMPRE PONER CONSTRUCTOR EN LA CLASE!

class User{
    constructor(nombre, apellido, edad, admin, comosaluda){
        this.Nombre= nombre,
        this.Apellido= apellido,
        this.Edad= edad,
        this.Admin= false,
        this.comosaluda= comosaluda
    }

    saludar() {
        console.log(`${this.Nombre} dice: ${this.comosaluda}`);
    }

    setAdmin() {
        this.Admin = true;
    }
}

const user = new User('Dario', 'Snieg', 36, 'false', 'Hola! Soy Dario'); 
const user2 = new User('Melanie', 'Sluzker', 34, 'false', 'Hola! Soy Melu :)');
