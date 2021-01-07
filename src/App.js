
import React from "react"
import AddToDo from "./Components/AddToDo";
import TodoLiist from "./Components/TodoLiist";
import "./App.css"; 
import FilterTodos from "./Components/FilterTodos";

const App=()=>{

 

  return (
    <div className="App">
     <h1> TO-DO-Redux</h1>
      <AddToDo />
     
      <TodoLiist />
      
      <FilterTodos/>
    </div>
  )
  }
export default App; 