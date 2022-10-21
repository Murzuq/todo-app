import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <li className="todoitem">
      <p>Learn React</p>
      <div>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
