import React, { useState } from 'react'


function Cuadrado() {

    const [color, setColor] = useState("black");
    const [intervalID, setintervalID] = useState(null);

    //Genera el rgb aleatorio
    function generarColorAleatorio() {
        const randomR = Math.ceil(Math.random() * 256);
        const randomG = Math.ceil(Math.random() * 256);
        const randomB = Math.ceil(Math.random() * 256);
        return(
            `rgb(${randomR},${randomG},${randomB})`
        )
    }

    //Actualiza el color cada 1 segundo
    function actualizarColor() {
        const intervalo = setInterval(() => {
            const rgb = generarColorAleatorio();
            setColor(rgb);
        }, 1000);

        //Actualizo el state del intervalo para poder detenerlo en la funcion detenerCambio
        setintervalID(intervalo);
    }

    //Detiene el cambio 
    function detenerCambio() {
        clearInterval(intervalID);
    }

    function dobleClickDetener() {
        clearInterval(intervalID);
    }

  return (
    <div 
        style={{ width: "255px", height:"255px", backgroundColor:color }}
        onMouseOver={actualizarColor} 
        onMouseLeave={detenerCambio}
        onDoubleClick={dobleClickDetener}    
    >

    </div>
  )
}

export default Cuadrado