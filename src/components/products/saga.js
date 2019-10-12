import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsRequest, fetchProductsSuccess } from './actions';
import getProducts from '../../api/get-products';

const { type: PRODUCTS_REQUEST } = fetchProductsRequest();

function* fetchProducts() {
  const data = yield call(getProducts);

  yield put(fetchProductsSuccess(data));
}

export default function* watchForProductsRequest() {
  yield takeLatest(PRODUCTS_REQUEST, fetchProducts);
}
