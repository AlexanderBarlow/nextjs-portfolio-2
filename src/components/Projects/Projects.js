import React, { useState } from "react";
import {
  BlogCard,
  CardInfo,
  CardContent,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          const isExpanded = expandedCards[i];

          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <CardContent>
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo expanded={isExpanded}>{p.description}</CardInfo>
                <UtilityList>
                  <ExternalLinks as="button" onClick={() => toggleCard(i)}>
                    {isExpanded ? "Show Less" : "Read More"}
                  </ExternalLinks>
                </UtilityList>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {p.tags.map((t, idx) => (
                      <Tag key={idx}>{t}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.visit}>Code</ExternalLinks>
                  <ExternalLinks href={p.source}>Source</ExternalLinks>
                </UtilityList>
              </CardContent>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
