//no es una funcion que regresa jsx si no es pura
//el type se le pone el remove per en el payload talves quisieraoms mandar tcompletamete el todo o solo el id del todo
//y siqusieramos mandar el id tratar que todos nuestros reduce trabajen de la misma manera 
export const todoReducer=(inicitialState=[], action)=>{


   switch (action.type) {
    case '[TODO] Add Todo':
       // throw new Error('Action.type= ABC no esta implementada ')//para cuando se llegue a diparar la accion y no hay se maneje el error
       // break;
       //usar el map, filter que regresen un nuevo arreglo pero usamos spret operator para esparciar el arreglo 
       return[...inicitialState,action.payload]
       //esparciendo los elementos del arreglo 
   //si estoy mandando una accion de tipo add todo signifiaria que el action.payload nosotros vamos a tener el nuevo todo 
//es eparlod tendra el todo que yo quiero insertar 
   /**si quiero eliminar tengo que hacer el manejo de un nuevo caso */
   case '[TODO] Remove Todo':

      return  inicitialState.filter(todo=>todo.id!==action.payload)
//escribo el filter regresa un nuevo arreglo , regreso un nuevo todo siempre y cuando e todo.id sea diferente al todo.id que recibo en la funcion que seria el action.payload  
//tranformar un arreglo en otr cosa , regresar un todo porque podria ser otra cosa 
      //todo id es casi igual en el de accion del action.payload el id del todo y lo que se hara es regresar un nuevo todo y con el operador pereito parfa esparcir el todo , si estab tru e va a false 
     //* regresamos un nuevo arreglo con el map y por cada uno de los elemnto de ese arreglo  del todo
   case '[TODO] Toggle Todo':
      return  inicitialState.map(todo=>{
         //* si el todo.id es igual al que estoy mandando al action.payload si es asi cambio el done y si no es asi regreso al mismo todo 
          if( todo.id === action.payload){
            return{
               ...todo,
               done:!todo.done
            }
   
          }
            return todo;
      })
   default:
        return inicitialState
        
   }

}


/*
en ves de poner abc podemos poner cualquier tipo de nombre como add todo , quitar el throw new para retornar algo 
regresar un nuevo state , enveces podria ser el estate un booleano , un arreglo , un string etc 
evita mutar arreglos no usaremos el pushb


*/