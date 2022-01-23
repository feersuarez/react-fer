import {useState} from 'react';
import './App.css';

function App() {
  const[tareas,actualizarTareas] =useState([]);
  const[contador,actualizarContador]=useState(0);
  function anyadirTarea(nuevaTarea){
    //console.log(nuevaTarea);
    actualizarTareas([...tareas,nuevaTarea]);//actualiza las tareas del estado
    actualizarContador(contador+1);
  }
  function eliminarTarea(tarea){
    let index=tareas.indexOf(tarea);
    tareas.splice(index,1);
    actualizarTareas([...tareas]);
  }
  function EditarTarea(tarea){
    let index=tareas.indexOf(tarea);
    let editada=prompt("Edita esta tarea");
    tareas.splice(index,1,editada);
    actualizarTareas([...tareas]);
  }
  return (

    <div className="App">

      <h1>LISTA DE TAREAS(EJEMPLO REACT)</h1>
      <p>Has añadido {contador} tareas en total...Animo!</p>
      <input type="text" id="nuevaTarea"></input>
      <button onClick={()=>anyadirTarea(document.getElementById("nuevaTarea").value)}>Añadir tarea</button>
      {
        tareas.map(tarea=>
          <div className="tarea">
            <li key={tarea}>{tarea}</li>
            <p onClick={()=>EditarTarea(tarea)}>modificar</p>
            <p onClick={()=>eliminarTarea(tarea)}>eliminar</p>
          </div>
          )
      }
      <p>{contador-tareas.length} de {contador} tareas terminadas</p>
    </div>
  );
}

export default App;