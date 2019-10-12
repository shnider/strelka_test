import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

const Grid = ({ data = [] }) => {
  return data.map(product => <Card key={product.id} data={product} />);
};

Grid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      img: PropTypes.string,
    }).isRequired,
  ),
};

export default Grid;
