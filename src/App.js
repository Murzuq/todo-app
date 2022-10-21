import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <div className="todo">
        <section className="todo__form">
          <TodoInput />
        </section>
        <section className="todo__list">TodoList</section>
      </div>
    </div>
  );
}

export default App;
