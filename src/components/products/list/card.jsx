import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import plus from '../../../assets/plus.svg';

const Wrapper = styled.section`
  display: flex;
  &:hover {
    background: rgba(255, 246, 152, 0.1);
    mix-blend-mode: normal;
    opacity: 0.7;
  }
`;

const Content = styled.div`
  flex-grow: 0;
  flex-basis: 42%;
`;

const Image = styled.img`
  padding: 3.8rem 10rem 7.5rem 3.8rem;
  width: 118px;
  height: 176px;
  object-fit: cover;
`;

const Title = styled.h4`
  margin-top: 3.4rem;
  font-family: 'Roboro Mono';
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3rem;
  letter-spacing: 0.35px;
  text-transform: uppercase;
`;

const Author = styled.p`
  margin: 1.2rem 0 0 0;
  font-family: 'Helvetica Light';
  font-size: 2rem;
  line-height: 2.4rem;
`;

const Description = styled.p`
  margin: 2.5rem 0 0 0;
  font-family: 'Helvetica Regular';
  font-size: 1.5rem;
  line-height: 1.8rem;
`;

const PriceWrapper = styled.div`
  flex-grow: 1;
`;

const Price = styled.p`
  margin: 0;
  padding: 10.2rem 0 0 18.4rem;
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

const Card = ({ data: { title, author, description, price, img: imgURL } }) => (
  <Wrapper>
    <Image src={imgURL} alt={title} />
    <Content>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Description>{description}</Description>
    </Content>
    <PriceWrapper>
      <Price>{price}</Price>
    </PriceWrapper>
  </Wrapper>
);

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Card;
