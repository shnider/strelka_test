import { createAction } from 'redux-actions';

export const setIntialFilters = createAction(
  'SET_INITIAL_FILTERS',
  initFilters => initFilters,
);

export const setFilter = createAction('SET_FILTER', (id, filter) => ({
  id,
  filter,
}));

export const clearFilter = createAction('CLEAR_FILTER', (id, filter) => ({
  id,
  filter,
}));
