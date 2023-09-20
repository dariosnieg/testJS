import Form from "./Form/Form";
import { useState } from 'react';
import Listado from "./Listado/Listado";


function Pagina(){
    const [todolist, setTodolist] = useState([]);
    
    const agregarTarea = (todo) => {
        setTodolist([
            ...todolist,
            todo
        ])
    }

    const quitarTarea = (id) => {
        setTodolist(todolist.filter(todo => todo.id !== id))
    }

    const editarTarea = (id,texto) => {
        //setTodolist(todolist.filter(todo => todo.id !== id))
        let updatedList = []
        updatedList = todolist.map(item => 
            {
              if (item.id == id){
                return {...item, descripcion: texto}; //gets everything that was already in item, and updates "done"
              }
              return item; // else return unmodified item 
            });
        
            setTodolist(updatedList);
    }

    const tacharTarea = (id) => {
        let updatedList = []
        updatedList = todolist.map(item => 
            {
              if (item.id == id){
                return {...item, completado: !item.completado}; //gets everything that was already in item, and updates "done"
              }
              return item; // else return unmodified item 
            });
        
            setTodolist(updatedList);
    }

    return(
        

        <div class="container">
            {JSON.stringify(todolist)}
            <h1>ToDo List Mejorado!!!</h1>
            <Form agregarTarea={agregarTarea}/>
            <Listado todolist={todolist} editar={editarTarea} borrar={quitarTarea} tachar={tacharTarea} />

        </div>
    );
}

export default Pagina;