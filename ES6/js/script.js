const sumar = (num1, num2) => num1+num2;
const decirHola = () => 'Hola';
const duplicar = num => num*2;
const saludarConNombre = (nombre = 'Daro', apellido = 'Gomez') => {
    let nombrecompleto = `Hola querido ${nombre} ${apellido}!!!`;
    return nombrecompleto; 
}

console.log(sumar(4,5));
console.log(decirHola());
console.log(duplicar(10));
console.log(saludarConNombre('Dario'));
console.log(saludarConNombre('Dario', 'Snieg'));
console.log(saludarConNombre());


/// Asignación desestructurante  ////

// Asigno a muchas variables al mismo tiempo
let array = [4,5]
let a = array[0];
let b = array[1];

console.log(a);
console.log(b);

let [c,d] = array;
console.log(c);
console.log(d);

let obj = {
    e:3,
    f:4,
    g:1
};

let {e,f,g='a'} = obj; // tiene que tener el mismo nombre que la propiedad del objeto
// g uso "declaración por default", si no declaré g:1, va a imprimir 'a'
console.log(e,f,g);


// Array con defaults
let array2 = [10]
let [h,i=9] = array2;
console.log(h);
console.log(i);

/*             */
let j=5;
let k=6;

console.log(j,k);
[j,k] = [k,j];
console.log(j,k);

const arr = [j,j,j,j,k];
console.log(arr);


/*  desasignación  desestructurante  */
let numeros = [1,2,3,4,5,6,7,8,9];
let [uno, dos, tres, cuatro] = numeros;

console.log(uno, dos, tres, cuatro);

let [cinco, seis, ...elResto] = numeros; /*genero un string en elResto*/ 
console.log(cinco);
console.log(seis);
console.log(elResto);
console.log(elResto[4]);

/* idem con objetos */

let persona = {
    nombre: 'Dario',
    apellido: 'Snieg',
    edad: 36
}
let {nombre, ...loUltimo} = persona; 
// let {nombre, apellido, ...loUltimo} = persona; 
console.log(nombre);
// console.log(apellido);
console.log(loUltimo);

let {apellido, ...restoPropiedades} = persona; 
console.log(apellido);
console.log(restoPropiedades);

// -----------------------------------------------//
/* Desestructuración como parámetro de funciones */

//Como se utilizaba antes?
// const saludar = profesor => {
//     let nombre=profesor.nombre;
//     let apellido=profesor.apellido;
//     let materia=profesor.materia;
//     console.log(`Hola querido ${nombre} ${apellido}, profesor de ${materia}`);
// };

//Nueva forma de utilizarlo, con desestructuración como parámetro de funciones
const saludar = ({nombre, apellido, materia}) => {
    console.log(`Hola querido ${nombre} ${apellido}, profesor de ${materia}`);
};

const flecha ={
    nombre: 'Fede',
    apellido: 'Snieg',
    materia: 'EFSI'
}

saludar(flecha);

/*  */
let numerosASumar = [88,99,100];
console.log(sumar(numerosASumar[0],numerosASumar[1]));
console.log(sumar(...numerosASumar)); //Toma los valores como variables separadas

let [primeroNumero,segundo, tercero] = [...numerosASumar];
console.log(segundo);

  

/* ------------------------------------ */
let masNumeros = [...numerosASumar, 55,44,55,66,77,44 ];
console.log(masNumeros);

/* ------------------------------------ */
let ymasNumeros = [55,44,55,66,77,44,...numerosASumar];
let [primeroNum,segundoNum]=ymasNumeros;
let bla=[...ymasNumeros,primeroNum,segundoNum];
console.log(bla);