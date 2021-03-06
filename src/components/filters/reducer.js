import { handleActions } from 'redux-actions';

import { setFilter, setIntialFilters, clearFilter } from './actions';

const filters = handleActions(
  {
    [setIntialFilters]: (_, { payload: initState }) => initState,
    [setFilter]: (state, { payload: { id, filter } }) => ({
      ...state,
      [id]: state[id] ? [...state[id], filter] : [filter],
    }),
    [clearFilter]: (state, { payload: { id, filter } }) => ({
      ...state,
      [id]: state[id].filter(f => f !== filter),
    }),
  },
  {
    topic: [],
    author: [],
  },
);

export default filters;
