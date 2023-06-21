// for(let i = 0;i<10;i++){
    // console.log(i);
// }


let condition = Number(prompt('1. Ver Saldo\n0. Salir'));

while (condition != 0){
    switch (condition){
        case 1:
            alert('Su saldo es $0.00.-');
            condition=0;
            break;
        default:
            alert('Condición incorrecta, vuelva a elegir.');
            break;
    }
    condition = Number(prompt('1. Ver Saldo\n0. Salir'));
}

let numero = Number(prompt('Ingrese un numero'));
let contador = 0;

while (numero != 0 && contador < 3){
    if (numero == 1){
        contador++;
    }else{
        contador = 0;
    }
    if (contador == 3){
        break;
    }
    console.log(numero, contador);

    numero = Number(prompt('Ingrese un numero'));
}

numero = Number(prompt('Ingrese un numero'));

do{
    if (numero == 1){
        contador++;
    }else{
        contador = 0;
    }
    if (contador == 3){
        break;
    }
    console.log(numero, contador);

    numero = Number(prompt('Ingrese un numero'));
} while (numero != 0)