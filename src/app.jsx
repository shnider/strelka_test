import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/header/header';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Regular';
    src: local('Helvetica Regular'), local('HelveticaRegular'),
        url('HelveticaRegular.otf') format('otf'));
    font-weight: regular;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Regular', sans-serif;
    font-size: 10px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);

export default App;
