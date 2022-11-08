import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(data=>setTasks(data));
  },[tasks]);

  const fetchTasks = async()=>{
    return await fetch('http://localhost:3000/tasks').then(res=>res.json());
  }
  
  const fetchTask = async(id)=>{
    return await fetch(`http://localhost:3000/tasks/${id}`).then(res=>res.json());
  }
  
  async function onSave(task) {
    // task.id = Math.floor(Math.random() * 10000) + 1;
    // setTasks([...tasks, task]);
    console.log(task);
    await fetch(`http://localhost:3000/tasks`,{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(task)});
  }

  async function deleteTask(id) {
    // setTasks(tasks.filter(task => task.id !== id));
    await fetch(`http://localhost:3000/tasks/${id}`,{method:'DELETE'});
  }

  async function toggleReminder(id) {
    let task = await fetchTask(id);
    task = {...task, reminder:!task.reminder};
    await fetch(`http://localhost:3000/tasks/${id}`,{method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(task)});
  }

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
