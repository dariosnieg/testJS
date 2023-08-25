import Bienvenida from './Bienvenida';
import CartitasContainer from './CartitasContainer';
import Navbar from './Navbar';
import PiePagina from './PiePagina';

function Pagina(){
    return(
        <div>
            <Navbar />
            <Bienvenida />
            <CartitasContainer />
            <PiePagina />
        </div>
    );
}

export default Pagina;