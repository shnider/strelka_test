import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 3.5rem 0;

  &:first-child {
    margin: 6rem 0 3.5rem 0;
  }
`;

const Title = styled.span`
  font-size: 2.2rem;
  text-transform: uppercase;
`;

const ToggleButton = styled.span`
  cursor: pointer;

  ::after {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: 0.5rem 0 0 0;
    background: url(${props => (props.isOpen ? minus : plus)});
    background-size: cover;
    content: ' ';
  }
`;

const Option = styled.p`
  font-size: 1.8rem;
`;

const Filter = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Title>{category}</Title>
        <ToggleButton
          isOpen={isOpen}
          onClick={() => setIsOpen(prevState => !prevState)}
        />
      </Wrapper>
      {isOpen &&
        ['filter1', 'filter2', 'filter3'].map(filter => (
          <Option key={filter}>
            <input name={filter} type="checkbox" />
            {filter}
          </Option>
        ))}
    </>
  );
};

export default Filter;
