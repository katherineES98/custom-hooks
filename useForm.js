import { useState } from "react";

/**
 * inicitialForm que al inicio sera un objeto se lo mandaremos esto me ayudara a evitar que alguie mas pueda usar mi orma o bueno para que tenga mas input o valiaciones ect
  osea que podria ser cualquier objeto que queramo mandar en este caso le mando el username , email , y password 

 */



export const useForm = (initialForm={}) => {
  
  /**hook para mantener estados 
  * 
  * para generar un nuevo estado eel unico ue hemos visto el useState
  */
 //lo que se hara es hacer para que podamos cambiar el valor de cualquier input 
/**
 * el initialForm se lo mandare a mi useState ahora mi formState sera igual alo que le mande como argumento n este caso lo que le mandaremos como el objeto 
 * 
 */
 const [formState, setFormState] = useState(initialForm)
   /**destructurar el objeto que le pasamos al usestate 
    * si hacemos un cambio en ste hay qe volver a dibujarlo
    * 
    */
   //const{username, email, password}=formState //borramos esto porque o tiene mucho sentido porque podria haber muchos formualrio pero no excatmente con esta estructura 

   //destructurar el target para extrae el value y name 
  const onInputChange=({target})=>{
  //console.log(event.target.value)//el valor como cambia al poner algo en el imput extre como ese valor 
    //y tambien el name que propoedad esta cambiando si es el username o email esos on las palabras claves para esos dos propiedades del objeto
    const {name, value}=target
    //console.log({name,value})
   setFormState({//cambiar el estado
    //mantener el valor de todos los formulario y siento de property y mantenerla y solo quier cambiar 
    //colo quiero cambiar la que el name este siendo modificada 
    //para eso hay propiedades computada de los bjetos colocando entre llaves cuadradas que la propiedad name establer en el objeto y el valor seria el nuevo value
   ...formState,
   [name]:value // si tenemos una nuev props y se borra ese se pone como una nueva propiedad tengamos cuidado 
})
}

const onResetForm=()=>{
    setFormState(initialForm)
}

    return {
    //exponer al mundo exterior 
    //*parte facil para que en el formWithcustom tengamos el username y los demas sin destructurar y evitarlos el paso ese aqui vamos a destructurar el formstate con opereitor
    ...formState,
    formState,//valor el formulario
    onInputChange,//funcion para cambiar el formulario
    onResetForm
  }
};
