import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <li className="todoitem">
      <p>{props.children}</p>
      <div>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
