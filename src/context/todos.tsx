import {Signal, signal} from '@preact/signals-react';
import {PropsWithChildren, createContext} from 'react';
import {DEFAULT_TODOS} from '../constants';
import {Todo} from '../types';

type TodosContextType = {
  todos: Signal<Todo[]>;
};

const DEFAULT_TODOS_CONTEXT: TodosContextType = {
  todos: signal(DEFAULT_TODOS),
};

export const TodosContext = createContext(DEFAULT_TODOS_CONTEXT);

export const TodosContextProvider: React.FC<PropsWithChildren> = ({children}) => (
  <TodosContext.Provider value={DEFAULT_TODOS_CONTEXT}>{children}</TodosContext.Provider>
);
