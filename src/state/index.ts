import {DEFAULT_TODOS} from '../constants';
import {signal} from '@preact/signals-react';

export const todos = signal(DEFAULT_TODOS);
