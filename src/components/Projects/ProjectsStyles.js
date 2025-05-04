import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;

  @media (min-width: 768px) {
    width: 40%;
    height: 100%;
    min-height: 160px;
    border-radius: 10px;
  }
`;


export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-width: 0;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;


export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 16px;
  padding: 1rem;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  transition: transform 0.3s ease;

  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    gap: 1rem;
  }
`;


export const TitleContent = styled.div`
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2.2rem" : "1.8rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? "1.5rem" : "1.3rem")};
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1rem;
  color: #f0f0f0;
  font-size: 1.3rem;
  line-height: 1.5;
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "unset" : 5)};
  max-height: ${({ expanded }) => (expanded ? "none" : "7.5em")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    -webkit-line-clamp: ${({ expanded }) => (expanded ? "unset" : 4)};
    max-height: ${({ expanded }) => (expanded ? "none" : "6em")};
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.6rem;
  padding: 0.8rem 1.4rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const TagList = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
  padding: 0.5rem 0;
  margin-top: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;


export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.4rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.4rem 0.9rem;
  border-radius: 10px;
  white-space: nowrap;
`;
