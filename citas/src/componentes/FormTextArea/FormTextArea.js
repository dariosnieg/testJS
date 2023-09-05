
function FormTextArea({Etiqueta,nombre, clase, placeHolder}){
    return (
    <>
    <label>{Etiqueta}</label>
    <textarea name={nombre} class={clase} placeholder={placeHolder} value=""></textarea>
    </>
    );
}

export default FormTextArea;

