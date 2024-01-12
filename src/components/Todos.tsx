import { Signal } from '@preact/signals-react';
import { Todo } from '../types';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = ({ todos }: { todos: Signal<Todo[]> }) => {
  return (
    <>
      <AddTodo todos={todos} />
      <TodoList todos={todos} />
    </>
  );
};
