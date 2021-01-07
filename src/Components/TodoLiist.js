import React from "react"
import Todo from "./Todo"
import { useSelector } from "react-redux";


 const TodoLiist = () => {
     const list=useSelector((state)=>state.todos);
     const filter=useSelector(state=>state.filter)
     let result=[]
     // showAll or showDone or showNotDone
     
     if(filter==="showAll"){
         result=list
     } else if(filter==="showDone"){
         result=list.filter(todo=>todo.isDone===true)
     } else if(filter==="showNotDone"){
         result=list.filter(todo=>todo.isDone===false)
     }


    return (
       
        <div>
           {
            result.map(el=><Todo key={el.id} el={el}/>)
           }
        </div>
   
    )
}
export default TodoLiist; 