const agregarTask = document.getElementById("agregarTask");

var arrayTask = [];
var objeto = {};

function agregoElementoArray(task){
    arrayTask.push(task);
}

function eliminoElementoArray(posicion){
    arrayTask.pop();
}

agregarTask.addEventListener('click', () => {
    var newTask = document.getElementById('task');
    //agregarNewTask();
        objeto = {};
        objeto.task = newTask.value;
        objeto.timeStamp = Date.now();
        objeto.timeDelete = '';
        console.log(objeto);
        agregoElementoArray(objeto);
    
        borroListado();
        cargarTaskList();        
        borroInput();
        //resetListado();
    
});

function borroInput(){
    document.getElementById('task').value = "";
    console.log('borro input');
    document.getElementById('task').focus();
};


function cargarTaskList(){
    var elementoCreado = "";
    console.log('entro a cargarTaskList');
    arrayTask.forEach(element => {
        console.log('Elemento:' + element.task);
        elementoCreado = document.createElement("a");
        elementoCreado.setAttribute('class', 'list-group-item list-group-item-action taskElement text-decoration-line-through');
        
        if(element.tachado){
            elementoCreado.style.textDecoration = 'line-through';
        }
        
        elementoCreado.onClick = () => {
            element.tachado=!element.tachado;
            if(element.tachado){
                element.timeDelete = Date.now();
            }else{
                element.timeDelete = undefined;
            }
            borroListado();
            cargarTaskList();
        };

        //elementoCreado.addEventListener('mouseover', showTaskDate); 

        elementoCreado.innerHTML = element.task;
        document.getElementById('listadoTask').appendChild(elementoCreado);
    });    
}

/*function updateTask(){
    var task = document.getElementById('a');
    var s = document.createElement('s');
    s.innerHTML = task.task;
    document.getElementById('a') = '';
    document.getElementById('a').appendChild(s);
}*/

function resetListado(){
    borroListado();
    arrayTask = [];
    document.getElementById('task').focus();   
}

function borroListado(){
    var Lista = document.getElementById('listadoTask');

    while (Lista.hasChildNodes()) {
        console.log('Borro:' + Lista.firstChild.value);
        Lista.removeChild(Lista.firstChild);
    }
    if(Lista.hasChildNodes()==false){
        console.log('No hay mas elementos en la lista');
    }
}