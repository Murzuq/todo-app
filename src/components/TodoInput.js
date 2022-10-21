import { useState } from 'react';
import './TodoInput.css';

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const todoInputChangeHandler = (event) => {
    console.log(event.target.value);

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredValue);

    props.addTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="todo-input">
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
