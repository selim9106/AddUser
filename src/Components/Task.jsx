
import { useState } from "react";
import styles from "./Task.module.css";

const Task = (props) => {
  let { id, title } = props.data;
  let [taskname, setTaskName] = useState(title);

  const editHandler = (e) => {
    e.preventDefault();
    console.log("test");
    setTaskName("title")
  }

  return (
    <li className={styles["list__task"]} id={id}>
      <input
        type="checkbox"
        className={styles["list__task__checkbox"]}
        aria-label="checkbox"
      />
      <p className={styles["list__task__text"]}>{taskname}</p>
      <button
        className={`${styles["list__task__btn"]} ${styles["list__task__btn--edit"]}`}>
        Edit
      </button>
      <button
        className={`${styles["list__task__btn"]} ${styles["list__task__btn--delete"]}`}
        onClick={editHandler}>
        Delete
      </button>
    </li>
  );
};
export default Task;
