import logo from './logo.svg';
import './App.css';
import Pagina from './componentes/Pagina';
import { useState } from 'react';

function App() {

  const [citas, setCitas] = useState([]);
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('Default User!!');
  const [nombres, setNombres] = useState([]);
  const sumar = () => {
    setContador(contador + 1);
  }
  const restar = () => {
    setContador(contador - 1);
  }

  const cambiarNombre = (e) => {
    setNombre(e.target.value)
    
  }

  const agregarNombre = () => {
    setNombres([
      ...nombres,
      nombre,
    ]);
  }

  return (
    <>
      <Pagina></Pagina>
      <input type='text' name onKeyUp={cambiarNombre} />
      <button onClick={sumar}>Sumar 1</button>
      <button onClick={restar}>Restar 1</button>
      <button onClick={agregarNombre}>Agregar Nombre</button>
      EL contador es: {contador}
      <p>
        Tu nombre es {nombre}
      </p>
      <div>
        Los nombres son:
        <ul>
          { nombres.map(nomb => <li>{nomb}</li>) }
        </ul>
      </div>
    </>
  );
}

export default App;
