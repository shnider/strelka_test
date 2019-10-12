import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchProductsRequest } from './actions';
import { getProducts } from './selectors';

import Grid from './grid/grid';
import List from './list/list';

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const Placeholer = styled.div`
  margin: 8rem 0;
  text-align: center;
  font-size: 2.2rem;
`;

const ShowMore = styled.div`
  margin: 4rem 0;
  text-align: center;
  cursor: pointer;
  font-size: 2.2rem;
`;

function useDataSlice(data, limit) {
  const [step, setStep] = useState(1);

  const currentLimit = limit * step;

  const isMoreAvailable = data.length > currentLimit;

  const sliceOfData = isMoreAvailable ? data.slice(0, currentLimit) : data;

  return [isMoreAvailable, sliceOfData, setStep];
}

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
    return () => {};
  }, [dispatch]);

  const data = useSelector(getProducts);

  const [isMoreAvailable, sliceOfData, setStep] = useDataSlice(data, 30);

  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Grid data={sliceOfData} />
        </Route>
        <Route path="/grid">
          <Grid data={sliceOfData} />
        </Route>
        <Route path="/list">
          <List data={sliceOfData} />
        </Route>
      </Switch>
      {!sliceOfData.length && <Placeholer>Ничего не найдено.</Placeholer>}
      {isMoreAvailable && (
        <ShowMore onClick={() => setStep(prevStep => prevStep + 1)}>
          Показать еще
        </ShowMore>
      )}
    </Wrapper>
  );
};

export default Products;
