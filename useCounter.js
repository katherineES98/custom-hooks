import { useState } from "react"
//initialValue sera ingresado por el usuario y si no l epasa nada entonces lo iniciaremos con 10y ese le pasaremos el customhook

export const useCounter=(initialValue=10)=>{
   /**
    * al pasarle ala funcion value=1 y incrementar el valor o decrementar 
    * me dice object object pero porque ?
    * si nosotros tenemos un objeto const obj={} y le damos obj.toString()--- da object object
    * un object object significa la prepresentacion tostring de un objecto
    */

//*pero poque no dice object object recordemos que estamos mandando el evento como primer elemento a mi funcion de incrementar antes funcionaba porque a la funcion no le mandamos nada como paramentros pero ahora si\
//*value recibiendo todo el evento onclick recordems que e el onlick recoibiremos el  evento con la funcion de flecha es lo que estoy mandando pero obviamente eso no  qiero porque el event no me interesa pero si me intresa mandarle el valor de dos a incrementar
//*cuando yo llame incrementar mandare el 2

const [counter, setCounter] = useState(initialValue)

const increment=(value=1)=>{
  setCounter(counter +value )
}

const decrement=(value=1)=>{
  setCounter(counter - value)
}

const reset=()=>{
   setCounter(initialValue)
}

   //enlazar los otones al counter 
     return{
        //     counter ,//regresando el mismo objeto counter:counter un objeto
        //  }
        //no retornamos nada entonces no hay manera que el valor del counter vaya cambiando de aqui lo vamos a proporcionar
        counter,
        increment,
        decrement,
        reset
    }

    // return[
    //     counter,//retornamos un arreglos entonces la destrucracion que estaos haciendo en counterWith seria con corchetes cuadrado 

    // ]

    // return{
    //     counter ,//regresando el mismo objeto counter:counter un objeto
    //  }
}