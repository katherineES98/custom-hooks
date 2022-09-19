import { useEffect, useReducer } from "react";
//import { TodoAdd } from "../08-useReducer/TodoAdd";
import { todoReducer } from "../08-useReducer/todoReducer";


//import React from 'react'


const init = () => {
  //tomr lo que esta en ocalstorage y regresarlo
  //ya la informacion esta persistente ya cuano se recarga la pagina n se borran
  return JSON.parse(localStorage.getItem("todos") || []); // la primera vez es nuelo entonces si es ulo voy a regresar un arreglo vacio
};

export const useTodo = () => {
  //todos.length
//todos.filter(todo=>!todo.done).length

  //const [todos, dispatch] = useReducer(todoReducer, initialState, init); //init inicializa //?me funciono tambien asi pero en el video dice que en el initilStet aun no hay nada por eso lo deja ocmo un arego vacio y no se lo pasa a usetofdo en la funcion 

  const [todos, dispatch] = useReducer(todoReducer, [], init); //init inicializa
  useEffect(() => {
    //* esto hace que este almacenado en el local storage
    //cuando los todo cambia ejecutar este efecto
    //en el localstorge no podemos guardar objetos si no string
    //no hay que importar nada de localstorage porque ya viene integrad
    localStorage.setItem("todos", JSON.stringify(todos)); //pero con esto no significa que permanezca la informacion aun en memoria porque se borra
    // console.log({todos})
  }, [todos]);

  const handleNewTodo = (todo) => {
    //cuanoo se emita un nuevo todo es decir el componene personalizado TodoAdd cuando lo mandemos a llaamr y mande el evento
    //de onNewtodo y mandar a llamar esata funcion de handlenNewTodo

    //* este todo es el payload que quiero mandar

    //* crear nuestra Action es bien volatil pero asi lo trabajara por el momento

    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
    //console.log({ todo }); // no usemos el dipacth ni usar todoreducer hacer mdoificaciones eso no
  };

  //*crearnos una funcion para recibir el id y hacelo con el dispatch
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
 

  return {
   
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,//cuanto hook necesito y lo hago asi de esta manera ventaja de trabajar con unb hook porque tiene toda la logica y iformacionagrupada 
    pendingTodosCount:todos.filter(todo=>!todo.done).length
    
  };
};
