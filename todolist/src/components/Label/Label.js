function Label({clase,para,descripcion}){
    return(            
        <label class={clase} for={para}>{descripcion}</label>
    )
}

export default Label;