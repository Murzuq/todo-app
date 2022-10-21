import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  console.log(props.todoList);
  return (
    <div className="todolist">
      <ul>
        {props.todoList.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} onDelete={props.onDeleteItem}>
            {todo.item}
          </TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
