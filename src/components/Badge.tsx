import {useContext} from 'react';
import {TodosContext} from '../context/todos';

export const Badge = () => {
  const {todos} = useContext(TodosContext);

  return (
    <span className="bg-aero text-midnight rounded-full w-5 h-5 text-center text-sm inline-block ml-2">
      {todos.value.filter((todo) => !todo.done).length}
    </span>
  );
};
