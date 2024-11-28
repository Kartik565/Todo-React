import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {toast} from "react-toastify"

function Todoform({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please fill input", {
        autoClose: 2000,
      } )
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  const [title, setTitle] = useState("");
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="todoForm">
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          className="todoForm_input"
        />

        <button type="submit" className="todoForm_btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default Todoform;
