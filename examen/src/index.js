import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Texto from "./styles/texto"
import Boton from "./styles/boton"

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const[mostrar, mostrarLista] = useState(true);
  const[modificar, modificarLista] = useState(true);
  const[lista, setLista] = useState(["Hola", "Hola", "Hola", "Hola"])


  return (    
    <>
      {mostrar === true ? (
        <>
          <Texto color="maroon" tamaño="2.5rem"> Examen 2 </Texto>
          {lista.map((objeto, i) => <Texto key={i} color="green" tamaño="1.5rem"> {objeto} </Texto>)}
          <Boton onClick={() => mostrarLista(false)} Alinear="center">Modificar lista</Boton>
        </>
      ) : (
        <>
        {modificar === true ? (
            <>
              <Texto color="maroon" tamaño="2.5rem"> Agregar a lista </Texto>
              <Boton onClick={() => modificarLista(false)} Alinear="center">Eliminar de la Lista</Boton>
              <Boton onClick={() => mostrarLista(true)} alinear="center">Mostrar Lista</Boton>
            </>
        ) : (
            <>
              <Texto color="maroon" tamaño="2.5rem"> Eliminar de la Lista </Texto>
              <Boton onClick={() => modificarLista(true)} Alinear="center">Agregar a la Lista</Boton>
              <Boton onClick={() => mostrarLista(true)} alinear="center">Mostrar la Lista</Boton>
            </>
        ) }
        </>
      )}


      

    </>

  );
}
 
export default App;

root.render(<App/>);
