import React, { useMemo } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Card from './card';

const Grid = ({ data = [] }) => {
  const converterData = useMemo(
    () =>
      data.reduce((acc, _, ind) => {
        if (ind % 3 === 0) {
          const subSlice = data.slice(ind, ind + 3);

          return [...acc, subSlice];
        }
        return acc;
      }, []),
    [data],
  );

  return converterData.map((row, index) => (
    // eslint-disable-next-line
    <Row between="xs" key={index}>
      {row.map(product => (
        <Col key={product.id} md={3}>
          <Card data={product} />
        </Col>
      ))}
    </Row>
  ));
};

export default Grid;
