import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for infinite scrolling
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SliderContainer = styled.div`
  background: #0F1624;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 120px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    height: 100px; /* Reduced height */
  }

  @media (max-width: 480px) {
    height: 80px; /* Even smaller height for very small screens */
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(200px * ${props => props.imageCount * 2}); /* Repeat the images twice for infinite loop */
  animation: ${scroll} 20s linear infinite;

  @media (max-width: 768px) {
    width: calc(150px * ${props => props.imageCount * 2}); /* Adjust width per image size */
  }

  @media (max-width: 480px) {
    width: calc(120px * ${props => props.imageCount * 2}); /* Even smaller width per image */
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  height: 120px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 80px;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 768px) {
    width: 150px; /* Reduced size for images */
    img {
      width: 60px; /* Smaller images */
    }
  }

  @media (max-width: 480px) {
    width: 120px; /* Further reduced size for images */
    img {
      width: 50px; /* Smallest images */
    }
  }
`;

// Updated images array with transparent logos
const images = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // React Logo
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // JavaScript Logo
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', // Node.js Logo
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', // Express.js Logo
  'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', // TypeScript Logo
];

const Slider = () => {
  return (
    <SliderContainer>
      <SlideTrack imageCount={images.length}>
        {images.concat(images).map((src, index) => (
          <Slide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideTrack>
    </SliderContainer>
  );
};

export default Slider;
