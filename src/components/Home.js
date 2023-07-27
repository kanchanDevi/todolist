import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [todoEdit, setTodoEdit] = useState(-1);

  const addItem = () => {
    if (input.trim() !== "") {
      if (todoEdit === -1) {
        setTodo((prevTodos) => [...prevTodos, input]);
      } else {
    
        setTodo((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos[todoEdit] = input;
          return updatedTodos;
        });
        setTodoEdit(-1); 
      }
      setInput(""); 
    }
  };

  const deleteItem = (index) => {
    setTodo((prevTodos) => {
      const updatedTodo = [...prevTodos];
      updatedTodo.splice(index, 1);
      return updatedTodo;
    });
  };

  const editItem = (index) => {
    setTodoEdit(index);
    setInput(todo[index]); 
  };

  return (
    <>
    <div className="container p-5">
      <h1 className="text-3xl font-bold">TODO LIST</h1>
      <input
        type="text"
        value={input}
        className="w-50 border rounded m-5 p-2 outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={addItem} className="bg-blue-900 p-2 rounded text-yellow-50">
        {todoEdit === -1 ? "Add" : "Save"}
      </button>
      <ul className="flex flex-col items-center">
        {todo.map((item, index) => (
          <li key={index} className=" flex m-2">
           
           <input type="text" value={item} className="w-10/12 outline-lime-200 mr-2 text-xl p-2 capitalize " />
            <button onClick={() => editItem(index)} className="bg-yellow-400 p-2 rounded text-gray-700 mr-2">Edit</button>
            <button onClick={() => deleteItem(index)} className="bg-red-600 p-2 rounded text-gray-700">Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Home;
