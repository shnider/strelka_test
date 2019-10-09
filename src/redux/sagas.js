import { fork, all } from 'redux-saga/effects';

import watchForProductsRequest from '../components/products/saga';

export default function* root() {
  yield all([fork(watchForProductsRequest)]);
}
