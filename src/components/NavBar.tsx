export const NavBar = () => {
  return (
    <nav className="flex justify-between pb-4 mb-6 border-b-slate-300 dark:border-b-violet border-opacity-30 border-b-2">
      <strong>📝 MY TODO APP</strong>
      <div className="flex gap-6">
        <a role="button" className="text-shadow dark:text-aero flex items-baseline">
          <span>List</span>
          {/* <Badge todos={todos} /> */}
        </a>
        <a role="button" className="text-shadow dark:text-aero">
          Account
        </a>
      </div>
    </nav>
  );
};
