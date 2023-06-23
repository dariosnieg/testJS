const enlace = document.querySelector('a');

enlace.style.color = 'red';
enlace.style.fontSize = '40px';
enlace.textContent = 'Click';
enlace.addEventListener('click', event => {

    event.preventDefault(); // prevengo el comportamiento por default del enlace



    // CONFIRM - FORMA 1
    /*const respuesta = confirm('¿Estas seguro?');
    
    if (respuesta){
        window.location = 'https://google.com';
    }*/

    // CONFIRM - FORMA 2
    if (confirm('¿Estas seguro?')){
        window.location = enlace.href;
    }


});