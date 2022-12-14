import styles from "./Tasklist.module.css";
import Tasksmanager from "./Tasksmanager";
import Task from "./Task";

const Tasklist = (props) => {
  // if (props.items.length === 0) {
  //   return (
  //     <section
  //       className={`${styles["main__section"]} ${styles["main__section--taskslist"]}`}>
  //       <h2 className={styles["main__section__title"]}>No tasks found.</h2>
  //     </section>
  //   );
  // }

  return (
    <section
      className={`${styles["main__section"]} ${styles["main__section--taskslist"]}`}>
      <Tasksmanager />
      <ul className={styles["main__section__list"]}>
        {props.tasks.map((task) => {
          return <Task data={task} key={task.id} />;
        })}
      </ul>
    </section>
  );
};
export default Tasklist;
