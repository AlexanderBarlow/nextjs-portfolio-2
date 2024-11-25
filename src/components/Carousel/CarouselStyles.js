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
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
`;

const Gradient = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
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

const Slider = () => {
  return (
    <SliderContainer>
      <Gradient className="left" />
      <Gradient className="right" />
      <SlideTrack>
        {Array.from({ length: 14 }).map((_, index) => (
          <Slide key={index}>
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
              height="100"
              width="250"
              alt=""
            />
          </Slide>
        ))}
      </SlideTrack>
    </SliderContainer>
  );
};

export default Slider;
