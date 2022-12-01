import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screen/About";
import Home from "./screen/Home";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(data => setTasks(data));
  }, []);

  const fetchTasks = async () => {
    return await fetch(`${ENDPOINT}/tasks`).then(res => res.json());
  };

  const fetchTask = async id => {
    return await fetch(`${ENDPOINT}/tasks/${id}`).then(res =>
      res.json()
    );
  };

  async function saveTask(task) {
    await fetch(`${ENDPOINT}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(
      res => res.ok && res.json().then(task => setTasks([...tasks, task]))
    );
  }

  async function deleteTask(id) {
    await fetch(`${ENDPOINT}/tasks/${id}`, { method: "DELETE" }).then(
      res => res.ok && setTasks(tasks.filter(task => task.id !== id))
    );
  }

  async function toggleReminder(id) {
    let task = await fetchTask(id);
    task = { ...task, reminder: !task.reminder };
    fetch(`${ENDPOINT}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then(res => res.ok && res.json().then(data=>setTasks(tasks.map(task => (task.id === data.id ? data : task)))))
  }

  return (
    <BrowserRouter>
      <div className="card">
        <Header showForm={showForm} onAdd={() => setShowForm(!showForm)} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                showForm={showForm}
                tasks={tasks}
                saveTask={saveTask}
                deleteTask={deleteTask}
                toggleReminder={toggleReminder}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
