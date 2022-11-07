import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, toggleReminder }) {
  return tasks.length > 0 ? (
    <div className="container">
      <ul className="tasklist">
        {tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={()=>deleteTask(task.id)} toggleReminder={()=>toggleReminder(task.id)} />
        ))}
      </ul>
    </div>
  ) : (
    <p className="txt-12 txt-center">No task</p>
  );
}

export default TaskList;
