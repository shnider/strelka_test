import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import styled from 'styled-components';

import { fetchProductsRequest } from './actions';
import { getSliceOfProducts } from './selectors';

import Grid from './grid/grid';
import List from './list/list';

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
    return () => {};
  }, [dispatch]);

  const { getState } = useStore();

  const { filters } = getState();

  console.log(filters);

  const data = useSelector(getSliceOfProducts);

  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Grid data={data} />
        </Route>
        <Route path="/grid">
          <Grid data={data} />
        </Route>
        <Route path="/list">
          <List data={data} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Products;
