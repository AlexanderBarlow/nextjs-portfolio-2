import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Alex Barlow <br />
          Web Developer
        </SectionTitle>
        <SectionText>
        I use all things JavaScript to bring your ideas to the web. 
        </SectionText>
        <Button onClick={props.handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;