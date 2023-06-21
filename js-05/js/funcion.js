// OBJETOS FUNCIONALES
// se crean a partir de funciones y permiten definir Moldes para lugero realizar copias de nuestros objetos con mismas propiedades pero distintos valores.

/*const usuario = {
    Nombre: 'Juan',
    Apellido: 'Perez',
    Edad: 36,
    Admin: true,
    ano: 2022,
    "fecha nacimiento": '15-07-1986',
    comosaluda: 'Hola, qué tal?',

    saludar() {
        console.log(`${this.Nombre} dice: ${this.comosaluda}`)
    }
};*/

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
}

const user = new Usuario('dario', 'snieg', 36, false, 1986, '15-07-1986', 'Hola!');
const user2 = new Usuario('melanie', 'sluzker', 34, true, 1989, '11-05-1989', 'Hola! Soy Melu');



