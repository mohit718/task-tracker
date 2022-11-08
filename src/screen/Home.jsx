import React from "react";
import AddForm from "../components/AddForm";
import TaskList from "../components/TaskList";

export default function Home({showForm, onSave, tasks, deleteTask, toggleReminder}) {
  return (
    <div className="screen">
      <AddForm showForm={showForm} onSave={onSave} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      />
    </div>
  );
}
