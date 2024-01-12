import { Signal } from '@preact/signals-react';
import { Todo } from '../types';
import { Badge } from './Badge';

export const NavBar = ({ todos }: { todos: Signal<Todo[]> }) => {
  return (
    <nav className="flex justify-between pb-4 mb-6 border-b-violet border-b-2">
      <strong>📝 MY TODO APP</strong>
      <div className="flex gap-6">
        <a role="button" className="text-aero flex items-baseline">
          <span>List</span>
          <Badge todos={todos} />
        </a>
        <a role="button" className="text-aero">
          Account
        </a>
      </div>
    </nav>
  );
};
