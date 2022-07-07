import React from 'react';
import {TodoItems} from "../components/TodoItems"

export const Todos = (props) => {
  let myStyle={
    minheight: "70vh"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-center my-3'> ToDo List</h3>
      
      {props.todos.length===0?"Nothing to show": props.todos.map((todo)=>{
        return(
          <>
          <TodoItems todo={todo} onDelete={props.onDelete}/>
          </>
        )
      })}
      

    
    </div>
  )
}
