import React from 'react';

import Card from './card';

const Grid = ({ data = [] }) => {
  return data.map(product => <Card data={product} />);
};

export default Grid;
