import { fork, all } from 'redux-saga/effects';

import watchForProductsRequest from '../components/products/saga';
import watchForSearchInput from '../components/header/search/saga';

export default function* root() {
  yield all([fork(watchForProductsRequest), fork(watchForSearchInput)]);
}
