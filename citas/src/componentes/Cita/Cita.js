function Cita({nombre, dueno, fecha, hora, sintomas, clase, idcita, quitarCita}){
    
    const quitar = () => {
    
        quitarCita(idcita);
      }

    return (
        <>
            <div class="cita">
                <p>Mascota: <span>{nombre}</span></p>
                <p>Dueño: <span>{dueno}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
                <p>Sintomas: <span>{sintomas}</span></p>
                <button class={clase} onClick={quitar}>Eliminar ×</button>
            </div>
        </>
    );
}

export default Cita;