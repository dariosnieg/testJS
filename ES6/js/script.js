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