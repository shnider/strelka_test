import { createSelector } from 'reselect';

import { getFilters } from '../filters/selectors';
import { getSeacrhInput } from '../header/search/selectors';

export const getAllPoducts = state => state.products.data;
export const getOffset = state => state.products.offset;
export const getProducts = createSelector(
  getAllPoducts,
  getFilters,
  getSeacrhInput,
  (allProducts, filters, searchInput) => {
    const { topic, author } = filters;

    const isFiltred = topic.length || author.length;

    const isSearch = searchInput !== '';

    const filtredProducts = isFiltred
      ? allProducts.filter(
          product =>
            topic.includes(product.topic) || author.includes(product.author),
        )
      : allProducts;

    const searchedProducts = isSearch
      ? filtredProducts.filter(product =>
          product.title.includes(searchInput.toLowerCase()),
        )
      : filtredProducts;

    return searchedProducts;
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
