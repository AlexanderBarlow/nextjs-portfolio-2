import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  height: fit;
  width: 100%;
  background-image: url('https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent; 
  position: relative; /* To allow for other content */
  margin-left: 50px;
`;

const BackgroundAnimation = () => (
  <BackgroundDiv>
    {/* Additional content can go here */}
  </BackgroundDiv>
);

export default BackgroundAnimation;
