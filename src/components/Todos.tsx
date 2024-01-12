import { Dispatch, SetStateAction } from 'react';
import { Todo } from '../types';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = ({ todos, setTodos }: { todos: Todo[]; setTodos: Dispatch<SetStateAction<Todo[]>> }) => {
  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};
