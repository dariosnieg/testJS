import FormInput from "../FormInput/FormInput";
import Boton from "../Boton/Boton";
function Form({agrearCita}){

    const agregar = (e) => {
        e.preventDefault();
        let cita = {
            mascota: e.target.mascota.value,
            propietario: e.target.propietario.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value,
            id: Date.now()
        }

        agrearCita(cita);

        e.target.mascota.value = "";
        e.target.propietario.value = "";
        e.target.fecha.value="";
        e.target.hora.value="";
        e.target.sintomas.value = "";
      }

    return (
        <form onSubmit={agregar}>
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
