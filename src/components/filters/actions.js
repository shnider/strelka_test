import { createAction } from 'redux-actions';

export const setFilter = createAction('SET_FILTER', (id, filter) => ({
  id,
  filter,
}));

export const clearFilter = createAction('CLEAR_FILTER', (id, filter) => ({
  id,
  filter,
}));
