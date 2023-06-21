////////////////// EVENTOS //////////////////
/*
ACciones que suceden en el navegador y qeu afectan a los elementos del DOM. se pueden escuchar
a través de distintos métodos de javascript

"Cuando pase tal cosa, hace esto"
*/

function saludar(){
    alert('Hola!');
}

function cambiartexto(componente){
    componente.textContent = 'Hello!';
}

const parrafo = document.querySelector('p');
// parrafo.onclick=saludar; 

//forma 1
//parrafo.addEventListener('click', saludar);
//forma 2
/*  parrafo.addEventListener('click', () => {

    alert('hola!');
});*/

/*document.addEventListener('keypress', event => {
    console.log(event, event.target);
});
*/
//parrafo.addEventListener('mouseover', cambiartexto(parrafo));

const form = document.querySelector('form');

form.addEventListener('submit', event =>{
    event.preventDefault();

    const nombre = document.querySelector('#nombre');
    
    const span = document.querySelector('#error');
        
    if (nombre.value == ''){
        // console.log('los campos son obligatorios!');
        //const span = document.createElement('span');
        //span.textContent = 'los campos son obligatorios!';
        span.textContent = 'los campos son obligatorios!';
    }else{
        console.log(nombre.value);
        span.textContent = '';
    }
});