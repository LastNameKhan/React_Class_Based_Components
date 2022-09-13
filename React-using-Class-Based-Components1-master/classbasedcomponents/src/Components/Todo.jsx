import React, { useEffect, useState } from "react";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const saveInfo = () => {
    //call api to save this information in backend
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: {
          "content-type":"application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
        setTodos([...todos, data]);
        setNewTodo("")
    })
  };
  useEffect(() => {
    fetch("http://localhost:3005/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  },[]);
  return (
    <div>
      Todos
      <div>
        <div>
          <input
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
          />
          <button onClick={saveInfo}>+</button>
        </div>
        {todos.map((todo) => ( 
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

export default Todos;