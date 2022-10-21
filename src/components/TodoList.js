import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div className="todolist">
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
