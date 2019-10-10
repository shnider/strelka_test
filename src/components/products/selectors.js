import { createSelector } from 'reselect';

import { getFilters } from '../filters/selectors';

export const getAllPoducts = state => state.products.data;
export const getOffset = state => state.products.offset;
export const getSliceOfProducts = createSelector(
  getAllPoducts,
  getFilters,
  (allProducts, filters) => {
    const { topic, author } = filters;

    const isFiltred = topic.length || author.length;

    const filtredProducts = isFiltred
      ? allProducts.filter(
          product =>
            topic.includes(product.topic) || author.includes(product.author),
        )
      : allProducts;

    return filtredProducts;
  },
);

export const getFilterOptions = createSelector(
  getAllPoducts,
  allProducts => {
    const filtersOptions = allProducts.reduce(
      ({ topics, authors }, { topic, author }) => ({
        topics: topics.includes(topic) ? topics : [...topics, topic],
        authors: authors.includes(author) ? authors : [...authors, author],
      }),
      { topics: [], authors: [] },
    );

    return filtersOptions;
  },
);
