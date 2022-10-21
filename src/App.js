import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const dummyItem = [
  { id: 1, item: 'Learn Js' },
  { id: 2, item: 'Learn React' },
  { id: 3, item: 'Run' },
];

function App() {
  console.log(dummyItem);
  return (
    <div>
      <h1>Todo App</h1>
      <div className="todo">
        <section className="todo__form">
          <TodoInput />
        </section>
        <section className="todo__list">
          <TodoList todoList={dummyItem} />
        </section>
      </div>
    </div>
  );
}

export default App;
