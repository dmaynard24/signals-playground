import {Signal} from '@preact/signals-react';
import {Todo} from '../types';

export const TodoList = ({todos}: {todos: Signal<Todo[]>}) => {
  const toggleTodo = (todoId: string) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
  };

  return (
    <>
      <h2 className="mb-2">Todo List</h2>
      {todos.value.map((todo) => (
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
