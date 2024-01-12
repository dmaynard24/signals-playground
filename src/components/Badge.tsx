import { Signal } from '@preact/signals-react';
import { Todo } from '../types';

export const Badge = ({ todos }: { todos: Signal<Todo[]> }) => {
  return (
    <span className="bg-cyan-600 text-white dark:bg-cyan-300 dark:text-slate-700 rounded-full w-5 h-5 text-center text-sm inline-block ml-2">
      {todos.value.filter((todo) => !todo.done).length}
    </span>
  );
};
