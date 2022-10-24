import React,  {useState, useEffect} from 'react';
import Texto from "../styles/texto"
import Boton from "../styles/boton"


const Formulario = () => {
    const[moneda1, setMoneda1] = useState("MXN");
    const[moneda2, setMoneda2] = useState("USD");
    const[valor1, setValor1] = useState(0);
    const[resultado, setResultado] = useState(0);

    useEffect(() => {
        if (moneda1 === "MXN" ){
            if(moneda2 === "USD"){
                setResultado(valor1*0.05)
            }
            if(moneda2 === "EUR"){
                setResultado(valor1*0.051)
            }
            if(moneda2 === "BTC"){
                setResultado(valor1*0.0000026)
            }
            if(moneda2 === "ETH"){
                setResultado(valor1*0.000037)
            }
            if(moneda2 === "DOGE"){
                setResultado(valor1*0.85)
            }
        }
        else if(moneda1 === "USD"){
            if(moneda2 === "MXN"){
                setResultado(valor1*19.93)
            }
            if(moneda2 === "EUR"){
                setResultado(valor1*1.01)
            }
            if(moneda2 === "BTC"){
                setResultado(valor1*0.000052)
            }
            if(moneda2 === "ETH"){
                setResultado(valor1*0.00075)
            }
            if(moneda2 === "DOGE"){
                setResultado(valor1*16.89)
            }
        }
        else if(moneda1 === "EUR"){
            if(moneda2 === "MXN"){
                setResultado(valor1*19.67)
            }
            if(moneda2 === "USD"){
                setResultado(valor1*0.99)
            }
            if(moneda2 === "BTC"){
                setResultado(valor1*0.000051)
            }
            if(moneda2 === "ETH"){
                setResultado(valor1*0.00074)
            }
            if(moneda2 === "DOGE"){
                setResultado(valor1*16.67)
            }
        }
        else if(moneda1 === "BTC"){
            if(moneda2 === "MXN"){
                setResultado(valor1*385282.54)
            }
            if(moneda2 === "USD"){
                setResultado(valor1*19329.80)
            }
            if(moneda2 === "EUR"){
                setResultado(valor1*19580.22)
            }
            if(moneda2 === "ETH"){
                setResultado(valor1*14.44)
            }
            if(moneda2 === "DOGE"){
                setResultado(valor1*326420.79)
            }
        }
        else if(moneda1 === "ETH"){
            if(moneda2 === "MXN"){
                setResultado(valor1*26686.03)
            }
            if(moneda2 === "USD"){
                setResultado(valor1*1338.85)
            }
            if(moneda2 === "EUR"){
                setResultado(valor1*1356.19)
            }
            if(moneda2 === "BTC"){
                setResultado(valor1*0.069)
            }
            if(moneda2 === "DOGE"){
                setResultado(valor1*22609.05)
            }
        }
        else if(moneda1 === "DOGE"){
            if(moneda2 === "MXN"){
                setResultado(valor1*1.18)
            }
            if(moneda2 === "USD"){
                setResultado(valor1*0.059)
            }
            if(moneda2 === "EUR"){
                setResultado(valor1*0.060)
            }
            if(moneda2 === "BTC"){
                setResultado(valor1*0.0000031)
            }
            if(moneda2 === "ETH"){
                setResultado(valor1*0.000044)
            }
        }
      });


    const onChange = (e) => {
        if (e.target.name === "moneda1") {
            //console.log(e.target.value);
            setMoneda1(e.target.value);
        }
        else if (e.target.name === "moneda2") {
            //console.log(e.target.value);
            setMoneda2(e.target.value);
        }
        else if (e.target.name === "valor1") {
            //console.log(e.target.value);
            setValor1(e.target.value);
        }
    }

    return ( 
        <form action="">
        <Texto alinear="left" color="maroon" tamaño="1.5rem"> Moneda 1: {moneda1} </Texto>
        <Texto alinear="left" color="maroon" tamaño="1.5rem"> Moneda 2: {moneda2} </Texto>
        <Texto alinear="left" color="blue" tamaño="1.5rem"> Valor : {valor1} </Texto>
        <Texto alinear="left" color="purple" tamaño="1.5rem"> Resultado: {resultado} </Texto>

        <div>
            <div>
                <input 
                    type="number"  
                    name="valor1" 
                    id="valor1"
                    value={valor1}
                    onChange={onChange}
                    >
                </input>
            </div>
            <Texto alinear="left" tamaño="0.8 rem"> Moneda 1 </Texto>
            <div>
                <select id="moneda1" name="moneda1"  value={moneda1} onChange={onChange}>
                    <option value="MXN">MXN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="DOGE">DOGE</option>
                </select>
            </div>
        </div>
        <div>
            <Texto alinear="left" tamaño="0.8 rem"> Moneda 1 </Texto>
            <div>
                <select id="moneda2" name="moneda2" value={moneda2} onChange={onChange}>
                    <option value="MXN">MXN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="DOGE">DOGE</option>
                </select>
            </div>
        </div>
      
    </form>
        
        

     );
}
 
export default Formulario;