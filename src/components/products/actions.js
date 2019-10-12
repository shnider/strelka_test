import { createAction } from 'redux-actions';

export const fetchProductsRequest = createAction('FETCH_PRODUCTS_REQUEST');
export const fetchProductsSuccess = createAction('FETCH_PRODUCTS_SUCCESS');
export const fetchProductsFailure = createAction('FETCH_PRODUCTS_FAILURE');
