import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  function onSave(task) {
    task.id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleReminder(id) {
    console.log(id);
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isReminder: !task.isReminder } : task
      )
    );
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks])
  

  return (
    <div className="card">
      <Header showForm={showForm} onAdd={() => setShowForm(!showForm)} />
      <AddForm showForm={showForm} onSave={onSave} />
      <div className="hr" />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
