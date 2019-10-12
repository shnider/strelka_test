import { createSelector } from 'reselect';

import { getFilters } from '../filters/selectors';
import { getSeacrhInput } from '../header/search/selectors';

export const getAllPoducts = state => state.products.data;
export const getProducts = createSelector(
  getAllPoducts,
  getFilters,
  getSeacrhInput,
  (allProducts, filters, searchInput) => {
    const filterList = Object.keys(filters);

    const { topic, author } = filters;

    const isFiltred = filterList.some(filter => filters[filter].length);

    const isSearch = searchInput !== '';

    const filtredProducts = isFiltred
      ? allProducts.filter(
          product =>
            (topic.includes(product.topic) || !topic.length) &&
            (author.includes(product.author) || !author.length),
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
