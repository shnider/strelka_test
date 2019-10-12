import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import Filter from './filter';
import { getFilterOptions } from '../products/selectors';
import { getFilters } from './selectors';

const Filters = () => {
  const { topics, authors } = useSelector(getFilterOptions);
  const filters = useSelector(getFilters);

  const { pathname } = useLocation();

  const query = useRef(null);

  query.current = new URLSearchParams();

  query.current.append('topic', filters.topic);
  query.current.append('author', filters.author);

  return (
    <>
      <Redirect to={`${pathname}?${query.current.toString()}`} />
      <Filter category="ТЕМА" id="topic" options={topics} />
      <Filter category="АВТОР" id="author" options={authors} />
    </>
  );
};

export default Filters;
