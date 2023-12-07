import * as React from 'react';
import {nanoid} from 'nanoid';

const createNewTodo = (name: string) => ({
  id: nanoid(),
  name,
  done: false,
});
const DEFAULT_TODOS = ['Learn Signals', 'Walk the Dog', 'Pay Rent'].map(createNewTodo);

export const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODOS);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload

    setTodos([...todos, createNewTodo(newTodo)]);
  };

  const toggleTodo = (todoId: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <label className="block mb-2">What needs to be done?</label>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="New todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-grow rounded-md px-4 mr-2 text-slate-900"
            autoFocus
          />
          <button
            type="submit"
            disabled={newTodo.trim().length === 0}
            className="py-1 px-4 bg-cyan-300 text-slate-700 last:rounded-full disabled:opacity-60"
          >
            Add Todo
          </button>
        </div>
      </form>
      <h2 className="mb-2">Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="mb-1">
          <label>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} /> {todo.name}
          </label>
        </div>
      ))}
    </>
  );
};
