import React from 'react';
import styled from 'styled-components';

import plus from '../../../assets/plus.svg';

const Image = styled.img`
  width: 100%;
  height: 33.5rem;
  object-fit: cover;
`;

const Title = styled.h4`
  margin-top: 3.7rem;
  font-family: 'Roboro Mono';
  font-weight: 400;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-transform: uppercase;
`;

const Author = styled.p`
  margin: 0;
  font-family: 'Helvetica Light';
  font-size: 1.5rem;
  line-height: 1.9rem;
`;

const Price = styled.p`
  margin: 2.4rem 0 0 0;
  font-family: 'Helvetica Light';
  font-size: 1.5rem;
  line-height: 1.9rem;

  ::before {
    content: ' ';
    display: inline-block;
    margin: 0 1.1rem 0.3rem 0;
    width: 1.4rem;
    height: 1.4rem;
    vertical-align: bottom;
    background: url(${plus});
    background-size: cover;
  }
`;

const Card = ({ data: { title, author, price, img: imgURL } }) => (
  <section>
    <Image src={imgURL} alt={title} />
    <Title>{title}</Title>
    <Author>{author}</Author>
    <Price>{price}</Price>
  </section>
);

export default Card;
