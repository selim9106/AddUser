import { useState } from "react";
import styles from "./Task.module.css";

const CheckBox = (props) => {
  const statusHandler = (e) => {
    props.onSelect();
  }
  return (
    <input
      type="checkbox"
      className={styles["list__task__checkbox"]}
      aria-label="checkbox"
      checked={props.checkboxStatus}
      onChange={statusHandler}
    />
  );
}
const EditBtn = (props) => {
  const editHandler = (e) => {
    e.preventDefault();
    props.onEdit();
  };
  return (
    <button
      className={`${styles["list__task__btn"]} ${styles["list__task__btn--edit"]}`}
      onClick={editHandler}>
      Edit
    </button>
  );
};

const DeleteBtn = (props) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    props.onDelete();
  };
  return (
    <button
      className={`${styles["list__task__btn"]} ${styles["list__task__btn--delete"]}`}
      onClick={deleteHandler}>
      Delete
    </button>
  );
};

// *MAIN "Task" COMPONENT
const Task = (props) => {
  let { id, title, selected } = props.data;
  let [taskname, setTaskName] = useState(title);
  const [checkboxstatus, setCheckBoxStatus] = useState(selected);
  // const selectAllTasks = () => { console.log("test") 
  //   // setCheckBoxStatus(true)
  // }

  const updateCheckStatus = () => {
    setCheckBoxStatus((current) => !current);
  };
  const editTask = (e) => {
    setTaskName("test");
  };
  const deleteTask = (e) => {
    props.onDelete(id);
  };
  return (
    <li className={styles["list__task"]} id={id}>
      <CheckBox onSelect={ updateCheckStatus } checkboxStatus={ checkboxstatus }  />
      <p className={styles["list__task__text"]}>{taskname}</p>
      <EditBtn onEdit={editTask} />
      <DeleteBtn onDelete={deleteTask} />
    </li>
  );
};
export default Task;
