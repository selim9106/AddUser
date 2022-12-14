import styles from './Form.module.css';

const Form = () => {
  return (
      
          <form className={ styles["main__section__form"] }>
              <label htmlFor="addtasl" className={styles["form__label"]}>Add Task:</label> 
              <input type="text" className={styles["form__input"]} aria-label="text input" id="addtask" name="addtask" />
              <button className={styles["form__btn"]}>Add</button>
          </form>
    
  )
}
export default Form