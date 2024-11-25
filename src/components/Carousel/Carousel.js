import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
`;

const SliderContainer = styled.div`
  background: #0F1624; /* Updated background color */
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
`;

const Gradient = styled.div`
  background: linear-gradient(to right, rgba(15, 22, 36, 1) 0%, rgba(15, 22, 36, 0) 100%);
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;

  &.left {
    left: 0;
    top: 0;
  }

  &.right {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(250px * 14);
  animation: ${scroll} 40s linear infinite;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  height: 100px;
  width: 250px;
`;

const images = [
    'https://cdn-images-1.medium.com/max/800/0*8D6u0bP8rQsYI8lW',
    'https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png',
    'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1ph7yc1i1vqqgwpxegw5.png',
    'https://d2ooyrflu7lhqd.cloudfront.net/Express_JS_390db1e6f2.jpeg',
    'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsnvtojs3d9t0qz6fkbya.png'
]

const Slider = () => {
    return (
      <SliderContainer>
        <Gradient className="left" />
        <Gradient className="right" />
        <SlideTrack>
          {images.concat(images).map((src, index) => (
            <Slide key={index}>
              <img src={src} height="100" width="250" alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
        </SlideTrack>
      </SliderContainer>
    );
  };

export default Slider;
