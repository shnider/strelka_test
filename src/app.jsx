import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import Header from './components/header/header';
import Filters from './components/filters/filters';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Regular';
    src: local('Helvetica Regular'), local('HelveticaRegular'),
        url('HelveticaRegular.otf') format('otf'));
    font-weight: regular;
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

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Row>
      <Col md={3}>
        <Filters />
      </Col>
    </Row>
  </>
);

export default App;
