import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, deleteTask, toggleReminder }) {
  return (
    <li className={`task ${task.isReminder ? "reminder" : ""}`} onDoubleClick={toggleReminder}>
      <div className="task-header">
        <h3>{task.name}</h3>
        <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={deleteTask}/>
      </div>
      <p className="txt-12">{task.daytime}</p>
    </li>
  );
}
