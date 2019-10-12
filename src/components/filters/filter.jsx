import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setFilter, clearFilter } from './actions';
import { getFilters } from './selectors';

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

const Filter = ({ category, id, options = [] }) => {
  const dispatch = useDispatch();

  const filters = useSelector(getFilters)[id] || [];

  const [isOpen, setIsOpen] = useState(filters.length !== 0);

  useEffect(() => {
    if (filters.length > 0) setIsOpen(true);
  }, [filters]);

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
        options.map(filter => (
          <Option key={filter}>
            <input
              checked={filters.includes(filter)}
              type="checkbox"
              onChange={({ target: { checked } }) => {
                dispatch(
                  checked ? setFilter(id, filter) : clearFilter(id, filter),
                );
              }}
            />
            {filter}
          </Option>
        ))}
    </>
  );
};

Filter.propTypes = {
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string),
};

Filter.defaultProps = {
  options: [],
};

export default Filter;
