function TaskList({ tasks }) {

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span className="status">
            {task.completed ? "Completed" : "Pending"}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
