import { useState } from "react";
import "./reset.css";
import "./App.css";
import Form from "./Components/Form";
import Tasklist from "./Components/Tasklist";

const initialtasks = [
  {
    id: 1,
    title: "Task1",
    selected: true,
  },
  {
    id: 2,
    title: "Task2",
    selected: false,
  },
];
function App() {
  const [taskslist, setTaskslist] = useState(initialtasks);

  const deleteHandler = (id) => {
    const filteredTasks = taskslist.filter((task) => task.id !== id);
    setTaskslist(filteredTasks);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">To-Do List</h1>
      </header>
      <main className="main">
        <section className="main__section">
          <Form />
          <Tasklist tasks={taskslist} onDelete={deleteHandler} />
        </section>
      </main>
    </div>
  );
}

export default App;
