import Boton from "../Boton/Boton";

function ElementoLista({ item, clase, estilo, funcEditar, funcBorrar, funcTachar }) {

    // const tachar = () => {
    //     quitarTarea(idTarea);
    // onclick={tachar}
    // }

    const editar = (id) => {
        funcEditar(id);
    }

    const borrar = (id) => {
        funcBorrar(id);
    }

    const tacharTask = (id) => {
        funcTachar(id);
    }

    return (
        <div>
            <a class={clase} key={item.idTarea} style={estilo} onClick={() => tacharTask(item.id)}>{item.descripcion}</a>
            {/*<Boton clase="" descripcion="Editar" funcion="" identificador="BotonEditar" onClick={editar} /> */}
            {/*<Boton clase="" descripcion="Borrar" funcion="" identificador="BotonBorrar" onClick={borrar}/> */}
            <button id='BotonBorrar' onClick={() => borrar(item.id)}>Editar</button>
            <button id='BotonBorrar' onClick={() => borrar(item.id)}>Borrar</button>

        </div>
    );
}

export default ElementoLista;
