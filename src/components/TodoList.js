import './TodoInput.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
