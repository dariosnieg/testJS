import Cita from "../Cita/Cita";


function Cards(){
    return(

        <>
            <Cita nombre="Nina" dueno="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" clase="button elimnar u-full-width"/>
            <Cita nombre="Sifon" dueno="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho" clase="button elimnar u-full-width"/>
            <Cita nombre="Floki" dueno="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" clase="button elimnar u-full-width"/>      
        </>
    );
}

export default Cards;