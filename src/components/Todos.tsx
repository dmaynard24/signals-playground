import {Signal} from '@preact/signals-react';
import {AddTodo} from './AddTodo';
import {TodoList} from './TodoList';
import {Todo} from '../types';

export const Todos = ({todos}: {todos: Signal<Todo[]>}) => {
  return (
    <>
      <AddTodo todos={todos} />
      <TodoList todos={todos} />
    </>
  );
};
