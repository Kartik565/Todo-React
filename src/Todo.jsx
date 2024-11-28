import React from 'react'
import { ImCross } from "react-icons/im";

function Todo({id, completed, title , toggleCompleted , removeTodo}) {
  return (

    < div className='todo'>
      <div className="todo_title">
      <input type="checkbox" checked={completed}  onChange={()=>{
          toggleCompleted(id)
        }}/>
        <p className={`${completed?"completed":""}`}>{title}</p>

      </div>
        
      <div className="cross_btn" onClick={()=>{removeTodo(id)}}>
        <ImCross/>
      </div>
        
    </div>
  )
}

export default Todo
