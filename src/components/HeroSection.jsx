import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { useGlobalContext  } from "../context";

// const HeroSection = ({name,image,btn}) => {

//   const {fname , age} = useGlobalContext();
const HeroSection = () => {

  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className='hero-top-data'> Welcome to </p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>
                We are highly skilled Professionals in Web Development, Digital Marketing and AWS. Everything thing you need to boost your business online.
                </p>
            <Button className='btn contact-me-btn'>
                <NavLink to='./contact'> Contact Now</NavLink>
            </Button>
            </div>
            {/* for image */}
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="OOPS! Image not found" className='.hero-img' />
                </picture>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section` 
    
    padding: 3rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 35%;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 5.5rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 90rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;