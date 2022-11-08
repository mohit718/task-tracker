import React from "react";
import { FaTimes } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";

export default function Task({ task, deleteTask, toggleReminder }) {
  return (
    <li
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={toggleReminder}>
      <div className="task-header">
        <h4>{task.name}</h4>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={deleteTask}
        />
      </div>
      {task.daytime!=='' &&
      <div className="d-flex">
        <SiGooglecalendar className="icon txt-primary" />
        <p className="txt-12">{task.daytime}</p>
      </div>
      }
    </li>
  );
}
