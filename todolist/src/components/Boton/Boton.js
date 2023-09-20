function Boton({tipo, clase, identificador, funcion, descripcion}){
    return(
        <button type={tipo} class={clase} id={identificador} onClick={funcion}>{descripcion}</button>
    )
}

export default Boton;