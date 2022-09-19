import { useEffect, useState } from "react";

//el url que la persona me va a perdir para llamrlo
export const useFetch = (url) => {
  const [state, setState] = useState({
    //quiero la data y el producto de la peticion
    //un isloading para ver cuando estoy cargando o no
    data: null, // LA DATA 
    isLoading: true,//SI ESTA CARGANDO
    hasError: null,//SI HAY UN ERROR 
  });

  const getFetch = async () => {

    setState({
        ...state,
        isLoading:true
    })
    //cuando ya se haga este procedimiento se vuelva establecer y llame el setStete que esta abajo y se restable el islOADING EN FALSE 
    const resp = await fetch(url);
    const data = await resp.json();
    //cuando tenemos la repsuesta y esta todo bien vamos a mandar llamar el seState, sabemos que si mando un setState de forma de objeto sabemos
    //que tenemos que mandar todas la propiedades
    //console.log(data);
    setState({
      //la data se la pasamos que es la que tenemos pero la data de aqui es la misma que le pasamos en el usestate arriba asi  que no es necesario poner data:data porque es la misma solo se deja como data
      data,
      isLoading: false,
      hasError: null, //porque n hay ningun error por eso null
    });
  };

  //crear la logica con un hook viene algo genial
  //yopuedo saber cuando estoy cargando cuando hay cambios cuando se tiene cuando se requiere el control absoluto tambien
  //le puedo decir a mi componente de react cuando volvere a dibujar
  //en este caso me creare un useState

  //cada ves que la url ca,bie se va a llamar el useEfect porque se lo mandamos en los []
  //*estas no se puede poner async pprque estas espera una funcion pura que me sirva hacer limpiza no una promesa

  useEffect(() => {
    getFetch();
  }, [url]);
//COMO QUIERO LADATA , EL ISLOADING Y HAS ERROR PARA PASARLO AL MULTIPLE CUSTOM ENTONCES UNA MANERA SENCILLA ES PSARA EL STATE EN EL RETURN pero seria algo complicado 
//porque me tocaria ir a ver como esta arriba entonces mejor se haria de otra forma 
//return state;

  return {
     //devolvere al stete y a las mismas propiedades 
     //arece redundante pero si el dia de manana quier expandirlo es mejor asi 
     data: state.data,
     isLoading: state.isLoading,
     hasError:state.hasError,
  }
};
