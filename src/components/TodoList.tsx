import {useState, FormEvent} from 'react';
import {createNewTodo} from '../utils';
import {Todo} from '../types';

export const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    setTodos([...todos, createNewTodo(newTodo)]);
  };

  const toggleTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    });
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
            className="flex-grow rounded-md px-4 mr-2 border-slate-300 border dark:border-none text-slate-900"
            autoFocus
          />
          <button
            type="submit"
            disabled={newTodo.trim().length === 0}
            className="py-1 px-4 bg-cyan-600 text-white dark:bg-cyan-300 dark:text-slate-700 last:rounded-full disabled:text-opacity-60"
          >
            Add Todo
          </button>
        </div>
      </form>
      <h2 className="mb-2">Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="mb-1">
          <label>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />{' '}
            <span className={todo.done ? 'line-through' : ''}>{todo.name}</span>
          </label>
        </div>
      ))}
    </>
  );
};
