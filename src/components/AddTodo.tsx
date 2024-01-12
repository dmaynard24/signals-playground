import { Signal } from '@preact/signals-react';
import { FormEvent, useState } from 'react';
import { Todo } from '../types';
import { createNewTodo } from '../utils';

export const AddTodo = ({ todos }: { todos: Signal<Todo[]> }) => {
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    todos.value = [...todos.value, createNewTodo(newTodo)];
  };

  return (
    <form onSubmit={addTodo}>
      <label className="block mb-2">What needs to be done?</label>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow rounded-md px-4 mr-2 border-slate-300 border dark:border-none text-shadow dark:text-midnight"
          autoFocus
        />
        <button
          type="submit"
          disabled={newTodo.trim().length === 0}
          className="py-1 px-4 bg-shadow text-white dark:bg-aero dark:text-midnight last:rounded-md disabled:text-opacity-60"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};
