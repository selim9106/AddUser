import {  useState } from "react";
import styles from "./Task.module.css";

const CheckBox = ({selected, onChange}) => {
  return (
    <input
      type="checkbox"
      className={styles["list__task__checkbox"]}
      aria-label="checkbox"
      checked={ selected }
      onChange={onChange}
      
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
const Task = ({data, onDelete, onChange}) => {
  let { id, title, selected } = data;
  let [taskname, setTaskName] = useState(title);

  const editTask = (e) => {
    setTaskName("test");
  };
  const deleteTask = (e) => {
    onDelete(id);
  };
  
  return (
    <li className={ styles["list__task"] } id={ id }>
      <CheckBox selected={ selected } onChange={onChange} />
      <p className={styles["list__task__text"]}>{taskname}</p>
      <EditBtn onEdit={editTask} />
      <DeleteBtn onDelete={deleteTask} />
    </li>
  );
};
export default Task;
