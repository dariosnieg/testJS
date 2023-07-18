let respuesta = document.getElementById('respuesta');
let lista = document.getElementById('tiposDolar');
let fotoPerfil = document.getElementById('fotoPerfil');

const traerDataTxt = () => {
    fetch('data.txt') // devuelve una promesa, objeto con una propiedad .then()
        .then(res => res.text()) // recibe como parámetro la respuesta del fetch
        .then(texto => {
            respuesta.innerHTML = texto;
            mostrarData(texto);
        });
};

const mostrarData = mensaje => alert(mensaje);

const traerDataApi = () => {
    fetch('https://randomuser.me/api/') // devuelve una promesa, objeto con una propiedad .then()
        .then(res => res.json()) // recibe como parámetro la respuesta del fetch
        .then(usuario => {
            respuesta.innerHTML = `Hola querido ${usuario.results[0].name.title} ${usuario.results[0].name.first} ${usuario.results[0].name.last}`;
            fotoPerfil.src = usuario.results[0].picture.large;
            //mostrarData(usuario);
        });
};


const traerDataDolarApi = () => {
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales') 
    .then(res => res.json()) // recibe como parámetro la respuesta del fetch
    .then(precios => {            
        precios.forEach(precio => {
                let tipoLi = document.createElement('li');
                tipoLi.innerHTML= `${precio.casa.nombre}: ${precio.casa.compra} - ${precio.casa.venta}`;
                console.log(precio);
                lista.appendChild(tipoLi);
            });

            //mostrarData(usuario);
        });
};


const traerData=() => {
    //traerDataTxt();
    //traerDataApi();
    borroListado();
    traerDataDolarApi();
}

function borroListado(){
    var Lista = document.getElementById('tiposDolar');

    if (Lista){
        while (Lista.hasChildNodes()) {
            console.log('Borro:' + Lista.firstChild.value);
            Lista.removeChild(Lista.firstChild);
        }
    }
    // if(Lista.hasChildNodes()==false){
    //     console.log('No hay mas elementos en la lista');
    // }
}