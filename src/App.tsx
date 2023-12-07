import {useState} from 'react';
import {Footer} from './components/Footer';
import {NavBar} from './components/NavBar';
import {TodoList} from './components/TodoList';
import {DEFAULT_TODOS} from './constants';

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODOS);

  return (
    <>
      <NavBar todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer />
    </>
  );
}

export default App;
