import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const IconButton = styled.svg`
  fill: ${props => (props.isActive ? '#000' : '#979797')};
  margin-left: 4.2rem;
`;

const LayoutSwitch = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Link to="/grid">
        <IconButton
          isActive={pathname === '/grid'}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="14.4667" height="14.4667" />
          <rect y="16.5332" width="14.4667" height="14.4667" />
          <rect x="16.5332" width="14.4667" height="14.4667" />
          <rect x="16.5332" y="16.5332" width="14.4667" height="14.4667" />
        </IconButton>
      </Link>
      <Link to="/list">
        <IconButton
          isActive={pathname === '/list'}
          width="40"
          height="31"
          fill="#979797"
          viewBox="0 0 40 31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="13.4331" width="4.10526" height="4.13333" />
          <rect width="4.10526" height="4.13333" />
          <rect y="26.8667" width="4.10526" height="4.13333" />
          <path
            d="M8.21094 15.5518L39.0004 15.4485"
            stroke="black"
            strokeLinecap="square"
          />
          <path
            d="M8.21094 2.1182L39.0004 2.01487"
            stroke="black"
            strokeLinecap="square"
          />
          <path
            d="M8.21094 28.9849L39.0004 28.8816"
            stroke="black"
            strokeLinecap="square"
          />
        </IconButton>
      </Link>
    </div>
  );
};

export default LayoutSwitch;
