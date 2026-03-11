function Tasks({ tasks, handleRemove, handleCheckbox }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          //
          className="flex justify-between mt-4 lg:px-4"
        >
          {/* CHECKBOX */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckbox(task.id)}
          />

          {/* TEXT */}
          <p
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed && "gray",
            }}
            className="px-6 flex-1 break-all"
          >
            {task.data}
          </p>

          {/* {Edit Button}
          <button
            className="bg-green-500 px-4 h-8 rounded-lg mr-3 "
            onClick={() => handleEdit(task.id)}
          >
            Edit
          </button> */}

          {/* REMOVE BUTTON */}
          <button
            className="bg-red-500 text-white px-2 h-8 py-1 rounded-lg "
            onClick={() => handleRemove(task.id)}
          >
            Remove
          </button>
        </li>
      ))}
      <div></div>
    </ul>
  );
}

export default Tasks;
