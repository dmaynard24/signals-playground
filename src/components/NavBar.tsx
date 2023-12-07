import * as React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between pb-4 mb-6 border-b-slate-300 dark:border-b-white border-opacity-30 border-b-2">
      <strong>MY TODO APP</strong>
      <div className="flex gap-6">
        <a role="button" className="text-cyan-600 dark:text-cyan-300 flex items-baseline">
          <span>List</span>
          <span className="bg-cyan-600 text-white dark:bg-cyan-300 dark:text-slate-700 rounded-full w-5 h-5 text-center text-sm inline-block ml-2">
            3
          </span>
        </a>
        <a role="button" className="text-cyan-600 dark:text-cyan-300">
          Account
        </a>
      </div>
    </nav>
  );
};
