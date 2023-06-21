//push: agrega al final del vector y retorna el length
//unshift: agrega al principio del vector y retorna el length
//pop: elimina el último valor del vector y devuelve el valor eliminado
//shift: elimina el primer valor del vector y devuelve el valor eliminado
//concate: concatena 2 o más arrays
//join: crea una cadena de texto a partir de todos los elementos de un array. Recibe por parámetro un separador de elementos
//split: crea un array a partir de una cadena de texto. El parámetro es la condición que separa a los elementos de una cadena (SEPARA)
//slice(): devuelve una porción del array desde un rango definido. Por parámetro se pasa la posicion inicial y final de los elementos 
//a cortar (CORTA)
//Sort(): Ordena un vector de forma alfabética.

const numeros = [4,7,9,122,901,1,24];
const letras = ['A','B','C','D'];
numeros.push(85);

console.log(numeros);

let numlet = numeros.concat(letras);
console.log(numlet);

let cadena = numeros.join('+');
console.log(cadena);

document.writeln(cadena);

let nombres='Julieta, Carlos, Pedro, Valeria';
nombres = nombres.split(',');
document.writeln(nombres);


const animales = ['Mono','Perro','Vaca', 'Leon','Elefante'];
document.writeln(animales.slice(2,4));


let dato = 'Dario;Snieg;32523037;Casado;1 Hijo';
let nombre = dato.split(';')[0];

console.log(numeros.sort());
console.log(animales.sort());

const precios = [95, 5, 25, 10, 250];
console.log(precios.sort((a,b) => b - a));

let nombresVec=['Julieta', 'Carlos', 'Pedro', 'Valeria'];
console.log(nombresVec.sort());
console.log(nombresVec.sort().reverse());

///////////////////Metodos para recorrer el array
//forEach(): recorre el array
animales.forEach(item => console.log(item));

//map(): creo un nuevo array con el resultado de la función de callback

//const datos = animales.map( item => item + '!!!');
//console.log(datos);
const names=nombresVec; // solo apunto a referencia de memoria, names a nombresVec. No lo estoy clonando

nombresVec=nombresVec.map(item => item + '!!!');
console.log(names);

// para clonar arrays
const names2 = nombresVec.map(item => item);
console.log(names2);

//Filter(): filtra los elementos que cumplan cierta condición

const numberFilter = [8, 5, 3, 10, 25];
const numeritos = numberFilter.filter(num => num >= 25);
console.log(numeritos);

//find(): similar a filter, pero devuelve un dato en lugar de un vector
console.log(numberFilter);
console.log(numberFilter.find(item=>item>=9));