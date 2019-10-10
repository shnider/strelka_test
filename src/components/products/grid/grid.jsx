import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Card from './card';

const Grid = ({ data = [] }) => {
  return (
    <Row between="xs">
      {data.map((product, index) => (
        <Col key={product.id} md={3} mdOffset={index % 4 === 0 ? 0 : 1}>
          <Card data={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Grid;
