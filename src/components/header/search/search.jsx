import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { changeInputValue } from './actions';

const Title = styled.span`
  margin-right: 3rem;
  font-size: 2.2rem;
  vertical-align: bottom;
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

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>ПОИСК</Title>
      <StyledInput
        onChange={({ target: { value } }) => dispatch(changeInputValue(value))}
      />
    </div>
  );
};

export default Search;
