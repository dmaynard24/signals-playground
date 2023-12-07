import {nanoid} from 'nanoid';

export const createNewTodo = (name: string) => ({
  id: nanoid(),
  name,
  done: false,
});
