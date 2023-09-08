import Cita from "../Cita/Cita";


function Cards({citas,quitarCita}){
    return(
        <>
             { citas.map(cita => <Cita nombre={cita.mascota} dueno={cita.propietario} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas} clase="button elimnar u-full-width" idcita={cita.id} quitarCita={quitarCita}/>) }      
        </>
    );
}

export default Cards;