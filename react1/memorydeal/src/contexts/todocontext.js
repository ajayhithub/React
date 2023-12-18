import { createContext,useContext } from "react";

export const todocontext = createContext({
    todos:[{
             id:1,
             todo:"todo msg",
             completed: false,
          }],
    addtodo : (todo) => { },
    updatatodo : (id,todo) => {},
    deletetodo : (id) => {},
    togglecomplete : (id) => {} 
});


export const usetodo = ()=>{
    return useContext(todocontext);
}

export const Todoprovider = todocontext.Provider