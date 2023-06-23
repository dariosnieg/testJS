const form = document.querySelector('.form-contacto');

form.addEventListener('submit', event => {
   event.preventDefault();
   
   const provincia = document.querySelector('#provincia');
   console.log(provincia.value);

   const mensaje = document.querySelector('.mensaje');

   mensaje.textContent='Provincia: ' + provincia.value;

//   nombre.value = 'Juan';
//   console.log(nombre.value);

// CAST a Number para poder sumarlo
    const edad = document.querySelector('#edad');
    const edad_numero = Number(edad.value);
    console.log(edad_numero + 2);
    edad.value = edad_numero+3;
});


const nombre = document.querySelector('#nombre');
nombre.addEventListener('blur', () => { //cuando pierdo el foco que cuente la cantidad de caracteres
    console.log(nombre.value.length);
});

// FORMAS DE SELECCIONAR EL BOTÓN PROCESAR

//1.
// const boton = document.querySelector('[type="button"]');

//2.
// const boton = document.querySelector('button:nth-child(3)'); // busca todos los botones, los enumera y selecciona el tercero

//3.
const boton = document.querySelector('#btn-procesar');
boton.addEventListener('click', () => {
    const edad = document.querySelector('#edad');
    const edad_numero = Number(edad.value) + 2;
    edad.value =edad_numero;
    console.log(edad_numero);
});

const reset = document.querySelector('reset');
reset.addEventListener('click', () => {
    document.getElementById('.mensaje').style.display='none';
    
});



