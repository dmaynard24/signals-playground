import {Badge} from './Badge';

export const NavBar = () => {
  return (
    <nav className="flex justify-between pb-4 mb-6 border-b-slate-300 dark:border-b-white border-opacity-30 border-b-2">
      <strong>📝 MY TODO APP</strong>
      <div className="flex gap-6">
        <a role="button" className="text-cyan-600 dark:text-cyan-300 flex items-baseline">
          <span>List</span>
          <Badge />
        </a>
        <a role="button" className="text-cyan-600 dark:text-cyan-300">
          Account
        </a>
      </div>
    </nav>
  );
};
