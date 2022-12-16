import { useState, useEffect } from "react";
import styles from "./Tasklist.module.css";
import Tasksmanager from "./Tasksmanager";
import Task from "./Task";

const Tasklist = ({ tasks, onDelete, setTaskslist }) => {
  
  const [allCheckBoxStatus, setAllCheckBoxStatus] = useState(false);

  const updateAllCheckBoxesStatus = () => {
    setAllCheckBoxStatus(!allCheckBoxStatus)
  }

  // *1
 useEffect(() => {
   const allSelected = tasks.map((item) => {
     return {
       ...item,
       selected: allCheckBoxStatus,
     };
   });
   setTaskslist(allSelected)
 }, [allCheckBoxStatus]);

  const singleCheckboxStatus = (id) => {
    setTaskslist((tasks) =>
      tasks.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  }

  if (tasks.length === 0) {
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
      {/* *2 */}
      {/* <Tasksmanager
        onChange={() => setAllCheckBoxStatus(!allCheckBoxStatus)}
        allCheckBoxStatus={allCheckBoxStatus}
      /> */}
      <Tasksmanager
        onChange={updateAllCheckBoxesStatus}
        allCheckBoxStatus={allCheckBoxStatus}
      />
      <ul className={styles["main__section__list"]}>
        {tasks.map((task) => {
          return (
            <Task
              data={task}
              key={task.id}
              onDelete={onDelete}
              onChange={() => singleCheckboxStatus(task.id)}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Tasklist;





// todo: update *1 content
// *1: the [] parameters at the end of the useEffct hook..
// *2: alt syntax for small event handler (/!\ uses parenthesis is important, otherwise it runs an infinite loop)