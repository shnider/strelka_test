import { handleActions } from 'redux-actions';

import { fetchProductsSuccess } from './actions';

const products = handleActions(
  {
    [fetchProductsSuccess]: (_, { payload }) => ({
      data: payload,
    }),
  },
  { data: [] },
);

export default products;
