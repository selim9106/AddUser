import { useState } from 'react'
import styles from './Tasksmanager.module.css'

const Tasksmanager = (props) => {
  const [checkboxstatus, setCheckBoxStatus] = useState(false)
  
  const selectAllHandler = () => {
    setCheckBoxStatus(current => !current);
    props.onSelectAll();
  }
  return (
    <details className={styles["main__section__options"]}>
      <div className={styles["options__container"]}>
        <input
          type="checkbox"
          name="selectall"
          id="selectall"
          aria-label="select-all"
          className={ styles["options__input"] }
          onChange={ selectAllHandler }
          checked={ checkboxstatus }
        />
        <label htmlFor="selectall" className={styles["options__label"]}>
          Select all
        </label>
        <button className={styles["options__btn"]}>Delete</button>
      </div>

      <summary className={styles["options__summary"]}>Manage</summary>
    </details>
  );
}
export default Tasksmanager