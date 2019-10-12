import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import './fonts/index.css';

import Header from './components/header/header';
import Filters from './components/filters/filters';
import Products from './components/products/products';
import configureStore from './redux/store';

const store = configureStore();

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
    margin: 0 auto;
    width: 16rem;
  }
`;

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <Container>
          <Header />
          <Row between="md">
            <Col md={2}>
              <Filters />
            </Col>
            <Col md={9}>
              <Products />
            </Col>
          </Row>
        </Container>
      </Provider>
    </Router>
  );
};

export default App;
