import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

function ToDoList() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(savedTasks);
  const [newTask, setNewTask] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { text: newTask, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task, index) => (
          <li
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(index)}
            />
            {task.text}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
