import './TodoItem.css';

const TodoItem = (props) => {
  const deleteHanler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todoitem">
      <p>{props.children}</p>
      <div>
        <button onClick={deleteHanler}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
