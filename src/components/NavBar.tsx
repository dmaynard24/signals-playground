import * as React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between pb-4 mb-6 border-b-white border-opacity-30 border-b-2">
      <strong>MY TODO APP</strong>
      <div className="flex gap-6">
        <a role="button" className="text-cyan-300 flex items-baseline">
          <span>List</span>
          <span className="bg-cyan-300 text-slate-700 rounded-full w-5 h-5 text-center text-sm inline-block ml-2">
            3
          </span>
        </a>
        <a role="button" className="text-cyan-300">
          Account
        </a>
      </div>
    </nav>
  );
};
