import { useState } from 'react';
import styles from './TodoInput.module.css';

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = (event) => {
    console.log(event.target.value);

    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredValue);

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.addTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['todo-input']} ${!isValid && styles.invalid}`}>
        {/* <label>Todo</label> */}
        <input
          type="text"
          placeholder="Add Todo"
          onChange={todoInputChangeHandler}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
