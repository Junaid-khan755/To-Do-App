import { useState, useEffect } from "react";
import Tasks from "./Tasks";

function To_Do_App() {
  let [tasks, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  let [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd() {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        data: text,
        completed: false,
      };
      setTask([...tasks, newTodo]);
      setText("");
    }
  }
  function handleInput(e) {
    setText(e.target.value);
  }

  const handleCheckbox = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  function handleRemove(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTask(newTask);
  }

  return (
    <div className="flex justify-center items-center w-full h-lvh bg-olive-400">
      <div className=" items-center gap-4 lg:h-3/4 lg:w-2/5 lg:px-11 w-100 h-120 bg-olive-300 p-5  rounded-2xl overflow-y-auto">
        <header>
          <h1 className="text-3xl font-bold text-center text-cyan-800">
            To-Do App
          </h1>
          <input
            className="border-2 border-cyan-800 mr-6 lg:w-99 w-60 mt-4 lg:mr-4 lg:px-3 lg:py-2 px-2 py-1 focus:outline-0 rounded-lg"
            type="text"
            value={text}
            onChange={(e) => handleInput(e)}
          />
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-lg lg:px-3 py-2 "
            onClick={handleAdd}
          >
            Add To-DO
          </button>
        </header>
        <Tasks
          tasks={tasks}
          handleRemove={handleRemove}
          handleCheckbox={handleCheckbox}
        />
      </div>
    </div>
  );
}

export default To_Do_App;
