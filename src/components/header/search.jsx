import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  margin-right: 3rem;
  font-size: 2.2rem;
  vertical-align: sub;
`;

const StyledInput = styled.input`
  width: 10rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #000;
  font-size: 1.8rem;
  font-family: 'Helvetica Regular';
  margin-bottom: 0.4rem;
`;

const Search = () => (
  <div>
    <Title>ПОИСК</Title>
    <StyledInput />
  </div>
);

export default Search;
