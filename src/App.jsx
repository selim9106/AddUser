// import { useState } from 'react'
import './reset.css'
import './App.css'
import Form from './Components/Form';
import Tasklist from './Components/Tasklist';

const initialtasks = [
  {
    id: 1,
    title: "Task1",
    done: false,
  },
  {
    id: 2,
    title: "Task2",
    done: false,
  },
];
function App() {

  // const [taskslist, setTaskslist] = useState(initialtasks);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">To-Do List</h1>
      </header>
      <main className="main">
        <section className="main__section">
          <Form />
          <Tasklist tasks={initialtasks} />
        </section>
      </main>
    </div>
  );
}

export default App
