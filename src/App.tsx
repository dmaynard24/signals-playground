import { useState } from 'react';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Todos } from './components/Todos';
import { DEFAULT_TODOS } from './constants';

export const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODOS);

  return (
    <>
      <NavBar />
      <Todos todos={todos} setTodos={setTodos} />
      <Footer />
    </>
  );
};
