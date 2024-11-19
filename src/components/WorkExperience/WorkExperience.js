import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './WorkExperienceStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Work Experience</SectionTitle>
    <SectionText>
      My professional experience in web and app development is limited to volunteer work.
      However, my professional experience is still pushing me to be my best.
    </SectionText>
    <List>
      <ListItem>
        <h1>
            Manager
        </h1>
        <ListContainer>
          <ListTitle>Chick-fil-a</ListTitle>
          <ListTitle>2021-Current</ListTitle>
          <ListParagraph>
            Started as a team member, then team lead and then manager.
            Work closely with Operator and Kitchen Director to develop and
            incorporate new training plans. Also achieved highest QIV Score as
            well as highest ECO Score.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <h1>
            Web Developer
        </h1>
        <ListContainer>
          <ListTitle>OrcaSound</ListTitle>
          <ListTitle>2023-Current</ListTitle>
          <ListParagraph>
            As a volunteer Web Developer, I communicate weekly with senior staff
            to recommend new or feature changes. I also use provided wireframes
            to implement features.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <h1>
            Seafood Associate
        </h1>
        <ListContainer>
          <ListTitle>Giant/ Martin's</ListTitle>
          <ListTitle>2019-2020</ListTitle>
          <ListParagraph>
            I worked closely with store management to insure adequate
            advertisement and sales. Main tasks were to stock, sell and advertise
            seafood products. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
