import React from "react";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/images/portf.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  position: relative;
  margin-left: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundAnimation = () => (
  <BackgroundDiv>{/* Additional content can go here */}</BackgroundDiv>
);

export default BackgroundAnimation;
