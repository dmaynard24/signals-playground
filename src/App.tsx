import {useSignal} from '@preact/signals-react';
import {Footer} from './components/Footer';
import {NavBar} from './components/NavBar';
import {Todos} from './components/Todos';
import {DEFAULT_TODOS} from './constants';

function App() {
  const todos = useSignal(DEFAULT_TODOS);

  return (
    <>
      <NavBar todos={todos} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
