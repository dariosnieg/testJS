
function FormInput({Etiqueta,tipo,nombre, clase, placeHolder}){
    return (
    <>
    <label>{Etiqueta}</label>

    {
        tipo === 'textArea' ? 
            <textarea name={nombre} class={clase} placeholder={placeHolder}></textarea> :
            <input type={tipo} name={nombre} class={clase} placeholder={placeHolder} />

    }
    </>
    );
}

export default FormInput;

/*
var varialbe;
if (algo) {
   variable =  una cosa
} else {
    variable =  otra cosa
}

variable = algo ? unA COSA:¨OTRA COSA

*/