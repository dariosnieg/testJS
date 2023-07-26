// Render -> renderiza el elemento Raiz, el componente que quiero mostrar en pantalla.
// Voy a poder crear arbol de componentes
// Por lo general renderiza en un DIV



// Los componentes tienen propiedades, parámetros que les puedo pasar a mis componentes

//condición IF en linea -> condicion ? opcionTrue : opcionFalse
// Ej: edad>18 ? dejarpasar() : prohibirEntrada()

// Funciones que se van a usar mucho: MAP y FILTER
// Map //
// - Retorna un nuevo array transformado
// - A cada elemento le aplica la función que se recibe por parámetro

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var pares = [];
var dobles = [];


dobles = numeros.map(function(n){
    return n * 2;
});
// recorro el array y aplico function a cada elemento del array // 
console.log("Los dobles son: " + dobles);

// Filter //
// - retorna un nuevo subarray
// - a cada elemento le aplica la función que recibe por parámetro. Si retorna true estará en el nuevo subarray, sino no 

pares = numeros.filter(function(n){
    return n % 2 == 0; //
});

console.log("Los pares son: " + pares);

var edades = [15,18,22,3,11,99,44,59];
var mayores = [];

mayores = edades.filter(function(n){
    return n >= 18; //
});
console.log("Los mayores de edad son: " + mayores);
