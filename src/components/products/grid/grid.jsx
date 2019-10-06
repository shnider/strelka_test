import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Card from './card';

const Grid = ({ data = [] }) => {
  return (
    <Row between="xs">
      {data.map(product => (
        <Col key={product.id} md={3}>
          <Card data={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Grid;
