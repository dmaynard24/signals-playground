import {useContext} from 'react';
import {TodosContext} from '../context/todos';

export const TodoList = () => {
  const {todos} = useContext(TodosContext);

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
