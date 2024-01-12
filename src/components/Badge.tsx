import { Todo } from '../types';

export const Badge = ({ todos }: { todos: Todo[] }) => {
  return (
    <span className="bg-shadow text-white dark:bg-aero dark:text-midnight rounded-full w-5 h-5 text-center text-sm inline-block ml-2">
      {todos.filter((todo) => !todo.done).length}
    </span>
  );
};
