const boton = document.querySelector('#btn-promedio');
const botonMejorMateria=document.querySelector('#btn-mejornota')
const matematica = document.querySelector('#txtMatematica');

matematica.addEventListener('keypress', event => {
    const mat = document.getElementById('txtMatematica');
    const divmat = document.getElementById('divMatematica');
    if (matematica.value.length>0){
        if(1 > Number(matematica.value) || 10 < Number(matematica.value)){
            divmat.setAttribute('class', 'form-group has-error has-feedback');
            document.getElementById('okMat').style.display='none';
            document.getElementById('errorMat').style.display='block';
        }else{
            divmat.setAttribute('class', 'form-group has-success has-feedback');
            document.getElementById('okMat').style.display='block';
            document.getElementById('errorMat').style.display='none';
        }
    }else{
        divmat.setAttribute('class', 'form-group has-feedback');
        document.getElementById('okMat').style.display='none';
        document.getElementById('errorMat').style.display='none';
    }
});

const ingles = document.querySelector('#txtIngles');
ingles.addEventListener('keypress', event => {
    const ingles = document.getElementById('txtIngles');
    const divingles = document.getElementById('divIngles');
    if (ingles.value.length>0){
        if(1 > Number(ingles.value) || 10 < Number(ingles.value)){
            divingles.setAttribute('class', 'form-group has-error has-feedback');
            document.getElementById('okIngles').style.display='none';
            document.getElementById('errorIngles').style.display='block';
        }else{
            divingles.setAttribute('class', 'form-group has-success has-feedback');
            document.getElementById('okIngles').style.display='block';
            document.getElementById('errorIngles').style.display='none';
        }
    }else{
        divingles.setAttribute('class', 'form-group has-feedback');
        document.getElementById('okIngles').style.display='none';
        document.getElementById('errorIngles').style.display='none';
    }
});
const lengua = document.querySelector('#txtLengua');
lengua.addEventListener('keypress', event => {
    const lengua = document.getElementById('txtLengua');
    const divlengua = document.getElementById('divLengua');
    if (lengua.value.length>0){
        if(1 > Number(lengua.value) || 10 < Number(lengua.value)){
            divlengua.setAttribute('class', 'form-group has-error has-feedback');
            document.getElementById('okLengua').style.display='none';
            document.getElementById('errorLengua').style.display='block';
        }else{
            divlengua.setAttribute('class', 'form-group has-success has-feedback');
            document.getElementById('okLengua').style.display='block';
            document.getElementById('errorLengua').style.display='none';
        }
    }else{
        divlengua.setAttribute('class', 'form-group has-feedback');
        document.getElementById('okLengua').style.display='none';
        document.getElementById('errorLengua').style.display='none';
    }
});

boton.addEventListener('click', () => {

    let calcular=false;
    if (matematica.value.length == 0){
        alert("Completar la nota de matemática");
        matematica.focus();
    }else if (lengua.value.length == 0){
        alert("Completar la nota de Lengua");
        lengua.focus();
    }else if (ingles.value.length == 0){
        alert("Completar la nota de Inglés");
        ingles.focus();
    }else{
        if (!(matematica.value >= 1 && matematica.value <= 10)){
            alert("Nota incorrecta!");
            matematica.focus();
        }
        else if (!(lengua.value >= 1 && lengua.value <= 10)){
            alert("Nota incorrecta!");
            lengua.focus();
        }
        else if (!(ingles.value >= 1 && ingles.value <= 10)){
            alert("Nota incorrecta!");
            ingles.focus();
        }
        calcular=true;
    }

    if(calcular){
        const notafinal = Number(matematica.value) + Number(lengua.value) + Number(ingles.value);
        const promedio = Number(notafinal) / 3;
        console.log(promedio);
        const resultado = document.getElementById('resultado');
        resultado.style.display='block';
        resultado.innerHTML= 'Promedio: ' + promedio;
        if(promedio>=6){
            resultado.style.color='green';
        }else{
            resultado.style.color='red';
        }
    }
});

botonMejorMateria.addEventListener('click', () => {

    let calcular=false;
    if (matematica.value.length == 0){
        alert("Completar la nota de matemática");
        matematica.focus();
    }else if (lengua.value.length == 0){
        alert("Completar la nota de Lengua");
        lengua.focus();
    }else if (ingles.value.length == 0){
        alert("Completar la nota de Inglés");
        ingles.focus();
    }else{
        if (!(matematica.value >= 1 && matematica.value <= 10)){
            alert("Nota incorrecta!");
            matematica.focus();
        }
        else if (!(lengua.value >= 1 && lengua.value <= 10)){
            alert("Nota incorrecta!");
            lengua.focus();
        }
        else if (!(ingles.value >= 1 && ingles.value <= 10)){
            alert("Nota incorrecta!");
            ingles.focus();
        }
        calcular=true;
    }

    if(calcular){
        let mejorMateria = "";
        let notaMat=Number(matematica.value);
        let notaLen=Number(lengua.value);
        let notaIng=Number(ingles.value);
        
        if (notaMat > notaLen){
            if(notaMat > notaIng){
                mejorMateria = "Matemática";
            }
        }else if (notaIng>notaLen){
            mejorMateria = "Inglés";
        }else if (notaLen>notaIng){
            mejorMateria = "Lengua";
        }

        if(mejorMateria.length==0){            

            if((notaIng==notaMat)&&(notaIng==notaLen)){
                mejorMateria = "Matemática - Inglés - Lengua";
            }else if(notaIng==notaLen){
                mejorMateria = "Inglés - Lengua";
            }else if(notaMat==notaLen){
                mejorMateria = "Matemática - Lengua";
            }else{
                mejorMateria = "";
            }
        }

        if(!(mejorMateria.length > 0 && Number(matematica.value)>=6)){
            mejorMateria="Ninguna, y sos un burro!";
        }
        console.log(mejorMateria);
        const mejor = document.getElementById('mejorMateria');
        mejor.style.display='block';
        mejor.innerHTML= 'Mejor materia: ' + mejorMateria;
        mejor.style.color='blue';

    }
});



const reset = document.getElementById('reset');
reset.addEventListener('click', () =>{
    
    document.getElementById('okLengua').style.display='none';
    document.getElementById('errorLengua').style.display='none';
    document.getElementById('okIngles').style.display='none';
    document.getElementById('errorIngles').style.display='none';
    document.getElementById('okMat').style.display='none';
    document.getElementById('errorMat').style.display='none';
    document.getElementById('resultado').style.display='none';
    document.getElementById('mejorMateria').style.display='none';

    matematica.focus();
});