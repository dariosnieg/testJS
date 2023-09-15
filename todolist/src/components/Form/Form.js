import Boton from "../Boton/Boton";
import Input from "../Input/Input";

function Form({agregarTarea}){
    const agregar = (e) => {
        e.preventDefault();
        let tarea = {
            descripcion: e.target.task.value,
            id: Date.now(),
            completado: false
        }

        agregarTarea(tarea);

        e.target.task.value = "";
        
      }

    return(
        <form class="form-inline" onSubmit={agregar}>
            <Input tipo="text" clase="form-control mb-2 mr-sm-2" identificador="task" placeHolder="New Task Item" />
            <Boton tipo="submit" clase="btn btn-primary mb-2" identficador="agregarTask" descripcion="Add Task" />
        </form>
    );
}

export default Form;