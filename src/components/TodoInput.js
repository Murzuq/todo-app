import './TodoInput.css';

const TodoInput = (props) => {
  return (
    <form>
      <div className="todo-input">
        {/* <label>Todo</label> */}
        <input type="text" placeholder="Add Todo" />
      </div>
      <button type="button">Add Todo</button>
    </form>
  );
};

export default TodoInput;
