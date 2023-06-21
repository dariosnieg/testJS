//funciones a las que les paso como parámetro otra funcion

// const saludoLog = function(mensaje){
//     console.log(mensaje);
// }

// const saludoAlert = function(mensaje){
//     alert(mensaje);
// }

const saludo = function(mensaje, accion){
    accion(mensaje);
}

// const saludo = mensaje, accion; => accion(mensaje);

saludo('Hola', console.log);
saludo('Hola', alert);