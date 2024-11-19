import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Phi Theta Kappa', text: 'Honors Society'},
  { number: 'NSLS', text: 'The National Society of Leadership and Success', },
  { number: 'Chick-fil-a', text: 'Highest QIV Score and Higheset ECO Labs Score.', },
  { number: 'Education', text: 'Associates Degree, Bachelors Degree and Masters Degree', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{`${card.number}`}</BoxText>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
