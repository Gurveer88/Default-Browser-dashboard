import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div
      id="TODO"
      className="w-full max-w-lg backdrop-blur-lg bg-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center border border-white"
    >
      <h1 className="text-2xl text-white font-bold">Todo list</h1>

      {/* Input */}
      <div className="w-full flex items-center h-12 mt-4">
        <input
          type="text"
          className="w-9/12 rounded-lg p-4 border border-white"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTask}
          className="w-20 ml-2 bg-white rounded-md h-full hover:bg-gray-500 hover:text-white"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white/70 px-4 py-2 rounded-md"
          >
            <span className="p-2">{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-600 font-bold hover:text-red-800"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;