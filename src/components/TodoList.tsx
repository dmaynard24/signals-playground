import { Dispatch, SetStateAction } from 'react';
import { Todo } from '../types';

export const TodoList = ({ todos, setTodos }: { todos: Todo[]; setTodos: Dispatch<SetStateAction<Todo[]>> }) => {
  const toggleTodo = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <>
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
