import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from "./components/Formulario"

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (    
    <>
      <Formulario/>
    </>

  );
}
 
export default App;

root.render(<App/>);
