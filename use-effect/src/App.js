import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [nombre, setNombre] = useState('');
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [contador, setContador] = useState(0);

  const getProds = () => {
    axios('https://dummyjson.com/products')
      .then(
        res => setProductos(res.data.products),
        error => setError(error.message)); 
  }

  useEffect(() => {
       getProds();
  }, []); 
  
  useEffect(() => {
    // Funcion que se ejecuta
    console.log(nombre);
    if (nombre) {
      setProductos(productos.filter(prod => prod.title.toLowerCase().includes(nombre.toLowerCase())));
    } else {
      getProds();
    }
  },[nombre]); //array de dependencias. Si esta vacio, se ejecuta una sola vez cuando se carga el componente. Sino, se le pasa estados que cada vez que cambien, se ejecuta esta funcion

  useEffect(() => {
    document.title = `You clicked ${contador} times`;
  });


  return (
    <>
      <div className="App">
        <input type='text' onChange={(e) => setNombre(e.target.value)}/>
        Tu nombre es: {nombre}
      </div>
      {
        error.length ?
        (<div>
          Error: {error}
        </div>) :
        (
          <div>
              <ul>
                {productos.map(prod => <li>{prod.title}</li>)}
              </ul>
          </div>
        )
      }
      <div>
        <p>You clicked {contador} times</p>
        <button onClick={() => setContador(contador + 1)}>Click me</button>
      </div>

    </>
  );
}

export default App;
