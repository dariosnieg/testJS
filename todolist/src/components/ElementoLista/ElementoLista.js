import { useState } from "react";
import Boton from "../Boton/Boton";



function ElementoLista({ item, clase, estilo, funcEditar, funcBorrar, funcTachar }) {
    const [editMode, setEditMode] = useState(false);
    const [texto, setTexto] = useState("");

    // const tachar = () => {
    //     quitarTarea(idTarea);
    // onclick={tachar}
    // }

    const editar = (id) => {
        setEditMode(true);
        //funcEditar(id);
    }

    const cancelar = () => {
        setEditMode(false);
    }

    const borrar = (id) => {
        funcBorrar(id);
    }

    const tacharTask = (id) => {
        funcTachar(id);
    }

    const grabar = (id) => {
        funcEditar(id, texto);
        cancelar();
    }

    return (

        <div>

        {
            !editMode ? 
            (
                <>
                <a class={clase} key={item.idTarea} style={estilo} onClick={() => tacharTask(item.id)}>{item.descripcion}</a>
                <Boton clase="btn btn-primary" descripcion="Editar" identificador="BotonEdita" funcion={() => editar(item.id)} />
                <Boton clase="btn btn-danger" descripcion="Borrar" identificador="BotonBorrar" funcion={() => borrar(item.id)} />
                </> 
            ) :
            (
                <>
                <input defaultValue={item.descripcion} onChange={(e) => setTexto(e.target.value)}/>
                <Boton clase="btn btn-warning" descripcion="Grabar" identificador="BotonGrabar" funcion={() =>  grabar(item.id)} />
                <Boton clase="btn btn-default" descripcion="Cancelar" identificador="BotonCancelar" funcion={() => cancelar(item.id)} />
                </>
            )

        }            
                {/*<Boton clase="" descripcion="Editar" funcion="" identificador="BotonEditar" onClick={() => borrar(item.id)} /> */}
                {/*<Boton clase="" descripcion="Borrar" funcion="" identificador="BotonBorrar" onClick={borrar}/> */}
                
        </div>
    );
}

export default ElementoLista;
