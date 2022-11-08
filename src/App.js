import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import About from "./screen/About";
import Home from "./screen/Home";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(data => setTasks(data));
  }, [tasks]);

  const fetchTasks = async () => {
    return await fetch("http://localhost:3000/tasks").then(res => res.json());
  };

  const fetchTask = async id => {
    return await fetch(`http://localhost:3000/tasks/${id}`).then(res =>
      res.json()
    );
  };

  async function onSave(task) {
    // task.id = Math.floor(Math.random() * 10000) + 1;
    // setTasks([...tasks, task]);
    console.log(task);
    await fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  }

  async function deleteTask(id) {
    // setTasks(tasks.filter(task => task.id !== id));
    await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
  }

  async function toggleReminder(id) {
    let task = await fetchTask(id);
    task = { ...task, reminder: !task.reminder };
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  }

  return (
    <BrowserRouter>
      <div className="card">
        <Header showForm={showForm} onAdd={() => setShowForm(!showForm)} />
        <Routes>
          <Route
            path="/"
            exact
            element = {<Home
                showForm={showForm}
                onSave={onSave}
                tasks={tasks}
                deleteTask={deleteTask}
                toggleReminder={toggleReminder}
            />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
