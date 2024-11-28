import React, { useState } from "react";
import Todoform from "./todoform";
import Todos from "./Todos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [todos , setTodos] = useState([
    {id:1, title:"Learn Guitar" , completed: false},
    {id : 2, title: "Learn React" , completed : true},
    {id : 3, title : "Find good watlz in Am" , completed : false }
  ])

  const addTodo = (newTodo)=>{
      setTodos((currentState)=>{
          return [...currentState , newTodo]
      })  
  }

  const removeTodo = (id)=>{
    setTodos((currentState)=>(
      currentState.filter((todo)=>{
        return id !== todo.id
    })
  ))
  }


  const toggleCompleted = (id)=>{
    setTodos((currrentState)=>{
      return currrentState.map((todo)=>{
        if(todo.id === id){
          return {...todo , completed: !todo.completed}
        }
        else {
          return todo
        }
      })
    })
    
  }

  return (
    <div className="container">
      <ToastContainer/>
      <h1 className="main_title">Todo List</h1>
      <Todoform addTodo = {addTodo}/>
      <Todos todos={todos} toggleCompleted= {toggleCompleted} removeTodo = {removeTodo} />

    </div>
  );
}

export default App;
