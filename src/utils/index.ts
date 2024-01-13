import {nanoid} from 'nanoid';
import {Todo} from '../types';

export const createNewTodo = (name: string): Todo => ({
  id: nanoid(),
  name,
  done: false,
});
