import styled, { keyframes } from "styled-components";

// Define the shimmering animation
const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const ShimmerGradientText = styled.h1`
	background: ${({ theme }) => theme.colors.gradientText};
	background-size: 200% 200%; /* To allow the animation effect */
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	display: inline-block;
	font-size: ${({ size }) => size || "2rem"};
	font-weight: 700;
	text-align: center;
	animation: ${shimmer} 3s linear infinite; /* Smooth, continuous shimmer */
`;
