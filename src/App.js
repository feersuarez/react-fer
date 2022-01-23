import {useState} from 'react';
import './App.css';

function App() {
  const[deseos,actualizarDeseos] =useState([]);
  const[contador,actualizarContador]=useState(0);
  function anyadirDeseo(nuevoDeseo){
    //console.log(nuevaTarea);
    actualizarDeseos([...deseos,nuevoDeseo]);
    actualizarContador(contador+1);
  }
  function eliminarDeseo(deseo){
    let index=deseos.indexOf(deseo);
    deseos.splice(index,1);
    actualizarDeseos([...deseos]);
  }
  function EditarDeseo(deseo){
    let index=deseos.indexOf(deseo);
    let editada=prompt("Edita este deseo");
    deseos.splice(index,1,editada);
    actualizarDeseos([...deseos]);
  }
  return (

    <div className="App">

      <h1 id="titulo">LISTA DE LOS DESEOS</h1>
      <p>Has añadido {contador} deseos en total. Todos se cumplirán❤️.</p>
      <input type="text" id="nuevoDeseo"></input>
      <button onClick={()=>anyadirDeseo(document.getElementById("nuevoDeseo").value)}>Añadir deseo</button>
      {
        deseos.map(deseo=>
          <div className="deseo">
            <li key={deseo} id="deseo">{deseo}</li>
            <p onClick={()=>EditarDeseo(deseo)} class="borrarModificar">modificar</p>
            <p onClick={()=>eliminarDeseo(deseo)} class="borrarModificar">eliminar</p>
            <p>--------------------------------</p>
          </div>
          )
      }
      <p>{contador-deseos.length} de {contador} deseos cumplidos</p>
    </div>
  );
}

export default App;