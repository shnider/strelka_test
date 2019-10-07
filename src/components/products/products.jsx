import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Grid from './grid/grid';
import List from './list/list';

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const mockData = [
  {
    id: '5d985e7a1904af37527c041a',
    title: 'ex aliquip qui',
    author: 'Shelley Morgan',
    description:
      'Culpa et incididunt nisi consectetur anim veniam enim ad. Esse proident occaecat nostrud in nulla dolor esse velit. Qui do do qui proident adipisicing sunt sint id ipsum consectetur ut quis. Commodo eu aute laboris exercitation culpa tempor aute magna nisi id anim officia reprehenderit sint. Pariatur reprehenderit labore deserunt excepteur anim ut aliqua pariatur esse. Pariatur in quis minim consequat amet ut ipsum nostrud ex voluptate quis amet ex.',
    image: '',
    price: '$11.33',
    topic: 'architecture',
    img: 'https://picsum.photos/id/117/440/415',
  },
  {
    id: '5d985e7a750a46fc32d40d61',
    title: 'laboris consequat qui',
    author: 'Leann Gordon',
    description:
      'Qui cupidatat cupidatat sit quis et id nisi eiusmod ipsum ut est labore laborum. Cupidatat mollit excepteur aliquip pariatur sint quis pariatur enim incididunt incididunt fugiat excepteur reprehenderit. Cupidatat adipisicing tempor consectetur nisi in ea sint. Duis excepteur reprehenderit ea tempor magna veniam ullamco dolore.',
    image: '',
    price: '$17.61',
    topic: 'architecture',
    img: 'https://picsum.photos/id/151/301/526',
  },
  {
    id: '5d985e7af291d706f19df923',
    title: 'magna sint excepteur',
    author: 'Shirley Richmond',
    description:
      'Pariatur esse cupidatat nisi eu. Duis ex proident velit dolore dolor deserunt irure ad aliqua cillum sunt ex. Esse id ad consectetur ullamco eiusmod voluptate nisi ea. Amet laboris nisi excepteur cupidatat.',
    image: '',
    price: '$29.07',
    topic: 'design',
    img: 'https://picsum.photos/id/127/475/450',
  },
];

const Products = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Grid data={mockData} />
        </Route>
        <Route path="/grid">
          <Grid data={mockData} />
        </Route>
        <Route path="/list">
          <List data={mockData} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Products;
