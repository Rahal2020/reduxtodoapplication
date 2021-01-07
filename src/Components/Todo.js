import React  from 'react'
import Edite from './EditTodo'
import {useDispatch} from "react-redux"
import { complete, delitt } from '../Redux/Actions/TodoActions'


     const Todo = ({el}) => {

      const dispatch = useDispatch();
      const delit=()=>{
      dispatch(delitt(el.id))
      }
      
      const complet=()=>{
        dispatch(complete(el.id))
      }

        return (
            <div className= "task"> 
              <div >
              {(el.isDone) ?
 <p style={{textDecoration:'line-through'}}> {el.text} </p> : <p> {el.text} </p>}</div>
<Edite el={el} />
<button style={{ background: "red" }}onClick={delit}  > Delit </button>
<button style={{ background: "yellow" }}onClick={complet}> Complete </button>
 
</div>
    )
 
    
      }

export default Todo;