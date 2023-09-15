import ElementoLista from "../ElementoLista/ElementoLista";

function Listado({todolist, editar, borrar, tachar}){
    return(
        <>  
            <div>
                { todolist.map(todo => 
                    <ElementoLista item={todo} funcEditar={editar} funcBorrar={borrar}
                        estilo={todo.completado ? { 'text-decoration': 'line-through'} : undefined}
                        clase={'list-group-item list-group-item-action taskElement text-decoration-line-through'}
                        funcTachar={tachar}
                    />
                )}      
            </div>
        </>
    );
}

export default Listado;