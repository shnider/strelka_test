import { handleActions } from 'redux-actions';

import { setInputValue } from './actions';

const search = handleActions(
  {
    [setInputValue]: (_, { payload }) => ({
      value: payload,
    }),
  },
  { value: '' },
);

export default search;
