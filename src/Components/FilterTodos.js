import React from 'react'
import {useDispatch} from 'react-redux'
import {filterTodos} from '../Redux/Actions/TodoActions'
function FilterTodos() {
    const dispatch=useDispatch()
    // showAll or showDone or showNotDone
    
      
    return (
        <div>
            <button onClick={()=>dispatch(filterTodos("showAll"))}>showAll</button>
           <button onClick={()=>dispatch(filterTodos("showDone"))}>showDone</button>
            <button onClick={()=>dispatch(filterTodos("showNotDone"))}>showNotDone</button>
        </div>
    )
}

export default FilterTodos
