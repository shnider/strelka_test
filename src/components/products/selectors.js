import { createSelector } from 'reselect';

export const getAllPoducts = state => state.products.data;
export const getOffset = state => state.products.offset;
export const getSliceOfProducts = createSelector(
  getAllPoducts,
  getOffset,
  (allProducts, offset = 1) => {
    const countOfRequstedProducts = 30 * offset - 1;

    return allProducts.slice(countOfRequstedProducts);
  },
);
