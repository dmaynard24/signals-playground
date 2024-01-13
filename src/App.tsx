import {Footer} from './components/Footer';
import {NavBar} from './components/NavBar';
import {Todos} from './components/Todos';
import {TodosContextProvider} from './context/todos';

export const App = () => {
  return (
    <>
      <TodosContextProvider>
        <NavBar />
        <Todos />
        <Footer />
      </TodosContextProvider>
    </>
  );
};
