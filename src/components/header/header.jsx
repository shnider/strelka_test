import React from 'react';
import styled from 'styled-components';

import Search from './search';
import LayoutSwitch from './layout-switch';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
`;

const Header = () => (
  <Wrapper>
    <Search />
    <LayoutSwitch />
  </Wrapper>
);

export default Header;
