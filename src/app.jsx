import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import './fonts/index.css';

import Header from './components/header/header';
import Filters from './components/filters/filters';
import Products from './components/products/products';

import getProducts from './api/get-products';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Regular', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
  }
`;

const Container = styled.main`
  padding: 0 7.2rem;

  @media screen and (min-width=1200) {
    width: auto;
  }

  @media screen and (min-width=1600) {
    width: 16rem;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header />
        <Row>
          <Col md={2}>
            <Filters />
          </Col>
          <Col mdOffset={1} md={9}>
            <Products mode="list" />
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
