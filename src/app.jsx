import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import Header from './components/header/header';
import Filters from './components/filters/filters';
import Products from './components/products/products';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Regular';
    font-weight: regular;
    src: local('Helvetica Regular'), local('HelveticaRegular'),
      url('./fonts/helvetica-regular.woff') format('woff'));
      url('./fonts/helvetica-regular.otf') format('otf'));
  }

  @font-face {
    font-family: 'Helvetica Light';
    font-weight: regular;
    src: local('Helvetica Light'), local('HelveticaLight'),
      url('./fonts/helvetica-light.woff') format('woff'));
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'),
      url('./fonts/roboto-mono-regular.woff2') format('woff2'),
      url('./fonts/roboto-mono-regular.woff') format('woff')
  }

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

const App = () => (
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

export default App;
