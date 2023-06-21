// OBJETOS LITERALES 
// Uso const pq todo el objeto va a ser igual en todo el contenido
const usuario = {
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
};

// Cara objeto tiene propieades
// Atributos de las propieades:
// 1- value: valor de la propiedad en cuestión
// 2- Configurable: si voy a poder modificar los atributos de la propiedad 
// 3- Enumerable: controla si la propiedad podrá ser mostrada cuando se enumeren las propiedades del objeto
// 4- writable: si voy a poder modificar los valores de una propiedad

/* console.log(Object.keys(usuario)); //Obtengo las propiedades del objeto Usuario, en un array
console.log(Object.values(usuario)); //Obtengo los valores de las propiedades del objeto.

console.log(Object.getOwnPropertyDescriptor(usuario, 'Nombre')); //Obtengo características de una propiedad en particular
console.log(Object.getOwnPropertyNames(usuario)); 
console.log(Object.getOwnPropertyNames(usuario)); 
 */
// console.log(usuario.hasownProperty('Nombre')); //devuelve si tiene o no la propiedad
usuario.Domicilio='Acevedo 540';

//console.log(usuario.Domicilio);

/*  usuario.ano = 2023;
console.log(usuario.ano);*/

// Recorro un objeto e imprimo sus propiedades y valores
// ` -> permite hacer algo con los strings
for (const key in usuario){
    // console.log('Prop:' + prop);
    console.log(`Key: ${key}, Tiene el valor: ${usuario[key]}`);
    // console.log(`usuario.${prop} = ${usuario[prop]}`);
}

//Metodos -> funciones que se declaran dentro de un objeto
// puedo poner dentro del metodo 
/*
    objeto { metodo: function(){}
            }
    
    objeto { metodo(){}
            }
*/
//uso this dentro del objeto para hacer referencia al mismo objeto

usuario.saludar();