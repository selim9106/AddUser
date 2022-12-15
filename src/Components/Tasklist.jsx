import { useState } from "react";
import styles from "./Tasklist.module.css";
import Tasksmanager from "./Tasksmanager";
import Task from "./Task";

const Tasklist = (props) => {
  // const getAllTasksStatus = (e) => {
  //   props.task.map((task)=> console.log(task.selected))
  // }
  // const [allCheckBoxStatus, setAllCheckBoxStatus] = useState(getAllTasksStatus)

  const selectAllTasks = (e) => {
    props.tasks.map((task) => console.log(task.selected));
  };

  if (props.tasks.length === 0) {
    return (
      <section
        className={`${styles["main__section"]} ${styles["main__section--taskslist"]}`}>
        <h2 className={styles["main__section__title"]}>No tasks found.</h2>
      </section>
    );
  }

  
  return (
    <section
      className={`${styles["main__section"]} ${styles["main__section--taskslist"]}`}>
      <Tasksmanager onSelectAll={selectAllTasks} />
      <ul className={styles["main__section__list"]}>
        {props.tasks.map((task) => {
          return (
            <Task
              data={task}
              key={task.id}
              onDelete={ props.onDelete }
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Tasklist;
