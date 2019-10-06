import React, { useState } from 'react';
import styled from 'styled-components';

import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  &:first-child {
    margin-top: 6rem;
  }
`;

const Title = styled.span`
  font-size: 2.2rem;
  text-transform: uppercase;
`;

const ToggleButton = styled.span`
  cursor: pointer;

  ::after {
    content: ' ';
    display: inline-block;
    width: 1.9rem;
    height: 1.9rem;
    margin: 0.5rem 0 0 0;
    background: url(${props => (props.isOpen ? minus : plus)});
    background-size: cover;
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
