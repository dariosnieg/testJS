//import Bienvenida from './Bienvenida';
//import CartitasContainer from './CartitasContainer';
import Form from './Form/Form';
import Subtitulo from './Subtitulo/Subtitulo';
import Titulo from './Titulo/Titulo';
import Cards from './Cards/Cards';
import { useState } from 'react';
//import PiePagina from './PiePagina';

function Pagina(){
    const [citas, setCitas] = useState([]);

    const agrearCita = (cita) => {
        setCitas([
            ...citas,
            cita
        ])
    }

    const quitarCita = (id) => {
        setCitas(citas.filter(cita => cita.id !== id))
    }

    return(
        <>
        {JSON.stringify(citas)}
            <Titulo title="ADMINISTRADOR DE PACIENTES"/>
            <div class="container">
                <div class="row">
                    <div class="one-half column">
                        <Subtitulo subtitle="CREAR MI CITA" />  
                        <Form agrearCita={agrearCita} />
                    </div>
                    <div class="one-half column">
                        <Subtitulo subtitle="ADMINISTRA TUS CITAS" />
                        <Cards citas={citas} quitarCita={quitarCita}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pagina;