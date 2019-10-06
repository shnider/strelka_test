import React from 'react';

import Filter from './filter';

const Filters = () => {
  return ['Тема', 'Автор'].map(category => (
    <Filter key={category} category={category} />
  ));
};

export default Filters;
