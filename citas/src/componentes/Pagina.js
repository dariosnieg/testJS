//import Bienvenida from './Bienvenida';
//import CartitasContainer from './CartitasContainer';
import Form from './Form/Form';
import Subtitulo from './Subtitulo/Subtitulo';
import Titulo from './Titulo/Titulo';
import Cards from './Cards/Cards';
//import PiePagina from './PiePagina';

function Pagina(){
    return(
        <>
            <Titulo title="ADMINISTRADOR DE PACIENTES"/>
            <div class="container">
                <div class="row">
                    <div class="one-half column">
                        <Subtitulo subtitle="CREAR MI CITA" />  
                        <Form />
                    </div>
                    <div class="one-half column">
                        <Subtitulo subtitle="ADMINISTRA TUS CITAS" />
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pagina;