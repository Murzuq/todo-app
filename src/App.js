import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const dummyItem = [
  { id: 1, item: 'Learn JavaScript' },
  { id: 2, item: 'Learn React' },
  { id: 3, item: 'Street Racing' },
  { id: 4, item: 'Read Book' },
];

function App() {
  const [todoItem, setTodoItem] = useState(dummyItem);
  console.log(todoItem);

  const addTodoHandler = (enteredText) => {
    setTodoItem((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({ id: Math.random().toString(), item: enteredText });
      // updatedTodo.push({ id: Math.random().toString(), item: enteredText });
      return updatedTodo;
    });
  };

  const deleteItemHandler = (itemId) => {
    setTodoItem((prevTodo) => {
      const updatedTodo = prevTodo.filter((item) => item.id !== itemId);
      return updatedTodo;
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div className="todo">
        <section className="todo__form">
          <TodoInput addTodo={addTodoHandler} />
        </section>
        <section className="todo__list">
          <TodoList todoList={todoItem} onDeleteItem={deleteItemHandler} />
        </section>
      </div>
    </div>
  );
}

export default App;
