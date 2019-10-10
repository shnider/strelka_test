import React from 'react';
import { useSelector } from 'react-redux';

import Filter from './filter';
import { getFilterOptions } from '../products/selectors';

const Filters = () => {
  const { topics, authors } = useSelector(getFilterOptions);

  return (
    <>
      <Filter category="ТЕМА" id="topic" options={topics} />
      <Filter category="АВТОР" id="author" options={authors} />
    </>
  );
};

export default Filters;
