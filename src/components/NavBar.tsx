import * as React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between pb-4 mb-6 border-b-slate-200 border-b-2">
      <strong>MY TODO APP</strong>
      <div className="flex gap-4">
        <a role="button" className="text-cyan-300">
          Profile
        </a>
        <a role="button" className="text-cyan-300">
          Settings
        </a>
      </div>
    </nav>
  );
};
