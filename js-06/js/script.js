// DOM: Document Object Model, representación que hace el navegador de los elementos en un documento HTML
// arbol de elementos donde cada elemento es un nodo. Pueden ser HTML, atributos, texto, comentarios o el mismo document (nodo principal)

// **** TIPOS DE NODOS **** //
// Document: nodo raís
// attr: representa el atributo de un elemento
// comment: nodos de comentaroi dentro del documento
// element: representa una etiqueta html y puede tener tanto nodos hijos como atributos
// text: almacena el contenido del texto que se encuentra entre una etiqueta de apertura y una de cierre

// **** METODOS PARA ACCEDER AL DOM ****//
// getElementById -> trae el notodo del elemento con 'id'
// getElementsByClassName -> selecciona todos los nodos con la clase 'clase' y los devuelve en un array de nodos
// getElementsByTagName -> toma todas las etiquetas 'tag' y las devuele en un array de nodos
// GetElementsbyTagNameNS


const parrafo1 = document.getElementById('parrafo-1');

// let parrafos = document.getElementsByClassName('parrafos'); // obtengo colección de elementos con className "Parrafos"

let parrafosnm = document.getElementsByTagName('p')


///////// LOS MÁS USADOS AHORA //////////////////
// querySelector -> accedemos un nodo como si usaramos un selector CSS
// querySelectorAll idem querySelector pero trae todos los que cumplan, querySelector trae el primero

const par = document.querySelector('.parrafos');

const pars = document.querySelectorAll('section > p'); // toma solo los hijos directos de section


////////////********** Modificar el DOM */

// CREAR ELEMENTOS
/*
createElement ('div') -> crea una etiqueta div, podemos alojarla en una variable
createTextNode('text') -> crea un nodo de texto con 'text' como contenido
*/

// AGREGAR ELEMENTOS
/* 
padre.appendChild(hijo)-> agregamos un nodo hijo a un nodo padre
nodo.innerHTML='<p>hola</p>; -> inyectamos HTML dentro de un nodo, reemplazando el contenido actual
nodo.innerText = 'hola'; -> inyectamos texto directamente dentro de un nodo o reemplazo el texto existente
document.write('texto') -> agrega contenido como hijo directo de document, reemplazando todos los nodos anteriores
*/

document.write('Hola'); // agrego contenido al html

const h1 = document.querySelector('h1');

//h1.textContent = '<em>Hola mundo!</em>'; //Pega el texto como lo recibió

h1.innerHTML += '<button class="btn btn-primary">Hola mundo!</button>'; //Pega el texto interpretando html (con los estilos que ponga), pisando el contenido


const p = document.createElement('p');
p.textContent='Nuevo parrafo'; 

const section = document.querySelector('section');
section.appendChild(p);







