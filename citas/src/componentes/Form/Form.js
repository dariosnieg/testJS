import FormInput from "../FormInput/FormInput";
import Boton from "../Boton/Boton";
function Form(){
    return (
    <form>
        <FormInput Etiqueta="Nombre Mascota" tipo="text" nombre="mascota" clase="u-full-width" placeHolder="Nombre Mascota" />
        
        <FormInput Etiqueta="Nombre Dueño" tipo="text" nombre="propietario" clase="u-full-width" placeHolder="Nombre dueño de la mascota" />
        <FormInput Etiqueta="Fecha" tipo="date" nombre="fecha" clase="u-full-width"  />
        <FormInput Etiqueta="hora" tipo="time" nombre="hora" clase="u-full-width"  />
        <FormInput Etiqueta="Sintomas" tipo="textArea" nombre="sintomas" clase="u-full-width"  />
        <Boton tipo="submit" clase="u-full-width button-primary" nombre="Agregar Cita" />
    </form>
        );
}

export default Form;
