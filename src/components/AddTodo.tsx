import {FormEvent, useContext, useState} from 'react';
import {TodosContext} from '../context/todos';
import {createNewTodo} from '../utils';

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const {todos} = useContext(TodosContext);

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
          className="flex-grow rounded-md px-4 mr-2 text-midnight"
          autoFocus
        />
        <button
          type="submit"
          disabled={newTodo.trim().length === 0}
          className="py-1 px-4 bg-aero text-midnight last:rounded-md disabled:text-opacity-60"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};
