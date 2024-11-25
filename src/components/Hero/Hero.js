import React from "react";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const handleClick = () => {
	// Open the resume in a new tab using the public folder reference
	window.open("/Alexander_Barlow_Resume_2.pdf", "_blank");
};

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
				<Button onClick={handleClick} aria-label="Download Resume">
					Resume
				</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
